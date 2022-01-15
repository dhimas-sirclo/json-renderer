import type { MockedResponse } from "@apollo/client/testing";

import getAppShortcuts from "./getAppShortcuts";
import getInstalledApps from "./getInstalledApps";

const queries: MockedResponse[] = [...getAppShortcuts, ...getInstalledApps];

export default queries;
