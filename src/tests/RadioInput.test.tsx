import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RadioInput from '../elements/RadioInput';


test('renders RadioInput and checks for input change', () => {
  const setValue = jest.fn();

  render(
    <RadioInput value="test" checked={false} label="Test Label" setValue={setValue} />
  );

  const inputElement = screen.getByRole('radio');
  expect(inputElement).toBeInTheDocument();

  fireEvent.click(inputElement);
  expect(setValue).toHaveBeenCalled();
});