import "./page.css"
import { useRef, useState, useEffect } from 'react'

import { Link, useLocation, useSearchParams } from "react-router-dom"
import K1 from './courses/krio/k1'
import K2 from './courses/krio/k2'
import T1 from './courses/temne/t1'
import T2 from './courses/temne/t2'
import M1 from './courses/mende/m1'
import M2 from './courses/mende/m2'
export default function Lesson() {
    const [searchParams] = useSearchParams();
    const lag = searchParams.get('lan');
    const lev = searchParams.get('level');
    const lng = useLocation();
    console.log(lng)


    //function fo() {
    //useEffect(() => {
        if (lag === 'krio' && lev === 'l1') {
            return <K1 />
        }
        else if (lag === 'krio' && lev === 'l2') {
            return <K2 />
            
        }
        else if (lag === 'temne' && lev === 'l1') {
            return <T1 />

        } else if (lag === 'temne' && lev === 'l2') {
            return <T2 />
            
        } else if (lag === 'mende' && lev === 'l1') {
            return <M1 />
 
        } else if (lag === 'mende' && lev === 'l2') {
            return <M2 />
 
        }

        else {
            //     console.log('true')
        }
        // fetch('./data.json')
        // .then(response => response.json())
        // .then(data => setInfo(data[index]))
        // .catch(err => console.log(err))
        // console.log(data)
    //}, []);
    //}

    
}