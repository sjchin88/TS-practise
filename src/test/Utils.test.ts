import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

// describe can group different tests together
describe("Utils test suite", () => {
  describe("StringUtils tests", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log("Setup");
    });

    afterEach(() => {
      // clearing mocks
      console.log("Teardown");
    });

    it("Should return correct upperCase", () => {
      const actual = sut.toUpperCase("abc");

      expect(actual).toBe("ABC");
      console.log("Actual test");
    });

    // First way to check for error,
    it("Should throw error on invalid argument - function", () => {
      function expectError() {
        const actual = sut.toUpperCase("");
      }
      expect(expectError).toThrow();
      expect(expectError).toThrowError("Invalid argument!");
    });

    // Second way - directly use an arrow function
    it("Should throw error on invalid argument - arrow function", () => {
      expect(() => {
        sut.toUpperCase("");
      }).toThrow();
    });

    // Third way - try-catch block with done callback
    it("Should throw error on invalid argument - try catch block", (done) => {
      try {
        sut.toUpperCase("");
        done("GetStringInfo should throw error for invalid arg!");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid argument!");
        done();
      }
    });
  });

  // it or test is the same
  it("should return uppercase", () => {
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
  // it.only("should return info for valid string", () => {
  //   const actual = getStringInfo("My-String");
  //   // toBe is for string
  //   expect(actual.lowerCase).toBe("my-string");
  //   // toEqual is for object
  //   expect(actual.extraInfo).toEqual({});

  //   expect(actual.characters.length).toBe(9);
  //   expect(actual.characters).toHaveLength(9);

  //   expect(actual.characters).toEqual([
  //     "M",
  //     "y",
  //     "-",
  //     "S",
  //     "t",
  //     "r",
  //     "i",
  //     "n",
  //     "g",
  //   ]);
  //   expect(actual.characters).toContain<string>("M");
  //   // one way to check if we are not sure of elements order in return array
  //   expect(actual.characters).toEqual(
  //     expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
  //   );

  //   expect(actual.extraInfo).not.toBe(undefined);
  //   expect(actual.extraInfo).not.toBeUndefined();
  //   expect(actual.extraInfo).toBeDefined();
  //   expect(actual.extraInfo).toBeTruthy();
  // });
  describe("ToUpperCase examples", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "def", expected: "DEF" },
      // can use this line '$input toUpperCase should be $expected' without the inner function
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo for arg My-String should", () => {
    test("return right length", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toHaveLength(9);
    });
    test("return right lower case", () => {
      const actual = getStringInfo("My-String");
      expect(actual.lowerCase).toBe("my-string");
    });
    test("return right upper case", () => {
      const actual = getStringInfo("My-String");
      expect(actual.upperCase).toBe("MY-STRING");
    });
    test("return right characters", () => {
      const actual = getStringInfo("My-String");
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
      expect(actual.characters).toEqual(
        expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
      );
    });
    test("return defined extra info", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).toBeDefined();
    });

    test("return right extra info", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).toEqual({});
    });
  });
});
