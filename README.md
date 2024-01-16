# Course Selling App

## Description

This project implements a course selling app, simulating a platform similar to Udemy. Users can sign up, view courses, and purchase them. Admins, on the other hand, have the ability to sign up, create courses, and manage the course catalog.


## Setup



## Admin Routes

- **POST /admin/signup**
  - *Description:* Creates a new admin account.
  - *Input Body:* `{ "username": "admin", "password": "pass" }`
  - *Output:* `{ "message": "Admin created successfully" }`

- **POST /admin/signin**
  - *Description:* Logs in an admin account.
  - *Input Body:* `{ "username": "admin", "password": "pass" }`
  - *Output:* `{ "token": "your-token" }`

- **POST /admin/courses**
  - *Description:* Creates a new course.
  - *Input:* Headers: `{ 'Authorization': 'Bearer <your-token>' }`, Body: `{ "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com" }`
  - *Output:* `{ "message": "Course created successfully", "courseId": "new course id" }`

- **GET /admin/courses**
  - *Description:* Returns all the courses.
  - *Input:* Headers: `{ 'Authorization': 'Bearer <your-token>' }`
  - *Output:* `{ "courses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }, ... ] }`

## User Routes

- **POST /users/signup**
  - *Description:* Creates a new user account.
  - *Input:* `{ "username": "user", "password": "pass" }`
  - *Output:* `{ "message": "User created successfully" }`

- **POST /users/signin**
  - *Description:* Logs in a user account.
  - *Input:* `{ "username": "user", "password": "pass" }`
  - *Output:* `{ "token": "your-token" }`

- **GET /users/courses**
  - *Description:* Lists all the courses.
  - *Input:* Headers: `{ 'Authorization': 'Bearer <your-token>' }`
  - *Output:* `{ "courses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }, ... ] }`

- **POST /users/courses/:courseId**
  - *Description:* Purchases a course. Replace `:courseId` in the URL path with the actual ID of the course to be purchased.
  - *Input:* Headers: `{ 'Authorization': 'Bearer <your-token>' }`
  - *Output:* `{ "message": "Course purchased successfully" }`

- **GET /users/purchasedCourses**
  - *Description:* Lists all the courses purchased by the user.
  - *Input:* Headers: `{ 'Authorization': 'Bearer <your-token>' }`
  - *Output:* `{ "purchasedCourses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }, ... ] }`

Feel free to customize this README according to your project's specific needs.