import BookingForm from "./BookingForm"
import { useState, useRef } from "react";

export default function BookingPage(){
    const avalaibleTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]
    const [date, setDate] = useState("");
    const [dateError, setDateError] = useState(false);
    const [numberOfGuest, setNumberOfGuest] = useState(0);
    const [Time, setTime] = useState("")
    const selectRef = useRef(null);
    
    const checkDate=(e)=>{
        
        setDate(e.target.value);
        setDateError(false);
    }
    const validateDate=()=>{
        
        if(new Date(date)< new Date() || !new Date(date)){
            setDateError(true);
         }
    }
    
    const updateTime =(e)=>{
        setTime(e.target.value);
        
    }
    const isSelected =(avalaibleTimes)=>{
        return avalaibleTimes !== Time;
    }
    const filteredTime = ()=>{
        const changedTimings = avalaibleTimes.filter(isSelected);
        return changedTimings;
    }
    const updateGuest = (e)=>{
        setNumberOfGuest(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        filteredTime();
        setDate("");
        setTime("");
        setNumberOfGuest(0);
        selectRef.current.value = "";

    }
    return(
        <>
            <BookingForm 
            date={date} 
            checkDate={checkDate}
            validateDate={validateDate}
            dateError={dateError}
            avalaibleTimes={avalaibleTimes}
            Time = {Time}
            updateTimes={updateTime}
            numberOfGuest={numberOfGuest} 
            updateGuest = {updateGuest}
            selectRef = {selectRef}
            handleSubmit={handleSubmit}
            />
        </>
    )
}

// import { useState } from "react";
// export default function BookingPage(){
//     const[chooseDate, setChooseDate]=useState("");
//     const checkDate = (e)=>{
//         setChooseDate(e.target.value);
//     }
//     return(
//         <BookingForm 
//         chooseDate={chooseDate}
//         checkDate={checkDate}
//         />
//     )
// }