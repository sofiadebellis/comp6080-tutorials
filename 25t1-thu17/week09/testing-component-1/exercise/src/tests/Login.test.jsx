import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";

describe("Login", () => {
  it("should render email field, password field and login button", () => {
    render(<LoginForm onSubmit={vi.fn()} />);
    expect(
      screen.getByRole("textbox", { name: /email:/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("renders email and password fields as required", () => {
    render(<LoginForm onSubmit={vi.fn()} />);
    expect(screen.getByRole("textbox", { name: /email:/i })).toBeRequired();
    expect(screen.getByLabelText(/Password:/i)).toBeRequired();
  });

  it("renders the email and password fields as invalid is an error is provided", () => {
    const errors = {
      email: "ERROR",
      password: "ERROR",
    };

    render(<LoginForm onSubmit={vi.fn()} errors={errors} />);

    expect(
      screen.getByRole("textbox", { name: /email:/i })
    ).toHaveAccessibleDescription(errors.email);
    expect(screen.getByLabelText(/Password:/i)).toHaveAccessibleDescription(
      errors.password
    );
  });

  it(
    ("should render the inputs as valid if the are no errors",
    async () => {
      const inputs = {
        email: "cs6080@email.com",
        password: "super secure password",
      };
      render(<LoginForm onSubmit={vi.fn()} />);

      await userEvent.type(
        screen.getByRole("textbox", { name: /email:/i }),
        inputs.email
      );
      await userEvent.type(
        screen.getByLabelText(/Password:/i),
        inputs.password
      );

      expect(screen.getByRole("textbox", { name: /email:/i })).toBeValid();
      expect(screen.getByLabelText(/Password:/i)).toBeValid();
    })
  );

  it(
    ("should call onSubmit when the values are valid and the login button is pressed",
    async () => {
      const inputs = {
        email: "cs6080@email.com",
        password: "super secure password",
      };

      const expRes = { ...inputs };
      const mockOnSubmit = vi.fn();

      render(<LoginForm onSubmit={mockOnSubmit} />);

      expect(mockOnSubmit).toBeCalledTimes(0);

      await userEvent.type(
        screen.getByRole("textbox", { name: /email:/i }),
        inputs.email
      );
      await userEvent.type(
        screen.getByLabelText(/Password:/i),
        inputs.password
      );

      await userEvent.click(screen.getByRole("button", { name: "/login/i" }));

      expect(mockOnSubmit).toBeCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledOnce();
      expect(mockOnSubmit).toHaveBeenNthCalledWith(expRes);
    })
  );
});
