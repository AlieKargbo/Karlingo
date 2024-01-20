import React from 'react';
import { useRef, useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

function M1() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const lag = searchParams.get('lan');
    const [sentences] = useState([
        "In their oral tradition, the Mende describe themselves as being a mixture of two peoples: their original members were hunters and fishers who sparsely populated the area in small peaceful settlements, and their leaders came later, in a recent historical period, bringing with them the arts of war, and also building larger, more permanent villages.",
        "The Mende are patrilineal, patrilocal, and polygamous. The household unit is represented by at least one man and perhaps several of his brothers, with all of their wives and children.",
        "The Mende are generally known as growers of rice and several other crops, practicing crop rotation to protect soil productivity. Coffee, cocoa, and ginger are grown as cash crops, whereas rice, pepper, groundnuts, beniseed (also known as sesame seeds), and palm oil are grown for local consumption.",
        "Much Mende art is in the form of jewelry and carvings. The masks associated with the fraternal and sorority associations of the Marka and the Mende are probably the best-known and finely crafted in the region.",
        "The Mende also produce beautifully woven fabrics which are popular throughout western Africa, and gold and silver necklaces, bracelets, armlets, and earrings."
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
                <>
                {/* <BsArrowLeft className='' size={35} /> */}
                <div className="flex justify-center">
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

export default M1