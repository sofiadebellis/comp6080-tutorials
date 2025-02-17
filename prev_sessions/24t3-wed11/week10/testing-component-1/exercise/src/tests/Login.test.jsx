import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";
import userEvent from "@testing-library/user-event";

describe("Login", () => {
  it("should render email field, password and login button", () => {
    render(<LoginForm onSubmit={vi.fn()} />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("renders the email and password fields as required", () => {
    render(<LoginForm onSubmit={vi.fn()} />);

    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/password/i)).toBeRequired();
  });

  it("render the email and password inputs as invalid if an error is provided", () => {
    const errors = {
      email: "Email is required",
      password: "Password is required",
    };

    render(<LoginForm onSubmit={vi.fn()} errors={errors} />);
    expect(screen.getByLabelText(/email/i)).toBeInvalid();
    expect(screen.getByLabelText(/password/i)).toBeInvalid();
  });

  it("renders error messages correctly when errors are provided", () => {
    const errors = {
      email: "Email is required",
      password: "Password is required",
    };
    render(<LoginForm onSubmit={vi.fn()} errors={errors} />);

    expect(screen.getByText(errors.email)).toBeInTheDocument();
    expect(screen.getByText(errors.password)).toBeInTheDocument();
  });

  it("renders accessible error messages correctly when errors are provided", () => {
    const errors = {
      email: "Email is required",
      password: "Password is required",
    };
    render(<LoginForm onSubmit={vi.fn()} errors={errors} />);

    expect(screen.getByLabelText(/email/i)).toHaveAccessibleDescription(
      errors.email
    );
    expect(screen.getByLabelText(/password/i)).toHaveAccessibleDescription(
      errors.password
    );
  });

  it("calls the onSubmit function with the email and password when the form is submitted", async () => {
    const inputs = {
      email: "cs6060@unsw.edu.au",
      password: "password",
    };
    const expectValues = {... inputs};
    const mockOnSubmit = vi.fn();
    
    render(<LoginForm onSubmit={mockOnSubmit} />);
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(mockOnSubmit).not.toBeCalled();

    await userEvent.type(screen.getByLabelText(/email/i), inputs.email);
    await userEvent.type(screen.getByLabelText(/password/i), inputs.password);

    await userEvent.click(screen.getByRole("button", { name: /login/i }));
    
    expect(mockOnSubmit).toBeCalled();
    expect(mockOnSubmit).toBeCalledWith(expectValues);
  });
});
