import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { GlowingButton } from "@/components/ui";
import BackButton from "@/components/ui/FormComponents";
import { usePreferenceContext } from "@/context/ReaderPerferencesContext";
import {
  OtherTopicInfo,
  OtherTopicSchema,
  TopicsArray,
} from "@/lib/validation/validations";

const filteredTopics = (topic1: string) =>
  TopicsArray.filter((topic) => topic !== topic1);

export default function OtheTopicsForm() {
  const { setFormData, data, setStep } = usePreferenceContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<OtherTopicInfo>({
    resolver: zodResolver(OtherTopicSchema),
  });

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
    setStep((prev) => prev + 1);
  };

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
        {filteredTopics(data.dataFields.topic1.topic1).map((topic, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="inline-flex w-full items-center gap-4 rounded border border-gray-600 bg-slate-900 px-4 py-2 focus-within:border-pink focus-within:ring-pink hover:bg-gray-800">
            <input
              type="checkbox"
              id={topic}
              value={topic}
              className="h-4 w-4 text-pink focus-within:border-2 focus:border-pink focus:ring-pink"
              {...register("topics")}
            />
            <label className="text-white" htmlFor={topic}>
              {topic}
            </label>
          </div>
        ))}
      </div>
      {errors.topics && <p className="text-red-400">{errors.topics.message}</p>}
      <div className="mt-10 flex justify-center">
        <BackButton onClick={() => setStep((prev) => prev - 1)} />
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
