import { _ as _sfc_main$1 } from './Container-26Tm0WkQ.mjs';
import { _ as _sfc_main$2 } from './Card-BujfkT9t.mjs';
import { u as useHead, _ as _sfc_main$2$1 } from './server.mjs';
import { defineComponent, ref, withCtx, createVNode, toDisplayString, unref, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, withDirectives, isRef, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Blog",
      meta: [
        { name: "description", content: "Latest insights, trends, and innovations in packaging automation technology and industry news." }
      ]
    });
    const email = ref("");
    const isSubmitting = ref(false);
    const featuredPost = {
      title: "The Future of Packaging Automation in 2026: Trends and Predictions",
      excerpt: "Explore the latest trends and technologies shaping the packaging automation industry, from AI-driven quality control to sustainable packaging solutions.",
      category: "Industry Trends",
      author: "Ahmad Hassan",
      date: "March 1, 2026",
      readTime: "8 min read"
    };
    const posts = [
      {
        id: 2,
        title: "How to Choose the Right Packaging Equipment for Your Business",
        excerpt: "A comprehensive guide to selecting the best packaging automation equipment for your specific industry requirements.",
        category: "Buying Guide",
        date: "February 25, 2026",
        readTime: "6 min read"
      },
      {
        id: 3,
        title: "Medical Device Packaging Compliance: Complete Guide",
        excerpt: "Understanding the regulatory requirements and best practices for packaging medical devices.",
        category: "Compliance",
        date: "February 18, 2026",
        readTime: "7 min read"
      },
      {
        id: 4,
        title: "Sustainable Packaging Solutions for Modern Manufacturing",
        excerpt: "How to implement eco-friendly packaging automation while maintaining efficiency.",
        category: "Sustainability",
        date: "February 12, 2026",
        readTime: "5 min read"
      },
      {
        id: 5,
        title: "ROI of Packaging Automation: A Case Study",
        excerpt: "Real-world analysis of return on investment for packaging automation implementation.",
        category: "Case Study",
        date: "February 5, 2026",
        readTime: "10 min read"
      }
    ];
    const categories = [
      { name: "Industry Trends", count: 12 },
      { name: "Buying Guide", count: 8 },
      { name: "Compliance", count: 6 },
      { name: "Sustainability", count: 5 },
      { name: "Case Study", count: 4 },
      { name: "Technology", count: 10 }
    ];
    const popularPosts = [
      { title: "5 Key Benefits of Automated Packaging", date: "Jan 15, 2026" },
      { title: "Industry 4.0 in Packaging Manufacturing", date: "Jan 8, 2026" },
      { title: "Quality Control in High-Speed Lines", date: "Dec 20, 2025" }
    ];
    const tags = ["Automation", "Industry 4.0", "Sustainability", "Medical Devices", "Pharmaceuticals", "AI", "Quality Control", "Efficiency"];
    const subscribeNewsletter = async () => {
      isSubmitting.value = true;
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      email.value = "";
      isSubmitting.value = false;
      alert("Thank you for subscribing!");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = _sfc_main$1;
      const _component_UiCard = _sfc_main$2;
      const _component_UiButton = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-16 bg-gradient-to-br from-secondary-900 to-primary-900">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl text-center mx-auto"${_scopeId}><h1 class="text-4xl sm:text-5xl font-bold text-white mb-6"${_scopeId}> Blog &amp; Insights </h1><p class="text-xl text-primary-100"${_scopeId}> Stay updated with the latest trends and innovations in packaging automation </p></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl text-center mx-auto" }, [
                createVNode("h1", { class: "text-4xl sm:text-5xl font-bold text-white mb-6" }, " Blog & Insights "),
                createVNode("p", { class: "text-xl text-primary-100" }, " Stay updated with the latest trends and innovations in packaging automation ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-20 bg-white">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-12"${_scopeId}><div class="lg:col-span-2"${_scopeId}>`);
            if (featuredPost) {
              _push2(`<div class="mb-12"${_scopeId}><h2 class="text-2xl font-bold text-secondary-900 mb-6"${_scopeId}>Featured Post</h2>`);
              _push2(ssrRenderComponent(_component_UiCard, { class: "group cursor-pointer hover:shadow-lg transition-shadow" }, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="aspect-video bg-secondary-200 relative overflow-hidden"${_scopeId2}><span class="absolute inset-0 flex items-center justify-center text-secondary-400"${_scopeId2}>Featured Image</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "aspect-video bg-secondary-200 relative overflow-hidden" }, [
                        createVNode("span", { class: "absolute inset-0 flex items-center justify-center text-secondary-400" }, "Featured Image")
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-6"${_scopeId2}><span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-3"${_scopeId2}>${ssrInterpolate(featuredPost.category)}</span><h3 class="text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors"${_scopeId2}>${ssrInterpolate(featuredPost.title)}</h3><p class="text-secondary-600 mb-4"${_scopeId2}>${ssrInterpolate(featuredPost.excerpt)}</p><div class="flex items-center justify-between"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}><div class="w-8 h-8 bg-primary-200 rounded-full"${_scopeId2}></div><span class="text-sm text-secondary-500"${_scopeId2}>${ssrInterpolate(featuredPost.author)}</span></div><div class="flex items-center gap-4 text-sm text-secondary-500"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(featuredPost.date)}</span><span${_scopeId2}>${ssrInterpolate(featuredPost.readTime)}</span></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-6" }, [
                        createVNode("span", { class: "inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-3" }, toDisplayString(featuredPost.category), 1),
                        createVNode("h3", { class: "text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors" }, toDisplayString(featuredPost.title), 1),
                        createVNode("p", { class: "text-secondary-600 mb-4" }, toDisplayString(featuredPost.excerpt), 1),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("div", { class: "w-8 h-8 bg-primary-200 rounded-full" }),
                            createVNode("span", { class: "text-sm text-secondary-500" }, toDisplayString(featuredPost.author), 1)
                          ]),
                          createVNode("div", { class: "flex items-center gap-4 text-sm text-secondary-500" }, [
                            createVNode("span", null, toDisplayString(featuredPost.date), 1),
                            createVNode("span", null, toDisplayString(featuredPost.readTime), 1)
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div${_scopeId}><h2 class="text-2xl font-bold text-secondary-900 mb-6"${_scopeId}>Latest Articles</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><!--[-->`);
            ssrRenderList(posts, (post) => {
              _push2(ssrRenderComponent(_component_UiCard, {
                key: post.id,
                class: "group cursor-pointer hover:shadow-lg transition-shadow"
              }, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="aspect-video bg-secondary-200 relative overflow-hidden"${_scopeId2}><span class="absolute inset-0 flex items-center justify-center text-secondary-400"${_scopeId2}>Post Image</span></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "aspect-video bg-secondary-200 relative overflow-hidden" }, [
                        createVNode("span", { class: "absolute inset-0 flex items-center justify-center text-secondary-400" }, "Post Image")
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-4"${_scopeId2}><span class="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-2"${_scopeId2}>${ssrInterpolate(post.category)}</span><h3 class="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors"${_scopeId2}>${ssrInterpolate(post.title)}</h3><p class="text-secondary-600 text-sm mb-3 line-clamp-2"${_scopeId2}>${ssrInterpolate(post.excerpt)}</p><div class="flex items-center justify-between text-xs text-secondary-500"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(post.date)}</span><span${_scopeId2}>${ssrInterpolate(post.readTime)}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-4" }, [
                        createVNode("span", { class: "inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-2" }, toDisplayString(post.category), 1),
                        createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors" }, toDisplayString(post.title), 1),
                        createVNode("p", { class: "text-secondary-600 text-sm mb-3 line-clamp-2" }, toDisplayString(post.excerpt), 1),
                        createVNode("div", { class: "flex items-center justify-between text-xs text-secondary-500" }, [
                          createVNode("span", null, toDisplayString(post.date), 1),
                          createVNode("span", null, toDisplayString(post.readTime), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="flex justify-center mt-12"${_scopeId}><nav class="flex items-center gap-2"${_scopeId}><button class="px-4 py-2 border border-secondary-300 rounded-md text-sm hover:bg-secondary-50 disabled:opacity-50" disabled${_scopeId}> Previous </button><button class="px-4 py-2 bg-primary-600 text-white rounded-md text-sm"${_scopeId}>1</button><button class="px-4 py-2 border border-secondary-300 rounded-md text-sm hover:bg-secondary-50"${_scopeId}>2</button><button class="px-4 py-2 border border-secondary-300 rounded-md text-sm hover:bg-secondary-50"${_scopeId}>3</button><button class="px-4 py-2 border border-secondary-300 rounded-md text-sm hover:bg-secondary-50"${_scopeId}> Next </button></nav></div></div><div class="lg:col-span-1"${_scopeId}><div class="mb-8"${_scopeId}><div class="relative"${_scopeId}><input type="text" placeholder="Search articles..." class="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"${_scopeId}><svg class="absolute left-3 top-2.5 w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg></div></div><div class="mb-8"${_scopeId}><h3 class="text-lg font-bold text-secondary-900 mb-4"${_scopeId}>Categories</h3><ul class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(categories, (category) => {
              _push2(`<li${_scopeId}><a href="#" class="flex items-center justify-between py-2 text-secondary-600 hover:text-primary-600 transition-colors"${_scopeId}><span${_scopeId}>${ssrInterpolate(category.name)}</span><span class="text-secondary-400"${_scopeId}>${ssrInterpolate(category.count)}</span></a></li>`);
            });
            _push2(`<!--]--></ul></div><div class="bg-primary-50 rounded-xl p-6 mb-8"${_scopeId}><h3 class="text-lg font-bold text-secondary-900 mb-2"${_scopeId}>Newsletter</h3><p class="text-secondary-600 text-sm mb-4"${_scopeId}>Get the latest insights delivered to your inbox</p><form class="space-y-3"${_scopeId}><input${ssrRenderAttr("value", unref(email))} type="email" placeholder="Enter your email" class="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" required${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiButton, {
              variant: "primary",
              class: "w-full",
              loading: unref(isSubmitting)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Subscribe `);
                } else {
                  return [
                    createTextVNode(" Subscribe ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form></div><div class="mb-8"${_scopeId}><h3 class="text-lg font-bold text-secondary-900 mb-4"${_scopeId}>Popular Posts</h3><div class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(popularPosts, (post, index) => {
              _push2(`<div class="flex gap-3"${_scopeId}><div class="w-16 h-16 bg-secondary-200 rounded flex-shrink-0"${_scopeId}></div><div${_scopeId}><h4 class="text-sm font-medium text-secondary-900 hover:text-primary-600 cursor-pointer"${_scopeId}>${ssrInterpolate(post.title)}</h4><p class="text-xs text-secondary-500"${_scopeId}>${ssrInterpolate(post.date)}</p></div></div>`);
            });
            _push2(`<!--]--></div></div><div${_scopeId}><h3 class="text-lg font-bold text-secondary-900 mb-4"${_scopeId}>Tags</h3><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(tags, (tag) => {
              _push2(`<span class="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full hover:bg-primary-100 hover:text-primary-700 cursor-pointer transition-colors"${_scopeId}>${ssrInterpolate(tag)}</span>`);
            });
            _push2(`<!--]--></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-12" }, [
                createVNode("div", { class: "lg:col-span-2" }, [
                  featuredPost ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-12"
                  }, [
                    createVNode("h2", { class: "text-2xl font-bold text-secondary-900 mb-6" }, "Featured Post"),
                    createVNode(_component_UiCard, { class: "group cursor-pointer hover:shadow-lg transition-shadow" }, {
                      image: withCtx(() => [
                        createVNode("div", { class: "aspect-video bg-secondary-200 relative overflow-hidden" }, [
                          createVNode("span", { class: "absolute inset-0 flex items-center justify-center text-secondary-400" }, "Featured Image")
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "p-6" }, [
                          createVNode("span", { class: "inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-3" }, toDisplayString(featuredPost.category), 1),
                          createVNode("h3", { class: "text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors" }, toDisplayString(featuredPost.title), 1),
                          createVNode("p", { class: "text-secondary-600 mb-4" }, toDisplayString(featuredPost.excerpt), 1),
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("div", { class: "w-8 h-8 bg-primary-200 rounded-full" }),
                              createVNode("span", { class: "text-sm text-secondary-500" }, toDisplayString(featuredPost.author), 1)
                            ]),
                            createVNode("div", { class: "flex items-center gap-4 text-sm text-secondary-500" }, [
                              createVNode("span", null, toDisplayString(featuredPost.date), 1),
                              createVNode("span", null, toDisplayString(featuredPost.readTime), 1)
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true),
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-2xl font-bold text-secondary-900 mb-6" }, "Latest Articles"),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(posts, (post) => {
                        return createVNode(_component_UiCard, {
                          key: post.id,
                          class: "group cursor-pointer hover:shadow-lg transition-shadow"
                        }, {
                          image: withCtx(() => [
                            createVNode("div", { class: "aspect-video bg-secondary-200 relative overflow-hidden" }, [
                              createVNode("span", { class: "absolute inset-0 flex items-center justify-center text-secondary-400" }, "Post Image")
                            ])
                          ]),
                          default: withCtx(() => [
                            createVNode("div", { class: "p-4" }, [
                              createVNode("span", { class: "inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-2" }, toDisplayString(post.category), 1),
                              createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors" }, toDisplayString(post.title), 1),
                              createVNode("p", { class: "text-secondary-600 text-sm mb-3 line-clamp-2" }, toDisplayString(post.excerpt), 1),
                              createVNode("div", { class: "flex items-center justify-between text-xs text-secondary-500" }, [
                                createVNode("span", null, toDisplayString(post.date), 1),
                                createVNode("span", null, toDisplayString(post.readTime), 1)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-center mt-12" }, [
                    createVNode("nav", { class: "flex items-center gap-2" }, [
                      createVNode("button", {
                        class: "px-4 py-2 border border-secondary-300 rounded-md text-sm hover:bg-secondary-50 disabled:opacity-50",
                        disabled: ""
                      }, " Previous "),
                      createVNode("button", { class: "px-4 py-2 bg-primary-600 text-white rounded-md text-sm" }, "1"),
                      createVNode("button", { class: "px-4 py-2 border border-secondary-300 rounded-md text-sm hover:bg-secondary-50" }, "2"),
                      createVNode("button", { class: "px-4 py-2 border border-secondary-300 rounded-md text-sm hover:bg-secondary-50" }, "3"),
                      createVNode("button", { class: "px-4 py-2 border border-secondary-300 rounded-md text-sm hover:bg-secondary-50" }, " Next ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "lg:col-span-1" }, [
                  createVNode("div", { class: "mb-8" }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode("input", {
                        type: "text",
                        placeholder: "Search articles...",
                        class: "w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      }),
                      (openBlock(), createBlock("svg", {
                        class: "absolute left-3 top-2.5 w-5 h-5 text-secondary-400",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        })
                      ]))
                    ])
                  ]),
                  createVNode("div", { class: "mb-8" }, [
                    createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-4" }, "Categories"),
                    createVNode("ul", { class: "space-y-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                        return createVNode("li", {
                          key: category.name
                        }, [
                          createVNode("a", {
                            href: "#",
                            class: "flex items-center justify-between py-2 text-secondary-600 hover:text-primary-600 transition-colors"
                          }, [
                            createVNode("span", null, toDisplayString(category.name), 1),
                            createVNode("span", { class: "text-secondary-400" }, toDisplayString(category.count), 1)
                          ])
                        ]);
                      }), 64))
                    ])
                  ]),
                  createVNode("div", { class: "bg-primary-50 rounded-xl p-6 mb-8" }, [
                    createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-2" }, "Newsletter"),
                    createVNode("p", { class: "text-secondary-600 text-sm mb-4" }, "Get the latest insights delivered to your inbox"),
                    createVNode("form", {
                      onSubmit: withModifiers(subscribeNewsletter, ["prevent"]),
                      class: "space-y-3"
                    }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                        type: "email",
                        placeholder: "Enter your email",
                        class: "w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(email)]
                      ]),
                      createVNode(_component_UiButton, {
                        variant: "primary",
                        class: "w-full",
                        loading: unref(isSubmitting)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Subscribe ")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ], 32)
                  ]),
                  createVNode("div", { class: "mb-8" }, [
                    createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-4" }, "Popular Posts"),
                    createVNode("div", { class: "space-y-4" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(popularPosts, (post, index) => {
                        return createVNode("div", {
                          key: index,
                          class: "flex gap-3"
                        }, [
                          createVNode("div", { class: "w-16 h-16 bg-secondary-200 rounded flex-shrink-0" }),
                          createVNode("div", null, [
                            createVNode("h4", { class: "text-sm font-medium text-secondary-900 hover:text-primary-600 cursor-pointer" }, toDisplayString(post.title), 1),
                            createVNode("p", { class: "text-xs text-secondary-500" }, toDisplayString(post.date), 1)
                          ])
                        ]);
                      }), 64))
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg font-bold text-secondary-900 mb-4" }, "Tags"),
                    createVNode("div", { class: "flex flex-wrap gap-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(tags, (tag) => {
                        return createVNode("span", {
                          key: tag,
                          class: "px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full hover:bg-primary-100 hover:text-primary-700 cursor-pointer transition-colors"
                        }, toDisplayString(tag), 1);
                      }), 64))
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BlqYDZC7.mjs.map
