import { createContext, useContext, useState } from "react";

import { PreferenceContextState, PreferenceContextType } from "@/types/types";

const initalData = {
  email: { email: "" },
  dataFields: {
    firstName: { firstName: "" },
    topic1: { topic1: "" },
    topic2: "",
    topic3: "",
    topic4: "",
  },
};

const PreferenceContext = createContext<PreferenceContextType>({
  data: initalData,
  setPreferencesData: () => {},
  setFormData: () => {},
  loading: false,
  verified: false,
  setLoading: () => {},
  setVerified: () => {},
});

function PerferencesContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState<boolean>(false);
  const [formData, setFormData] = useState<PreferenceContextState>({
    data: initalData,
  });

  const { data } = formData;

  const setPreferencesData = (newFormData: PreferenceContextState) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...newFormData }));
  };

  return (
    <PreferenceContext.Provider
      value={{
        data,
        loading,
        verified,
        setPreferencesData,
        setFormData,
        setLoading,
        setVerified,
      }}>
      {children}
    </PreferenceContext.Provider>
  );
}

export default PerferencesContextProvider;

export const usePreferenceContext = () => useContext(PreferenceContext);
