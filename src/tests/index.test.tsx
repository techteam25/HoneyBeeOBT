/** @jest-environment jsdom */
import { act, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
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
              image: "/logo192.png",
              key: "story1",
            },
            record2: {
              name: "Story Name 2",
              description: "Here is example Description 2",
              image: "/logo192.png",
              key: "story2",
            },
            record3: {
              name: "Jesus Rising",
              description: "Here is more info",
              image: "/tomb2.jpg",
              key: "story3",
            },
          },
        ],
      });

      render(<Home />);
    });
  });
});
