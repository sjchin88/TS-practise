import { getStringInfo, toUpperCase } from "../app/Utils";

// describe can group different tests together
describe("Utils test suite", () => {
  // it or test is the same
  it("should reuturn uppercase", () => {
    // Arrange
    const sut = toUpperCase;
    const expected = "ABC";

    // Action
    const result = sut("abc");

    // Assertion
    expect(result).toBe("ABC");
  });

  // To run this test only use only
  // it.only
  it.only("should return info for valid string", () => {
    const actual = getStringInfo("My-String");
    // toBe is for string
    expect(actual.lowerCase).toBe("my-string");
    // toEqual is for object
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);

    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "S",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);
    expect(actual.characters).toContain<string>("M");
    // one way to check if we are not sure of elements order in return array
    expect(actual.characters).toEqual(
      expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
    );

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
