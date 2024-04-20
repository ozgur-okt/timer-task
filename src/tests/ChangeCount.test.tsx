import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChangeCount from '../elements/ChangeCount';

jest.mock('../stores/timerStore', () => ({
  useTimerStore: jest.fn()
}));

test('renders ChangeCount and checks for input and button interaction', () => {
  const mockSetStartHours = jest.fn();

  require('../stores/timerStore').useTimerStore
    .mockImplementation((selector: any) => selector({
      setStartHours: mockSetStartHours
    }));

  render(<ChangeCount />);

  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: '2' } });
  expect(inputElement).toHaveValue('2');

  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(mockSetStartHours).toHaveBeenCalledWith(2);
});