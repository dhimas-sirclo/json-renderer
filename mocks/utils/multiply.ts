import { MockedResponse } from "@apollo/client/testing";

export default function (
  mock: MockedResponse,
  qty: number = 100
): MockedResponse[] {
  let mocks: MockedResponse[] = [];
  for (let i = 0; i < qty; i++) {
    mocks.push(mock);
  }
  return mocks;
}
