import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";

import { GlowingButton, Lead } from "@/components/ui";
import BackButton from "@/components/ui/FormComponents";
import { usePreferenceContext } from "@/context/ReaderPerferencesContext";
import {
  OtherTopicInfo,
  OtherTopicSchema,
  PrimaryTopicInfo,
  PrimaryTopicSchema,
  TopicsArray,
} from "@/lib/validation/validations";

export function PrimaryTopicForm({
  nextStep,
}: {
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    getValues,
  } = useForm<PrimaryTopicInfo>({
    resolver: zodResolver(PrimaryTopicSchema),
  });

  const { setFormData, data } = usePreferenceContext();

  const onSubmit = (primaryTopic: PrimaryTopicInfo) => {
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
    nextStep((prev) => prev + 1);
  };

  useEffect(() => {
    setValue("topic1", data.dataFields.topic1?.topic1 ?? "");
  }, [data, setValue]);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-10 text-xs leading-6 tracking-wider text-center text-gray-400 uppercase">
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
            className="inline-flex items-center w-full gap-4 px-4 py-2 border border-gray-600 rounded bg-slate-900 focus-within:border-2 focus-within:border-pink focus-within:ring-pink hover:bg-gray-800">
            <input
              value={item}
              //   checked={getValues("topic1") === item}
              type="radio"
              {...register("topic1")}
              className="w-4 h-4 border-2 rounded appearance-none text-pink focus:border-pink focus:ring-pink"
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
      <div className="flex justify-center mt-10">
        <GlowingButton type="submit" autoWidth>
          Next
        </GlowingButton>
      </div>
    </form>
  );
}

export function OtheTopicsForm({
  nextStep,
}: {
  nextStep: Dispatch<SetStateAction<number>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<OtherTopicInfo>({
    resolver: zodResolver(OtherTopicSchema),
  });

  const { setFormData, data } = usePreferenceContext();

  const topicsSelected = watch("topics");

  const onSubmit = (data: OtherTopicInfo) => {
    if (Array.isArray(data.topics)) {
      const formattedValues = data.topics.reduce((result, topic, index) => {
        result[`topic${index + 2}`] = topic;
        return result;
      }, {});

      setFormData((prev) => ({
        data: {
          ...prev.data,
          dataFields: {
            ...prev.data.dataFields,
            ...formattedValues,
          },
        },
      }));
    }
    nextStep((prev) => prev + 1);
  };

  const filteredTopics = TopicsArray.filter(
    (topic) => topic !== data.dataFields.topic1.topic1
  );

  useEffect(() => {
    setValue("topics", [
      data.dataFields.topic2 ?? "",
      data.dataFields.topic3 ?? "",
      data.dataFields.topic4 ?? "",
    ]);
  }, [data, setValue]);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 sm:grid-cols-2">
        {filteredTopics.map((topic, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="inline-flex items-center w-full gap-4 px-4 py-2 border border-gray-600 rounded bg-slate-900 focus-within:border-pink focus-within:ring-pink hover:bg-gray-800">
            <input
              type="checkbox"
              id={topic}
              value={topic}
              className="w-4 h-4 text-pink focus-within:border-2 focus:border-pink focus:ring-pink"
              {...register("topics")}
            />
            <label className="text-white" htmlFor={topic}>
              {topic}
            </label>
          </div>
        ))}
      </div>
      {errors.topics && <p className="text-red-400">{errors.topics.message}</p>}
      <div className="flex justify-center mt-10">
        <BackButton onClick={() => nextStep((prev) => prev - 1)} />
        <GlowingButton
          type="submit"
          autoWidth
          ariaLabel={topicsSelected ? "Go to the next step" : "Skip this step"}>
          {topicsSelected ? "Next" : "Skip"}
        </GlowingButton>
      </div>
    </form>
  );
}
