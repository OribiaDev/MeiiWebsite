import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TOS = () => {
    return ( 
        <div className="TOSContainer">
            <Helmet>
                <title>Terms Of Service • Meii</title>
                <meta property="og:title" content="Terms Of Service • Meii" />
                <meta name="description" content="Terms Of Service for Meii." />
                <meta property="og:description" content="Terms Of Service for Meii." />
                <meta property="og:url" content="meiibot.xyz/terms-of-service" />
            </Helmet>
            <div className="TOSBubble">
                <div className="TOSTitle">Terms Of Service</div>
                <div className="TOSSubTitle">Last Updated: 02/07/2024</div>
                <div className="TOSText">
                    <p>
                        <b>Usage Agreement:</b>
                    </p>
                    <p>
                        By inviting the bot and using its features (commands) are you agreeing to
                        the below mentioned Terms of the bot.
                    </p>
                    <br />
                    <p>
                        You acknowledge that you have the priviledge to use the bot freely on any
                        Discord Server (Server) you share with it, that you can invite it to any
                        Server that you have "Manage Server" rights for and that this privilege
                        might get revoked for you, if you're subject of breaking the terms and/or
                        policy of this bot, or the Terms of Service, Privacy Policy and/or
                        Community Guidelines of Discord Inc.
                    </p>
                    <br />
                    <p>
                        Through using the bot it may collect specific data as described in its
                        Policy. The intended usage of this data is for core functionalities of the
                        bot such as command handling, guild-specific settings and the Confession
                        System.
                    </p>
                    <br />
                    <p>
                        <b>Intended Age:</b>
                    </p>
                    <p>
                        The bot may not be used by individuals under the minimal age described in
                        Discord's Terms of Service. Doing so will be seen as a violation of these
                        terms and will result in moderation action.
                    </p>
                    <br />
                    <p>
                        <b>Abusive Use:</b>
                    </p>
                    <p>
                        You may not use the bot, or any of its features (commands) in a abusive
                        way. Including but not limited to, Harrasment, Hate Speech, Threatful
                        And/or Harmful Comments, CSAM, or Violent Extremism. Doing so will be
                        seen as a violation of these terms and will result in moderation action. 
                    </p>
                    <br />
                    <p>
                        <b>Affiliation:</b>
                    </p>
                    <p>
                        The Bot is not affiliated with, supported or made by Discord Inc. Any
                        direct connection to Discord or any of its Trademark objects is purely
                        coincidental. We do not claim to have the copyright ownership of any of
                        Discord's assets, trademarks or other intellectual property.
                    </p>
                    <br />
                    <p>
                        <b>Liability:</b>
                    </p>
                    <p>
                        The owner of the bot may not be made liable for individuals breaking these
                        Terms at any given time. She has faith in the end users being truthfull
                        about their information and not missusing this bot or The Services of
                        Discord Inc in a malicious way.
                    </p>
                    <br />
                    <p>
                        We reserve the right to update these terms at our own discretion, giving
                        you a 1-Week (7 days) period to opt out of these terms if you're not
                        agreeing with the new changes. You may opt out by Removing the bot from
                        any Server you have the rights for.
                    </p>
                    <br />
                    <p>
                        <b>Contact:</b>
                    </p>
                    <p>
                        People may get in contact by adding <i>oribia.dev</i> on Discord, or
                        through the official <Link to="/discord" className='GenericLinkDeco' id="TOSLink">Support Server</Link> of
                        the Bot. Other ways of support may be provided but aren't guaranteed.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default TOS;