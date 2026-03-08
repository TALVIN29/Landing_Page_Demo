<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 bg-gradient-to-br from-secondary-900 to-primary-900">
      <UiContainer size="lg">
        <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p class="text-xl text-primary-100">
          Your privacy is important to us
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

          <h2>1. Introduction</h2>
          <p>
            Packaging Automation Solutions ("we," "our," or "us") operates packagingautomation.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Personal Data</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Fill out a contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a quote</li>
            <li>Contact us via email or phone</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and requests</li>
            <li>Provide the services you requested</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except:</p>
          <ul>
            <li>Trusted third parties who assist us in operating our website</li>
            <li>When required by law or in response to legal requests</li>
            <li>To protect our rights, property, or safety</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect your experience on our site.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We have no control over the content or practices of these sites and are not responsible for their privacy policies.
          </p>

          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last modified" date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>Email: privacy@packagingautomation.com</li>
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
  title: 'Privacy Policy',
  meta: [
    { name: 'description', content: 'Privacy Policy for Packaging Automation Solutions - Learn how we collect, use, and protect your personal information.' },
  ],
})
</script>
