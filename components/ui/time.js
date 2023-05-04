import { format,parseISO } from "date-fns";

import { cx } from "@/lib/utils";

export default function DateTime({ date, className }) {
  return (
    <time className={cx(className && className)} dateTime={date}>
      {format(parseISO(date), "MMMM dd, yyyy")}
    </time>
  );
}
