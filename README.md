# Restaurant Application

The idea behind this project is to cover some of the most important functionalities used in NextJs creating a serverless Server Side Render (SSR) fully customized to achieve 100% of performance, accessibility and SEO.

![](doc/demo.gif)

## Quick Start

Firstly, clone and install all necessary packages, then start it locally.

```
> git clone https://github.com/gid-master/restaurant-next-app.git

> npm install

> npm run dev
```

Initially the application will work normally because it's using mock data. However, if you want to connect to a real mongoDb database, you need to provide your own connection string.

[Set up your mongoDb Atlas - Getting Started](https://docs.atlas.mongodb.com/getting-started/)

Once you have set up your mongoDb cloud database, you just need to change the environment variable to be able to expose the endpoins, the variable can be found inside <strong>.env</strong> file in the root folder.

```
NEXT_PUBLIC_DATABASE: "mongodb+srv://your-user:<password>@cluster.rhp27.mongodb.net/<dbname>?retryWrites=true&w=majority",
```

You also need to change the attribute that allow you to read data from database or mock files.

```
NEXT_PUBLIC_BACKEND_TARGET=api
```

That's all, now you can also have this serverless project connected to a mongoDb database.

## Application Content

-   [Devices Suport](#devices-support)
-   [NextJs Approaches](#nextjs-approaches)
-   [How to Run](#how-tu-run)
-   [Using Mock](#using-mock)
-   [Using API's](#using-api's)
-   [Application Modules](#application-modules)
-   [Structure & Flow](#structure-&-flow)
-   [Progressive Web Application (PWA)](<#progressive-web-application-(pwa)>)
-   [Firebase Deployment](#firebase-deployment)

## Devices Support

As this is a demo in order to show features of a specific framework, the application is not fully ready to support multiple screens sizes, browsers and devices. However, you can check this repositoty which contains the same application developed for this responsive purpose.

Check out the list of screens that can be used to play around with this demo.

#### Mobile Support Only

-   Iphone 6/7/8
-   Iphone 6/7/8 Plus
-   Iphone X
-   Pixe 2
-   Pixe 2 XL
-   Galax S5
-   Moto G4

#### Browsers

-   Chrome
-   Safari

## NextJs Approaches

NextJs uses React language, however, it offers a bunch of handy features to deal with router, server side render, serverless api's and a lot more.

-   Next Config

    -   Just used to inject a custom service worker

-   Redux

    -   Single source of truth
    -   Break logic down in ducks and example using root state
    -   useDispatch and useSelector hooks
    -   Logic to transform data inside getters
    -   Thunk to create async logic (Effect layer)

-   Axio

    -   Centralize logic using services
    -   Interceptor to handle responses and requests (header token and response status)
    -   Jwt Authentication (cookie authentication)
    -   Handling server issues and redirect to error pages
    -   Axio adapter to intercept http requests and use mock data instead

-   Router

    -   NextJs uses the pages folder to generate its router
    -   All files name initialized with underline were overridden to adapt some logic
    -   Everthing inside api folder represents server endpoint
    -   Subfolder are used to represent router with id parameter (as product page)

-   Pages

    -   No html at all, just used to call the container
    -   Server render logic is implemented here
    -   Call server services and pre render static pages passing the props to children components

-   Components

    -   Container x Presentational components (all logic in one place only)
    -   Encapsulated styles using global variables to keep consistent
    -   Each module in its folder using container component as start point to deal with the entire logic
    -   Props in order to communicate parent with child components
    -   Shared components used across the entire application
    -   useEffect used as watchers, on load and unload hooks
    -   Children to add dynamic content in the component

-   Lifecycle Hook

    -   useEffect using empty array of watchers to execute function just when the component is ready to manipulate DOM elements
    -   useEffect as return to kill events
    -   useEffect using watchers in the array to execute functions based on props changes

-   Utils Format (used as previous deprecated filters)

    -   Image fallback handling img onError
    -   Format currency

-   Utils Storage

    -   Save cart into local storage (can be recovered from offline mode)
    -   Save token authentication in cookie (best practice because doesn't use session)

-   Reactive form

    -   Encapsulate entire logic inside the form (returns only after having a valid data)
    -   React hook form used to design all forms
    -   Yup to validate forms (standard, custom and mixed validations)
    -   Native validations and also custom validations to specific field
    -   Force submit form though parent component (when the submit button is in a different component)

-   PWA

    -   Manifest with main settings for theme, images, orientation and name
    -   Install home screen shortcut (delegating logic to the application)
    -   Service Workers to work with offline data (caching products API to be able to work offline)
    -   Cache assets (server images and local assets)

-   Concepts

    -   getStaticProps to generate static content
    -   getStaticPaths to preload all possible pages called using id
    -   api's folder to create all endpoints
    -   some options like revalite to create pages rendered by the server
    -   Using most of common available hooks
    -   useState to handle reactivity variables
    -   useSelector and useDispatch to interact with store
    -   Typed props and eventds to have components communication
    -   useRef hook, DOM used as ref (call child component functions directly from parent)
    -   Advanced concepts of ES6 (pure javascript)

-   Styles
    -   Scss structure instead of styled component lib
    -   Encapsulated styles
    -   Global typography
    -   Global colors (palette of colors used in the applciaiton)
    -   Consistent paddings and margins across all components
    -   Classnames to merge classes based on conditions

## How to Run

This is a serverless application, you can easily start it following the steps for further settings.

<br/>

Install all necessary packages.

```
npm install
```

<br/>

Initialize the application

```
npm run dev
```

<br/>

Or run in production mode

```
npm run build
npm start
```

## Using Mock

There is a folder called mocks inside the project workspace, and this folder contains files with preset data that simulates the backend responses.

<b>axios-mock-adapter</b> used to intercept http requests and return the mocked data.\
Check out the index.ts file inside the mock folder.

Open the .env file and enable or disable this option whenever you want, just change the <b>NEXT_PUBLIC_BACKEND_TARGET</b> value to mock, after that all data will come from the mock folder.

Keep in mind that once you have changed back the <b>NEXT_PUBLIC_BACKEND_TARGET</b> to use api, then you need to run any of our backend API's in order to get responses.

However, the best part is that you don't need to do anything, it works automatically behind the scenes.

Ps: Clear your checkout storage to avoid product ids issue if you were using API project before.

## Using API's

As this is a serverless application, you just need to set up your own mongoDB database connection string.

Go inside <string>NEXT_PUBLIC_DATABASE</string> and add your connection string.

## Application Modules

The application was split up in different modules, such as:

-   Login

    -   Register a new user
    -   Sign in using you account

-   Error

    -   Not found
    -   Server
    -   Unexpected

-   Account

    -   Logout option
    -   Orders Summary
    -   Order details
    -   Review orders

-   Home

    -   Welcome intro
    -   Suggestions
    -   Special Dishes
    -   Promotions
    -   Shortcut buttons
    -   PWA intercept install button logic

-   Menu

    -   List all products
    -   Search for product name
    -   Filter product by category
    -   Sort dishes for review, price, calories, name or price.

-   Product

    -   Product Details
    -   Ingredients
    -   Reviews summary
    -   Additional items
    -   Comments
    -   Related products
    -   Add to cart

-   Checkout

    -   Double check product added to cart
    -   Edit or remove item form cart
    -   Add payment method
    -   Payment summary
    -   Process payment
    -   Add cart in local storage (can be recovered)

-   Shared
    -   Buttons icons, standard and increment
    -   Layouts for wrappers, container and blocks
    -   Modals using backdrop, bottom sheet and snack bar
    -   Grids with scrollable row or vertical view
    -   Cards that represent a macro view of the product
    -   PWA control to install app and online / offline notification

## Structure & Flow

Short description about how the project folder structure works and how the data and components are connected.

#### Static Pages

Some pages are generated statically during the build projects, such as, the entire home page, menu page and all product pages.\
Account, checkout and login pages are still using the client side to request data to the API or local storage.\
The pages use server services to load the database data during the build, if the API were hosted somewhere else we could fetch it.

#### Pages

Generate routes based on file names inside the pages folder.\
The framework handle the logic to split the code in chuncks.

#### Apis

Generate server endpoints based on files names inside the pages/api folder.

#### Components

Each view imports its container components which handles the entire logic of the specific module.\
The components folder has all modules subfolders, and inside each module subfolder a structure followed by container and presentational components.\
The communication between container and presentational components should be done through props, events and store actions only.

#### Container Components

This component is responsible for dealing with the entire module logic.\
Here is the place where we dispatch events and get data from store, then we pass all information to the presentational components display on the screen.

#### Presentational Components

This component is responsible for showing data only, mostly to keep its logic encapsulated.\
Some presentational components has its own logic, such as, form validation or accordion, however, always using data loaded from container component.

#### Shared Components

This folder has all generic components used across the entire projects, such as, grid, card, wrapper and block layout. So, if you change any details in these components will affect the entire project.

#### Data Flow

As mentioned above, the most critical pages are rendered statically during the build process.\
Home, menu and all products pages are generated and user can access it instantly without request any server information.

everything else goes through the store to manage the application state.\
We simply use the dispatchers to request when some specific data should be processed.

Then inside the container components we use getters to listen to all states, and from there automatically load everything.

We dispatch 2 requests when the application is initialized, after that all dispatches are done inside the containers, and that's how the communication starts.

## Progressive Web Application (PWA)

This application fully supports PWA and we deal with all major functionalities.

The user is able to install the application and receive notification when the application is running offline.\
However, when the application is running offline you can access almost all pages, except the product page that we implemented the fallback logic to notify the user that something went wrong.

In order to get the PWA working properly for this project, we need to customize only a few files.\

-   Manifest
-   Service Workers
-   PWA Controller

#### Manifest

Manifest file is located inside public folder.\
This file is responsible for personalizing your application, predefined settings like theme, icons, name and orientation.

#### Service Workers

NextJs provides a lib that handles and generate the service worker, however, you can still add some logic inside your own service worker that it will be merged with the default one once the application is built.

-   service-worker.js\
    This file located in the root folder uses pretty much the workbox and handle all logic to cache some application content.\
    In addition to caching the applicaiton we also cache server images and the main product request.\
    Then with the product request cached, we are able to have the entire application working offline normally.

#### PWA Controler

The logic to deal with PWA is totally centralized in an unique component located inside components/shared/pwa folder.

This component is responsible for listening to all events and show interactive messages to the user.\
There is no PWA logic outside of this component.

In this component we deal with online / offline messages and also the install application modal.

#### Support

Keep in mind that PWA works only when you build the project and host it somewhere.\
So, you can built it in production mode and then start the application.

```
npm run build
npm start
```

After that you will be able to double check everthing using the devtools / application (manifest, service worker and cache)

## Vercel Deployment

Vercel deployment is the easiest way to server a application for zero cost.\
You can easily sign up Vercel using your account and follow the documentation to create your first project.

Vercel doc: https://vercel.com/docs/platform/deployments

After that you can simply use CLI commands to deploy your project.
