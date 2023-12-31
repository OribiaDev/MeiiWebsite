import { Link } from 'react-router-dom';

const NavBarItem = ({itemText, URL, Type, IconURL}) => {
    if(Type==="Internal"){
        return ( 
            <div className="NavBarItem">
                <Link to={URL} className='NavLinkExtra'>
                    <div className='NavBarInfoContainer'>
                        <div className='NavBarIconList'>
                            {IconURL}
                        </div>
                        <div className="NavBarTitle">
                            {itemText}
                        </div> 
                    </div>
                </Link>
            </div>
            );
    }
    if(Type==="External"){
        return ( 
            <div className="NavBarItem">
                <a href={URL}  target="_blank" rel="noopener noreferrer" className='NavLinkExtra'>
                    <div className='NavBarInfoContainer'>
                        <div className='NavBarIconList'>
                            {IconURL}
                        </div>
                        <div className="NavBarTitle">
                            {itemText}
                        </div> 
                    </div>
                </a>
            </div>
        );
    }
}
 
export default NavBarItem;
