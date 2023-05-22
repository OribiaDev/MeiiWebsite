//Packages
import Helmet from 'react-helmet';
import { useEffect } from "react";

//Componets
import AltNavBar from '../Componets/404NavBar';

//Webpage CSS
import four04styles from '../CSS/404.module.css'

// Scroll to Top Function
// eslint-disable-next-line
function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo({
          top:0,
          left:0,
          behavior: "instant"
      });
    }, []);
  
    return null;
  }


const four04 = () => {
    return ( 
        <><ScrollToTopOnMount /><div className="fouro4Content">
            <Helmet>
                <title>404 • Meii</title>
                <meta property="og:title" content="404 • Meii" />
                <meta property="og:description" content="404 Page Not Found" />
                <meta name="description" content="404 Page Not Found" />
                <meta property="og:description" content="404 Page Not Found" />
            </Helmet>
            <AltNavBar />
            <div class={four04styles.bodybubble}>
                <br />
                <div className={four04styles.bubbletitle}>404</div>
                <div className={four04styles.bodybubblecen}>Page Not Found</div>
                <div className={four04styles.num2cen}><i>Are you looking in the right place?</i></div>
                <br />
                <br />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div></>
     );
}
 

export default four04;