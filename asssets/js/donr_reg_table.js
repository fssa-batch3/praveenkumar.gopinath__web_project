let Card = JSON.parse(localStorage.getItem("donors"));
// let btn = document.createElement("button");
// btn.innerText = "Place & Back";
// btn.setAttribute("id", "submit");
// document.querySelector("table").append(btn);
let table_card = document.createElement("table");
let th_tr1 = document.createElement("tr");
table_card.append(th_tr1);
let th1_tr = document.createElement("th");
th1_tr.innerText = "User Id";
th_tr1.append(th1_tr);
let th2_tr = document.createElement("th");
th2_tr.innerText = "User Name";
th_tr1.append(th2_tr);
let th3_tr = document.createElement("th");
th3_tr.innerText = "Age";
th_tr1.append(th3_tr);
let th4_tr = document.createElement("th");
th4_tr.innerText = "Blood Group";
th_tr1.append(th4_tr);
let th5_tr = document.createElement("th");
th5_tr.innerText = "Gender";
th_tr1.append(th5_tr);
let th6_tr = document.createElement("th");
th6_tr.innerText = "Oppoction";
th_tr1.append(th6_tr);
for (let i = 0; i <= Card.length; i++) {
  let findDetail = Card.find(function (event) {
    let id = event["userid"];
    if (Card[i]["userid"] == id) {
      return true;
    }
  });
  let td_tr2 = document.createElement("tr");
  table_card.append(td_tr2);
  let td1_tr = document.createElement("td");
  td1_tr.innerText = Card[i]["userid"];
  td_tr2.append(td1_tr);
  let td2_tr = document.createElement("td");
  td2_tr.innerText = Card[i]["fullname"];
  td_tr2.append(td2_tr);
  let td3_tr = document.createElement("td");
  td3_tr.innerText = Card[i]["age"];
  td_tr2.append(td3_tr);
  let td4_tr = document.createElement("td");
  td4_tr.innerText = Card[i]["bloodgroup"];
  td_tr2.append(td4_tr);
  let td5_tr = document.createElement("td");
  td5_tr.innerText = Card[i]["gender"];
  td_tr2.append(td5_tr);

  let td6_tr = document.createElement("td");
  td_tr2.append(td6_tr);
  let del = document.createElement("button");
  del.setAttribute("id", "btn");
  del.innerText = "delete";
  td6_tr.append(del);

  document.querySelector("table").append(table_card);

  del.addEventListener("click", function (event) {
    event.preventDefault();
    let addData = JSON.parse(localStorage.getItem("donors"));
    let findIndex = Card.indexOf(findDetail);
    let msg = confirm(
      "Admin? Are you sure you want to remove this Detail from your table..."
    );
    if (msg !== true) {
      return;
    } else {
      Card.splice(findIndex, 1);
      localStorage.setItem("donors", JSON.stringify(Card));
      document.getElementById("btn").reset();
      // location.reload(tblCustomers);
    }
  });
}