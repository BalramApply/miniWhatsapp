const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() =>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

let allChats = [
    {
        from: "shiv",
        to: "love",
        msg: "bol bam bam bhole",
        created_at : new Date(),
    },
    {
        from: "krishan",
        to: "balram",
        msg: "bol radhe radhe radhe",
        created_at : new Date(),
    },
    {
        from: "kalki",
        to: "kalyug",
        msg: "bol kalyug to satyug ",
        created_at : new Date(),
    },
    {
        from: "siya",
        to: "ram",
        msg: "ram ram ram siyaram",
        created_at : new Date(),
    },
]

  Chat.insertMany(allChats);