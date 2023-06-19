const sanity = require("next-sanity");

const client = sanity.createClient({
  projectId: "smx99abf",
  dataset: "production",
  apiVersion: "2023-04-17",
  useCdn: false,
});

function resolveRedirects() {
  return client.fetch(`
  *[_type == "redirect" && !(_id in path("drafts.**"))]{
        source, destination, permanent
    }`);
}

module.exports = { resolveRedirects };
