//import { Link } from "react-router-dom";
import './AddDetailsForm.css';
import Confirmation from '../Confirmation';
import { useState } from 'react';
export default function AddDetailsForm({
    availableTimes,
    date,
    Error,
    setError,
    numberOfGuest,
    Time,
    occassion,
    addDetails,
    updateForm,
    handleSubmit,
}) {
    const[confirmpopup, setConfirmpopup] = useState(false);
    return (
        <>
            
            <form onSubmit={handleSubmit} className="AddDetails">
            <Confirmation trigger={confirmpopup} setTrigger={setConfirmpopup}/>
                <div className='Input-group'>
                    <div className='left-section'>
                        <div className='Fname'>
                            <label htmlFor="FirstName" className="required-field">First Name:</label>
                            <input
                                required
                                type="text"
                                id="FirstName"
                                name="firstName"
                                value={addDetails.firstName}
                                onChange={updateForm}

                            />
                        </div>

                        <div className='Lname'>
                            <label htmlFor="LastName" className="required-field">Last Name:</label>
                            <input
                                type="text"
                                id="LastName"
                                name="lastName"
                                value={addDetails.lastName}
                                onChange={updateForm}

                                required />
                        </div>
                        <div className='Email'>
                            <label className="required-field">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={addDetails.email}
                                onChange={updateForm}
                                required />
                        </div>

                    </div>
                    <div className='right-section'>
                        <div className='Phnumber'>
                            <label htmlFor="PhNumber" className="required-field">Phone Number:</label>
                            <input
                                type="number"
                                id="PhNumber"
                                name="phNumber"
                                value={addDetails.phNumber}
                                onChange={updateForm}
                                required />
                        </div>
                        <div className='Srequest'>
                            <label htmlFor="Special-Request">Special Request:</label>
                            <textarea

                                id="Special-Request"
                                min='6'
                                max='50'
                                cols='20'
                                rows='5'
                                
                            />
                        </div>
                        <div className='list'>
                            <ul>
                                <li>selected date is: {date}</li>
                                <li>selected time is: {Time}</li>
                                <li>Number of Guest: {numberOfGuest}</li>
                                <li>Occassion: {occassion}</li>
                            </ul>
                        </div>

                    </div>

                </div>
                
                {(addDetails.firstName === '' || addDetails.lastName === '' || addDetails.email === '' || addDetails.phNumber === '')?setError(true) : setError(false)}
                {console.log(Error)}
                
                <button type='submit' disabled={Error} onClick={()=>setConfirmpopup(true)}>Confirm Reservation</button>
                
            </form>
        </>
    )
}