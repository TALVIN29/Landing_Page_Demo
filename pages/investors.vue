<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32 bg-gradient-to-br from-secondary-900 to-primary-900 overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 40px 40px;" />
      </div>
      
      <UiContainer size="lg" class="relative z-10">
        <div class="max-w-4xl">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Investor Relations
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            Building sustainable value through innovation and excellence in packaging automation.
          </p>
        </div>
      </UiContainer>
    </section>

    <!-- Financial Highlights -->
    <section class="py-20 lg:py-32 bg-white">
      <UiContainer size="lg">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Financial Highlights
          </h2>
          <p class="text-lg text-secondary-600">
            Key performance metrics demonstrating our growth trajectory
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(stat, index) in financialStats" :key="index" class="text-center p-6 bg-secondary-50 rounded-xl">
            <div class="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">{{ stat.value }}</div>
            <div class="text-secondary-600 text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Business Overview -->
    <section class="py-20 lg:py-32 bg-secondary-50">
      <UiContainer size="lg">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              Investment Opportunity
            </h2>
            <p class="text-lg text-secondary-600 mb-6 leading-relaxed">
              Packaging Automation Solutions is positioned at the forefront of Industry 4.0 transformation in Southeast Asia. Our proven track record of delivering high-value automation solutions positions us for continued growth in a rapidly expanding market.
            </p>
            <p class="text-lg text-secondary-600 mb-8 leading-relaxed">
              The global packaging automation market is projected to reach $12.8 billion by 2028, with Southeast Asia representing the fastest-growing region. Our established presence across 15 countries provides a strong foundation to capture this growth.
            </p>
            <div class="flex flex-wrap gap-4">
              <UiButton variant="primary">
                Download Investment Deck
              </UiButton>
              <UiButton variant="outline">
                Contact IR Team
              </UiButton>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <div class="text-3xl font-bold text-primary-600 mb-2">25+</div>
              <div class="text-secondary-600 text-sm">Years of Experience</div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <div class="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div class="text-secondary-600 text-sm">Projects Delivered</div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <div class="text-3xl font-bold text-primary-600 mb-2">15</div>
              <div class="text-secondary-600 text-sm">Countries</div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <div class="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div class="text-secondary-600 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Board of Directors -->
    <section class="py-20 lg:py-32 bg-white">
      <UiContainer size="lg">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Board of Directors
          </h2>
          <p class="text-lg text-secondary-600">
            Experienced leadership guiding our strategic direction
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(member, index) in boardMembers" :key="index" class="bg-secondary-50 rounded-xl p-6 text-center">
            <div class="w-24 h-24 bg-secondary-300 rounded-full mx-auto mb-4" />
            <h3 class="text-lg font-bold text-secondary-900">{{ member.name }}</h3>
            <p class="text-primary-600 text-sm mb-2">{{ member.position }}</p>
            <p class="text-secondary-600 text-xs">{{ member.background }}</p>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Corporate Governance -->
    <section class="py-20 lg:py-32 bg-secondary-50">
      <UiContainer size="lg">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Corporate Governance
          </h2>
          <p class="text-lg text-secondary-600">
            Committed to transparency, accountability, and ethical business practices
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UiCard v-for="(item, index) in governanceItems" :key="index" class="p-6">
            <h3 class="text-lg font-bold text-secondary-900 mb-3">{{ item.title }}</h3>
            <p class="text-secondary-600 text-sm">{{ item.description }}</p>
          </UiCard>
        </div>
      </UiContainer>
    </section>

    <!-- Annual Reports -->
    <section class="py-20 lg:py-32 bg-white">
      <UiContainer size="lg">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Annual Reports
          </h2>
          <p class="text-lg text-secondary-600">
            Download our financial reports and presentations
          </p>
        </div>

        <div class="space-y-4 max-w-3xl mx-auto">
          <div v-for="(report, index) in annualReports" :key="index" class="flex items-center justify-between p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <span class="text-primary-600 font-bold text-sm">{{ report.year }}</span>
              </div>
              <div>
                <h3 class="font-bold text-secondary-900">{{ report.title }}</h3>
                <p class="text-secondary-600 text-sm">{{ report.description }}</p>
              </div>
            </div>
            <UiButton variant="outline" size="sm">
              Download PDF
            </UiButton>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Stock Information -->
    <section class="py-20 lg:py-32 bg-secondary-900 text-white">
      <UiContainer size="lg">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">
            Stock Information
          </h2>
          <p class="text-primary-100 text-lg">
            Our shares are listed on Bursa Malaysia
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 class="text-xl font-bold mb-6">Share Performance</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center py-2 border-b border-white/20">
                <span class="text-primary-100">Current Price</span>
                <span class="font-bold">RM 4.85</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-white/20">
                <span class="text-primary-100">Market Cap</span>
                <span class="font-bold">RM 485M</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-white/20">
                <span class="text-primary-100">52-Week High</span>
                <span class="font-bold">RM 5.20</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-white/20">
                <span class="text-primary-100">52-Week Low</span>
                <span class="font-bold">RM 3.45</span>
              </div>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 class="text-xl font-bold mb-6">Dividend Information</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center py-2 border-b border-white/20">
                <span class="text-primary-100">Dividend Yield</span>
                <span class="font-bold">3.2%</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-white/20">
                <span class="text-primary-100">Dividend Per Share</span>
                <span class="font-bold">RM 0.15</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-white/20">
                <span class="text-primary-100">Ex-Dividend Date</span>
                <span class="font-bold">March 15, 2026</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span class="text-primary-100">Payment Date</span>
                <span class="font-bold">April 30, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- Press Releases -->
    <section class="py-20 lg:py-32 bg-white">
      <UiContainer size="lg">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Latest Announcements
          </h2>
          <p class="text-lg text-secondary-600">
            Recent news and updates for investors
          </p>
        </div>

        <div class="space-y-6 max-w-3xl mx-auto">
          <div v-for="(news, index) in pressReleases" :key="index" class="border-l-4 border-primary-600 pl-6">
            <span class="text-secondary-500 text-sm">{{ news.date }}</span>
            <h3 class="text-lg font-bold text-secondary-900 mt-1 mb-2">{{ news.title }}</h3>
            <p class="text-secondary-600 text-sm">{{ news.excerpt }}</p>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- IR Contact -->
    <section class="py-20 lg:py-32 bg-secondary-50">
      <UiContainer size="lg">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
            Investor Relations Contact
          </h2>
          <p class="text-lg text-secondary-600 mb-8">
            For inquiries regarding investor relations, please contact:
          </p>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-lg font-bold text-secondary-900 mb-2">Investor Relations Office</h3>
            <p class="text-secondary-600 mb-4">Email: ir@packagingautomation.com</p>
            <p class="text-secondary-600 mb-6">Phone: +60 3 1234 5678</p>
            <UiButton variant="primary">
              Subscribe to IR Updates
            </UiButton>
          </div>
        </div>
      </UiContainer>
    </section>

    <!-- CTA Section -->
    <SectionsCTASection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Investor Relations',
  meta: [
    { name: 'description', content: 'Investor relations information for Packaging Automation Solutions - Financial highlights, corporate governance, and stock information.' },
  ],
})

