import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home Page", () => {
  it("renders the store name", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /smartshop/i,
      })
    ).toBeInTheDocument();
  });
});