/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import Download from "@/pages/download";
import "@testing-library/jest-dom";

describe("Download", () => {
  it("renders Download panel", () => {
    render(<Download />);
  });
});
