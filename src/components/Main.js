
import Home from './Home';
import BookingPage from './BookingPage';
import About from './About';
import { Route, Routes } from 'react-router-dom';

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/reservations" element={<BookingPage />} />
      </Routes>
        </main>
    );
}
export default Main;