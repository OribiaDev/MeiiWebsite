import { Link } from 'react-router-dom';

const Four04 = () => {
    return ( 
        <div className="Four04Container">
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