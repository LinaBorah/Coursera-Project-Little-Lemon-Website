

import ReviewCard from './ReviewCard';

function Main() {


    return (
        <main>

            

            <section className="Testimonials">
                <div>
                    <h1>Testimonials</h1>
                </div>
                <div>
                    <ReviewCard rating="4" name="Nita" review="Sit nisi exercitation nisi duis velit aliqua quis do qui." />
                    <ReviewCard rating="5" name="Georgia" review="Sit nisi exercitation nisi duis velit aliqua quis do qui." />
                    <ReviewCard rating="4.5" name="Mohini" review="Sit nisi exercitation nisi duis velit aliqua quis do qui." />
                    <ReviewCard rating="4" name="Sanjay" review="Sit nisi exercitation nisi duis velit aliqua quis do qui." />
                </div>

            </section>

        </main>
    );
}
export default Main;