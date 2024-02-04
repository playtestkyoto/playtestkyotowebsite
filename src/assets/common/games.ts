export const venues: { [key: string]: Venue } = {
  bridgestudio: {
    name: 'Bridge Studio',
    url: 'https://brdg.to',
    image: '/images/venues/bridgestudio.jpg',
    mapUrl: 'https://maps.app.goo.gl/HKAymLAYDWVGrjgX7',
    color: 'var(--c1)',
  },
  kyotouniversityofart: {
    name: 'Kyoto University of the Arts',
    url: 'https://www.kyoto-art.ac.jp/en/',
    image: '/images/venues/kyotouniversityofart.jpg',
    mapUrl: 'https://maps.app.goo.gl/z9LNHKRa1hVwRaG86',
    color: 'var(--c6)',
  },
  cityhall: {
    name: 'Kyoto City Hall',
    url: 'https://www.city.kyoto.lg.jp/',
    image: '/images/venues/cityhall.jpg',
    mapUrl: 'https://maps.app.goo.gl/j7SiYnHtWerLwMDx6',
    color: 'var(--c3)',
  },
  handsawpress: {
    name: 'Hand Saw Press',
    url: 'https://handsawpresstokyo.com/workshop.html',
    image: '/images/venues/handsawpress.jpg',
    mapUrl: 'https://maps.app.goo.gl/UdEG2wZhh5gbhLK67',
    color: 'var(--c4)',
  },
  fumoto: {
    name: 'Fumoto',
    url: 'https://jodojiza.com/',
    image: '/images/venues/fumoto.png',
    mapUrl: 'https://maps.app.goo.gl/Cz8kPQEUizcBqJG3A',
    color: 'var(--c5)',
  },
}

export const designers: { [key: string]: Designer } = {
  // {
  //   name: 'Mariko Sugita',
  //   bio:
  //     'Mariko Sugita is a director who works on design projects in multiple cities, including Shibuya, Ikebukuro, Kobe, Amsterdam, Nairobi, Cairo, and Ho Chi Minh City, with the theme of "editing urban experiences." She works across Japan and abroad, writing and editing in the fields of urban planning, architecture, and city planning, as well as curating and producing new programs in the fields of culture and art. She spends half of the year living in various cities abroad.',
  //   image: '/images/people/mariko.jpg',
  // },

  // name: 'Jasper Stephenson',
  // bio:
  //   'Jasper is a creator based in Sakyoku, Kyoto. The most well-known of his recent games is the online collaborative gallery Different Strokes. Previously, he conducted game research and development with Cygames in Tokyo.',
  // image: '/images/people/jasper.jpg',
  // url: 'https://www.jasperstephenson.com/',

  zack: {
    name: 'William Zack Wood',
    bio: 'Zack has held workshops and shown his work throughout events in Europe and is currently enrolled in a PhD program at Kyoto Seika University. He has been developing an original deck of oracle cards since mid-2020, which uses characters from his video game Monster Garden (available in English and Japanese). His readings build on his experiences with game design, game facilitation, and performance since 2014.',
    image: '/images/people/zack.webp',
    url: 'http://wzackw.com/',
  },
  joanna: {
    name: 'Joanna Lyu',
    bio: 'Joanna is a creative technologist and multimedia artist with a background in game design. Her practice spans across interactive virtual environments/CGI, audiovisual live performances and installations. She is interested in making interactive works which invite the public to explore the connections between humans, public spaces, and profound societal questions.',
    image: '/images/people/joanna.jpg',
    url: 'https://joannalyu.com/',
  },
  kaho: {
    name: 'Kaho Abe',
    bio: "Kaho Abe is an award winning Media Artist and Game Designer from NYC, currently residing in Tokyo, Japan. She uses technology to create novel playful experiences for the physical world, with the hope of creating opportunities for people to connect with each other, face to face. Kaho builds custom game controllers and interfaces by embedding switches, sensors and other electrical components into objects and wearables. Her games have been shown at various museums, art galleries and festivals, including the Victoria and Albert Museum in London, the Museum of the Moving Image in New York City, the Game Developer's Conference in San Francisco, Come Out and Play Festival in NYC, and Make.Ctrl.Japan in Tokyo, to name a few.",
    image: '/images/people/kaho.jpg',
    url: 'https://www.kahoabe.net/',
  },
  marcus: {
    name: 'Marcus Richert',
    bio: 'Marcus Richert is a designer and dictionary editor from Sweden, residing in Japan on and off since 2005.',
    image: '/images/people/marcus.webp',
    url: 'https://twitter.com/marcus_richert?lang=en',
  },
  tomo: {
    name: 'Tomo Kihara',
    bio: 'A media artist and a game designer that develops experimental games and installations that draw out unexplored questions from people through play.',
    image: '/images/people/tomo.jpg',
    url: 'https://www.tomokihara.com/',
  },
  playtest: {
    name: 'Playtest Team',
    bio: '',
    image: '/images/people/playtest.jpg',
    url: 'https://playtest.city/',
  },
}

export const games: Game[] = [
  {
    image: '/images/games/zack.webp',
    name: 'PLAY SESSION',
    description:
      'A series of simple games taken from improv theater and dance-movement practices for connection, creativity and fun! Afterwards, we will create small zines to reflect on the experience. (Designed for adults)',
    venue: venues.bridgestudio,
    designer: designers.zack,
  },
  {
    image: '/images/games/jam.jpg',
    name: 'Physical Game Jam',
    description: `Let's design physical games! A guided workshop to ideate, prototype, and playtest physical games over the course of a day.`,
    venue: venues.bridgestudio,
    designer: designers.playtest,
  },
  {
    image: '/images/games/joanna.webp',
    name: 'Warp and Weft',
    description: `A collaborative and competitive game about connecting everything (literally) on the street in a way that is out of the ordinary.`,
    venue: venues.kyotouniversityofart,
    designer: designers.joanna,
  },
  {
    image: '/images/games/kaho.png',
    name: 'Touch',
    description: `A playful, interactive room that creates opportunities for people to hold hands, and touch each other to create changes in sounds.`,
    venue: venues.fumoto,
    designer: designers.kaho,
  },
  {
    image: '/images/games/marcus.jpg',
    name: 'DIY Hanafuda Workshop',
    description: `Make your own Hanafuda cards with a stencilling technique called kappazuri!`,
    venue: venues.bridgestudio,
    designer: designers.marcus,
  },
  {
    image: '/images/games/tomo.png',
    name: 'Unmapping',
    description: `Players are blindfolded and taken to a mystery location, their phones and wallets temporary sealed away in an envelope. Relying only on their senses, they must unravel clues to find their way to a predetermined spot.`,
    venue: venues.cityhall,
    designer: designers.tomo,
  },
]
