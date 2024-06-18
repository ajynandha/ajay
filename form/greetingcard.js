let greeting = '{"greetText": "Wishing that the new year will bring joy, love, peace, and happines to you.","from": "Rahul","to": "Varunkumar"}';
let Greeting = JSON.parse(greeting);
let fromGreet = document.getElementById('fromGreet');
fromGreet.textContent = "From: " + Greeting.from;
let toGreet = document.getElementById('toGreet');
toGreet.textContent = "To: " + Greeting.to;
let greetText = document.getElementById('greetText');
greetText.textContent = Greeting.greetText; 