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
* /api/users/getme = get user profile // **private**
* /api/users/admin = get admin  // **private** **only for admins**

### auth

* /api/users/auth/login = login user/admin // **public**
* /api/users/auth/logout = logout // **private**
* /api/users/auth/logout_all = logout All sessions // **private**

### reviews

* /api/users/auth/review = get all reviews // **public**
* /api/users/auth/review = logout // **private**
* /api/users/auth/review = logout All sessions // **private**

### orders

