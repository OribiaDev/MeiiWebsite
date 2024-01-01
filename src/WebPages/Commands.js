import { useState } from "react";
import CommandBoxGen from '../Components/CommandBoxGen';

const Commands = () => {
    const [commands] = useState([
        {commandName: '/help', filter:"help", id: 1},
        {commandName: '/rah', filter:"rah", id: 2}
    ])

    return ( 
        <div className="CommandsContent">
            <div className="CommandsLayoutContainer">
                <div className="CommandsSectionTitle">Commands</div>
                <CommandBoxGen commands={commands}/>
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
        </div>
     );
}
 
export default Commands;