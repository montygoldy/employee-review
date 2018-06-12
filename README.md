# Employee Review App

This is a test submission for frontend developer position at paytm labs. It is a employee reviewing app where employees can give feedback on each other with admin functionality.

## Functionalities Finished

1.  Admin Panel : Add, edit, view and delete employees. Add and view feedbacks. Keeps the count of feedbacks and Employees.
2.  Employee: Can view all the employees and give feedback to them.
3.  Custom Design.
4.  Fully responsive design.

## Future addons

1.  Authentication
2.  Validations and Test Suite
3.  Private routes with jsonwebtoken authentication
4.  Assign employees to participate in another employee's performance review

## Technologies/Dependencies used

- ReactJs with Redux for state management
- json-server for creating a fake api
- Html5/Sass for the markup and styling
- React-modal for popup
- React-star-rating for the rating a employee

## Installing

1.  Clone the repository.
2.  "cd" inside the project folder.
3.  "cd" inside the client folder.
4.  Then install all the dependencies by typing "npm install" in your terminal.
5.  Then type "npm start" in your terminal to run the server.
6.  In a new terminal tab type "npm run json-server" to run API.

## Available Routes

1.  http://localhost:3000/ --- Homepage
2.  http://localhost:3000/login -- login page
3.  http://localhost:3000/review -- employee review page
4.  http://localhost:3000/dashboard -- admin dashboard

## Folder Structure

1.  components -- contains all react component.
2.  Redux -- contains reducers, actions and store.
3.  styles -- contains all the sass styling which is compiled into css.
4.  db.json -- json-server uses this file to do all api requests.

## Screenshots

### Home Page

!["Screen shot for Home page"](https://github.com/montygoldy/employee-review/blob/master/gifs/home.gif?raw=true)

### Review Page

!["Screen shot for Home page"](https://github.com/montygoldy/employee-review/blob/master/gifs/review.gif?raw=true)

### Feedback page

!["Screen shot for Home page"](https://github.com/montygoldy/employee-review/blob/master/gifs/feedback.gif?raw=true)

### Admin dashboard and add employee form

!["Screen shot for Home page"](https://github.com/montygoldy/employee-review/blob/master/gifs/add_employee.gif?raw=true)

### Employee delete and edit feature

!["Screen shot for Home page"](https://github.com/montygoldy/employee-review/blob/master/gifs/delete_edit.gif?raw=true)
