/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import Learn from "@/pages/workflow/learn";
import "@testing-library/jest-dom";

describe("Learn", () => {
  it("renders Learn panel", () => {
    render(<Learn />);
  });
});
