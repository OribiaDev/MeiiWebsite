//Vars
var version = 'v1.3.0'
var copyrightyear = '2023'

//On Load
window.onload = function() {
  console.log('Page Loaded')

  //Footer
  // Create the footer embed
  const embed = `
  <p> Copyright © ${copyrightyear} Oribia. All rights reserved </p>
  <p>${version} | <a href="https://meiibot.xyz/privacy-policy/"  target="_blank" rel="noopener noreferrer">Privacy Policy</a> | <a href="https://meiibot.xyz/terms-of-service/"  target="_blank" rel="noopener noreferrer">TOS</a> | <a href="https://oribia.dev"  target="_blank" rel="noopener noreferrer">Oribia.Dev</a> | <a href="https://discord.meiibot.xyz"  target="_blank" rel="noopener noreferrer">Support Server</a> | <a href="https://discord.com/oauth2/authorize?client_id=1082401009206308945&permissions=2147576838&scope=applications.commands%20bot"  target="_blank" rel="noopener noreferrer">Invite Meii</a></p>
  <br>
  `;
// Add the embed to the page
$('#footer').html(embed);
}




//Scroll
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

