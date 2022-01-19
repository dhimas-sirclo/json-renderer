import type { MockedResponse } from "@apollo/client/testing";

import executeAction from "./executeAction";

const mutations: MockedResponse[] = [...executeAction];

export default mutations;
