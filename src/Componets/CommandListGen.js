const commandList = ({commands}) => {

    

    return ( 
        <div className="commandList">
            {commands.map((command) => (                
            <><div className="commandbox" key={command.id}>
                <div className="commandtopmargin" />
                <div className="commandtopmargin"></div>
                <p id="commandname">
                    {command.commandName}
                </p>
                <p>{command.commandDesc}</p>
                <div className="commandtopmargin" />
            </div><br /></>
        ))}
        </div>
     );
}
 
export default commandList;