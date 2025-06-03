// mock internal module
jest.mock("../../app/doubles/OtherUtils", () => ({
  // This keep functionalities of all other methods
  ...jest.requireActual("../../app/doubles/OtherUtils"),
  // this replace implementation of calculateComplexity
  calculateComplexity: () => {
    return 10;
  },
}));

// external module
jest.mock("uuid", () => ({
  v4: () => "123",
}));

import * as OtherUtils from "../../app/doubles/OtherUtils";

describe("module tests", () => {
  test("calculate complexity", () => {
    const result = OtherUtils.calculateComplexity({} as any);
    expect(result).toBe(10);
  });

  test("keep other functions", () => {
    const result = OtherUtils.toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  test("string with id", () => {
    const result = OtherUtils.toLowerCaseWithId("ABC");
    expect(result).toBe("abc123");
  });
});
