import React from 'react';
import { useState } from 'react';

const App = () => {
    let clickFunction = (e) => {
        console.log(e);
    },
    userName = "Serg",
    LastName = "Qiwqe",
    userData = [
        "Front end",
        "Yes",
    ];   

  return (
        <>
            <div className="App">
                {userName || LastName ? <h1>{userName} {LastName}</h1> : ''}

                {Boolean(userData.length) && 
                    <>
                        <ul>
                            {userData.map( (item, index) => (
                                <li onClick={clickFunction} key={index}>{item}</li>
                            ))}
                        </ul>
                    </>
                }
                
            </div>
        </>
    );
}

export default App;
