import React, { useState, useRef, useEffect } from 'react'
import MyPages from './pages'
import MySocials from './socials'
import { FaBars, FaTimes} from 'react-icons/fa'


const MyNavbar = () => {
    const [section] = useState(MyPages)
    const [end] = useState(MySocials)
    const [myButton, setMyButton] = useState(false)
    const parentNav = useRef(null)
    
    const navbar = useRef(null)
useEffect(()=>{
    // console.log(navbar.current.style.background = "red")
    if(myButton)
        return navbar.current.style.display = "flex"
    
    else if(!myButton)
        return navbar.current.style.display = "none"
      
})

const handleClick = () => {
    setMyButton(!myButton)
    
}
 
    return (
   
      
        <article className="nav-bar" ref={parentNav} >
            <h1>My Navbar</h1>
            <div className="toggleBtns" onClick={handleClick}>{myButton ? <div id="times"><FaTimes /></div> : <div id="bars"><FaBars /> </div>}</div>
            <div className="section" ref={navbar}>
            {section.map((elem)=>{
              const { page} = elem
              return (
                  <p>{page}</p>
              )  
            })}
            </div>
            <div className="nav-end">
                {end.map((val)=>{
                    const { icon } = val
                    return (
                        <p>{icon}</p>
                    )
                })}
            </div>
            
        </article>
    
    )
           
        }

export default MyNavbar
