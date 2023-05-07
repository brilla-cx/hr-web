import Image from "next/image";
import Link from "next/link";

import { Button, H4, H5, Input } from "@/components/ui";
import Label from "@/components/ui/label";
import DateTime from "@/components/ui/time";
import { H6, Title } from "@/components/ui/typography";
import { urlForImage } from "@/sanity/image";

export default function Sidebar(props) {
  return (
    <div>
      <Subscribe />
      {props.related && <RelatedPosts related={props.related} />}
      {/*props.categories && <Categories categories={props.categories} />*/}
    </div>
  );
}

function Subscribe() {
  return (
    <div>
      <H6 as="h4" className="border-b border-pink inline-block">
        Subscribe
      </H6>
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
          <Button type="submit">Subscribe</Button>
        </div>
      </form>
    </div>
  );
}

function RelatedPosts({ related }) {
  return (
    <div className="mt-10">
      <H6 as="h2" className="border-b border-pink inline-block">
        Related Posts
      </H6>
      <div className="grid gap-6 mt-6">
        {related.slice(0, 3).map((item) => {
          const imageProps = item?.image ? urlForImage(item?.image) : null;
          return (
            <Link key={item._id} href={`/gists/${item.slug.current}`}>
              <div className="flex gap-5 group">
                <div className="relative w-24 h-20 overflow-hidden rounded-md shrink-0">
                  <Image
                    src={imageProps?.src}
                    alt={item?.alt || "Thumbnail"}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  {/* h-14 */}
                  <Title
                    as="h3"
                    className="hover:text-pink hover:underline hover:underline-offset-4 hover:decoration-dark-blue hover:decoration-2 transition-all duration-200 line-clamp-2">
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
/*
function Categories({ categories }) {
  return (
    <div className="mt-10">
      <H6 as="h2" className="border-b border-pink inline-block">
        Categories
      </H6>
      <ul className="grid mt-4">
        {categories.map((item, index) => (
          <li key={item._id}>
            <Link
              href={`/category/${item.slug.current}`}
              className="flex items-center group justify-between py-2">
              <Title as="h3" className="group-hover:underline">
                {item.name}
              </Title>
              <Label pill color={item.color}>
                {item.count}
              </Label>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
*/
