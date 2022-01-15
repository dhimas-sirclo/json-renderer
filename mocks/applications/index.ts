import type { MockedResponse } from "@apollo/client/testing";

import mutations from "./mutations";
import queries from "./queries";

const mocks: MockedResponse[] = [...mutations, ...queries];

export default mocks;
