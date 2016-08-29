# Rock-Paper-Scissors-Lizard-Spock_Node
An SPA containing an expanded rock paper scissors game that competes against the computer (written in  Node.js)

## Setup & install
```
$ git clone git@github.com:Alex-Swann/Rock-Paper-Scissors-Lizard-Spock_Node.git
$ npm install
$ npm run dev
$ open localhost:4000
```
### To run tests
```
$ npm test
```

## What has been learnt for this project & What I would have liked to have time to implement

- It took about a day to get used to the setup of webpack with babel.

- This was a very important exercise for me as it covered a lot of new concepts I haven't touched upon before. These included using Babel and Webpack, and coding in ES6. Furthermore learning React and understanding how it is broken up into separate components and the idea of state was certainly all very new to me.

- I found a SASS styled RPS template using jQuery on CodePen which I then effectively manually transpiled into React components. I found this was a great opportunity to understand how certain jQuery functions could be duplicated in vanilla Javascript which in turn could then be used with React.

- Watching with webpack is brilliant as it feels like a super fast way of seeing what you've just done update in the browser almost instantly.

- As I was totally new to React, I had to initially spike a lot of code in order to understand it. Due to this, when setting up my tests, it became apparent that the possible structure of my code inhibited enzyme's ability to locate the buttons on the page. I setup additional tests I would have liked to get working but I commented them out due to this. If I had more time I would have started again and then written out the bulk of my JSX components through the proper TDD way of red-green-refactor. Thus allowing further tests to be carried out and to ensure the code I had was potentially better structured.

- It would be great to implement Redux into this project to potentially make my code cleaner and make it easier to manipulate the state of my components. I plan in the coming weeks to potentially go over this again but using a React-Redux setup.

- I would have liked to redirect to a different route using React's router to display the result of each game rather than a standard JS alert.

- I would have liked to reset the state of all my components when starting a new game rather than reloading the page. They both equate to the same thing but the latter feels cleaner and more efficient. When I rebuild this with Redux this should be easier to achieve.

- I would have liked to have time to adjust the style of the RPS page to mimic the layout of Clearscore's website thus giving the impression it might have been built using a potential personalised frontend toolkit. Additionally it would have been nice to rewrite all my SASS styling following BEM. 
