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
  topic1: TopicEnum | null;
};

const PreferenceContext = createContext<PreferenceContextType>({
  firstName: {
    firstName: "",
  },
  email: {
    email: "",
  },
  topic1: null,
});

function PerferencesContextProvider({ children }) {
  const [formData, setFormData] = useState<{
    email: EmailInfo;
    firstName: FirstNameInfo;
    topic1: TopicEnum | null;
  }>({
    email: {
      email: "",
    },
    firstName: {
      firstName: "",
    },
    topic1: null,
  });

  const { email, firstName, topic1 } = formData;

  return (
    <PreferenceContext.Provider
      value={{
        email,
        firstName,
        topic1,
      }}>
      {children}
    </PreferenceContext.Provider>
  );
}

export default PerferencesContextProvider;

export const usePreferenceContext = () => useContext(PreferenceContext);
