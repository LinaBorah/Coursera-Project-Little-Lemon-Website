import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './components/BookingPage';
import AddDetailsForm from './components/AddDetailsForm';
import Main from './components/main';


  test("Shows error when todays date is selected ",()=>{
    
    render(<Main />)
    const choosendate = screen.getByLabelText(/Choose Date/);
    fireEvent.change(choosendate, {target:{value : "2023-06-30"}});
    const showtext = screen.getByRole("alertdialog")
    expect(showtext).toHaveTextContent("Invalid Date, please choose a date after today!")
    
  })


