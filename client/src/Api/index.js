import axios from "axios";

export default {
  auth: {
    register: data =>
      axios.post("/api/users/register", data).then(response => response.data),
    login: data =>
      axios.post("/api/users/login", data).then(response => response.data),
    getUsers: () => axios.get("/api/users").then(response => response.data)
  },
  employee: {
    addAssign: selectedEmployees =>
      axios
        .post("/api/employees/assign", selectedEmployees)
        .then(response => response.data),
    getAssign: () =>
      axios
        .get("/api/employees/assign/all")
        .then(response => response.data[0].employeeId),
    add: employeeData =>
      axios
        .post("/api/employees", employeeData)
        .then(response => response.data),
    all: () => axios.get("/api/employees").then(response => response.data),
    edit: data =>
      axios
        .put(`/api/employees/${data.employeeId}`, data)
        .then(response => response.data),
    delete: id => axios.delete(`/api/employees/${id}`),
    getInfo: employeeId =>
      axios.get(`/api/employees/${employeeId}`).then(response => response.data)
  },
  feedback: {
    add: feedbackData =>
      axios
        .post(`/api/feedbacks/${feedbackData.employeeId}`, feedbackData)
        .then(response => response.data),
    all: () => axios.get("/api/feedbacks").then(response => response.data),
    edit: newFeedbackData =>
      axios
        .put(`/api/feedbacks/${newFeedbackData.id}`, newFeedbackData)
        .then(response => response.data)
  }
};
