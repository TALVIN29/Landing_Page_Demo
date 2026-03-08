import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Container",
  __ssrInlineRender: true,
  props: {
    size: { default: "lg" },
    padding: { default: "none" },
    noDefaultPadding: { type: Boolean, default: false }
  },
  setup(__props) {
    const sizeClasses = {
      sm: "max-w-3xl",
      md: "max-w-4xl",
      lg: "max-w-7xl",
      xl: "max-w-screen-2xl",
      full: "max-w-none"
    };
    const paddingClasses = {
      none: "",
      sm: "py-4",
      md: "py-8",
      lg: "py-12",
      xl: "py-16"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "mx-auto w-full",
          sizeClasses[__props.size],
          paddingClasses[__props.padding],
          { "px-4 sm:px-6 lg:px-8": !__props.noDefaultPadding }
        ]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Container.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Container-26Tm0WkQ.mjs.map
