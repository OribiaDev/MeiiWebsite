window.onscroll = function() {
    var head1 = document.getElementById('head1');
    var head2 = document.getElementById('head2');
    var head3 = document.getElementById('head3');
    //Home
    if(window.pageYOffset > 800){
        //Add ActiveClass
        head1.classList.add("active");
        //Remove Active Classes
        head2.classList.remove("active");
        head3.classList.remove("active");
    }
    //Mei?
    if (window.pageYOffset > 1050) {
        //Add Active
        head2.classList.add("active");
        //Remove Active
        head1.classList.remove("active");
        head3.classList.remove("active");
    }
    if (window.pageYOffset > 2200) {
        //Add Active
        head3.classList.add("active");
        //Remove Active
        head1.classList.remove("active");
        head2.classList.remove("active");
    }
}

