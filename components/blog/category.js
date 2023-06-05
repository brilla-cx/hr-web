import Link from "next/link";

import Label from "@/components/ui/label";

export default function CategoryLabel({ categories, nomargin = false }) {
  const categoryArray = Array.isArray(categories) ? categories : [categories];
  console.log(categoryArray);
  return (
    <div className="flex gap-3">
      {categoryArray?.length &&
        categoryArray.slice(0).map((category) => (
          <Link
            href={`/category/${category?.slug?.current}`}
            key={category?._id}>
            <Label nomargin={nomargin} color={category?.color}>
              {category?.name}
            </Label>
          </Link>
        ))}
    </div>
  );
}
