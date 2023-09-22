## Project Description

"What's for Dinner" is an open-source web application designed for mobile use that suggests recipes based on the ingredients you have on hand. With this platform, you can search for recipes using specific ingredients, add or remove ingredients to see different recipe suggestions, and save your favorite recipes for future use. This app also includes advanced search filters such as dietary restrictions, meal type, and cooking time/difficulty to help find the perfect recipe for users at all levels.

## Instructions to Building and Testing the Project

### Building

**Front-end**

1. first run `cd front-end` to navigate to front-end folder
2. then run `npm install` to install the front-end dependencies
3. create a `.env` file in the front-end directory with the following content:
```
PORT=3001
REACT_APP_SERVER=http://localhost:3000
```

**Back-end**
1. first run `cd back-end` to navigate to back-end folder
2. then run `npm install` to install the back-end dependencies
3. create a `.env` file in the back-end directory with the following content:
```
MEAL_DB_API_KEY=9973533
JWT_SECRET=whats.for.dinner
JWT_EXP_DAYS=60
MONGODB_URI=mongodb+srv://dinner:4s7K0Z2cQJS0LrL0@cluster0.ufkozym.mongodb.net/test?retryWrites=true&w=majority
SPOONACULAR_API_KEY=86b8ac3348974b5ab495921e201be0de
EMAIL_USERNAME=whatsfordinneragile@gmail.com
EMAIL_PASSWORD=nuzvkswprpbdvozh
CORS_ORIGIN=http://localhost:3001
```
**I have provided the following credentials. However, for real projects, please visit "https://www.themealdb.com/" to create an account and replace <MEAL_DB_API_KEY> with your own API key. Similarly, replace <MONGODB_URI> and <SPOONACULAR_API_KEY> with your respective API keys.**

### Running
1. If you are testing either the front-end or back-end, you can run `npm start` in the corresponding folder.
2. If you are running both the front-end and back-end together, run `npm start` separately in each folder and view the app on http://localhost:3001.
3. If you are using a Windows PC, please run `npm run start-pc` instead of `npm start` for the front-end.

## Deployed front-end
To view the front-end code live on the web, go to https://monkfish-app-fjlpj.ondigitalocean.app/


## Additional Resources

[README.md](https://github.com/agiledev-students-spring-2023/final-project-what-s-for-dinner/blob/master/README.md) - an overview of this project<br>

### Important Note

This project is still in development, and I appreciate your patience and feedback as I work to improve the platform. If you have any questions or suggestions, please don't hesitate to reach out via the project's GitHub page.
