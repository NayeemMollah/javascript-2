
// input 
let age = 22
// input 

// backend  
if (age >= 22) {
    console.log("biye ta abar korte oi hobe")
}

else {
    console.log("asob kotha bole nh babu")
}
// backend



let gender = "male"
let salary = "50000"
let county = "bangladesh"

if (gender == "male") {
    if (salary >= 50000) {
        if (county == "bangladesh") {
            console.log(" Yes!!! perfect candidate")
        }
        else {
            console.log("Location only bangladesh ")
        }
    }
    else {
        console.log("salary match kore nai")
    }
}
else {
    console.log("ayta sodo chele der jonno")
}


// log in 
let email = "nayeem@gmaile.com"
let password = 3445


if (email == "nayeem@gmaile.com") {
    if (password == 3445) {
        console.log("Password matching")
    }
    else {
        console.log("Password did,t match in our record")
    }
}
else {
    console.log("E-mail did,t match in our record")
}


// Marksheet 

let marks = 100

if(marks >= 33 && marks <40){
   console.log("U Got D")
}
else if(marks >= 40 && marks <50){
   console.log("U Got C" )
}
else if(marks >= 50 && marks <60){
   console.log("U Got B" )
}
else if(marks >= 60 && marks <70){
   console.log("U Got A" )
}
else if(marks >= 80 && marks <90){
   console.log("U Got A+" )
}
else if(marks >= 90 && marks <=100){
   console.log("U Got A+" )
}

else{
    console.log("Tumi Fail")
}