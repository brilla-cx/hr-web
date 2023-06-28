import React, { createContext, useContext, useState } from "react";

import { updateUser } from "@/lib/server/actions";
import {
  EmailInfo,
  FirstNameInfo,
  SignupData,
} from "@/lib/validation/signupStepperForm";

type SignupContextType = {
  email: EmailInfo;
  firstName: FirstNameInfo;
  setEmail: React.Dispatch<React.SetStateAction<EmailInfo>>;
  setFirstName: React.Dispatch<React.SetStateAction<FirstNameInfo>>;
  onSubmitAll: () => Promise<void>;
};

const SignupContext = createContext<SignupContextType>({
  setEmail: () => {},
  setFirstName: () => {},
  onSubmitAll: () => Promise.resolve(),
  firstName: {
    firstName: "",
  },
  email: {
    email: "",
  },
});

export default function SignupContextProvider({ children }) {
  const [email, setEmail] = useState<EmailInfo>({
    email: "",
  });
  const [firstName, setFirstName] = useState<FirstNameInfo>({
    firstName: "",
  });

  const onSubmitAll = async () => {
    try {
      const signUpData: SignupData = {
        ...email,
        ...firstName,
      };
      await updateUser(signUpData).catch(() => {
        throw new Error("Fail to send to iterable");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignupContext.Provider
      value={{
        email,
        firstName,
        setEmail,
        setFirstName,
        onSubmitAll,
      }}>
      {children}
    </SignupContext.Provider>
  );
}

export const useSignupContext = () => useContext(SignupContext);