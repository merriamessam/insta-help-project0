<<<<<<< HEAD
<<<<<<< HEAD
<h1>Medico App</h1>

> **Thanks to Team HAB59 and Judges for coming up with this hackathon and providing us a platform to exibit our skills**

```
This is under development phase
Complete practical(Production) build is still under development
```

![](assets/images/medico1.PNG)

### An all in one digital platform which bridges the gap between the patients and physicians for better care of your health during these days under monitorization from doctors. 

### [Watch demo video here 📺](https://www.youtube.com/watch?v=Yz6TE88WfwU&feature=youtu.be)

### [You can get the .apk file and all details here](https://drive.google.com/drive/folders/1Q2daO1J7mMj3tiDGCBfPZAnaxjqr1Sqk?usp=sharing)

## 📌 Inspiration

COVID-19 has been here all across the globe since the past 7-8 months. Currently we have more than 20 million cases across the globe. With a vaccine still a long way away, the only solution is to stay home and work from home to be safe. Government has also informed us not to visit hospitals until an emergency occurs.

However, because of the absence of a smooth medical facilities during these lockdown days, many lives are facing problems. That's where the idea of Medico App came into existence.

## Idea

Medico App is an innovative step towards solving the problems of people who face difficulties to get medical facilities and monitor their health. 

## 🎯 What it does

Medico, where people can get monitored by the doctor and consult for better health. From rural areas with poor internet connection also, they can use Medico to get monitored by the docotrs easily. 

1. We have developed a progressive web app for both doctors and patients where they can register and request doctors to monitor them on daily basis. The web app is installable to the homepage and gives push notification which makes it unique to use.

2. We have also developed an android app for patients to easily give their daily data and monitor themselves by giving reminders and doctors can view the condition of patient and prescribe him according to that.

3. Next, coming to the features which are provided by Medico. Let's start with the patient side.

**Patient**
* The dashboard consists of all the graphs and information about his medicines through which he can monitor himself in a better way. For example the graph of his Blood Pressure, Diabetes, pulse rate and information about his medicines.

* Coming to android app, the dashboard gives an additional feature for patient to give reminder when to take medicines and all.

* Next, we have a doctors panel where patient can go through doctors profile and request for appointment according to his requirements.

* Upon confirmation from doctor, we have one prescription panel where patient can view his doctors who will monitor them and go to the prescription page and tell the doctors about his problem and get prescribed by them.

* In the prescription panel we are also giving feature to appoint for video call. Patient can request for a video call and can view his scheduled event details once the doctor scheduled it.

* Next, we give a diet panel where patient can get a healthy diet recommendation based on his local food for that particular day.

* Patient can also view its nearest hospital based on his location and get its details like ambulance number for emergency use.

**Doctor**
* Upon login, doctor will get his dashboard where he get the patients whom he was monitoring. He can view each patient graphs on daily basis and monitor him.

* Next, prescription panel is available where he can prescribe his patient upon monitoring his data on daily basis.

* Doctor can schedule his video appointment through Meet using Google calendar when requested by the patient.

4. Coming to rural uneducated people, we have developed a chatbot which can guide them to use the app. For minor consultation like common dieseases, chatbot can also provide you with the medicines details and the doctors details for easy use.

5. IVR hotline number facilites is also avialable for those who are located in the places with unstable internet connection and cannot use web or android app. They can get monitored by the doctor through hotline number facilitites.

## Screenshots

![](assets/images/medico3.PNG)
![](assets/images/medico8.PNG)
![](assets/images/medico11.PNG)
![](assets/images/medico16.PNG)
![](assets/images/android4.jpeg)

## How we built it 🏁 Technology Stack

**Frontend**
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React-Bootstrap](https://react-bootstrap.github.io/)

**Android**
* [ReactNative](https://reactnative.dev/)

**Backend**
* [Nodejs](https://nodejs.org/en/)
* [mongoDB](https://www.mongodb.com/)
* [nodemailer](https://nodemailer.com/about/)
* [express](https://expressjs.com/)

**Other**

* [Mapquest](https://www.mapquest.com/)
* [Here API](https://developer.here.com/)
* [Google-Map-API](https://developers.google.com/maps/documentation)
* [Stripe](https://stripe.com/in)
* [RazorPay](https://razorpay.com/)
* [IBMwatson-Assistant](https://www.ibm.com/cloud/watson-assistant/)
* [PWA](https://web.dev/progressive-web-apps/)
* [Helmet](https://helmetjs.github.io/)

## Challenges we ran into

* We need to make a robust architecture of database for such a big platform and organising events for both patient and doctor via virtual prescription.

* We need to search for many packages capable of supporting the application in maintaining the application.

* For tracking user's location and searching nearest hospitals  we need to search for appropriate packages and availability for APKs.

* Planning for integrating an online payment system for ordering needs and delivering commodities.

* Gathering data about local facilities for building the necessary modules.

* We need to think of a flexible and user friendly UI for smooth interaction between doctor and patient.

## Prerequisties

**For backend and web app**
* node and npm installed

**For android app** 
* node, npm and react native cli installed 

## Installation & Setup 

A step by step series of examples that tell you how to get a development env running

**To start the server**
Go to root of the project, run

```
npm install
```

```
npm start
```

Server will be running on localhost

**To start the web app**
Go to root of the project, run

```
cd client
```

```
npm install
```

```
npm start
```

A react app will be running on your browser.

**To start the android app**
On your android device enable usb debugging connect usb to you PC.

Go to root of the project, run

```
cd mobileapp
```

```
npm install
```

```
npm start
```
A metro server will run and then,
An android app will be running on your android device.

**set up env file**

In the root directory

```
MONGODB_URI = ''
api_key = ''

WEB_PUSH_CONTACT = ''
PUBLIC_VAPID_KEY = ''
PRIVATE_VAPID_KEY = ''

```

Inside the client

```
REACT_APP_PUBLIC_VAPID_KEY= ''
REACT_APP_LINK = 'http://localhost:3001'

```

## Team Members
* Sourav Kunda            
* Ananya Aprameya
* Saiprava Raut
* Shubhadarshie Nanda

 **Made with ❤ Team techNoids**
=======
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
>>>>>>> 356d8ab4be063620908bf4abc1296da6b8a9a8b3
=======
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
>>>>>>> 46a7b04aa1eecd6bfbf0d678d689c8827371a2d5
