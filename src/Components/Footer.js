import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footerContentContainer">
                <div className="leftContentContainer">
                    <div className="logoImg">
                        <img rel="prefetch" src="./img/Logos/MeiiRoundedPurpleBorder.png" alt="MeiiLogo" width="40px" height="40px"/>
                    </div>  
                    <div className="logoText">
                        The best free and simple confession Discord bot
                    </div>
                    <div className="copyrightContent">
                        Copyright © 2024 Oribia. All rights reserved
                    </div>
                </div>
                <div className="LCContainer">
                    <div className="linkColumn" id='Space'>
                        <div className="LCTitle">
                            Meii
                        </div>
                        <div className="LCLinkContainer">
                            <div className='LCLinkDiv'><Link to="/terms-of-service" id='LC' className='GenericLinkDeco'>Terms Of Service</Link></div>
                            <div className='LCLinkDiv'><Link to="/privacy-policy" id='LC'className='GenericLinkDeco'>Privacy Policy</Link></div>
                            <div className='LCLinkDiv'><Link to="/discord" id='LC'className='GenericLinkDeco'>Support Server</Link></div>
                        </div>
                    </div>
                    <div className="linkColumn">
                        <div className="LCTitle">
                            Developer
                        </div>
                        <div className="LCLinkContainer">
                            <div className='LCLinkDiv'><Link to="https://oribia.dev" id='LC' className='GenericLinkDeco'>Portfolio</Link></div>
                            <div className='LCLinkDiv'><Link to="https://github.com/OribiaDev/" id='LC'className='GenericLinkDeco'>Github</Link></div>
                            <div className='LCLinkDiv'><Link to='mailto:support@oribia.dev' id='LC'className='GenericLinkDeco'>Contact</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;