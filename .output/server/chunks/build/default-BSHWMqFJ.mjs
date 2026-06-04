import { _ as __nuxt_component_0$1 } from './nuxt-link-CC6lxq7b.mjs';
import { _ as _export_sfc, v as vueExports, s as serverRenderer_cjs_prodExports, u as useI18n, b as useSwitchLocalePath } from './server.mjs';
import { u as useHead } from './composables-D7ihkc2m.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue';
import 'perfect-debounce';
import 'node:stream';

const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "LanguagePicker",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    const switchLocalePath = useSwitchLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<span${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "languagePicker" }, _attrs))} data-v-b80d797c><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(i18n).locales.value, (locale) => {
        _push(`<span data-v-b80d797c>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_nuxt_link, {
          to: vueExports.unref(switchLocalePath)(locale),
          class: ["smallcaps", {
            current: vueExports.unref(i18n).locale.value === locale
          }]
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(locale)}`);
            } else {
              return [
                vueExports.createTextVNode(vueExports.toDisplayString(locale), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</span>`);
      });
      _push(`<!--]--></span>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LanguagePicker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-b80d797c"]]), { __name: "LanguagePicker" });
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      script: [
        {
          src: "https://umm.jasperstephenson.com/script.js",
          defer: true,
          "data-website-id": "eb0e802c-a1c9-4d2e-adfb-7af615eb0af7"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LanguagePicker = __nuxt_component_0;
      _push(`<!--[--><div class="bg" data-v-cf86e953></div><div class="relative" data-v-cf86e953>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_LanguagePicker, null, null, _parent));
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf86e953"]]);

export { _default as default };
//# sourceMappingURL=default-BSHWMqFJ.mjs.map
