/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import Registration from "@/pages/registration";
import "@testing-library/jest-dom";

describe("Registration", () => {
  it("renders Registration panel", () => {
    render(<Registration />);
  });
});
