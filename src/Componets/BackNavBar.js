//Packages
import { Link } from 'react-router-dom';

//CSS
import backnavbarstyle from '../CSS/Componets/AltNavBar.module.css';

const BackNavBar = () => {
    return ( 
        /* eslint-disable jsx-a11y/anchor-is-valid */
        //Navigation Bar
        <header id="header" class={backnavbarstyle.topnav}> 
        <div id="head1"></div>
        <div id="head2"></div>
        <div id="head3"></div>
            <div class = {backnavbarstyle.HomeNav}>
                <a class={backnavbarstyle.active}><b>Meii</b></a>   
            </div>
            <div class={backnavbarstyle.NavLinks}>
                <Link to='/'>Back</Link>          
            </div>  
        </header> 
     );
}
 
export default BackNavBar;