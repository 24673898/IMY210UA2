import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';

const _imports_0 = "" + __buildAssetsURL("P1.CPsfAhVw.jpg");

const _sfc_main = {
  data() {
    return {
      catImage: null,
      catFact: null
    };
  },
  async mounted() {
    try {
      const [imageResponse, factResponse] = await Promise.all([
        fetch("https://api.thecatapi.com/v1/images/search"),
        fetch("https://meowfacts.herokuapp.com/")
      ]);
      const [imageData, factData] = await Promise.all([
        imageResponse.json(),
        factResponse.json()
      ]);
      this.catImage = imageData[0].url;
      this.catFact = factData.data[0];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><div class="flex flex-col md:flex-row gap-8 items-center"><img${ssrRenderAttr("src", _imports_0)} alt="Franky Liu" class="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-md"><div><h1 class="text-3xl font-bold text-gray-800">Franky Liu</h1><p class="mt-2 text-gray-600">I&#39;m a second-year UP student studying IKS and I love cats</p></div></div><div class="bg-white p-6 rounded-lg shadow-md"><h2 class="text-xl font-semibold text-gray-800 mb-4">Cat Corner</h2><div class="grid md:grid-cols-2 gap-6">`);
  if ($data.catImage) {
    _push(`<div class="overflow-hidden rounded-lg"><img${ssrRenderAttr("src", $data.catImage)} alt="Random Cat" class="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex items-center"><div><p class="text-lg font-medium text-gray-700 mb-2">Fun fact about cats:</p>`);
  if ($data.catFact) {
    _push(`<p class="text-gray-600 italic">&quot;${ssrInterpolate($data.catFact)}&quot;</p>`);
  } else {
    _push(`<p class="text-gray-500">Loading cat fact...</p>`);
  }
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
