import cx from "classnames";
import Link from "next/link";

import { Button, Input } from "@/components/ui";
import DateTime from "@/components/ui/time";
import { Lead, Title } from "@/components/ui/typography";
import { lightHoverStyles } from "@/lib/hover";

export default function Sidebar(props) {
  return (
    <div className="border-2 border-gray-100 rounded p-4 shadow-sm">
      <Subscribe />
      <div className="hidden md:block">
        {props.related && <RelatedPosts related={props.related} />}
      </div>
    </div>
  );
}

function Subscribe() {
  return (
    <div>
      <Lead
        as="h3"
        className="font-semibold border-b-2 border-gray-300 inline-block">
        Subscribe
      </Lead>
      <p className="text-gray-500 text-sm mt-3 ">
        Join +320,000 professionals in our community. Delivery is free.
      </p>
      <form action="/search" method="GET" className="mt-4">
        <div className="flex flex-col gap-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <Input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
          />
          <Button type="submit">LEVEL UP</Button>
        </div>
      </form>
    </div>
  );
}

function RelatedPosts({ related }) {
  return (
    <div className="mt-10">
      <Lead
        as="h3"
        className="font-semibold border-b-2 border-gray-300 inline-block">
        Related Posts
      </Lead>
      <div className="grid gap-6 mt-3">
        {related.slice(0, 3).map((item) => {
          return (
            <Link key={item._id} href={`/gists/${item.slug.current}`}>
              <div className="flex gap-5 group">
                <div>
                  {/* h-14 */}
                  <Title
                    as="h2"
                    className={cx("inline leading-tight", lightHoverStyles)}>
                    {item.name}
                  </Title>
                  <p className="mt-1 text-sm text-gray-500">
                    <DateTime date={item.date} />
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
