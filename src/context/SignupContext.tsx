import { useRouter } from "next/navigation";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { updateUser } from "@/lib/server/actions";
import { EmailInfo, FirstNameInfo } from "@/lib/validation/validations";

type SignupContextType = {
  email: EmailInfo;
  firstName: FirstNameInfo;
  verified: boolean;
  setVerified: Dispatch<SetStateAction<boolean>>;
  setEmail: React.Dispatch<React.SetStateAction<EmailInfo>>;
  setFirstName: React.Dispatch<React.SetStateAction<FirstNameInfo>>;
  onSubmitAll: () => Promise<void>;
};

const SignupContext = createContext<SignupContextType>({
  // eslint-disable-next-line no-empty-function
  setEmail: () => {},
  // eslint-disable-next-line no-empty-function
  setFirstName: () => {},
  onSubmitAll: () => Promise.resolve(),
  firstName: {
    firstName: "",
  },
  email: {
    email: "",
  },
  verified: false,
  setVerified: () => {},
});

export default function SignupContextProvider({ children }) {
  const [verified, setVerified] = useState<boolean>(false);
  const router = useRouter();
  const [email, setEmail] = useState<EmailInfo>({
    email: "",
  });
  const [firstName, setFirstName] = useState<FirstNameInfo>({
    firstName: "",
  });

  const onSubmitAll = async () => {
    try {
      await updateUser(email.email, {
        firstName: firstName.firstName,
        topic1: "",
        topic2: "",
        topic3: "",
        topic4: "",
      }).catch(() => {
        throw new Error("Fail to send to iterable");
      });
      router.push("/signup/confirm");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignupContext.Provider
      value={{
        email,
        firstName,
        verified,
        setVerified,
        setEmail,
        setFirstName,
        onSubmitAll,
      }}>
      {children}
    </SignupContext.Provider>
  );
}

export const useSignupContext = () => useContext(SignupContext);
