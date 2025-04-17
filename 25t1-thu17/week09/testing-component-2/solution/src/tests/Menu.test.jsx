import { describe, expect, it, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu, MenuButton, MenuItem } from '../Menu.jsx';

describe('MenuButton', () => {
  it('triggers onClick event handler when clicked', async () => {
    const onClickMock = vi.fn();
    render(<MenuButton onClick={onClickMock} open={false} />);
    expect(onClickMock).not.toHaveBeenCalled();
    await userEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledOnce();
  });

  it('has an aria-label attribute', () => {
    render(<MenuButton onClick={vi.fn()} open={false} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  });

  it('sets aria-expanded to false when closed', () => {
    render(<MenuButton onClick={vi.fn()} open={false} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
  });

  it('sets aria-expanded to true when open', () => {
    render(<MenuButton onClick={vi.fn()} open={true} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });
});

describe('MenuItem', () => {
  it('triggers onClick event handler with title when clicked', async () => {
    const onClickMock = vi.fn();
    render(<MenuItem onClick={onClickMock} title={'A title'} />);
    await userEvent.click(screen.getByRole('link'));
    expect(onClickMock).toBeCalledWith('A title');
  });

  it('renders with custom title', () => {
    const title = 'My custom title';
    render(<MenuItem onClick={vi.fn()} title={title} />);
    expect(screen.getByRole('link')).toHaveTextContent(title);
  })
});

describe('Menu', () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  it('is closed by default', () => {
    render(<Menu onClick={vi.fn()} items={items} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('creates a MenuItem for every provided item', async () => {
    render(<Menu onClick={vi.fn()} items={items} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
