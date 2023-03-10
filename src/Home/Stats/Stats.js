import React, {useState, useEffect, useRef} from 'react'

import './Stats.css'

import {useSpring, animated} from'react-spring'


function Number({n}){
    const {number} = useSpring({
        from:{number:0},
        number:n,
        delay:100,
        config:{
            mass:1,
            trension:20,
            friction:14
        }
    });
    
    return (
        <animated.div>
            {number.to((n) => n.toFixed(0))}
        </animated.div>
    )

}
function Stats() {
    const [isVisible, setisVisible] = useState();
    const myRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            const entry = entries[0];
            setisVisible(entry.isIntersecting);
        })
        observer.observe(myRef.current);
    }, [])
  return (
    <div className='ss'>
        <div className='items '>
            <div ref={myRef} className='item1'>
            {isVisible &&
            
            <Number n={16}/>
            
            }</div>
            
            <div className='border'>
                 
            
            </div>
            
            <p>
                Years of Experience
            </p>
        </div>
        <div className='items '>
        <div ref={myRef} className='item1'>
            {isVisible &&
            
            <Number n={400}/>
            
            }
            
            </div>
            <div className='border'>
                 
                 </div>
            <p>
                Plots
            </p>
        </div>
        <div className='items '>
        <div ref={myRef} className='item1'>
            {isVisible &&
            
            <Number n={5}/>
            
            }
            
            </div>
            <div className='border'>
                 
                 </div>
            <p>
                Ongoing Projects
            </p>
        </div>
    </div>
  )
}

export default Stats