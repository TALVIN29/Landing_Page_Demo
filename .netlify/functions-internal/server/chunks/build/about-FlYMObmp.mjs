import { _ as _sfc_main$1 } from './Container-26Tm0WkQ.mjs';
import { _ as _sfc_main$2 } from './Card-BujfkT9t.mjs';
import { _ as _sfc_main$3 } from './CTASection-Bx-k183i.mjs';
import { defineComponent, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, toDisplayString, Fragment, renderList, createElementBlock, createElementVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
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

function render$3(_ctx, _cache) {
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
      d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    })
  ]);
}
function render$2(_ctx, _cache) {
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
      d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
    })
  ]);
}
function render$1(_ctx, _cache) {
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
      d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
    })
  ]);
}
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
      d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    })
  ]);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About Us",
      meta: [
        { name: "description", content: "Learn about Packaging Automation Solutions - Leading provider of packaging automation with 25+ years of experience." }
      ]
    });
    const coreValues = [
      {
        title: "Innovation",
        description: "Constantly pushing boundaries to deliver cutting-edge automation solutions.",
        icon: render$2
      },
      {
        title: "Quality",
        description: "Uncompromising commitment to excellence in every project we undertake.",
        icon: render$1
      },
      {
        title: "Partnership",
        description: "Building lasting relationships through trust, transparency, and collaboration.",
        icon: render
      },
      {
        title: "Global Reach",
        description: "Serving clients across 15 countries with local expertise and global standards.",
        icon: render$3
      }
    ];
    const milestones = [
      {
        year: "1999",
        title: "Company Founded",
        description: "Started as a small packaging consultancy in Malaysia."
      },
      {
        year: "2005",
        title: "First Major Project",
        description: "Completed first large-scale automation project for a pharmaceutical company."
      },
      {
        year: "2010",
        title: "International Expansion",
        description: "Expanded operations to Singapore and Indonesia."
      },
      {
        year: "2015",
        title: "Technology Innovation Center",
        description: "Opened dedicated R&D facility for automation technology."
      },
      {
        year: "2020",
        title: "500th Project Milestone",
        description: "Successfully completed 500th automation project across 15 countries."
      },
      {
        year: "2026",
        title: "Industry Leader",
        description: "Recognized as leading packaging automation provider in Southeast Asia."
      }
    ];
    const teamMembers = [
      { name: "Ahmad Hassan", position: "CEO & Founder" },
      { name: "Sarah Lim", position: "Chief Operations Officer" },
      { name: "Rajesh Kumar", position: "Technical Director" },
      { name: "Michelle Tan", position: "Head of Engineering" }
    ];
    const certifications = ["ISO 9001", "ISO 14001", "OHSAS 18001", "CE Marking", "FDA", "GMP"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = _sfc_main$1;
      const _component_UiCard = _sfc_main$2;
      const _component_SectionsCTASection = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative py-20 lg:py-32 bg-gradient-to-br from-primary-900 to-secondary-900 overflow-hidden"><div class="absolute inset-0 opacity-20"><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", "background-size": "40px 40px" })}"></div></div>`);
      _push(ssrRenderComponent(_component_UiContainer, {
        size: "lg",
        class: "relative z-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl"${_scopeId}><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"${_scopeId}> About Us </h1><p class="text-xl text-primary-100 mb-8"${_scopeId}> Leading the future of packaging automation with innovative solutions and unmatched expertise since 1999. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl" }, [
                createVNode("h1", { class: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" }, " About Us "),
                createVNode("p", { class: "text-xl text-primary-100 mb-8" }, " Leading the future of packaging automation with innovative solutions and unmatched expertise since 1999. ")
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
            _push2(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"${_scopeId}><div${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6"${_scopeId}> Our Mission </h2><p class="text-lg text-secondary-600 mb-6 leading-relaxed"${_scopeId}> At Packaging Automation Solutions, we are dedicated to transforming the packaging industry through cutting-edge automation technology. Our mission is to help businesses achieve higher efficiency, better quality, and sustainable growth. </p><p class="text-lg text-secondary-600 leading-relaxed"${_scopeId}> With over 25 years of experience and 500+ successful projects across 15 countries, we have established ourselves as a trusted partner for companies seeking to modernize their packaging operations. </p></div><div class="bg-secondary-100 rounded-2xl h-96 flex items-center justify-center"${_scopeId}><span class="text-secondary-400 text-lg"${_scopeId}>Company Image Placeholder</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-6" }, " Our Mission "),
                  createVNode("p", { class: "text-lg text-secondary-600 mb-6 leading-relaxed" }, " At Packaging Automation Solutions, we are dedicated to transforming the packaging industry through cutting-edge automation technology. Our mission is to help businesses achieve higher efficiency, better quality, and sustainable growth. "),
                  createVNode("p", { class: "text-lg text-secondary-600 leading-relaxed" }, " With over 25 years of experience and 500+ successful projects across 15 countries, we have established ourselves as a trusted partner for companies seeking to modernize their packaging operations. ")
                ]),
                createVNode("div", { class: "bg-secondary-100 rounded-2xl h-96 flex items-center justify-center" }, [
                  createVNode("span", { class: "text-secondary-400 text-lg" }, "Company Image Placeholder")
                ])
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
            _push2(`<div class="text-center max-w-3xl mx-auto mb-16"${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4"${_scopeId}> Our Core Values </h2><p class="text-lg text-secondary-600"${_scopeId}> The principles that guide everything we do </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(coreValues, (value, index) => {
              _push2(ssrRenderComponent(_component_UiCard, {
                key: index,
                class: "text-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4"${_scopeId2}>`);
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(value.icon), { class: "w-8 h-8 text-primary-600" }, null), _parent3, _scopeId2);
                    _push3(`</div><h3 class="text-xl font-bold text-secondary-900 mb-2"${_scopeId2}>${ssrInterpolate(value.title)}</h3><p class="text-secondary-600 text-sm"${_scopeId2}>${ssrInterpolate(value.description)}</p>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4" }, [
                        (openBlock(), createBlock(resolveDynamicComponent(value.icon), { class: "w-8 h-8 text-primary-600" }))
                      ]),
                      createVNode("h3", { class: "text-xl font-bold text-secondary-900 mb-2" }, toDisplayString(value.title), 1),
                      createVNode("p", { class: "text-secondary-600 text-sm" }, toDisplayString(value.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
                createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-4" }, " Our Core Values "),
                createVNode("p", { class: "text-lg text-secondary-600" }, " The principles that guide everything we do ")
              ]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(coreValues, (value, index) => {
                  return createVNode(_component_UiCard, {
                    key: index,
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4" }, [
                        (openBlock(), createBlock(resolveDynamicComponent(value.icon), { class: "w-8 h-8 text-primary-600" }))
                      ]),
                      createVNode("h3", { class: "text-xl font-bold text-secondary-900 mb-2" }, toDisplayString(value.title), 1),
                      createVNode("p", { class: "text-secondary-600 text-sm" }, toDisplayString(value.description), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 64))
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
            _push2(`<div class="text-center max-w-3xl mx-auto mb-16"${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4"${_scopeId}> Our Journey </h2><p class="text-lg text-secondary-600"${_scopeId}> Milestones that shaped our company </p></div><div class="max-w-4xl mx-auto"${_scopeId}><div class="relative"${_scopeId}><div class="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform lg:-translate-x-1/2"${_scopeId}></div><!--[-->`);
            ssrRenderList(milestones, (milestone, index) => {
              _push2(`<div class="relative mb-12 last:mb-0"${_scopeId}><div class="${ssrRenderClass([
                "flex flex-col lg:flex-row items-start",
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              ])}"${_scopeId}><div class="hidden lg:block lg:w-1/2"${_scopeId}></div><div class="absolute left-4 lg:left-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white transform lg:-translate-x-1/2 shadow-lg z-10"${_scopeId}></div><div class="${ssrRenderClass([index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12", "pl-16 lg:pl-0 lg:w-1/2"])}"${_scopeId}><span class="text-primary-600 font-bold text-lg"${_scopeId}>${ssrInterpolate(milestone.year)}</span><h3 class="text-xl font-bold text-secondary-900 mt-1 mb-2"${_scopeId}>${ssrInterpolate(milestone.title)}</h3><p class="text-secondary-600"${_scopeId}>${ssrInterpolate(milestone.description)}</p></div></div></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
                createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-4" }, " Our Journey "),
                createVNode("p", { class: "text-lg text-secondary-600" }, " Milestones that shaped our company ")
              ]),
              createVNode("div", { class: "max-w-4xl mx-auto" }, [
                createVNode("div", { class: "relative" }, [
                  createVNode("div", { class: "absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform lg:-translate-x-1/2" }),
                  (openBlock(), createBlock(Fragment, null, renderList(milestones, (milestone, index) => {
                    return createVNode("div", {
                      key: index,
                      class: "relative mb-12 last:mb-0"
                    }, [
                      createVNode("div", {
                        class: [
                          "flex flex-col lg:flex-row items-start",
                          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        ]
                      }, [
                        createVNode("div", { class: "hidden lg:block lg:w-1/2" }),
                        createVNode("div", { class: "absolute left-4 lg:left-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white transform lg:-translate-x-1/2 shadow-lg z-10" }),
                        createVNode("div", {
                          class: ["pl-16 lg:pl-0 lg:w-1/2", index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"]
                        }, [
                          createVNode("span", { class: "text-primary-600 font-bold text-lg" }, toDisplayString(milestone.year), 1),
                          createVNode("h3", { class: "text-xl font-bold text-secondary-900 mt-1 mb-2" }, toDisplayString(milestone.title), 1),
                          createVNode("p", { class: "text-secondary-600" }, toDisplayString(milestone.description), 1)
                        ], 2)
                      ], 2)
                    ]);
                  }), 64))
                ])
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
            _push2(`<div class="text-center max-w-3xl mx-auto mb-16"${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4"${_scopeId}> Leadership Team </h2><p class="text-lg text-secondary-600"${_scopeId}> Meet the experts behind our success </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(teamMembers, (member, index) => {
              _push2(`<div class="text-center"${_scopeId}><div class="w-32 h-32 bg-secondary-300 rounded-full mx-auto mb-4"${_scopeId}></div><h3 class="text-lg font-bold text-secondary-900"${_scopeId}>${ssrInterpolate(member.name)}</h3><p class="text-primary-600 text-sm"${_scopeId}>${ssrInterpolate(member.position)}</p></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
                createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-4" }, " Leadership Team "),
                createVNode("p", { class: "text-lg text-secondary-600" }, " Meet the experts behind our success ")
              ]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(teamMembers, (member, index) => {
                  return createVNode("div", {
                    key: index,
                    class: "text-center"
                  }, [
                    createVNode("div", { class: "w-32 h-32 bg-secondary-300 rounded-full mx-auto mb-4" }),
                    createVNode("h3", { class: "text-lg font-bold text-secondary-900" }, toDisplayString(member.name), 1),
                    createVNode("p", { class: "text-primary-600 text-sm" }, toDisplayString(member.position), 1)
                  ]);
                }), 64))
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
            _push2(`<div class="text-center max-w-3xl mx-auto mb-16"${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4"${_scopeId}> Certifications &amp; Standards </h2><p class="text-lg text-secondary-600"${_scopeId}> Committed to quality and compliance </p></div><div class="flex flex-wrap justify-center gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(certifications, (cert, index) => {
              _push2(`<div class="w-24 h-24 bg-secondary-100 rounded-lg flex items-center justify-center"${_scopeId}><span class="text-secondary-500 text-xs font-bold text-center"${_scopeId}>${ssrInterpolate(cert)}</span></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
                createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-4" }, " Certifications & Standards "),
                createVNode("p", { class: "text-lg text-secondary-600" }, " Committed to quality and compliance ")
              ]),
              createVNode("div", { class: "flex flex-wrap justify-center gap-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(certifications, (cert, index) => {
                  return createVNode("div", {
                    key: index,
                    class: "w-24 h-24 bg-secondary-100 rounded-lg flex items-center justify-center"
                  }, [
                    createVNode("span", { class: "text-secondary-500 text-xs font-bold text-center" }, toDisplayString(cert), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-FlYMObmp.mjs.map
