import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Cart } from "../Cart";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

describe("Cart component", () => {
  const items = {
    "Glow in the dark bike 3": 10,
  };

  it("displays the title of an item in the cart", () => {
    render(
      <BrowserRouter>
        <Cart items={items} onRemoveFromCart={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByText(/glow in the dark bike 3/i)).toBeInTheDocument();
  });

  it("displays the quantity of an item in the cart", () => {
    render(
      <BrowserRouter>
        <Cart items={items} onRemoveFromCart={() => {}} />
      </BrowserRouter>
    );
    expect(screen.getByText(/10/i)).toBeInTheDocument();
  });

  it("removes an item from the cart", async () => {
    const onRemoveFromCart = vi.fn(); 
    render(
      <BrowserRouter>
        <Cart items={items} onRemoveFromCart={onRemoveFromCart} />
      </BrowserRouter>
    );
    expect(onRemoveFromCart).not.toHaveBeenCalled();
    await userEvent.click(screen.getByRole('button', { name: /remove item/i }));
    expect(onRemoveFromCart).toHaveBeenCalledWith("Glow in the dark bike 3")
  });
});
