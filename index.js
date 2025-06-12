const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./chat");
const path = require("path");
const PORT = 5000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));

main().then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/insta");
}
let chat1 = new Chat({
    from : "sujal",
    to : "sahil",
    msg : "comment ca va? ca va biun",
    date : new Date()
});
let chat2 = new Chat({
    from : "john",
    to : "jacob",
    msg : "ill meet you at the lab",
    date : new Date()
});
let chat3 = new Chat({
    from : "jessy",
    to : "jack",
    msg : "balloons are great, code 001",
    date : new Date()
});
let chat4 = new Chat({
    from : "trott",
    to : "stuart",
    msg : "hey, im coming! where are you?",
    date : new Date()
});
// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
// chat2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
// chat3.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// chat4.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
app.get("/",(req,res)=>{
    res.send("hello jii at /");
});
app.get("/app/chats", async (req,res)=>{
    let chats = await Chat.find();
    res.render("main.ejs",{chats});
});
app.post("/app/chats",(req,res)=>{
    let {from, to, msg} = req.body;       //req.body is a function used to extract values from an object in js
    let newChat = new Chat({
        from : from,
        msg : msg,
        to : to,
        date : new Date()
    });
    newChat.save().then(()=>{
        console.log("created...");
    }).catch((err)=>{
        console.log(err);
    })
    console.log(newChat);

})
app.get("/app/new",(req,res)=>{
    res.render("new.ejs");
});
app.listen(PORT,()=>{
    console.log(`LISTENING...${PORT}`);
});