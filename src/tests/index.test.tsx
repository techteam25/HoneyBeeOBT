/** @jest-environment jsdom */
import { act, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
const axios = require("axios");

jest.mock("axios");

describe("Home", () => {
  it("renders home panel and checks if it can get data", () => {
    act(() => {
      axios.get.mockResolvedValue({
        data: [
          {
            record1: {
              name: "Story Name Here",
              description: "Example description",
              image: "http://localhost:3000/logo192.png",
              key: "story1",
              progress: true,
              completed: false,
            },
            record2: {
              name: "Story Name 2",
              description: "Here is example Description 2",
              image: "http://localhost:3000/logo192.png",
              key: "story2",
              progress: false,
              completed: true,
            },
            record3: {
              name: "Jesus Rising",
              description: "Here is more info",
              image: "http://localhost:3000/logo192.png",
              key: "story3",
              progress: false,
              completed: false,
            },
          },
        ],
      });

      render(<Home />);
    });
  });
  it("Clicks on the different Tabs", () => {
    render(<Home />);
    //clicks on the progres tab
    userEvent.click(screen.getByTestId("tab-progress"));
    //clicks on the completed tab
    userEvent.click(screen.getByTestId("tab-completed"));
  });
});
