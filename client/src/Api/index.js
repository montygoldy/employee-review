import axios from "axios";

export default {
  auth: {
    register: data =>
      axios
        .post("http://localhost:3001/api/users/register", data)
        .then(response => response.data),
    login: data =>
      axios
        .post("http://localhost:3001/api/users/login", data)
        .then(response => response.data),
    getUsers: () =>
      axios
        .get("http://localhost:3001/api/users")
        .then(response => response.data)
  },
  employee: {
    addAssign: selectedEmployees =>
      axios
        .post("http://localhost:3001/api/employees/assign", selectedEmployees)
        .then(response => response.data),
    getAssign: () =>
      axios
        .get("http://localhost:3001/api/employees/assign/all")
        .then(response => response.data[0].employeeId),
    add: employeeData =>
      axios
        .post("http://localhost:3001/api/employees", employeeData)
        .then(response => response.data),
    all: () =>
      axios
        .get("http://localhost:3001/api/employees")
        .then(response => response.data),
    edit: data =>
      axios
        .put(`http://localhost:3001/api/employees/${data.employeeId}`, data)
        .then(response => response.data),
    delete: id => axios.delete(`http://localhost:3001/api/employees/${id}`),
    getInfo: employeeId =>
      axios
        .get(`http://localhost:3001/api/employees/${employeeId}`)
        .then(response => response.data)
  },
  feedback: {
    add: feedbackData =>
      axios
        .post(
          `http://localhost:3001/api/feedbacks/${feedbackData.employeeId}`,
          feedbackData
        )
        .then(response => response.data),
    all: () =>
      axios
        .get("http://localhost:3001/api/feedbacks")
        .then(response => response.data),
    edit: newFeedbackData =>
      axios
        .put(
          `http://localhost:3001/api/feedbacks/${newFeedbackData.id}`,
          newFeedbackData
        )
        .then(response => response.data),
    feedbackInfo: employeeId =>
      axios
        .post(`http://localhost:3001/api/feedbacks/${employeeId}`)
        .then(response => response.data)
  }
};
