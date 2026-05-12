const translations = {
  de: {
    menu: ['Kalender', 'Club', 'Anlage', 'Kontakt'],
    welcome: {
      title: 'AKTUELLE NEWS',
      paragraph: 'Unsere Tennisplätze sind offen, herzlich willkommen! Wir freuen uns, euch in der neuen Saison auf der Anlage zu sehen.'
    },
    reservation: {
      title: 'RESERVIERUNGEN',
      paragraph: `Hier können Sie Ihre Tennisplätze reservieren.<br /><br />

          Pro Stunde CHF 24.00<br /><br />

          Wie bezahle ich, wenn das Clubhaus nicht besetzt ist ...?<br /><br />

          Am besten buchst du deinen Platz online über Availio (Debit-/Kreditkarte). Auf dieser Platform kannst du zudem jederzeit prüfen, ob am gewünschten Spieltermin noch ein Platz frei ist oder nicht.<br /><br />

          Du kannst den Platz auch direkt auf der Anlage beim Clubhaus buchen. Vor Ort ist ein Tablet mit dem entsprechenden Buchungssystem installiert. Zusätzlich hast du auch die Möglichkeit, die Platzmiete mit Bargeld oder per TWINT zu bezahlen. Bei Barzahlung bitten wir dich, den entsprechenden Geldbetrag in den dafür vorgesehenen Briefumschlag zu legen und den Umschlag in den Briefkasten zu werfen. Der Briefkasten ist beim Clubhaus, rechts neben der Türe und wird regelmässig geleert.<br /><br />

          Wir bitten um FAIRPLAY auch neben dem Tennisplatz.<br /><br />

          Der Tennisclub sagt dir bereits jetzt danke für das Bezahlen der Platzmiete!`
    }
  },
  en: {
    menu: ['Calendar', 'Club', 'Facility', 'Contact'],
    welcome: {
      title: 'LATEST NEWS',
      paragraph: 'Our tennis courts are open, welcome! We look forward to seeing you on the courts this season.'
    },
    reservation: {
      title: 'RESERVATIONS',
      paragraph: `Here you can reserve your tennis courts.<br /><br />

          CHF 24.00 per hour<br /><br />

          How do I pay if the clubhouse is not staffed ...?<br /><br />

          The best way is to book your court online via Availio (debit/credit card). On this platform, you can also check at any time whether a court is available at your desired playing time.<br /><br />

          You can also book the court directly at the facility near the clubhouse. On-site, there is a tablet with the corresponding booking system installed. Additionally, you also have the option to pay the court fee in cash or via TWINT. For cash payments, we kindly ask you to place the corresponding amount in the designated envelope and drop the envelope into the mailbox. The mailbox is located at the clubhouse, to the right of the door, and is regularly emptied.<br /><br />

          We kindly ask for FAIR PLAY even off the tennis court.<br /><br />

          The tennis club thanks you in advance for paying the court fee!`
    }
  }
};

createLanguageSwitcher(translations, content => {
  const welcome = content.welcome || {};
  const reservation = content.reservation || {};

  const mainTitle = document.getElementById('main-title');
  const mainParagraph = document.getElementById('main-paragraph-1');
  const reservationTitle = document.getElementById('reservation-title');
  const reservationParagraph = document.getElementById('reservation-paragraph-1');

  if (mainTitle) mainTitle.textContent = welcome.title || '';
  if (mainParagraph) mainParagraph.innerHTML = welcome.paragraph || '';
  if (reservationTitle) reservationTitle.textContent = reservation.title || '';
  if (reservationParagraph) reservationParagraph.innerHTML = reservation.paragraph || '';
});

