import React from 'react';
import { useRef, useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
// import { BsArrowLeft } from "react-icons/bs";

function T1() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const lag = searchParams.get('lan');
    const [sentences] = useState([
        "Temne is a language of the Mel branch of the Niger–Congo language family. During the 15th century, the Temne people were believed to be living in Guinea in the Futa Jallon region.",
        "They fled the region to seek a safer living area as the Fulani invaded, which resulted in them moving to the Sierra Leone region.By the late 16th century the Temne people were trading with the British for their goods, most often guns, cloth, and hardware.",
        "The late 1800s brought about much hardship and change for the Temne people. British invasion and control changed many aspects of traditional life for them.",
        "Railroads and trade routes were developed, which brought in more people and traders from other areas to influence their culture and surroundings.",
        "Towns were created throughout the area so that trading and exports could increase. During the colonial era, the Temne people were also victims of the slave trade in the European colonies."
    ]);
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [showComplete, setShowComplete] = useState(false);

    // Function to handle the "Next" button click
    const showNextSentence = () => {
        if (currentSentenceIndex < sentences.length - 1) {
            setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
        } else {
            setShowComplete(true);
        }
    };
    
    const showNextLevel = () => {
        navigate(-1)
    };
    return (
        <>
            <div className="m-6">
                <h1 className="font-mono text-2xl font-bold">History About {lag}</h1>
            </div>
            {currentSentenceIndex < sentences.length && !showComplete && (
                <><div className="flex justify-center">
                    <div className="bg-slate-50 h-96 w-2/3 rounded-md border-2">
                        <h1 className="font-mono font-semibold tracking-normal">
                            {sentences[currentSentenceIndex]}</h1>
                        {/* <p>{sentences.join(' ')}</p> */}
                    </div>
                </div><div className="bg-gray-50  w-full fixed bottom-0 flex flex-col justify-around  p-4 border-t-4">
                        <div className="flex justify-center">
                            <div className="  flex justify-between ">
                                {/* <Link to="/learn"
                
             className='h-16 w-32 rounded-lg grid content-center justify-center bg-slate-100'
            >
                Exit
            </Link> */}
                                <button className='h-16 w-32 rounded-lg bg-slate-100 ml-10'
                                    onClick={showNextSentence}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div></>
            )}
            {showComplete && <div>
                <div className=" flex items-center p-10 bg-gray-50 justify-center">
                    {/* <h2>You Scored {score} out of {question.length}</h2> */}
                    <button onClick={showNextLevel} className="cursor-pointer bg-transparent border-transparent  text-blue-700 font-semibold py-2 px-4  ml-4 hover:border-blue-500 hover:border rounded font-mono  ">Next Level</button>
                </div>
            </div>}


        </>
    )
}

export default T1