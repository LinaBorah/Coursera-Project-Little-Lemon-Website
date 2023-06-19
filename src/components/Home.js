import dish from '../assets/restauranfood.jpg'
function Home (){
    return(
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
                    <img src={dish} alt='Main Dish' width={"350px"} height={'470px'}></img>
            </div>
        </section>
    );
}
export default Home;