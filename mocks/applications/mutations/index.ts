import type { MockedResponse } from "@apollo/client/testing";

import executeAction from "./executeAction";
import executeShortcut from "./executeShortcut";
import executeSlashCommand from "./executeSlashCommand";

const mutations: MockedResponse[] = [
  ...executeAction,
  ...executeShortcut,
  ...executeSlashCommand,
];

export default mutations;
