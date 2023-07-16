import { useState } from "react";
import CommandList from '../CommandListGen';

const Box3 = () => {
    const [commands] = useState([
        {commandName: '/help', commandDesc: "A full list of Meii's commands.", id: 1},
        {commandName: '/define', commandDesc: "Gets the definition of a word", id: 2},
        {commandName: '/binary', commandDesc: "Encodes/Decodes binary text", id: 3},
        {commandName: '/kiss', commandDesc: "Sends a gif emote of you kissing the mentioned person.", id: 4},
        {commandName: '/hug', commandDesc: "Sends a gif emote of you hugging the mentioned person.", id: 5},
        {commandName: '/cuddle', commandDesc: "Sends a gif emote of you cuddling the mentioned person.", id: 6},
        {commandName: '/slap', commandDesc: "Sends a gif emote of you slapping the mentioned person.", id: 7},
        {commandName: '/kill', commandDesc: "Sends a gif emote of you killing the mentioned person.", id: 8},
        {commandName: '/yeet', commandDesc: "Sends a gif emote of you yeeting the mentioned person.", id: 9},
        {commandName: '/bonk', commandDesc: "Sends a gif emote of you bonking the mentioned person.", id: 10},
        {commandName: '/poke', commandDesc: "Sends a gif emote of you poking the mentioned person.", id: 11},
        {commandName: '/handhold', commandDesc: "Sends a gif emote of you holding hands with the mentioned person.", id: 12},
        {commandName: '/setconfesschannel', commandDesc: "Sets the channel where confessions are sent.", id: 13},
        {commandName: '/setconfesslogs', commandDesc: "Sets the channel where confession logs are sent.", id: 14},
        {commandName: '/ban', commandDesc: "Bans mentioned person from the server.", id: 15},
        {commandName: '/kick', commandDesc: "Kicks mentioned person from the server.", id: 16},
        {commandName: '/confessban', commandDesc: "Bans mentioned person from confessions.", id: 17},
        {commandName: '/confessunban', commandDesc: "Unbans mentioned person from confessions.", id: 18},
        {commandName: '/animal', commandDesc: "Shows a random animal image", id: 19},
        {commandName: '/joke', commandDesc: "Sends a random (corny) joke", id: 20},
        {commandName: '/dice', commandDesc: "Rolls a 6 sided die.", id: 21},
        {commandName: '/coinflip', commandDesc: "Flips a coin.", id: 22},
        {commandName: '/info', commandDesc: "Shows info about a user or server", id: 23},
        {commandName: '/ping', commandDesc: "Shows Meii's ping.", id: 24},
        {commandName: '/uptime', commandDesc: "Shows Meii's Uptime", id: 25},
        {commandName: '/stats', commandDesc: "Shows the stats of Meii.", id: 26},
        {commandName: '/support', commandDesc: "Sends the invite for Meii's support Discord server.", id: 27}
    ])
    return ( 
        <div id="Commands" className="box3">
        <div className="box3background">         
            <br />
            <br />
            <h1> Commands </h1>
            <hr />
            <br />
            <br />
            <CommandList commands={commands}/>
            <br />
            <p>
            <i>
                * For a full list of commands, use the command <b>/help</b>
            </i>
            </p>
            <br />
            <br />
        </div>
        </div>
     );
}
 
export default Box3;