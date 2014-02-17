// ==UserScript==
// @name        TweetDeck Highlight
// @namespace   http://taras.net
// @description Highlights specified usernames within TweetDeck
// @include     https://tweetdeck.twitter.com/*
// @version     1
// @grant       none
// ==/UserScript==

var users = new Array("tarasyoung", "amadigital");      // Usernames to highlight
var update = 5;                                         // Update interval (in seconds - increase if it slows your browser)

function Refresher()
{
    // Updates items in tweetdeck every 5 seconds
    
    var links = document.getElementsByClassName("link-complex-target");
    
    for ( var i=0; i < links.length; i++ )
    {
        for ( var ii=0; ii < users.length; ii++ )
        {
            if ( links[i].innerHTML == users[ii] )
            {
                // Highlight Twitter handles
                links[i].style.color = "black";
                links[i].style.background = "#ffffaa";
            }
        }
    }

}


if ( window.location.hostname == "tweetdeck.twitter.com" )
{
    // Run on load items
    firstTime();

    // Launch refresh timer
    setInterval( function(){ Refresher() }, update*1000);
}
