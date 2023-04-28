/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import Demo from "../pages/demo";
import "@testing-library/jest-dom";

describe("Demo", () => {
  it("renders Demo panel", () => {
    render(<Demo />);
  });
});
