const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {https://files.catbox.moe/t8h8kg.jpg: config.ALIVE_IMG},*👋 𝙃𝙚𝙡𝙡𝙤𝙬, 𝙄 𝙢 𝘼𝙡𝙞𝙫𝙚 𝙉𝙤𝙬💥*

┏━━━━━━━━━━━━━━━━
┃🤖 `ʙᴏᴛ ɴᴀᴍᴇ` : MAHASONA MD
┃🔖 `ᴠᴇʀsɪᴏɴ` : 1.0
┃👨‍💻 `ᴏᴡɴᴇʀ: 𝐌𝐑` MAHASONA
┗━━━━━━━━━━━━━━𖣔𖣔
🧚‍♂️ 𝙄𝙈 *_MAHASONA_*-𝙈𝘿 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝘽𝙊𝙏🤖.𝙎𝙄𝙈𝙋𝙇𝙀 𝙅𝘼𝙑𝘼 𝙎𝘾𝙍𝙄𝙋𝙏 𝘽𝙊𝙏⚙️.𝙈𝙍 *MAHASONA* 𝙄𝙎 𝙈𝙔 𝘾𝙍𝙀𝘼𝙏𝙀𝙍👨‍💻.
▬▬▬▬▬▬▬▬▬▬▬▬▬▬

> *𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 👹*
*POWER BY MAHASONA*👨‍💻👹: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})



