import { Link } from 'react-router-dom';
import './NotFound.sass';

const NotFound = () => {
    let backToHome = `Volver`;
    return (
        <div className='notFound'>
            <h1>404</h1>
            <p>Not Found</p>
            <div className='backHome'>
                <Link to='/'>{backToHome}</Link>
            </div>
        </div>
    );
}

export default NotFound;