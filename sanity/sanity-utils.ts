// /sanity/sanity-itls.ts. This file is used to fetch data from Sanity.
import { createClient, groq } from "next-sanity";

export async function getGists() {
    const client = createClient({
        projectId: 'smx99abf',
        dataset: 'production',
        apiVersion: '2023-04-17',
    });

    return client.fetch(
        groq`*[_type == "gist"]{
            _id,
            _createdAt,
            name,
            "slug:": slug.current,
            "image": image.asset->url,
            url,
        }`
    )
}