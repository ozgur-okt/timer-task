import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Unit from '../elements/Unit';

jest.mock('../stores/unitLabelStore', () => ({
  useUnitLabelStore: jest.fn()
}));
jest.mock('../stores/timerStore', () => ({
  useTimerStore: jest.fn()
}));

test('renders Unit and checks for unit display', () => {
  const mockCustomLabel = 'Test';
  const mockDisplay = true;
  const mockTheme = 'light';

  require('../stores/unitLabelStore').useUnitLabelStore
    .mockImplementation((selector: any) => selector({
      labels: { seconds: mockCustomLabel },
      display: { seconds: mockDisplay }
    }));
  require('../stores/timerStore').useTimerStore
    .mockImplementation((selector: any) => selector({
      theme: mockTheme
    }));

  render(<Unit unit="seconds" value={30} />);

  const unitElement = screen.getByText('3');
  expect(unitElement).toBeInTheDocument();

  const labelElement = screen.getByText(mockCustomLabel);
  expect(labelElement).toBeInTheDocument();
});