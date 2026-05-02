export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    short_description?: string;
    description?: string;
    benefits?: string;
    eligibility?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    icon?: string;
  };
}

export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    page_title?: string;
    content?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    meta_description?: string;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name?: string;
    location?: string;
    quote?: string;
    rating?: number | { key: string; value: string };
    customer_photo?: {
      url: string;
      imgix_url: string;
    };
    service?: Service;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}