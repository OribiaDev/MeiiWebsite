import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import NavBarItem from './NavBarItem';

const NavBar = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    const [commandActive, setCommandActive] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    let buttonRef = useRef(); 

    useEffect(() => {
        if (currentPath === "/commands") {
            setCommandActive(true);
        } else {
            setCommandActive(false);
        }
    }, [currentPath]);  

    useEffect(() => {
        let handler = (e)=>{
            if(!buttonRef.current.contains(e.target)){
                setDropdownOpen(false)
            }
        };
        document.addEventListener("mouseup", handler)
    })



    return ( 
        <div className="navBar">
            <div className='navBarContainer'>
                <Link to='/' className="NavLinkHomeExtra">
                    <div className="navHome">
                        <div className="navHomeImg">
                            <img src="./img/Logos/MeiiRoundedPurpleBorder.png" alt="MeiiLogo" width="32px" height="32px"/>
                        </div>
                        <div className="navHomeMainText">
                            Meii
                        </div>
                    </div>
                </Link>
                <div className="navButtonContainer">
                    <div className='navButtonButtons'>
                        <Link to='/commands' className="NavLinkExtra">
                            <div className="navButton" id={`${commandActive ? 'clicked' : ''}`}>
                                    Commands
                            </div>              
                        </Link>  
                        <div className="navButton" id={`menuButton_${dropdownOpen? 'active' : 'inactive'}`} onClick={() => setDropdownOpen(!dropdownOpen)} ref={buttonRef}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdownIcon" id={`dropdownIcon_${dropdownOpen? 'active' : 'inactive'}`}><path d="M7 14.5l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                    </div>
                    <div className={`dropDownMenu ${dropdownOpen? 'active' : 'inactive'}`}>
                            <div className='navBarSpacerTop' />
                            <NavBarItem Type={"Internal"} IconURL={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="MenuIcon" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg>} itemText="Add Me" URL={"/invite"}></NavBarItem>
                            <NavBarItem Type={"Internal"} IconURL={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="MenuIcon" viewBox="0 0 16 16"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/></svg>} itemText="Support Server" URL={"/discord"}></NavBarItem>
                            <NavBarItem Type={"External"} IconURL={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="MenuIcon" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>} itemText="Creator" URL={"https://oribia.dev"}></NavBarItem>
                            <div className='DropdownHR'><hr /> </div>
                            <NavBarItem Type={"Internal"} IconURL={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="MenuIcon" viewBox="0 0 16 16"><path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/></svg>} itemText="Terms of Service" URL={'/terms-of-service'}></NavBarItem>
                            <NavBarItem Type={"Internal"} IconURL={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="MenuIcon" viewBox="0 0 16 16"><path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/></svg>} itemText="Privacy Policy" URL={"/privacy-policy"}></NavBarItem>
                            <div className='navBarSpacerBottom' />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;