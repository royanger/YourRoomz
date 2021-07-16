# YourRoomz

![](app.gif)

**We Help You Create Your Dream Room.**

Finding furniture that complements what you already have is difficult and time-consuming. Give us some details about your current set-up, and we’ll search for items that we think will tie your room together.

## Tech Stack

**Database**

- Postgres database, hosted on Digital Ocean's DB service.

**API**

- Node w/ Express using Prisma and GraphQL for handling queries and mutations, and PassportJs for authentication.

**Frontend App**

- React app deployed on Vercel, using Redux Toolkit for application state and React Query for handling Server state.

## Setup

The database is hosted on Digital Ocean's hosted DB service.

Run `npm install` in each of the following directories.

- /
- /api
- /frontend

## Configuring the application

In /api, change `.env.blank` to `.env`. Fill in the fields with the required information.

`SECRET` - randomly generated string for protecting seesions

`DATABASE_URL` - connection string, including username, password, host, port to your Postgres DB

`GOOGLE`, `TWITTER` and `GITHUB` - the API and secret from auth0 configured Google, Twitter and Github applications

## Starting Application

From the root directory, rung `npm run dev` and it will concurrently start the React application on http://localhost:3000 and the Node API http://localhost:5000/

## Deployment

The application will be built for any push to the GitHub repo on Vercel. Pushes to the 'main' branch will go live automatically, while pushes to other branches will be in preview mode.

This no automated CI/CD process for the API. It is deployed on a VPS on Digital Ocean.

## Tooling Included

### Prisma Client

Prisma ships with its own powerful GUI called Prisma Studio. From the `/api` directory run the following command to start the GUI, and get the local URL to use.

`npx prisma studio`
