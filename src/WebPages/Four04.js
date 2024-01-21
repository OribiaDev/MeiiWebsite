import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Four04 = () => {
    return ( 
        <div className="Four04Container">
            <Helmet>
                <title>404 • Meii</title>
                <meta property="og:title" content="404 • Meii" />
                <meta name="description" content="404 Page Not Found" />
                <meta property="og:description" content="404 Page Not Found" />
                <meta property="og:url" content="meiibot.xyz/404" />
            </Helmet>
            <div className="Four04Bubble">
                <div className="Four04TextContainer">
                    <div className="Four04Title">404</div>
                    <div className="Four04SubTitle">Page Not Found</div>
                    <div className="Four04SubSubTitle">Are you looking in the right place?</div>
                </div>
                <div className="Four04ButtonContainer">
                    <Link to="/" className='GenericLinkDeco'>
                        <div className="infoButton" id="InfoMainButton">
                            Back to Homepage
                        </div>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Four04;