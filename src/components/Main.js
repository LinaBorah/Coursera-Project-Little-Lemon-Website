
import Home from './Home';
import BookingPage from './BookingPage';
import About from './About';
import { Route, Routes } from 'react-router-dom';
import AddDetailsForm from './AddDetailsForm';
import { useState, useReducer } from "react";
import Confirmation from './Confirmation';
//import {fetchAPI, submitAPI} from "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";

const timeList = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
]

const updateTimes = (availableTimes, action) => {
    availableTimes = action.availableTimes;
    if (action.type === '2023-06-29') {
        const copiedArray = availableTimes.slice(0);
        console.log(`Entered the condition ${availableTimes}`);
        return copiedArray.filter((timevalue) => timevalue !== '17:00');
    } else {
        console.log(`did not enter ${availableTimes}`)
        return [...availableTimes];
    }


}
function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, timeList);
    const [date, setDate] = useState("");
    const [Error, setError] = useState(false);
    const [numberOfGuest, setNumberOfGuest] = useState(0);
    const [Time, setTime] = useState("")
    const [addDetails, setAddDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phNumber: "",
    });
    const [occassion, setOccassion] = useState("");
    const[confirmpopup, setConfirmpopup] = useState(false);
    
    const checkDate = (e) => {

        setDate(e.target.value);
        //availableTimes = timeList;
        dispatch({
            type: e.target.value,
            availableTimes: timeList
        })
        setError(false);
    }


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

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmpopup(true);
        
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
            <Confirmation trigger={confirmpopup} setTrigger={setConfirmpopup}/>
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