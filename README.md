# Sportsee

## 1. General informations

In this documentation, we will see method to launch the project easily.

## 2. Project

### 2.1 Prerequisites

* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) 

### 2.2 Launching the project

### 2.2.1 Backend

* Fork this [repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
* Clone it on your computer
* The `yarn` command will allow you to install the dependencies 
* The `yarn dev` command will allow you to run the micro API on the port 3000

### 2.2.2 Frontend

* Fork this repository
* Clone it on your computer
* Go to the "frontend" folder
* The `npm install` command will allow you to install the dependencies 
* The `PORT=8000 npm run start` command will allow you to run the frontend part of the project on the port 8000

### Cautions

By default when your run the application, you are redirect to the URL localhost:8000 and it makes an error,
this error is normal, you have to add `user/${userId}` to the link, in this micro API there are only two users :
one with the id 12 and the other with the id 18. You are free to watch their different performances by changing the number in the URL.  






