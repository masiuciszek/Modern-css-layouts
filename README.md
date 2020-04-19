# Food Truck

Fullstack application where you have authentication based on a user or a admin role.
Admin should add and customize own dished and users should be able to leave reviews if logged in.

### Tools

* Node JS
* Typescript
* MongoDB
* Express
* Mongoose
* React
* Styled Components
* Stripe API

## API Routes

### users

* /api/users/register = register a new user // **public**
* /api/users/me = get user profile // **private** GET
* /api/users/me = update user profile // **private** PUT
* /api/users/me = delete user profile // **private** DELETE
* /api/users/admin = get admin  // **private** **only for admins**
* /api/users/ = get all users  // **private** **only for admins**

### auth

* /api/users/auth/login  // **public** POST
* /api/users/auth/logout  // **private** POST
* /api/users/auth/logout_all  // **private** POST  *logout all sessions*

### reviews

* /api/users/auth/review = get all reviews // **public**
* /api/users/auth/review = logout // **private**
* /api/users/auth/review = logout All sessions // **private**

### orders

