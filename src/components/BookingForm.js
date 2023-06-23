//import { useState } from "react";
export default function BookingForm({
    date,
    checkDate,
    validateDate,
    dateError,
    avalaibleTimes,
    Time,
    updateTimes,
    numberOfGuest, 
    updateGuest,
    selectRef,
    handleSubmit
}) {
    // const[disable, setDisable] = useState("true");
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
                        min={new Date().toISOString().slice(0,10)}
                        value={date}
                        //onFocus={resetField}
                        onChange={checkDate}
                        onBlur={validateDate}/>
                        {
                            dateError && (<p className="Error">Invalid Date, please choose a date after today!</p>)
                            
                        }
                        {
                            console.log(dateError)
                        }
                </div>
                <div>
                    <label htmlFor="time">Choose Time</label>

                    <select 
                    disabled = {dateError}
                        id="time "
                        name="booking-time"
                        value={Time}
                        onChange={updateTimes}
                        required
                        >
                            <option
                                disabled
                                value="">
                                -- : --
                            </option>
                        {
                            avalaibleTimes.map((time,index)=>(
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
                        <select id="occasion" name="occasion" defaultValue=""  ref = {selectRef} disabled={dateError} >
                            { <option
                                disabled
                                value="">
                                -- : --
                            </option> }
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Other">Other..</option>
                        </select>
                    </label>
                </div>
                {
                    date.length > 0 && Time.length>0 && numberOfGuest > 0 ? disable=false : disable 
                }
                <button 
                type="submit" 
                value="Make your reservation" 
                disabled={disable || dateError}
                >Reserve a Table</button>
            </form>
        </>
    );
}


// This block is for testing purpose
//export default function BookingForm({
//     chooseDate,
//     checkDate}
//     ){
   
//     return(
//         <>
//             <form>
//             <label htmlFor="date">Date</label>
//           <input
//             required
//             id="date"
//             name="date"
//             type="date"
//             min={new Date().toISOString().slice(0, 10)}
//             value={chooseDate}
//             onChange={checkDate}
//           />
//           {console.log(`date value is ${chooseDate}`)}
//             </form>
//         </>
//     )
// }