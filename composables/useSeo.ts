export const useSeo = () => {
  const config = useRuntimeConfig()
  const route = useRoute()

  const siteUrl = config.public.siteUrl || 'https://packagingautomation.com'
  const siteName = 'Packaging Automation Solutions'
  const siteDescription = 'Leading provider of packaging automation solutions in Southeast Asia. Specializing in medical devices, pharmaceuticals, glove manufacturing, and FMCG automation.'

  const getMetaTags = (options: {
    title: string
    description?: string
    image?: string
    type?: 'website' | 'article'
    publishedTime?: string
    author?: string
    tags?: string[]
  }) => {
    const fullTitle = options.title === siteName ? options.title : `${options.title} | ${siteName}`
    const canonicalUrl = `${siteUrl}${route.fullPath}`
    
    return {
      title: fullTitle,
      meta: [
        { name: 'description', content: options.description || siteDescription },
        { name: 'canonical', content: canonicalUrl },
        
        { property: 'og:title', content: fullTitle },
        { property: 'og:description', content: options.description || siteDescription },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:type', content: options.type || 'website' },
        { property: 'og:site_name', content: siteName },
        
        ...(options.image ? [{ property: 'og:image', content: options.image }] : []),
        
        ...(options.type === 'article' ? [
          { property: 'article:published_time', content: options.publishedTime },
          { property: 'article:author', content: options.author },
          ...(options.tags?.map(tag => ({ property: 'article:tag', content: tag })) || [])
        ] : []),
        
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: fullTitle },
        { name: 'twitter:description', content: options.description || siteDescription },
        ...(options.image ? [{ name: 'twitter:image', content: options.image }] : []),
      ]
    }
  }

  const getOrganizationSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
      description: siteDescription,
      foundingDate: '1999',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Automation Way, Tech Park',
        addressLocality: 'Kuala Lumpur',
        addressRegion: 'Selangor',
        postalCode: '50000',
        addressCountry: 'MY'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+60-3-1234-5678',
        contactType: 'customer service',
        email: 'info@packagingautomation.com',
        availableLanguage: ['English', 'Malay', 'Chinese']
      },
      sameAs: [
        'https://facebook.com/packagingautomation',
        'https://linkedin.com/company/packagingautomation',
        'https://twitter.com/packagingautomation'
      ]
    }
  }

  const getLocalBusinessSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteName,
      image: `${siteUrl}/images/logo.png`,
      url: siteUrl,
      telephone: '+60-3-1234-5678',
      email: 'info@packagingautomation.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Automation Way, Tech Park',
        addressLocality: 'Kuala Lumpur',
        addressRegion: 'Selangor',
        postalCode: '50000',
        addressCountry: 'MY'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '3.1390',
        longitude: '101.6869'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      priceRange: '$$$'
    }
  }

  const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    }
  }

  const getProductSchema = (product: {
    name: string
    description: string
    image: string
    brand?: string
    price?: string
    currency?: string
    availability?: string
  }) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: product.image,
      brand: {
        '@type': 'Brand',
        name: product.brand || siteName
      },
      offers: {
        '@type': 'Offer',
        price: product.price || 'Contact for pricing',
        priceCurrency: product.currency || 'USD',
        availability: product.availability || 'https://schema.org/InStock'
      }
    }
  }

  const getArticleSchema = (article: {
    headline: string
    description: string
    image: string
    datePublished: string
    dateModified?: string
    author: string
    publisher: string
    url: string
  }) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.headline,
      description: article.description,
      image: article.image,
      datePublished: article.datePublished,
      dateModified: article.dateModified || article.datePublished,
      author: {
        '@type': 'Person',
        name: article.author
      },
      publisher: {
        '@type': 'Organization',
        name: article.publisher,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/images/logo.png`
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': article.url
      }
    }
  }

  const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  }

  const getServiceSchema = (service: {
    name: string
    description: string
    provider: string
    areaServed?: string
  }) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: service.provider
      },
      areaServed: service.areaServed || 'Southeast Asia'
    }
  }

  const addStructuredData = (schema: object) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(schema)
        }
      ]
    })
  }

  return {
    getMetaTags,
    getOrganizationSchema,
    getLocalBusinessSchema,
    getBreadcrumbSchema,
    getProductSchema,
    getArticleSchema,
    getFAQSchema,
    getServiceSchema,
    addStructuredData,
    siteUrl,
    siteName,
    siteDescription
  }
}
