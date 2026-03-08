<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 bg-gradient-to-br from-secondary-900 to-primary-900">
      <UiContainer size="lg">
        <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
          Terms of Service
        </h1>
        <p class="text-xl text-primary-100">
          Terms and conditions governing your use of our website
        </p>
      </UiContainer>
    </section>

    <!-- Content -->
    <section class="py-20 bg-white">
      <UiContainer size="lg">
        <div class="max-w-4xl prose prose-lg">
          <p class="text-secondary-600 mb-8">
            Last updated: March 8, 2026
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily use this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Transfer the materials to another person</li>
            <li>Attempt to reverse engineer any software on the website</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on this website are provided "as is." We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall Packaging Automation Solutions or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.
          </p>

          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on this website are accurate, complete, or current.
          </p>

          <h2>6. Links</h2>
          <p>
            Packaging Automation Solutions has not reviewed all of the sites linked to this website and is not responsible for the contents of any such linked site.
          </p>

          <h2>7. Modifications</h2>
          <p>
            Packaging Automation Solutions may revise these terms of service at any time without notice. By using this website, you agree to be bound by the then-current version of these terms of service.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Malaysia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>

          <h2>9. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Packaging Automation Solutions and is protected by international copyright laws.
          </p>

          <h2>10. User Content</h2>
          <p>
            You retain ownership of any content you submit to our website. By submitting content, you grant us a worldwide, royalty-free, perpetual, irrevocable license to use, reproduce, and display such content.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <ul>
            <li>Email: legal@packagingautomation.com</li>
            <li>Phone: +60 3 1234 5678</li>
            <li>Address: 123 Automation Way, Tech Park, Kuala Lumpur, Malaysia</li>
          </ul>
        </div>
      </UiContainer>
    </section>

    <!-- CTA Section -->
    <SectionsCTASection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Terms of Service',
  meta: [
    { name: 'description', content: 'Terms of Service for Packaging Automation Solutions - Terms and conditions governing your use of our website.' },
  ],
})
</script>
