(() => {
  const MIN_DELAY = 12000;
  const MAX_DELAY = 35000;
  const FIRST_MIN_DELAY = 3000;
  const FIRST_MAX_DELAY = 8000;
  const BALL_SIZE = 36;
  const BALL_RADIUS = 18;
  const RACKET_RADIUS = 22;
  const RACKET_SIZE = 52;
  const RACKET_ROTATION = -35;
  const HIT_COOLDOWN = 200;
  const GRAVITY = 0.26;
  const MAX_SPEED = 18;
  const RACKET_HITS_TO_EXIT = 5;
  const FLOOR_BOUNCE_DAMPING = 0.82;
  const WALL_BOUNCE_DAMPING = 0.88;
  const CEILING_BOUNCE_DAMPING = 0.78;

  let racket = null;
  let activeBall = null;
  let spawnTimer = null;
  let isFirstSpawn = true;
  let racketHeadX = 0;
  let racketHeadY = 0;
  let prevRacketHeadX = 0;
  let prevRacketHeadY = 0;
  let lastHitTime = 0;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function getNavHeight() {
    const value = getComputedStyle(document.documentElement).getPropertyValue('--nav-height');
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 70;
  }

  function getBounds() {
    const top = getNavHeight();
    return {
      left: 0,
      right: window.innerWidth - BALL_SIZE,
      top,
      bottom: window.innerHeight - BALL_SIZE,
    };
  }

  function clampSpeed(vx, vy) {
    const speed = Math.hypot(vx, vy);
    if (speed <= MAX_SPEED) return { vx, vy };
    const scale = MAX_SPEED / speed;
    return { vx: vx * scale, vy: vy * scale };
  }

  function isInteractiveElement(el) {
    if (!el || el === document.body || el === document.documentElement) return false;
    if (el.closest('.tennis-game-racket, .tennis-game-ball')) return false;
    return !!el.closest(
      'a, button, input, select, textarea, label, [onclick], .event-link, .burger, .flyer-close, .event-flyer-thumb, .popup-close'
    );
  }

  function updatePointerMode(clientX, clientY) {
    const target = document.elementFromPoint(clientX, clientY);
    const interactive = isInteractiveElement(target);
    document.documentElement.classList.toggle('tennis-game-pointer', interactive);
  }

  function updateRacketPosition(clientX, clientY) {
    prevRacketHeadX = racketHeadX;
    prevRacketHeadY = racketHeadY;
    racketHeadX = clientX;
    racketHeadY = clientY;

    const x = clientX - RACKET_SIZE / 2;
    const y = clientY - RACKET_SIZE / 2;

    racket.style.transform = `translate(${x}px, ${y}px) rotate(${RACKET_ROTATION}deg)`;
  }

  function createRacket() {
    document.documentElement.classList.add('tennis-game-active');

    racket = document.createElement('img');
    racket.src = 'icons/racket.png';
    racket.className = 'tennis-game-racket';
    racket.alt = '';
    racket.setAttribute('aria-hidden', 'true');
    document.body.appendChild(racket);

    document.addEventListener('pointermove', (event) => {
      updatePointerMode(event.clientX, event.clientY);
      updateRacketPosition(event.clientX, event.clientY);
    });

    updateRacketPosition(window.innerWidth / 2, window.innerHeight / 2);
  }

  function scheduleNextSpawn() {
    if (spawnTimer) clearTimeout(spawnTimer);
    if (document.hidden) return;

    const min = isFirstSpawn ? FIRST_MIN_DELAY : MIN_DELAY;
    const max = isFirstSpawn ? FIRST_MAX_DELAY : MAX_DELAY;
    isFirstSpawn = false;

    spawnTimer = setTimeout(() => {
      spawnTimer = null;
      if (!document.hidden && !activeBall) {
        spawnBall();
      }
      scheduleNextSpawn();
    }, randomBetween(min, max));
  }

  function tryRacketHit(ballState) {
    const now = performance.now();
    if (now - lastHitTime < HIT_COOLDOWN) return false;

    const ballCenterX = ballState.x + BALL_RADIUS;
    const ballCenterY = ballState.y + BALL_RADIUS;
    const dx = ballCenterX - racketHeadX;
    const dy = ballCenterY - racketHeadY;
    const dist = Math.hypot(dx, dy);

    if (dist >= BALL_RADIUS + RACKET_RADIUS) return false;

    lastHitTime = now;

    const nx = dist > 0 ? dx / dist : 1;
    const ny = dist > 0 ? dy / dist : 0;
    const racketVx = racketHeadX - prevRacketHeadX;
    const racketVy = racketHeadY - prevRacketHeadY;
    const dot = ballState.vx * nx + ballState.vy * ny;
    let vx = ballState.vx - 2 * dot * nx;
    let vy = ballState.vy - 2 * dot * ny;

    vx += nx * 3 + racketVx * 0.4;
    vy += ny * 3 + racketVy * 0.4;

    const boosted = clampSpeed(vx * 1.15, vy * 1.15);
    ballState.vx = boosted.vx;
    ballState.vy = boosted.vy;

    const overlap = BALL_RADIUS + RACKET_RADIUS - dist;
    ballState.x += nx * overlap;
    ballState.y += ny * overlap;

    ballState.racketHits += 1;
    if (ballState.racketHits >= RACKET_HITS_TO_EXIT) {
      ballState.readyToExit = true;
    }

    return true;
  }

  function spawnBall() {
    if (activeBall) return;

    const bounds = getBounds();
    const ball = document.createElement('img');
    ball.src = 'icons/tennis.png';
    ball.className = 'tennis-game-ball';
    ball.alt = '';
    ball.setAttribute('aria-hidden', 'true');
    document.body.appendChild(ball);

    const padding = BALL_SIZE + 20;
    const minX = padding;
    const maxX = Math.max(minX, bounds.right - padding);

    const state = {
      x: randomBetween(minX, maxX),
      y: bounds.top + 10,
      vx: randomBetween(-3, 3),
      vy: randomBetween(1, 3),
      racketHits: 0,
      readyToExit: false,
      fading: false,
    };

    let rafId = null;

    function cleanup() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
      ball.remove();
      if (activeBall && activeBall.ball === ball) activeBall = null;
    }

    function fadeOut() {
      if (state.fading) return;
      state.fading = true;
      ball.classList.add('tennis-game-ball--fade');
      setTimeout(cleanup, 400);
    }

    activeBall = { ball, cleanup, state };

    function tick() {
      if (state.fading) return;

      state.vy += GRAVITY;
      state.x += state.vx;
      state.y += state.vy;

      const b = getBounds();
      let hitWall = false;

      if (state.x <= b.left) {
        state.x = b.left;
        state.vx = Math.abs(state.vx) * WALL_BOUNCE_DAMPING;
        hitWall = true;
      } else if (state.x >= b.right) {
        state.x = b.right;
        state.vx = -Math.abs(state.vx) * WALL_BOUNCE_DAMPING;
        hitWall = true;
      }

      if (state.y <= b.top) {
        state.y = b.top;
        state.vy = Math.abs(state.vy) * CEILING_BOUNCE_DAMPING;
        hitWall = true;
      } else if (state.y >= b.bottom) {
        state.y = b.bottom;
        state.vy = -Math.abs(state.vy) * FLOOR_BOUNCE_DAMPING;
        state.vx *= 0.96;
        hitWall = true;
      }

      const clamped = clampSpeed(state.vx, state.vy);
      state.vx = clamped.vx;
      state.vy = clamped.vy;

      tryRacketHit(state);

      ball.style.transform = `translate(${state.x}px, ${state.y}px)`;

      if (hitWall && state.readyToExit) {
        fadeOut();
        return;
      }

      rafId = requestAnimationFrame(tick);
    }

    ball.style.transform = `translate(${state.x}px, ${state.y}px)`;
    rafId = requestAnimationFrame(tick);
  }

  function init() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    createRacket();

    window.addEventListener('resize', () => {
      if (!activeBall) return;
      const { state, cleanup } = activeBall;
      const b = getBounds();
      if (
        state.x < b.left - BALL_SIZE * 2 ||
        state.x > b.right + BALL_SIZE * 2 ||
        state.y < b.top - BALL_SIZE * 2 ||
        state.y > b.bottom + BALL_SIZE * 2
      ) {
        cleanup();
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (spawnTimer) {
          clearTimeout(spawnTimer);
          spawnTimer = null;
        }
      } else {
        scheduleNextSpawn();
      }
    });

    scheduleNextSpawn();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
