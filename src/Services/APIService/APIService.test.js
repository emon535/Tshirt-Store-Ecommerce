import APIService from "./APIService";
import AppConfig from "../../AppConfig";

const mockResponse = { hello: "world" };

jest.mock("axios", () => {
  return {
    interceptors: {
      request: {
        use: () => {}
      },
      response: {
        use: () => {}
      }
    },
    get: function(url, config) {
      return new Promise(
        () => {
          return mockResponse;
        },
        () => {}
      );
    },
    post: function(url, data, config) {
      return new Promise(
        () => {
          return mockResponse;
        },
        () => {}
      );
    }
  };
});

describe("APIService", () => {
  it("should have GET and POST method defined", () => {
    expect(APIService.get).toBeDefined();
    expect(APIService.post).toBeDefined();
  });

  it("should respond if GET is called with a URL", () => {
    APIService.get(AppConfig.base_url).then(response => {
      console.log(response);
      expect(response).toBe(mockResponse);
    });
  });

  it("should respond if POST is called with a URL and data", () => {
    APIService.post(AppConfig.base_url, {}).then(response => {
      expect(response).toBe(mockResponse);
    });
  });

  it("should respond with error if POST is called with no data", () => {
    expect(() => {
      APIService.post(AppConfig.base_url);
    }).toThrowError("Error: Post data not provided for " + AppConfig.base_url);
  });
});
