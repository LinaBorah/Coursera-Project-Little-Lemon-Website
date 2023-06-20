
export default function BookingForm(props) {
    
   

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="date">Choose Date</label>
                    <input
                        type="date"
                        id="date"
                        name="booking-date"
                        value={props.date}
                        onChange={(e) => props.setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="time">Choose Time</label>

                    <select id="time "
                        name="booking-time"
                        value={props.avalaibleTimes}
                        onChange={(e) => props.setAvailableTimes(e.target.value)}>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
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
                        value={props.numberOfGuest}
                        onChange={(e) => props.setNumberOfGuest(e.target.value)}

                    />
                </div>
                <div>
                    <label htmlFor="occasion">Occassion
                        <select id="occasion" name="occasion">
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Others</option>
                        </select>
                    </label>
                </div>
                <button type="submit" value="Make your reservation" ></button>
            </form>
        </>
    );
}