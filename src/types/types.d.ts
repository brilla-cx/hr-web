export interface Tools {
  image: {
    imageAltText: string;
    _type: string;
    asset: {
      _type: string;
      _ref: string;
      url: string;
    };
  };
  _rev: string;
  discount: string;
  isPartner: boolean;
  name: string;
  publishedAt: string;
  _id: string;
  toolUrl: string;
  _updatedAt: string;
  slug: {
    current: string;
    _type: string;
  };
  companyName: string;
  _type: string;
  shortDescription: string;
  _createdAt: string;
  category: {
    _ref: string;
    _type: string;
    _key: string;
    color?: string;
  };
  partnerContactName: string;
  hrUse: never[];
}

export interface ValueType {
  _id: string;
  name: string;
  category: {
    _id: string;
    name: string;
  }[];
  featured: null;
  image: {
    imageAltText: string;
    asset: {
      url: string;
    };
    caption: null;
  };
  slug: {
    current: string;
    _type: string;
  };
  tldr: {
    children: {
      text: string;
    }[];
  }[];
  author: {
    name: string;
    image: {
      asset: {
        url: string;
      };
      imageAltText: string;
    };
    slug: {
      current: string;
      _type: string;
    };
    linkedin: string;
  };
  publishedAt: string;
  content: {
    children: {
      text: string;
    }[];
  }[];
  URL: string;
}

export interface FaqType {
  _type: string;
  _id: string;
  _updatedAt: string;
  slug: {
    _type: string;
    current: string;
  };
  answer: any[];
  question: string;
  _createdAt: string;
  _rev: string;
  faqType: string[];
  publishedAt: string;
}

export interface SitemapData {
  slug: string;
  _updatedAt: string;
}

export interface GroupedSitemapData {
  authors: SitemapData[];
  books: SitemapData[];
  posts: SitemapData[];
  socialBlog: SitemapData[];
  tools: SitemapData[];
}

export interface Metadata {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    images: string;
    url: string;
  };
  twitter: {
    title: string;
    description: string;
    images: string;
  };
}

export type HeroSection = {
  customLinkHref?: string;
  _type: "hero";
  customHeading?: string;
  _key: string;
  customizeContent?: boolean;
  keyword: {
    _createdAt: string;
    _rev: string;
    _type: "keyword";
    _id: string;
    keyword: string;
    _updatedAt: string;
  };
  customLinkText?: string;
  customContent?: Array<any>;
  content?: Array<any>;
  customizeHeading?: boolean;
};

export type IntroSection = {
  _key: string;
  keyword: {
    _id: string;
    keyword: string;
    _updatedAt: string;
    _createdAt: string;
    _rev: string;
    _type: "keyword";
  };
  content: Array<any>;
  customizeHeading?: boolean;
  customHeading: string;
  _type: "intro";
};

export type ProductsSection = {
  customContent: Array<any>;
  _type: "products";
  customHeading: string;
  _key: string;
  customizeContent: boolean;
  keyword: null;
  products: Array<{
    _ref?: string;
    _type: "product";
    _key: string;
  }>;
};

export type WhyShouldCare = {
  customHeading: string;
  _key: string;
  customizeContent: boolean;
  keyword: {
    _rev: string;
    _type: "keyword";
    _id: string;
    keyword: string;
    _updatedAt: string;
    _createdAt: string;
  };
  whyCareCardItems: Array<{
    _type: "whyCareCardItem";
    Icon: {
      provider: string;
      _type: "iconPicker";
      name: string;
    };
    _key: string;
    content: Array<any>;
    heading: string;
  }>;
  _type: "whyShouldCare";
};

export type CornerStonePage = {
  keyword: {
    _createdAt: string;
    _rev: string;
    _type: string;
    _id: string;
    keyword: string;
    _updatedAt: string;
  };
  _createdAt: string;
  _rev: string;
  _id: string;
  cornerstonePageSection: Array<
    HeroSection | IntroSection | ProductsSection | WhyShouldCare
  >;
};
