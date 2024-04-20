import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Title from '../elements/Title';

test('renders Title and checks for title text', () => {
  const testTitle = 'Test Title';

  render(<Title title={testTitle} />);

  const titleElement = screen.getByText(testTitle);
  expect(titleElement).toBeInTheDocument();
});