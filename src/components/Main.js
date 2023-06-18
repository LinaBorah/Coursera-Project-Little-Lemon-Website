import dish from '../assets/restauranfood.jpg'
import dish1 from '../assets/bruchetta.svg';
function Main(){
    return(
        <main>
            <section className="Hero">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Reprehenderit Lorem ea Lorem labore sit non mollit irure pariatur culpa dolore duis. 
                        Ullamco ex laboris proident nostrud Lorem. Cupidatat incididunt 
                        magna do elit tempor ad non. Exercitation aliqua nisi sint ullamco 
                        do proident id aliqua fugiat nostrud labore. 
                        Occaecat consequat occaecat excepteur enim adipisicing.
                    </p>
                    <button>Reserve a table</button>
                </div>
                <div className='Hero-image'>
                    <img src={dish} alt='Main Dish' width={"250px"} height={'300px'}></img>
                </div>
            </section>
            <section className="Specials">
                <div>
                    <h1>This Week's Specials</h1>
                    <button>Order Online</button>
                </div>
                <div>

                </div>
            </section>
            <section className="Testimonials"></section>
            <section className="About"></section>
        </main>
    );
}
export default Main;