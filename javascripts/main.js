// Main.js
"use strict";

// jQuery's version of "DOMContentLoaded"
$(function(){
  // All DOM related code can go here
  var $chatMessageSendElement = $("[data-js='chatMessage__send']");
  var $chatMessageMessageElement = $("[data-js='chatMessage__message']");
  var $chatLogElement = $("[data-js='chatLog']");

  $chatLogElement.on("click", "[data-js='chatLog__itemDelete']", function(e){
    // This is child of item
    // Tried .closest() it did not traverse up the tree correctly
    // .parent() successfully
    var $chatLogItemToDelete = $(this).parent();
    console.log(this, $chatLogItemToDelete);
    $chatLogItemToDelete.remove();
  });

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
          <mark class="chatLog__itemDelete"
                data-js="chatLog__itemDelete">
            x
          </mark>
          <p class="chatLog__itemMessage">
            ${messageString}
          </p>
      </li>
    `;
    $chatLogElement.append(template);
  };
});
