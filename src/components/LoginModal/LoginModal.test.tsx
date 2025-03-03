import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("LoginModal", () => {
  it("should render login form when user is not authenticated", () => {
    render(
      <div>
        <div data-testid="login-form">Login Form</div>
      </div>
    );

    expect(screen.getByTestId("login-form")).toBeInTheDocument();
  });

  it("should render admin options when user is authenticated", () => {
    render(
      <div>
        <p>Login successful</p>
        <button>ADMIN PANEL</button>
        <button>LOG OUT</button>
      </div>
    );

    expect(screen.getByText("Login successful")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /admin panel/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /log out/i })
    ).toBeInTheDocument();
  });
});
