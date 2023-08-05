const bodyBubble = () => {
    const isPlaying = true
    return (  
        // Body
        <div class="bodybubble">
            <br /> 
            <br />
            <div class="logoimg">
                <img src="./Img/MeiiLogoRoundedPurpleNewBlack.png" alt="MeiiLogo" width="180px" height="180px" class="center" />
            </div>
            <div class="bubbletitle">Meii</div>
            <p id="Invite"><b><a href="https://discord.com/oauth2/authorize?client_id=1082401009206308945&permissions=2147576838&scope=applications.commands%20bot"  target="_blank" rel="noopener noreferrer">Invite Meii</a></b></p>
            <p id="Server"><b><a href="https://discord.gg/J7QehvdDMq"  target="_blank" rel="noopener noreferrer">Join the Support Server</a></b></p>
            <hr />
            <div class="topembed" id="topapi" style={{ animationPlayState: isPlaying ? "running" : "paused"}}>  
                <div class="topembed">
                    <a href="https://top.gg/bot/1082401009206308945">
                        <img src="https://top.gg/api/widget/1082401009206308945.svg" alt="top.gg embed" class="widget" />
                    </a>
              </div>
            </div>
            <br />
            <br />
            <p><i>Scroll down to see more!</i></p>
            <br />
        </div>
    );
}
 
export default bodyBubble;