import cx from "classnames";
import Link from "next/link";

import GlowingButton from "@/components/ui/glowingButton";
import DateTime from "@/components/ui/time";
import { Lead, Title } from "@/components/ui/typography";
import { lightHoverStyles } from "@/lib/hover";

// Main Sidebar component
export default function Sidebar({ subscribeTitle, subscribeText, related }) {
  // As per Ambreen, sidebar has a border, rounded corners, padding and a shadow for a distinct look
  return (
    <div className="rounded border-2 border-gray-100 p-4 shadow-sm">
      <Subscribe title={subscribeTitle} text={subscribeText} />
      <div className="hidden md:block">
        {related && <RelatedPosts related={related} />}
      </div>
    </div>
  );
}

// Component for the newsletter subscription section. Disco glowing button as per Ambreen.
function Subscribe({ title, text }) {
  return (
    <div>
      <Lead
        as="h3"
        className="inline-block border-b-2 border-gray-300 font-semibold">
        {title}
      </Lead>
      <p className="mt-3 text-sm text-gray-500 ">{text}</p>
      <div className="mt-8">
        <GlowingButton
          variant="subscribe"
          href="/signup"
          size="md"
          autoWidth={false}
          id="post-side"
          aria-label="Go to signup form">
          Level Up
        </GlowingButton>
      </div>
    </div>
  );
}

// Component for displaying related posts
function RelatedPosts({ related }) {
  return (
    <div className="mt-10">
      <Lead
        as="h3"
        className="inline-block border-b-2 border-gray-300 font-semibold">
        Related Posts
      </Lead>
      <div className="mt-3 grid gap-6">
        {related.slice(0, 3).map((item) => {
          return (
            <Link key={item._id} href={`/gists/${item.slug.current}`}>
              <div className="group flex gap-5">
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
