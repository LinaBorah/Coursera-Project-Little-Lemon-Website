//import { Link } from "react-router-dom";

export default function AddDetailsForm({
    availableTimes,
    date,
    Error,
    numberOfGuest,
    Time,
    dispatch,
    occassion,
    setOccassion,
    checkDate,
    validateDate,
    selectedTime,
    updateGuest,
    addDetails,
    updateForm,
    validateForm,
    handleSubmit,
}){
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="FirstName" className="required-field">First Name:</label>
                <input 
                required
                type="text"
                id="FirstName"
                name="firstName"
                value={addDetails.firstName}
                onChange={updateForm}
                
                />
                {console.log(`addDetails.firstName value is ${addDetails.firstName}`)}
                {Error && <p>First Name required</p>}
                 <label htmlFor="LastName">Last Name:</label>
                <input 
                type="text"
                id="LastName"
                name="lastName"
                value={addDetails.lastName}
                onChange={updateForm}
                
                required/>
                {Error && <p>Last Name required</p>}
                <label>Email:</label>
                <input 
                type="email"
                id="email"
                name="email"
                value={addDetails.email}
                onChange={updateForm}
                required/>
                {Error && <p>Email required</p>}
                 <label htmlFor="PhNumber">Phone Number:</label>
                <input 
                type="number"
                id="PhNumber"
                name="phNumber"
                value={addDetails.phNumber}
                onChange={updateForm}
                required/>
                {Error && <p> Phone number required</p>}
                 <label htmlFor="Special-Request">Special Request:</label>
                <textarea 
                
                id="Special-Request"
                min='6'
                max='50'
                cols='20'
                rows='5'
                required/>
                
                    <ul>
                        <li>selected date is: {date}</li>
                        <li>selected time is: {Time}</li>
                        <li>Number of Guest: {numberOfGuest}</li>
                        <li>
                            Occassion: {occassion }
                            
                        </li>
                        

                    </ul>
                
                <button type='submit' disabled={Error}>Confirm Reservation</button>
            </form>
        </>
    )
}