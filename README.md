# Co.Lab Project (Name TBD)

This is the mono repo for the project for Pat, Abdul, Olayinka and Roy from #COLAB5.

## Setup

Database will be hosted separately. More details to come.

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

## Tooling Included

### Prisma Client

Prisma ships with its own powerful GUI called Prisma Studio. From the `/api` directory run the following command to start the GUI, and get the local URL to use.

`npx prisma studio`
