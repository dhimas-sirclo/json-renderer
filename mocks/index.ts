import type { MockedResponse } from "@apollo/client/testing";

import applications from "./applications";
import mutations from "./mutations";
import queries from "./queries";

const mocks: MockedResponse[] = [...applications, ...mutations, ...queries];

export default mocks;
