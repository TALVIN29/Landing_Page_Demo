import { _ as _sfc_main$1 } from './Container-26Tm0WkQ.mjs';
import { _ as _sfc_main$2 } from './CTASection-Bx-k183i.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Privacy Policy",
      meta: [
        { name: "description", content: "Privacy Policy for Packaging Automation Solutions - Learn how we collect, use, and protect your personal information." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = _sfc_main$1;
      const _component_SectionsCTASection = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-16 bg-gradient-to-br from-secondary-900 to-primary-900">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-4xl sm:text-5xl font-bold text-white mb-4"${_scopeId}> Privacy Policy </h1><p class="text-xl text-primary-100"${_scopeId}> Your privacy is important to us </p>`);
          } else {
            return [
              createVNode("h1", { class: "text-4xl sm:text-5xl font-bold text-white mb-4" }, " Privacy Policy "),
              createVNode("p", { class: "text-xl text-primary-100" }, " Your privacy is important to us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-20 bg-white">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl prose prose-lg"${_scopeId}><p class="text-secondary-600 mb-8"${_scopeId}> Last updated: March 8, 2026 </p><h2${_scopeId}>1. Introduction</h2><p${_scopeId}> Packaging Automation Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates packagingautomation.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. </p><h2${_scopeId}>2. Information We Collect</h2><h3${_scopeId}>Personal Data</h3><p${_scopeId}>We may collect personal information that you voluntarily provide to us when you:</p><ul${_scopeId}><li${_scopeId}>Fill out a contact form</li><li${_scopeId}>Subscribe to our newsletter</li><li${_scopeId}>Request a quote</li><li${_scopeId}>Contact us via email or phone</li></ul><p${_scopeId}>This information may include:</p><ul${_scopeId}><li${_scopeId}>Name</li><li${_scopeId}>Email address</li><li${_scopeId}>Phone number</li><li${_scopeId}>Company name</li><li${_scopeId}>Any other information you choose to provide</li></ul><h2${_scopeId}>3. How We Use Your Information</h2><p${_scopeId}>We use the information we collect to:</p><ul${_scopeId}><li${_scopeId}>Respond to your inquiries and requests</li><li${_scopeId}>Provide the services you requested</li><li${_scopeId}>Send you marketing communications (with your consent)</li><li${_scopeId}>Improve our website and services</li><li${_scopeId}>Comply with legal obligations</li></ul><h2${_scopeId}>4. Information Sharing</h2><p${_scopeId}>We do not sell, trade, or otherwise transfer your personal information to outside parties except:</p><ul${_scopeId}><li${_scopeId}>Trusted third parties who assist us in operating our website</li><li${_scopeId}>When required by law or in response to legal requests</li><li${_scopeId}>To protect our rights, property, or safety</li></ul><h2${_scopeId}>5. Data Security</h2><p${_scopeId}> We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. </p><h2${_scopeId}>6. Cookies</h2><p${_scopeId}> Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect your experience on our site. </p><h2${_scopeId}>7. Third-Party Links</h2><p${_scopeId}> Our website may contain links to third-party websites. We have no control over the content or practices of these sites and are not responsible for their privacy policies. </p><h2${_scopeId}>8. Your Rights</h2><p${_scopeId}>You have the right to:</p><ul${_scopeId}><li${_scopeId}>Access your personal information</li><li${_scopeId}>Correct inaccurate data</li><li${_scopeId}>Request deletion of your data</li><li${_scopeId}>Opt-out of marketing communications</li></ul><h2${_scopeId}>9. Changes to This Policy</h2><p${_scopeId}> We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated &quot;Last modified&quot; date. </p><h2${_scopeId}>10. Contact Us</h2><p${_scopeId}> If you have any questions about this Privacy Policy, please contact us: </p><ul${_scopeId}><li${_scopeId}>Email: privacy@packagingautomation.com</li><li${_scopeId}>Phone: +60 3 1234 5678</li><li${_scopeId}>Address: 123 Automation Way, Tech Park, Kuala Lumpur, Malaysia</li></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl prose prose-lg" }, [
                createVNode("p", { class: "text-secondary-600 mb-8" }, " Last updated: March 8, 2026 "),
                createVNode("h2", null, "1. Introduction"),
                createVNode("p", null, ' Packaging Automation Solutions ("we," "our," or "us") operates packagingautomation.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. '),
                createVNode("h2", null, "2. Information We Collect"),
                createVNode("h3", null, "Personal Data"),
                createVNode("p", null, "We may collect personal information that you voluntarily provide to us when you:"),
                createVNode("ul", null, [
                  createVNode("li", null, "Fill out a contact form"),
                  createVNode("li", null, "Subscribe to our newsletter"),
                  createVNode("li", null, "Request a quote"),
                  createVNode("li", null, "Contact us via email or phone")
                ]),
                createVNode("p", null, "This information may include:"),
                createVNode("ul", null, [
                  createVNode("li", null, "Name"),
                  createVNode("li", null, "Email address"),
                  createVNode("li", null, "Phone number"),
                  createVNode("li", null, "Company name"),
                  createVNode("li", null, "Any other information you choose to provide")
                ]),
                createVNode("h2", null, "3. How We Use Your Information"),
                createVNode("p", null, "We use the information we collect to:"),
                createVNode("ul", null, [
                  createVNode("li", null, "Respond to your inquiries and requests"),
                  createVNode("li", null, "Provide the services you requested"),
                  createVNode("li", null, "Send you marketing communications (with your consent)"),
                  createVNode("li", null, "Improve our website and services"),
                  createVNode("li", null, "Comply with legal obligations")
                ]),
                createVNode("h2", null, "4. Information Sharing"),
                createVNode("p", null, "We do not sell, trade, or otherwise transfer your personal information to outside parties except:"),
                createVNode("ul", null, [
                  createVNode("li", null, "Trusted third parties who assist us in operating our website"),
                  createVNode("li", null, "When required by law or in response to legal requests"),
                  createVNode("li", null, "To protect our rights, property, or safety")
                ]),
                createVNode("h2", null, "5. Data Security"),
                createVNode("p", null, " We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. "),
                createVNode("h2", null, "6. Cookies"),
                createVNode("p", null, " Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect your experience on our site. "),
                createVNode("h2", null, "7. Third-Party Links"),
                createVNode("p", null, " Our website may contain links to third-party websites. We have no control over the content or practices of these sites and are not responsible for their privacy policies. "),
                createVNode("h2", null, "8. Your Rights"),
                createVNode("p", null, "You have the right to:"),
                createVNode("ul", null, [
                  createVNode("li", null, "Access your personal information"),
                  createVNode("li", null, "Correct inaccurate data"),
                  createVNode("li", null, "Request deletion of your data"),
                  createVNode("li", null, "Opt-out of marketing communications")
                ]),
                createVNode("h2", null, "9. Changes to This Policy"),
                createVNode("p", null, ' We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last modified" date. '),
                createVNode("h2", null, "10. Contact Us"),
                createVNode("p", null, " If you have any questions about this Privacy Policy, please contact us: "),
                createVNode("ul", null, [
                  createVNode("li", null, "Email: privacy@packagingautomation.com"),
                  createVNode("li", null, "Phone: +60 3 1234 5678"),
                  createVNode("li", null, "Address: 123 Automation Way, Tech Park, Kuala Lumpur, Malaysia")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-DioApZ4m.mjs.map
