/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';

inquirer
  .prompt([
     console.log("Enter the url you want to generate QR of"),
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Error encountered");
    } else {
      console.log("Generated QR code:")
    }
  });