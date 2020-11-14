# Weather app

## Table of Contents

- [Getting Started](#Getting-Started)

  - [Setup Prerequisites](#Setup-Prerequisites)

  - [Start the App](#Start-the-App)

- [Tech Stack](#Tech-Stack)

## Getting Started

These instructions will help you setup a local development instance of the app.

### Setup prerequisites

- You will require Node.js and MongoDB installed on your machine.
- For an example of how to fill `/client/.env` see `/client/.env.example`

#### install dependencies

`npm install`

#### Client Setup

- Install server dependencies:
  `cd client`
  `npm install`

#### Server & Database Setup

- Install server dependencies:
  `cd ../server`
  `npm install`

- Seed database:
  `npm run seed`
- Once the script has run kill the server by pressting CTRL+C on Windows or CMD+C on Mac.

### Start the App

- In the client directory run `npm run dev`
- In the server directory run `npm run dev`
- Navigate to http://localhost:1234 in your browser

## Tech Stack

- [Javascript](https://www.javascript.com/)
- [React](https://reactjs.org/)
- [Materialize](https://materializecss.com/)
- [Parcel](https://parceljs.org/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [OpenWeather API](https://openweathermap.org)

## Design & implementation

My approach to this challenge was to use the OpenWeather API to get weather data about cities and then present the data in a stylish and easy to read way. The city will be represented by a card component and two drop down selectors (one for date and one for time) can be used to get the weather for that city on a given day at a given time.

To start I made a server using Node.js and Express that would handle all queries to the database. Then I made a MongoDB database with only one collection that would store user data.

Each user document has fields for email, password and savedCities. At the moment there is no functionality to make new users. If I were to spend more time on this project I would implement authorisation with either Passport or Auth0 to eliminate the need for a password field altogether. At the moment there is no authorisation implemented as there is only a test user.

When you first load the page the client sends a request to the server to get any cities that the user may have previously saved from the database. If there are any saved cities the client then queries the OpenWeather API for data on each of these cities and presents them on a card.
The data recieved in the response is then sorted into 5 or 6 arrays representing each day over the next five sets of 24 hours. With the data sorted it is then fed into the card component which calls a custom hook to make two dropdown selectors to allow the user to chose the date and time that they want to see the weather prediction for in that city.

When you search for a new city on the client a request is sent to the OpenWeather API and a card is presented in the same way as above.

Following a search the user can then choose to save the city by clicking a newly rendered button. If the user clicks this button. First the client checks if the user has already saved this city. If they have an error message is presented to the user. If not a request is sent to the sever which saves the city into the saved cities field of the users mongoDB document.

If I were to spend more time on this challenge I would

- As stated above implement some real authorisation system
- Add the option to remove a city from your saved cities
- Improve the styling of the app. At the moment I think it feels a bit plain, and I would like the cards to change colour depending on the time of day, as the icons from the OpenWeather API do.
