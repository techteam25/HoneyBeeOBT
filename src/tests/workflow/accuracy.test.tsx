/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import Accuracy from "@/pages/workflow/accuracy";
import "@testing-library/jest-dom";
jest.mock("next/router");

describe("Accuracy", () => {
  it("renders Accuracy panel", () => {
    render(<Accuracy />);
  });
});
