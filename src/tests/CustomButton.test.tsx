import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomButton from '../elements/CustomButton';

jest.mock('../stores/buttonStore', () => ({
  useButtonStore: jest.fn()
}));

test('renders CustomButton and checks for button label and link', () => {
  const mockLabel = 'Test';
  const mockLink = 'https://test.com';
  const mockTheme = 'light';

  require('../stores/buttonStore').useButtonStore
    .mockImplementation((selector: any) => selector({
      label: mockLabel,
      link: mockLink
    }));

  render(<CustomButton theme={mockTheme} />);

  const buttonElement = screen.getByRole('link', { name: mockLabel });
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute('href', mockLink);
});