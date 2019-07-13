//Slideshow of Activities;
//activity update in every 1 sec;
//Make setInterval declarative with React Hooks

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const SlideShow = () => {
    
    const [activity, setActivity] = useState();
    const callBored = () => {
        axios
         .get('https://www.boredapi.com/api/activity')
         .then(res => setActivity(res.data.activity));
    }; 
    


    const useInterval = (callback, delay) => {
        const savedCallback = useRef();
        
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
    };

    useInterval(() => {
        callBored();
    }, 1500); // get activity

    

    return (<span>{activity}</span>)
};

export default SlideShow;