const financialStats = [
  { value: 'RM 485M', label: 'Market Capitalization' },
  { value: 'RM 85M', label: 'Annual Revenue' },
  { value: '18%', label: 'YoY Growth' },
  { value: '3.2%', label: 'Dividend Yield' },
]

const boardMembers = [
  { name: 'Dato Sri Ahmad Hassan', position: 'Chairman & CEO', background: '30+ years in manufacturing & automation' },
  { name: 'Tan Sri Dr. Wong', position: 'Independent Director', background: 'Former central bank governor' },
  { name: 'Prof. Dr. Sarah Chen', position: 'Independent Director', background: 'Industry 4.0 academic expert' },
  { name: 'Rajesh Kumar', position: 'Executive Director', background: 'Technical Director with 20+ years experience' },
  { name: 'Datuk Michelle Tan', position: 'Non-Executive Director', background: 'Banking & finance specialist' },
  { name: 'James Lim', position: 'Independent Director', background: 'Corporate governance expert' },
]

const governanceItems = [
  { title: 'Board Independence', description: 'Majority of board members are independent, ensuring unbiased oversight and decision-making.' },
  { title: 'Audit Committee', description: 'Independent audit committee providing robust financial oversight and risk management.' },
  { title: 'ESG Commitment', description: 'Strong environmental, social, and governance practices integrated into our business strategy.' },
]

const annualReports = [
  { year: '2025', title: 'Annual Report 2025', description: 'Full year financial results and strategic overview' },
  { year: '2024', title: 'Annual Report 2024', description: 'Full year financial results and strategic overview' },
  { year: '2023', title: 'Annual Report 2023', description: 'Full year financial results and strategic overview' },
]

const pressReleases = [
  { date: 'March 1, 2026', title: 'Q4 2025 Financial Results Announced', excerpt: 'Record quarterly revenue driven by strong demand in Southeast Asia markets.' },
  { date: 'February 15, 2026', title: 'New Strategic Partnership in Vietnam', excerpt: 'Signed MOU with leading Vietnamese manufacturer for automation solutions.' },
  { date: 'January 10, 2026', title: 'Dividend Declaration', excerpt: 'Board declares second interim dividend of 8 sen per share.' },
]
</script>
