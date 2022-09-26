const sanityClient = require("@sanity/client");

export const client = sanityClient({
  projectId: " ops89y79",
  dataset: " production",
  apiVersion: " 2022-09-24",
  useCdn: " true",
});
