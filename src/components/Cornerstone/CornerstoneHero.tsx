import React from "react";

function CornerstoneHero() {
  return (
    <div>
      <div className="relative px-6 isolate pt-14 lg:px-8">
        <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 py-1 text-sm leading-6 text-gray-400 rounded-full ring-1 ring-slate-900 hover:ring-slate-900">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-gray-200">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-200">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CornerstoneHero;
