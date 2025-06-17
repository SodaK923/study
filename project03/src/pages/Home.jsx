import './Home.css'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [params, setParams]=useSearchParams();
    console.log(params.get('name'));

    return (
        <div className='Home'>
            <h1>Welcome to SmartDash</h1>
            <p className='intro'>당신을 계획하세요.<br />
                Smart DashBoard가 도와드립니다.
            </p>
        </div>
    );
}

export default Home;