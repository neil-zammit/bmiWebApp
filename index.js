// Import express, node JS Path module
const express = require('express');
const path = require('path');

// Initialize a var with express
const app = express();

// Body Parser
// Handle form submissions
app.use(express.urlencoded({ extended: false }));

// Create a var for PORT
// Acquire port number from environment var OR assign port 5000
const PORT = process.env.PORT || 5000;

// Set public folder as static folder in our server
app.use(express.static(path.join(__dirname, 'public')));

// Listen on the port to run the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Calculate BMI
app.post('/', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  let bmi = weight / Math.pow(height, 2);

  // toFixed() Method converts a number into a string, keeping only two decimals

  if (bmi < 18.5) {
    res.send(`Your bmi is ${bmi.toFixed(2)}. You are underweight`);
  } else if (bmi <= 24.9) {
    res.send(`Your bmi is ${bmi.toFixed(2)}. You are of normal weight.`);
  } else if (bmi <= 29.9) {
    res.send(`Your bmi is ${bmi.toFixed(2)}. You are overweight.`);
  } else if (bmi > 30) {
    res.send(`Your bmi is ${bmi.toFixed(2)}. You are obese.`);
  } else {
    res.send('Invalid inputs. Try again.');
  }
});
