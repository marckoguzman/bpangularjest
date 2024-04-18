it("can run a test", () => {
  expect(1).toEqual(1);
});
describe('Testing tests', () => {
  it('should succeed', () => expect(true).toEqual(true));
 // it('should fail', () => expect(true).toEqual(false));
});
describe("Filter function", () => {
  it("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(this.filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output);
  });
});

inputArr: Array;
 searchTerm: string;
 filterByTerm(inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}