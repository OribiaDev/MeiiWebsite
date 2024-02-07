import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PrivacyP = () => {
    return ( 
        <div className="PrivacyPContainer">
            <Helmet>
                <title>Privacy Policy • Meii</title>
                <meta property="og:title" content="Privacy Policy • Meii" />
                <meta name="description" content="Privacy Policy for Meii." />
                <meta property="og:description" content="Privacy Policy for Meii." />
                <meta property="og:url" content="meiibot.xyz/privacy-policy" />
            </Helmet>
            <div className="PrivacyPBubble">
                <div className="PrivacyPTitle">Privacy Policy</div>
                <div className="PrivacyPSubTitle">Last Updated: 01/06/2024</div>
                <div className="PrivacyPText">
                    <p>
                        <b>Collection of Data:</b>
                    </p>
                    <p>
                        The use of this application ("Bot") in a server requires the collection of
                        some specific user and server data ("Data"). The Data collected includes, but is not
                        limited to Discord server and channel ID values, and data collected for confession moderation purposes.
                        Use of the Bot is considered an agreement to the terms of this Policy.
                    </p>
                    <br />
                    <p>
                        <b>Access to Data:</b>
                    </p>
                    <p>
                        Access to Data is only permitted to Bot's developers, and only in the
                        scope required for the development, moderation, testing, and implementation of
                        features for the Bot. Data is not sold, provided to, or shared with any third
                        party, except where required by law or a Terms of Service agreement. You
                        can view the data upon request by adding <i>oribia.dev</i> on Discord or on our <Link to="/discord" className='GenericLinkDeco' id="PrivacyPLink">Support Server</Link>.
                    </p>
                    <br />
                    <p>
                        <b>Storage of Data:</b>
                    </p>
                    <p>
                        Data is stored in a MongoDB database. The database is secured to prevent
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
                        Data that is associated with a server is unrecoverably deleted when the Bot leaves that server or the
                        data deletion command is used. Data that is saved for confession moderation purposes is deleted after
                        30 days of the confession command being used. The bot owners assume no liability for the unintentional
                        or intentional deletion of data. 
                    </p>
                    <br />
                    <p>
                        <b>User Rights:</b>
                    </p>
                    <p>
                        At any time, you have the right to request to view and remove the Data pertaining to
                        your Discord server or account. You may submit a request through the Discord <Link to="/discord" className='GenericLinkDeco' id="PrivacyPLink">Support Server</Link> or
                        by adding <i>oribia.dev</i> on Discord. You have the right to request the removal of any relevant Data.
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
                        If you have any questions or you're concerned about what data might be being
                        stored from your server or account contact <i>oribia.dev</i> on Discord or join the <Link to="/discord" className='GenericLinkDeco' id="PrivacyPLink">Support Server</Link>
                        . For more information check the Discord Terms Of Service.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default PrivacyP;