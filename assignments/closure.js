// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function init() {
  let git = {};
  alert("Welcome to github setup! Let's start by getting your credentials.");
  function mainloop() {
    git.email = prompt("What is your Email?");
    git.username = prompt("What is your Github Username?");
    git.password = prompt("What is your Github Password?");
    let encrypt = "";
    for (i = 0; i < git.password.length; i++) {
      encrypt += "*";
    }
    if (git.password === "") {
      alert(
        "Smart not to give away your password to a random website! \nYou passed the test."
      );
      // git.password=" ";
    } else
      alert(
        `Oh, so your password is: \n\n${git.password} \n\nThanks for sharing!`
      );
    git.url = `https://github.com/${git.username}`;
    if (
      confirm(
        `Your github account URL should be:\n\n ${git.url}\n\nIs that correct?`
      ) !== true
    ) {
      git.url = prompt("What is the correct URL for your github account?");
      alert(
        `Okay great, we have saved your github account URL as:\n ${git.url}`
      );
    }
    if (confirm("Would you like to visit your site now?")) {
      location.assign(git.url);
      alert("Redirecting you now!");
      return false;
    } else {
      if (
        confirm(
          `Okay, let's make sure we have all of your info.\n\n\n Email: ${
            git.email
          }\n\n Username: ${git.username}\n\n Password: ${encrypt}\n\n URL: ${
            git.url
          }\n\n Is this information correct?`
        )
      ) {
        return true;
      } else {
        alert("Let's start over!");
        mainloop();
      }
    }
    return true;
  }

  function gitinit() {
    let item = prompt(`What did you forget already?`).toLowerCase();
    if (item == "password" && git.password.length === 0) {
      alert(
        "You never trusted us with your password, but your mom did. \n\nLike we'd be willing to betray her trust, nice try!"
      );
    } else if (git[item] === undefined) {
      alert(`${item} doesn't exist!`);
    } else {
      alert(`Your ${item} is ${git[item]}\n
    Write it down, silly!`);
    }
    if (
      confirm(
        "Anything else you forgot?\n\n**WARNING**\nHope you wrote everything down, there is no turning back from here as you will exit the current scope once you hit 'cancel'."
      )
    ) {
      gitinit();
    }
    return true;
  }
  if (mainloop()) {
    return gitinit();
  }
  return true;
}
document.getElementById("start").onclick = function() {
  if (init()) {
    scope();
  }
};
function scope() {
  let scopeItem = prompt("What do you need help remembering?");
  alert(
    `I'm sorry, I cannot help you find your ${scopeItem} because it is undefined, you have already left the scope you were in and due to closure, I can no longer help you with your github credentials. I told you to write them down, but no one ever listens to me!`
  );
  if (
    confirm(
      "Do you want to reload the page and start over again with a new github so you can 'scope' it out?"
    )
  ) {
    location.reload;
  }
}
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
