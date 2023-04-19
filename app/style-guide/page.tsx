import Heading, { H1, H4 } from "@/components/ui/typography/heading";

export default function StyleGuide() {
  //Placeholder to create route
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-display font-bold tracking-tight text-gray-900 sm:text-6xl">
          Style Guide
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </div>
      <div className="mt-10">
        <Heading as="h1">Title here</Heading>
        <Heading as="h4">Title here</Heading>

        <H1>Title here</H1>
        <H4>Title here</H4>
      </div>
    </div>
  );
}
