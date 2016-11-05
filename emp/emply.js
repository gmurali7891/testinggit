(function (){
    var ctrls = {};
    ctrls.empTable = document.getElementById("tblEmployees");
    var employees =[{
        empId: 100,
        fName: "murali",
        lName: "flute"
    },
    {
        empId: 101,
        fName: "gnani",
        lName: "love"
    },]
    
    function buildTrTag(emp){
        
        var trForEmployee = document.createElement("tr");
        
        var tdForEmpId = document.createElement("td");
        tdForEmpId.textContent=emp.empId;
        
        var tdForFName = document.createElement("td");
        tdForFName.textContent=emp.fName;
        
        var tdForLName = document.createElement("td");
        tdForLName.textContent=emp.lName;
        
        trForEmployee.appendChild(tdForEmpId);
        trForEmployee.appendChild(tdForFName);
        trForEmployee.appendChild(tdForLName);
        console.log(trForEmployee);
        
        ctrls.empTable.appendChild(trForEmployee);
    }
    
    
    function buildEmployeeTable(){
        for(var i=0; i<employees.length; i++){
            var employee = employees[i];
            buildTrTag(employee);
        }
    }
    
    function init(){
        buildEmployeeTable();
    }
    init();
})();