import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return ( 
        <div className="HomeContent">
            <Helmet>
                <title>Meii</title>
                <meta property="og:title" content="Meii" />
                <meta name="description" content="The best free Discord confession bot." />
                <meta property="og:description" content="The best free Discord confession bot." />
                <meta property="og:url" content="meiibot.xyz" />
            </Helmet>
            <div className="LayoutContainer">
                <div className="InfoBubble">
                    <div className="InfoColLeft">
                        <div className="InfoContent">
                                <div className="AltBoldText">MEII</div>
                                <div className="MainText">Confessions Reimagined.</div>
                                <div className="AltText">Meii is a free and easy-to-use bot, where you can log and send anonymous confessions.</div>
                                <div className="infoButtonContainer">
                                    <Link to="/invite" className='GenericLinkDeco'>
                                        <div className="infoButton" id="InfoMainButton">
                                            Invite me
                                        </div>
                                    </Link>
                                    <Link to="/commands" className='GenericLinkDeco'>
                                        <div className="infoButton" id="InfoAltButton">
                                            Commands
                                        </div>
                                    </Link>
                                </div>
                        </div>
                    </div>
                    <div className="InfoColRight">
                        <div className="InfoImg">
                            <img rel="prefetch" src="./img/Logos/MeiiRoundedPurpleBorder.png" alt="MeiiLogo" width="150px" height="150px"/>
                        </div>
                    </div>
                </div>
                <div className='InfoDividerHR'><hr /></div>
                <div className='FeatureTitleContainer'>
                    <div className='FeatureTitleText'>Features:</div>
                </div>
                <div className='FeatureBubbleContainer'>
                    <div className="FeatureBubble" id='first'>
                        <div className="FeatureColLeft">
                            <div className='FTextContainer'>
                                <div className='FTitle' id='LongBoi'>Anonymous Confessions</div>
                                <div className='FSubTitle'>Send free and simple anonymous confessions to your server</div>
                            </div>
                        </div>
                        <div className="FeatureColRight">
                            <div className='FPic'>
                                <img rel="prefetch" src="./img/FeatureScreenshots/Cscreenshot.png" alt="Meii Confession Screenshot" width="270px" height="130px"/>  
                            </div>
                        </div>
                    </div>
                    <div className="FeatureBubble" id='second'>
                        <div className="FeatureColLeft">
                            <div className='FPic' id='CL'>
                                <img rel="prefetch" src="./img/FeatureScreenshots/CLscreenshot.png" alt="Meii Confession Logging Screenshot" width="280px" height="168px"/>  
                            </div>
                        </div>
                        <div className="FeatureColRight">
                            <div className='FTextContainer' id='CL'>
                                <div className='FTitle'>Free Logging</div>
                                <div className='FSubTitle'>Log those confessions completely free without pay or vote walls</div>
                            </div>
                        </div>
                    </div>
                    <div className="FeatureBubble" id='third'>
                        <div className="FeatureColLeft">
                            <div className='FTextContainer' id='GE'>
                                <div className='FTitle'>GIF Emotes</div>
                                <div className='FSubTitle'>Send GIF emotes to your friends <i>or maybe that special someone~</i></div>
                            </div>
                        </div>
                        <div className="FeatureColRight">
                            <div className='FPic' id='GE'>
                                <img rel="prefetch" src="./img/FeatureScreenshots/GEscreenshot.png" alt="Meii GIF Emote Screenshot" width="280px" height="210px"/>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className='EndOfPageSpacer' />
            </div>
        </div>
     );
}
 
export default Home;