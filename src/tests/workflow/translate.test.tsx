/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import Translate from "@/pages/workflow/translate";
import "@testing-library/jest-dom";
jest.mock("next/router");

describe("Translate", () => {
  it("renders Translate panel", () => {
    render(<Translate />);
  });
});
