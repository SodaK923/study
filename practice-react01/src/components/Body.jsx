import Header from './Header'
import Footer from './Footer'

import "./Body.css";

const Body=()=>{
    return(
        <div>
        <Header />
        <div className='body'>
        <h1>Body부분</h1>
        </div>
        <Footer />
        </div>
    );
}

export default Body;