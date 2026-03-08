import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    shadow: { default: "sm" },
    border: { default: "sm" },
    padding: { default: "md" },
    footerPadding: { default: "md" },
    noOverflow: { type: Boolean, default: false },
    hoverable: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const shadowClasses = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl"
    };
    const borderClasses = {
      none: "",
      sm: "border border-secondary-200",
      md: "border-2 border-secondary-200"
    };
    const paddingClasses = {
      none: "",
      sm: "p-3",
      md: "p-5",
      lg: "p-8"
    };
    const contentClasses = computed(() => {
      return paddingClasses[props.padding];
    });
    const footerClasses = computed(() => {
      return [
        "border-t border-secondary-200 bg-secondary-50/50",
        paddingClasses[props.footerPadding]
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "bg-white rounded-lg transition-all duration-300",
          shadowClasses[__props.shadow],
          borderClasses[__props.border],
          { "overflow-hidden": !__props.noOverflow, "hover:shadow-lg hover:-translate-y-1": __props.hoverable }
        ]
      }, _attrs))}>`);
      if (_ctx.$slots.image) {
        _push(`<div class="relative">`);
        ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(contentClasses))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (_ctx.$slots.footer) {
        _push(`<div class="${ssrRenderClass(unref(footerClasses))}">`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Card-BujfkT9t.mjs.map
