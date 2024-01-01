import { useState } from "react";
import CommandListGen from '../Components/CommandListGen';

const Commands = () => {
    const [commands] = useState([
        {commandName: '/help', see:"helpSee", set:"helpSet", id: 1},
        {commandName: '/rah', see:"rahSee", set:"rahSet", id: 2}
    ])
    return ( 
        <div className="CommandsContent">
            <div className="CommandsLayoutContainer">
                <div className="CommandsSectionTitle">Commands</div>
                <div className="CommandListContainer">
                    {/* <div className="CommandBubble">
                        <div className="CBubbleContentContainer">
                            <div className="CommandBubbleTitle">/Rahh</div>
                            <div className="CommandBubbleDesc">The Rahh Command does very good things</div>   
                        </div>
                    </div>  
                    <div className="CommandBubble">
                        <div className="CBubbleContentContainer">
                            <div className="CommandBubbleTitle">/Rahh</div>
                            <div className="CommandBubbleDesc">The Rahh Command does very good things</div>   
                        </div>
                    </div>   */}

                    <CommandListGen commands={commands}/>
                </div>
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