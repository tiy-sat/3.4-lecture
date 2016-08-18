// Main.js
"use strict";

// jQuery's version of "DOMContentLoaded"
$(function(){
  // All DOM related code can go here
  var $chatMessageSendElement = $("[data-js='chatMessage__send']");
  var $chatMessageMessageElement = $("[data-js='chatMessage__message']");
  var $chatLogElement = $("[data-js='chatLog']");

  $chatMessageSendElement.on("click", function(e){
    e.preventDefault();
    // vanilla js: .value (as property)
    var $messageValue = $chatMessageMessageElement.val();
    addMessage($messageValue, `Guest${(Math.random() * 100).toPrecision(2)}`);
    $chatMessageMessageElement.val("");
  });

  

  function addMessage(messageString, authorString){
    var template = `
      <li class="chatLog__item">
          <h2 class="chatLog__itemUserName">
            ${authorString}
          </h2>
          <p class="chatLog__itemMessage">
            ${messageString}
          </p>
      </li>
    `;
    $chatLogElement.append(template);
  };
});
