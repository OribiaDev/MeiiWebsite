import { useState } from "react";
import CommandBoxGen from '../Components/CommandBoxGen';

const Commands = () => {
    
    const [filters] = useState([
        {filterName: 'All', filterID:"all", id: 1},
        {filterName: 'Confessions', filterID:"confessions", id: 2},
        {filterName: 'Moderation', filterID:"moderation", id: 3},
        {filterName: 'Fun', filterID:"fun", id: 4},
        {filterName: 'Emotes', filterID:"emotes", id: 5},
        {filterName: 'Utility', filterID:"utility", id: 6}
    ])
    const [commands] = useState([
        {commandName: '/help', filter:"utility", id: 1},
        {commandName: '/rah', filter:"fun", id: 2}
    ])

    return ( 
        <div className="CommandsContent">
            <div className="CommandsLayoutContainer">
                <div className="CommandsSectionTitle">Commands</div>
                <CommandBoxGen commands={commands} filters={filters}/>
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