import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Spam report",
    description:
      "Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum. Labore asperiores non corporis molestiae.",
    icon: TrashIcon,
  },
  {
    name: "Compose in markdown",
    description:
      "Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus est.",
    icon: PencilSquareIcon,
  },
  {
    name: "Email commenting",
    description:
      "Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis. Et accusantium sapiente.",
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: "Customer connections",
    description:
      "Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.",
    icon: HeartIcon,
  },
];

function CornerstoneWhyShouldCare() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Stay on top of customer support
          </h2>
          <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-200">
                  <div className="flex items-center justify-center w-10 h-10 mb-6 rounded-lg bg-slate-900">
                    <feature.icon
                      className="w-6 h-6 text-gray-200"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default CornerstoneWhyShouldCare;
