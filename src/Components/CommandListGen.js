import { useEffect, useRef, useState } from "react";

const CommandListGen = ({commands}) => {  

    const [selectedCommand, setSelectedCommand] = useState(null);

    const handleClick = (commandId) => {
        setSelectedCommand(commandId === selectedCommand ? null : commandId);
      };


      //To add filter system, do the same thing with useState with filter buttons, type of filter goes into use state and the map then checks if the filter matches command.filter, if it does its active (same as dropdown), if not hidden

    return ( 
        <div>
        {commands.map((command) => (
            <div className="CommandBubble" key={command.id} onClick={() => handleClick(command.id)}>
                <div className="CommandBubbleTitle">{command.commandName}</div>
                <div>{`${command.id === selectedCommand ? "selected" : "Not Selected" }`}</div>
            </div>   
        ))}
        </div>
     );
}
 
export default CommandListGen;