/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Review from "@/pages/workflow/review";

describe("Review", () => {
  it("renders Review panel", () => {
    render(<Review />);
  });
});
