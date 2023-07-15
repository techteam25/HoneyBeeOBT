/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import Learn from "@/pages/workflow/learn";
import "@testing-library/jest-dom";
jest.mock("next/router");

describe("Learn", () => {
  it("renders Learn panel", () => {
    render(<Learn />);
  });
});
