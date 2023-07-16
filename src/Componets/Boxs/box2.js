const box2 = () => {
    return ( 
        <div id="HowTo" class="box2">
            <div class = "box2background">
                <br />
                <br />     
                <h1> How to use confessions? </h1>
                <hr />
                <p>In addition to offering a wide range of commands (which can be found further down the page), Meii boasts an exceptional feature that stands out among others: the ability to make confessions.</p>
                <br />
                <h2>Sending a confession</h2>
                <div class="transhr"><hr /></div>
                <p>To submit a confession, message Meii with the word "confess" and follow the prompt and type the precise server name or unique ID (follow <a href="https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-"  target="_blank" rel="noopener noreferrer">this</a> tutorial for obtaining the ID) . Pay attention to spelling, capitalization, fonts, and emojis when providing the server name.</p>
                <br />
                <h2>Setting a confession channel</h2>
                <div class="transhr"><hr /></div>
                <p> To submit a confession, you must set a confession channel using the command <b>/setconfesschannel [#channel]</b>. Meii requires a designated place to send confessions and will refuse to send them otherwise. Ensure Meii has permission to send messages in the channel to post the confessions. </p>
                <br />
                <h2>Setting a logging channel</h2>
                <div class="transhr"><hr /></div>
                <p>Meii is different from other confession bots because it doesn't require payment or voting to log confessions. Once a confession is sent, Meii will post a spoiled version of it in the specified logging channel. Set the confession logging channel with the command <b>/setconfesslogs [#channel]</b>, ensuring that Meii has permission to send messages there.</p>
                <br />
                <br />
            </div>
        </div>
     );
}
 
export default box2;