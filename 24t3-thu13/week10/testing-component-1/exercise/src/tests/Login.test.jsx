import { describe, expect, it, vi } from "vitest";
import LoginForm from "../LoginForm";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Login', () => {
    it('should should render the email field, password field and log in button', () => {
        render(<LoginForm onSubmit={vi.fn()}/>);
        expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    it('should should render the error messages when there is an error', () => {
        const errors = {
            email: 'Invalid email',
            password: 'Password is required'
        }
        render(<LoginForm onSubmit={vi.fn()} errors={errors}/>);
        expect(screen.getByRole('textbox', { name: /email/i })).toHaveAccessibleDescription(errors.email);
        expect(screen.getByLabelText(/password/i)).toHaveAccessibleDescription(errors.password);
    });

    it('redners the email and password fields as valid if there are no errors', async () => {
        const inputs = {
            email: 'cs6080@email.com',
            password: 'password'
        }
        render(<LoginForm onSubmit={vi.fn()} />);

        await userEvent.type(screen.getByLabelText(/email/i), inputs.email);
        await userEvent.type(screen.getByLabelText(/password/i), inputs.password);

        expect(screen.getByRole('textbox', { name: /email/i })).toBeValid();
        expect(screen.getByLabelText(/password/i)).toBeValid();
    });

    it('calls onSubmit when login button is pressed', async () => {
        const inputs = {
            email: 'cs6080@email.com',
            password: 'password'
        }

        const mockSubmit = vi.fn();

        render(<LoginForm onSubmit={mockSubmit} />);

        await userEvent.type(screen.getByLabelText(/email/i), inputs.email);
        await userEvent.type(screen.getByLabelText(/password/i), inputs.password);

        await userEvent.click(screen.getByRole('button', { name: /login/i }));

        expect(mockSubmit).toHaveBeenCalledTimes(1);
    });
})