export interface Tools {
  image: {
    imageAltText: string;
    _type: string;
    asset: {
      _type: string;
      _ref: string;
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
