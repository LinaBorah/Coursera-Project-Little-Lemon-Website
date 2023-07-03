import about1 from '../../assets/Mario and Adrian A.jpg';
import about2 from '../../assets/Mario and Adrian b.jpg';
import './About.css';
export default function About(){
    return(
        <section className="About2">
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
                    <img src={about1} alt="Owners" height= '450px' width="280px"></img>
                    <img src={about2} alt="Owners" height= '450px' width="280px"></img>
                </div>
        </section>
    )
}