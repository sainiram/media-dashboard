const users = [
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
  {
    no: "01",
    name: "User1",
    timein: "10:00AM",
    timeout: "7:00PM",
    PCount: "10",
  },
];
const test = users.map(function (user) {
  return `
          <tr>
              <td class="table_pic_td">${user.no}</td>
              <td data_label="USER_ID">${user.name}</td>
              <td data_label="MEMBARS">${user.timein}</td>
              <td data_label="GROUP_NAME"> ${user.timeout}</td>
              <td data_label="GROUP_MAIL"> ${user.PCount}</td>
              
            </tr>
          `;
});
document.getElementById("table_group").innerHTML = test.join(" ");

const employee = [
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },    
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },
  {
    sno: "01",
    name: "Employee1",
    cardNo: "CH1092093820P78B",
    cardId: "1",
    attendance: "10",
    salary: "10",
  },

];
const employ = employee.map(function (user) {
  return `
            <tr>
                <td class="table_pic_td">${user.sno}</td>
                <td data_label="USER_ID">${user.name}</td>
                <td data_label="MEMBARS">${user.cardNo}</td>
                <td data_label="GROUP_NAME"> ${user.cardId}</td>
                <td data_label="GROUP_MAIL"> ${user.attendance}</td>
                <td data_label="GROUP_MAIL"> ${user.salary}</td>
              </tr>
            `;
});
document.getElementById("employ").innerHTML = employ.join(" ");
