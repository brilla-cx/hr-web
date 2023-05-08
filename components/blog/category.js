import Link from "next/link";

import Label from "@/components/ui/label";

export default function CategoryLabel({ categories, nomargin = false }) {
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category) => (
          <Link href={`/category/${category.slug.current}`} key={category._id}>
            <Label nomargin={nomargin} color={category.color}>
              {category.name}
            </Label>
          </Link>
        ))}
    </div>
  );
}
