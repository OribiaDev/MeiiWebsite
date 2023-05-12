const box2 = () => {
    return ( 
        <div id="HowTo" class="box2">
            <div class = "box2background">
                <br />
                <br />     
                <h1> How to use confessions? </h1>
                <hr />
                <p>Although Meii has tons of commands (which you can find further down the page), one of the main features is confessions.</p>
                <br />
                <h2>Sending a confession</h2>
                <div class="transhr"><hr /></div>
                <p>To submit a confession, message Meii the word "confess" and type the exact name of the server you want to confess too (spelling, capitalization, fonts, and emojis, etc. all matter). You can also use the unique ID of that server; To get a server ID follow <a href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-"  target="_blank" rel="noopener noreferrer">this</a> tutorial. </p>
                <br />
                <h2>Setting a confession channel</h2>
                <div class="transhr"><hr /></div>
                <p>If you try to submit a confession without first setting the confession channel, Meii will refuse to send it as it needs a place to send them. To set a confession channel use the command <b>/setconfesschannel [#channel]</b> (replacing [#channel] with the channel you wish the confessions to go). Make sure Meii has the permission to send messages in this channel so it can post the confessions. </p>
                <br />
                <h2>Setting a confession logging channel</h2>
                <div class="transhr"><hr /></div>
                <p>Unlike most other readily available confession bots, Meii allows you to log confessions without first needing to pay or to vote for the bot. Whenever a confession gets sent to the server, Meii will post a spoiled version of the confession with the person  who sent it in the specified channel. To set a confession logging channel use the command <b>/setconfesslogs [#channel]</b> (replacing [#channel] with the channel you wish the confession logs to go). Make sure Meii has the permission to send messages in this channel so it can post the confession logs.</p>
                <br />
            </div>
        </div>
     );
}
 
export default box2;