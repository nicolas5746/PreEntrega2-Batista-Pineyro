import { Link } from 'react-router-dom';
import './NotFound.sass';

const NotFound = () => {
    let backToHome = `Volver`;
    let errorCode = `404`;
    let notFound = `Página no encontrada`;
    return (
        <div className='notFound'>
            <h1>{errorCode}</h1>
            <p>{notFound}</p>
            <div className='backHome'>
                <Link to='/'>{backToHome}</Link>
            </div>
        </div>
    );
}

export default NotFound;