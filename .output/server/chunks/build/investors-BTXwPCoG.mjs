import { _ as _sfc_main$1 } from './Container-26Tm0WkQ.mjs';
import { u as useHead, _ as _sfc_main$2 } from './server.mjs';
import { _ as _sfc_main$3 } from './Card-BujfkT9t.mjs';
import { _ as _sfc_main$4 } from './CTASection-Bx-k183i.mjs';
import { defineComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "investors",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Investor Relations",
      meta: [
        { name: "description", content: "Investor relations information for Packaging Automation Solutions - Financial highlights, corporate governance, and stock information." }
      ]
    });
    const financialStats = [
      { value: "RM 485M", label: "Market Capitalization" },
      { value: "RM 85M", label: "Annual Revenue" },
      { value: "18%", label: "YoY Growth" },
      { value: "3.2%", label: "Dividend Yield" }
    ];
    const boardMembers = [
      { name: "Dato Sri Ahmad Hassan", position: "Chairman & CEO", background: "30+ years in manufacturing & automation" },
      { name: "Tan Sri Dr. Wong", position: "Independent Director", background: "Former central bank governor" },
      { name: "Prof. Dr. Sarah Chen", position: "Independent Director", background: "Industry 4.0 academic expert" },
      { name: "Rajesh Kumar", position: "Executive Director", background: "Technical Director with 20+ years experience" },
      { name: "Datuk Michelle Tan", position: "Non-Executive Director", background: "Banking & finance specialist" },
      { name: "James Lim", position: "Independent Director", background: "Corporate governance expert" }
    ];
    const governanceItems = [
      { title: "Board Independence", description: "Majority of board members are independent, ensuring unbiased oversight and decision-making." },
      { title: "Audit Committee", description: "Independent audit committee providing robust financial oversight and risk management." },
      { title: "ESG Commitment", description: "Strong environmental, social, and governance practices integrated into our business strategy." }
    ];
    const annualReports = [
      { year: "2025", title: "Annual Report 2025", description: "Full year financial results and strategic overview" },
      { year: "2024", title: "Annual Report 2024", description: "Full year financial results and strategic overview" },
      { year: "2023", title: "Annual Report 2023", description: "Full year financial results and strategic overview" }
    ];
    const pressReleases = [
      { date: "March 1, 2026", title: "Q4 2025 Financial Results Announced", excerpt: "Record quarterly revenue driven by strong demand in Southeast Asia markets." },
      { date: "February 15, 2026", title: "New Strategic Partnership in Vietnam", excerpt: "Signed MOU with leading Vietnamese manufacturer for automation solutions." },
      { date: "January 10, 2026", title: "Dividend Declaration", excerpt: "Board declares second interim dividend of 8 sen per share." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = _sfc_main$1;
      const _component_UiButton = _sfc_main$2;
      const _component_UiCard = _sfc_main$3;
      const _component_SectionsCTASection = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative py-20 lg:py-32 bg-gradient-to-br from-secondary-900 to-primary-900 overflow-hidden"><div class="absolute inset-0 opacity-20"><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", "background-size": "40px 40px" })}"></div></div>`);
      _push(ssrRenderComponent(_component_UiContainer, {
        size: "lg",
        class: "relative z-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl"${_scopeId}><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"${_scopeId}> Investor Relations </h1><p class="text-xl text-primary-100 mb-8"${_scopeId}> Building sustainable value through innovation and excellence in packaging automation. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl" }, [
                createVNode("h1", { class: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" }, " Investor Relations "),
                createVNode("p", { class: "text-xl text-primary-100 mb-8" }, " Building sustainable value through innovation and excellence in packaging automation. ")
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
            _push2(`<div class="text-center max-w-3xl mx-auto mb-16"${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4"${_scopeId}> Financial Highlights </h2><p class="text-lg text-secondary-600"${_scopeId}> Key performance metrics demonstrating our growth trajectory </p></div><div class="grid grid-cols-2 lg:grid-cols-4 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(financialStats, (stat, index) => {
              _push2(`<div class="text-center p-6 bg-secondary-50 rounded-xl"${_scopeId}><div class="text-3xl lg:text-4xl font-bold text-primary-600 mb-2"${_scopeId}>${ssrInterpolate(stat.value)}</div><div class="text-secondary-600 text-sm"${_scopeId}>${ssrInterpolate(stat.label)}</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
                createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-4" }, " Financial Highlights "),
                createVNode("p", { class: "text-lg text-secondary-600" }, " Key performance metrics demonstrating our growth trajectory ")
              ]),
              createVNode("div", { class: "grid grid-cols-2 lg:grid-cols-4 gap-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(financialStats, (stat, index) => {
                  return createVNode("div", {
                    key: index,
                    class: "text-center p-6 bg-secondary-50 rounded-xl"
                  }, [
                    createVNode("div", { class: "text-3xl lg:text-4xl font-bold text-primary-600 mb-2" }, toDisplayString(stat.value), 1),
                    createVNode("div", { class: "text-secondary-600 text-sm" }, toDisplayString(stat.label), 1)
                  ]);
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
            _push2(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"${_scopeId}><div${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6"${_scopeId}> Investment Opportunity </h2><p class="text-lg text-secondary-600 mb-6 leading-relaxed"${_scopeId}> Packaging Automation Solutions is positioned at the forefront of Industry 4.0 transformation in Southeast Asia. Our proven track record of delivering high-value automation solutions positions us for continued growth in a rapidly expanding market. </p><p class="text-lg text-secondary-600 mb-8 leading-relaxed"${_scopeId}> The global packaging automation market is projected to reach $12.8 billion by 2028, with Southeast Asia representing the fastest-growing region. Our established presence across 15 countries provides a strong foundation to capture this growth. </p><div class="flex flex-wrap gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiButton, { variant: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Download Investment Deck `);
                } else {
                  return [
                    createTextVNode(" Download Investment Deck ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiButton, { variant: "outline" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Contact IR Team `);
                } else {
                  return [
                    createTextVNode(" Contact IR Team ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-2 gap-4"${_scopeId}><div class="bg-white p-6 rounded-xl shadow-sm"${_scopeId}><div class="text-3xl font-bold text-primary-600 mb-2"${_scopeId}>25+</div><div class="text-secondary-600 text-sm"${_scopeId}>Years of Experience</div></div><div class="bg-white p-6 rounded-xl shadow-sm"${_scopeId}><div class="text-3xl font-bold text-primary-600 mb-2"${_scopeId}>500+</div><div class="text-secondary-600 text-sm"${_scopeId}>Projects Delivered</div></div><div class="bg-white p-6 rounded-xl shadow-sm"${_scopeId}><div class="text-3xl font-bold text-primary-600 mb-2"${_scopeId}>15</div><div class="text-secondary-600 text-sm"${_scopeId}>Countries</div></div><div class="bg-white p-6 rounded-xl shadow-sm"${_scopeId}><div class="text-3xl font-bold text-primary-600 mb-2"${_scopeId}>98%</div><div class="text-secondary-600 text-sm"${_scopeId}>Client Satisfaction</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" }, [
                createVNode("div", null, [
                  createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-6" }, " Investment Opportunity "),
                  createVNode("p", { class: "text-lg text-secondary-600 mb-6 leading-relaxed" }, " Packaging Automation Solutions is positioned at the forefront of Industry 4.0 transformation in Southeast Asia. Our proven track record of delivering high-value automation solutions positions us for continued growth in a rapidly expanding market. "),
                  createVNode("p", { class: "text-lg text-secondary-600 mb-8 leading-relaxed" }, " The global packaging automation market is projected to reach $12.8 billion by 2028, with Southeast Asia representing the fastest-growing region. Our established presence across 15 countries provides a strong foundation to capture this growth. "),
                  createVNode("div", { class: "flex flex-wrap gap-4" }, [
                    createVNode(_component_UiButton, { variant: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode(" Download Investment Deck ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiButton, { variant: "outline" }, {
                      default: withCtx(() => [
                        createTextVNode(" Contact IR Team ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                  createVNode("div", { class: "bg-white p-6 rounded-xl shadow-sm" }, [
                    createVNode("div", { class: "text-3xl font-bold text-primary-600 mb-2" }, "25+"),
                    createVNode("div", { class: "text-secondary-600 text-sm" }, "Years of Experience")
                  ]),
                  createVNode("div", { class: "bg-white p-6 rounded-xl shadow-sm" }, [
                    createVNode("div", { class: "text-3xl font-bold text-primary-600 mb-2" }, "500+"),
                    createVNode("div", { class: "text-secondary-600 text-sm" }, "Projects Delivered")
                  ]),
                  createVNode("div", { class: "bg-white p-6 rounded-xl shadow-sm" }, [
                    createVNode("div", { class: "text-3xl font-bold text-primary-600 mb-2" }, "15"),
                    createVNode("div", { class: "text-secondary-600 text-sm" }, "Countries")
                  ]),
                  createVNode("div", { class: "bg-white p-6 rounded-xl shadow-sm" }, [
                    createVNode("div", { class: "text-3xl font-bold text-primary-600 mb-2" }, "98%"),
                    createVNode("div", { class: "text-secondary-600 text-sm" }, "Client Satisfaction")
                  ])
                ])
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
            _push2(`<div class="text-center max-w-3xl mx-auto mb-16"${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4"${_scopeId}> Board of Directors </h2><p class="text-lg text-secondary-600"${_scopeId}> Experienced leadership guiding our strategic direction </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(boardMembers, (member, index) => {
              _push2(`<div class="bg-secondary-50 rounded-xl p-6 text-center"${_scopeId}><div class="w-24 h-24 bg-secondary-300 rounded-full mx-auto mb-4"${_scopeId}></div><h3 class="text-lg font-bold text-secondary-900"${_scopeId}>${ssrInterpolate(member.name)}</h3><p class="text-primary-600 text-sm mb-2"${_scopeId}>${ssrInterpolate(member.position)}</p><p class="text-secondary-600 text-xs"${_scopeId}>${ssrInterpolate(member.background)}</p></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
                createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-4" }, " Board of Directors "),
                createVNode("p", { class: "text-lg text-secondary-600" }, " Experienced leadership guiding our strategic direction ")
              ]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(boardMembers, (member, index) => {
                  return createVNode("div", {
                    key: index,
                    class: "bg-secondary-50 rounded-xl p-6 text-center"
                  }, [
                    createVNode("div", { class: "w-24 h-24 bg-secondary-300 rounded-full mx-auto mb-4" }),
                    createVNode("h3", { class: "text-lg font-bold text-secondary-900" }, toDisplayString(member.name), 1),
                    createVNode("p", { class: "text-primary-600 text-sm mb-2" }, toDisplayString(member.position), 1),
                    createVNode("p", { class: "text-secondary-600 text-xs" }, toDisplayString(member.background), 1)
                  ]);
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
            _push2(`<div class="text-center max-w-3xl mx-auto mb-16"${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4"${_scopeId}> Corporate Governance </h2><p class="text-lg text-secondary-600"${_scopeId}> Committed to transparency, accountability, and ethical business practices </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(governanceItems, (item, index) => {
              _push2(ssrRenderComponent(_component_UiCard, {
                key: index,
                class: "p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="text-lg font-bold text-secondary-900 mb-3"${_scopeId2}>${ssrInterpolate(item.title)}</h3><p class="text-secondary-600 text-sm"${_scopeId2}>${ssrInterpolate(item.description)}</p>`);
                  } else {
                    return [
                      createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-3" }, toDisplayString(item.title), 1),
                      createVNode("p", { class: "text-secondary-600 text-sm" }, toDisplayString(item.description), 1)
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
                createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-4" }, " Corporate Governance "),
                createVNode("p", { class: "text-lg text-secondary-600" }, " Committed to transparency, accountability, and ethical business practices ")
              ]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(governanceItems, (item, index) => {
                  return createVNode(_component_UiCard, {
                    key: index,
                    class: "p-6"
                  }, {
                    default: withCtx(() => [
                      createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-3" }, toDisplayString(item.title), 1),
                      createVNode("p", { class: "text-secondary-600 text-sm" }, toDisplayString(item.description), 1)
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
            _push2(`<div class="text-center max-w-3xl mx-auto mb-16"${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4"${_scopeId}> Annual Reports </h2><p class="text-lg text-secondary-600"${_scopeId}> Download our financial reports and presentations </p></div><div class="space-y-4 max-w-3xl mx-auto"${_scopeId}><!--[-->`);
            ssrRenderList(annualReports, (report, index) => {
              _push2(`<div class="flex items-center justify-between p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors"${_scopeId}><div class="flex items-center gap-4"${_scopeId}><div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center"${_scopeId}><span class="text-primary-600 font-bold text-sm"${_scopeId}>${ssrInterpolate(report.year)}</span></div><div${_scopeId}><h3 class="font-bold text-secondary-900"${_scopeId}>${ssrInterpolate(report.title)}</h3><p class="text-secondary-600 text-sm"${_scopeId}>${ssrInterpolate(report.description)}</p></div></div>`);
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "outline",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Download PDF `);
                  } else {
                    return [
                      createTextVNode(" Download PDF ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
                createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-4" }, " Annual Reports "),
                createVNode("p", { class: "text-lg text-secondary-600" }, " Download our financial reports and presentations ")
              ]),
              createVNode("div", { class: "space-y-4 max-w-3xl mx-auto" }, [
                (openBlock(), createBlock(Fragment, null, renderList(annualReports, (report, index) => {
                  return createVNode("div", {
                    key: index,
                    class: "flex items-center justify-between p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors"
                  }, [
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode("div", { class: "w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center" }, [
                        createVNode("span", { class: "text-primary-600 font-bold text-sm" }, toDisplayString(report.year), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "font-bold text-secondary-900" }, toDisplayString(report.title), 1),
                        createVNode("p", { class: "text-secondary-600 text-sm" }, toDisplayString(report.description), 1)
                      ])
                    ]),
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Download PDF ")
                      ]),
                      _: 1
                    })
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-20 lg:py-32 bg-secondary-900 text-white">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center max-w-3xl mx-auto mb-16"${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold mb-4"${_scopeId}> Stock Information </h2><p class="text-primary-100 text-lg"${_scopeId}> Our shares are listed on Bursa Malaysia </p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-8"${_scopeId}><div class="bg-white/10 backdrop-blur-sm rounded-xl p-8"${_scopeId}><h3 class="text-xl font-bold mb-6"${_scopeId}>Share Performance</h3><div class="space-y-4"${_scopeId}><div class="flex justify-between items-center py-2 border-b border-white/20"${_scopeId}><span class="text-primary-100"${_scopeId}>Current Price</span><span class="font-bold"${_scopeId}>RM 4.85</span></div><div class="flex justify-between items-center py-2 border-b border-white/20"${_scopeId}><span class="text-primary-100"${_scopeId}>Market Cap</span><span class="font-bold"${_scopeId}>RM 485M</span></div><div class="flex justify-between items-center py-2 border-b border-white/20"${_scopeId}><span class="text-primary-100"${_scopeId}>52-Week High</span><span class="font-bold"${_scopeId}>RM 5.20</span></div><div class="flex justify-between items-center py-2 border-b border-white/20"${_scopeId}><span class="text-primary-100"${_scopeId}>52-Week Low</span><span class="font-bold"${_scopeId}>RM 3.45</span></div></div></div><div class="bg-white/10 backdrop-blur-sm rounded-xl p-8"${_scopeId}><h3 class="text-xl font-bold mb-6"${_scopeId}>Dividend Information</h3><div class="space-y-4"${_scopeId}><div class="flex justify-between items-center py-2 border-b border-white/20"${_scopeId}><span class="text-primary-100"${_scopeId}>Dividend Yield</span><span class="font-bold"${_scopeId}>3.2%</span></div><div class="flex justify-between items-center py-2 border-b border-white/20"${_scopeId}><span class="text-primary-100"${_scopeId}>Dividend Per Share</span><span class="font-bold"${_scopeId}>RM 0.15</span></div><div class="flex justify-between items-center py-2 border-b border-white/20"${_scopeId}><span class="text-primary-100"${_scopeId}>Ex-Dividend Date</span><span class="font-bold"${_scopeId}>March 15, 2026</span></div><div class="flex justify-between items-center py-2"${_scopeId}><span class="text-primary-100"${_scopeId}>Payment Date</span><span class="font-bold"${_scopeId}>April 30, 2026</span></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
                createVNode("h2", { class: "text-3xl sm:text-4xl font-bold mb-4" }, " Stock Information "),
                createVNode("p", { class: "text-primary-100 text-lg" }, " Our shares are listed on Bursa Malaysia ")
              ]),
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, [
                createVNode("div", { class: "bg-white/10 backdrop-blur-sm rounded-xl p-8" }, [
                  createVNode("h3", { class: "text-xl font-bold mb-6" }, "Share Performance"),
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "flex justify-between items-center py-2 border-b border-white/20" }, [
                      createVNode("span", { class: "text-primary-100" }, "Current Price"),
                      createVNode("span", { class: "font-bold" }, "RM 4.85")
                    ]),
                    createVNode("div", { class: "flex justify-between items-center py-2 border-b border-white/20" }, [
                      createVNode("span", { class: "text-primary-100" }, "Market Cap"),
                      createVNode("span", { class: "font-bold" }, "RM 485M")
                    ]),
                    createVNode("div", { class: "flex justify-between items-center py-2 border-b border-white/20" }, [
                      createVNode("span", { class: "text-primary-100" }, "52-Week High"),
                      createVNode("span", { class: "font-bold" }, "RM 5.20")
                    ]),
                    createVNode("div", { class: "flex justify-between items-center py-2 border-b border-white/20" }, [
                      createVNode("span", { class: "text-primary-100" }, "52-Week Low"),
                      createVNode("span", { class: "font-bold" }, "RM 3.45")
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white/10 backdrop-blur-sm rounded-xl p-8" }, [
                  createVNode("h3", { class: "text-xl font-bold mb-6" }, "Dividend Information"),
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("div", { class: "flex justify-between items-center py-2 border-b border-white/20" }, [
                      createVNode("span", { class: "text-primary-100" }, "Dividend Yield"),
                      createVNode("span", { class: "font-bold" }, "3.2%")
                    ]),
                    createVNode("div", { class: "flex justify-between items-center py-2 border-b border-white/20" }, [
                      createVNode("span", { class: "text-primary-100" }, "Dividend Per Share"),
                      createVNode("span", { class: "font-bold" }, "RM 0.15")
                    ]),
                    createVNode("div", { class: "flex justify-between items-center py-2 border-b border-white/20" }, [
                      createVNode("span", { class: "text-primary-100" }, "Ex-Dividend Date"),
                      createVNode("span", { class: "font-bold" }, "March 15, 2026")
                    ]),
                    createVNode("div", { class: "flex justify-between items-center py-2" }, [
                      createVNode("span", { class: "text-primary-100" }, "Payment Date"),
                      createVNode("span", { class: "font-bold" }, "April 30, 2026")
                    ])
                  ])
                ])
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
            _push2(`<div class="text-center max-w-3xl mx-auto mb-16"${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4"${_scopeId}> Latest Announcements </h2><p class="text-lg text-secondary-600"${_scopeId}> Recent news and updates for investors </p></div><div class="space-y-6 max-w-3xl mx-auto"${_scopeId}><!--[-->`);
            ssrRenderList(pressReleases, (news, index) => {
              _push2(`<div class="border-l-4 border-primary-600 pl-6"${_scopeId}><span class="text-secondary-500 text-sm"${_scopeId}>${ssrInterpolate(news.date)}</span><h3 class="text-lg font-bold text-secondary-900 mt-1 mb-2"${_scopeId}>${ssrInterpolate(news.title)}</h3><p class="text-secondary-600 text-sm"${_scopeId}>${ssrInterpolate(news.excerpt)}</p></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center max-w-3xl mx-auto mb-16" }, [
                createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-4" }, " Latest Announcements "),
                createVNode("p", { class: "text-lg text-secondary-600" }, " Recent news and updates for investors ")
              ]),
              createVNode("div", { class: "space-y-6 max-w-3xl mx-auto" }, [
                (openBlock(), createBlock(Fragment, null, renderList(pressReleases, (news, index) => {
                  return createVNode("div", {
                    key: index,
                    class: "border-l-4 border-primary-600 pl-6"
                  }, [
                    createVNode("span", { class: "text-secondary-500 text-sm" }, toDisplayString(news.date), 1),
                    createVNode("h3", { class: "text-lg font-bold text-secondary-900 mt-1 mb-2" }, toDisplayString(news.title), 1),
                    createVNode("p", { class: "text-secondary-600 text-sm" }, toDisplayString(news.excerpt), 1)
                  ]);
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
            _push2(`<div class="max-w-3xl mx-auto text-center"${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6"${_scopeId}> Investor Relations Contact </h2><p class="text-lg text-secondary-600 mb-8"${_scopeId}> For inquiries regarding investor relations, please contact: </p><div class="bg-white rounded-xl p-8 shadow-sm"${_scopeId}><h3 class="text-lg font-bold text-secondary-900 mb-2"${_scopeId}>Investor Relations Office</h3><p class="text-secondary-600 mb-4"${_scopeId}>Email: ir@packagingautomation.com</p><p class="text-secondary-600 mb-6"${_scopeId}>Phone: +60 3 1234 5678</p>`);
            _push2(ssrRenderComponent(_component_UiButton, { variant: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Subscribe to IR Updates `);
                } else {
                  return [
                    createTextVNode(" Subscribe to IR Updates ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-3xl mx-auto text-center" }, [
                createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-secondary-900 mb-6" }, " Investor Relations Contact "),
                createVNode("p", { class: "text-lg text-secondary-600 mb-8" }, " For inquiries regarding investor relations, please contact: "),
                createVNode("div", { class: "bg-white rounded-xl p-8 shadow-sm" }, [
                  createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-2" }, "Investor Relations Office"),
                  createVNode("p", { class: "text-secondary-600 mb-4" }, "Email: ir@packagingautomation.com"),
                  createVNode("p", { class: "text-secondary-600 mb-6" }, "Phone: +60 3 1234 5678"),
                  createVNode(_component_UiButton, { variant: "primary" }, {
                    default: withCtx(() => [
                      createTextVNode(" Subscribe to IR Updates ")
                    ]),
                    _: 1
                  })
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/investors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=investors-BTXwPCoG.mjs.map
