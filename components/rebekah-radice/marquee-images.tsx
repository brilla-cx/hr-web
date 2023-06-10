import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeItem({
  images,
  direction,
}: {
  images: string[];
  direction: "left" | "right";
}) {
  return (
    <Marquee direction={direction} pauseOnHover>
      {images.map((rrimg) => (
        <div key={rrimg} className="pl-6">
          <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <Image
              src={rrimg}
              alt=""
              className="object-cover pointer-events-none group-hover:opacity-75"
              width={300}
              height={300}
            />
          </div>
        </div>
      ))}
    </Marquee>
  );
}

function MarqueeImages() {
  return (
    <div className="flex flex-col">
      <MarqueeItem
        direction="left"
        images={marqueeImageData.slice(
          0,
          Math.ceil(marqueeImageData.length / 3)
        )}
      />
      <MarqueeItem
        direction="right"
        images={marqueeImageData.slice(
          Math.ceil(marqueeImageData.length / 3),
          Math.ceil((2 * marqueeImageData.length) / 3)
        )}
      />
      <MarqueeItem
        direction="left"
        images={marqueeImageData.slice(
          Math.ceil((2 * marqueeImageData.length) / 3)
        )}
      />
    </div>
  );
}

export default MarqueeImages;

const marqueeImageData = [
  "https://cdn.sanity.io/images/smx99abf/production/a0f8a1ae7ec172461666fab05f4ea8914465b981-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/0ae4b37422f2965dcf28fc35edd8af86b70f37df-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/99e2d7db60f70c5a54a2a41080fa618ebad5db7f-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/dd11d208732c176b4b968b9cb1d78735736a27c7-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/e4d48a9ede1129553aa88a1a34b946d83ec39a68-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/68ffd7c2e14c0f7ac6443d24a4a3bbf4f6aaca1d-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/d4b48f9274ccc62b0653b9e278eacc3c45f54d8b-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/0f0fd719b7075be26742547d11f92337e2106090-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/0e94f20585b77b104a28af76ee87ae792e6bd982-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/c35a28f61da8489062ce30cb95f642974126d6ea-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/9a5261b1996608c7b6c40439da7cb6232a3d1344-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/8f8c9eb05100c7503c0c0cbd859102ed63ecea11-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/7eda3d28ec765d972569ddb295f8de407fc2e132-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/d881c615e18f1bfc61e203a7b07310f094ddfc61-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/2e776fbe3ed8aef97411626bace1b80d845bc482-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/592feb10e4e018964bc31e134d5a9f48f1f47be8-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/757bd6e252d73a2eea8045a7782607094892b883-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/88b0b9a57b4f6469be61f113049e6a83fa2b344d-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/ffc15dac980da3362126c9e9347aaf05dc3abd4f-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/adfea751163ce99f43d5e807777365887d973098-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/a6bd6d679c148781cd8a8ac3d455a0f7fe9f3090-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/88a916b71c1785b7089bb4ca924d9d1cb5c861fe-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/252e71885f1db5e7a3fe157f0ecf73d68c776bb8-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/039730c9d542273aba3253756badca48c3bad3ed-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/77345fd31a5c4fec6663e8ee599236e78ea28aa8-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/3ef6d5c1cbda72b53c7ee61819a1f8eaf8052aeb-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/a461e0c23eaed408ecf0322e0821e54aa0dfabef-640x460.webp",
  "https://cdn.sanity.io/images/smx99abf/production/faa78422eb558675fd146ebad6c3975854c94a99-640x460.webp",
];
