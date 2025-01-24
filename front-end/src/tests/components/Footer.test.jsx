import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import Footer from "../../components/Footer";

describe("Footer Component", () => {
  it("It renders footer logo correctly", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText("FudRush.")).toBeInTheDocument();
  });
  it("renders footer content correctly", () => {
    const currentYear = new Date().getFullYear();
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(
      screen.getByText(
        `Copyright © ${currentYear} FudRush. All rights reserved.`
      )
    ).toBeInTheDocument();
  });

  it("handles newsletter subscription input", async () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText("Enter your email");
    await userEvent.type(input, "test@example.com");
    expect(input).toHaveValue("test@example.com");
  });
});
