import React from 'react';
import StartModal from './startModal';

const Overlay = ({display, setDisplay, text}) => {

    const overlay = {
        height: '100%',
        width: '100%',
        backgroundColor:'black',
        zIndex: 500,
        position: 'fixed',
        display: display
    }
 
    return  (
        <>
            <div id='overlay' style={overlay}>
                <StartModal display={display} setDisplay={setDisplay} text={text}/>
            </div>
        </>
    ) 
}

export default Overlay;