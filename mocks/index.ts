import type { MockedResponse } from "@apollo/client/testing";

import applications from "./applications";
import mutations from "./mutations";
import queries from "./queries";

import multiply from "./utils/multiply";

const mocks: MockedResponse[] = [
  ...applications,
  ...mutations,
  ...queries,
].flatMap((mock) => multiply(mock));

export default mocks;
