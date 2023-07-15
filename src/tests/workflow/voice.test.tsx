/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import VoiceStudio from "@/pages/workflow/voice";
jest.mock("next/router");

describe("VoiceStudio", () => {
  it("renders VoiceStudio panel", () => {
    render(<VoiceStudio />);
  });
});
