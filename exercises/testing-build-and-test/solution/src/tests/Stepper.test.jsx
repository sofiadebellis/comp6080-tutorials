import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Stepper } from "../Stepper";
import { describe, expect, it, vi } from 'vitest';

describe("Stepper component", () => {
  it("displays the correct value", () => {
    render(<Stepper value={3} onUpdate={() => {}} />);
    expect(screen.getByText(/3/i)).toBeInTheDocument();
  });

  it("decrements the value", async () => {
    const onUpdate = vi.fn();
    render(<Stepper value={3} onUpdate={onUpdate} />);
    await userEvent.click(screen.getByLabelText(/subtract 1 from quantity/i));
    expect(onUpdate).toHaveBeenCalledWith(2);
  });

  it("increments the value", async () => {
    const onUpdate = vi.fn();
    render(<Stepper value={3} onUpdate={onUpdate} />);
    await userEvent.click(screen.getByLabelText(/add 1 to quantity/i));
    expect(onUpdate).toHaveBeenCalledWith(4);
  });
});
