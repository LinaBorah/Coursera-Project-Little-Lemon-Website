import BookingForm from "./BookingForm"
import { useState } from "react";
export default function BookingPage(){
    const [date, setDate] = useState("");
    const [numberOfGuest, setNumberOfGuest] = useState(0);
    const [avalaibleTimes, setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]
    )
    const updateTimes =(e)=>{
        //filter out the array excluding the selected time
        avalaibleTimes = avalaibleTimes.filter()
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setDate("");

    }
    return(
        <>
            <BookingForm 
            date={date} 
            numberOfGuest={numberOfGuest} 
            avalaibleTimes={avalaibleTimes} 
            handleSubmit={handleSubmit}
            updateTimes={updateTimes}
            />
        </>
    )
}