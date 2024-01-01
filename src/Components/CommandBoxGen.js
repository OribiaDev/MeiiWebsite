import { useState } from "react";

const CommandBoxGen = ({commands, filters}) => {  

    const [selectedCommand, setSelectedCommand] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('all');

    const handleClickCommand = (commandId) => {
        setSelectedCommand(commandId === selectedCommand ? null : commandId);
    };
    const handleClickFilter = (filter) => {
        setSelectedFilter(filter === selectedFilter ? 'all' : filter);
    };

    return ( 
        <div className="CommandBoxContainer">
            <div className="CommandsFilterContainer">
                {filters.map((filter) => (
                    <div className="FilterButton" id={`${filter.filterID === selectedFilter ? "selected" : "" }`} onClick={() => handleClickFilter(filter.filterID)} key={filter.id}>
                        <div className="FilterTitle">{filter.filterName}</div>
                    </div>
                ))}
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