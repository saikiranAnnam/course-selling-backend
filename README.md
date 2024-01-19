# Course Selling App Documentation

Welcome to the Course Selling App documentation! This application simulates a course-selling platform, offering functionalities for users to sign up, view courses, and make purchases. Admins, in addition to these user functionalities, have the ability to create courses and manage the course catalog.

## Admin Routes

### 1. Create Admin Account

- **POST /admin/signup**
  - **Description:** Creates a new admin account.
  - **Input Body:** `{ "username": "admin", "password": "pass" }`
  - **Output:** `{ "message": "Admin created successfully" }`

### 2. Admin Login

- **POST /admin/signin**
  - **Description:** Logs in an admin account.
  - **Input Body:** `{ "username": "admin", "password": "pass" }`
  - **Output:** `{ "token": "your-token" }`

### 3. Create Course

- **POST /admin/courses**
  - **Description:** Creates a new course.
  - **Input:** Headers: `{ 'Authorization': 'Bearer <your-token>' }`, Body: `{ "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com" }`
  - **Output:** `{ "message": "Course created successfully", "courseId": "new course id" }`

### 4. Get All Courses

- **GET /admin/courses**
  - **Description:** Returns all the courses.
  - **Input:** Headers: `{ 'Authorization': 'Bearer <your-token>' }`
  - **Output:** `{ "courses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }, ... ] }`

## User Routes

### 1. Create User Account

- **POST /users/signup**
  - **Description:** Creates a new user account.
  - **Input:** `{ "username": "user", "password": "pass" }`
  - **Output:** `{ "message": "User created successfully" }`

### 2. User Login

- **POST /users/signin**
  - **Description:** Logs in a user account.
  - **Input:** `{ "username": "user", "password": "pass" }`
  - **Output:** `{ "token": "your-token" }`

### 3. Get All Courses

- **GET /users/courses**
  - **Description:** Lists all the courses.
  - **Input:** Headers: `{ 'Authorization': 'Bearer <your-token>' }`
  - **Output:** `{ "courses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }, ... ] }`

### 4. Purchase Course

- **POST /users/courses/:courseId**
  - **Description:** Purchases a course. Replace `:courseId` in the URL path with the actual ID of the course to be purchased.
  - **Input:** Headers: `{ 'Authorization': 'Bearer <your-token>' }`
  - **Output:** `{ "message": "Course purchased successfully" }`

### 5. Get Purchased Courses

- **GET /users/purchasedCourses**
  - **Description:** Lists all the courses purchased by the user.
  - **Input:** Headers: `{ 'Authorization': 'Bearer <your-token>' }`
  - **Output:** `{ "purchasedCourses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }, ... ] }`

Feel free to customize this documentation according to your project's specific needs. Happy coding!