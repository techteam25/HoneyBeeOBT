/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import HamburgerMenu from "@/components/menus/hamburger";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

jest.mock("axios");
jest.mock('next/router', () => require('next-router-mock'));

describe("Home", () => {
  it("renders burger menu", () => {
    const component = render(<HamburgerMenu />);
    //Clicks on icon for burger
    userEvent.click(screen.getByTestId("burger-icon"));
    //Clicks on Home
    userEvent.click(screen.getByTestId("burger-home"));
  });
});
