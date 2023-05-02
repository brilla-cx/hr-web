import { urlForImage } from "@/sanity/image";
import Image from "next/image";
import Link from "next/link";
import Label from "@/components/ui/label";
import DateTime from "@/components/ui/time";
import { Button, H4, H6, Input, Lead } from "@/components/ui";
import { Title } from "@/components/ui/typography";

export default function Sidebar(props) {
  return (
    <div>
      <Subscribe />
      {props.related && <RelatedPosts related={props.related} />}
      {props.categories && <Categories categories={props.categories} />}
    </div>
  );
}

function Subscribe() {
  return (
    <div>
      <H4 className="border-b border-pink inline-block">Subscribe</H4>
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
      <H4 as="h2" className="border-b border-pink inline-block">
        Related Posts
      </H4>
      <div className="grid gap-6 mt-6">
        {related.slice(0, 3).map((item, index) => {
          const imageProps = item?.image ? urlForImage(item?.image) : null;
          return (
            <Link key={index} href={`/gists/${item.slug.current}`}>
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
                  <Title as="h3" className="group-hover:underline line-clamp-2">
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

function Categories({ categories }) {
  return (
    <div className="mt-10">
      <H4 as="h2" className="border-b border-pink inline-block">
        Categories
      </H4>
      <ul className="grid mt-4">
        {categories.map((item, index) => (
          <li key={item._id}>
            <Link
              href={`/category/${item.slug.current}`}
              className="flex items-center group justify-between py-2">
              <Title as="h3" className="group-hover:underline">
                {item.name}
              </Title>
              <Label pill={true} color={item.color}>
                {item.count}
              </Label>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
