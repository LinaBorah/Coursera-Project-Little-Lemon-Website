//import BookingForm from "./BookingForm"
//import { useReducer } from "react";
//import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function BookingPage({
    availableTimes,
    date,
    Error,
    numberOfGuest,
    Time,
    occassion,
    setOccassion,
    checkDate,
    validateDate,
    selectedTime,
    updateGuest,

}) {

    var disable = true;
    return (
        <>
            <form className='BookingPage'>
                <div className='seating'>
                    <label htmlFor='seating'>
                        Indoor Seating <input className="radio-button" type="radio" id="seating" name="seating" defaultChecked />
                    </label>

                    <label htmlFor='seating'>
                        Outdoor Seating  <input className="radio-button" type="radio" id="seating" name="seating" />
                    </label>
                </div>
                <div className='fields-group'>
                    <div className='datesection'>

                        <label htmlFor="date" >Choose Date</label>
                        <input
                            required
                            type="date"
                            id="date"
                            name="booking-date"
                            min={new Date().toISOString().slice(0, 10)}
                            // ref={date}
                            value={date}
                            //onFocus={resetField}
                            onChange={checkDate}
                            onBlur={validateDate} />


                        {
                            Error && (<p role="alertdialog" className="Error">Invalid Date, please choose a date after today!</p>)

                        }

                    </div>

                    <div className='timsection'>
                        <label htmlFor="time">Choose Time</label>

                        <select
                            disabled={Error}
                            id="time "
                            name="booking-time"
                            value={Time}
                            onChange={selectedTime}
                            required
                        >
                            <option
                                disabled
                                value="">
                                -- : --
                            </option>
                            {/* {console.log(availableTimes)} */}
                            {
                                availableTimes.map((time, index) => (
                                    <option
                                        key={index}
                                        value={time}>
                                        {time}
                                    </option>
                                ))
                            }

                        </select>
                    </div>
                </div>
                <div className='fields-group'>
                    <div className='guestsection'>
                        <label htmlFor="guest-number">Number of guest</label>
                        <input
                            type="number"
                            id="guest-number"
                            name="guest-number"
                            placeholder="1"
                            min={1}
                            max={10}
                            value={numberOfGuest}
                            onChange={updateGuest}
                            disabled={Error}
                            required
                        />
                    </div>
                    <div className='occassion'>
                        <label htmlFor="occasion">Occassion
                            <select id="occasion" name="occasion" value={occassion} onChange={(e) => {
                                setOccassion(e.target.value);
                            }} disabled={Error} >
                                {<option
                                    disabled
                                    value="">
                                    -- : --
                                </option>}
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Other">Other..</option>
                            </select>
                        </label>
                    </div>
                </div>

                {/* {console.log(`selectRef.current.value.length is ${selectRef.current.value.length}`)} */}
                {
                    date.length > 0 && Time.length > 0 && numberOfGuest > 0 && occassion.length > 0 ? disable = false : disable
                }
                <Link to="/reservations//reservation-2"><button className='ReserveTable'
                    type="submit"
                    value="Make your reservation"
                    disabled={disable || Error}
                >Reserve a Table</button></Link>
            </form>
        </>
    );
}

