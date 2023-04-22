import { H1, H2, H3, H4, H5, H6 } from "@/components/ui";
import { Input, Select, Textarea, Button } from "@/components/ui";
import { Prose, Badge, Spacer, Blockquote } from "@/components/ui";
import Container from "@/components/container";

export default function StyleGuide() {
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

        <div className="mt-10">
          <H4>Blockquote</H4>
          <div className="border-t pt-6 mt-4 flex flex-col gap-5 flex-wrap items-start">
            <Blockquote author="Blockquote">
              This stylesheet is going to help so freaking much.
            </Blockquote>
          </div>
        </div>

        <div className="mt-10">
          <H4>Prose</H4>
          <div className="border-t pt-6 mt-4 flex flex-col gap-5 flex-wrap items-start">
            <Prose>
              <p>
                Lorem ipsum dolor sit amet,{" "}
                <a
                  href="https://web3templates.com"
                  rel="noopener"
                  target="_blank">
                  test link
                </a>{" "}
                adipiscing elit. Nullam dignissim convallis est. Quisque
                aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet
                sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida
                vehicula, nisl. Praesent mattis, massa quis luctus fermentum,
                turpis mi volutpat justo, eu volutpat enim diam eget metus.
                Maecenas ornare tortor. Donec sed tellus eget sapien fringilla
                nonummy. Mauris a ante. Suspendisse quam sem, consequat at,
                commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis
                tellus.
              </p>
              <p>Here are the popular list types. </p>
              <h3>Unordered List</h3>
              <ol>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
              </ol>
              <h3>Ordered List</h3>
              <ul>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
              </ul>
              <h3>Tables</h3>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Job</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Johnathan</td>
                    <td>Sr. Developer</td>
                    <td>Active</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Designer</td>
                    <td>Resigned</td>
                  </tr>
                  <tr>
                    <td>Luca Manders</td>
                    <td>Marketing Lead</td>
                    <td>Hold</td>
                  </tr>
                  <tr>
                    <td>Evan Spacer</td>
                    <td>Intern</td>
                    <td>Pending</td>
                  </tr>
                </tbody>
              </table>
              <h3>Misc Stuff.</h3>
              <p>
                Lorem superscript dolor <strong>subscript</strong> amet,
                consectetuer <em>adipiscing</em> elit. Nullam dignissim
                convallis est. Quisque aliquam. cite. Nunc iaculis suscipit dui.
                Nam sit amet sem. Aliquam libero nisi, <code>&lt;code&gt;</code>{" "}
                at, tincidunt nec, gravida vehicula, nisl. Praesent mattis,
                massa quis luctus <u>fermentum</u>, turpis mi volutpat justo, eu
                volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed
                tellus eget sapien fringilla <del>nonummy</del>. NBA Mauris a
                ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat
                in, nunc. Morbi imperdiet augue quis tellus. AVE
              </p>
            </Prose>
          </div>
        </div>

        <div className="mt-10">
          <H4>Buttons</H4>
          <div className="border-t pt-6 mt-4 flex flex-col gap-5 flex-wrap items-start">
            <div className="grid lg:grid-cols-4 gap-10 place-items-center">
              <div>
                <Button>Button</Button>
                <Spacer />
                <Button variant="secondary">Button</Button>
              </div>
              <div>
                <Button size="sm">Button</Button>
                <Spacer />
                <Button variant="secondary" size="sm">
                  Button
                </Button>
                <Spacer />
              </div>
              <div>
                <Button size="xs">Button</Button>
                <Spacer />
                <Button variant="secondary" size="xs">
                  Button
                </Button>
              </div>
              <div>
                <Button size="lg">Button</Button>
                <Spacer />
                <Button variant="secondary" size="lg">
                  Button
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <H4>Button Links</H4>
          <div className="border-t pt-6 mt-4 flex flex-col gap-5 flex-wrap items-start">
            <Button href="#">Link</Button>
            <Button href="#" variant="secondary">
              Link
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <H4>Forms</H4>
          <div className="border-t pt-6 mt-4  gap-5 flex-wrap items-start">
            <form action="">
              <div className="grid gap-5 max-w-lg">
                <Input name="name" placeholder="First Name" />
                <Select>
                  <option value="" disabled>
                    Choose one..
                  </option>
                  <option value="usa">United States</option>
                </Select>
                <Textarea placeholder="Message" />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
