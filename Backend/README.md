# User Registration API Documentation

## Register User
Creates a new user account and returns an authentication token.

**Endpoint:** `POST /users/register`

### Request Body
```json
{
  "fullname": {
    "firstname": "string", // minimum 3 characters
    "lastname": "string"   // minimum 3 characters (optional)
  },
  "email": "string",      // valid email format, minimum 5 characters
  "password": "string"    // minimum 6 characters
}
```

### Response

#### Success Response
**Code:** 201 CREATED
```json
{
  "token": "jwt_token_string",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

#### Error Responses

**Code:** 400 BAD REQUEST
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "path": "email"
    },
    {
      "msg": "Firstname must be atleast 3 characters long",
      "path": "fullname.firstname"
    },
    {
      "msg": "Password must be 6 characters long",
      "path": "password" 
    }
  ]
}
```

### Required Fields Validation
- `fullname.firstname`: String, minimum 3 characters
- `email`: Valid email format, minimum 5 characters
- `password`: String, minimum 6 characters
- `fullname.lastname`: Optional, but if provided must be minimum 3 characters

The password will be automatically hashed before storage and a JWT token will be generated upon successful registration.

## Login User
Authenticates a user and returns an authentication token.

**Endpoint:** `POST /users/login`

### Request Body
```json
{
  "email": "string",    // valid email format
  "password": "string"  // minimum 6 characters
}
```

### Response

#### Success Response
**Code:** 200 OK
```json
{
  "token": "jwt_token_string",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

#### Error Responses

**Code:** 400 BAD REQUEST
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "path": "email"
    },
    {
      "msg": "Password must be 6 characters long",
      "path": "password"
    }
  ]
}
```

**Code:** 401 UNAUTHORIZED
```json
{
  "message": "Invalid Email or Password"
}
```

### Required Fields Validation
- `email`: Valid email format
- `password`: String, minimum 6 characters

The provided password will be compared with the stored hashed password. A JWT token will be generated upon successful authentication.

## Get User Profile
Retrieves the profile information of the authenticated user.

**Endpoint:** `GET /users/profile`

### Headers
```json
{
  "Authorization": "Bearer jwt_token_string"
}
```

### Response

#### Success Response
**Code:** 200 OK
```json
{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

#### Error Response
**Code:** 401 UNAUTHORIZED
```json
{
  "message": "Unauthorized"
}
```

Authentication via JWT token is required for this endpoint.

## Logout User
Logs out the current user by invalidating their token.

**Endpoint:** `GET /users/logout`

### Headers
```json
{
  "Authorization": "Bearer jwt_token_string"
}
```

### Response

#### Success Response
**Code:** 200 OK
```json
{
  "message": "Logged out successfully"
}
```

#### Error Response
**Code:** 401 UNAUTHORIZED
```json
{
  "message": "Unauthorized"
}
```

The endpoint will:
- Clear the auth token cookie
- Add the token to blacklist
- Return success message

Authentication via JWT token is required for this endpoint.

# Captain API Documentation

## Register Captain
Creates a new captain account and returns an authentication token.

**Endpoint:** `POST /captains/register`

### Request Body
```json
{
  "fullname": {
    "firstname": "string",  // minimum 3 characters
    "lastname": "string"    // minimum 3 characters
  },
  "email": "string",        // valid email format
  "password": "string",     // minimum 6 characters
  "vechile": {
    "color": "string",      // minimum 3 characters
    "plate": "string",      // minimum 3 characters
    "capacity": "number",   // minimum 1
    "vechileType": "string" // must be 'car', 'motorcycle', or 'auto'
  }
}
```

### Response

#### Success Response
**Code:** 201 CREATED
```json
{
  "token": "jwt_token_string",
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vechile": {
      "color": "string",
      "plate": "string", 
      "capacity": number,
      "vechileType": "string"
    },
    "status": "inactive",
    "_id": "string"
  }
}
```

#### Error Responses

**Code:** 400 BAD REQUEST
```json
{
  "errors": [
    {
      "msg": "Firstname must be at least 3 characters long",
      "path": "fullname.firstname"
    },
    {
      "msg": "Please enter a valid email",
      "path": "email"
    },
    {
      "msg": "Vechile type must be one of car, motorcycle, auto",
      "path": "vechile.vechileType"
    }
  ]
}
```

### Required Fields Validation
- `fullname.firstname`: String, minimum 3 characters
- `fullname.lastname`: String, minimum 3 characters  
- `email`: Valid email format
- `password`: String, minimum 6 characters
- `vechile.color`: String, minimum 3 characters
- `vechile.plate`: String, minimum 3 characters
- `vechile.capacity`: Number, minimum 1
- `vechile.vechileType`: String, must be one of: 'car', 'motorcycle', 'auto'

The password will be automatically hashed before storage and a JWT token will be generated upon successful registration. The captain's initial status will be set to 'inactive'.

This documentation is based on the implementation in:
- [`captainRoutes`](/Backend/routes/captain.routes.js)
- [`captainController`](/Backend/controllers/captain.controller.js)
- [`captainModel`](/Backend/models/captain.model.js)
- [`captainService`](/Backend/services/captain.service.js)
