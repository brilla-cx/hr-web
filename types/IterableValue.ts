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
};
