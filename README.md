# Ask Me Anything

This application allows users to register themselves and their pets in a simple and efficient manner. It's built using modern technologies, including GraphQL, TypeORM, and Apollo Server.

## Project Structure

The project is divided into two main folders:

- `configs` - Contains the eslint and prettier configs.
- `src` - Contains the application, which handles the entities, resolvers and apollo server.

## Features

- Register a new user.
- Get all users registered.
- Register and link a new pet with his owner.
- Get all pets from a user.

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/Possanii/graphQL-TypeORM.git
cd graphQL-TypeORM
```

### Install dependencies

Navigate to the folder and install dependencies:

```bash
npm install
```

## Environment Variables

Before running the application, you need to configure your environment variables.

1. Rename the `.env.example` file to `.env`:

   ```bash
   mv .env.example .env
   ```

2. Open the `.env` file and fill in the required environment variables with your specific values.

Make sure to set the necessary values for the application to function correctly, such as database connection strings and other configuration settings.

## Running the Application

Make sure that you have started your docker container:

```bash
npm run docker-compose
```

or

```bash
docker compose --env-file .env up -d
```

Start the application:

```bash
npm run dev
```

This will run the application in development mode. Open http://localhost:4000 to view it in the browser.

## Usage

Once the application is running, you can:

1. Create a user.
2. Get all users.
3. Create and link a pet.
4. Get all pets associated with the provided ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
