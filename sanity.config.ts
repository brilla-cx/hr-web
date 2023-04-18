import { defineConfig } from "sanity";
import { deskTool} from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: 'smx99abf',
  dataset: 'production',
  title: 'Hey Rebekah',
  apiVersion: '2023-04-17',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config;
