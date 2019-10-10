import React, { useState } from 'react';

const Light = () => {

    // system state
    const [system, setSystem] = useState(0);
    // lights states
    const [red, setRed] = useState('redOff mx-auto');
    const [yellow, setYellow] = useState('yellowOff mx-auto');
    const [green, setGreen] = useState('greenOff mx-auto');
    // system button states
    const [btnON, setBtnON] = useState('system mx-auto text-center');
    const [btnOFF, setBtnOFF] = useState('system mx-auto text-center');
    const [btnAUTO, setBtnAUTO] = useState('system mx-auto text-center');

 
    const systemLight = (e) => {
        let sys = e.target.id;
        if (sys === 'on') {setSystem(1); setBtnON('systemOn mx-auto text-center'); setBtnOFF('system mx-auto text-center'); setBtnAUTO('system mx-auto text-center')};
        if (sys === 'off') {setSystem(0); setRed('redOff mx-auto'); setYellow('yellowOff mx-auto'); setGreen('greenOff mx-auto') };
        if (sys === 'auto') setSystem(2);
    }
    
    const clickLight = (e) => {
        let clicked = e.target.id;
        if (clicked === 'red' && system === 1) {setRed('red mx-auto'); setYellow('yellowOff mx-auto'); setGreen('greenOff mx-auto') };
        if (clicked === 'yellow' && system === 1) {setRed('redOff mx-auto'); setYellow('yellow mx-auto'); setGreen('greenOff mx-auto') };
        if (clicked === 'green' && system === 1) {setRed('redOff mx-auto'); setYellow('yellowOff mx-auto'); setGreen('green mx-auto') };
        console.log(clicked);
    } 

    return (
        <>
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="mainLight">
                    <div id="red" onClick={clickLight} className={red}></div>
                    <div id="yellow" onClick={clickLight} className={yellow}></div>
                    <div id="green" onClick={clickLight} className={green}></div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className='stickLight'></div>
                <div className="walkLight text-center d-flex align-items-center justify-content-center">WALK</div>
            </div>
            <div className="autoBox">
                <div id="on" onClick={systemLight} className={btnON}>ON</div>
                <div id="off" onClick={systemLight} className={btnOFF}>OFF</div>
                <div id="auto" onClick={systemLight} className={btnAUTO}>AUTO</div>
            </div>
        </div>
        </>
    );
};

export default Light;