import dish1 from '../assets/bruchetta.svg';
import dish2 from '../assets/greek salad.jpg'
import dish3 from '../assets/lemon dessert.jpg'
import Card from './Card';
function Specials(){
    const description1 = `Pariatur nisi et esse reprehenderit 
    ullamco minim eiusmod dolore excepteur irure ullamco enim.`;
    const description2 = `Pariatur nisi et esse reprehenderit 
    ullamco minim eiusmod dolore excepteur irure ullamco enim.`;
    const description3 = `Pariatur nisi et esse reprehenderit 
    ullamco minim eiusmod dolore excepteur irure ullamco enim.`;
    return(
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
    )
}
export default Specials;