import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Subtitle from '../elements/Subtitle';

test('renders Subtitle and checks for subtitle text', () => {
  const testSubtitle = 'Test Subtitle';

  render(<Subtitle subtitle={testSubtitle} />);

  const subtitleElement = screen.getByText(testSubtitle);
  expect(subtitleElement).toBeInTheDocument();
});