//Packages
import { Link } from 'react-router-dom';

//CSS
import four04navbarstyle from '../CSS/Componets/AltNavBar.module.css';

const fouro4NavBar = () => {
    return ( 
        /* eslint-disable jsx-a11y/anchor-is-valid */
        //Navigation Bar
        <header id="header" class={four04navbarstyle.topnav}> 
        <div id="head1"></div>
        <div id="head2"></div>
        <div id="head3"></div>
            <div class = {four04navbarstyle.HomeNav}>
                <a class={four04navbarstyle.active}><b>Meii</b></a>   
            </div>
            <div class={four04navbarstyle.NavLinks}>
                <Link to='/'>Home</Link>        
            </div>  
        </header> 
     );
}
 
export default fouro4NavBar;