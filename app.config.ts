import type { ExpoConfig } from "expo/config";

// A type annotation is all that is needed: loading this file at all is what fails.
const config: ExpoConfig = {
  name: "repro",
  slug: "repro",
};

export default config;
