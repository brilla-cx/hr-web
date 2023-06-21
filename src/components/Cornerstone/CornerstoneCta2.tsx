import React from "react";

import { GlowingButton } from "../ui";

function CornerstoneCta2() {
  return (
    <div>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <GlowingButton href="#">Get started</GlowingButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CornerstoneCta2;
