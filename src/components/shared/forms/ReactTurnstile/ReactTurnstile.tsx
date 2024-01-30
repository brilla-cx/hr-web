import { Turnstile } from "@marsidev/react-turnstile";

import { CLOUDFLARE_SITE_KEY } from "@/lib/constants";
function ReactTurnstile() {
  return (
    <Turnstile
      siteKey={CLOUDFLARE_SITE_KEY}
      options={{
        action: "submit-form",
        size: "invisible",
      }}
      scriptOptions={{
        appendTo: "body",
      }}
    />
  );
}

export default ReactTurnstile;
