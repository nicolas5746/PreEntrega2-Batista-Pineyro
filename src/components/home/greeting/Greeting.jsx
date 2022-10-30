import './Greeting.sass';

const Greeting = ({ greeting }) => {
    let greetingStyle = {
        border: '0.1em',
        borderRadius: '0.5em',
        color: 'transparent',
        fontSize: '1.5rem',
        fontWeight: '600',
        padding: '1%',
        textAlign: 'center'
    };

    return (
        <h1
            id='greeting'
            className='text-2xl font-bold tracking-tight text-gray-900'
            style={greetingStyle}
        >
            {greeting}
        </h1>
    );
}

export default Greeting;