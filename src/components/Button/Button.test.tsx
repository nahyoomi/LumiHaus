import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "../../test/test-utils";
import Button from "./Button";

vi.mock("../../some-module", () => ({
  someFunction: vi.fn(),
}));

describe("Button Component", () => {
  it("renders correctly with text", () => {
    render(<Button text="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("has tonal variant by default", () => {
    render(<Button text="Default Button" />);
    const button = screen.getByRole("button", { name: "Default Button" });
    expect(button).toHaveClass("bg-custom-blue text-white");
  });

  it("renders text variant correctly", () => {
    render(<Button text="Text Button" variant="text" />);
    const button = screen.getByRole("button", { name: "Text Button" });
    expect(button).toHaveClass(
      "bg-transparent text-black hover:bg-transparent"
    );
  });

  it("renders outlined variant correctly", () => {
    render(<Button text="Outlined Button" variant="outlined" />);
    const button = screen.getByRole("button", { name: "Outlined Button" });
    expect(button).toHaveClass(
      "bg-transparent text-custom-blue border border-custom-blue"
    );
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button text="Clickable" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Clickable"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies additional classes from className prop", () => {
    render(<Button text="Custom Class" className="test-class" />);
    expect(screen.getByRole("button")).toHaveClass("test-class");
  });

  it("sets the correct button type", () => {
    render(<Button text="Submit" type="submit" />);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});
