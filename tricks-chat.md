To connect your Login Page Bootstrap with your REST API using Express.js and JWT authentication, you'll need to follow a series of steps. Here's a high-level overview of the process:

<br>

**1. Set up your Express.js server:** 

Create a new Express.js project or use an existing one. <br> 
Set up the necessary dependencies by installing Express.js and any additional packages you may need. <br> 
Create the main server file, such as `server.js`, and configure your server to listen on a specific port.

<br>

**2. Configure authentication middleware:**

Install the necessary packages for authentication, such as `jsonwebtoken` for JWT handling and `bcrypt` for password hashing. <br> 
Set up a middleware function to handle authentication, and this middleware will verify the JWT token sent with each request, and attach the authenticated user information to the request object.

<br>

**3. Create the Login API endpoint:**

Define an API endpoint that handles the login functionality. <br> 
This endpoint should receive the username and password from the client-side login form. <br> 
Verify the credentials, generate a JWT token, and send it back to the client.

<br> 

**4. Connect the Login Page Bootstrap:** 

Set up the login page using Bootstrap and create a login form. <br> 
Ensure that the form sends a POST request to the login API endpoint you defined in the previous step.

**5. Handle the login request on the server:** 

In the server-side code, handle the login request received from the client. <br> Validate the provided credentials, such as comparing the username and hashed password stored in your user database. <br> 
If the credentials are valid, generate a JWT token using the `jsonwebtoken` package and send it back to the client as a response.

<br> 

**6. Implement JWT authentication:**

For protected API routes that require authentication, add a middleware function to verify the JWT token sent by the client. <br> 
This middleware should check the token's validity, decode it, and attach the authenticated user information to the request object. <br> 
If the token is invalid or expired, return an appropriate error response.

<br> 

**7. Secure your API routes:** 

Implement JWT authentication middleware on the server-side routes that require authentication. <br> 
This will ensure that only authenticated users can access those routes. You can use the middleware function created in the previous step.

<br> 

**8. Connect the client-side login form to the API:** 

Update the client-side login form to send the username and password to the login API endpoint you defined earlier. <br> 
Handle the response from the server, such as storing the JWT token in local storage or a cookie for subsequent API requests.

<br> ----- </br>

By following these steps, you should be able to connect your Login Page Bootstrap with your Express.js REST API, implementing JWT authentication for secure user login and protected API routes. <br> 

Remember to handle any error scenarios and follow best practices for securely storing and transmitting sensitive data like passwords and tokens.