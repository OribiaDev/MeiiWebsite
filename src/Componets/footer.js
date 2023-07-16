//Packages
import { Link } from 'react-router-dom';

const footer = () => {
    const copyrightyear = '2023';
    const version = 'v3.0.0';


    return ( 
        <div className="footer">
            <p> Copyright © {copyrightyear} Oribia. All rights reserved </p>
            <p>{version} | <Link to='/privacy-policy'>Privacy Policy</Link> | <Link to='/terms-of-service'>TOS</Link> | <a href="https://oribia.dev"  target="_blank" rel="noopener noreferrer">Oribia.Dev</a> | <a href="https://discord.meiibot.xyz"  target="_blank" rel="noopener noreferrer">Support Server</a> | <a href="https://discord.com/oauth2/authorize?client_id=1082401009206308945&permissions=2147576838&scope=applications.commands%20bot"  target="_blank" rel="noopener noreferrer">Invite Meii</a></p>
            <br />
        </div>
     );
}
 
export default footer;