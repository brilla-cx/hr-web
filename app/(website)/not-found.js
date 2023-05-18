import { H1, H4 } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <div>
        <H1> 404 </H1>
        <H4 as="h2"> Page not found</H4>
      </div>
    </div>
  );
}
