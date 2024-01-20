import React from 'react';
import { useRef, useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
// import { BsArrowLeft } from "react-icons/bs";

function K1() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const lag = searchParams.get('lan');
    const [sentences] = useState([
        "The Sierra Leonean Creole or Krio is an English-based creole language that is lingua franca and de facto national language spoken throughout the West African nation of Sierra Leone.",
        "Krio is spoken by 96 percent of the country's population, and it unites the different ethnic groups in the country, especially in their trade and social interaction with each other.",
        "Krio is the primary language of communication among Sierra Leoneans at home and abroad, and has also heavily influenced Sierra Leonean English.",
        "The language is native to the Sierra Leone Creole people, or Krios, a community of about 104,311 descendants of freed slaves from the West Indies, Canada, United States and the British Empire, and is spoken as a second language by millions of other Sierra Leoneans belonging to the country's indigenous tribes.",
        "Krio, along with English, is the official language of Sierra Leone."
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

export default K1