import { _ as _sfc_main$1 } from './Container-26Tm0WkQ.mjs';
import { u as useHead, _ as _sfc_main$2 } from './server.mjs';
import { _ as _sfc_main$3 } from './Card-BujfkT9t.mjs';
import { a as __nuxt_component_1, _ as _sfc_main$4 } from './CTASection-Bx-k183i.mjs';
import { defineComponent, ref, computed, withCtx, createVNode, unref, createTextVNode, withDirectives, isRef, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, vModelText, createCommentVNode, useSSRContext } from 'vue';
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
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Products",
      meta: [
        { name: "description", content: "Browse our range of packaging automation equipment including filling machines, labeling systems, and packaging lines." }
      ]
    });
    const selectedCategory = ref("");
    const selectedIndustry = ref("");
    const searchQuery = ref("");
    const selectedProduct = ref(null);
    const categories = ["Filling Machines", "Labeling Systems", "Packaging Lines", "Inspection Systems", "Material Handling"];
    const industries = ["Medical Devices", "Pharmaceuticals", "Glove Manufacturing", "FMCG"];
    const products = [
      {
        id: 1,
        name: "AutoFill Pro 2000",
        category: "Filling Machines",
        description: "High-precision automatic filling machine for liquids, creams, and gels. Ideal for pharmaceutical and cosmetic applications.",
        specs: { "Capacity": "2000 units/hr", "Accuracy": "\xB10.5%", "Power": "3.5 kW", "Weight": "850 kg" },
        features: [
          "Servo-driven precision filling",
          "Automatic container handling",
          "CIP (Clean-in-Place) system",
          "Touch screen HMI",
          "Data logging and traceability"
        ],
        applications: ["Pharmaceuticals", "Cosmetics", "Food & Beverage"]
      },
      {
        id: 2,
        name: "LabelMaster 360",
        category: "Labeling Systems",
        description: "Versatile labeling system for wrap-around, front-back, and top-bottom labeling applications.",
        specs: { "Speed": "360 units/min", "Accuracy": "\xB10.5mm", "Label Size": "10-300mm", "Power": "2.2 kW" },
        features: [
          "Automatic label registration",
          "Vision inspection system",
          "Quick changeover capability",
          "Various label application modes",
          "Reject system integration"
        ],
        applications: ["Bottles", "Jars", "Boxes", "Vials"]
      },
      {
        id: 3,
        name: "CompletePack Line 500",
        category: "Packaging Lines",
        description: "End-to-end packaging line solution integrating filling, labeling, capping, and cartoning operations.",
        specs: { "Speed": "500 units/min", "Line Length": "15m", "Power": "25 kW", "Operators": "2-3" },
        features: [
          "Modular design",
          "Central control system",
          "Automatic changeover",
          "OEE monitoring",
          "Remote diagnostics"
        ],
        applications: ["Pharmaceuticals", "Medical Devices", "FMCG"]
      },
      {
        id: 4,
        name: "VisionCheck AI",
        category: "Inspection Systems",
        description: "AI-powered visual inspection system for quality control and defect detection.",
        specs: { "Speed": "1000 units/min", "Accuracy": "99.9%", "Cameras": "4-8", "Power": "1.5 kW" },
        features: [
          "Machine learning algorithms",
          "Real-time defect detection",
          "Statistical reporting",
          "Integration with MES/ERP",
          "Automatic reject handling"
        ],
        applications: ["Quality Control", "Defect Detection", "Label Verification"]
      },
      {
        id: 5,
        name: "RoboConvey X1",
        category: "Material Handling",
        description: "Automated conveyor system with robotic integration for material handling and palletizing.",
        specs: { "Load Capacity": "50 kg", "Speed": "2 m/s", "Robots": "1-4", "Power": "15 kW" },
        features: [
          "Modular conveyor design",
          "Collaborative robots",
          "Smart routing",
          "Automatic palletizing",
          "Safety systems integrated"
        ],
        applications: ["Palletizing", "Material Transport", "Case Packing"]
      },
      {
        id: 6,
        name: "SteriSeal Medical",
        category: "Packaging Lines",
        description: "Medical-grade packaging line for sterile medical device packaging with validation documentation.",
        specs: { "Speed": "200 units/min", "Sterility": "ISO 14644", "Power": "18 kW", "Class": "ISO 7" },
        features: [
          "Cleanroom compatible",
          "Full validation documentation",
          "21 CFR Part 11 compliance",
          "Batch record integration",
          "Environmental monitoring"
        ],
        applications: ["Medical Devices", "Surgical Instruments", "Diagnostic Products"]
      }
    ];
    const filteredProducts = computed(() => {
      return products.filter((product) => {
        const matchesCategory = !selectedCategory.value || product.category === selectedCategory.value;
        const matchesIndustry = !selectedIndustry.value || product.applications.some((app) => app.toLowerCase().includes(selectedIndustry.value.toLowerCase()));
        const matchesSearch = !searchQuery.value || product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.value.toLowerCase());
        return matchesCategory && matchesIndustry && matchesSearch;
      });
    });
    const hasActiveFilters = computed(() => {
      return selectedCategory.value || selectedIndustry.value || searchQuery.value;
    });
    const clearFilters = () => {
      selectedCategory.value = "";
      selectedIndustry.value = "";
      searchQuery.value = "";
    };
    const openProductModal = (product) => {
      selectedProduct.value = product;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = _sfc_main$1;
      const _component_UiButton = _sfc_main$2;
      const _component_UiCard = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_SectionsCTASection = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative py-20 lg:py-32 bg-gradient-to-br from-primary-900 to-secondary-900 overflow-hidden"><div class="absolute inset-0 opacity-20"><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", "background-size": "40px 40px" })}"></div></div>`);
      _push(ssrRenderComponent(_component_UiContainer, {
        size: "lg",
        class: "relative z-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl text-center mx-auto"${_scopeId}><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"${_scopeId}> Our Products </h1><p class="text-xl text-primary-100"${_scopeId}> Advanced packaging automation equipment for every industry </p></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl text-center mx-auto" }, [
                createVNode("h1", { class: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" }, " Our Products "),
                createVNode("p", { class: "text-xl text-primary-100" }, " Advanced packaging automation equipment for every industry ")
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
            _push2(`<div class="flex flex-wrap gap-4 items-center"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="text-sm font-medium text-secondary-700"${_scopeId}>Category:</span><select class="form-select rounded-md border-secondary-300 text-sm"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategory)) ? ssrLooseContain(unref(selectedCategory), "") : ssrLooseEqual(unref(selectedCategory), "")) ? " selected" : ""}${_scopeId}>All Categories</option><!--[-->`);
            ssrRenderList(categories, (category) => {
              _push2(`<option${ssrRenderAttr("value", category)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategory)) ? ssrLooseContain(unref(selectedCategory), category) : ssrLooseEqual(unref(selectedCategory), category)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(category)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="flex items-center gap-2"${_scopeId}><span class="text-sm font-medium text-secondary-700"${_scopeId}>Industry:</span><select class="form-select rounded-md border-secondary-300 text-sm"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(selectedIndustry)) ? ssrLooseContain(unref(selectedIndustry), "") : ssrLooseEqual(unref(selectedIndustry), "")) ? " selected" : ""}${_scopeId}>All Industries</option><!--[-->`);
            ssrRenderList(industries, (industry) => {
              _push2(`<option${ssrRenderAttr("value", industry)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedIndustry)) ? ssrLooseContain(unref(selectedIndustry), industry) : ssrLooseEqual(unref(selectedIndustry), industry)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(industry)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="flex-1 min-w-[200px]"${_scopeId}><input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="Search products..." class="w-full rounded-md border-secondary-300 text-sm"${_scopeId}></div>`);
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
                  createVNode("span", { class: "text-sm font-medium text-secondary-700" }, "Category:"),
                  withDirectives(createVNode("select", {
                    "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
                    class: "form-select rounded-md border-secondary-300 text-sm"
                  }, [
                    createVNode("option", { value: "" }, "All Categories"),
                    (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                      return createVNode("option", {
                        key: category,
                        value: category
                      }, toDisplayString(category), 9, ["value"]);
                    }), 64))
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, unref(selectedCategory)]
                  ])
                ]),
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
                createVNode("div", { class: "flex-1 min-w-[200px]" }, [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => isRef(searchQuery) ? searchQuery.value = $event : null,
                    type: "text",
                    placeholder: "Search products...",
                    class: "w-full rounded-md border-secondary-300 text-sm"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(searchQuery)]
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
            ssrRenderList(unref(filteredProducts), (product) => {
              _push2(ssrRenderComponent(_component_UiCard, {
                key: product.id,
                class: "group cursor-pointer hover:shadow-lg transition-shadow",
                onClick: ($event) => openProductModal(product)
              }, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="aspect-video bg-secondary-200 relative overflow-hidden"${_scopeId2}><div class="absolute inset-0 flex items-center justify-center"${_scopeId2}><span class="text-secondary-400"${_scopeId2}>Product Image</span></div><div class="absolute top-4 left-4"${_scopeId2}><span class="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full"${_scopeId2}>${ssrInterpolate(product.category)}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "aspect-video bg-secondary-200 relative overflow-hidden" }, [
                        createVNode("div", { class: "absolute inset-0 flex items-center justify-center" }, [
                          createVNode("span", { class: "text-secondary-400" }, "Product Image")
                        ]),
                        createVNode("div", { class: "absolute top-4 left-4" }, [
                          createVNode("span", { class: "inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full" }, toDisplayString(product.category), 1)
                        ])
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-5"${_scopeId2}><h3 class="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors"${_scopeId2}>${ssrInterpolate(product.name)}</h3><p class="text-secondary-600 text-sm mb-4 line-clamp-2"${_scopeId2}>${ssrInterpolate(product.description)}</p><div class="mb-4"${_scopeId2}><h4 class="text-xs font-semibold text-secondary-500 uppercase mb-2"${_scopeId2}>Key Specs</h4><div class="grid grid-cols-2 gap-2 text-sm"${_scopeId2}><!--[-->`);
                    ssrRenderList(product.specs, (value, key) => {
                      _push3(`<div${_scopeId2}><span class="text-secondary-500"${_scopeId2}>${ssrInterpolate(key)}:</span><span class="text-secondary-900 font-medium ml-1"${_scopeId2}>${ssrInterpolate(value)}</span></div>`);
                    });
                    _push3(`<!--]--></div></div>`);
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "outline",
                      size: "sm",
                      class: "w-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` View Details `);
                        } else {
                          return [
                            createTextVNode(" View Details ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-5" }, [
                        createVNode("h3", { class: "text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors" }, toDisplayString(product.name), 1),
                        createVNode("p", { class: "text-secondary-600 text-sm mb-4 line-clamp-2" }, toDisplayString(product.description), 1),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("h4", { class: "text-xs font-semibold text-secondary-500 uppercase mb-2" }, "Key Specs"),
                          createVNode("div", { class: "grid grid-cols-2 gap-2 text-sm" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(product.specs, (value, key) => {
                              return openBlock(), createBlock("div", { key }, [
                                createVNode("span", { class: "text-secondary-500" }, toDisplayString(key) + ":", 1),
                                createVNode("span", { class: "text-secondary-900 font-medium ml-1" }, toDisplayString(value), 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode(_component_UiButton, {
                          variant: "outline",
                          size: "sm",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" View Details ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            if (unref(filteredProducts).length === 0) {
              _push2(`<div class="text-center py-20"${_scopeId}><p class="text-secondary-500 text-lg"${_scopeId}>No products found matching your criteria.</p>`);
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredProducts), (product) => {
                  return openBlock(), createBlock(_component_UiCard, {
                    key: product.id,
                    class: "group cursor-pointer hover:shadow-lg transition-shadow",
                    onClick: ($event) => openProductModal(product)
                  }, {
                    image: withCtx(() => [
                      createVNode("div", { class: "aspect-video bg-secondary-200 relative overflow-hidden" }, [
                        createVNode("div", { class: "absolute inset-0 flex items-center justify-center" }, [
                          createVNode("span", { class: "text-secondary-400" }, "Product Image")
                        ]),
                        createVNode("div", { class: "absolute top-4 left-4" }, [
                          createVNode("span", { class: "inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full" }, toDisplayString(product.category), 1)
                        ])
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "p-5" }, [
                        createVNode("h3", { class: "text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors" }, toDisplayString(product.name), 1),
                        createVNode("p", { class: "text-secondary-600 text-sm mb-4 line-clamp-2" }, toDisplayString(product.description), 1),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("h4", { class: "text-xs font-semibold text-secondary-500 uppercase mb-2" }, "Key Specs"),
                          createVNode("div", { class: "grid grid-cols-2 gap-2 text-sm" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(product.specs, (value, key) => {
                              return openBlock(), createBlock("div", { key }, [
                                createVNode("span", { class: "text-secondary-500" }, toDisplayString(key) + ":", 1),
                                createVNode("span", { class: "text-secondary-900 font-medium ml-1" }, toDisplayString(value), 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode(_component_UiButton, {
                          variant: "outline",
                          size: "sm",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" View Details ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128))
              ]),
              unref(filteredProducts).length === 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-center py-20"
              }, [
                createVNode("p", { class: "text-secondary-500 text-lg" }, "No products found matching your criteria."),
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
      if (unref(selectedProduct)) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><div class="absolute inset-0 bg-black/50"></div><div class="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"><button class="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary-100 z-10"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button><div class="p-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><div class="bg-secondary-100 rounded-xl h-80 flex items-center justify-center"><span class="text-secondary-400">Product Image Gallery</span></div><div><span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">${ssrInterpolate(unref(selectedProduct).category)}</span><h2 class="text-3xl font-bold text-secondary-900 mb-4">${ssrInterpolate(unref(selectedProduct).name)}</h2><p class="text-secondary-600 mb-6">${ssrInterpolate(unref(selectedProduct).description)}</p><div class="mb-6"><h3 class="font-semibold text-secondary-900 mb-3">Features</h3><ul class="space-y-2"><!--[-->`);
        ssrRenderList(unref(selectedProduct).features, (feature, index) => {
          _push(`<li class="flex items-start"><svg class="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-secondary-600">${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul></div><div class="mb-6"><h3 class="font-semibold text-secondary-900 mb-3">Applications</h3><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(unref(selectedProduct).applications, (app, index) => {
          _push(`<span class="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">${ssrInterpolate(app)}</span>`);
        });
        _push(`<!--]--></div></div><div class="flex gap-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, { variant: "primary" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Request Quote `);
                  } else {
                    return [
                      createTextVNode(" Request Quote ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, { variant: "primary" }, {
                  default: withCtx(() => [
                    createTextVNode(" Request Quote ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiButton, { variant: "outline" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Download Brochure `);
            } else {
              return [
                createTextVNode(" Download Brochure ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="mt-8 pt-8 border-t border-secondary-200"><h3 class="font-semibold text-secondary-900 mb-4">Technical Specifications</h3><table class="w-full"><tbody><!--[-->`);
        ssrRenderList(unref(selectedProduct).specs, (value, key) => {
          _push(`<tr class="border-b border-secondary-100 last:border-0"><td class="py-3 text-secondary-500 w-1/3">${ssrInterpolate(key)}</td><td class="py-3 text-secondary-900 font-medium">${ssrInterpolate(value)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=products-Bbq6zida.mjs.map
