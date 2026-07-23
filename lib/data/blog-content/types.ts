export interface BlogAuthor {
  name?: string;
  role?: string;
  image?: string;
  bio?: string;
}


export interface BlogSection {
  id?: string;

  title: string;

  subtitle?: string;

  content: string[];

  bullets?: string[];

  numberedList?: string[];

  image?: string;

  imageAlt?: string;

  table?: BlogTable;

  tips?: string[];

  warning?: string;

  note?: string;

  pros?: string[];

  cons?: string[];

  steps?: BlogStep[];

  relatedLinks?: BlogLink[];
}


export interface BlogStep {
  title: string;
  description: string;
}


export interface BlogTable {
  headers: string[];
  rows: string[][];
}


export interface BlogLink {
  title: string;
  url: string;
}


export interface BlogFAQ {
  question: string;

  answer: string;

  category?: string;
}


export interface BlogCallToAction {

  title: string;

  description: string;

  button: string;

  phone?: string;

  url?: string;
}


export interface BlogSchema {

  type?: 
  | "Article"
  | "FAQPage"
  | "HowTo"
  | "Service"
  | "LocalBusiness";

  data?: Record<string, any>;

}


export interface BlogSEO {

  title?: string;

  description?: string;

  canonical?: string;

  robots?: string;

  keywords?: string[];

}


export interface BlogContent {

  /*
  Basic SEO Information
  */

  title?: string;

  description?: string;

  slug?: string;

  category?: string;

  subCategory?: string;


  /*
  Media
  */

  image?: string;

  imageAlt?: string;


  /*
  Author Information
  */

  author?: string | BlogAuthor;


  /*
  Dates
  */

  publishedAt?: string;

  updatedAt?: string;


  /*
  Reading Information
  */

  readingTime?: string;


  /*
  SEO Keywords
  */

  keywords?: string[];


  /*
  SEO Metadata
  */

  seo?: BlogSEO;


  /*
  Main Content
  */

  introduction: string[];


  sections: BlogSection[];



  /*
  CTA Section
  */

  callToAction: BlogCallToAction;



  /*
  FAQ Content
  */

  faqs: BlogFAQ[];



  /*
  Schema Markup Support
  */

  schema?: BlogSchema;



  /*
  Related Blog Support
  */

  relatedBlogs?: BlogLink[];



  /*
  Service Area SEO
  */

  locations?: string[];



  /*
  Internal Linking
  */

  internalLinks?: BlogLink[];



  /*
  External References
  */

  externalLinks?: BlogLink[];



  /*
  Extra Custom Data
  */

  metadata?: Record<string, any>;

}