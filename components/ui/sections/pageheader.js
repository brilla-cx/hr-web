// Importing necessary components
import SubscribeForm from "components/ui/sections/subscribeform"; // Importing SubscribeForm component
import { H1, Lead } from "components/ui/typography"; // Importing H1 and Lead components from typography

// Define the PageHeader component
// This component receives a title, a leadText, includeForm, and a formId as props
export default function PageHeader({
  title,
  leadText,
  includeForm = false,
  formId = "",
}) {
  return (
    <div className="px-6 py-16 bg-midnight sm:py-24 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <H1 className="text-gray-200">{title}</H1>
        <Lead className="mt-6 text-gray-400">{leadText}</Lead>
        {/* Conditionally render SubscribeForm component based on includeForm prop */}
        {includeForm && <SubscribeForm formId={formId} className="" />}
      </div>
    </div>
  );
}
