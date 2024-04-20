import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Theme from '../elements/Theme';

jest.mock('../stores/timerStore', () => ({
  useTimerStore: jest.fn()
}));

test('renders Theme and checks for select change', () => {
  const mockTheme = 'light';
  const mockSetTheme = jest.fn();

  require('../stores/timerStore').useTimerStore
    .mockImplementation((selector: any) => selector({
      theme: mockTheme,
      setTheme: mockSetTheme
    }));

  render(<Theme />);

  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeInTheDocument();
  expect(selectElement).toHaveValue(mockTheme);

  fireEvent.change(selectElement, { target: { value: 'dark' } });
  expect(mockSetTheme).toHaveBeenCalledWith('dark');
});