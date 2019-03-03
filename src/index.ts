import Authentication from "./authentication";
import Recipe from "./resources/recipe";
import { version as platformVersion } from "zapier-platform-core";

// tslint:disable-next-line
const { version } = require("../package.json");

const App = {
  version,
  platformVersion,

  authentication: Authentication,

  beforeRequest: [],

  afterResponse: [],

  resources: {
    [Recipe.key]: Recipe
  },

  triggers: {},

  searches: {},

  creates: {}
};

export default App;
