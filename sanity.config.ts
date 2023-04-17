import { defineConfig } from "sanity";
import { deskTool} from "sanity/desk";

const config = defineConfig({
  projectId: 'z3brn81h',
  dataset: 'production',
  title: 'Hey Rebekah',
  apiVersion: '2023-04-17',
  basePath: '/studio',
  plugins: [deskTool()],
})

export default config;