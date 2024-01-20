import React from 'react';
import { useRef, useState, useEffect } from 'react'
import { tdata } from './data'
import { Link, useLocation, useSearchParams, useNavigate } from "react-router-dom"
function T2() {
    console.log(tdata)
    const navigate = useNavigate();
    let [index, setIndex] = useState(0)
    let [question, setQuestion] = useState(tdata[index])
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);

    let option_array = [Option1, Option2, Option3];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1)
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans - 1].current.classList.add("correct")
            }
        }

    }

    const next = () => {
        if (lock === true) {
            if (index == tdata.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(tdata[index]);
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                return null
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(tdata[0]);
        setScore(0);
        setLock(false)
        setResult(false)
    }

    const noClick = (e) => {
        e.stopPropagation()
    }
    const showNextLevel = () => {
        navigate(-1)
    };
    return (
        <>
            {result ? <></> : <>
                <div className="flex justify-center mt-8">
                    {/* <h2>Which one is {quest} </h2> */}
                    <div className=" w-6/12 text-base md:text-2xl font-bold">
                        <h2>{index + 1}. {question.question}</h2>
                    </div>

                </div>
                <div className="w-full flex justify-center mt-2 ">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
                        <div className="bg-slate-50 h-56 rounded-md border-2 border-b-4" ref={Option1} onClick={(e) => { checkAns(e, 1) }}>
                            {/* <div className=" sm:h-28 sm:w-12 "> */}
                            <span className="text-lg pl-4 pt-6">1</span>

                            <div className="flex justify-center  font-semibold mt-24" onClick={noClick}>{question.option1}
                            </div>

                            {/* </div> */}
                        </div>
                        <div className="bg-slate-50 h-56  rounded-md border-2 border-b-4" ref={Option2} onClick={(e) => { checkAns(e, 2) }}>
                            <span className="text-lg pl-4 pt-6" >2</span>
                            <div className="flex justify-center font-semibold mt-24" onClick={noClick}>{question.option2}</div>
                        </div>
                        <div className="bg-slate-50 h-56 w-48 rounded-md border-2 border-b-4" ref={Option3} onClick={(e) => { checkAns(e, 3) }}>
                            <span className="text-lg pl-4 pt-6">3</span>
                            <div className="flex justify-center font-semibold mt-24" onClick={noClick}>{question.option3}</div>
                        </div>
                    </div>
                </div>
            </>}
            {result ? <>
                <div className="h-screen flex items-center p-10 bg-gray-50 justify-center">
                    <h2>You Scored {score} out of {tdata.length}</h2>
                    <button onClick={reset} className="cursor-pointer bg-transparent border-transparent  text-blue-700 font-semibold py-2 px-4  ml-4 hover:border-blue-500 hover:border rounded font-mono  ">Reset</button>
                </div>
            </> : <></>}

            <div className="bg-gray-50  w-full fixed bottom-0 flex flex-col justify-around  p-4 border-t-4">
                <div className="flex justify-center">
                    <div className="  flex justify-between ">
                        <button 
                            onClick={showNextLevel} className='h-16 w-32 rounded-lg grid content-center justify-center bg-slate-100'
                        >
                            Exit
                        </button>
                        <button className='h-16 w-32 rounded-lg bg-slate-100 ml-10'
                            onClick={next}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default T2