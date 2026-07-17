export interface BlogSection {
  id: string;
  title: string;
  content: string[];
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogCallToAction {
  title: string;
  description: string;
  button: string;
  phone: string;
}

export interface BlogContent {
  introduction: string[];
  sections: BlogSection[];
  callToAction: BlogCallToAction;
  faqs: BlogFAQ[];
}