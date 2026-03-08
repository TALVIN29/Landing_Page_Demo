import { _ as _sfc_main$1 } from './Container-26Tm0WkQ.mjs';
import { a as __nuxt_component_1, _ as _sfc_main$3 } from './CTASection-Bx-k183i.mjs';
import { u as useHead, _ as _sfc_main$2 } from './server.mjs';
import { defineComponent, withCtx, createVNode, resolveDynamicComponent, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, createElementBlock, createElementVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { r as render$3, a as render$2, b as render$1, c as render$4, d as render$1$1 } from './WrenchScrewdriverIcon-QvFPYEfD.mjs';
import '../_/nitro.mjs';
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
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';
import '@supabase/ssr';

function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createElementVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
    }),
    createElementVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.867 19.125h.008v.008h-.008v-.008Z"
    })
  ]);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Our Services",
      meta: [
        { name: "description", content: "Comprehensive packaging automation services including consultation, manufacturing, installation, training, and maintenance." }
      ]
    });
    const services = [
      {
        title: "Consultation & System Design",
        description: "Our expert team works closely with you to understand your unique requirements and design custom automation solutions that optimize your packaging processes.",
        icon: render$3,
        features: [
          "Process analysis and optimization",
          "Custom system architecture design",
          "Feasibility studies",
          "ROI calculations",
          "Integration planning"
        ]
      },
      {
        title: "Custom Equipment Manufacturing",
        description: "We manufacture high-quality, precision-engineered automation equipment tailored to your specific industry requirements and production goals.",
        icon: render$2,
        features: [
          "Precision engineering",
          "Quality materials and components",
          "Industry-specific customization",
          "Rigorous quality testing",
          "Compliance with international standards"
        ]
      },
      {
        title: "Installation & Commissioning",
        description: "Our professional installation team ensures your equipment is properly set up, tested, and integrated into your existing production line.",
        icon: render$1,
        features: [
          "Professional installation",
          "System integration",
          "Performance testing",
          "Safety verification",
          "Production line optimization"
        ]
      },
      {
        title: "Training & Knowledge Transfer",
        description: "Comprehensive training programs to ensure your team can operate and maintain the equipment effectively and safely.",
        icon: render$4,
        features: [
          "Hands-on operator training",
          "Maintenance procedures",
          "Troubleshooting guides",
          "Safety protocols",
          "Documentation and manuals"
        ]
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing maintenance and support services to keep your equipment running at peak performance and minimize downtime.",
        icon: render,
        features: [
          "Preventive maintenance",
          "24/7 technical support",
          "Remote diagnostics",
          "On-site service",
          "Performance monitoring"
        ]
      },
      {
        title: "Spare Parts & Logistics",
        description: "Reliable supply of genuine spare parts and efficient logistics to ensure minimal disruption to your operations.",
        icon: render$1$1,
        features: [
          "Genuine spare parts",
          "Inventory management",
          "Fast delivery",
          "Global shipping",
          "Parts warranty"
        ]
      }
    ];
    const processSteps = [
      { title: "Consultation", description: "Understanding your needs" },
      { title: "Design", description: "Creating your solution" },
      { title: "Manufacturing", description: "Building your equipment" },
      { title: "Installation", description: "Setting up on-site" },
      { title: "Support", description: "Ongoing assistance" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_UiButton = _sfc_main$2;
      const _component_SectionsCTASection = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative py-20 lg:py-32 bg-gradient-to-br from-secondary-900 to-primary-900 overflow-hidden"><div class="absolute inset-0 opacity-20"><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", "background-size": "40px 40px" })}"></div></div>`);
      _push(ssrRenderComponent(_component_UiContainer, {
        size: "lg",
        class: "relative z-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl text-center mx-auto"${_scopeId}><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"${_scopeId}> Our Services </h1><p class="text-xl text-primary-100"${_scopeId}> End-to-end packaging automation solutions tailored to your needs </p></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl text-center mx-auto" }, [
                createVNode("h1", { class: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" }, " Our Services "),
                createVNode("p", { class: "text-xl text-primary-100" }, " End-to-end packaging automation solutions tailored to your needs ")
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
            _push2(`<div class="space-y-24"${_scopeId}><!--[-->`);
            ssrRenderList(services, (service, index) => {
              _push2(`<div class="${ssrRenderClass([
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              ])}"${_scopeId}><div class="${ssrRenderClass(index % 2 === 1 ? "lg:order-2" : "")}"${_scopeId}><div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(service.icon), { class: "w-8 h-8 text-primary-600" }, null), _parent2, _scopeId);
              _push2(`</div><h2 class="text-3xl font-bold text-secondary-900 mb-4"${_scopeId}>${ssrInterpolate(service.title)}</h2><p class="text-lg text-secondary-600 mb-6"${_scopeId}>${ssrInterpolate(service.description)}</p><div class="mb-6"${_scopeId}><h3 class="font-semibold text-secondary-900 mb-3"${_scopeId}>Key Features:</h3><ul class="space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(service.features, (feature, fIndex) => {
                _push2(`<li class="flex items-start"${_scopeId}><svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg><span class="text-secondary-600"${_scopeId}>${ssrInterpolate(feature)}</span></li>`);
              });
              _push2(`<!--]--></ul></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, { variant: "primary" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Get a Quote `);
                        } else {
                          return [
                            createTextVNode(" Get a Quote ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, { variant: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode(" Get a Quote ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="${ssrRenderClass([index % 2 === 1 ? "lg:order-1" : "", "bg-secondary-100 rounded-2xl h-80 flex items-center justify-center"])}"${_scopeId}><span class="text-secondary-400"${_scopeId}>Service Image Placeholder</span></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-24" }, [
                (openBlock(), createBlock(Fragment, null, renderList(services, (service, index) => {
                  return createVNode("div", {
                    key: index,
                    class: [
                      "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    ]
                  }, [
                    createVNode("div", {
                      class: index % 2 === 1 ? "lg:order-2" : ""
                    }, [
                      createVNode("div", { class: "w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6" }, [
                        (openBlock(), createBlock(resolveDynamicComponent(service.icon), { class: "w-8 h-8 text-primary-600" }))
                      ]),
                      createVNode("h2", { class: "text-3xl font-bold text-secondary-900 mb-4" }, toDisplayString(service.title), 1),
                      createVNode("p", { class: "text-lg text-secondary-600 mb-6" }, toDisplayString(service.description), 1),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("h3", { class: "font-semibold text-secondary-900 mb-3" }, "Key Features:"),
                        createVNode("ul", { class: "space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(service.features, (feature, fIndex) => {
                            return openBlock(), createBlock("li", {
                              key: fIndex,
                              class: "flex items-start"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5 text-primary-500 mr-2 mt-0.5",
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
                              createVNode("span", { class: "text-secondary-600" }, toDisplayString(feature), 1)
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode(_component_NuxtLink, { to: "/contact" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiButton, { variant: "primary" }, {
                            default: withCtx(() => [
                              createTextVNode(" Get a Quote ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 2),
                    createVNode("div", {
                      class: [index % 2 === 1 ? "lg:order-1" : "", "bg-secondary-100 rounded-2xl h-80 flex items-center justify-center"]
                    }, [
                      createVNode("span", { class: "text-secondary-400" }, "Service Image Placeholder")
                    ], 2)
                  ], 2);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-20 lg:py-32 bg-secondary-50">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center max-w-3xl mx-auto mb-16"${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4"${_scopeId}> Our Process </h2><p class="text-lg text-secondary-600"${_scopeId}> From consultation to support, we guide you every step of the way </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(processSteps, (step, index) => {
              _push2(`<div class="relative"${_scopeId}><div class="text-center"${_scopeId}><div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4"${_scopeId}><span class="text-white font-bold text-xl"${_scopeId}>${ssrInterpolate(index + 1)}</span></div><h3 class="text-lg font-bold text-secondary-900 mb-2"${_scopeId}>${ssrInterpolate(step.title)}</h3><p class="text-sm text-secondary-600"${_scopeId}>${ssrInterpolate(step.description)}</p></div>`);
              if (index < processSteps.length - 1) {
                _push2(`<div class="hidden lg:block absolute top-8 left-full w-full"${_scopeId}><svg class="w-full h-2 text-primary-300" viewBox="0 0 100 10" preserveAspectRatio="none"${_scopeId}><line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5"${_scopeId}></line></svg></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
                createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-4" }, " Our Process "),
                createVNode("p", { class: "text-lg text-secondary-600" }, " From consultation to support, we guide you every step of the way ")
              ]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(processSteps, (step, index) => {
                  return createVNode("div", {
                    key: index,
                    class: "relative"
                  }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4" }, [
                        createVNode("span", { class: "text-white font-bold text-xl" }, toDisplayString(index + 1), 1)
                      ]),
                      createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-2" }, toDisplayString(step.title), 1),
                      createVNode("p", { class: "text-sm text-secondary-600" }, toDisplayString(step.description), 1)
                    ]),
                    index < processSteps.length - 1 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "hidden lg:block absolute top-8 left-full w-full"
                    }, [
                      (openBlock(), createBlock("svg", {
                        class: "w-full h-2 text-primary-300",
                        viewBox: "0 0 100 10",
                        preserveAspectRatio: "none"
                      }, [
                        createVNode("line", {
                          x1: "0",
                          y1: "5",
                          x2: "100",
                          y2: "5",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-dasharray": "5,5"
                        })
                      ]))
                    ])) : createCommentVNode("", true)
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_SectionsCTASection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-CWRlQAmF.mjs.map
