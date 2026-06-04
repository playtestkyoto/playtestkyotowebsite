import { v as vueExports, _ as _export_sfc, u as useI18n, s as serverRenderer_cjs_prodExports, a as __nuxt_component_0$1$1 } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'perfect-debounce';
import 'node:stream';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue';

const winSize = vueExports.ref({
  width: 1e3,
  height: 1e3
});
vueExports.computed(
  () => winSize.value.width < 768
);

function shuffleArray(array) {
  const toReturn = [...array];
  for (let i = toReturn.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [toReturn[i], toReturn[j]] = [toReturn[j], toReturn[i]];
  }
  return toReturn;
}
const venues = {
  bridgestudio: {
    name: "Bridge Studio",
    nameJa: "Bridge Studio",
    url: "https://brdg.to",
    image: "./images/venues/bridgestudio.jpg",
    mapUrl: "https://maps.app.goo.gl/HKAymLAYDWVGrjgX7",
    color: "var(--c1)"
  },
  various: {
    name: "Various Kyoto Spots",
    nameJa: "京都市各所",
    color: "var(--c6)",
    image: "./images/hero/4.jpg"
  }
};
const designers = {
  // {
  //   name: 'Mariko Sugita',
  //   bio:
  //     'Mariko Sugita is a director who works on design projects in multiple cities, including Shibuya, Ikebukuro, Kobe, Amsterdam, Nairobi, Cairo, and Ho Chi Minh City, with the theme of "editing urban experiences." She works across Japan and abroad, writing and editing in the fields of urban planning, architecture, and city planning, as well as curating and producing new programs in the fields of culture and art. She spends half of the year living in various cities abroad.',
  //   image: './images/people/mariko.jpg',
  // },
  // name: 'Jasper Stephenson',
  // bio:
  //   'Jasper is a creator based in Sakyoku, Kyoto. The most well-known of his recent games is the online collaborative gallery Different Strokes. Previously, he conducted game research and development with Cygames in Tokyo.',
  // image: './images/people/jasper.jpg',
  // url: 'https://www.jasperstephenson.com/',
  zack: {
    name: "Zack Wood",
    bio: "Zack has held workshops and shown his work throughout events in Europe and is currently enrolled in a PhD program at Kyoto Seika University. He has been developing an original deck of oracle cards since mid-2020, which uses characters from his video game Monster Garden (available in English and Japanese). His readings build on his experiences with game design, game facilitation, and performance since 2014.",
    image: "./images/people/zack.webp",
    url: "http://wzackw.com/"
  },
  joanna: {
    name: "Joanna Lyu",
    bio: "Joanna is a creative technologist and multimedia artist with a background in game design. Her practice spans across interactive virtual environments/CGI, audiovisual live performances and installations. She is interested in making interactive works which invite the public to explore the connections between humans, public spaces, and profound societal questions.",
    image: "./images/people/joanna.webp",
    url: "https://joannalyu.com/"
  },
  kaho: {
    name: "Kaho Abe",
    bio: "Kaho Abe is an award winning Media Artist and Game Designer from NYC, currently residing in Tokyo, Japan. She uses technology to create novel playful experiences for the physical world, with the hope of creating opportunities for people to connect with each other, face to face. Kaho builds custom game controllers and interfaces by embedding switches, sensors and other electrical components into objects and wearables. Her games have been shown at various museums, art galleries and festivals, including the Victoria and Albert Museum in London, the Museum of the Moving Image in New York City, the Game Developer's Conference in San Francisco, Come Out and Play Festival in NYC, and Make.Ctrl.Japan in Tokyo, to name a few.",
    image: "./images/people/kaho.jpg",
    url: "https://www.kahoabe.net/"
  },
  marcus: {
    name: "Marcus Richert",
    bio: "Marcus Richert is a designer and dictionary editor from Sweden, residing in Japan on and off since 2005.",
    image: "./images/people/marcus.webp",
    url: "https://twitter.com/marcus_richert?lang=en"
  },
  tomo: {
    name: "Tomo Kihara",
    bio: "A media artist and a game designer that develops experimental games and installations that draw out unexplored questions from people through play.",
    image: "./images/people/tomo.jpg",
    url: "https://www.tomokihara.com/"
  },
  playtest: {
    name: "Playtest Team",
    bio: "",
    image: "./images/people/playtest.jpg",
    url: "https://playtest.city/"
  },
  farfama: {
    name: "Farfama",
    image: "./images/people/farfama.webp"
  },
  space: {
    name: `501`,
    image: "./images/people/501.webp"
  }
};
const games = [
  {
    image: "./images/games/zack.webp",
    name: "PLAY SESSION",
    description: "A series of simple games taken from improv theater and dance-movement practices for connection, creativity and fun! Afterwards, we will create small zines to reflect on the experience.",
    descriptionJa: "アーティスト・Zack Woodによる、即興演劇やダンス・ムーブメントの実践から学んだシンプルなゲーム。ゲーム終了後は、体験を振り返るために小冊子を作ります。",
    venue: venues.bridgestudio,
    designer: designers.zack,
    ticketUrl: "coming soon"
  },
  {
    image: "./images/games/jam.jpg",
    name: "Physical Game Jam",
    description: `Let's design physical games! A guided workshop to ideate, prototype, and playtest spatial games over the course of a day. All skill levels are welcome!`,
    /*
          Let's design physical games! A guided workshop to ideate, prototype, and playtest spatial games over the course of a day. All are welcome, whether you're a game designer or you haven't played physical games since you were a child. Come empy-handed — we'll supply the materials and the prompts. Several pro game designers will be in attendance to help guide the process.
    
        */
    descriptionJa: "Playtest運営チームによる、1日で新しいゲームのプロトタイプを作るGame Jamを開催。街なかや公共空間を舞台にしたフィジカルなゲームのアイデアをチームで出し、プロトタイプを作り、検証・発表までを行うワークショップです。",
    venue: venues.bridgestudio,
    designer: designers.playtest,
    ticketUrl: "coming soon"
    // ticketUrl: 'https://peatix.com/event/3849195/view',
  },
  {
    image: "./images/games/joanna.webp",
    name: "Warp and Weft",
    description: `A collaborative and competitive game about connecting everything (literally) on the street in a way that is out of the ordinary. Within 60 seconds, each team has to create one closed shape with as many edges as possible, using any buildings, structures, objects, people, etc. around them.`,
    descriptionJa: "街角のあらゆるものを普通とは違う方法でつなげる、共同作業と競争ゲーム。各チームは60秒以内に、周囲の建物、構造物、物、人などのあらゆるものを使い、できるだけ多くの辺を持つ閉じた形を1つ作ります。",
    venue: venues.various,
    designer: designers.joanna,
    ticketUrl: "coming soon"
  },
  {
    image: "./images/games/kaho.png",
    name: "Touch",
    description: `A playful, interactive room that creates opportunities for people to hold hands, and touch each other to create changes in sounds.`,
    descriptionJa: "誰かと手をつないだり、触れ合ったりすることで音の変化を生み出す、遊び心のあるインタラクティブなインスタレーションを、常設展示会場にて展示します。",
    venue: venues.bridgestudio,
    designer: designers.kaho,
    ticketUrl: "coming soon"
  },
  {
    image: "./images/games/marcus.jpg",
    name: "DIY Hanafuda Workshop",
    description: `Make your own Hanafuda cards with a stencilling technique called kappazuri! `,
    descriptionJa: "花札と言えば、今でこそ機械刷りのものが当たり前ですが、江戸時代から昭和初期にかけて京都では「合羽摺り」というステンシルを使った手摺りが一般的でした。戦後に姿を消したこの印刷方法は昭和50年代に一度復活されたものの、手摺りの花札を手に入れようと思えば、今日ではとても高価です。この手摺り花札を一緒に作り、みんなで遊んでみましょう。",
    venue: venues.bridgestudio,
    designer: designers.marcus,
    ticketUrl: "coming soon"
  },
  {
    image: "./images/games/tomo.png",
    name: "Unmapping",
    description: `In this game, players are blindfolded and taken to a mystery location by car, their phones and wallets temporarily sealed away in an envelope. Relying only on their senses, they must unravel clues to find their way to the goal. As more people rely entirely on their smartphones for getting directions, we will explore our relationship with cities through the experience of literally getting lost.`,
    descriptionJa: "このゲームではプレイヤー達は目隠しをされ、謎の場所へ車で連れて行かれます。参加者の携帯電話と財布は一時的に封筒に封印されているため、自分の感覚だけを頼りに手がかりを解き明かして、ゴールへ辿り着かなければいけません。道案内をスマートフォンに頼り切る人たちが増えたいま、「迷う」ことを通して私たちと都市の関係を考えていきます。",
    venue: venues.various,
    designer: designers.tomo,
    ticketUrl: "coming soon"
  },
  {
    image: "./images/games/farfama.webp",
    name: "Urban Lens",
    description: `Capture the textures, materials, and patterns of Kyoto — we'll notice the details of the city to create clothing patterns for characters.`,
    descriptionJa: "スマホを使って京都の質感、素材、模様を撮影する遊び。街のディテールをキャプチャする「Urban Lens」を使って、デジタルシティの登場人物たちの、服のパターンを作ってみよう。",
    venue: venues.bridgestudio,
    designer: designers.farfama,
    ticketUrl: "coming soon"
  },
  {
    image: "./images/games/space.webp",
    name: "Space Ambassador",
    description: "A game in which you guide aliens through the Jodoji Temple in Kyoto, Japan. Teams will work together with officials from the Space Embassy to create a terrestrial picture from a code.",
    descriptionJa: `京都の浄土寺を、宇宙人に向けてガイドするゲーム。宇宙大使館の役人と共に、チームで暗号から地上絵を作ります。`,
    venue: venues.bridgestudio,
    designer: designers.space,
    ticketUrl: "coming soon"
  }
];
const _sfc_main$b = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Marquee",
  __ssrInlineRender: true,
  props: {
    on: Boolean,
    speed: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: ["marquee", { on: __props.on }]
      }, _attrs))} data-v-7d836d2e><div class="marquee__inner" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "animation-duration": `${15 / __props.speed}s` })}" data-v-7d836d2e>`);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Marquee.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$b, [["__scopeId", "data-v-7d836d2e"]]), { __name: "Marquee" });
