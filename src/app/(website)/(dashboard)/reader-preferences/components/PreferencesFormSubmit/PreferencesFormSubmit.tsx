import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

import ReactTurnstile from "@/components/shared/reactTurnstile/ReactTurnstile";
import { GlowingButton, Lead } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";
import { usePreferenceContext } from "@/context/ReaderPerferencesContext";
import { updateUser } from "@/lib/server/actions";

function PreferencesFormSubmit({
  nextStep,
}: {
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  const { data } = usePreferenceContext();
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState<boolean>(false);
  const router = useRouter();

  const submitForm = async () => {
    if (!verified) {
      return;
    }
    setLoading(true);
    const { email, ...rest } = data;
    try {
      await updateUser(email.email, {
        firstName: rest.dataFields.firstName.firstName,
        topic1: rest.dataFields.topic1.topic1 ?? "",
        topic2: rest.dataFields.topic2,
        topic3: rest.dataFields.topic3,
        topic4: rest.dataFields.topic4,
      });
      setLoading(false);
      router.push("/signup/confirm");
    } catch (error) {
      setLoading(false);
      console.error("Error updating preferences:", error);
    }
  };

  return (
    <div>
      <div className="">
        <Lead className="text-center text-gray-200">
          Ready to change your preferences,{" "}
        </Lead>
        <p className="mt-3 text-center text-gray-400">
          Click submit, and we will update your preferences.
        </p>
      </div>
      {verified ? (
        <>
          <div className="mt-5 space-y-3 text-center text-gray-400">
            <div className="flex flex-col items-center gap-5">
              <Skeleton className="w-1/2 h-10" />
            </div>
          </div>
          <ReactTurnstile setVerified={setVerified} />
        </>
      ) : (
        <div className="flex justify-center mt-10">
          <GlowingButton
            type="submit"
            autoWidth
            // @ts-ignore
            onClick={submitForm}
            disabled={loading}
            aria-label="Submit form">
            {loading ? "Just a sec..." : "Update my Preferences"}
          </GlowingButton>
        </div>
      )}
    </div>
  );
}

export default PreferencesFormSubmit;
