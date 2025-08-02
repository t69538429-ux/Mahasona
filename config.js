const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE || "https://files.catbox.moe/t8h8kg.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "hello,i am mahasona i am alive now!",
};
