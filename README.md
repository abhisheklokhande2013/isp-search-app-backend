# isp-search-app-backend

## Run below steps to run the this project.

Clone this project
Open Command Prompt
Go to the isp-search-app-backend Project
Run 'npm install' on command prompt
Run 'node server.js' on Command Prompt

## Server will be started on port 8080;

Open browser
Type URL: http://localhost:8080

## Hosted application on heroku server Link - https://search-isp-app.herokuapp.com/

## Technology stack used
Back-end: NodeJS (MVC architecture)
ExpressJS framework
Mongoose library
Database: MonogoDB Atlas

## API's 
1)To list all ISP's
GET: https://search-isp-app.herokuapp.com/api/get/

2)To get ISP by name
GET: https://search-isp-app.herokuapp.com/api/get/<name>

3)To create ISPs
POST: https://search-isp-app.herokuapp.com/api/create
example: 
{
  "name": "Tatasky",
  "lowest_price": 899,
  "rating": 7.8,
  "max_speed": "5GBps",
  "description": "private intrenet in Pune",
  "contact_number": "7896545212",
  "email": "Tatasky@gmail.com",
  "image": "https://sample/image/url/Tatasky.jpg",
  "url": "www.Tatasky.com"
}
