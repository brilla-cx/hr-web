import Container from "@/components/container";
import MarqueeImages from "@/components/rebekah-radice/marquee-images";
import RebekahTimeline from "@/components/rebekah-radice/rebekah-timeline";
import { GlowingButton, H1, H2, Lead } from "@/components/ui";

export default function RebekahRadice() {
  return (
    <div className="bg-midnight">
      <Container
        large
        className="border-l border-r border-neutral-200 border-opacity-10">
        <div className="max-w-4xl py-10 mx-auto text-center">
          <H1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            Social media speaker, consultant, and trainer
          </H1>
          <Lead className="mt-6 text-lg leading-8 text-gray-400">
            The interwebs crowned me a top digital marketing expert in the known
            universe. (cue eye rolls from my hubby and colleagues) I'm all about
            helping people get, keep, and grow their client base via digital
            magic.
          </Lead>
          <div className="max-w-sm mx-auto mt-12">
            <GlowingButton>Still in Intersted</GlowingButton>
          </div>
        </div>
        <MarqueeImages />
        <div className="max-w-4xl py-40 mx-auto text-center">
          <H2 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            About Rebekah Radice's Career
          </H2>
          <Lead className="mt-6 text-lg leading-8 text-gray-400">
            The interwebs crowned me a top digital marketing expert in the known
            universe. (cue eye rolls from my hubby and colleagues) I'm all about
            helping people get, keep, and grow their client base via digital
            magic.
          </Lead>
          <RebekahTimeline />
        </div>
      </Container>
    </div>
  );
}
