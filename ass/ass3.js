 const employees = [
	{
     empId: 101,
     empName: "Ramya",
     empCompany: "TCS",
     empSalary: 50000,
     empAddress: {
        empCity: "Hyderabad",
        empArea: "Madhapur"
     }
    },
{


    empId: 102,
    empName: "swetha",
    empCompany: "Amazon",
    empSalary: 60000,
    empAddress: {
       empCity: "Hyderabad",
             empArea: "Shapur"
    }
},

{
    empId: 103,
    empName: "pooja",
    empCompany: "Infosys",
    empSalary: 90000,
    empAddress: {
       empCity: "Mumbai",
             empArea: "Balnagr"
}
},
 {

 
    empId: 104,
    empName: "pavi",
    empCompany: "Amazon",
    empSalary: 65000,
    empAddress: {
       empCity: "Vizag",
             empArea: "Falaknama"
    }
},
  {
    empId: 105,
    empName: "teju",
    empCompany: "TCS",
    empSalary: 45000,
    empAddress: {
        empCity: "Hyderabad",
        empArea: "Madhapur"
    }
}
   
];
        function populateTable() {
            const tableBody = document.getElementById("employeeTableBody");

            employees.forEach(emp => {
                let row = document.createElement("tr");
                row.innerHTML = `
                    <td>${emp.empId}</td>
                    <td>${emp.empName}</td>
                    <td>${emp.empCompany}</td>
                    <td>${emp.empSalary}</td>
                    <td>${emp.empAddress.empCity}</td>
                    <td>${emp.empAddress.empArea}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        window.onload = populateTable;
   