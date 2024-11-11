import './Button.css';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useState } from 'react';


const Button2 = () => {
    const { width, height } = useWindowSize()
    const [ isExploding, setIsExploding ] = useState(false)

    return (
        <>
            {isExploding ? <Confetti width={width} height={height}/> : null}
            <div onClick={() => setIsExploding(!isExploding)} className="button-container">
                {isExploding ? <h1 style={{ margin: 0 }}>Konfetti av :/</h1> : <h1 style={{ margin: 0 }}>Konfetti på :D</h1>}
            </div>
        </>
    );
}

export default Button2;