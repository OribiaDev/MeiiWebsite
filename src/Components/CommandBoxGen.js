import { useState } from "react";

const CommandBoxGen = ({commands}) => {  

    const [selectedCommand, setSelectedCommand] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('all');


    const handleClickCommand = (commandId) => {
        setSelectedCommand(commandId === selectedCommand ? null : commandId);
    };

    const handleClickFilter = (filter) => {
        setSelectedFilter(filter === selectedFilter ? 'all' : filter);
        console.log(selectedFilter)
    };



      //To add filter system, do the same thing with useState with filter buttons, type of filter goes into use state and the map then checks if the filter matches command.filter, if it does its active (same as dropdown), if not hidden
    return ( 
        <div className="CommandBoxContainer">
            <div className="CommandsFilterContainer"> 
                <div className="FilterButton" onClick={() => handleClickFilter('all')}>
                    <div className="FilterTitle">All</div>
                </div>
                <div className="FilterButton" onClick={() => handleClickFilter('help')}>
                    <div className="FilterTitle">Help</div>
                </div>
                <div className="FilterButton" onClick={() => handleClickFilter('rah')}>
                    <div className="FilterTitle">Rahh</div>
                </div>
            </div>
            <div className="CommandListContainer">
                {commands.map((command) => (
                    <div className="CommandBubble" id={`${command.filter === selectedFilter || 'all' === selectedFilter ? "" : "inactive" }`} key={command.id} onClick={() => handleClickCommand(command.id)}>
                        <div className="CommandBubbleTitle">{command.commandName}</div>
                        <div>{`${command.id === selectedCommand ? "selected" : "Not Selected" }`}</div>
                    </div>   
                ))}
            </div>    
        </div>
     );
}
 
export default CommandBoxGen;