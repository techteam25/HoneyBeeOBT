/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Finalize from "@/pages/workflow/finalize";

describe("Finalize", () => {
  it("renders Finalize panel", () => {
    render(<Finalize />);
  });
});
