import { Link } from "react-router-dom";

export default function AddDetailsForm({
    availableTimes,
    date,
    dateError,
    numberOfGuest,
    Time,
    dispatch,
    selectRef,
    checkDate,
    validateDate,
    selectedTime,
    updateGuest,
    handleSubmit,
}){
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="FirstName" className="required-field">First Name:</label>
                <input 
                type="text"
                id="FirstName"
                required/>
                 <label htmlFor="LastName">Last Name:</label>
                <input 
                type="text"
                id="LastName"
                required/>
                <label>Email:</label>
                <input 
                type="email"
                id="email"
                required/>
                 <label htmlFor="PhNumber">Phone Number:</label>
                <input 
                type="number"
                id="PhNumber"
                required/>
                 <label htmlFor="Special-Request">Special Request:</label>
                <textarea 
                
                id="Special-Request"
                min='6'
                max='50'
                cols='20'
                rows='5'
                required/>
                <p>
                    <ul>
                        <li>selected date is: {date}</li>
                        <li>selected time is: {Time}</li>
                        <li>Number of Guest: {numberOfGuest}</li>
                        <li>
                            Occassion: { selectRef.current.value.length===0?<Link to="/reservations"><p>Error!! occassion not selected</p></Link> : selectRef.current.value }
                            
                        </li>
                        {/* {
                        selectRef.current.value===0?
                        <p>Error!! occassion not selected </p>:
                        <li>Occassion: {selectRef.current.value}</li>
                        } */}

                    </ul>
                </p>
                <button type='submit'>Confirm Reservation</button>
            </form>
        </>
    )
}