import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToggleButton from '../elements/ToggleButton';

jest.mock('../stores/timerStore', () => ({
  useTimerStore: jest.fn()
}));

test('renders ToggleButton and checks for checkbox change', () => {
  const mockIsCloseIconVisible = false;
  const mockSetCloseIconVisibility = jest.fn();

  require('../stores/timerStore').useTimerStore
    .mockImplementation((selector: any) => selector({
      isCloseIconVisible: mockIsCloseIconVisible,
      setCloseIconVisibility: mockSetCloseIconVisibility
    }));

  render(<ToggleButton />);

  const checkboxElement = screen.getByRole('checkbox');
  expect(checkboxElement).toBeInTheDocument();

  fireEvent.click(checkboxElement);
  expect(mockSetCloseIconVisibility).toHaveBeenCalled();
});