const _imports_0$2 = publicAssetsURL("/images/hero/particlesBehind.svg");
const _imports_1$1 = publicAssetsURL("/images/hero/particlesBehind2.svg");
const _imports_2 = publicAssetsURL("/images/hero/particlesFront.svg");
const _imports_3 = publicAssetsURL("/images/hero/linesLR.svg");
const _imports_4 = publicAssetsURL("/images/hero/linesTB.svg");
const _imports_5 = publicAssetsURL("/images/hero/leftIcons.svg");
const _imports_6 = publicAssetsURL("/images/hero/ring.svg");
const _imports_7 = publicAssetsURL("/images/hero/ringArrows.svg");
const _imports_8 = publicAssetsURL("/images/hero/ringDashes.svg");
const _imports_9 = publicAssetsURL("/images/hero/dateTimeOutlined.svg");
const _imports_10 = publicAssetsURL("/images/logos/playtestOutlined.svg");
const _imports_11 = publicAssetsURL("/images/sc/i.svg");
const _imports_12 = publicAssetsURL("/images/sc/f.svg");
const _sfc_main$a = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    const locale = vueExports.computed(() => i18n.locale.value);
    const imageIndex = vueExports.ref(1);
    const imageAnimating = vueExports.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Marquee = __nuxt_component_0$2;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "top" }, _attrs))} data-v-a7fcfcd3><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
        animating: vueExports.unref(imageAnimating)
      }, "heroBg"])}" data-v-a7fcfcd3><div class="imageholder" data-v-a7fcfcd3><div class="image" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
        backgroundImage: `url('./images/hero/${vueExports.unref(imageIndex)}.jpg')`
      })}" data-v-a7fcfcd3></div></div></div><div class="colorOverlay" data-v-a7fcfcd3></div><div class="heroContents" data-v-a7fcfcd3><div class="vogueLazy abs z3 fullwidth fullheight nopointer" data-v-a7fcfcd3><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_0$2)} class="abs absCenterY" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "110%", "right": "-5%" })}" data-v-a7fcfcd3></div><div class="vogueLazy3 abs z3 fullwidth fullheight nopointer" data-v-a7fcfcd3><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_1$1)} class="abs absCenterY" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "90%", "left": "5%" })}" data-v-a7fcfcd3></div><div class="vogueLazy2 abs z6 fullwidth fullheight nopointer" data-v-a7fcfcd3><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_2)} style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "60%", "right": "15%", "top": "45%" })}" class="abs absCenterY" data-v-a7fcfcd3></div><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_3)} style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "calc(100% - 2em)", "left": "1em" })}" class="abs absCenterY z3 mult" data-v-a7fcfcd3><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_4)} style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "height": "calc(100% - 2em)", "top": "1em" })}" class="abs absCenterX z3 mult" data-v-a7fcfcd3><div class="fullwidth fullheight mult z3 flexcenter flexcolumn" data-v-a7fcfcd3><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_5)} style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "2em", "right": "2em", "top": "calc(50% - 15.5vw)" })}" class="abs absCenterY z3 nomobile" data-v-a7fcfcd3><div class="spinSlow abs fullwidth fullheight" data-v-a7fcfcd3><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_6)} class="abs absCenter" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "80%" })}" data-v-a7fcfcd3></div><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_7)} class="abs absCenter" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "66.5%" })}" data-v-a7fcfcd3><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_8)} class="abs absCenter" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "61.5%" })}" data-v-a7fcfcd3><img class="dates z6 abs absCenter nomobile"${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_9)} style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "calc(min(80vw, 20em))", "top": "10%" })}" data-v-a7fcfcd3><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_10)} class="heroLogo z5 abs absCenter" data-v-a7fcfcd3><div class="z6 marqueeBox flexcolumn flexcenter abs absCenter" data-v-a7fcfcd3><div class="fullwidth nooverflow" data-v-a7fcfcd3>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Marquee, { class: "" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="nowrap marnone" data-v-a7fcfcd3${_scopeId}>`);
            if (vueExports.unref(locale) === "ja") {
              _push2(`<span data-v-a7fcfcd3${_scopeId}> 都市空間における”遊び”のフェスティバル </span>`);
            } else {
              _push2(`<span data-v-a7fcfcd3${_scopeId}>A Playground for Experimental Urban Games</span>`);
            }
            _push2(`    ・    </h3>`);
          } else {
            return [
              vueExports.createVNode("h3", { class: "nowrap marnone" }, [
                vueExports.unref(locale) === "ja" ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, " 都市空間における”遊び”のフェスティバル ")) : (vueExports.openBlock(), vueExports.createBlock("span", { key: 1 }, "A Playground for Experimental Urban Games")),
                vueExports.createTextVNode("    ・    ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="z6 socialButtons flex gapsmall" data-v-a7fcfcd3><a href="https://www.instagram.com/playtestkyoto/" class="button black" target="_blank" data-v-a7fcfcd3><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_11)} class="scI" data-v-a7fcfcd3></a><a href="https://www.facebook.com/profile.php?id=61553576586398" class="button black" target="_blank" data-v-a7fcfcd3><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_12)} class="scI" data-v-a7fcfcd3></a></div></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Intro.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$a, [["__scopeId", "data-v-a7fcfcd3"]]), { __name: "HomeIntro" });
const _sfc_main$9 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PhotoLink",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    const locale = vueExports.computed(() => i18n.locale.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "photos z6" }, _attrs))} data-v-45287938><div class="ticketButton marbotbig" data-v-45287938><a href="https://photos.app.goo.gl/FmP4d6mE9hzzSKeb8" class="button big white insetLine" target="_blank" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "--insetOffset": "0.3em" })}" data-v-45287938>`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<span data-v-45287938>📸 Playtest 2024の写真はこちら</span>`);
      } else {
        _push(`<span data-v-45287938>📸 Photos of Playtest 2024</span>`);
      }
      _push(`</a></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/PhotoLink.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$9, [["__scopeId", "data-v-45287938"]]), { __name: "HomePhotoLink" });
const _sfc_main$8 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Video",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    vueExports.computed(() => i18n.locale.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "videoEmbed contentcolumn martop flexcenter" }, _attrs))} data-v-6fccc4d9><iframe width="100%" height="auto" src="https://www.youtube.com/embed/mF9YKfflbKE?si=yyIe7HOGmLR5wMVA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-v-6fccc4d9></iframe></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Video.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$8, [["__scopeId", "data-v-6fccc4d9"]]), { __name: "HomeVideo" });
const _imports_0$1 = publicAssetsURL("/images/home/doodad1.svg");
const _imports_1 = publicAssetsURL("/images/home/doodad2.svg");
const _sfc_main$7 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    const locale = vueExports.computed(() => i18n.locale.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "about marbotbig" }, _attrs))} data-v-8941d2e7><div class="textcolumn relative martopbig" data-v-8941d2e7>`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-8941d2e7><h2 data-v-8941d2e7><span class="hl1" data-v-8941d2e7>Playtest Kyoto</span>は、<br data-v-8941d2e7><span class="hl2" data-v-8941d2e7>都市空間</span>を舞台とした <br data-v-8941d2e7><span class="hl3" data-v-8941d2e7>ゲーム</span>や<span class="hl3" data-v-8941d2e7>遊び</span>を行う <br data-v-8941d2e7><span class="hl4" data-v-8941d2e7>3日間のイベント</span>です。 </h2><img class="doodad nomobile" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "transform": "translateY(-50%) rotate(-90deg)" })}"${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_0$1)} data-v-8941d2e7><img class="doodad nomobile right"${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_1)} style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "transform": "translateY(100%)" })}" data-v-8941d2e7><div data-v-8941d2e7> 2006年、ニューヨークで「Come Out &amp; Play」フェスティバルが開催され、ゲームデザイナーと市民が公共空間に集まり、さまざまな遊びのアクティビティが行われました。その後、ギリシャのPlaythonやポーランドのPlaypublikなど、街中の公共空間を活用した遊び、デジタルとアナログの垣根を越えたゲームに焦点を当てたフェスティバルが相次いでいます。 <br data-v-8941d2e7><br data-v-8941d2e7> Playtest Kyoto は、都市空間を舞台としたゲームや遊びを行う3日間のイベントです。京都に縁のあるゲームデザイナー、クリエイター、アーティストと共に、京都市内の広場や公園などの公共空間や、文化創造拠点や未活用の遊休不動産などを舞台に、子供から高齢者まで誰でも参加可能なゲームを制作・発表します。デジタルからフィジカルまでを横断しながら、京都という街を捉え直し、遊び尽くす3日間です。 </div></div>`);
      } else {
        _push(`<div data-v-8941d2e7><h2 data-v-8941d2e7><span class="hl1" data-v-8941d2e7>Playtest Kyoto</span> is a <br data-v-8941d2e7><span class="hl2" data-v-8941d2e7>three-day event</span> for <br data-v-8941d2e7><span class="hl3" data-v-8941d2e7>games</span> and <span class="hl3" data-v-8941d2e7>play</span><br data-v-8941d2e7> in <span class="hl4" data-v-8941d2e7>urban spaces</span>. </h2><img class="doodad nomobile" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "transform": "translateY(-50%) rotate(-90deg)" })}"${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_0$1)} data-v-8941d2e7><img class="doodad nomobile right"${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_1)} style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "transform": "translateY(100%)" })}" data-v-8941d2e7><div data-v-8941d2e7> In 2006 the “Come Out &amp; Play” festival was held in New York City, bringing together game designers and residents of the city in public spaces with a wide variety of playful activities. The next 15 years saw a wave of festivals focused on playful art, play in public spaces, and games across the digital-analog spectrum, such as Plaython in Greece and Playpublik in Poland, fueled in part by the growing indie game community. While diverse in theme and structure, these events shared an embrace of playfulness as a key to engagement, connection, and activation of the city―in a sense, they were simply gathering points for people seeking fun, new experiences. <br data-v-8941d2e7><br data-v-8941d2e7> COVID-19 restrictions brought a sudden end to in-person festivals, but in the last year they have finally begun to re-emerge. What would an urban play festival in Kyoto look like? What fun, new experiences could be found there? Join game designers, artists, and residents of Kyoto on March 29th-31st as they answer these questions through interactive installations, team-based games, and playful art tailored to specific locations throughout the city. </div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/About.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["__scopeId", "data-v-8941d2e7"]]), { __name: "HomeAbout" });
