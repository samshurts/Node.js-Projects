# Node.js Projects

## Web Application & Security Projects
- Express Web App
- NGS
- Vulnerable App vs. Attacker App

## Express Web App
A sample web application for the fictional Globomantics corporation, built using Node.js, Express and EJS. Created as part of a learning exercise on developing web apps using these technologies according to the MVC (model-view-controller) software design pattern. The web app makes use of Express routers and services, keeps track of user sessions and relies on MongoDB to store session information.

## NGS
This repository contains the results of working through a series of learning modules on developing modern web applications based on Node.js. The various sections of the project cover a wide range of topics including:
- Refresher on basic JavaScript
- Modern JavaScript functions and new features
- Using the npm package manager
- Async functions and design patterns for web development
- Express framework and EJS templating language
- Hooking into OS functions and using environment variables

## Vulnerable App vs. Attacker App
A combination of two web applications, one purposefully designed to be vulnerable to attack and the other to exploit those vulnerabilities. This was a security development learning project meant to demonstrate code that is vulnerable to cross-site scripting (XSS), cross-site request forgery (CSRF), and clickjacking, and how to patch out those issues by writing more secure code as well as using external tools such as content security policy (CSP).

This project is no longer being updated by the original creator and thus was in quite a broken state when I started. To overcome this, I had to figure out and lock in the precise versions of all the old dependencies that the apps depend upon to run at all. I also had to research how changes in how modern browsers handle security have impacted the abilities of the attacker application, and how to get around those changes to demonstrate the vulnerabilities as originally intended.
