// Import the js file to test
import { checkURL } from "../src/client/js/urlChecker"
  
describe("Testing the url validation functionality", () => {
    test("Testing the checkURL() function positive", () => {
        expect(checkURL("www.google.com")).toBe(false);
    })
    test("Testing the checkURL() function negative", () => {
        expect(checkURL("https://www.google.com")).toBe(true);
    })
});