const _sfc_main$6 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "InfoGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    const locale = vueExports.computed(() => i18n.locale.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "grid" }, _attrs))} data-v-1ae88fd4><div class="row" data-v-1ae88fd4>`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4>会期 📆</div>`);
      } else {
        _push(`<div data-v-1ae88fd4>Event Dates 📆</div>`);
      }
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4> 2024年3月29日（金）〜31日（日）　計3日間 </div>`);
      } else {
        _push(`<div data-v-1ae88fd4>March 29th (Fri) — 31st (Sun), 2024</div>`);
      }
      _push(`</div><div class="row" data-v-1ae88fd4>`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4>会場 🎪</div>`);
      } else {
        _push(`<div data-v-1ae88fd4>Venue 🎪</div>`);
      }
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4>京都市内随所</div>`);
      } else {
        _push(`<div data-v-1ae88fd4>Various locations in Kyoto</div>`);
      }
      _push(`</div><div class="row" data-v-1ae88fd4>`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4>時間 ⏰</div>`);
      } else {
        _push(`<div data-v-1ae88fd4>Time ⏰</div>`);
      }
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4>12:00 — 18:00</div>`);
      } else {
        _push(`<div data-v-1ae88fd4>12:00 — 18:00</div>`);
      }
      _push(`</div><div class="row" data-v-1ae88fd4>`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4>チケット 🎟️</div>`);
      } else {
        _push(`<div data-v-1ae88fd4>Tickets 🎟️</div>`);
      }
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4> チケット予約は <a class="button c6 small insetLine" href="https://peatix.com/event/3849195/view" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "--insetOffset": "4px", "--insetColor": "white", "--insetWidth": "2px" })}" target="_blank" data-v-1ae88fd4>こちら</a></div>`);
      } else {
        _push(`<div data-v-1ae88fd4> Tickets are available <a class="button c6 small insetLine" href="https://peatix.com/event/3849195/view" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "--insetOffset": "4px", "--insetColor": "white", "--insetWidth": "2px" })}" target="_blank" data-v-1ae88fd4>here</a></div>`);
      }
      _push(`</div><div class="row" data-v-1ae88fd4>`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4>主宰 👨‍👩‍👧‍👦</div>`);
      } else {
        _push(`<div data-v-1ae88fd4>Organizers 👨‍👩‍👧‍👦</div>`);
      }
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4> Playtest 実行委員会（代表：杉田真理子） </div>`);
      } else {
        _push(`<div data-v-1ae88fd4> Playtest Executive Committee (Representative: Mariko Sugita) </div>`);
      }
      _push(`</div><div class="row" data-v-1ae88fd4>`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4>助成 🚁</div>`);
      } else {
        _push(`<div data-v-1ae88fd4>Supported by 🚁</div>`);
      }
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4>Arts Aid Kyoto</div>`);
      } else {
        _push(`<div data-v-1ae88fd4>Arts Aid Kyoto</div>`);
      }
      _push(`</div><div class="row" data-v-1ae88fd4>`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4>問い合わせ 💭</div>`);
      } else {
        _push(`<div data-v-1ae88fd4>Inquiry 💭</div>`);
      }
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-1ae88fd4><a href="mailto:playtestkyoto@gmail.com" data-v-1ae88fd4>playtestkyoto@gmail.com</a></div>`);
      } else {
        _push(`<div data-v-1ae88fd4><a href="mailto:playtestkyoto@gmail.com" data-v-1ae88fd4>playtestkyoto@gmail.com</a></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/InfoGrid.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["__scopeId", "data-v-1ae88fd4"]]), { __name: "HomeInfoGrid" });
const _sfc_main$5 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Games",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    const locale = vueExports.computed(() => i18n.locale.value);
    shuffleArray(games);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1$1;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)} data-v-c19c6f6c><h2 class="marbotsmall textcenter bold" data-v-c19c6f6c>`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<span data-v-c19c6f6c>Games</span>`);
      } else {
        _push(`<span data-v-c19c6f6c>Games</span>`);
      }
      _push(`</h2><div class="games" data-v-c19c6f6c>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Games.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-c19c6f6c"]]), { __name: "HomeGames" });
const _sfc_main$4 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "CalendarFromText",
  __ssrInlineRender: true,
  props: {
    text: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const singleColumn = vueExports.computed(() => {
      return winSize.value.width < 1200;
    });
    const rows = vueExports.computed(() => {
      return props.text.trim().split("\n").map((row) => {
        return rowToElements(row);
      }).filter((row) => row.date);
    });
    const startTime = vueExports.computed(() => {
      return rows.value.reduce((min, currentRow) => {
        return Math.min(
          min,
          currentRow.events.reduce(
            (min2, currentEvent) => Math.min(
              min2,
              currentEvent.from.hours + currentEvent.from.minutes / 60
            ),
            24
          )
        );
      }, 24);
    });
    const endTime = vueExports.computed(() => {
      return rows.value.reduce((max, currentRow) => {
        return Math.max(
          max,
          currentRow.events.reduce(
            (max2, currentEvent) => Math.max(
              max2,
              currentEvent.to.hours + currentEvent.to.minutes / 60
            ),
            0
          )
        );
      }, 0);
    });
    const shownSpan = vueExports.computed(() => {
      return endTime.value - startTime.value;
    });
    function rowToElements(row) {
      const rawElements = row.split("|").map((el) => `${el}`.trim());
      const elements = {
        date: (rawElements[0] || "").substring(0, (rawElements[0] || "").indexOf("(")).trim(),
        dayOfWeek: (rawElements[0] || "").substring(
          (rawElements[0] || "").indexOf("(") + 1,
          (rawElements[0] || "").indexOf(")")
        ).trim(),
        events: (rawElements[1] || "").split(",").filter((e) => e).map((eventString) => {
          let name = eventString.substring(0, eventString.indexOf("[")).trim();
          const bold = true;
          const rawTime = eventString.substring(
            eventString.indexOf("[") + 1,
            eventString.indexOf("]")
          ).trim();
          const times = rawTime.split("-").map((timeString) => timeStringToTime(timeString));
          return {
            name,
            from: times[0],
            to: times[1],
            bold,
            depth: void 0
          };
        }).filter((event) => event.name)
      };
      let maxDepth = 0;
      function calculateDepth(events, event) {
        const previousEvents = events.filter(
          (previousEvent, secondaryIndex) => {
            const previousEventStartTime = previousEvent.from.hours + previousEvent.from.minutes / 60;
            const currentEventStartTime = event.from.hours + event.from.minutes / 60;
            if (events.indexOf(event) > secondaryIndex)
              return previousEventStartTime <= currentEventStartTime;
            return previousEventStartTime < currentEventStartTime;
          }
        );
        const overlappingEvents = previousEvents.filter(
          (previousEvent) => previousEvent.to.hours + previousEvent.to.minutes / 60 > event.from.hours + event.from.minutes / 60
        );
        if (overlappingEvents.find((oe) => oe.depth === void 0))
          return false;
        let depth = 0;
        while (overlappingEvents.find(
          (oe) => (oe.depth || 0) === depth
        ))
          depth++;
        if (depth > maxDepth) maxDepth = depth;
        return depth;
      }
      while (elements.events.find((e) => e.depth === void 0)) {
        for (let event of elements.events) {
          const depth = calculateDepth(elements.events, event);
          if (depth !== false) event.depth = depth;
        }
      }
      return { ...elements, maxDepth };
    }
    function timeStringToTime(timeString) {
      timeString = timeString.replace(/[^0-9:]/g, "");
      const [hours, minutes] = timeString.split(":");
      return {
        hours: parseInt(hours) || 0,
        minutes: parseInt(minutes) || 0
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: ["calendarholder", { singlecolumn: vueExports.unref(singleColumn) }]
      }, _attrs))} data-v-76e219ae><div class="calendar" data-v-76e219ae><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(rows), (row, index2) => {
        _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ alternate: index2 % 2 }, "row"])}" data-v-76e219ae>`);
        if (vueExports.unref(singleColumn)) {
          _push(`<div class="date" data-v-76e219ae>${serverRenderer_cjs_prodExports.ssrInterpolate(row.date)} (${serverRenderer_cjs_prodExports.ssrInterpolate(row.dayOfWeek)}) </div>`);
        } else {
          _push(`<!--[--><div class="date" data-v-76e219ae>${serverRenderer_cjs_prodExports.ssrInterpolate(row.date)}</div><div class="dayofweek" data-v-76e219ae><span class="sub" data-v-76e219ae>(${serverRenderer_cjs_prodExports.ssrInterpolate(row.dayOfWeek)})</span></div><!--]-->`);
        }
        _push(`<div class="events" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(
          vueExports.unref(singleColumn) ? void 0 : {
            height: `calc(var(--row-height) * ${row.maxDepth + 1}`
          }
        )}" data-v-76e219ae><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(row.events, (event, index22) => {
          _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ bold: event.bold }, "event"])}" style="${serverRenderer_cjs_prodExports.ssrRenderStyle(
            vueExports.unref(singleColumn) ? void 0 : {
              left: (event.from.hours + event.from.minutes / 60 - vueExports.unref(startTime)) / vueExports.unref(shownSpan) * 100 + "%",
              top: `calc(var(--row-height) * ${event.depth} `,
              "z-index": Math.round(
                (event.from.hours + event.from.minutes / 60) * 4
              ),
              width: (event.to.hours + event.to.minutes / 60 - event.from.hours - event.from.minutes / 60) / vueExports.unref(shownSpan) * 100 + "%"
            }
          )}" data-v-76e219ae><div class="eventname" data-v-76e219ae>${serverRenderer_cjs_prodExports.ssrInterpolate(event.name)}</div><div class="sub" data-v-76e219ae>${serverRenderer_cjs_prodExports.ssrInterpolate(event.from.hours)}`);
          if (event.from.minutes) {
            _push(`<!--[-->:${serverRenderer_cjs_prodExports.ssrInterpolate(event.from.minutes < 9 ? "0" : "")}${serverRenderer_cjs_prodExports.ssrInterpolate(event.from.minutes)}<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`–${serverRenderer_cjs_prodExports.ssrInterpolate(event.to.hours)}`);
          if (event.from.minutes) {
            _push(`<!--[-->:${serverRenderer_cjs_prodExports.ssrInterpolate(event.to.minutes < 9 ? "0" : "")}${serverRenderer_cjs_prodExports.ssrInterpolate(event.to.minutes)}<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CalendarFromText.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-76e219ae"]]), { __name: "CalendarFromText" });
const calendarText = `3/29 (Fri) | Physical Game Jam [13:00-18:00], Warp and Weft [12:00-13:00], Touch [12:00-19:00], Urban Lens [12:00-19:00], Welcome Hangout [17:00-19:00]
3/30 (Sat) | PLAY SESSION (Group 1) [13:00-15:00], PLAY SESSION (Group 2) [16:00-18:00], Warp and Weft [12:00-13:00], Touch [12:00-18:00], Urban Lens [12:00-18:00], Space Ambassador [15:00-18:00]
3/31 (Sun) | Unmapping (Group 1) [13:00-15:00], Unmapping (Group 2) [16:00-18:00], Warp and Weft [12:00-13:00], Touch [12:00-19:00], DIY Hanafuda Workshop [13:00-16:00], Urban Lens [12:00-19:00], Closing Hangout [17:00-19:00], Space Ambassador [15:00-18:00]`;
const _sfc_main$3 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Calendar",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    const locale = vueExports.computed(() => i18n.locale.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CalendarFromText = __nuxt_component_0;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "calendar" }, _attrs))}><h2 class="marbotsmall bold textcenter">`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<span> カレンダー </span>`);
      } else {
        _push(`<span>Calendar</span>`);
      }
      _push(`</h2>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_CalendarFromText, { text: calendarText }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Calendar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$3, { __name: "HomeCalendar" });
const _sfc_main$2 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    const locale = vueExports.computed(() => i18n.locale.value);
    const teamMembers = [
      {
        name: "Mariko Sugita",
        role: "Director",
        url: "https://linktr.ee/MarikoSugita",
        image: "./images/people/mariko_trans.png",
        imageHeightMod: 1.2,
        z: 3
      },
      {
        name: "Jasper Stephenson",
        role: "Generalist",
        url: "https://www.jasperstephenson.com/",
        image: "./images/people/jasper_trans.png"
      },
      {
        name: "Zack Wood",
        role: "Planner",
        url: "http://wzackw.com/",
        image: "./images/people/zack_trans.png",
        imageHeightMod: 1.4
      },
      {
        name: "Chisato Tanaka",
        role: "Planner",
        image: "./images/people/chisato_trans.png",
        imageHeightMod: 1,
        z: 3
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "team" }, _attrs))} data-v-e651fefd><h2 class="marbotsmall bold textcenter" data-v-e651fefd>`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<span data-v-e651fefd>Playtestのチーム</span>`);
      } else {
        _push(`<span data-v-e651fefd>Playtest Team</span>`);
      }
      _push(`</h2><div class="teamMembers" data-v-e651fefd><div class="mobileList nodesktop flexcenter flexcolumn" data-v-e651fefd><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(teamMembers, (member) => {
        serverRenderer_cjs_prodExports.ssrRenderVNode(_push, vueExports.createVNode(vueExports.resolveDynamicComponent(member.url ? "a" : "div"), {
          key: member.name,
          href: member.url,
          target: "_blank"
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(member.name)}`);
            } else {
              return [
                vueExports.createTextVNode(vueExports.toDisplayString(member.name), 1)
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]--></div><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(teamMembers, (member) => {
        serverRenderer_cjs_prodExports.ssrRenderVNode(_push, vueExports.createVNode(vueExports.resolveDynamicComponent(member.url ? "a" : "div"), {
          key: member.name,
          href: member.url,
          target: "_blank",
          class: "member flexcolumn flexbetween textcenter",
          style: {
            zIndex: member.z ? member.z : 1
          }
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="padleft padright nomobile" data-v-e651fefd${_scopeId}><h3 class="marnone" data-v-e651fefd${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(member.name)}</h3></div><div class="memberImage" data-v-e651fefd${_scopeId}><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", member.image)} style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
                height: member.imageHeightMod ? member.imageHeightMod * 100 + "%" : "100%"
              })}" data-v-e651fefd${_scopeId}></div>`);
            } else {
              return [
                vueExports.createVNode("div", { class: "padleft padright nomobile" }, [
                  vueExports.createVNode("h3", { class: "marnone" }, vueExports.toDisplayString(member.name), 1)
                ]),
                vueExports.createVNode("div", { class: "memberImage" }, [
                  vueExports.createVNode("img", {
                    src: member.image,
                    style: {
                      height: member.imageHeightMod ? member.imageHeightMod * 100 + "%" : "100%"
                    }
                  }, null, 12, ["src"])
                ])
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Team.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-e651fefd"]]), { __name: "HomeTeam" });
const _imports_0 = publicAssetsURL("/images/AAK.jpg");
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    const locale = vueExports.computed(() => i18n.locale.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "footer" }, _attrs))} data-v-d011bfc3>`);
      if (vueExports.unref(locale) === "ja") {
        _push(`<div data-v-d011bfc3><div class="grid2 gap" data-v-d011bfc3><div class="bold" data-v-d011bfc3>主催</div><div data-v-d011bfc3> Playtest Kyoto 実行委員会（代表: 杉田真理子） </div><div class="bold" data-v-d011bfc3>デザイン</div><div data-v-d011bfc3>綱島卓也, Jasper Stephenson</div><div class="bold" data-v-d011bfc3>助成</div><div class="flexverticalcenter" data-v-d011bfc3><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_0)} style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "height": "4em", "margin-left": "-1em" })}" data-v-d011bfc3> Arts Aid Kyoto </div><div class="bold" data-v-d011bfc3>お問合せ</div><div data-v-d011bfc3>playtestkyoto@gmail.com</div></div></div>`);
      } else {
        _push(`<div data-v-d011bfc3><div class="grid2 gap" data-v-d011bfc3><div class="bold" data-v-d011bfc3>Organizer</div><div data-v-d011bfc3> Playtest Kyoto Executive Committee (Representative: Mariko Sugita) </div><div class="bold" data-v-d011bfc3>Design</div><div data-v-d011bfc3>Takuya Tsunashima, Jasper Stephenson</div><div class="bold" data-v-d011bfc3>Supported by</div><div class="flexverticalcenter" data-v-d011bfc3><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_0)} style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "height": "4em", "margin-left": "-1em" })}" data-v-d011bfc3> Arts Aid Kyoto </div><div class="bold" data-v-d011bfc3>Inquiry</div><div data-v-d011bfc3><a href="mailto:playtestkyoto@gmail.com" data-v-d011bfc3>playtestkyoto@gmail.com</a></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-d011bfc3"]]), { __name: "HomeFooter" });
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    vueExports.computed(() => i18n.locale.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeIntro = __nuxt_component_0$1;
      const _component_HomePhotoLink = __nuxt_component_1;
      const _component_HomeVideo = __nuxt_component_2;
      const _component_HomeAbout = __nuxt_component_3;
      const _component_HomeInfoGrid = __nuxt_component_4;
      const _component_HomeGames = __nuxt_component_5;
      const _component_HomeCalendar = __nuxt_component_6;
      const _component_HomeTeam = __nuxt_component_7;
      const _component_HomeFooter = __nuxt_component_8;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "main flexcolumn fullheight" }, _attrs))} data-v-080892ac>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeIntro, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomePhotoLink, null, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeVideo, null, null, _parent));
      _push(`<div class="marbotbig" data-v-080892ac>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeAbout, null, null, _parent));
      _push(`</div><div class="relative bg5 wavyMask2" data-v-080892ac><div class="z2" data-v-080892ac>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeInfoGrid, null, null, _parent));
      _push(`</div></div><div class="padtopbig bgd" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "box-shadow": "inset 0 0 12em 0 rgba(0, 0, 0, 0.1)" })}" data-v-080892ac><div class="contentcolumn padtopbig padbotbig marbotbig" data-v-080892ac>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeGames, { class: "" }, null, _parent));
      _push(`</div></div><div class="z1 wavyMask bg" data-v-080892ac><div class="contentcolumn padtopbig padbotbig marbotbig" data-v-080892ac>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeCalendar, { class: "z3" }, null, _parent));
      _push(`</div></div><div class="bg3 z1 wavyMask2" data-v-080892ac><div class="contentcolumn padtop" data-v-080892ac>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeTeam, null, null, _parent));
      _push(`</div></div><div class="homeBg1 z3" data-v-080892ac><div class="contentcolumn padtopbig padbotbig" data-v-080892ac>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_HomeFooter, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-080892ac"]]);

export { index as default };
//# sourceMappingURL=index-DZ-UhRVE.mjs.map
