/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import About from "../pages/about";
import "@testing-library/jest-dom";

jest.mock("axios");

describe("About Test", () => {
  it("renders About panel", () => {
    render(<About />);
  });
});
