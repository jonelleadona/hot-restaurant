const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, () =>{
    console.log(`App listening on PORT http://localhost:${PORT}`);
})
const reservations = [
    // {
    //     name:"",
    //     phoneNumber:"",
    //     email:"",
    //     id:"",
    // }
]
const waitlist = [
    // {
    //     name:"",
    //     phoneNumber:"",
    //     email:"",
    //     id:"",
    // }
]
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/table", (req, res) => {
    res.sendFile(path.join(__dirname, "view.html"));
});
app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "make.html"));
});
app.get("/api/tables", (req, res) => {
    return res.json(reservations);
});
app.get("/api/waitlist", (req, res) => {
    return res.json(waitlist);
});
app.post("/api/tables", (req, res) => {
    const newReservation = req.body;
    if (reservations.length < 5){
        reservations.push(newReservation);
        res.json(true);
    }else{ 
        waitlist.push(newReservation);
        res.json(false);
    }    
})
