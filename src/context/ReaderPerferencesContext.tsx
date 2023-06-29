/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

import { EmailInfo, FirstNameInfo } from "@/lib/validation/signupStepperForm";

// eslint-disable-next-line no-shadow
export enum TopicEnum {
  AccountingFinance = "Accounting/Finance",
  ArtificialIntelligence = "Artificial Intelligence",
  BusinessConsulting = "Business Consulting",
  Copywriting = "Copywriting",
  Creative = "Creative",
  Design = "Design",
  CustomerService = "Customer Service",
  DigitalMarketing = "Digital Marketing",
  ProjectManagement = "Project Management",
  RunningYourBusiness = "Running Your Business",
  SEO = "SEO",
  SocialMediaManagement = "Social Media Management",
  WebMobileSoftware = "Web/Mobile/Software",
  Other = "Other",
}

type PreferenceContextType = {
  email: EmailInfo;
  firstName: FirstNameInfo;
  topics:
    | {
        primary: boolean;
        topic: TopicEnum;
      }[]
    | null;
};

const PreferenceContext = createContext<PreferenceContextType>({
  firstName: {
    firstName: "",
  },
  email: {
    email: "",
  },
  topics: null,
});

function PerferencesContextProvider({ children }) {
  const [email, setEmail] = useState<EmailInfo>({
    email: "",
  });
  const [firstName, setFirstName] = useState<FirstNameInfo>({
    firstName: "",
  });
  const [topics, setTopics] = useState<
    { primary: boolean; topic: TopicEnum }[] | null
  >(null);

  return (
    <PreferenceContext.Provider
      value={{
        email,
        firstName,
        topics,
      }}>
      {children}
    </PreferenceContext.Provider>
  );
}

export default PerferencesContextProvider;

export const usePreferenceContext = () => useContext(PreferenceContext);
