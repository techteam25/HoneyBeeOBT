/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import Language from "@/components/futureFeatures/language";
import "@testing-library/jest-dom";

describe("Language", () => {
  it("renders Language panel", () => {
    render(<Language />);
  });
});
