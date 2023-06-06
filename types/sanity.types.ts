// export interface BlockContent {
//   _type: "block";
//   _key: string;
//   text?: SanityBlock[];
// }

// export interface SanityBlock {
//   [key: string]: any;
// }

export type Faqs = {
  _id: string;
  _updatedAt: string;
  answer: any[];
  question: string;
  _createdAt: string;
  slug: {
    current: string;
    _type: string;
  };
  faqType: string[];
  publishedAt: string;
};
