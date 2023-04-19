import { H1, H2, H3, H4, H5, H6 } from "@/components/ui";
import { Container, Badge, Spacer } from "@/components/ui";

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
      <Container>
        <div className="mt-10">
          <H4>Colors</H4>
          <div className="flex flex-wrap gap-10 mt-6 border-t pt-6">
            <div className="w-16 h-16 bg-black rounded"></div>
            <div className="w-16 h-16 bg-white shadow rounded"></div>
            <div className="w-16 h-16 bg-light-grey rounded"></div>
            <div className="w-16 h-16 bg-blue rounded"></div>
            <div className="w-16 h-16 bg-dark-blue rounded"></div>
            <div className="w-16 h-16 bg-pink rounded"></div>
            <div className="w-16 h-16 bg-yellow rounded"></div>
            <div className="w-16 h-16 bg-green rounded"></div>
            <div className="w-16 h-16 bg-aqua rounded"></div>
          </div>
        </div>

        <div className="mt-16">
          <H4>Typography</H4>
          <div className="mt-6 border-t pt-6">
            <Badge>h1</Badge>
            <H1>This is a Heading</H1>
            <Spacer />
            <Badge>h2</Badge>
            <H2>This is a Heading</H2>
            <Spacer />
            <Badge>h3</Badge>
            <H3>This is a Heading</H3>
            <Spacer />
            <Badge>h4</Badge>
            <H4>This is a Heading</H4>
            <Spacer />
            <Badge>h5</Badge>
            <H5>This is a Heading</H5>
            <Spacer />
            <Badge>h6</Badge>
            <H6>This is a Heading</H6>
            <Spacer />
            <p className="text-xl">
              This is a lead paragraph. It stands out from regular paragraphs.
            </p>
            <Spacer />
            <p>
              Sample text is being used as a placeholder for real text that is
              normally present. Sample text helps you understand how real text
              may look on your website. Sample text is being used as a
              placeholder for real text.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <H4>Badges</H4>
          <div className="border-t pt-6 mt-4 flex flex-col gap-5 flex-wrap items-start">
            <Badge>Default Badge</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="primary" size="lg">
              Primary large
            </Badge>
            <Badge variant="primary" size="md">
              Primary Medium
            </Badge>
            <Badge variant="primary" size="sm">
              Primary Small
            </Badge>
            <Badge variant="secondary" size="lg">
              Secondary Large
            </Badge>
            <Badge variant="secondary" size="md">
              Secondary medium
            </Badge>
            <Badge variant="secondary" size="sm">
              Secondary small
            </Badge>
          </div>
        </div>
      </Container>
    </div>
  );
}
