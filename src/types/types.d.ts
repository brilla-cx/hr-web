/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction } from "react";

import {
  FirstNameInfo,
  OtherTopicInfo,
  PrimaryTopicInfo,
} from "@/lib/validation/validations";
import { EmailInfo } from "@/lib/validation/validations";

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

export type PreferenceContextType = {
  data: {
    email: EmailInfo;
    dataFields: {
      firstName: FirstNameInfo;
      topic1: Pick<PrimaryTopicInfo, "topic1">;
      topic2: string;
      topic3: string;
      topic4: string;
    };
  };
  loading: boolean;
  verified: boolean;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  setVerified: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setPreferencesData: (newFormData: PreferenceContextState) => void;
  setFormData: Dispatch<SetStateAction<PreferenceContextState>>;
};

export type PreferenceContextState = Pick<PreferenceContextType, "data">;
