# CDSLab

This is a frontend project in react, for the creation of epidemiological simulations

## Requirements

**1. Node** higher than version 12

**2. Yarn** package installer


## Environment setup

We recommend using a file in the root of the project called .env where the environment variables that the application uses for its respective operation are configured.
"There is an example in the root of the project called **.env.example**".

---
### Creation of `.env.local` or `.env`

We will create in the root of the project a file called .env.local, which will contain the environment variables of our project that are used to call the backend services, you can guide yourself from an already created file called .env. example.


**1. REACT_APP_REGISTER_API_URL**
   - Base url that points to the service that allows user registration.

**2. REACT_APP_AUTH_API_URL**
   - Base url pointing to the service that allows the user to access the application, by means of a login with double authentication.

**3. REACT_APP_COMPARTMENTAL_MODEL**
   - Base url pointing to the service allowing consultation, creation and update of a user's simulation

**4. REACT_APP_COMPARTMENTAL_FILE**
   - Base url pointing to the service that allows the creation of the folder where the files that the user uploads to a simulation will be stored.

**5. REACT_APP_MANAGEMENT**
   - Base url pointing to the service that allows the management of the users that are registered in the stack.

```shell
REACT_APP_REGISTER_API_URL=BASE_ENDPOINT/auth/register
REACT_APP_AUTH_API_URL=BASE_ENDPOINT/auth/login
REACT_APP_COMPARTMENTAL_MODEL=BASE_ENDPOINT/models
REACT_APP_COMPARTMENTAL_FILE=BASE_ENDPOINT/file
REACT_APP_MANAGEMENT=BASE_ENDPOINT/management
REACT_APP_LOGIN_ENABLED='true'
```

#### Install packages:

To install the packages you need to use **yarn** and execute the following command in cmd locating us at the root of the project

```shell
yarn install
```

#### Start application:

To start the application, run the following command in the cmd of the root of the project

```shell
yarn start
```

#### Build application:

To compile the application in the productive environment, the following command must be executed:

```shell
yarn build
```