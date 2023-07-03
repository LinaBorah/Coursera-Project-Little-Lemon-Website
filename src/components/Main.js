
import Home from './Home/Home';
import BookingPage from '../components/BookingPage/BookingPage.js';
import About from './About/About';
import { Route, Routes } from 'react-router-dom';
import AddDetailsForm from './AddDetailsForm/AddDetailsForm';
import { useState, useReducer } from "react";
//static time variable to show the list of times available for booking
const timeList = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
] 
// reducer function to change available times based on selected date.
const updateTimes = (availableTimes, action) => {
    availableTimes = action.availableTimes;
    /*currently this function is 
    not updating available times via live data, which I will change later using API, for now I have made 
    it static by choosing a random date on which it will show a different time list for available time array.
    */
    if (action.type === '2023-06-29') {
        const copiedArray = availableTimes.slice(0);
        return copiedArray.filter((timevalue) => timevalue !== '17:00');
    } else {
        return [...availableTimes];
    }
}
// Main Component to route to selected page.
function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, timeList); // for controlled form component reducer state to change available times based on dispatched date.
    const [date, setDate] = useState(""); // for date input
    const [Error, setError] = useState(false); //for finding error on validation
    const [numberOfGuest, setNumberOfGuest] = useState(0); //for guest selection
    const [Time, setTime] = useState("")// for time selection
    const [addDetails, setAddDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phNumber: "",
    }); // for additional details on the form
    const [occassion, setOccassion] = useState(""); // for occassion selection

    // function to change date on selection
    const checkDate = (e) => {

        setDate(e.target.value);
        //availableTimes = timeList;
        dispatch({
            type: e.target.value,
            availableTimes: timeList
        })
        setError(false);
    }

    // function to validate date so that user don't select current date.
    const validateDate = () => {

        if (new Date(date) < new Date() || !new Date(date)) {
            setError(true);
        }
    }

    const selectedTime = (e) => {
        setTime(e.target.value);

    }
    const updateGuest = (e) => {
        setNumberOfGuest(e.target.value);
    }

    //To update the addDetail state when user fills each field of the form
    const updateForm = (e) => {
        const { name, value } = e.target;
        setAddDetails({
            ...addDetails,
            [name]: value,

        })

    }
    //function to handle all the states when user subits the form
    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if (addDetails.firstName === '' && addDetails.lastName === '' && addDetails.email === '' && addDetails.phNumber === '') {
            setError(true)
        }
        setError(false);
        setDate("");
        setTime("");
        setNumberOfGuest(0);
        setOccassion("")
        setAddDetails({
            ...addDetails,
            firstName: "",
            lastName: "",
            email: "",
            phNumber: "",
        })

    }
    return (
        <main>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/reservations" element={<BookingPage
                    availableTimes={availableTimes}
                    date={date}
                    Error={Error}
                    numberOfGuest={numberOfGuest}
                    Time={Time}
                    occassion={occassion}
                    setOccassion={setOccassion}
                    checkDate={checkDate}
                    validateDate={validateDate}
                    selectedTime={selectedTime}
                    updateGuest={updateGuest}

                />} />
                <Route path="/reservations//reservation-2" element={<AddDetailsForm
                    availableTimes={availableTimes}
                    date={date}
                    Error={Error}
                    numberOfGuest={numberOfGuest}
                    Time={Time}
                    dispatch={dispatch}
                    occassion={occassion}
                    setOccasion={setOccassion}

                    checkDate={checkDate}
                    validateDate={validateDate}
                    selectedTime={selectedTime}
                    updateGuest={updateGuest}
                    updateForm={updateForm}
                    addDetails={addDetails}
                    handleSubmit={handleSubmit}
                />} />
                
            </Routes>
            
        </main>
    );
}
export default Main;