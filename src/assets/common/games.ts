export const venues: { [key: string]: Venue } = {
  bridgestudio: {
    name: 'Bridge Studio',
    nameJa: 'Bridge Studio',
    url: 'https://brdg.to',
    image: '/images/venues/bridgestudio.jpg',
    mapUrl: 'https://maps.app.goo.gl/HKAymLAYDWVGrjgX7',
    color: 'var(--c1)',
  },
  various: {
    name: 'Various Kyoto Spots',
    nameJa: '京都市各所',
    color: 'var(--c6)',
    image: '/images/hero/4.jpg',
  },
  // kyotouniversityofart: {
  //   name: 'Kyoto Univ. of the Arts',
  //   nameJa: '京都市立芸術大学',
  //   url: 'https://www.kyoto-art.ac.jp/en/',
  //   image: '/images/venues/kyotouniversityofart.jpg',
  //   mapUrl: 'https://maps.app.goo.gl/z9LNHKRa1hVwRaG86',
  //   color: 'var(--c6)',
  // },
  cityhall: {
    name: 'Kyoto City Hall',
    nameJa: '京都市役所',
    url: 'https://www.city.kyoto.lg.jp/',
    image: '/images/venues/cityhall.jpg',
    mapUrl: 'https://maps.app.goo.gl/j7SiYnHtWerLwMDx6',
    color: 'var(--c3)',
  },
  hohohoza: {
    name: 'Hohohoza',
    nameJa: 'ホホホ座',
    url: 'http://hohohoza.com/',
    image: '/images/venues/handsawpress.jpg',
    mapUrl: 'https://maps.app.goo.gl/DJucGziifENMqoKV9',
    color: 'var(--c4)',
  },
  // handsawpress: {
  //   name: 'Hand Saw Press',
  //   nameJa: 'Hand Saw Press',
  //   url: 'https://handsawpresstokyo.com/workshop.html',
  //   image: '/images/venues/handsawpress.jpg',
  //   mapUrl: 'https://maps.app.goo.gl/UdEG2wZhh5gbhLK67',
  //   color: 'var(--c4)',
  // },
  fumoto: {
    name: 'Fumoto',
    nameJa: '麓',
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
    name: 'Zack Wood',
    bio: 'Zack has held workshops and shown his work throughout events in Europe and is currently enrolled in a PhD program at Kyoto Seika University. He has been developing an original deck of oracle cards since mid-2020, which uses characters from his video game Monster Garden (available in English and Japanese). His readings build on his experiences with game design, game facilitation, and performance since 2014.',
    image: '/images/people/zack.webp',
    url: 'http://wzackw.com/',
  },
  joanna: {
    name: 'Joanna Lyu',
    bio: 'Joanna is a creative technologist and multimedia artist with a background in game design. Her practice spans across interactive virtual environments/CGI, audiovisual live performances and installations. She is interested in making interactive works which invite the public to explore the connections between humans, public spaces, and profound societal questions.',
    image: '/images/people/joanna.webp',
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
      'A series of simple games taken from improv theater and dance-movement practices for connection, creativity and fun! Afterwards, we will create small zines to reflect on the experience.',
    descriptionJa:
      'アーティスト・William Zack Woodによる、即興演劇やダンス・ムーブメントの実践から学んだシンプルなゲーム。ゲーム終了後は、体験を振り返るために小冊子を作ります。',
    venue: venues.bridgestudio,
    designer: designers.zack,
    ticketUrl: 'coming soon',
  },
  {
    image: '/images/games/jam.jpg',
    name: 'Physical Game Jam',
    description: `Let's design physical games! A guided workshop to ideate, prototype, and playtest spatial games over the course of a day. All skill levels are welcome!`,
    /*
      Let's design physical games! A guided workshop to ideate, prototype, and playtest spatial games over the course of a day. All are welcome, whether you're a game designer or you haven't played physical games since you were a child. Come empy-handed — we'll supply the materials and the prompts. Several pro game designers will be in attendance to help guide the process.

    */
    descriptionJa:
      'Playtest運営チームによる、1日で新しいゲームのプロトタイプを作るGame Jamを開催。街なかや公共空間を舞台にしたフィジカルなゲームのアイデアをチームで出し、プロトタイプを作り、検証・発表までを行うワークショップです。',
    venue: venues.bridgestudio,
    designer: designers.playtest,
    // ticketUrl: 'https://peatix.com/event/3849195/view',
  },
  {
    image: '/images/games/joanna.webp',
    name: 'Warp and Weft',
    description: `A collaborative and competitive game about connecting everything (literally) on the street in a way that is out of the ordinary. Within 60 seconds, each team has to create one closed shape with as many edges as possible, using any buildings, structures, objects, people, etc. around them.`,
    descriptionJa:
      '街角のあらゆるものを普通とは違う方法でつなげる、共同作業と競争ゲーム。各チームは60秒以内に、周囲の建物、構造物、物、人などのあらゆるものを使い、できるだけ多くの辺を持つ閉じた形を1つ作ります。',
    venue: venues.various,
    designer: designers.joanna,
    ticketUrl: 'coming soon',
  },
  {
    image: '/images/games/kaho.png',
    name: 'Touch',
    description: `A playful, interactive room that creates opportunities for people to hold hands, and touch each other to create changes in sounds.`,
    descriptionJa:
      '誰かと手をつないだり、触れ合ったりすることで音の変化を生み出す、遊び心のあるインタラクティブなインスタレーションを、常設展示会場にて展示します。',
    venue: venues.bridgestudio,
    designer: designers.kaho,
    ticketUrl: 'coming soon',
  },
  {
    image: '/images/games/marcus.jpg',
    name: 'DIY Hanafuda Workshop',
    description: `Make your own Hanafuda cards with a stencilling technique called kappazuri! `,
    descriptionJa:
      '花札と言えば、今でこそ機械刷りのものが当たり前ですが、江戸時代から昭和初期にかけて京都では「合羽摺り」というステンシルを使った手摺りが一般的でした。戦後に姿を消したこの印刷方法は昭和50年代に一度復活されたものの、手摺りの花札を手に入れようと思えば、今日ではとても高価です。この手摺り花札を一緒に作り、みんなで遊んでみましょう。',
    venue: venues.bridgestudio,
    designer: designers.marcus,
    ticketUrl: 'coming soon',
  },
  {
    image: '/images/games/tomo.png',
    name: 'Unmapping',
    description: `In this game, players are blindfolded and taken to a mystery location by car, their phones and wallets temporarily sealed away in an envelope. Relying only on their senses, they must unravel clues to find their way to the goal. As more people rely entirely on their smartphones for getting directions, we will explore our relationship with cities through the experience of literally getting lost.`,
    descriptionJa:
      'このゲームではプレイヤー達は目隠しをされ、謎の場所へ車で連れて行かれます。参加者の携帯電話と財布は一時的に封筒に封印されているため、自分の感覚だけを頼りに手がかりを解き明かして、ゴールへ辿り着かなければいけません。道案内をスマートフォンに頼り切る人たちが増えたいま、「迷う」ことを通して私たちと都市の関係を考えていきます。',
    venue: venues.various,
    designer: designers.tomo,
    ticketUrl: 'coming soon',
  },
]
