import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from '../elements/TextInput';

test('renders TextInput and checks for input change', () => {
  const setValue = jest.fn();

  render(<TextInput value="test" setValue={setValue} />);

  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 'new value' } });
  expect(setValue).toHaveBeenCalled();
});