import { Link } from 'react-router-dom';
export default function Confirmation(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h1>Your booking is confirmed!! Thankyou for choosing Little Lemon</h1>
                <Link to="/"><button onClick={() => { props.setTrigger(false) }}>Back to Home</button></Link>
            </div>

        </div>
    ) : ""
}