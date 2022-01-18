const config = {
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY,
  databaseId: "user",
  containerId: "data",
  partitionKey: "/email"
};

module.exports = config;
