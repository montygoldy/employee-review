import axios from "axios";

export default {
  employee: {
    add: employeeData =>
      axios
        .post(
          "http://localhost:3004/employees",
          employeeData, //data
          { headers: { "Content-Type": "application/json" } } //config
        )
        .then(response => response.data),
    all: () =>
      axios
        .get("http://localhost:3004/employees")
        .then(response => response.data),
    edit: data =>
      axios
        .put(`http://localhost:3004/employees/${data.id}`, data, {
          headers: { "Content-Type": "application/json" }
        })
        .then(response => response.data),
    delete: id =>
      axios.delete(`http://localhost:3004/employees?employeeId=${id}`, {
        headers: { "Content-Type": "application/json" }
      }),
    getInfo: employeeId =>
      axios
        .get(`http://localhost:3004/employees?employeeId=${employeeId}`)
        .then(response => response.data[0])
  },
  feedback: {
    add: feedbackData =>
      axios
        .post(
          "http://localhost:3004/feedbacks",
          feedbackData, //data
          { headers: { "Content-Type": "application/json" } } //config
        )
        .then(response => response.data),
    all: () =>
      axios
        .get("http://localhost:3004/feedbacks")
        .then(response => response.data),
    edit: newFeedbackData =>
      axios
        .put(
          `http://localhost:3004/feedbacks/${newFeedbackData.id}`,
          newFeedbackData,
          {
            headers: { "Content-Type": "application/json" }
          }
        )
        .then(response => response.data),
    feedbackInfo: employeeId =>
      axios
        .post(`http://localhost:3004/feedbacks?employeeId=${employeeId}`)
        .then(response => response.data)
  }
};
