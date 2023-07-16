//Packages
import Helmet from 'react-helmet';

//Componets
import BodyBubble from '../Componets/BodyBubble';
import NavBar from '../Componets/NavBar';
import Box1 from "../Componets/Boxs/box1";
import Box2 from '../Componets/Boxs/box2';
import Box3 from '../Componets/Boxs/box3'

const Home = () => {
    return (  
        <><Helmet>
            <title>Meii</title>
            <meta property="og:title" content="Meii" />
            <meta name="description" content="Homepage for the Discord bot Meii" />
            <meta property="og:description" content="Homepage for the Discord bot Meii" />
        </Helmet><><NavBar /><body id="MeiiMain" class="body">
            {/* Body Bubble */}
            <BodyBubble />
            <Box1 />
            <br />
            <br />
            <Box2 />
            <br />
            <br />
            <Box3 />
            <br />
            <br />
        </body></></>
    );
}
 
export default Home;