// Importing necessary components
import SubscribeForm from "components/ui/sections/subscribeform"; // Importing SubscribeForm component
import { H1, Lead } from "components/ui/typography"; // Importing H1 and Lead components from typography

// Define the PageHeader component
// This component receives a title, a leadText, and a formId as props
export default function PageHeader({ title, leadText, formId }) {
  return (
    // Wrapping div with background color and padding styles
    <div className="bg-midnight px-6 py-16 sm:py-24 lg:px-8">
      {/* Inner div for centering content and setting max width */}
      <div className="mx-auto max-w-2xl text-center">
        {/* H1 component used for displaying the title, with styling applied for color */}
        <H1 className="text-gray-200">{title}</H1>
        {/* Lead component used for displaying the lead text, with a margin top style */}
        <Lead className="mt-6 text-gray-400">{leadText}</Lead>
        {/* SubscribeForm component that takes a formId prop, which is passed down from PageHeader's props */}
        <SubscribeForm formId={formId} />
      </div>
    </div>
  );
}
