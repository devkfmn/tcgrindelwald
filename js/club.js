const translations = {
  de: {
    menu: ['Kalender', 'Club', 'Anlage', 'Kontakt'],
    sections: {
      about: {
        title: 'ÜBER UNS',
        paragraph: `
              <p>Der Tennisclub Grindelwald wurde gegründet, um Tennisbegeisterten eine Plattform zu bieten, auf der sie spielen, lernen und sich vernetzen können.</p>
              <p>Wir schreiben das Jahr 1915, als der Tennisclub Grindelwald, damals unter dem Namen Baer Lawn-Tennisclub Grindelwald, am 26. September unter dem Präsidium von Herrn Chr. Burgener gegründet wurde.</p>
              <p>Heute zählt der TC Grindelwald weit über 100 Mitglieder.</p>
              <p>Unsere Tennisanlage, inmitten der Bergwelt von Grindelwald, bietet vier Sandplätze und ein Clubhaus mit Bistro für ein gemütliches Klubleben.</p>
              <p>Ob Jung oder Alt, Plausch oder Wettkampf, in unseren Aktivitäten findet jeder die Möglichkeit, seinen Spass am Tennissport auszuleben.</p>
            `
      },
      board: {
        title: 'VORSTAND',
        members: [
          { name: 'Mathias Spieler', function: 'Präsient', image: 'images/mathias.png' },
          { name: 'Toni Wyss', function: 'Vize Präsident - Beisitz Klubhaus', image: 'images/toni.png' },
          { name: 'Cédric Spieler', function: 'Kassier', image: 'images/cedric.png' },
          { name: 'Beat Zurbuchen', function: 'Sekretär', image: 'images/beat.png' },
          { name: 'Dominik Bohren', function: 'Turnierleiter', image: 'images/dominik.png' },
          { name: 'Ursi Kaufmann', function: 'Juniorenleiterin', image: 'images/ursi.png' },
          { name: 'Andreas Kaufmann', function: 'Interclub - Website', image: 'images/andreas.png' }
        ]
      },
      membership: {
        title: 'MITGLIEDSCHAFT',
        paragraph: `
              <p>Du willst Mitglied werden?​</p>
              <p>Wir freuen uns auf jedes neue Mitglied das mit uns die wunderschönen Tennisplätze und Clubhaus teilen möchte!</p></br>
              <p><strong>Mitgliederbeiträge pro Jahr</strong></p></br>
              <p><strong>Schüler:</strong> CHF 40.00</p>
              <p><strong>Junioren bis 18 Jahre:</strong> CHF 60.00</p>
              <p><strong>Studenten bis 25 Jahre:</strong> CHF 100.00</p>
              <p><strong>Aktivmitglied:</strong> CHF 150.00</p>
              <p><strong>Passivmitglied:</strong> CHF 70.00</p>
            `,
        button: 'Anmeldung',
        buttonStatutes: 'Statuten'
      },
      interclub: {
        title: 'INTERCLUB',
        teams: [
          {
            image: 'images/chnebelgemscheni.png',
            title: 'Chnebel Gemscheni',
            text: 'Die glorreichen Chnebel Gemscheni sind die Topfavoriten in der 3. Liga.'
          },
          {
            image: 'images/senioren.png',
            title: 'Senioren 55+',
            text: 'Die Senioren mischen die 55+ 2. Liga auf.'
          }
        ]
      },
      sponsors: {
        title: 'SPONSOREN',
        paragraph: 'Wir danken unseren Sponsoren, die uns unterstützen und unsere Aktivitäten ermöglichen.',
        list: [
          'Lehmann + Bacher Treuhand AG, Grindelwald',
          'Rothenegg-Garage, Grindelwald',
          'Hotel Spinne, Grindelwald',
          'Victoria-Jungfrau Tenniscenter, Interlaken',
          'RUGENBRÄU AG, Matten b. Interlaken',
          'Bäckerei Ringgenberg, Grindelwald',
          'Bank EKI, Grindelwald',
          'Hotel Kreuz & Post, Grindelwald',
          'Hotel Restaurant Alpina, Grindelwald',
          'Central Hotel Wolter, Grindelwald',
          'Sutter Druck AG, Grindelwald',
          'Hotel Steinbock - Pizzeria Da Salvi, Grindelwald',
          'Selfness-Hotel Eiger, Grindelwald',
          'Kaufmann-Sport, Grindelwald',
          "FANKY'S Lingerie, Irène Fankhauser, Chalet Abendrot Grindelwald",
          'Jeannine Zurbuchen, Bildmodus.ch',
          'Fischer Marcel, Heizung und Sanitär',
          'Brawand Zimmerei AG',
          'Die Mobiliar',
          'Jungfraubahnen Management AG',
          'Weinhandlung Ritschard AG',
          'Luftseilbahn Grindelwald-Pfingstegg AG',
          'Hotel Fiescherblick',
          'Wyss Sport',
          '3970 Nordwandbräu'
        ]
      },
      volley: {
        title: 'VOLLEY',
        paragraph: 'Unsere Vereinszeitschrift.'
      }
    }
  },
  en: {
    menu: ['Calendar', 'Club', 'Facility', 'Contact'],
    sections: {
      about: {
        title: 'ABOUT US',
        paragraph: `
              <p>The Tennis Club Grindelwald was founded to provide tennis enthusiasts with a platform to play, learn, and connect.</p>
              <p>It was the year 1915 when the Tennis Club Grindelwald, then known as Baer Lawn-Tennisclub Grindelwald, was founded on September 26 under the presidency of Mr. Chr. Burgener.</p>
              <p>Today, the TC Grindelwald has well over 100 members.</p>
              <p>Our tennis facility, nestled in the mountains of Grindelwald, offers four clay courts and a clubhouse with a bistro for a cozy club life.</p>
              <p>Whether young or old, casual or competitive, our activities offer everyone the opportunity to enjoy the sport of tennis.</p>
            `
      },
      board: {
        title: 'BOARD',
        members: [
          { name: 'Mathias Spieler', function: 'President', image: 'images/mathias.png' },
          { name: 'Toni Wyss', function: 'Vice President - Clubhouse Liaison', image: 'images/toni.png' },
          { name: 'Cédric Spieler', function: 'Treasurer', image: 'images/cedric.png' },
          { name: 'Beat Zurbuchen', function: 'Secretary', image: 'images/beat.png' },
          { name: 'Dominik Bohren', function: 'Tournament Director', image: 'images/dominik.png' },
          { name: 'Ursi Kaufmann', function: 'Junior Leader', image: 'images/ursi.png' },
          { name: 'Andreas Kaufmann', function: 'Interclub - Website', image: 'images/andreas.png' }
        ]
      },
      membership: {
        title: 'MEMBERSHIP',
        paragraph: `
                <p>Do you want to become a member?​</p>
                <p>We look forward to every new member who wants to share the beautiful tennis courts and clubhouse with us!</p></br>
                <p><strong>Membership fees per year</strong></p></br>
                <p><strong>Students:</strong> CHF 40.00</p>
                <p><strong>Juniors up to 18 years:</strong> CHF 60.00</p>
                <p><strong>University students up to 25 years:</strong> CHF 100.00</p>
                <p><strong>Active member:</strong> CHF 150.00</p>
                <p><strong>Passive member:</strong> CHF 70.00</p>
            `,
        button: 'Register',
        buttonStatutes: 'Statutes'
      },
      interclub: {
        title: 'INTERCLUB',
        teams: [
          {
            image: 'images/chnebelgemscheni.png',
            title: 'Chnebel Gemscheni',
            text: 'The glorious Chnebel Gemscheni are the top favorites in the 3rd league.'
          },
          {
            image: 'images/senioren.png',
            title: 'Seniors 55+',
            text: 'The seniors are shaking up the 55+ 2nd league.'
          }
        ]
      },
      sponsors: {
        title: 'SPONSORS',
        paragraph: 'We thank our sponsors who support us and make our activities possible.',
        list: [
          'Lehmann + Bacher Treuhand AG, Grindelwald',
          'Rothenegg-Garage, Grindelwald',
          'Hotel Spinne, Grindelwald',
          'Victoria-Jungfrau Tenniscenter, Interlaken',
          'RUGENBRÄU AG, Matten b. Interlaken',
          'Bäckerei Ringgenberg, Grindelwald',
          'Bank EKI, Grindelwald',
          'Hotel Kreuz & Post, Grindelwald',
          'Hotel Restaurant Alpina, Grindelwald',
          'Central Hotel Wolter, Grindelwald',
          'Sutter Druck AG, Grindelwald',
          'Hotel Steinbock - Pizzeria Da Salvi, Grindelwald',
          'Selfness-Hotel Eiger, Grindelwald',
          'Kaufmann-Sport, Grindelwald',
          "FANKY'S Lingerie, Irène Fankhauser, Chalet Abendrot Grindelwald",
          'Jeannine Zurbuchen, Bildmodus.ch',
          'Fischer Marcel, Heating and Plumbing',
          'Brawand Zimmerei AG',
          'Die Mobiliar',
          'Jungfraubahnen Management AG',
          'Weinhandlung Ritschard AG',
          'Luftseilbahn Grindelwald-Pfingstegg AG',
          'Hotel Fiescherblick',
          'Wyss Sport',
          '3970 Nordwandbräu'
        ]
      },
      volley: {
        title: 'VOLLEY',
        paragraph: 'Our club magazine.'
      }
    }
  }
};

