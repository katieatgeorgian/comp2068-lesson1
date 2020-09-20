//Debugging and Troubleshooting
/* first example
try {
  const age = 35;
  //debugger; //everything's going to stop - debugger going to be invoked - dev tools in source, but then need to go to console
  age = 41;
} catch (error) {
  console.log("Todd you idiot!");
} finally {
  //no matter what happens, execute this code here - don't use finally a lot
  console.log("Todd you're still an idiot");
}
*/
//Try/Catch - want app to execute and don't want errors thrown to user - show message to user instead - only give user what they need to know - dev need more info

try {
  console.log("Hey I still output"); //still going to output - console logs will always output unless they are the error - but variables functions will rollback
  let age = 35;
  //debugger; //everything's going to stop - debugger going to be invoked - dev tools in source, but then need to go to console
  if (age > 25) {
    throw new Error("Todd you're so old");
  }
  console.log("I'm still here");
} catch (error) {
  console.log(error.message);
  console.log("Todd you idiot!");
} finally {
  //no matter what happens, execute this code here - don't use finally a lot
  console.log("Todd you're still an idiot");
}
