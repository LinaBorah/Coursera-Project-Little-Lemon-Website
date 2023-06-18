import dish from '../assets/restauranfood.jpg'
import dish1 from '../assets/bruchetta.svg';
import dish2 from '../assets/greek salad.jpg'
import dish3 from '../assets/lemon dessert.jpg'
import Card from './Card';
import ReviewCard from './ReviewCard';
import about1 from '../assets/Mario and Adrian A.jpg';
import about2 from '../assets/Mario and Adrian b.jpg';
function Main(){
    const description1 = `Pariatur nisi et esse reprehenderit 
    ullamco minim eiusmod dolore excepteur irure ullamco enim.`;
    const description2 = `Pariatur nisi et esse reprehenderit 
    ullamco minim eiusmod dolore excepteur irure ullamco enim.`;
    const description3 = `Pariatur nisi et esse reprehenderit 
    ullamco minim eiusmod dolore excepteur irure ullamco enim.`;

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
                    <h1>This Week's Specials!</h1>
                    <button>Order Online</button>
                </div>
                <div className="Card-section">
                    <span><Card image={dish1} name={'Bruschetta'} price={'$12.9'} description={description1}/></span>
                    <span><Card image={dish2} name={'Greek Salad'} price={'$22.5'} description={description2}/></span>
                    <span><Card image={dish3} name={'Lemon Dessert'} price={'$32'} description={description3}/></span>
                    
                </div>
            </section>
            <section className="Testimonials">
                <div>
                    <h1>Testimonials</h1>
                </div>
                <div>
                <ReviewCard rating="4" name="Nita" review="Sit nisi exercitation nisi duis velit aliqua quis do qui."/>
                <ReviewCard rating="5" name= "Georgia" review="Sit nisi exercitation nisi duis velit aliqua quis do qui."/>
                <ReviewCard rating="4.5" name="Mohini" review="Sit nisi exercitation nisi duis velit aliqua quis do qui."/>
                <ReviewCard rating="4" name="Sanjay" review="Sit nisi exercitation nisi duis velit aliqua quis do qui."/>
                </div>
                
            </section>
            <section className="About">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. 
                        Fermentum vitae arcu nisl sit. Nisi pharetra consequat sed mauris orci ac. 
                        Malesuada dui neque faucibus ornare vitae. Quisque vel tortor magna ac id quis risus. 
                        Facilisi porta nunc non arcu sed mauris convallis.
                    </p>
                </div>
                <div>
                    <img src={about1} alt="Owners" height= '280px' width="180px"></img>
                    <img src={about2} alt="Owners" height= '280px' width="180px"></img>
                </div>
            </section>
        </main>
    );
}
export default Main;