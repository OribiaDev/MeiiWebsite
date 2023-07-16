const navBar = () => {
    return ( 
        /* eslint-disable jsx-a11y/anchor-is-valid */
        //Navigation Bar
        <header id="header" class="topnav"> 
            <div class = "HomeNav">
                <a class="active"><b>Meii</b></a>   
            </div>
            <div class="NavLinks">
                <a id="head3" class="" href="#Commands">Commands</a>
                <a id="head2" class="" href="#Meii?">Meii?</a>
                <a id="head1" class="active" href="#top">Home</a>          
            </div>  
        </header> 
     );
}
 
export default navBar;