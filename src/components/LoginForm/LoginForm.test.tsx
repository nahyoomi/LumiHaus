import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import {LoginForm} from "../LoginForm";

vi.mock("../../assets", () => ({
  Icons: {
    Eye: { src: "eye-icon.svg", alt: "Eye Icon" },
  },
  Images: {
    DefaultUser: { src: "default-user.svg", alt: "Default User" },
  },
}));

describe("LoginForm", () => {
  const mockProps = {
    email: "test@example.com",
    onEmailChange: vi.fn(),
    password: "password123",
    onPasswordChange: vi.fn(),
    error: "",
    isLoading: false,
    onSubmit: vi.fn(),
  };

  it("renders form fields correctly", () => {
    render(<LoginForm {...mockProps} />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("shows error message when provided", () => {
    render(<LoginForm {...mockProps} error="Invalid credentials" />);

    expect(screen.getByText("Invalid credentials")).toBeInTheDocument();
  });
});
