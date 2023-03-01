function validateForm(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    if(name == ""){
        alert("Name is requird");
        return false;
        }

        if(age == ""){
            alert("Age is requird");
            return false;
        }
        else if (age < 1){
            alert("Age must not be zero or less thn zero")
        }

        if(address == ""){
            alert("Address is requird");
            return false;
        }

        else if (!email.includes("@")){
            alert("invalid email address");
            return false;
        }

        return true;

}

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem(peopleList))
    }

    var html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += 
        <td><button onclick="deletDate(' +
        index + 
        ')" class="btn btn-danger">Delete</button><button 
        onclick="update(' +
        index +
        ')" class="btn btn-waring m-2">Edite</button></td>;
        html +="<tr>";
    });

    document.querySelector("#crudTabel tbody").innerHTML = 
    html;
}

document.onload = showData();


function AddData(){
     if(validateForm() == true){
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;

        var peopleList;
        if (localStorage.getItem("peopleList") == null){
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem
                ("peopleList"));
        }
        peopleList.push({
            name : name,
            age: age,
            address: address,
            email: email,
        });

        localStorage.setItem("peopleList",JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        doucument.getElementById("address").value = "";
        document.getElementById("email").value = "";
     }
}