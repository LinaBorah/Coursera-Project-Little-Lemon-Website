
import Home from './Home';
import BookingPage from './BookingPage';
import About from './About';
import { Route, Routes } from 'react-router-dom';
import AddDetailsForm from './AddDetailsForm';
import { useState, useRef, useReducer } from "react";

const timeList = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
]
const updateTimes =(availableTimes, action)=>{
    availableTimes=action.availableTimes;
    if(action.type==='2023-06-29') {
        const copiedArray = availableTimes.slice(0);
        console.log(`Entered the condition ${availableTimes}`);
        return copiedArray.filter((timevalue)=> timevalue !== '17:00');
    }else{
        console.log(`did not enter ${availableTimes}`)
        return [...availableTimes];
    }
    //return new Error();
    
}
function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, timeList);
    const [date, setDate] = useState("");
    const [dateError, setDateError] = useState(false);
    const [numberOfGuest, setNumberOfGuest] = useState(0);
    const [Time, setTime] = useState("")
    const selectRef = useRef(null);
    const seatingRef = useRef(null);
    const checkDate=(e)=>{
        
        setDate(e.target.value);
        //availableTimes = timeList;
        dispatch({type: e.target.value,
        availableTimes: timeList})
        setDateError(false);
    }
    
    console.log(`availabletime  is ${typeof(availableTimes)}`);
    console.log(availableTimes);
    console.log(`date is ${date}`);
    const validateDate=()=>{
        
        if(new Date(date)< new Date() || !new Date(date)){
            setDateError(true);
         }
    }
    
    const selectedTime =(e)=>{
        setTime(e.target.value);
        
    }
    
    // const isSelected =(availableTime)=>{
    //     return availableTime !== Time;
    // }
    // const filteredTime = ()=>{
       
    //     setAvailableTimes(availableTimes.filter(isSelected));
    // }
    // console.log(availableTimes);
    // console.log(Time);

    const updateGuest = (e)=>{
        setNumberOfGuest(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(selectRef.current.value.length===0){

            <p>Select occassion</p>
        }
        setDate("");
        setTime("");
        setNumberOfGuest(0);
        selectRef.current.value = null;
        seatingRef.current.value = null;
    }
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/reservations" element={<BookingPage 
                    availableTimes={availableTimes}
                    date={date}
                    dateError={dateError}
                    numberOfGuest={numberOfGuest}
                    Time={Time}
                    dispatch={dispatch}
                    selectRef={selectRef}
                    checkDate={checkDate}
                    validateDate={validateDate}
                    selectedTime={selectedTime}
                    updateGuest={updateGuest}
                    
                    />} />
                <Route path="/reservations//reservation-2" element={<AddDetailsForm 
                availableTimes={availableTimes}
                date={date}
                dateError={dateError}
                numberOfGuest={numberOfGuest}
                Time={Time}
                dispatch={dispatch}
                selectRef={selectRef}
                checkDate={checkDate}
                validateDate={validateDate}
                selectedTime={selectedTime}
                updateGuest={updateGuest}
                handleSubmit={handleSubmit}
                />} />
            </Routes>
        </main>
    );
}
export default Main;