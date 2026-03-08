import { _ as _sfc_main$1 } from './Container-26Tm0WkQ.mjs';
import { a as __nuxt_component_1, _ as _sfc_main$3 } from './CTASection-Bx-k183i.mjs';
import { _ as _sfc_main$2 } from './Card-BujfkT9t.mjs';
import { defineComponent, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { b as useRoute, u as useHead } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.slug;
    useHead({
      title: "The Future of Packaging Automation in 2026",
      meta: [
        { name: "description", content: "Explore the latest trends and technologies shaping the packaging automation industry in 2026." }
      ]
    });
    const post = {
      title: "The Future of Packaging Automation in 2026: Trends and Predictions",
      excerpt: "Explore the latest trends and technologies shaping the packaging automation industry, from AI-driven quality control to sustainable packaging solutions.",
      category: "Industry Trends",
      author: "Ahmad Hassan",
      authorRole: "CEO & Founder",
      authorBio: "With over 25 years of experience in the packaging automation industry, Ahmad Hassan has led hundreds of successful automation projects across Southeast Asia.",
      date: "March 1, 2026",
      readTime: "8 min read",
      content: [
        {
          title: "Introduction",
          text: "The packaging automation industry is undergoing a remarkable transformation in 2026. As we navigate through rapid technological advancements and shifting market demands, understanding these trends becomes crucial for businesses looking to stay competitive."
        },
        {
          title: "AI-Powered Quality Control",
          text: "Artificial intelligence is revolutionizing quality control in packaging lines. Modern AI systems can now detect defects with 99.9% accuracy, significantly reducing waste and ensuring consistent product quality. Machine learning algorithms analyze thousands of images per second, identifying issues that would be invisible to the human eye."
        },
        {
          title: "Sustainable Packaging Solutions",
          text: "Sustainability is no longer optional\u2014it is a business imperative. In 2026, we see a significant shift towards eco-friendly packaging materials and processes. Companies are investing in biodegradable materials, recyclable packaging, and energy-efficient machinery to reduce their environmental footprint.",
          list: [
            "Biodegradable packaging materials",
            "Energy-efficient production lines",
            "Reduced material usage through optimization",
            "Closed-loop recycling systems"
          ]
        },
        {
          title: "Industry 4.0 Integration",
          text: "The integration of Industry 4.0 technologies continues to accelerate. Smart factories now feature interconnected systems that communicate in real-time, enabling predictive maintenance, remote monitoring, and automated decision-making. This connectivity results in unprecedented levels of efficiency and flexibility."
        },
        {
          title: "Robotics and Collaborative Automation",
          text: "Collaborative robots (cobots) are becoming increasingly prevalent in packaging operations. These human-machine partnerships combine the dexterity of human workers with the precision and endurance of robots, creating more efficient and ergonomic workplaces."
        }
      ],
      takeaways: [
        "AI and machine learning are becoming essential for quality control and predictive maintenance",
        "Sustainability initiatives are driving innovation in materials and processes",
        "Industry 4.0 technologies enable unprecedented connectivity and efficiency",
        "Collaborative robots are transforming the human-machine workplace",
        "Companies must adapt to these trends to remain competitive in 2026 and beyond"
      ]
    };
    const relatedPosts = [
      { title: "5 Key Benefits of Automated Packaging", date: "Jan 15, 2026" },
      { title: "Industry 4.0 in Packaging Manufacturing", date: "Jan 8, 2026" },
      { title: "Quality Control in High-Speed Lines", date: "Dec 20, 2025" }
    ];
    const moreArticles = [
      { title: "How to Choose the Right Packaging Equipment", category: "Buying Guide" },
      { title: "Medical Device Packaging Compliance Guide", category: "Compliance" },
      { title: "ROI of Packaging Automation: Case Study", category: "Case Study" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_UiCard = _sfc_main$2;
      const _component_SectionsCTASection = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-12 bg-gradient-to-br from-secondary-900 to-primary-900">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/blog",
              class: "inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId2}></path></svg> Back to Blog `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 mr-2",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 19l-7-7 7-7"
                      })
                    ])),
                    createTextVNode(" Back to Blog ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4"${_scopeId}>${ssrInterpolate(post.category)}</span><h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"${_scopeId}>${ssrInterpolate(post.title)}</h1><div class="flex flex-wrap items-center gap-6 text-primary-100"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="w-10 h-10 bg-primary-700 rounded-full"${_scopeId}></div><span${_scopeId}>${ssrInterpolate(post.author)}</span></div><div class="flex items-center gap-2"${_scopeId}><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"${_scopeId}></path></svg><span${_scopeId}>${ssrInterpolate(post.date)}</span></div><div class="flex items-center gap-2"${_scopeId}><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><span${_scopeId}>${ssrInterpolate(post.readTime)}</span></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl" }, [
                createVNode(_component_NuxtLink, {
                  to: "/blog",
                  class: "inline-flex items-center text-primary-100 hover:text-white mb-6 transition-colors"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 mr-2",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 19l-7-7 7-7"
                      })
                    ])),
                    createTextVNode(" Back to Blog ")
                  ]),
                  _: 1
                }),
                createVNode("span", { class: "inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4" }, toDisplayString(post.category), 1),
                createVNode("h1", { class: "text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" }, toDisplayString(post.title), 1),
                createVNode("div", { class: "flex flex-wrap items-center gap-6 text-primary-100" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("div", { class: "w-10 h-10 bg-primary-700 rounded-full" }),
                    createVNode("span", null, toDisplayString(post.author), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      })
                    ])),
                    createVNode("span", null, toDisplayString(post.date), 1)
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    ])),
                    createVNode("span", null, toDisplayString(post.readTime), 1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="bg-secondary-50">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="aspect-video bg-secondary-300 rounded-2xl flex items-center justify-center"${_scopeId}><span class="text-secondary-500 text-lg"${_scopeId}>Featured Image</span></div>`);
          } else {
            return [
              createVNode("div", { class: "aspect-video bg-secondary-300 rounded-2xl flex items-center justify-center" }, [
                createVNode("span", { class: "text-secondary-500 text-lg" }, "Featured Image")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-16 bg-white">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-12"${_scopeId}><div class="lg:col-span-2"${_scopeId}><article class="prose prose-lg max-w-none"${_scopeId}><p class="text-xl text-secondary-600 mb-8 leading-relaxed"${_scopeId}>${ssrInterpolate(post.excerpt)}</p><!--[-->`);
            ssrRenderList(post.content, (section, index) => {
              _push2(`<div class="mb-8"${_scopeId}><h2 class="text-2xl font-bold text-secondary-900 mb-4"${_scopeId}>${ssrInterpolate(section.title)}</h2><p class="text-secondary-600 leading-relaxed mb-4"${_scopeId}>${ssrInterpolate(section.text)}</p>`);
              if (section.list) {
                _push2(`<ul class="list-disc list-inside space-y-2 text-secondary-600"${_scopeId}><!--[-->`);
                ssrRenderList(section.list, (item, idx) => {
                  _push2(`<li${_scopeId}>${ssrInterpolate(item)}</li>`);
                });
                _push2(`<!--]--></ul>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--><div class="bg-primary-50 rounded-xl p-6 mt-12"${_scopeId}><h3 class="text-lg font-bold text-secondary-900 mb-4"${_scopeId}>Key Takeaways</h3><ul class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(post.takeaways, (takeaway, index) => {
              _push2(`<li class="flex items-start gap-2"${_scopeId}><svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span class="text-secondary-700"${_scopeId}>${ssrInterpolate(takeaway)}</span></li>`);
            });
            _push2(`<!--]--></ul></div></article><div class="flex items-center justify-between mt-12 pt-8 border-t border-secondary-200"${_scopeId}><div class="flex items-center gap-4"${_scopeId}><span class="text-secondary-600 font-medium"${_scopeId}>Share this article:</span><div class="flex gap-2"${_scopeId}><button class="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"${_scopeId}></path></svg></button><button class="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"${_scopeId}></path></svg></button><button class="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"${_scopeId}><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"${_scopeId}></path></svg></button></div></div></div><div class="mt-12 p-6 bg-secondary-50 rounded-xl"${_scopeId}><div class="flex items-start gap-4"${_scopeId}><div class="w-16 h-16 bg-primary-200 rounded-full flex-shrink-0"${_scopeId}></div><div${_scopeId}><h3 class="text-lg font-bold text-secondary-900 mb-1"${_scopeId}>${ssrInterpolate(post.author)}</h3><p class="text-primary-600 text-sm mb-2"${_scopeId}>${ssrInterpolate(post.authorRole)}</p><p class="text-secondary-600 text-sm"${_scopeId}>${ssrInterpolate(post.authorBio)}</p></div></div></div></div><div class="lg:col-span-1"${_scopeId}><div class="sticky top-24"${_scopeId}><div class="bg-secondary-50 rounded-xl p-6 mb-8"${_scopeId}><h3 class="text-lg font-bold text-secondary-900 mb-4"${_scopeId}>Table of Contents</h3><ul class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(post.content, (section, index) => {
              _push2(`<li${_scopeId}><a${ssrRenderAttr("href", `#section-${index}`)} class="text-secondary-600 hover:text-primary-600 text-sm transition-colors"${_scopeId}>${ssrInterpolate(section.title)}</a></li>`);
            });
            _push2(`<!--]--></ul></div><div${_scopeId}><h3 class="text-lg font-bold text-secondary-900 mb-4"${_scopeId}>Related Articles</h3><div class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(relatedPosts, (related, index) => {
              _push2(`<div class="flex gap-3"${_scopeId}><div class="w-16 h-16 bg-secondary-200 rounded flex-shrink-0"${_scopeId}></div><div${_scopeId}><h4 class="text-sm font-medium text-secondary-900 hover:text-primary-600 cursor-pointer line-clamp-2"${_scopeId}>${ssrInterpolate(related.title)}</h4><p class="text-xs text-secondary-500"${_scopeId}>${ssrInterpolate(related.date)}</p></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-12" }, [
                createVNode("div", { class: "lg:col-span-2" }, [
                  createVNode("article", { class: "prose prose-lg max-w-none" }, [
                    createVNode("p", { class: "text-xl text-secondary-600 mb-8 leading-relaxed" }, toDisplayString(post.excerpt), 1),
                    (openBlock(true), createBlock(Fragment, null, renderList(post.content, (section, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "mb-8"
                      }, [
                        createVNode("h2", { class: "text-2xl font-bold text-secondary-900 mb-4" }, toDisplayString(section.title), 1),
                        createVNode("p", { class: "text-secondary-600 leading-relaxed mb-4" }, toDisplayString(section.text), 1),
                        section.list ? (openBlock(), createBlock("ul", {
                          key: 0,
                          class: "list-disc list-inside space-y-2 text-secondary-600"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(section.list, (item, idx) => {
                            return openBlock(), createBlock("li", { key: idx }, toDisplayString(item), 1);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ]);
                    }), 128)),
                    createVNode("div", { class: "bg-primary-50 rounded-xl p-6 mt-12" }, [
                      createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-4" }, "Key Takeaways"),
                      createVNode("ul", { class: "space-y-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(post.takeaways, (takeaway, index) => {
                          return openBlock(), createBlock("li", {
                            key: index,
                            class: "flex items-start gap-2"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0",
                              fill: "currentColor",
                              viewBox: "0 0 20 20"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            createVNode("span", { class: "text-secondary-700" }, toDisplayString(takeaway), 1)
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center justify-between mt-12 pt-8 border-t border-secondary-200" }, [
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode("span", { class: "text-secondary-600 font-medium" }, "Share this article:"),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("button", { class: "w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", { d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" })
                          ]))
                        ]),
                        createVNode("button", { class: "w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" })
                          ]))
                        ]),
                        createVNode("button", { class: "w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
                          ]))
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-12 p-6 bg-secondary-50 rounded-xl" }, [
                    createVNode("div", { class: "flex items-start gap-4" }, [
                      createVNode("div", { class: "w-16 h-16 bg-primary-200 rounded-full flex-shrink-0" }),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-1" }, toDisplayString(post.author), 1),
                        createVNode("p", { class: "text-primary-600 text-sm mb-2" }, toDisplayString(post.authorRole), 1),
                        createVNode("p", { class: "text-secondary-600 text-sm" }, toDisplayString(post.authorBio), 1)
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "lg:col-span-1" }, [
                  createVNode("div", { class: "sticky top-24" }, [
                    createVNode("div", { class: "bg-secondary-50 rounded-xl p-6 mb-8" }, [
                      createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-4" }, "Table of Contents"),
                      createVNode("ul", { class: "space-y-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(post.content, (section, index) => {
                          return openBlock(), createBlock("li", { key: index }, [
                            createVNode("a", {
                              href: `#section-${index}`,
                              class: "text-secondary-600 hover:text-primary-600 text-sm transition-colors"
                            }, toDisplayString(section.title), 9, ["href"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-4" }, "Related Articles"),
                      createVNode("div", { class: "space-y-4" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(relatedPosts, (related, index) => {
                          return createVNode("div", {
                            key: index,
                            class: "flex gap-3"
                          }, [
                            createVNode("div", { class: "w-16 h-16 bg-secondary-200 rounded flex-shrink-0" }),
                            createVNode("div", null, [
                              createVNode("h4", { class: "text-sm font-medium text-secondary-900 hover:text-primary-600 cursor-pointer line-clamp-2" }, toDisplayString(related.title), 1),
                              createVNode("p", { class: "text-xs text-secondary-500" }, toDisplayString(related.date), 1)
                            ])
                          ]);
                        }), 64))
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-16 bg-secondary-50">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-2xl font-bold text-secondary-900 mb-8"${_scopeId}>More Articles</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
            ssrRenderList(moreArticles, (article, index) => {
              _push2(ssrRenderComponent(_component_UiCard, {
                key: index,
                class: "group cursor-pointer"
              }, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="aspect-video bg-secondary-200"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "aspect-video bg-secondary-200" })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-4"${_scopeId2}><span class="text-xs text-primary-600 font-medium"${_scopeId2}>${ssrInterpolate(article.category)}</span><h3 class="text-lg font-bold text-secondary-900 mt-1 group-hover:text-primary-600"${_scopeId2}>${ssrInterpolate(article.title)}</h3></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-4" }, [
                        createVNode("span", { class: "text-xs text-primary-600 font-medium" }, toDisplayString(article.category), 1),
                        createVNode("h3", { class: "text-lg font-bold text-secondary-900 mt-1 group-hover:text-primary-600" }, toDisplayString(article.title), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("h2", { class: "text-2xl font-bold text-secondary-900 mb-8" }, "More Articles"),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(moreArticles, (article, index) => {
                  return createVNode(_component_UiCard, {
                    key: index,
                    class: "group cursor-pointer"
                  }, {
                    image: withCtx(() => [
                      createVNode("div", { class: "aspect-video bg-secondary-200" })
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "p-4" }, [
                        createVNode("span", { class: "text-xs text-primary-600 font-medium" }, toDisplayString(article.category), 1),
                        createVNode("h3", { class: "text-lg font-bold text-secondary-900 mt-1 group-hover:text-primary-600" }, toDisplayString(article.title), 1)
                      ])
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
      _push(`</section>`);
      _push(ssrRenderComponent(_component_SectionsCTASection, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-C75yw27u.mjs.map
