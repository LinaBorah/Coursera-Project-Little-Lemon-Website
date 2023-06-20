import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';


test('renders the Choose date field', () => {
  render(<BookingForm/>);
  const inputElement = screen.getByText("Choose Date")
  expect(inputElement).toBeInTheDocument();
})
