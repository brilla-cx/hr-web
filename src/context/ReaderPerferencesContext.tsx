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
});

function PerferencesContextProvider({ children }) {
  const [formData, setFormData] = useState<PreferenceContextState>({
    data: initalData,
  });

  const { data } = formData;

  const setPreferencesData = (newFormData: PreferenceContextState) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...newFormData }));
  };

  console.log(data);

  return (
    <PreferenceContext.Provider
      value={{
        data,
        setPreferencesData,
        setFormData,
      }}>
      {children}
    </PreferenceContext.Provider>
  );
}

export default PerferencesContextProvider;

export const usePreferenceContext = () => useContext(PreferenceContext);
