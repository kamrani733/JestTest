import axios from "axios";
import swapiGetter from "./asyncFun";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("swapiGetter", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the name of the person for a valid ID", async () => {
    const mockResponse = {
      data: { name: "Luke Skywalker" },
    };
    mockedAxios.get.mockResolvedValue(mockResponse);

    const result = await swapiGetter("1");

    expect(result).toBe("Luke Skywalker");
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://swapi.dev/api/people/1/"
    );
  });

  it("should throw an error for an invalid ID", async () => {
    const mockError = new Error("Request failed with status code 404");
    mockedAxios.get.mockRejectedValue(mockError);

    await expect(swapiGetter("999")).rejects.toThrow(
      "Request failed with status code 404"
    );
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://swapi.dev/api/people/999/"
    );
  });
});
