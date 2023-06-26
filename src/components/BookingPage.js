//import BookingForm from "./BookingForm"
//import { useReducer } from "react";
//import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function BookingPage({
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
    handleSubmit
}) {

    var disable = true;
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="date">Choose Date</label>
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
                        //onClick={dispatch({type:date})}
                        
                        onBlur={validateDate} />
                        {/* {dispatch({type:date})} */}
                    {
                        dateError && (<p className="Error">Invalid Date, please choose a date after today!</p>)

                    }
                    {
                        console.log(dateError)
                    }
                    {
                        console.log(date)

                    }
                </div>
                <div>
                    <label htmlFor="time">Choose Time</label>

                    <select
                        disabled={dateError}
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
                <div>
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
                        disabled={dateError}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="occasion">Occassion
                        <select id="occasion" name="occasion" value="" ref={selectRef} disabled={dateError} >
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
                {/* {console.log(`selectRef.current.value.length is ${selectRef.current.value.length}`)} */}
                {
                    date.length > 0 && Time.length > 0 && numberOfGuest > 0  ? disable = false : disable
                }
                <Link to="/reservation//reservation-2"><button
                    type="submit"
                    value="Make your reservation"
                    disabled={disable || dateError}
                >Reserve a Table</button></Link>
            </form>
        </>
    );
}

