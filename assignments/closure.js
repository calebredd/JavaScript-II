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
    }
    if (confirm("Would you like to visit your site now?")) {
      location.assign(git.url);
      alert("Redirecting you now!");
      return false;
    } else {
      if (
        confirm(
          `Okay, let make sure we have all of your info.\n\n\n Email: ${
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

  gitinit = () => {
    let item = prompt(`What did you forget already?`).toLowerCase();
    alert(`Your ${item} is ${git[item]}\n
    Write it down, silly!`);
    if (confirm("Anything else you forgot?")) {
      gitinit();
    }
      return true;
  };
  if (mainloop()) {
    return gitinit();
  }
  return true;
}
if (init()) {
  scope();
}
scope = () => {
  let item = prompt("What do you need help remembering?");
  alert(
    `I'm sorry, I cannot help you find your ${item} because it is ${
      git[item]
    }, you have already left the scope you were in and due to closure, I can no longer help you with your github credentials. I told you to write them down, but no one ever listens to me!`
  );
  if (
    confirm(
      "Do you want to reload the page and start over again with a new github so you can scope it out?"
    )
  ) {
    location.reload;
  }
};
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
