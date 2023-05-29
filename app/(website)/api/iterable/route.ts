import { NextResponse } from "next/server";

import { ValueType } from "@/types/IterableValue";

export async function PUT(req: Request, res: NextResponse) {
  try {
    const value = (await req.json()) as ValueType;

    if (!value) {
      return NextResponse.json("Invalid request body", { status: 400 });
    }

    const content = value.content
      .map((item) => item.children.map((child) => child.text).join(""))
      .join("");
    const tldr = value.tldr
      .map((item) => item.children.map((child) => child.text).join(""))
      .join("");

    const payload = {
      itemId: value._id,
      catalogName: "posts",
      value: {
        id: value._id,
        postTitle: value.name,
        category: value.category,
        publishedAt: value.publishedAt,
        featured: value.featured === null ? false : value.featured,
        image: {
          url: value.image.asset.url,
          imageAltText: value.image.imageAltText,
          caption: value.image.caption,
        },
        slug: value.slug.current,
        tldr: tldr,
        author: {
          name: value.author.name,
          image: value.author.image.asset.url,
          imageAltText: value.author.image.imageAltText,
          slug: value.author.slug.current,
          linkedIn: value.author.linkedin,
        },
        content: content,
        url: `https://heyrebekah.com/${value.category[0].name}/${value.slug.current}`,
      },
    };


    const response = await fetch(
      `https://api.iterable.com/api/catalogs/posts/items/${value._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.ITERABLE_TOKEN!,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(errorData, { status: response.status });
    }

    const data = await response.json();

    return NextResponse.json(
      {
        data: data,
        message: "Item updated successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
