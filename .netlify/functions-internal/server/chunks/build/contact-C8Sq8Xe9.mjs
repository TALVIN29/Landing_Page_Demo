import { _ as _sfc_main$1 } from './Container-26Tm0WkQ.mjs';
import { u as useHead, _ as _sfc_main$2, a as useNuxtApp } from './server.mjs';
import { defineComponent, reactive, ref, withCtx, createVNode, unref, createTextVNode, toDisplayString, withModifiers, withDirectives, vModelText, vModelSelect, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';
import '@supabase/ssr';

const useSupabaseClient = () => {
  return useNuxtApp().$supabase.client;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact Us",
      meta: [
        { name: "description", content: "Get in touch with Packaging Automation Solutions. Contact us for a free consultation on your automation needs." }
      ]
    });
    const supabase = useSupabaseClient();
    const form = reactive({
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      message: ""
    });
    const isSubmitting = ref(false);
    const submitStatus = ref("idle");
    const errorMessage = ref("");
    const handleSubmit = async () => {
      var _a;
      isSubmitting.value = true;
      submitStatus.value = "idle";
      errorMessage.value = "";
      try {
        const { error } = await supabase.from("contact_submissions").insert({
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          company: form.company || null,
          industry: form.industry || null,
          message: form.message
        });
        if (error) throw error;
        submitStatus.value = "success";
        form.name = "";
        form.email = "";
        form.phone = "";
        form.company = "";
        form.industry = "";
        form.message = "";
      } catch (err) {
        submitStatus.value = "error";
        errorMessage.value = (_a = err == null ? void 0 : err.message) != null ? _a : "Something went wrong. Please try again.";
      } finally {
        isSubmitting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = _sfc_main$1;
      const _component_UiButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative py-20 lg:py-32 bg-gradient-to-br from-primary-900 to-secondary-900 overflow-hidden"><div class="absolute inset-0 opacity-20"><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", "background-size": "40px 40px" })}"></div></div>`);
      _push(ssrRenderComponent(_component_UiContainer, {
        size: "lg",
        class: "relative z-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl text-center mx-auto"${_scopeId}><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"${_scopeId}>Contact Us</h1><p class="text-xl text-primary-100"${_scopeId}>Let&#39;s discuss your automation needs</p></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl text-center mx-auto" }, [
                createVNode("h1", { class: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" }, "Contact Us"),
                createVNode("p", { class: "text-xl text-primary-100" }, "Let's discuss your automation needs")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-20 lg:py-32 bg-white">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-12"${_scopeId}><div class="bg-white rounded-xl shadow-lg p-8"${_scopeId}><h2 class="text-2xl font-bold text-secondary-900 mb-6"${_scopeId}>Send us a Message</h2><form class="space-y-6"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-secondary-700 mb-2"${_scopeId}>Name *</label><input${ssrRenderAttr("value", unref(form).name)} type="text" required class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="Your name"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-secondary-700 mb-2"${_scopeId}>Email *</label><input${ssrRenderAttr("value", unref(form).email)} type="email" required class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:prime-500 focus:border-primary-500" placeholder="your@email.com"${_scopeId}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-secondary-700 mb-2"${_scopeId}>Phone</label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="+60 12-345-6789"${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-secondary-700 mb-2"${_scopeId}>Company</label><input${ssrRenderAttr("value", unref(form).company)} type="text" class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="Company name"${_scopeId}></div></div><div${_scopeId}><label class="block text-sm font-medium text-secondary-700 mb-2"${_scopeId}>Industry</label><select class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).industry) ? ssrLooseContain(unref(form).industry, "") : ssrLooseEqual(unref(form).industry, "")) ? " selected" : ""}${_scopeId}>Select an industry</option><option value="medical"${ssrIncludeBooleanAttr(Array.isArray(unref(form).industry) ? ssrLooseContain(unref(form).industry, "medical") : ssrLooseEqual(unref(form).industry, "medical")) ? " selected" : ""}${_scopeId}>Medical Devices</option><option value="pharmaceutical"${ssrIncludeBooleanAttr(Array.isArray(unref(form).industry) ? ssrLooseContain(unref(form).industry, "pharmaceutical") : ssrLooseEqual(unref(form).industry, "pharmaceutical")) ? " selected" : ""}${_scopeId}>Pharmaceuticals</option><option value="glove"${ssrIncludeBooleanAttr(Array.isArray(unref(form).industry) ? ssrLooseContain(unref(form).industry, "glove") : ssrLooseEqual(unref(form).industry, "glove")) ? " selected" : ""}${_scopeId}>Glove Manufacturing</option><option value="fmcg"${ssrIncludeBooleanAttr(Array.isArray(unref(form).industry) ? ssrLooseContain(unref(form).industry, "fmcg") : ssrLooseEqual(unref(form).industry, "fmcg")) ? " selected" : ""}${_scopeId}>FMCG</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(unref(form).industry) ? ssrLooseContain(unref(form).industry, "other") : ssrLooseEqual(unref(form).industry, "other")) ? " selected" : ""}${_scopeId}>Other</option></select></div><div${_scopeId}><label class="block text-sm font-medium text-secondary-700 mb-2"${_scopeId}>Message *</label><textarea rows="5" required class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="How can we help you?"${_scopeId}>${ssrInterpolate(unref(form).message)}</textarea></div>`);
            if (unref(submitStatus) === "success") {
              _push2(`<div class="flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"${_scopeId}><svg class="w-5 h-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg><span${_scopeId}>Message sent! We&#39;ll get back to you within 24 business hours.</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(submitStatus) === "error") {
              _push2(`<div class="flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"${_scopeId}><svg class="w-5 h-5 flex-shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg><span${_scopeId}>${ssrInterpolate(unref(errorMessage))}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UiButton, {
              type: "submit",
              variant: "primary",
              size: "lg",
              class: "w-full",
              loading: unref(isSubmitting),
              disabled: unref(isSubmitting)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(isSubmitting) ? "Sending\u2026" : "Send Message")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(isSubmitting) ? "Sending\u2026" : "Send Message"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form></div><div class="space-y-8"${_scopeId}><div class="bg-secondary-50 rounded-xl p-6"${_scopeId}><h3 class="text-lg font-bold text-secondary-900 mb-4"${_scopeId}>Office Address</h3><p class="text-secondary-600"${_scopeId}> 123 Industrial Park<br${_scopeId}> Shah Alam, 40000 Selangor<br${_scopeId}> Malaysia </p></div><div class="bg-secondary-50 rounded-xl p-6"${_scopeId}><h3 class="text-lg font-bold text-secondary-900 mb-4"${_scopeId}>Contact Details</h3><div class="space-y-3 text-secondary-600"${_scopeId}><p${_scopeId}><strong${_scopeId}>Phone:</strong> +60 3-1234 5678</p><p${_scopeId}><strong${_scopeId}>Email:</strong> info@packaging-automation.com</p><p${_scopeId}><strong${_scopeId}>Hours:</strong> Mon-Fri 9:00 AM - 6:00 PM</p></div></div><div class="bg-secondary-50 rounded-xl p-6"${_scopeId}><h3 class="text-lg font-bold text-secondary-900 mb-4"${_scopeId}>Quick Response</h3><p class="text-secondary-600"${_scopeId}>We typically respond within 24 business hours.</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-12" }, [
                createVNode("div", { class: "bg-white rounded-xl shadow-lg p-8" }, [
                  createVNode("h2", { class: "text-2xl font-bold text-secondary-900 mb-6" }, "Send us a Message"),
                  createVNode("form", {
                    onSubmit: withModifiers(handleSubmit, ["prevent"]),
                    class: "space-y-6"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-secondary-700 mb-2" }, "Name *"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          type: "text",
                          required: "",
                          class: "w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                          placeholder: "Your name"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).name]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-secondary-700 mb-2" }, "Email *"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          type: "email",
                          required: "",
                          class: "w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:prime-500 focus:border-primary-500",
                          placeholder: "your@email.com"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).email]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-secondary-700 mb-2" }, "Phone"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                          type: "tel",
                          class: "w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                          placeholder: "+60 12-345-6789"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).phone]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-secondary-700 mb-2" }, "Company"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).company = $event,
                          type: "text",
                          class: "w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                          placeholder: "Company name"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).company]
                        ])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-sm font-medium text-secondary-700 mb-2" }, "Industry"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => unref(form).industry = $event,
                        class: "w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      }, [
                        createVNode("option", { value: "" }, "Select an industry"),
                        createVNode("option", { value: "medical" }, "Medical Devices"),
                        createVNode("option", { value: "pharmaceutical" }, "Pharmaceuticals"),
                        createVNode("option", { value: "glove" }, "Glove Manufacturing"),
                        createVNode("option", { value: "fmcg" }, "FMCG"),
                        createVNode("option", { value: "other" }, "Other")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(form).industry]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-sm font-medium text-secondary-700 mb-2" }, "Message *"),
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => unref(form).message = $event,
                        rows: "5",
                        required: "",
                        class: "w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                        placeholder: "How can we help you?"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).message]
                      ])
                    ]),
                    unref(submitStatus) === "success" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-5 h-5 flex-shrink-0 text-green-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M5 13l4 4L19 7"
                        })
                      ])),
                      createVNode("span", null, "Message sent! We'll get back to you within 24 business hours.")
                    ])) : createCommentVNode("", true),
                    unref(submitStatus) === "error" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-5 h-5 flex-shrink-0 text-red-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M6 18L18 6M6 6l12 12"
                        })
                      ])),
                      createVNode("span", null, toDisplayString(unref(errorMessage)), 1)
                    ])) : createCommentVNode("", true),
                    createVNode(_component_UiButton, {
                      type: "submit",
                      variant: "primary",
                      size: "lg",
                      class: "w-full",
                      loading: unref(isSubmitting),
                      disabled: unref(isSubmitting)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(isSubmitting) ? "Sending\u2026" : "Send Message"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ], 32)
                ]),
                createVNode("div", { class: "space-y-8" }, [
                  createVNode("div", { class: "bg-secondary-50 rounded-xl p-6" }, [
                    createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-4" }, "Office Address"),
                    createVNode("p", { class: "text-secondary-600" }, [
                      createTextVNode(" 123 Industrial Park"),
                      createVNode("br"),
                      createTextVNode(" Shah Alam, 40000 Selangor"),
                      createVNode("br"),
                      createTextVNode(" Malaysia ")
                    ])
                  ]),
                  createVNode("div", { class: "bg-secondary-50 rounded-xl p-6" }, [
                    createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-4" }, "Contact Details"),
                    createVNode("div", { class: "space-y-3 text-secondary-600" }, [
                      createVNode("p", null, [
                        createVNode("strong", null, "Phone:"),
                        createTextVNode(" +60 3-1234 5678")
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Email:"),
                        createTextVNode(" info@packaging-automation.com")
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Hours:"),
                        createTextVNode(" Mon-Fri 9:00 AM - 6:00 PM")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "bg-secondary-50 rounded-xl p-6" }, [
                    createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-4" }, "Quick Response"),
                    createVNode("p", { class: "text-secondary-600" }, "We typically respond within 24 business hours.")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-20 bg-secondary-50">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-secondary-200 rounded-xl h-96 flex items-center justify-center"${_scopeId}><span class="text-secondary-400"${_scopeId}>Google Maps Embed</span></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-secondary-200 rounded-xl h-96 flex items-center justify-center" }, [
                createVNode("span", { class: "text-secondary-400" }, "Google Maps Embed")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-C8Sq8Xe9.mjs.map
