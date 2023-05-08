/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Naturalness from "@/pages/workflow/naturalness";

describe("Naturalness", () => {
  it("renders Naturalness panel", () => {
    render(<Naturalness />);
  });
});
