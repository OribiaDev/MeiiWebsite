const commandList = ({commands}) => {
    return ( 
        <div className="commandList">
            {commands.map((command) => (                
            <><div className="commandbox" key={command.id}>
                <br />
                <p>
                    <b>{command.commandName}</b>
                </p>
                <p>{command.commandDesc}</p>
                <br />
            </div><br /></>
        ))}
        </div>
     );
}
 
export default commandList;