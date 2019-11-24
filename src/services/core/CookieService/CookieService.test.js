import CookieService from "./CookieService";

describe("CookieService", () => {
    it("should be able to set cookie to document cookie", () => {
        global.document = {
            cookie: ""
        };

        CookieService.set("name", "value", 1);
        expect(document.cookie).toBe("name=value");
    });

    it("should be able to get cookie from document cookie", () => {
        global.document.cookie = "name=value";

        expect(CookieService.get("name")).toBe("value");
    });

    it("should get blank if cookie is not present", () => {
        global.document.cookie = "name=value";

        expect(CookieService.get("anotherName")).toBe("");
    });
});
