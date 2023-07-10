import PrivacyCopy from "@/components/shared/PrivacyCopy/PrivacyCopy";
import { GlowingButton, H4 } from "@/components/ui";

interface Props {
  title: string;
  subtitle: string;
}

function EmailCta(props: Props) {
  return (
    <div className="lg:py-26 mx-auto max-w-6xl rounded border border-gray-200/10 bg-slate-900 px-2 py-16 sm:py-24 lg:my-24 lg:flex lg:justify-between lg:px-16">
      <div className="max-w-3xl">
        <H4 as="h2" className="text-white ">
          {props.title}
        </H4>
        <p className="mt-3 text-lg leading-relaxed text-gray-300">
          {props.subtitle}
        </p>
      </div>
      <div className="mt-4 md:mt-5 md:max-w-xs">
        <GlowingButton
          variant="link"
          href="/signup"
          id="about-cta2"
          aria-label="Go to sign-up form">
          Level Up
        </GlowingButton>
        <PrivacyCopy />
      </div>
    </div>
  );
}

export default EmailCta;
