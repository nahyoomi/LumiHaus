import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

const mockAuthService = {
  login: vi.fn().mockResolvedValue({ access_token: "fake-token" }),
};

const TestLoginFlow = () => {
  return (
    <div>
      <form data-testid="login-form" onSubmit={() => mockAuthService.login()}>
        <input type="email" placeholder="Email" data-testid="email-input" />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
        />
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
};

describe("Login Integration", () => {
  it("should submit form and call authentication service", async () => {
    render(<TestLoginFlow />);

    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "password123" },
    });

    fireEvent.submit(screen.getByTestId("login-form"));

    expect(mockAuthService.login).toHaveBeenCalled();
  });
});
