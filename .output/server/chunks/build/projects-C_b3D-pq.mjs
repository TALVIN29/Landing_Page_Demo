import { _ as _sfc_main$1 } from './Container-26Tm0WkQ.mjs';
import { u as useHead, _ as _sfc_main$2 } from './server.mjs';
import { _ as _sfc_main$3 } from './Card-BujfkT9t.mjs';
import { a as __nuxt_component_1, _ as _sfc_main$4 } from './CTASection-Bx-k183i.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, unref, createTextVNode, withDirectives, isRef, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Projects",
      meta: [
        { name: "description", content: "Explore our portfolio of successful packaging automation projects across medical, pharmaceutical, and manufacturing industries." }
      ]
    });
    const selectedIndustry = ref("");
    const selectedLocation = ref("");
    const selectedProject = ref(null);
    const industries = ["Medical Devices", "Pharmaceuticals", "Glove Manufacturing", "FMCG"];
    const locations = ["Malaysia", "Singapore", "Thailand", "Indonesia", "Philippines"];
    const projects = [
      {
        id: 1,
        title: "Sterile Packaging Line Automation",
        client: "MedTech Solutions Sdn Bhd",
        industry: "Medical Devices",
        location: "Kuala Lumpur, Malaysia",
        description: "Complete automation of sterile packaging line for medical device manufacturer, implementing filling, sealing, and labeling systems with full validation documentation.",
        challenge: "Manual packaging process was slow, error-prone, and could not meet increasing demand while maintaining sterility requirements.",
        solution: "Designed and installed a fully automated packaging line with integrated vision inspection, automated changeover, and real-time monitoring systems.",
        results: [
          "300% increase in throughput",
          "99.8% reduction in contamination risk",
          "50% reduction in labor costs",
          "Full FDA compliance achieved"
        ],
        testimonial: {
          quote: "This automation solution has transformed our operations. We can now meet growing demand while maintaining the highest quality standards.",
          author: "Dr. Sarah Chen",
          position: "Operations Director, MedTech Solutions"
        }
      },
      {
        id: 2,
        title: "Pharmaceutical Bottling System",
        client: "PharmaCare Industries",
        industry: "Pharmaceuticals",
        location: "Penang, Malaysia",
        description: "High-speed bottling and labeling system with 100% inspection and rejection capabilities for pharmaceutical liquid products.",
        challenge: "Previous bottling line had frequent jams, inconsistent fill volumes, and manual inspection could not catch all defects.",
        solution: "Implemented servo-driven filling system with automatic bottle handling, integrated vision inspection, and automated rejection of non-conforming products.",
        results: [
          "360 bottles per minute capacity",
          "\xB10.5% fill accuracy achieved",
          "Zero product recalls since installation",
          "ROI achieved in 18 months"
        ]
      },
      {
        id: 3,
        title: "Glove Packaging Automation",
        client: "Global Glove Manufacturing",
        industry: "Glove Manufacturing",
        location: "Selangor, Malaysia",
        description: "End-to-end packaging automation for nitrile glove production line with quality control integration.",
        challenge: "Manual packaging was creating bottlenecks in production and could not keep pace with the high-speed production lines.",
        solution: "Designed custom automated packaging solution including counting, boxing, case packing, and palletizing with integrated quality checks.",
        results: [
          "500% increase in packaging speed",
          "99.5% packaging accuracy",
          "Reduced packaging labor by 70%",
          "Real-time production monitoring"
        ]
      },
      {
        id: 4,
        title: "FMCG Multi-Line Integration",
        client: "Consumer Goods Co.",
        industry: "FMCG",
        location: "Singapore",
        description: "Integration of multiple packaging lines for fast-moving consumer goods with centralized control and monitoring.",
        challenge: "Five separate packaging lines with different control systems, making coordination difficult and reducing overall efficiency.",
        solution: "Unified control system integrating all five lines with smart routing, automatic balancing, and comprehensive OEE monitoring.",
        results: [
          "40% increase in overall efficiency",
          "25% reduction in changeover time",
          "Centralized monitoring dashboard",
          "Predictive maintenance alerts"
        ]
      },
      {
        id: 5,
        title: "Cosmetic Product Packaging",
        client: "Beauty Essentials Ltd",
        industry: "FMCG",
        location: "Bangkok, Thailand",
        description: "Automated filling and packaging line for premium cosmetic products with precision dosing and elegant presentation.",
        challenge: "Cosmetic products required precise dosing and gentle handling while maintaining high-end packaging aesthetics.",
        solution: "Custom-designed gentle handling system with precision dosing, premium labeling, and quality inspection for cosmetic products.",
        results: [
          "\xB10.1g dosing accuracy",
          "Premium packaging finish",
          "200 units per minute",
          "Zero damage rate"
        ]
      },
      {
        id: 6,
        title: "Diagnostic Kit Assembly",
        client: "DiagnoTech Medical",
        industry: "Medical Devices",
        location: "Jakarta, Indonesia",
        description: "Automated assembly and packaging line for diagnostic test kits with component verification and serialization.",
        challenge: "Complex multi-component assembly required precise component verification and individual kit serialization for traceability.",
        solution: "Robotic assembly system with component verification, automated kit assembly, labeling, and serialization with full traceability.",
        results: [
          "100% component verification",
          "Individual kit serialization",
          "Full traceability system",
          "FDA 21 CFR Part 11 compliant"
        ]
      }
    ];
    const filteredProjects = computed(() => {
      return projects.filter((project) => {
        const matchesIndustry = !selectedIndustry.value || project.industry === selectedIndustry.value;
        const matchesLocation = !selectedLocation.value || project.location.includes(selectedLocation.value);
        return matchesIndustry && matchesLocation;
      });
    });
    const hasActiveFilters = computed(() => {
      return selectedIndustry.value || selectedLocation.value;
    });
    const clearFilters = () => {
      selectedIndustry.value = "";
      selectedLocation.value = "";
    };
    const openProjectModal = (project) => {
      selectedProject.value = project;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = _sfc_main$1;
      const _component_UiButton = _sfc_main$2;
      const _component_UiCard = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_SectionsCTASection = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative py-20 lg:py-32 bg-gradient-to-br from-secondary-900 to-primary-900 overflow-hidden"><div class="absolute inset-0 opacity-20"><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", "background-size": "40px 40px" })}"></div></div>`);
      _push(ssrRenderComponent(_component_UiContainer, {
        size: "lg",
        class: "relative z-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl text-center mx-auto"${_scopeId}><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"${_scopeId}> Our Projects </h1><p class="text-xl text-primary-100"${_scopeId}> Real results from real clients across industries </p></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl text-center mx-auto" }, [
                createVNode("h1", { class: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" }, " Our Projects "),
                createVNode("p", { class: "text-xl text-primary-100" }, " Real results from real clients across industries ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-8 bg-white border-b border-secondary-200 sticky top-16 z-30">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap gap-4 items-center"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-sm font-medium text-secondary-700"${_scopeId}>Industry:</span><select class="form-select rounded-md border-secondary-300 text-sm"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(selectedIndustry)) ? ssrLooseContain(unref(selectedIndustry), "") : ssrLooseEqual(unref(selectedIndustry), "")) ? " selected" : ""}${_scopeId}>All Industries</option><!--[-->`);
            ssrRenderList(industries, (industry) => {
              _push2(`<option${ssrRenderAttr("value", industry)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedIndustry)) ? ssrLooseContain(unref(selectedIndustry), industry) : ssrLooseEqual(unref(selectedIndustry), industry)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(industry)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="flex items-center gap-2"${_scopeId}><span class="text-sm font-medium text-secondary-700"${_scopeId}>Location:</span><select class="form-select rounded-md border-secondary-300 text-sm"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(selectedLocation)) ? ssrLooseContain(unref(selectedLocation), "") : ssrLooseEqual(unref(selectedLocation), "")) ? " selected" : ""}${_scopeId}>All Locations</option><!--[-->`);
            ssrRenderList(locations, (location) => {
              _push2(`<option${ssrRenderAttr("value", location)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedLocation)) ? ssrLooseContain(unref(selectedLocation), location) : ssrLooseEqual(unref(selectedLocation), location)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(location)}</option>`);
            });
            _push2(`<!--]--></select></div>`);
            if (unref(hasActiveFilters)) {
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "ghost",
                size: "sm",
                onClick: clearFilters
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Clear Filters `);
                  } else {
                    return [
                      createTextVNode(" Clear Filters ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap gap-4 items-center" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("span", { class: "text-sm font-medium text-secondary-700" }, "Industry:"),
                  withDirectives(createVNode("select", {
                    "onUpdate:modelValue": ($event) => isRef(selectedIndustry) ? selectedIndustry.value = $event : null,
                    class: "form-select rounded-md border-secondary-300 text-sm"
                  }, [
                    createVNode("option", { value: "" }, "All Industries"),
                    (openBlock(), createBlock(Fragment, null, renderList(industries, (industry) => {
                      return createVNode("option", {
                        key: industry,
                        value: industry
                      }, toDisplayString(industry), 9, ["value"]);
                    }), 64))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, unref(selectedIndustry)]
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("span", { class: "text-sm font-medium text-secondary-700" }, "Location:"),
                  withDirectives(createVNode("select", {
                    "onUpdate:modelValue": ($event) => isRef(selectedLocation) ? selectedLocation.value = $event : null,
                    class: "form-select rounded-md border-secondary-300 text-sm"
                  }, [
                    createVNode("option", { value: "" }, "All Locations"),
                    (openBlock(), createBlock(Fragment, null, renderList(locations, (location) => {
                      return createVNode("option", {
                        key: location,
                        value: location
                      }, toDisplayString(location), 9, ["value"]);
                    }), 64))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, unref(selectedLocation)]
                  ])
                ]),
                unref(hasActiveFilters) ? (openBlock(), createBlock(_component_UiButton, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: clearFilters
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Clear Filters ")
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
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
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(unref(filteredProjects), (project) => {
              _push2(ssrRenderComponent(_component_UiCard, {
                key: project.id,
                class: "group cursor-pointer hover:shadow-lg transition-shadow",
                onClick: ($event) => openProjectModal(project)
              }, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="aspect-video bg-secondary-200 relative overflow-hidden"${_scopeId2}><div class="absolute inset-0 flex items-center justify-center"${_scopeId2}><span class="text-secondary-400"${_scopeId2}>Project Image</span></div><div class="absolute top-4 left-4"${_scopeId2}><span class="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full"${_scopeId2}>${ssrInterpolate(project.industry)}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "aspect-video bg-secondary-200 relative overflow-hidden" }, [
                        createVNode("div", { class: "absolute inset-0 flex items-center justify-center" }, [
                          createVNode("span", { class: "text-secondary-400" }, "Project Image")
                        ]),
                        createVNode("div", { class: "absolute top-4 left-4" }, [
                          createVNode("span", { class: "inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full" }, toDisplayString(project.industry), 1)
                        ])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-5"${_scopeId2}><h3 class="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors"${_scopeId2}>${ssrInterpolate(project.title)}</h3><p class="text-sm text-secondary-500 mb-3"${_scopeId2}>${ssrInterpolate(project.client)}</p><p class="text-secondary-600 text-sm mb-4 line-clamp-3"${_scopeId2}>${ssrInterpolate(project.description)}</p>`);
                    if (project.results) {
                      _push3(`<div class="mb-4"${_scopeId2}><h4 class="text-xs font-semibold text-secondary-500 uppercase mb-2"${_scopeId2}>Key Results</h4><div class="flex flex-wrap gap-2"${_scopeId2}><!--[-->`);
                      ssrRenderList(project.results.slice(0, 2), (result, index) => {
                        _push3(`<span class="px-2 py-1 bg-accent-100 text-accent-700 rounded text-xs font-medium"${_scopeId2}>${ssrInterpolate(result)}</span>`);
                      });
                      _push3(`<!--]--></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="flex items-center justify-between"${_scopeId2}><span class="text-sm text-secondary-500"${_scopeId2}>${ssrInterpolate(project.location)}</span><span class="text-primary-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center"${_scopeId2}> Read Case Study <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId2}></path></svg></span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-5" }, [
                        createVNode("h3", { class: "text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors" }, toDisplayString(project.title), 1),
                        createVNode("p", { class: "text-sm text-secondary-500 mb-3" }, toDisplayString(project.client), 1),
                        createVNode("p", { class: "text-secondary-600 text-sm mb-4 line-clamp-3" }, toDisplayString(project.description), 1),
                        project.results ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("h4", { class: "text-xs font-semibold text-secondary-500 uppercase mb-2" }, "Key Results"),
                          createVNode("div", { class: "flex flex-wrap gap-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(project.results.slice(0, 2), (result, index) => {
                              return openBlock(), createBlock("span", {
                                key: index,
                                class: "px-2 py-1 bg-accent-100 text-accent-700 rounded text-xs font-medium"
                              }, toDisplayString(result), 1);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "text-sm text-secondary-500" }, toDisplayString(project.location), 1),
                          createVNode("span", { class: "text-primary-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center" }, [
                            createTextVNode(" Read Case Study "),
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 ml-1",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 5l7 7-7 7"
                              })
                            ]))
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            if (unref(filteredProjects).length === 0) {
              _push2(`<div class="text-center py-20"${_scopeId}><p class="text-secondary-500 text-lg"${_scopeId}>No projects found matching your criteria.</p>`);
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "primary",
                class: "mt-4",
                onClick: clearFilters
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Clear Filters `);
                  } else {
                    return [
                      createTextVNode(" Clear Filters ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredProjects), (project) => {
                  return openBlock(), createBlock(_component_UiCard, {
                    key: project.id,
                    class: "group cursor-pointer hover:shadow-lg transition-shadow",
                    onClick: ($event) => openProjectModal(project)
                  }, {
                    image: withCtx(() => [
                      createVNode("div", { class: "aspect-video bg-secondary-200 relative overflow-hidden" }, [
                        createVNode("div", { class: "absolute inset-0 flex items-center justify-center" }, [
                          createVNode("span", { class: "text-secondary-400" }, "Project Image")
                        ]),
                        createVNode("div", { class: "absolute top-4 left-4" }, [
                          createVNode("span", { class: "inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full" }, toDisplayString(project.industry), 1)
                        ])
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "p-5" }, [
                        createVNode("h3", { class: "text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors" }, toDisplayString(project.title), 1),
                        createVNode("p", { class: "text-sm text-secondary-500 mb-3" }, toDisplayString(project.client), 1),
                        createVNode("p", { class: "text-secondary-600 text-sm mb-4 line-clamp-3" }, toDisplayString(project.description), 1),
                        project.results ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("h4", { class: "text-xs font-semibold text-secondary-500 uppercase mb-2" }, "Key Results"),
                          createVNode("div", { class: "flex flex-wrap gap-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(project.results.slice(0, 2), (result, index) => {
                              return openBlock(), createBlock("span", {
                                key: index,
                                class: "px-2 py-1 bg-accent-100 text-accent-700 rounded text-xs font-medium"
                              }, toDisplayString(result), 1);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("span", { class: "text-sm text-secondary-500" }, toDisplayString(project.location), 1),
                          createVNode("span", { class: "text-primary-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center" }, [
                            createTextVNode(" Read Case Study "),
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 ml-1",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 5l7 7-7 7"
                              })
                            ]))
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128))
              ]),
              unref(filteredProjects).length === 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-center py-20"
              }, [
                createVNode("p", { class: "text-secondary-500 text-lg" }, "No projects found matching your criteria."),
                createVNode(_component_UiButton, {
                  variant: "primary",
                  class: "mt-4",
                  onClick: clearFilters
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Clear Filters ")
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      if (unref(selectedProject)) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><div class="absolute inset-0 bg-black/50"></div><div class="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"><button class="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary-100 z-10"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button><div class="p-8"><span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">${ssrInterpolate(unref(selectedProject).industry)}</span><h2 class="text-3xl font-bold text-secondary-900 mb-2">${ssrInterpolate(unref(selectedProject).title)}</h2><p class="text-secondary-500 mb-6">${ssrInterpolate(unref(selectedProject).client)} \u2022 ${ssrInterpolate(unref(selectedProject).location)}</p><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"><div class="bg-secondary-100 rounded-xl h-64 flex items-center justify-center"><span class="text-secondary-400">Before Image</span></div><div class="bg-secondary-100 rounded-xl h-64 flex items-center justify-center"><span class="text-secondary-400">After Image</span></div></div><div class="space-y-8"><div><h3 class="text-xl font-semibold text-secondary-900 mb-3">The Challenge</h3><p class="text-secondary-600">${ssrInterpolate(unref(selectedProject).challenge)}</p></div><div><h3 class="text-xl font-semibold text-secondary-900 mb-3">Our Solution</h3><p class="text-secondary-600">${ssrInterpolate(unref(selectedProject).solution)}</p></div><div><h3 class="text-xl font-semibold text-secondary-900 mb-3">Results &amp; Impact</h3><ul class="space-y-2"><!--[-->`);
        ssrRenderList(unref(selectedProject).results, (result, index) => {
          _push(`<li class="flex items-start"><svg class="w-5 h-5 text-accent-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="text-secondary-700 font-medium">${ssrInterpolate(result)}</span></li>`);
        });
        _push(`<!--]--></ul></div>`);
        if (unref(selectedProject).testimonial) {
          _push(`<div class="bg-primary-50 rounded-xl p-6"><blockquote class="text-secondary-700 italic mb-4">&quot;${ssrInterpolate(unref(selectedProject).testimonial.quote)}&quot;</blockquote><div class="flex items-center"><div class="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center mr-3"><span class="text-primary-700 font-bold">${ssrInterpolate(unref(selectedProject).testimonial.author.charAt(0))}</span></div><div><p class="font-semibold text-secondary-900">${ssrInterpolate(unref(selectedProject).testimonial.author)}</p><p class="text-sm text-secondary-500">${ssrInterpolate(unref(selectedProject).testimonial.position)}</p></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-8 pt-8 border-t border-secondary-200">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, { variant: "primary" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Start Your Project `);
                  } else {
                    return [
                      createTextVNode(" Start Your Project ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, { variant: "primary" }, {
                  default: withCtx(() => [
                    createTextVNode(" Start Your Project ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_SectionsCTASection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-C_b3D-pq.mjs.map