createLanguageSwitcher(translations, content => {
  const sections = content.sections || {};
  const aboutSection = sections.about || {};
  const boardSection = sections.board || {};
  const membershipSection = sections.membership || {};
  const interclubSection = sections.interclub || {};
  const sponsorsSection = sections.sponsors || {};
  const volleySection = sections.volley || {};

  const aboutTitle = document.getElementById('about-title');
  const aboutParagraph = document.getElementById('about-paragraph');
  const boardTitle = document.getElementById('board-title');
  const boardList = document.getElementById('board-list');
  const membershipTitle = document.getElementById('membership-title');
  const membershipParagraph = document.getElementById('membership-paragraph');
  const membershipButton = document.getElementById('membership-button');
  const statutesButton = document.getElementById('statutes-button');
  const interclubTitle = document.getElementById('interclub-title');
  const interclubList = document.getElementById('interclub-list');
  const sponsorsTitle = document.getElementById('sponsors-title');
  const sponsorsParagraph = document.getElementById('sponsors-paragraph');
  const sponsorsList = document.getElementById('sponsors-list');
  const volleyTitle = document.getElementById('volley-title');
  const volleyParagraph = document.getElementById('volley-paragraph');

  if (aboutTitle) aboutTitle.textContent = aboutSection.title || '';
  if (aboutParagraph) aboutParagraph.innerHTML = aboutSection.paragraph || '';
  if (boardTitle) boardTitle.textContent = boardSection.title || '';
  if (boardList) {
    boardList.innerHTML = '';
    (boardSection.members || []).forEach(member => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <div class="board-member">
            <img src="${member.image}" alt="${member.name}" class="board-image">
            <div class="board-info">
              <p class="board-name"><strong>${member.name}</strong></p>
              <p class="board-function">${member.function}</p>
            </div>
          </div>
        `;
      boardList.appendChild(listItem);
    });
  }

  if (membershipTitle) membershipTitle.textContent = membershipSection.title || '';
  if (membershipParagraph) membershipParagraph.innerHTML = membershipSection.paragraph || '';
  if (membershipButton) membershipButton.textContent = membershipSection.button || '';
  if (statutesButton) statutesButton.textContent = membershipSection.buttonStatutes || '';
  if (interclubTitle) interclubTitle.textContent = interclubSection.title || '';
  if (interclubList) {
    interclubList.innerHTML = '';
    (interclubSection.teams || []).forEach(team => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <div class="board-member">
            <img src="${team.image}" alt="${team.title}" class="interclub-image">
            <div class="board-info">
              <p class="board-name"><strong>${team.title}</strong></p>
              <p class="board-function">${team.text}</p>
            </div>
          </div>
        `;
      interclubList.appendChild(listItem);
    });
  }

  if (sponsorsTitle) sponsorsTitle.textContent = sponsorsSection.title || '';
  if (sponsorsParagraph) sponsorsParagraph.textContent = sponsorsSection.paragraph || '';
  if (sponsorsList) {
    sponsorsList.innerHTML = '';
    (sponsorsSection.list || []).forEach(sponsor => {
      const listItem = document.createElement('li');
      listItem.textContent = sponsor;
      sponsorsList.appendChild(listItem);
    });
  }

  if (volleyTitle) volleyTitle.textContent = volleySection.title || '';
  if (volleyParagraph) volleyParagraph.textContent = volleySection.paragraph || '';
});

