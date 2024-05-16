## Description

A movie API designed with NestJS for case study.

## Preparing the Database

Before running the application, you need to fill up the database with movie details. To do this, follow these steps:

1. **Install Dependencies**: Navigate to the project directory and install all necessary dependencies by running:

    ```bash
    $ yarn install
    ```
2. **Environment Variables**: Before running the application, make sure to set up your environment variables. You need to create a `.env` file based on the provided `.env.example` file and set the appropriate values.Then, open the .env file and update the values as needed. For example, if you have an API key, set API_KEY="" in the .env file.
    ```bash
    $ cp .env.example .env
    ```



   

3. **Run the Application**: Start the Docker containers to run the movie API by running:

    ```bash
    $ docker-compose up
    ```

    This will start the Docker containers required for running the movie API. You should see the application logs in the terminal.

4. **Access Swagger UI**: After starting the application, you can explore all available endpoints using Swagger UI. Simply navigate to the following URL in your web browser:

    ```
    http://localhost:3000/api
    ```

    This will open Swagger UI, where you can interact with the API documentation and test the endpoints.

5. **Fill Up the Database**: Send a POST request to the `/fetch/writeDetailsToDb` endpoint to populate the database with movie details. You can use tools like cURL, Postman, or your preferred API client to do this. For example, using cURL:

    ```bash
    $ curl -X POST http://localhost:3000/fetch/writeDetailsToDb
    ```

## Trying out Endpoints

After setting up the application and database, you can try out the following endpoints:

- **Find All Movies**: Retrieve all movies from the database by making a GET request to:

    ```
    http://localhost:3000/api/findAll
    ```

    This endpoint will return all movies currently stored in the database.

- **Find Movie by ID**: Retrieve a specific movie by its ID using a GET request to:

    ```
    http://localhost:3000/api/findById/94108
    ```

    This will retrieve the movie with the ID "94108".

- **Remove Movie by ID**: Remove a movie from the database by its ID using a POST request to:

    ```
    http://localhost:3000/api/removeById/94108
    ```

    This will remove the movie with the ID "94108" from the database.

- **GraphQL Endpoint**: Use the GraphQL endpoint to query specific movie details. Send a POST request to:

    ```
    http://localhost:3000/graphql
    ```

    Include the following query in the request body to retrieve details for a movie with ID "94108":

    ```json
    {
      "query": "query GetMovieById($id: ID!) { findById(id: $id) { id name overview popularity voteAverage voteCount releaseDate genres { id name } } }",
      "variables": {
        "id": "94108"
      }
    }
    ```

    This will return the details of the movie with ID "94108", including its name, overview, popularity, vote average, vote count, release date, and genres.

- **Save Movie**: Save a new movie to the database by sending a POST request to:

    ```
    http://localhost:3000/api/save
    ```

    Include the movie details in the request body. Here's an example request body using the movie "Interstellar":

    ```json
    {
      "id": "157336",
      "name": "Interstellar",
      "overview": "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand, a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole.",
      "popularity": 67.899,
      "voteAverage": "8.6",
      "voteCount": 25165,
      "releaseDate": "2014-11-05",
      "genres": [
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 878,
          "name": "Science Fiction"
        }
      ]
    }
    ```

- **Testing Endpoints with Mocks**: You can test the endpoints with mocks in the terminal using the following command:

    ```bash
    $ yarn test
    ```

    This command will run tests for the endpoints using mock data, allowing you to verify the functionality of the API without affecting the actual database.



You're now ready to interact with the movie API! Enjoy testing and developing with it.

