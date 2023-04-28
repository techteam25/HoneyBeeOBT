/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import Words from "@/pages/words";
import "@testing-library/jest-dom";

describe("Words", () => {
  it("renders Words panel", () => {
    render(<Words />);
  });
});
