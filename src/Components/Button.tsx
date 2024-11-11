import './Button.css';
import ConfettiExplosion from 'react-confetti-explosion';
import { useEffect, useState } from 'react';

const Button = () => {
    const [isExploding, setIsExploding] = useState(false);

    const onButtonClick = () => {
        setIsExploding(true);
        setTimeout(() => {
            setIsExploding(false);
        }, 1500);
    };

    useEffect(() => {
        return () => {
            setIsExploding(false);
        };
    }, []);


    return (
        <>
            {isExploding && <ConfettiExplosion />}
            <div onClick={onButtonClick} className="button-container">
                <h1 style={{ margin: 0 }}>Click me!</h1>
            </div>
        </>
    );
}

export default Button;