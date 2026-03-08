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
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Terms of Service",
      meta: [
        { name: "description", content: "Terms of Service for Packaging Automation Solutions - Terms and conditions governing your use of our website." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContainer = _sfc_main$1;
      const _component_SectionsCTASection = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="py-16 bg-gradient-to-br from-secondary-900 to-primary-900">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-4xl sm:text-5xl font-bold text-white mb-4"${_scopeId}> Terms of Service </h1><p class="text-xl text-primary-100"${_scopeId}> Terms and conditions governing your use of our website </p>`);
          } else {
            return [
              createVNode("h1", { class: "text-4xl sm:text-5xl font-bold text-white mb-4" }, " Terms of Service "),
              createVNode("p", { class: "text-xl text-primary-100" }, " Terms and conditions governing your use of our website ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="py-20 bg-white">`);
      _push(ssrRenderComponent(_component_UiContainer, { size: "lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl prose prose-lg"${_scopeId}><p class="text-secondary-600 mb-8"${_scopeId}> Last updated: March 8, 2026 </p><h2${_scopeId}>1. Acceptance of Terms</h2><p${_scopeId}> By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. </p><h2${_scopeId}>2. Use License</h2><p${_scopeId}> Permission is granted to temporarily use this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: </p><ul${_scopeId}><li${_scopeId}>Modify or copy the materials</li><li${_scopeId}>Use the materials for any commercial purpose</li><li${_scopeId}>Transfer the materials to another person</li><li${_scopeId}>Attempt to reverse engineer any software on the website</li></ul><h2${_scopeId}>3. Disclaimer</h2><p${_scopeId}> The materials on this website are provided &quot;as is.&quot; We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property. </p><h2${_scopeId}>4. Limitations</h2><p${_scopeId}> In no event shall Packaging Automation Solutions or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website. </p><h2${_scopeId}>5. Accuracy of Materials</h2><p${_scopeId}> The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on this website are accurate, complete, or current. </p><h2${_scopeId}>6. Links</h2><p${_scopeId}> Packaging Automation Solutions has not reviewed all of the sites linked to this website and is not responsible for the contents of any such linked site. </p><h2${_scopeId}>7. Modifications</h2><p${_scopeId}> Packaging Automation Solutions may revise these terms of service at any time without notice. By using this website, you agree to be bound by the then-current version of these terms of service. </p><h2${_scopeId}>8. Governing Law</h2><p${_scopeId}> These terms and conditions are governed by and construed in accordance with the laws of Malaysia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location. </p><h2${_scopeId}>9. Intellectual Property</h2><p${_scopeId}> All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Packaging Automation Solutions and is protected by international copyright laws. </p><h2${_scopeId}>10. User Content</h2><p${_scopeId}> You retain ownership of any content you submit to our website. By submitting content, you grant us a worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, and display such content. </p><h2${_scopeId}>11. Contact Information</h2><p${_scopeId}> If you have any questions about these Terms of Service, please contact us: </p><ul${_scopeId}><li${_scopeId}>Email: legal@packagingautomation.com</li><li${_scopeId}>Phone: +60 3 1234 5678</li><li${_scopeId}>Address: 123 Automation Way, Tech Park, Kuala Lumpur, Malaysia</li></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl prose prose-lg" }, [
                createVNode("p", { class: "text-secondary-600 mb-8" }, " Last updated: March 8, 2026 "),
                createVNode("h2", null, "1. Acceptance of Terms"),
                createVNode("p", null, " By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. "),
                createVNode("h2", null, "2. Use License"),
                createVNode("p", null, " Permission is granted to temporarily use this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: "),
                createVNode("ul", null, [
                  createVNode("li", null, "Modify or copy the materials"),
                  createVNode("li", null, "Use the materials for any commercial purpose"),
                  createVNode("li", null, "Transfer the materials to another person"),
                  createVNode("li", null, "Attempt to reverse engineer any software on the website")
                ]),
                createVNode("h2", null, "3. Disclaimer"),
                createVNode("p", null, ' The materials on this website are provided "as is." We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property. '),
                createVNode("h2", null, "4. Limitations"),
                createVNode("p", null, " In no event shall Packaging Automation Solutions or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website. "),
                createVNode("h2", null, "5. Accuracy of Materials"),
                createVNode("p", null, " The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on this website are accurate, complete, or current. "),
                createVNode("h2", null, "6. Links"),
                createVNode("p", null, " Packaging Automation Solutions has not reviewed all of the sites linked to this website and is not responsible for the contents of any such linked site. "),
                createVNode("h2", null, "7. Modifications"),
                createVNode("p", null, " Packaging Automation Solutions may revise these terms of service at any time without notice. By using this website, you agree to be bound by the then-current version of these terms of service. "),
                createVNode("h2", null, "8. Governing Law"),
                createVNode("p", null, " These terms and conditions are governed by and construed in accordance with the laws of Malaysia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location. "),
                createVNode("h2", null, "9. Intellectual Property"),
                createVNode("p", null, " All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Packaging Automation Solutions and is protected by international copyright laws. "),
                createVNode("h2", null, "10. User Content"),
                createVNode("p", null, " You retain ownership of any content you submit to our website. By submitting content, you grant us a worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, and display such content. "),
                createVNode("h2", null, "11. Contact Information"),
                createVNode("p", null, " If you have any questions about these Terms of Service, please contact us: "),
                createVNode("ul", null, [
                  createVNode("li", null, "Email: legal@packagingautomation.com"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=terms-C98Y0tvy.mjs.map
