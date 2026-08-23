const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.carousel').forEach((carousel) => {
  const slides = carousel.querySelectorAll('.carousel-slide');
  const slideNumber = carousel.querySelector('.current-slide');
  let activeSlide = 0;

  setInterval(() => {
    slides[activeSlide].classList.remove('is-active');
    activeSlide = (activeSlide + 1) % slides.length;
    slides[activeSlide].classList.add('is-active');
    slideNumber.textContent = String(activeSlide + 1).padStart(2, '0');
  }, 2000);
});

const checkin = document.querySelector('#checkin');
const checkout = document.querySelector('#checkout');
const today = new Date().toISOString().split('T')[0];
checkin.min = today;
checkout.min = today;
checkin.addEventListener('change', () => {
  checkout.min = checkin.value;
  if (checkout.value && checkout.value <= checkin.value) checkout.value = '';
});

document.querySelector('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const params = new URLSearchParams({
    check_in: checkin.value,
    check_out: checkout.value,
    adults: document.querySelector('#guests').value,
  });
  window.open(`https://www.airbnb.it/rooms/1229572590554872003?${params}`, '_blank', 'noopener');
});

const translations = {
  en: {
    'Un rifugio tra il Mare e le Alpi Apuane': 'A retreat between the sea and the Apuan Alps',
    'Il tempo': 'Time', 'qui': 'slows', 'rallenta.': 'down here.',
    'Una casa intima, il profumo degli ulivi e giornate da vivere senza fretta.': 'An intimate home, the scent of olive trees and days to live unhurriedly.',
    'Host Airbnb': 'Airbnb host', '26 recensioni': '26 reviews', 'Scopri la casa': 'Discover the home',
    'La casa': 'The home', 'Un posto': 'A place', 'da sentire.': 'to feel.',
    'Casa I Tre Ulivi nasce per chi cerca spazio, luce e la semplicità delle cose fatte bene.': 'Casa I Tre Ulivi is made for those looking for space, light and the simplicity of things done well.',
    "Qui le mattine iniziano con il sole sulle pareti e finiscono all'aperto, tra una cena lenta e il profilo degli alberi. Una base quieta per scoprire il paesaggio, o per non fare assolutamente nulla.": 'Mornings begin with sunlight on the walls and end outdoors, between a slow dinner and the outline of the trees. A quiet base for discovering the landscape, or doing absolutely nothing.',
    "Vedi l'annuncio completo": 'View the full listing', 'Ospiti': 'Guests', 'Camere': 'Bedrooms', 'Bagno': 'Bathroom', 'Grande spazio all’aperto': 'Large outdoor space', 'Posto auto coperto': 'Covered parking space', 'Posti auto all’aperto': 'Outdoor parking spaces', 'Tranquillità': 'Peace and quiet',
    'Tutto il necessario': 'Everything you need', 'La casa è pronta': 'The home is ready', 'per accoglierti.': 'to welcome you.', 'Comfort semplici e concreti per vivere il soggiorno con la libertà di sentirsi a casa.': 'Simple, thoughtful comforts for a stay that feels like home.',
    'Climatizzazione': 'Climate control', 'Riscaldamento e aria condizionata': 'Heating and air conditioning', 'Biancheria': 'Linen', 'Biancheria da letto inclusa': 'Bed linen included', 'Wi-Fi': 'Wi-Fi', 'Connessione per restare connessi': 'A connection to stay in touch', 'Cucina completa': 'Fully equipped kitchen', 'Zona pranzo e servizi di base': 'Dining area and cooking essentials', 'Lavatrice': 'Laundry', 'Lavatrice, asciugatrice e asciugacapelli': 'Washing machine, dryer and hairdryer', "Spazi all'aperto": 'Outdoor spaces', 'Giardino privato': 'Private garden', 'Barbecue': 'Barbecue', 'Per pranzi e cene all’aperto': 'For outdoor lunches and dinners', 'Lavastoviglie': 'Dishwasher', 'Per una cucina sempre in ordine': 'For a tidy kitchen', 'Estintore': 'Fire extinguisher', 'Dotazione di sicurezza': 'Safety equipment', 'Sensore fumo': 'Smoke detector', 'Per una maggiore sicurezza': 'For extra peace of mind', 'Sensore gas': 'Gas detector', 'Parcheggio': 'Parking', 'Posto auto in loco e in strada': 'On-site and street parking', 'TV': 'TV', 'Per i momenti di pausa': 'For quiet moments', 'Vedi tutti i servizi su Airbnb': 'See all amenities on Airbnb',
    'Il ritmo giusto': 'The right pace', 'Fuori è': 'Outside is', 'ancora più bello.': 'even better.', 'Dalla casa si parte per passeggiate, borghi e tavole apparecchiate. Il resto lo decide la giornata.': 'From the home, set out for walks, villages and tables waiting for you. Let the day decide the rest.', 'Colazioni all’aperto': 'Breakfast outdoors', 'Sentieri tra gli ulivi': 'Paths among the olive trees', 'Tramonti senza programmi': 'Sunsets without plans',
    'Dicono di noi': 'What guests say', 'Piccoli gesti,': 'Small gestures,', 'grandi ricordi.': 'lasting memories.', 'Leggi le recensioni su Airbnb': 'Read the reviews on Airbnb', 'valutazioni verificate su Airbnb': 'verified ratings on Airbnb', '5 stelle': '5 stars', '4 stelle': '4 stars', 'Check-in': 'Check-in', 'Comunicazione': 'Communication', 'Pulizia': 'Cleanliness', 'Rapporto qualità-prezzo': 'Value for money', 'Una delle categorie più apprezzate dagli ospiti.': 'One of the categories guests appreciate most.', 'Valutazione media degli ospiti su Airbnb.': 'Average guest rating on Airbnb.',
    'Nei dintorni': 'Nearby', 'La montagna': 'The mountain', 'di Carrara.': 'of Carrara.', 'A pochi passi dalla costa, il bianco delle Alpi Apuane disegna un paesaggio che non si dimentica.': 'Just a short distance from the coast, the white Apuan Alps create an unforgettable landscape.',
    'Il mare della Versilia': 'The Versilia sea', 'Sale sulla pelle,': 'Salt on your skin,', "vette all'orizzonte.": 'peaks on the horizon.', 'Una giornata può iniziare tra gli ulivi e finire con i piedi nella sabbia. La costa versiliese è lì, tra il blu del Tirreno e il bianco delle Apuane.': 'A day can begin among the olive trees and end with your feet in the sand. The Versilia coast is there, between the Tyrrhenian blue and the white Apuan peaks.',
    'Una storia da vedere': 'A story to discover', 'Il Castello': 'The Malaspina', 'Malaspina.': 'Castle.', 'Custode della città di Massa, arroccato sulla collina e affacciato verso il mare.': 'Guardian of Massa, perched on the hill and looking towards the sea.',
    'Contatti': 'Contact', 'Il tuo soggiorno': 'Your stay', 'comincia qui.': 'starts here.', 'Per informazioni sulla casa, disponibilità o consigli per il soggiorno, scrivi o chiamaci direttamente.': 'For information about the home, availability or local tips, write or call us directly.',
    'Come arrivare': 'How to get here', 'Massa,': 'Massa,', 'tra mare e montagne.': 'between sea and mountains.', 'Casa I Tre Ulivi ti aspetta in provincia di Massa-Carrara, in una posizione ideale per raggiungere la Riviera Apuana, le cave di Carrara e le Alpi Apuane.': 'Casa I Tre Ulivi awaits in the province of Massa-Carrara, ideally placed for the Apuan Riviera, Carrara marble quarries and the Apuan Alps.', 'Apri su Google Maps': 'Open in Google Maps',
    'Il tuo angolo di Toscana, tra mare, Alpi Apuane e ulivi storici.': 'Your corner of Tuscany, between sea, Apuan Alps and ancient olive trees.', 'Prenota': 'Book', 'Verifica disponibilità': 'Check availability', 'Check-out': 'Check-out', 'Sarai reindirizzato su Airbnb per completare la prenotazione.': 'You will be redirected to Airbnb to complete your booking.', 'Il mare e le Alpi Apuane': 'The sea and the Apuan Alps', 'Cave di marmo · Alpi Apuane': 'Marble quarries · Apuan Alps', 'Il cuore della montagna': 'The heart of the mountain', 'Il paesaggio di Carrara': 'The Carrara landscape', 'Marina di Pietrasanta': 'Marina di Pietrasanta', '1 ospite': '1 guest', '2 ospiti': '2 guests', '3 ospiti': '3 guests', '4 ospiti': '4 guests', 'Foto Airbnb': 'Airbnb photo', 'Una giornata può iniziare tra gli ulivi e finire con i piedi nella sabbia. La costa versiliese è lì, tra il blu del Tirreno e il bianco delle Apuane.': 'A day can begin among the olive trees and end with your feet in the sand. The Versilia coast lies between the Tyrrhenian blue and the white Apuan peaks.'
  },
  de: {
    'Un rifugio tra il Mare e le Alpi Apuane': 'Ein Rückzugsort zwischen Meer und Apuanischen Alpen', 'Il tempo': 'Die Zeit', 'qui': 'hier', 'rallenta.': 'wird langsam.', 'Una casa intima, il profumo degli ulivi e giornate da vivere senza fretta.': 'Ein gemütliches Zuhause, der Duft von Olivenbäumen und Tage ohne Eile.', 'Host Airbnb': 'Airbnb-Gastgeber', '26 recensioni': '26 Bewertungen', 'Scopri la casa': 'Das Haus entdecken', 'La casa': 'Das Haus', 'Un posto': 'Ein Ort', 'da sentire.': 'zum Fühlen.', 'Tutto il necessario': 'Alles, was du brauchst', 'La casa è pronta': 'Das Haus ist bereit', 'per accoglierti.': 'dich zu empfangen.', 'Dicono di noi': 'Gästestimmen', 'Piccoli gesti,': 'Kleine Gesten,', 'grandi ricordi.': 'große Erinnerungen.', 'Nei dintorni': 'In der Umgebung', 'La montagna': 'Der Berg', 'di Carrara.': 'von Carrara.', 'Il mare della Versilia': 'Das Meer der Versilia', 'Sale sulla pelle,': 'Salz auf der Haut,', "vette all'orizzonte.": 'Gipfel am Horizont.', 'Una storia da vedere': 'Eine Geschichte zum Entdecken', 'Il Castello': 'Die Malaspina', 'Malaspina.': 'Burg.', 'Contatti': 'Kontakt', 'Il tuo soggiorno': 'Dein Aufenthalt', 'comincia qui.': 'beginnt hier.', 'Come arrivare': 'Anreise', 'tra mare e montagne.': 'zwischen Meer und Bergen.', 'Prenota': 'Buchen', 'Verifica disponibilità': 'Verfügbarkeit prüfen', 'Ospiti': 'Gäste', 'Camere': 'Schlafzimmer', 'Bagno': 'Bad', 'Tranquillità': 'Ruhe', 'Il mare e le Alpi Apuane': 'Das Meer und die Apuanischen Alpen', 'Cave di marmo · Alpi Apuane': 'Marmorsteinbrüche · Apuanische Alpen', 'Il cuore della montagna': 'Das Herz des Berges', 'Il paesaggio di Carrara': 'Die Landschaft von Carrara', '1 ospite': '1 Gast', '2 ospiti': '2 Gäste', '3 ospiti': '3 Gäste', '4 ospiti': '4 Gäste'
  },
  fr: {
    'Un rifugio tra il Mare e le Alpi Apuane': 'Un refuge entre la mer et les Alpes apuanes', 'Il tempo': 'Le temps', 'qui': 'ici', 'rallenta.': 'ralentit.', 'Una casa intima, il profumo degli ulivi e giornate da vivere senza fretta.': 'Une maison intime, le parfum des oliviers et des journées sans hâte.', 'Host Airbnb': 'Hôte Airbnb', '26 recensioni': '26 avis', 'Scopri la casa': 'Découvrir la maison', 'La casa': 'La maison', 'Un posto': 'Un lieu', 'da sentire.': 'à ressentir.', 'Tutto il necessario': 'Tout le nécessaire', 'La casa è pronta': 'La maison est prête', 'per accoglierti.': 'à vous accueillir.', 'Dicono di noi': 'Ils parlent de nous', 'Piccoli gesti,': 'De petits gestes,', 'grandi ricordi.': 'de grands souvenirs.', 'Nei dintorni': 'Aux alentours', 'La montagna': 'La montagne', 'di Carrara.': 'de Carrare.', 'Il mare della Versilia': 'La mer de Versilia', 'Sale sulla pelle,': 'Le sel sur la peau,', "vette all'orizzonte.": "les sommets à l'horizon.", 'Una storia da vedere': 'Une histoire à découvrir', 'Il Castello': 'Le château', 'Malaspina.': 'Malaspina.', 'Contatti': 'Contact', 'Il tuo soggiorno': 'Votre séjour', 'comincia qui.': 'commence ici.', 'Come arrivare': 'Comment venir', 'tra mare e montagne.': 'entre mer et montagnes.', 'Prenota': 'Réserver', 'Verifica disponibilità': 'Vérifier les disponibilités', 'Ospiti': 'Voyageurs', 'Camere': 'Chambres', 'Bagno': 'Salle de bain', 'Tranquillità': 'Tranquillité', 'Il mare e le Alpi Apuane': 'La mer et les Alpes apuanes', 'Cave di marmo · Alpi Apuane': 'Carrières de marbre · Alpes apuanes', 'Il cuore della montagna': 'Le cœur de la montagne', 'Il paesaggio di Carrara': 'Le paysage de Carrare', '1 ospite': '1 voyageur', '2 ospiti': '2 voyageurs', '3 ospiti': '3 voyageurs', '4 ospiti': '4 voyageurs'
  },
  es: {
    'Un rifugio tra il Mare e le Alpi Apuane': 'Un refugio entre el mar y los Alpes Apuanos', 'Il tempo': 'El tiempo', 'qui': 'aquí', 'rallenta.': 'se ralentiza.', 'Una casa intima, il profumo degli ulivi e giornate da vivere senza fretta.': 'Una casa íntima, el aroma de los olivos y días para vivir sin prisa.', 'Host Airbnb': 'Anfitrión de Airbnb', '26 recensioni': '26 reseñas', 'Scopri la casa': 'Descubre la casa', 'La casa': 'La casa', 'Un posto': 'Un lugar', 'da sentire.': 'para sentir.', 'Tutto il necessario': 'Todo lo necesario', 'La casa è pronta': 'La casa está lista', 'per accoglierti.': 'para recibirte.', 'Dicono di noi': 'Lo que dicen', 'Piccoli gesti,': 'Pequeños gestos,', 'grandi ricordi.': 'grandes recuerdos.', 'Nei dintorni': 'Alrededores', 'La montagna': 'La montaña', 'di Carrara.': 'de Carrara.', 'Il mare della Versilia': 'El mar de Versilia', 'Sale sulla pelle,': 'Sal en la piel,', "vette all'orizzonte.": 'cumbres en el horizonte.', 'Una storia da vedere': 'Una historia por descubrir', 'Il Castello': 'El castillo', 'Malaspina.': 'Malaspina.', 'Contatti': 'Contacto', 'Il tuo soggiorno': 'Tu estancia', 'comincia qui.': 'empieza aquí.', 'Come arrivare': 'Cómo llegar', 'tra mare e montagne.': 'entre mar y montañas.', 'Prenota': 'Reservar', 'Verifica disponibilità': 'Comprobar disponibilidad', 'Ospiti': 'Huéspedes', 'Camere': 'Habitaciones', 'Bagno': 'Baño', 'Tranquillità': 'Tranquilidad', 'Il mare e le Alpi Apuane': 'El mar y los Alpes Apuanos', 'Cave di marmo · Alpi Apuane': 'Canteras de mármol · Alpes Apuanos', 'Il cuore della montagna': 'El corazón de la montaña', 'Il paesaggio di Carrara': 'El paisaje de Carrara', '1 ospite': '1 huésped', '2 ospiti': '2 huéspedes', '3 ospiti': '3 huéspedes', '4 ospiti': '4 huéspedes'
  },
  zh: {
    'Un rifugio tra il Mare e le Alpi Apuane': '阿普安山脉与大海之间的静谧居所', 'Il tempo': '时间', 'qui': '在这里', 'rallenta.': '慢下来。', 'Una casa intima, il profumo degli ulivi e giornate da vivere senza fretta.': '温馨的房子、橄榄树的气息，以及从容度过的每一天。', 'Host Airbnb': 'Airbnb 房东', '26 recensioni': '26 条评价', 'Scopri la casa': '探索这栋房子', 'La casa': '房子', 'Un posto': '一个', 'da sentire.': '值得感受的地方。', 'Tutto il necessario': '一切所需', 'La casa è pronta': '房子已准备好', 'per accoglierti.': '迎接你的到来。', 'Dicono di noi': '宾客评价', 'Piccoli gesti,': '细微的用心，', 'grandi ricordi.': '留下难忘回忆。', 'Nei dintorni': '周边探索', 'La montagna': '卡拉拉的', 'di Carrara.': '山脉。', 'Il mare della Versilia': '维西利亚海岸', 'Sale sulla pelle,': '海盐留在肌肤，', "vette all'orizzonte.": '群山映入天际。', 'Una storia da vedere': '值得发现的故事', 'Il Castello': '马拉斯皮纳', 'Malaspina.': '城堡。', 'Contatti': '联系方式', 'Il tuo soggiorno': '你的旅程', 'comincia qui.': '从这里开始。', 'Come arrivare': '如何到达', 'tra mare e montagne.': '在海与山之间。', 'Prenota': '预订', 'Verifica disponibilità': '查看可用日期', 'Ospiti': '宾客', 'Camere': '卧室', 'Bagno': '浴室', 'Tranquillità': '宁静', 'Il mare e le Alpi Apuane': '大海与阿普安山脉', 'Cave di marmo · Alpi Apuane': '大理石采石场 · 阿普安山脉', 'Il cuore della montagna': '山脉之心', 'Il paesaggio di Carrara': '卡拉拉景观', '1 ospite': '1 位宾客', '2 ospiti': '2 位宾客', '3 ospiti': '3 位宾客', '4 ospiti': '4 位宾客'
  }
};

