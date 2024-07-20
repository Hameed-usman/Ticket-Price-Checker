let age = +prompt("Enter Your Age");

if(age < 12){
    alert("Ticket Price is 5$")
} else {
    if(age >= 12 && age <= 18){
        alert("Ticket Price is 10$")
    } else {
        alert("Ticket Price is 15$")
    }
}
