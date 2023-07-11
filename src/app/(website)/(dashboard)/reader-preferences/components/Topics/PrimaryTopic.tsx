import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";

import { GlowingButton, Lead } from "@/components/ui";
import { usePreferenceContext } from "@/context/ReaderPerferencesContext";
import {
  PrimaryTopicInfo,
  PrimaryTopicSchema,
  TopicsArray,
} from "@/lib/validation/validations";

export default function PrimaryTopicForm({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const { setFormData, data } = usePreferenceContext();
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    getValues,
  } = useForm<PrimaryTopicInfo>({
    resolver: zodResolver(PrimaryTopicSchema),
  });

  const onSubmit = () => {
    const current = getValues("topic1");
    setFormData((prev) => ({
      data: {
        ...prev.data,
        dataFields: {
          ...prev.data.dataFields,
          topic1: {
            topic1: current,
          },
        },
      },
    }));
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    setValue("topic1", data.dataFields.topic1?.topic1 ?? "");
  }, [data, setValue]);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-10 text-center text-xs uppercase leading-6 tracking-wider text-gray-400">
        Change your Primary Topic
      </p>
      <div className="">
        <Lead className="text-center text-gray-200">
          Tell us your primay topic of inteest, we{"\u2018"}ll filter the rest.
        </Lead>
      </div>
      <div className="mt-5" />
      <div className="grid gap-6 sm:grid-cols-2">
        {TopicsArray.map((item, index) => (
          <label
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="inline-flex w-full items-center gap-4 rounded border border-gray-600 bg-slate-900 px-4 py-2 focus-within:border-2 focus-within:border-pink focus-within:ring-pink hover:bg-gray-800">
            <input
              value={item}
              //   checked={getValues("topic1") === item}
              type="radio"
              {...register("topic1")}
              className="h-4 w-4 appearance-none rounded border-2 text-pink focus:border-pink focus:ring-pink"
            />
            <span className="text-white">{item}</span>
          </label>
        ))}
      </div>
      {errors.topic1 && (
        <div className="mt-3 text-center text-red-600">
          <small>please choose a primary topic</small>
        </div>
      )}
      <div className="mt-10 flex justify-center">
        <GlowingButton type="submit" autoWidth>
          Next
        </GlowingButton>
      </div>
    </form>
  );
}