const originalTextNodes = [...document.body.querySelectorAll('*')].flatMap((element) => [...element.childNodes]).filter((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
const originalTexts = new Map(originalTextNodes.map((node) => [node, node.textContent]));
const translatableAttributes = ['aria-label', 'alt', 'title'];
const originalAttributes = new Map();
let translationId = 0;
document.querySelectorAll('*').forEach((element) => translatableAttributes.forEach((attribute) => {
  if (element.hasAttribute(attribute)) originalAttributes.set(`${element.dataset.translationId || (element.dataset.translationId = `translation-${translationId++}`)}:${attribute}`, { element, attribute, value: element.getAttribute(attribute) });
}));

Object.assign(translations.en, {
  'Servizi': 'Amenities', 'Dintorni': 'Nearby', 'Mare': 'Sea', 'Castello': 'Castle', 'Come arrivare': 'How to get here', 'Contatti': 'Contact',
  'Dentro casa': 'Inside the home', 'Una casa italiana da abitare con lentezza.': 'Your Italian home for a slower stay.', 'Airbnb ↗': 'Airbnb ↗', 'since 2024': 'since 2024',
  'Il mare e le Alpi Apuane': 'The sea and the Apuan Alps', 'Riviera Apuana e mare della Versilia': 'Apuan Riviera and Versilia sea', 'Pontile di Marina di Massa sul mare della Versilia': 'Marina di Massa pier on the Versilia sea', 'Tramonto sulla spiaggia di Marina di Pietrasanta': 'Sunset on Marina di Pietrasanta beach', 'Spiaggia di Marina di Pietrasanta in Versilia': 'Marina di Pietrasanta beach in Versilia',
  'Esterno di Casa I Tre Ulivi': 'Exterior of Casa I Tre Ulivi', 'Esterni di Casa I Tre Ulivi, foto Airbnb': 'Exterior of Casa I Tre Ulivi, Airbnb photo', 'Immagini di Casa I Tre Ulivi': 'Images of Casa I Tre Ulivi', 'Immagini dell\'esterno di Casa I Tre Ulivi': 'Images of the exterior of Casa I Tre Ulivi', 'Immagini del Castello Malaspina di Massa': 'Images of Malaspina Castle in Massa', 'Valutazioni Airbnb per categoria': 'Airbnb ratings by category', 'Il tempo qui rallenta.': 'Time slows down here.', 'Sarai reindirizzato su Airbnb per completare la prenotazione.': 'You will be redirected to Airbnb to complete your booking.', 'Il tuo angolo di Toscana, tra mare, Alpi Apuane e ulivi storici.': 'Your corner of Tuscany, between the sea, Apuan Alps and historic olive trees.'
});

Object.assign(translations.en, {
  'Casa I Tre Ulivi nasce per chi cerca spazio, luce e la semplicità delle cose fatte bene.': 'Casa I Tre Ulivi is made for those looking for space, light and the simplicity of things done well.', 'Grande spazio all\'aperto': 'Large outdoor space', 'Posto auto coperto': 'Covered parking space', 'Posti auto all\'aperto': 'Outdoor parking spaces', 'Per pranzi e cene all\'aperto': 'For outdoor lunches and dinners', 'Colazioni all\'aperto': 'Breakfast outdoors', '26 valutazioni verificate su Airbnb': '26 verified ratings on Airbnb', 'Per informazioni sulla casa, disponibilità o consigli per il soggiorno, scrivi o chiamaci direttamente.': 'For information about the home, availability or local tips, write or call us directly.', 'Apri su Google Maps': 'Open in Google Maps', 'Prenditi': 'Take', 'il tuo tempo.': 'your time.'
});

const sharedTranslations = {
  'Servizi': { de: 'Ausstattung', fr: 'Services', es: 'Servicios', zh: '设施' },
  'Dintorni': { de: 'Umgebung', fr: 'Alentours', es: 'Alrededores', zh: '周边' },
  'Mare': { de: 'Meer', fr: 'Mer', es: 'Mar', zh: '海洋' },
  'Castello': { de: 'Burg', fr: 'Château', es: 'Castillo', zh: '城堡' },
  'Come arrivare': { de: 'Anreise', fr: 'Comment venir', es: 'Cómo llegar', zh: '如何到达' },
  'Contatti': { de: 'Kontakt', fr: 'Contact', es: 'Contacto', zh: '联系方式' },
  'Una casa italiana da abitare con lentezza.': { de: 'Dein italienisches Zuhause für eine langsamere Auszeit.', fr: 'Votre maison italienne pour vivre plus lentement.', es: 'Tu casa italiana para disfrutar sin prisa.', zh: '属于你的意大利之家，享受从容时光。' },
  'Il mare e le Alpi Apuane': { de: 'Das Meer und die Apuanischen Alpen', fr: 'La mer et les Alpes apuanes', es: 'El mar y los Alpes Apuanos', zh: '大海与阿普安山脉' },
  'Riviera Apuana e mare della Versilia': { de: 'Apuanische Riviera und Meer der Versilia', fr: 'Riviera apuane et mer de Versilia', es: 'Riviera Apuana y mar de Versilia', zh: '阿普安海岸与维西利亚海' },
  'Pontile di Marina di Massa sul mare della Versilia': { de: 'Pier von Marina di Massa am Meer der Versilia', fr: 'Jetée de Marina di Massa sur la mer de Versilia', es: 'Muelle de Marina di Massa en el mar de Versilia', zh: '维西利亚海上的马里纳迪马萨码头' },
  'Tramonto sulla spiaggia di Marina di Pietrasanta': { de: 'Sonnenuntergang am Strand von Marina di Pietrasanta', fr: 'Coucher de soleil sur la plage de Marina di Pietrasanta', es: 'Atardecer en la playa de Marina di Pietrasanta', zh: '马里纳迪彼得拉桑塔海滩日落' },
  'Esterno di Casa I Tre Ulivi': { de: 'Außenansicht von Casa I Tre Ulivi', fr: 'Extérieur de Casa I Tre Ulivi', es: 'Exterior de Casa I Tre Ulivi', zh: '三橄榄树之家的外景' },
  'Immagini di Casa I Tre Ulivi': { de: 'Bilder von Casa I Tre Ulivi', fr: 'Images de Casa I Tre Ulivi', es: 'Imágenes de Casa I Tre Ulivi', zh: '三橄榄树之家图片' },
  'Valutazioni Airbnb per categoria': { de: 'Airbnb-Bewertungen nach Kategorie', fr: 'Évaluations Airbnb par catégorie', es: 'Valoraciones de Airbnb por categoría', zh: '按类别查看 Airbnb 评分' },
  'Una giornata può iniziare tra gli ulivi e finire con i piedi nella sabbia. La costa versiliese è lì, tra il blu del Tirreno e il bianco delle Apuane.': { de: 'Ein Tag kann zwischen Olivenbäumen beginnen und mit den Füßen im Sand enden. Die Küste der Versilia liegt zwischen dem Blau des Tyrrhenischen Meeres und den weißen Apuanischen Gipfeln.', fr: 'Une journée peut commencer parmi les oliviers et se terminer les pieds dans le sable. La côte de la Versilia se trouve entre le bleu de la mer Tyrrhénienne et le blanc des Alpes apuanes.', es: 'Un día puede comenzar entre olivos y terminar con los pies en la arena. La costa de Versilia se extiende entre el azul del Tirreno y el blanco de los Alpes Apuanos.', zh: '一天可以在橄榄树间开始，脚踩沙滩结束。维西利亚海岸位于第勒尼安海的蓝色与阿普安山脉的白色之间。' },
  'A pochi passi dalla costa, il bianco delle Alpi Apuane disegna un paesaggio che non si dimentica.': { de: 'Nur wenige Schritte von der Küste entfernt zeichnen die weißen Apuanischen Alpen eine unvergessliche Landschaft.', fr: 'À quelques pas de la côte, le blanc des Alpes apuanes compose un paysage inoubliable.', es: 'A pocos pasos de la costa, el blanco de los Alpes Apuanos dibuja un paisaje inolvidable.', zh: '距离海岸不远，洁白的阿普安山脉勾勒出令人难忘的风景。' },
  "Qui le mattine iniziano con il sole sulle pareti e finiscono all'aperto, tra una cena lenta e il profilo degli alberi. Una base quieta per scoprire il paesaggio, o per non fare assolutamente nulla.": { de: 'Hier beginnen die Morgen mit Sonne an den Wänden und enden draußen bei einem langen Abendessen und dem Blick auf die Bäume. Ein ruhiger Ausgangspunkt, um die Landschaft zu entdecken oder einfach gar nichts zu tun.', fr: 'Ici, les matinées commencent avec le soleil sur les murs et se terminent dehors, entre un dîner tranquille et la silhouette des arbres. Un point de départ paisible pour découvrir le paysage ou ne rien faire du tout.', es: 'Aquí las mañanas empiezan con el sol en las paredes y terminan al aire libre, entre una cena tranquila y la silueta de los árboles. Una base serena para descubrir el paisaje o no hacer absolutamente nada.', zh: '清晨阳光洒在墙上，夜晚在户外、悠闲晚餐与树影之间结束。这里是探索风景或什么都不做的宁静据点。' },
  'Dalla casa si parte per passeggiate, borghi e tavole apparecchiate. Il resto lo decide la giornata.': { de: 'Vom Haus aus geht es zu Spaziergängen, Dörfern und gedeckten Tischen. Den Rest entscheidet der Tag.', fr: 'Depuis la maison, partez pour des promenades, des villages et des tables dressées. La journée décidera du reste.', es: 'Desde la casa parten paseos, pueblos y mesas preparadas. El día decidirá el resto.', zh: '从房子出发，去散步、探访村庄、享用美食。其余交给这一天来决定。' },
  'Casa I Tre Ulivi ti aspetta in provincia di Massa-Carrara, in una posizione ideale per raggiungere la Riviera Apuana, le cave di Carrara e le Alpi Apuane.': { de: 'Casa I Tre Ulivi erwartet dich in der Provinz Massa-Carrara, ideal gelegen für die Apuanische Riviera, die Marmorsteinbrüche von Carrara und die Apuanischen Alpen.', fr: 'Casa I Tre Ulivi vous attend dans la province de Massa-Carrara, idéalement située pour rejoindre la Riviera apuane, les carrières de marbre de Carrare et les Alpes apuanes.', es: 'Casa I Tre Ulivi te espera en la provincia de Massa-Carrara, en una ubicación ideal para llegar a la Riviera Apuana, las canteras de mármol de Carrara y los Alpes Apuanos.', zh: '三橄榄树之家位于马萨-卡拉拉省，方便前往阿普安海岸、卡拉拉大理石采石场和阿普安山脉。' },
  'Sarai reindirizzato su Airbnb per completare la prenotazione.': { de: 'Du wirst zu Airbnb weitergeleitet, um die Buchung abzuschließen.', fr: 'Vous serez redirigé vers Airbnb pour finaliser votre réservation.', es: 'Serás redirigido a Airbnb para completar la reserva.', zh: '你将跳转至 Airbnb 完成预订。' },
  'Il tuo angolo di Toscana, tra mare, Alpi Apuane e ulivi storici.': { de: 'Dein Stück Toskana zwischen Meer, Apuanischen Alpen und alten Olivenbäumen.', fr: 'Votre coin de Toscane entre mer, Alpes apuanes et oliviers anciens.', es: 'Tu rincón de la Toscana entre mar, Alpes Apuanos y olivos históricos.', zh: '你的托斯卡纳一隅，坐拥大海、阿普安山脉与古老橄榄树。' }
};
Object.assign(sharedTranslations, {
  'Casa I Tre Ulivi nasce per chi cerca spazio, luce e la semplicità delle cose fatte bene.': { de: 'Casa I Tre Ulivi ist für alle, die Raum, Licht und die Einfachheit schöner Dinge suchen.', fr: 'Casa I Tre Ulivi est faite pour celles et ceux qui recherchent l’espace, la lumière et la simplicité des belles choses.', es: 'Casa I Tre Ulivi nace para quienes buscan espacio, luz y la sencillez de las cosas bien hechas.', zh: '三橄榄树之家献给寻找空间、阳光与美好生活简单质感的人。' },
  'Grande spazio all\'aperto': { de: 'Großer Außenbereich', fr: 'Grand espace extérieur', es: 'Gran espacio exterior', zh: '宽敞的户外空间' },
  'Posto auto coperto': { de: 'Überdachter Parkplatz', fr: 'Place de parking couverte', es: 'Plaza de aparcamiento cubierta', zh: '带顶停车位' },
  'Posti auto all\'aperto': { de: 'Parkplätze im Freien', fr: 'Places de parking extérieures', es: 'Plazas de aparcamiento al aire libre', zh: '户外停车位' },
  'Per pranzi e cene all\'aperto': { de: 'Für Mittag- und Abendessen im Freien', fr: 'Pour les déjeuners et dîners en plein air', es: 'Para comidas y cenas al aire libre', zh: '适合户外午餐和晚餐' },
  'Colazioni all\'aperto': { de: 'Frühstück im Freien', fr: 'Petits-déjeuners en plein air', es: 'Desayunos al aire libre', zh: '户外早餐' },
  '26 valutazioni verificate su Airbnb': { de: '26 verifizierte Bewertungen auf Airbnb', fr: '26 évaluations vérifiées sur Airbnb', es: '26 valoraciones verificadas en Airbnb', zh: '26 条 Airbnb 认证评价' },
  'Per informazioni sulla casa, disponibilità o consigli per il soggiorno, scrivi o chiamaci direttamente.': { de: 'Für Informationen zum Haus, zur Verfügbarkeit oder Tipps für deinen Aufenthalt schreib uns oder ruf uns direkt an.', fr: 'Pour toute information sur la maison, les disponibilités ou des conseils pour votre séjour, écrivez-nous ou appelez-nous directement.', es: 'Para obtener información sobre la casa, disponibilidad o consejos para tu estancia, escríbenos o llámanos directamente.', zh: '如需了解房屋、可用日期或旅行建议，请直接写信或致电联系我们。' },
  'Apri su Google Maps': { de: 'In Google Maps öffnen', fr: 'Ouvrir dans Google Maps', es: 'Abrir en Google Maps', zh: '在 Google 地图中打开' },
  'Prenditi': { de: 'Nimm dir', fr: 'Prenez', es: 'Tómate', zh: '给自己' },
  'il tuo tempo.': { de: 'deine Zeit.', fr: 'le temps.', es: 'tu tiempo.', zh: '一点时间。' },
  '01 — La casa': { de: '01 — Das Haus', fr: '01 — La maison', es: '01 — La casa', zh: '01 — 房子' },
  '03 — Tutto il necessario': { de: '03 — Alles, was du brauchst', fr: '03 — Tout le nécessaire', es: '03 — Todo lo necesario', zh: '03 — 一切所需' },
  '03 — Il ritmo giusto': { de: '03 — Der richtige Rhythmus', fr: '03 — Le bon rythme', es: '03 — El ritmo adecuado', zh: '03 — 恰好的节奏' },
  '04 — Dicono di noi': { de: '04 — Gästestimmen', fr: '04 — Ils parlent de nous', es: '04 — Lo que dicen', zh: '04 — 宾客评价' },
  '04 — Nei dintorni': { de: '04 — In der Umgebung', fr: '04 — Aux alentours', es: '04 — Alrededores', zh: '04 — 周边探索' },
  '05 — Il mare della Versilia': { de: '05 — Das Meer der Versilia', fr: '05 — La mer de Versilia', es: '05 — El mar de Versilia', zh: '05 — 维西利亚海岸' },
  '06 — Una storia da vedere': { de: '06 — Eine Geschichte zum Entdecken', fr: '06 — Une histoire à découvrir', es: '06 — Una historia por descubrir', zh: '06 — 值得发现的故事' },
  '07 — Contatti': { de: '07 — Kontakt', fr: '07 — Contact', es: '07 — Contacto', zh: '07 — 联系方式' },
  '08 — Come arrivare': { de: '08 — Anreise', fr: '08 — Comment venir', es: '08 — Cómo llegar', zh: '08 — 如何到达' },
  '06 — Il tuo soggiorno': { de: '06 — Dein Aufenthalt', fr: '06 — Votre séjour', es: '06 — Tu estancia', zh: '06 — 你的旅程' },
  'Climatizzazione': { de: 'Klimaanlage', fr: 'Climatisation', es: 'Climatización', zh: '空调' },
  'Riscaldamento e aria condizionata': { de: 'Heizung und Klimaanlage', fr: 'Chauffage et climatisation', es: 'Calefacción y aire acondicionado', zh: '暖气和空调' },
  'Biancheria': { de: 'Bettwäsche', fr: 'Linge de maison', es: 'Ropa de cama', zh: '床上用品' },
  'Biancheria da letto inclusa': { de: 'Bettwäsche inklusive', fr: 'Linge de lit inclus', es: 'Ropa de cama incluida', zh: '包含床上用品' },
  'Wi-Fi': { de: 'WLAN', fr: 'Wi-Fi', es: 'Wi-Fi', zh: '无线网络' },
  'Connessione per restare connessi': { de: 'Verbindung, um in Kontakt zu bleiben', fr: 'Une connexion pour rester connecté', es: 'Conexión para estar comunicado', zh: '保持联系的网络' },
  'Cucina completa': { de: 'Voll ausgestattete Küche', fr: 'Cuisine équipée', es: 'Cocina completa', zh: '设备齐全的厨房' },
  'Zona pranzo e servizi di base': { de: 'Essbereich und Kochutensilien', fr: 'Espace repas et essentiels de cuisine', es: 'Comedor y básicos para cocinar', zh: '用餐区和烹饪用品' },
  'Spazi all\'aperto': { de: 'Außenbereiche', fr: 'Espaces extérieurs', es: 'Espacios exteriores', zh: '户外空间' },
  'Giardino privato': { de: 'Privater Garten', fr: 'Jardin privé', es: 'Jardín privado', zh: '私人花园' },
  'Barbecue': { de: 'Grill', fr: 'Barbecue', es: 'Barbacoa', zh: '烧烤架' },
  'Lavastoviglie': { de: 'Geschirrspüler', fr: 'Lave-vaisselle', es: 'Lavavajillas', zh: '洗碗机' },
  'Estintore': { de: 'Feuerlöscher', fr: 'Extincteur', es: 'Extintor', zh: '灭火器' },
  'Sensore fumo': { de: 'Rauchmelder', fr: 'Détecteur de fumée', es: 'Detector de humo', zh: '烟雾报警器' },
  'Sensore gas': { de: 'Gasmelder', fr: 'Détecteur de gaz', es: 'Detector de gas', zh: '燃气报警器' },
  'Parcheggio': { de: 'Parkplatz', fr: 'Parking', es: 'Aparcamiento', zh: '停车位' },
  'Posto auto in loco e in strada': { de: 'Parkplatz vor Ort und an der Straße', fr: 'Parking sur place et dans la rue', es: 'Aparcamiento en el alojamiento y en la calle', zh: '房源内及街边停车' },
  'TV': { de: 'TV', fr: 'TV', es: 'TV', zh: '电视' },
  'Per i momenti di pausa': { de: 'Für entspannte Momente', fr: 'Pour les moments de pause', es: 'Para los momentos de descanso', zh: '享受放松时光' },
  'Vedi tutti i servizi su Airbnb': { de: 'Alle Ausstattungsmerkmale auf Airbnb ansehen', fr: 'Voir tous les services sur Airbnb', es: 'Ver todos los servicios en Airbnb', zh: '查看 Airbnb 上的全部设施' },
  'Una delle categorie più apprezzate dagli ospiti.': { de: 'Eine der von Gästen am meisten geschätzten Kategorien.', fr: 'L’une des catégories les plus appréciées par les voyageurs.', es: 'Una de las categorías más valoradas por los huéspedes.', zh: '宾客最欣赏的类别之一。' },
  'Valutazione media degli ospiti su Airbnb.': { de: 'Durchschnittliche Gästebewertung auf Airbnb.', fr: 'Évaluation moyenne des voyageurs sur Airbnb.', es: 'Valoración media de los huéspedes en Airbnb.', zh: 'Airbnb 宾客平均评分。' }
});
translations.uk = {
  'Un rifugio tra il Mare e le Alpi Apuane': 'Затишний будинок між морем і Апуанськими Альпами', 'Il tempo': 'Час', 'qui': 'тут', 'rallenta.': 'сповільнюється.', 'Una casa intima, il profumo degli ulivi e giornate da vivere senza fretta.': 'Затишний будинок, аромат оливкових дерев і дні без поспіху.', 'Host Airbnb': 'Господар Airbnb', '26 recensioni': '26 відгуків', 'Scopri la casa': 'Відкрити будинок', 'La casa': 'Будинок', 'Un posto': 'Місце', 'da sentire.': 'яке варто відчути.', 'Tutto il necessario': 'Усе необхідне', 'La casa è pronta': 'Будинок готовий', 'per accoglierti.': 'зустріти вас.', 'Dicono di noi': 'Відгуки гостей', 'Piccoli gesti,': 'Маленькі жести,', 'grandi ricordi.': 'великі спогади.', 'Nei dintorni': 'Поруч', 'La montagna': 'Гори', 'di Carrara.': 'Каррари.', 'Il mare della Versilia': 'Море Версілії', 'Sale sulla pelle,': 'Сіль на шкірі,', "vette all'orizzonte.": 'гори на горизонті.', 'Una storia da vedere': 'Історія, яку варто відкрити', 'Il Castello': 'Замок', 'Malaspina.': 'Маласпіна.', 'Contatti': 'Контакти', 'Il tuo soggiorno': 'Ваш відпочинок', 'comincia qui.': 'починається тут.', 'Come arrivare': 'Як дістатися', 'tra mare e montagne.': 'між морем і горами.', 'Prenota': 'Забронювати', 'Verifica disponibilità': 'Перевірити доступність', 'Ospiti': 'Гості', 'Camere': 'Спальні', 'Bagno': 'Ванна кімната', 'Tranquillità': 'Спокій', 'Servizi': 'Зручності', 'Dintorni': 'Поруч', 'Mare': 'Море', 'Castello': 'Замок', 'Casa I Tre Ulivi ti aspetta in provincia di Massa-Carrara, in una posizione ideale per raggiungere la Riviera Apuana, le cave di Carrara e le Alpi Apuane.': 'Casa I Tre Ulivi чекає на вас у провінції Масса-Каррара, в ідеальному місці для відвідування узбережжя, мармурових кар’єрів Каррари та Апуанських Альп.', 'Una giornata può iniziare tra gli ulivi e finire con i piedi nella sabbia. La costa versiliese è lì, tra il blu del Tirreno e il bianco delle Apuane.': 'День може початися серед оливкових дерев і завершитися ногами в піску. Узбережжя Версілії лежить між синявою Тірренського моря та білими Апуанськими Альпами.', 'Il tuo angolo di Toscana, tra mare, Alpi Apuane e ulivi storici.': 'Ваш куточок Тоскани між морем, Апуанськими Альпами та старовинними оливковими деревами.'
};
Object.entries(sharedTranslations).forEach(([key, values]) => Object.entries(values).forEach(([language, value]) => { translations[language][key] = value; }));

const languageCodes = ['en', 'it', 'de', 'fr', 'es', 'zh', 'uk'];
const urlLanguage = new URLSearchParams(window.location.search).get('lang') || window.location.pathname.match(/^\/(en|it|de|fr|es|zh|uk)(?:\/|$)/)?.[1];
const initialLanguage = languageCodes.includes(urlLanguage) ? urlLanguage : (languageCodes.includes(localStorage.getItem('preferred-language')) ? localStorage.getItem('preferred-language') : 'en');

function setLanguage(language) {
  const dictionary = language === 'it' ? {} : { ...translations.en, ...(translations[language] || {}) };
  originalTextNodes.forEach((node) => {
    const original = originalTexts.get(node);
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    const key = original.trim();
    node.textContent = `${leading}${dictionary[key] || key}${trailing}`;
  });
  originalAttributes.forEach(({ element, attribute, value }) => { element.setAttribute(attribute, dictionary[value] || value); });
  document.documentElement.lang = language;
  document.title = language === 'it' ? 'Casa I Tre Ulivi | Una pausa italiana' : ({ en: 'Casa I Tre Ulivi | A slower kind of stay', de: 'Casa I Tre Ulivi | Zeit zum Ankommen', fr: 'Casa I Tre Ulivi | Le temps de vivre', es: 'Casa I Tre Ulivi | Una pausa italiana', zh: 'Casa I Tre Ulivi | 慢享意大利', uk: 'Casa I Tre Ulivi | Повільніше життя' }[language] || document.title);
  localStorage.setItem('preferred-language', language);
  const url = new URL(window.location.href);
  url.searchParams.set('lang', language);
  window.history.replaceState({}, '', `${url.pathname}?${url.searchParams.toString()}${url.hash}`);
  document.querySelectorAll('.language-button').forEach((button) => button.classList.toggle('is-active', button.dataset.language === language));
}

document.querySelectorAll('.language-button').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
setLanguage(initialLanguage);
