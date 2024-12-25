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
