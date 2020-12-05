import React from "react";
import Project from "./../Project";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Projects() {
    return(
        <div>
            <Header />
            <Project
            title="StarPlannr Web App"
            screenshot="./assets/StarPlannr.PNG"
            alt="screenshot of starplannr web app"
            description="A web app to provide star enthusiasts weather information given a date and location. This web
            app will give the user a rating on if it's a good night to view stars."
            github="https://github.com/mslee001/StarPlannr"
            link="https://mslee001.github.io/StarPlannr/"
            />
            <Project
            title="Weather Dashboard"
            screenshot="./assets/weather-dash2.PNG"
            alt="screenshot of weather dashboard web app"
            description="A weather web app using the OpenWeatherAPI to display weather data for cities the user
            searches for."
            github="https://github.com/mslee001/Weather-Dashboard"
            link="https://mslee001.github.io/Weather-Dashboard/"
            />
            <Project
            title="Devour Burgers! Web App"
            screenshot="./assets/burger-app.PNG"
            alt="screenshot of burger web app"
            description="Simple application using node express, mysql, ORM and handlebars. The user is able to add a
            burger to the database and the burger displays on the webpage in a 'Menu!' list. The user is
            given an option to 'DEVOUR' the burger which then moves it to the other side of the webpage
            in a new list. The user also has the option to 'Remake the Burger' which places the burger
            back on the menu."
            github="https://github.com/mslee001/burger-logger"
            link="https://tranquil-lowlands-26889.herokuapp.com/"
            />
            <Project
            title="Copy Cat E-Commerce Site"
            screenshot="./assets/Copycats.PNG"
            alt="screenshot of Copycats web app"
            description="This is a mock e-commerce site using Node, Express Server, MySQL, and Sequelize"
            github="https://github.com/pabloivanjuarez/project_deux"
            link="http://project-deux.herokuapp.com/"
            />
            <Footer />
        </div>
    );
}

export default Projects;