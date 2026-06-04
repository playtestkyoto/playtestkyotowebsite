import { _ as _export_sfc, v as vueExports, s as serverRenderer_cjs_prodExports } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CC6lxq7b.mjs';
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

let localStorageAvailable;
function storageCheck() {
  if (typeof localStorage === `object`) {
    try {
      localStorage.setItem(`localStorage`, `1`);
      localStorage.removeItem(`localStorage`);
      localStorageAvailable = true;
    } catch (e) {
      localStorageAvailable = false;
      console.log(
        `LocalStorage is unavailable. Reverting to Cookies as a fallback.`
      );
    }
  } else localStorageAvailable = false;
}
function set(key, value) {
  if (!value) return remove(key);
  if (localStorageAvailable === void 0) storageCheck();
  if (localStorageAvailable)
    localStorage.setItem(key, value);
  else setCookie(key, value);
}
function remove(key) {
  if (localStorageAvailable === void 0) storageCheck();
  if (localStorageAvailable) localStorage.removeItem(key);
  else setCookie(key, ``, true);
}
function setCookie(key, value, remove2 = false) {
  const d = /* @__PURE__ */ new Date();
  d.setTime(
    d.getTime() + 365 * 24 * 60 * 60 * 1e3 * (remove2 ? -1 : 1)
  );
  const expires = `expires=` + d.toUTCString();
  (void 0).cookie = key + `=` + value + `;` + expires + `;path=/`;
}
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Password",
  __ssrInlineRender: true,
  setup(__props) {
    const password = vueExports.ref("");
    vueExports.watch(password, setPassword);
    function setPassword() {
      set("adminPassword", password.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "relative marbot" }, _attrs))}><input${serverRenderer_cjs_prodExports.ssrRenderAttr("value", vueExports.unref(password))} placeholder="type admin password here then refresh if nothing loads"></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Admin/Password.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "AdminPassword" });
const viewAllCutoff = 10;
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "analytics",
  __ssrInlineRender: true,
  setup(__props) {
    const pageCounts = vueExports.ref({});
    const viewAll = vueExports.ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminPassword = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "contentcolumn padbig" }, _attrs))} data-v-78a71775><h2 data-v-78a71775>Analytics</h2>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_AdminPassword, null, null, _parent));
      _push(`<div class="analytics" data-v-78a71775><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(Object.keys(vueExports.unref(pageCounts)), (dayCount) => {
        _push(`<div data-v-78a71775><h3 data-v-78a71775>${serverRenderer_cjs_prodExports.ssrInterpolate(dayCount)} day${serverRenderer_cjs_prodExports.ssrInterpolate(`${dayCount}` === "1" ? "" : "s")}</h3><div class="pageCountEntry" data-v-78a71775><span class="count" data-v-78a71775><b data-v-78a71775>Count</b></span><b data-v-78a71775>Page</b></div><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(viewAll)[dayCount] ? vueExports.unref(pageCounts)[dayCount] : vueExports.unref(pageCounts)[dayCount].slice(0, viewAllCutoff), (pageCount) => {
          _push(`<div class="pageCountEntry" data-v-78a71775><span class="count" data-v-78a71775>${serverRenderer_cjs_prodExports.ssrInterpolate(pageCount.count)}</span>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_nuxt_link, {
            to: pageCount.path
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${serverRenderer_cjs_prodExports.ssrInterpolate(pageCount.path)}`);
              } else {
                return [
                  vueExports.createTextVNode(vueExports.toDisplayString(pageCount.path), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (vueExports.unref(pageCounts)[dayCount].length > viewAllCutoff) {
          _push(`<div data-v-78a71775><button data-v-78a71775>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(viewAll)[dayCount] ? "View Less" : "View All")}</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/a/analytics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const analytics = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-78a71775"]]);

export { analytics as default };
//# sourceMappingURL=analytics-Izw9_tR6.mjs.map
