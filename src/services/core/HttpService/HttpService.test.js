import HttpService from "./HttpService";
import AppConfig from "../../../AppConfig";

const mockResponse = { hello: "world" };

jest.mock("axios", () => ({
    interceptors: {
        request: {
            use: () => { }
        },
        response: {
            use: () => { }
        }
    },
    get(url, config) {
        return new Promise(() => mockResponse, () => { });
    },
    post(url, data, config) {
        return new Promise(() => mockResponse, () => { });
    }
}));

describe("HttpService", () => {
    it("should have GET and POST method defined", () => {
        expect(HttpService.get).toBeDefined();
        expect(HttpService.post).toBeDefined();
    });

    it("should respond if GET is called with a URL", () => {
        HttpService.get("").then((response) => {
            console.log(response);
            expect(response).toBe(mockResponse);
        });
    });

    it("should respond if POST is called with a URL and data", () => {
        HttpService.post("", {}).then((response) => {
            expect(response).toBe(mockResponse);
        });
    });

    it("should respond with error if POST is called with no data", () => {
        expect(() => {
            HttpService.post("");
        }).toThrowError("Error: Post data not provided for " + "");
    });
});
