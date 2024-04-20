import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DisplayUnit from '../elements/DisplayUnit';

jest.mock('../stores/unitLabelStore', () => ({
  useUnitLabelStore: jest.fn()
}));

test('renders DisplayUnit and checks for checkbox change', () => {
  const mockDisplay = { seconds: true };
  const mockToggleDisplay = jest.fn();

  require('../stores/unitLabelStore').useUnitLabelStore
    .mockImplementation((selector: any) => selector({
      display: mockDisplay,
      toggleDisplay: mockToggleDisplay
    }));

  render(<DisplayUnit unit="seconds" />);

  const checkboxElement = screen.getByRole('checkbox');
  expect(checkboxElement).toBeInTheDocument();
  expect(checkboxElement).toBeChecked();

  fireEvent.click(checkboxElement);
  expect(mockToggleDisplay).toHaveBeenCalledWith('seconds');
});