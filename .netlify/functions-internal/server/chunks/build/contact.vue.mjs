import { reactive, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = reactive({
      name: "",
      email: "",
      message: ""
    });
    const formStatus = ref("");
    const statusClasses = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto px-4 py-8" }, _attrs))}><h1 class="text-3xl font-bold text-gray-800 mb-6">Contact Me</h1><form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" class="bg-white p-6 rounded-lg shadow-md"><input type="hidden" name="form-name" value="contact"><input type="hidden" name="bot-field"><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label><input type="text" id="name" name="name"${ssrRenderAttr("value", unref(formData).name)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe"></div><div class="mb-4"><label for="email" class="block text-sm font-medium text-gray-700 mb-1">Your Email</label><input type="email" id="email" name="email"${ssrRenderAttr("value", unref(formData).email)} required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com"></div><div class="mb-6"><label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label><textarea id="message" name="message" rows="5" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message here...">${ssrInterpolate(unref(formData).message)}</textarea></div><button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"> Send Message </button>`);
      if (unref(formStatus)) {
        _push(`<div class="${ssrRenderClass([unref(statusClasses), "mt-4 p-3 rounded-md"])}">${ssrInterpolate(unref(formStatus))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact.vue.mjs.map
