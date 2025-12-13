// Home Page SEO Types

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  imageUrl: string;
  siteName: string;
  twitterSite: string;
}

export interface OpenGraphData {
  type: string;
  title: string;
  description: string;
  url: string;
  siteName: string;
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  locale: string;
}

export interface TwitterCardData {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  site: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface StructuredDataOrganization {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs: string[];
}

export interface StructuredDataWebsite {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  potentialAction: {
    '@type': string;
    target: string;
    'query-input': string;
  };
}

export interface SEOConfiguration {
  metadata: SEOMetadata;
  openGraph: OpenGraphData;
  twitterCard: TwitterCardData;
  structuredData: {
    organization: StructuredDataOrganization;
    website: StructuredDataWebsite;
  };
}
