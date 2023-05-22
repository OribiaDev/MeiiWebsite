//Packages
import Helmet from 'react-helmet';
import { useEffect } from "react";

//Componets
import AltNavBar from '../Componets/BackNavBar';

//Webpage CSS
import ppstyles from '../CSS/pp.module.css'



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

const privacyPolicy = () => {
    return (
        <><ScrollToTopOnMount /><div className="pp-content">
            <Helmet>
                <title>Privacy Policy • Meii</title>
                <meta property="og:title" content="Privacy Policy • Meii" />
                <meta property="og:description" content="Privacy Policy for the Discord bot Meii" />
                <meta name="description" content="Privacy Policy for the Discord bot Meii" />
            </Helmet>
            <AltNavBar />
            <div className={ppstyles.bodybubble}>
                <br />
                <div className={ppstyles.bubbletitle}>Privacy Policy</div>
                <div className={ppstyles.bodybubblecen}>Last Updated: 4/10/2023</div>
                <br />
                <br />
                <p>
                    The use of this application ("Bot") in a server requires the collection of
                    some specific user data ("Data"). The Data collected includes, but is not
                    limited to Discord server, and channel ID values. Use of the Bot is
                    considered an agreement to the terms of this Policy.
                </p>
                <br />
                <p>
                    <b>Access to Data:</b>
                </p>
                <p>
                    Access to Data is only permitted to Bot's developers, and only in the
                    scope required for the development, testing, and implementation of
                    features for Bot. Data is not sold, provided to, or shared with any third
                    party, except where required by law or a Terms of Service agreement. You
                    can view the data upon request from ᴏʀɪʙɪᴀ#8440 or our{" "}
                    <a
                        href="https://discord.meiibot.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        support server
                    </a>
                    .
                </p>
                <br />
                <p>
                    <b>Storage of Data:</b>
                </p>
                <p>
                    Data is stored in a MySQL database. The database is secured to prevent
                    external access, however no guarantee is provided and the Bot owners
                    assume no liability for the unintentional or malicious breach of Data. In
                    the event of an unauthorised Data access, users will be notified through
                    the Discord client application.
                </p>
                <br />
                <p>
                    <b>Deletion of Data:</b>
                </p>
                <p>
                    Data is unrecoverably deleted when the Bot leaves a server, the Bot owners
                    assume no liability for the unintentional or intentional automatic
                    deletion of Data.
                </p>
                <br />
                <p>
                    <b>User Rights:</b>
                </p>
                <p>
                    At any time, you have the right to request to view the Data pertaining to
                    your Discord account. You may submit a request through the Discord{" "}
                    <a
                        href="https://discord.meiibot.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Support Server
                    </a>
                    . You have the right to request the removal of relevant Data.
                </p>
                <br />
                <p>
                    <b>Underage Users:</b>
                </p>
                <p>
                    The use of the Bot is not permitted for minors under the age of 13, or
                    under the age of legal consent for their country. This is in compliance
                    with the Discord Terms of Service. No information will be knowingly stored
                    from an underage user. If it is found out that a user is underage we will
                    take all necessary action to delete the stored data.
                </p>
                <br />
                <p>
                    <b>Questions</b>:
                </p>
                <p>
                    If you have any questions or are concerned about what data might be being
                    stored from your account contact ᴏʀɪʙɪᴀ#8440 or the{" "}
                    <a
                        href="https://discord.meiibot.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Support Server
                    </a>
                    . For more information check the Discord Terms Of Service.
                </p>
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
        </div></>
     );
}
 
export default privacyPolicy;