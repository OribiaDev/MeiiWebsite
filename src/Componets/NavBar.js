const navBar = () => {
    //Scroll
    window.onscroll = function() {
        var head1 = document.getElementById('head1');
        var head2 = document.getElementById('head2');
        var head3 = document.getElementById('head3');
        //Home
        if(window.pageYOffset < 1060){
            //Add ActiveClass
            head1.classList.add("active");
            //Remove Active Classes
            head2.classList.remove("active");
            head3.classList.remove("active");
        }
        //Mei?
        if (window.pageYOffset > 1060) {
            //Add Active
            head2.classList.add("active");
            //Remove Active
            head1.classList.remove("active");
            head3.classList.remove("active");
        }
        if (window.pageYOffset > 2400) {
            //Add Active
            head3.classList.add("active");
            //Remove Active
            head1.classList.remove("active");
            head2.classList.remove("active");
        }
    }
    return ( 
        /* eslint-disable jsx-a11y/anchor-is-valid */
        //Navigation Bar
        <header id="header" class="topnav"> 
            <div class = "HomeNav">
                <a class="active"><b>Meii</b></a>   
            </div>
            <div class="NavLinks">
                <a id="head3" class="" href="#Commands">Commands</a>
                <a id="head2" class="" href="#Meii?">Meii-?</a>
                <a id="head1" class="active" href="#top">Home</a>          
            </div>  
        </header> 
     );
}
 
export default navBar;