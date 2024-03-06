//base by drexmose 
//re-upload? recode? copy code? give credit ya :)
//YouTube: @drexmose
//Instagram: drex_mose
//Telegram: t.me/dark_intent
//GitHub: @drexmose
//WhatsApp: +25410207064
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@drexmose

const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮 』
┋๏${prefix}𝐚𝐮𝐭𝐨𝐫𝐞𝐚𝐝 🅞
┋๏${prefix}𝐚𝐮𝐭𝐨𝐛𝐢𝐨 🅞
┋๏${prefix}𝐚𝐮𝐭𝐨𝐭𝐲𝐩𝐞 🅞
┋๏${prefix}𝐮𝐧𝐚𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 🅞
┋๏${prefix}𝐚𝐮𝐭𝐨𝐫𝐞𝐜𝐨𝐫𝐝 🅞
┋๏${prefix}𝐚𝐮𝐭𝐨𝐫𝐞𝐜𝐨𝐫𝐝𝐭𝐲𝐩𝐞 🅞
┋๏${prefix}𝐚𝐮𝐭𝐨𝐬𝐰𝐯𝐢𝐞𝐰 🅞
┋๏${prefix}𝐬𝐞𝐭𝐚𝐮𝐭𝐨𝐛𝐥𝐨𝐜𝐤 🅞
┋๏${prefix}𝐬𝐞𝐭𝐚𝐧𝐭𝐢𝐟𝐨𝐫𝐞𝐢𝐠𝐧 🅞
┋๏${prefix}𝐚𝐮𝐭𝐨𝐛𝐥𝐨𝐜𝐤 🅞
┋๏${prefix}𝐨𝐧𝐥𝐲𝐠𝐜 🅞
┋๏${prefix}𝐨𝐧𝐥𝐲𝐩𝐜 🅞
┋๏${prefix}𝐨𝐧𝐥𝐲𝐢𝐧𝐝𝐢𝐚 🅞
┋๏${prefix}𝐨𝐧𝐥𝐲𝐢𝐧𝐝𝐨 🅞
┋๏${prefix}𝐚𝐧𝐭𝐢𝐜𝐚𝐥𝐥 🅞
┋๏${prefix}𝐬𝐞𝐥𝐟 🅞
┋๏${prefix}𝐩𝐮𝐛𝐥𝐢𝐜 🅞
┋๏${prefix}𝐣𝐨𝐢𝐧 🅞
┋๏${prefix}𝐩𝐨𝐥𝐥 🅞
┋๏${prefix}𝐛𝐜 🅞
┋๏${prefix}𝐛𝐜𝐠𝐫𝐨𝐮𝐩 🅞
┋๏${prefix}𝐬𝐞𝐭𝐦𝐞𝐧𝐮 🅞
┋๏${prefix}𝐬𝐞𝐭𝐢𝐦𝐠𝐦𝐞𝐧𝐮 🅞
┋๏${prefix}𝐬𝐞𝐭𝐯𝐢𝐝𝐦𝐞𝐧𝐮 🅞
┋๏${prefix}𝐬𝐞𝐭𝐠𝐢𝐟𝐦𝐞𝐧𝐮 🅞
┋๏${prefix}𝐬𝐞𝐭𝐫𝐞𝐩𝐥𝐲 🅞
┋๏${prefix}𝐬𝐞𝐭𝐩𝐫𝐞𝐟𝐢𝐱 🅞
┋๏${prefix}𝐚𝐝𝐝𝐥𝐢𝐦𝐢𝐭 🅞
┋๏${prefix}𝐝𝐞𝐥𝐥𝐢𝐦𝐢𝐭 🅞
┋๏${prefix}𝐫𝐞𝐬𝐞𝐭𝐡𝐢𝐭 🅞
┋๏${prefix}𝐫𝐞𝐬𝐞𝐭𝐮𝐬𝐞𝐫 🅞
┋๏${prefix}𝐜𝐫𝐞𝐚𝐭𝐞𝐠𝐜 🅞
┋๏${prefix}𝐬𝐞𝐭𝐞𝐱𝐢𝐟 🅞
┋๏${prefix}𝐮𝐬𝐞𝐫𝐣𝐢𝐝 🅞
┋๏${prefix}𝐬𝐞𝐭𝐛𝐨𝐭𝐛𝐢𝐨 🅞
┋๏${prefix}𝐝𝐞𝐥𝐩𝐩𝐛𝐨𝐭 🅞
┋๏${prefix}𝐬𝐡𝐮𝐭𝐝𝐨𝐰𝐧 🅞
┋๏${prefix}𝐬𝐞𝐭𝐩𝐩𝐛𝐨𝐭 🅞
┋๏${prefix}𝐚𝐝𝐝𝐩𝐫𝐞𝐦 🅞
┋๏${prefix}𝐝𝐞𝐥𝐩𝐫𝐞𝐦 🅞
┋๏${prefix}𝐚𝐝𝐝𝐨𝐰𝐧𝐞𝐫 🅞
┋๏${prefix}𝐝𝐞𝐥𝐨𝐰𝐧𝐞𝐫 🅞
┋๏${prefix}𝐚𝐝𝐝𝐯𝐧 🅞
┋๏${prefix}𝐚𝐝𝐝𝐚𝐩𝐤 🅞
┋๏${prefix}𝐚𝐝𝐝𝐳𝐢𝐩 🅞
┋๏${prefix}𝐚𝐝𝐝𝐩𝐝𝐟 🅞
┋๏${prefix}𝐝𝐞𝐥𝐚𝐩𝐤 🅞
┋๏${prefix}𝐝𝐞𝐥𝐳𝐢𝐩 🅞
┋๏${prefix}𝐝𝐞𝐥𝐩𝐝𝐟 🅞
┋๏${prefix}𝐝𝐞𝐥𝐯𝐧 🅞
┋๏${prefix}𝐚𝐝𝐝𝐬𝐭𝐢𝐜𝐤𝐞𝐫 🅞
┋๏${prefix}𝐝𝐞𝐥𝐬𝐭𝐢𝐜𝐤𝐞𝐫 🅞
┋๏${prefix}𝐚𝐝𝐝𝐢𝐦𝐚𝐠𝐞 🅞
┋๏${prefix}𝐝𝐞𝐥𝐢𝐦𝐚𝐠𝐞 🅞
┋๏${prefix}𝐚𝐝𝐝𝐯𝐢𝐝𝐞𝐨 🅞
┋๏${prefix}𝐝𝐞𝐥𝐯𝐢𝐝𝐞𝐨 🅞
┋๏${prefix}𝐚𝐝𝐝𝐭𝐢𝐭𝐥𝐞 🅞
┋๏${prefix}𝐝𝐞𝐥𝐭𝐢𝐭𝐥𝐞 🅞
┋๏${prefix}𝐮𝐩𝐬𝐰𝐭𝐞𝐱𝐭 🅞
┋๏${prefix}𝐮𝐩𝐬𝐰𝐯𝐢𝐝𝐞𝐨 🅞
┋๏${prefix}𝐮𝐩𝐬𝐰𝐢𝐦𝐚𝐠𝐞 🅞
┋๏${prefix}𝐮𝐩𝐬𝐰𝐚𝐮𝐝𝐢𝐨 🅞
┋๏${prefix}𝐛𝐥𝐨𝐜𝐤 🅞
┋๏${prefix}𝐮𝐧𝐛𝐥𝐨𝐜𝐤 🅞
┋๏${prefix}𝐥𝐞𝐚𝐯𝐞𝐠𝐜 🅞
┋๏${prefix}𝐩𝐮𝐬𝐡𝐜𝐨𝐧𝐭𝐚𝐜𝐭 🅞
┋๏${prefix}𝐩𝐮𝐬𝐡𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐯2 🅞
╰–––––––––––––––༓

╭––『 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮 』
┋๏${prefix}𝐚𝐧𝐭𝐢𝐛𝐨𝐭 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞 🅖
┋๏${prefix}𝐰𝐞𝐥𝐜𝐨𝐦𝐞 🅖
┋๏${prefix}𝐚𝐝𝐦𝐢𝐧𝐞𝐯𝐞𝐧𝐭 🅖
┋๏${prefix}𝐠𝐫𝐨𝐮𝐩𝐞𝐯𝐞𝐧𝐭 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐟𝐨𝐫𝐞𝐢𝐠𝐧 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐦𝐞𝐝𝐢𝐚 🅖 
┋๏${prefix}𝐚𝐧𝐭𝐢𝐚𝐮𝐝𝐢𝐨 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐯𝐢𝐝𝐞𝐨 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐢𝐦𝐚𝐠𝐞 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐥𝐨𝐜𝐚𝐭𝐢𝐨𝐧 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐜𝐨𝐧𝐭𝐚𝐜𝐭 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐬𝐭𝐢𝐜𝐤𝐞𝐫 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐩𝐨𝐥𝐥 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝐠𝐜 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱 🅖
┋๏${prefix}𝐠𝐫𝐨𝐮𝐩𝐥𝐢𝐧𝐤 🅖
┋๏${prefix}𝐥𝐢𝐬𝐭𝐚𝐝𝐦𝐢𝐧 🅖
┋๏${prefix}𝐢𝐧𝐯𝐢𝐭𝐞 🅖
┋๏${prefix}𝐞𝐩𝐡𝐞𝐦𝐞𝐫𝐚𝐥 🅖
┋๏${prefix}𝐝𝐞𝐥𝐞𝐭𝐞 🅖
┋๏${prefix}𝐬𝐞𝐭𝐩𝐩𝐠𝐫𝐨𝐮𝐩 🅖
┋๏${prefix}𝐝𝐞𝐥𝐩𝐩𝐠𝐫𝐨𝐮𝐩 🅖
┋๏${prefix}𝐬𝐞𝐭𝐧𝐚𝐦𝐞𝐠𝐜 🅖
┋๏${prefix}𝐬𝐞𝐭𝐝𝐞𝐬𝐜 🅖
┋๏${prefix}𝐚𝐝𝐝 🅖
┋๏${prefix}𝐤𝐢𝐜𝐤 🅖
┋๏${prefix}𝐩𝐫𝐨𝐦𝐨𝐭𝐞 🅖
┋๏${prefix}𝐝𝐞𝐦𝐨𝐭𝐞 🅖
┋๏${prefix}𝐠𝐞𝐭𝐜𝐨𝐧𝐭𝐚𝐜𝐭 🅞
┋๏${prefix}𝐬𝐚𝐯𝐞𝐜𝐨𝐧𝐭𝐚𝐜𝐭 🅞
┋๏${prefix}𝐬𝐞𝐧𝐝𝐜𝐨𝐧𝐭𝐚𝐜𝐭 🅞
┋๏${prefix}𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐚𝐠 🅞
┋๏${prefix}𝐡𝐢𝐝𝐞𝐭𝐚𝐠 🅖
┋๏${prefix}𝐭𝐨𝐭𝐚𝐠 🅖
┋๏${prefix}𝐭𝐚𝐠𝐚𝐥𝐥 🅖
┋๏${prefix}𝐞𝐝𝐢𝐭𝐢𝐧𝐟𝐨 🅖
┋๏${prefix}𝐨𝐩𝐞𝐧𝐭𝐢𝐦𝐞 🅖
┋๏${prefix}𝐜𝐥𝐨𝐬𝐞𝐭𝐢𝐦𝐞 🅖
┋๏${prefix}𝐫𝐞𝐬𝐞𝐭𝐥𝐢𝐧𝐤 🅖
┋๏${prefix}𝐠𝐞𝐭𝐛𝐢𝐨 🅖
┋๏${prefix}𝐯𝐨𝐭𝐞 🅖
┋๏${prefix}𝐮𝐩𝐯𝐨𝐭𝐞 🅖
┋๏${prefix}𝐝𝐨𝐰𝐧𝐯𝐨𝐭𝐞 🅖
┋๏${prefix}𝐜𝐡𝐞𝐜𝐤𝐯𝐨𝐭𝐞 🅖
┋๏${prefix}𝐝𝐞𝐥𝐯𝐨𝐭𝐞 🅖
┋๏${prefix}𝐚𝐮𝐭𝐨𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐠𝐜 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐮𝐬 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐭𝐨𝐱𝐢𝐜 🅖
┋๏${prefix}𝐧𝐬𝐟𝐰 🅖
┋๏${prefix}𝐫𝐞𝐚𝐜𝐭 🅖
╰–––––––––––––––༓

╭––『 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮 』
┋๏${prefix}𝐲𝐭𝐬𝐞𝐚𝐫𝐜𝐡 🅕
┋๏${prefix}𝐢𝐭𝐮𝐧𝐞𝐬 🅕
┋๏${prefix}𝐩𝐥𝐚𝐲 🅕
┋๏${prefix}𝐲𝐭𝐦𝐩3 🅕
┋๏${prefix}𝐲𝐭𝐦𝐩4 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐚𝐮𝐝𝐢𝐨 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤 🅕
┋๏${prefix}𝐚𝐩𝐤 🅕
┋๏${prefix}𝐢𝐠𝐯𝐢𝐝𝐞𝐨 🅕
┋๏${prefix}𝐢𝐠𝐢𝐦𝐚𝐠𝐞 🅕
┋๏${prefix}𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 🅕
┋๏${prefix}𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 🅕
┋๏${prefix}𝐠𝐨𝐨𝐠𝐥𝐞 🅕
┋๏${prefix}𝐢𝐦𝐝𝐛 🅕
┋๏${prefix}𝐰𝐞𝐚𝐭𝐡𝐞𝐫 🅕
┋๏${prefix}𝐰𝐚𝐧𝐮𝐦𝐛𝐞𝐫 🅕
┋๏${prefix}𝐬𝐩𝐨𝐭𝐢𝐟𝐲 🅟
┋๏${prefix}𝐠𝐢𝐭𝐜𝐥𝐨𝐧𝐞 🅕
┋๏${prefix}𝐡𝐚𝐩𝐩𝐲𝐦𝐨𝐝 🅕
┋๏${prefix}𝐠𝐝𝐫𝐢𝐯𝐞 🅕
┋๏${prefix}𝐩𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭 🅕
┋๏${prefix}𝐫𝐢𝐧𝐠𝐭𝐨𝐧𝐞 🅕
╰–––––––––––––––༓

╭––『 𝐑𝐚𝐧𝐝𝐨𝐦 𝐕𝐢𝐝𝐞𝐨 』
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐠𝐢𝐫𝐥 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐧𝐮𝐤𝐭𝐡𝐲 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐤𝐚𝐲𝐞𝐬 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐩𝐚𝐧𝐫𝐢𝐤𝐚 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐧𝐨𝐭𝐧𝐨𝐭 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐠𝐡𝐞𝐚 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐬𝐚𝐧𝐭𝐮𝐲 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐛𝐨𝐜𝐢𝐥 🅕
╰–––––––––––––––༓

╭––『 𝐒𝐭𝐚𝐥𝐤𝐞𝐫 』
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐬𝐭𝐚𝐥𝐤 🅕
┋๏${prefix}6 𝐦𝐥𝐬𝐭𝐚𝐥𝐤 🅕
┋๏${prefix}𝐧𝐩𝐦𝐬𝐭𝐚𝐥𝐤 🅕
┋๏${prefix}𝐠𝐡𝐬𝐭𝐚𝐥𝐤 🅕
╰–––––––––––––––༓

╭–『 𝐎𝐩𝐞𝐧𝐀𝐈 』
┋๏${prefix}𝐨𝐩𝐞𝐧𝐚𝐢 🅕
┋๏${prefix}𝐦𝐚𝐭𝐡𝐬𝐚𝐢 🅕
┋๏${prefix}𝐛𝐚𝐫𝐝𝐚𝐢 🅕
┋๏${prefix}𝐩𝐡𝐨𝐭𝐨𝐥𝐞𝐚𝐩𝐚𝐢 🅕
┋๏${prefix}𝐥𝐚𝐦𝐚𝐚𝐢 🅕
┋๏${prefix}𝐠𝐞𝐦𝐢𝐧𝐢𝐚𝐢 🅕
┋๏${prefix}𝐛𝐥𝐚𝐜𝐤𝐛𝐨𝐱𝐚𝐢 🅕
┋๏${prefix}𝐜𝐨𝐥𝐨𝐫𝐢𝐳𝐞 🅕
┋๏${prefix}𝐞𝐧𝐡𝐚𝐧𝐜𝐞 🅕
┋๏${prefix}𝐝𝐞𝐡𝐚𝐳𝐞 🅕
┋๏${prefix}𝐝𝐚𝐥𝐥𝐞 🅕
┋๏${prefix}𝐚𝐢 🅕
┋๏${prefix}𝐫𝐞𝐦𝐢𝐧𝐢 🅕
╰–––––––––––––––༓

╭––『 𝐅𝐮𝐧 𝐌𝐞𝐧𝐮 』
┋๏${prefix}𝐝𝐞𝐟𝐢𝐧𝐞 🅕
┋๏${prefix}𝐥𝐲𝐫𝐢𝐜𝐬 🅕
┋๏${prefix}𝐬𝐮𝐢𝐭 🅕
┋๏${prefix}𝐦𝐚𝐭𝐡 🅕
┋๏${prefix}𝐭𝐢𝐜𝐭𝐚𝐜𝐭𝐨𝐞 🅕
┋๏${prefix}𝐟𝐚𝐜𝐭 🅕
┋๏${prefix}𝐭𝐫𝐮𝐭𝐡 🅕
┋๏${prefix}𝐝𝐚𝐫𝐞 🅕
┋๏${prefix}𝐜𝐨𝐮𝐩𝐥𝐞 🅕
┋๏${prefix}𝐬𝐨𝐮𝐥𝐦𝐚𝐭𝐞 🅕
┋๏${prefix}𝐬𝐭𝐮𝐩𝐢𝐝𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐡𝐚𝐧𝐝𝐬𝐨𝐦𝐞𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐮𝐧𝐜𝐥𝐞𝐚𝐧𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐡𝐨𝐭𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐬𝐦𝐚𝐫𝐭𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐠𝐫𝐞𝐚𝐭𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐞𝐯𝐢𝐥𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐝𝐨𝐠𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐜𝐨𝐨𝐥𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐰𝐚𝐢𝐟𝐮𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐚𝐰𝐞𝐬𝐨𝐦𝐞𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐠𝐚𝐲𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐜𝐮𝐭𝐞𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐥𝐞𝐬𝐛𝐢𝐚𝐧𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐡𝐨𝐫𝐧𝐲𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐩𝐫𝐞𝐭𝐭𝐲𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐥𝐨𝐯𝐞𝐥𝐲𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐮𝐠𝐥𝐲𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐩𝐢𝐜𝐤 🅕
┋๏${prefix}𝐩𝐢𝐜𝐤𝐮𝐩𝐥𝐢𝐧𝐞 🅕
┋๏${prefix}𝐪𝐮𝐨𝐭𝐞𝐬 🅕
┋๏${prefix}𝐜𝐚𝐧 🅕
┋๏${prefix}𝐢𝐬 🅕
┋๏${prefix}𝐰𝐡𝐞𝐧 🅕
┋๏${prefix}𝐰𝐡𝐞𝐫𝐞 🅕
┋๏${prefix}𝐰𝐡𝐚𝐭 🅕
┋๏${prefix}𝐡𝐨𝐰 🅕
┋๏${prefix}𝐫𝐚𝐭𝐞 🅕
┋๏${prefix}𝐜𝐫𝐲 🅕
┋๏${prefix}𝐤𝐢𝐥𝐥 🅕
┋๏${prefix}𝐡𝐮𝐠 🅕
┋๏${prefix}𝐩𝐚𝐭 🅕
┋๏${prefix}𝐥𝐢𝐜𝐤 🅕 
┋๏${prefix}𝐤𝐢𝐬𝐬 🅕
┋๏${prefix}𝐛𝐢𝐭𝐞 🅕
┋๏${prefix}𝐲𝐞𝐞𝐭 🅕
┋๏${prefix}𝐛𝐮𝐥𝐥𝐲 🅕
┋๏${prefix}𝐛𝐨𝐧𝐤 🅕
┋๏${prefix}𝐰𝐢𝐧𝐤 🅕
┋๏${prefix}𝐩𝐨𝐤𝐞 🅕
┋๏${prefix}𝐧𝐨𝐦 🅕
┋๏${prefix}𝐬𝐥𝐚𝐩 🅕
┋๏${prefix}𝐬𝐦𝐢𝐥𝐞 🅕 
┋๏${prefix}𝐰𝐚𝐯𝐞 🅕
┋๏${prefix}𝐚𝐰𝐨𝐨 🅕
┋๏${prefix}𝐛𝐥𝐮𝐬𝐡 🅕
┋๏${prefix}𝐬𝐦𝐮𝐠 🅕
┋๏${prefix}𝐠𝐥𝐨𝐦𝐩 🅕 
┋๏${prefix}𝐡𝐚𝐩𝐩𝐲 🅕
┋๏${prefix}𝐝𝐚𝐧𝐜𝐞 🅕
┋๏${prefix}𝐜𝐫𝐢𝐧𝐠𝐞 🅕
┋๏${prefix}𝐜𝐮𝐝𝐝𝐥𝐞 🅕
┋๏${prefix}𝐡𝐢𝐠𝐡𝐟𝐢𝐯𝐞 🅕 
┋๏${prefix}𝐬𝐡𝐢𝐧𝐨𝐛𝐮 🅕
┋๏${prefix}𝐡𝐚𝐧𝐝𝐡𝐨𝐥𝐝 🅕
┋๏${prefix}𝐬𝐩𝐚𝐧𝐤 🅕
┋๏${prefix}𝐭𝐢𝐜𝐤𝐥𝐞 🅕
┋๏${prefix}𝐚𝐯𝐚𝐭𝐚𝐫 🅕
┋๏${prefix}𝐟𝐞𝐞𝐝 🅕
┋๏${prefix}𝐟𝐨𝐱_𝐠𝐢𝐫𝐥 🅕
┋๏${prefix}𝐠𝐞𝐜𝐠 🅕
┋๏${prefix}𝐜𝐡𝐞𝐜𝐤𝐦𝐞 🅕
┋๏${prefix}𝐬𝐨𝐮𝐧𝐝1 - 𝐬𝐨𝐮𝐧𝐝161 🅕
╰–––––––––––––––༓

╭––『 𝐑𝐚𝐧𝐝𝐨𝐦 𝐏𝐡𝐨𝐭𝐨 』
┋๏${prefix}𝐚𝐞𝐬𝐭𝐡𝐞𝐭𝐢𝐜 🅕
┋๏${prefix}𝐜𝐨𝐟𝐟𝐞𝐞 🅕
┋๏${prefix}𝐰𝐢𝐤𝐢𝐦𝐞𝐝𝐢𝐚 🅕
┋๏${prefix}𝐰𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 🅕
┋๏${prefix}𝐚𝐫𝐭 🅕
┋๏${prefix}𝐛𝐭𝐬 🅕
┋๏${prefix}𝐝𝐨𝐠𝐰𝐨𝐨𝐟 🅕
┋๏${prefix}𝐜𝐚𝐭𝐦𝐞𝐨𝐰 🅕
┋๏${prefix}𝐥𝐢𝐳𝐚𝐫𝐝𝐩𝐢𝐜 🅕
┋๏${prefix}𝐠𝐨𝐨𝐬𝐞𝐛𝐢𝐫𝐝 🅕
┋๏${prefix}8𝐛𝐚𝐥𝐥𝐩𝐨𝐨𝐥 🅕
┋๏${prefix}𝐜𝐨𝐬𝐩𝐥𝐚𝐲 🅕
┋๏${prefix}𝐡𝐚𝐜𝐤𝐞𝐫 🅕
┋๏${prefix}𝐜𝐲𝐛𝐞𝐫 🅕
┋๏${prefix}𝐠𝐚𝐦𝐞𝐰𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 🅕
┋๏${prefix}𝐢𝐬𝐥𝐚𝐦𝐢𝐜 🅕
┋๏${prefix}𝐣𝐞𝐧𝐧𝐢𝐞 🅕
┋๏${prefix}𝐣𝐢𝐬𝐨 🅕
┋๏${prefix}𝐬𝐚𝐭𝐚𝐧𝐢𝐜 🅕
┋๏${prefix}𝐣𝐮𝐬𝐭𝐢𝐧𝐚 🅕
┋๏${prefix}𝐜𝐚𝐫𝐭𝐨𝐨𝐧 🅕
┋๏${prefix}𝐩𝐞𝐧𝐭𝐨𝐥 🅕
┋๏${prefix}𝐜𝐚𝐭 🅕
┋๏${prefix}𝐤𝐩𝐨𝐩 🅕
┋๏${prefix}𝐞𝐱𝐨 🅕
┋๏${prefix}𝐥𝐢𝐬𝐚 🅕
┋๏${prefix}𝐬𝐩𝐚𝐜𝐞 🅕
┋๏${prefix}𝐜𝐚𝐫 🅕
┋๏${prefix}𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 🅕
┋๏${prefix}𝐛𝐢𝐤𝐞 🅕
┋๏${prefix}𝐬𝐡𝐨𝐫𝐭𝐪𝐮𝐨𝐭𝐞 🅕
┋๏${prefix}𝐚𝐧𝐭𝐢𝐰𝐨𝐫𝐤 🅕
┋๏${prefix}𝐡𝐚𝐜𝐤𝐢𝐧𝐠 🅕
┋๏${prefix}𝐛𝐨𝐧𝐞𝐤𝐚 🅕
┋๏${prefix}𝐫𝐨𝐬𝐞 🅕
┋๏${prefix}𝐫𝐲𝐮𝐣𝐢𝐧 🅕
┋๏${prefix}𝐮𝐥𝐳𝐳𝐚𝐧𝐠𝐛𝐨𝐲 🅕
┋๏${prefix}𝐮𝐥𝐳𝐳𝐚𝐧𝐠𝐠𝐢𝐫𝐥 🅕
┋๏${prefix}𝐰𝐚𝐥𝐥𝐦𝐥 🅕
┋๏${prefix}𝐰𝐚𝐥𝐥𝐩𝐡𝐨𝐧𝐞 🅕
┋๏${prefix}𝐦𝐨𝐮𝐧𝐭𝐚𝐢𝐧 🅕
┋๏${prefix}𝐠𝐨𝐨𝐬𝐞 🅕
┋๏${prefix}𝐩𝐫𝐨𝐟𝐢𝐥𝐞𝐩𝐢𝐜 🅕
┋๏${prefix}𝐜𝐨𝐮𝐩𝐥𝐞𝐩𝐩 🅕
┋๏${prefix}𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 🅕
┋๏${prefix}𝐩𝐮𝐛𝐠 🅕
┋๏${prefix}𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤 🅕
┋๏${prefix}𝐫𝐚𝐧𝐝𝐨𝐦𝐛𝐨𝐲 🅕  
┋๏${prefix}𝐫𝐚𝐧𝐝𝐨𝐦𝐠𝐢𝐫𝐥 🅕
┋๏${prefix}𝐡𝐢𝐣𝐚𝐛 🅕  
┋๏${prefix}𝐜𝐡𝐢𝐧𝐞𝐬𝐞 🅕
┋๏${prefix}𝐢𝐧𝐝𝐨 🅕
┋๏${prefix}𝐣𝐚𝐩𝐚𝐧𝐞𝐬𝐞 🅕
┋๏${prefix}𝐤𝐨𝐫𝐞𝐚𝐧 🅕
┋๏${prefix}𝐦𝐚𝐥𝐚𝐲 🅕
┋๏${prefix}𝐭𝐡𝐚𝐢 🅕
┋๏${prefix}𝐯𝐢𝐞𝐭𝐧𝐚𝐦𝐞𝐬𝐞 🅕
╰–––––––––––––––༓

╭––『 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 』
┋๏${prefix}𝐠𝐨𝐨𝐬𝐞 🅕
┋๏${prefix}𝐰𝐨𝐨𝐟 🅕
┋๏${prefix}8𝐛𝐚𝐥𝐥 🅕
┋๏${prefix}𝐥𝐢𝐳𝐚𝐫𝐝 🅕
┋๏${prefix}𝐦𝐞𝐨𝐰 🅕
┋๏${prefix}𝐠𝐮𝐫𝐚 🅕
┋๏${prefix}𝐝𝐨𝐠𝐞 🅕
┋๏${prefix}𝐩𝐚𝐭𝐫𝐢𝐜𝐤 🅕
┋๏${prefix}𝐥𝐨𝐯𝐞𝐬𝐭𝐢𝐜𝐤 🅕
┋๏${prefix}𝐭𝐞𝐥𝐞𝐬𝐭𝐢𝐜𝐤 🅕
┋๏${prefix}𝐭𝐭𝐩 🅕
┋๏${prefix}𝐚𝐭𝐭𝐩 🅕
╰–––––––––––––––༓

╭––『 𝐀𝐧𝐢𝐦𝐞 』
┋๏${prefix}𝐚𝐤𝐢𝐫𝐚 🅕
┋๏${prefix}𝐚𝐤𝐢𝐲𝐚𝐦𝐚 🅕
┋๏${prefix}𝐚𝐧𝐚 🅕
┋๏${prefix}𝐚𝐬𝐮𝐧𝐚 🅕
┋๏${prefix}𝐚𝐲𝐮𝐳𝐚𝐰𝐚 🅕
┋๏${prefix}𝐛𝐨𝐫𝐮𝐭𝐨 🅕
┋๏${prefix}𝐜𝐡𝐢𝐡𝐨 🅕
┋๏${prefix}𝐜𝐡𝐢𝐭𝐨𝐠𝐞 🅕
┋๏${prefix}𝐜𝐨𝐬𝐩𝐥𝐚𝐲𝐥𝐨𝐥𝐢 🅕
┋๏${prefix}𝐜𝐨𝐬𝐩𝐥𝐚𝐲𝐬𝐚𝐠𝐢𝐫𝐢 🅕
┋๏${prefix}𝐝𝐞𝐢𝐝𝐚𝐫𝐚 🅕
┋๏${prefix}𝐝𝐨𝐫𝐚𝐞𝐦𝐨𝐧 🅕
┋๏${prefix}𝐞𝐥𝐚𝐢𝐧𝐚 🅕
┋๏${prefix}𝐞𝐦𝐢𝐥𝐢𝐚 🅕
┋๏${prefix}𝐞𝐫𝐳𝐚 🅕
┋๏${prefix}𝐠𝐫𝐞𝐦𝐨𝐫𝐲 🅕
┋๏${prefix}𝐡𝐞𝐬𝐭𝐢𝐚 🅕
┋๏${prefix}𝐡𝐮𝐬𝐛𝐮 🅕
┋๏${prefix}𝐢𝐧𝐨𝐫𝐢 🅕
┋๏${prefix}𝐢𝐬𝐮𝐳𝐮 🅕
┋๏${prefix}𝐢𝐭𝐚𝐜𝐡𝐢 🅕
┋๏${prefix}𝐢𝐭𝐨𝐫𝐢 🅕
┋๏${prefix}𝐤𝐚𝐠𝐚 🅕
┋๏${prefix}𝐤𝐚𝐠𝐮𝐫𝐚 🅕
┋๏${prefix}𝐤𝐚𝐤𝐚𝐬𝐢𝐡 🅕
┋๏${prefix}𝐤𝐚𝐨𝐫𝐢 🅕
┋๏${prefix}𝐤𝐞𝐧𝐞𝐤𝐢 🅕
┋๏${prefix}𝐤𝐨𝐭𝐨𝐫𝐢 🅕
┋๏${prefix}𝐤𝐮𝐫𝐮𝐦𝐢 🅕
┋๏${prefix}𝐥𝐨𝐥𝐢 🅕
┋๏${prefix}𝐥𝐨𝐥𝐢2 🅕
┋๏${prefix}𝐦𝐚𝐝𝐚𝐫𝐚 🅕
┋๏${prefix}𝐦𝐞𝐠𝐮𝐦𝐢𝐧 🅕
┋๏${prefix}𝐦𝐢𝐤𝐚𝐬𝐚 🅕
┋๏${prefix}𝐦𝐢𝐤𝐞𝐲 🅕
┋๏${prefix}𝐦𝐢𝐤𝐮 🅕
┋๏${prefix}𝐦𝐢𝐧𝐚𝐭𝐨 🅕
┋๏${prefix}𝐧𝐚𝐫𝐮𝐭𝐨 🅕
┋๏${prefix}𝐧𝐞𝐤𝐨 🅕
┋๏${prefix}𝐧𝐞𝐤𝐨𝐧𝐢𝐦𝐞 🅕
┋๏${prefix}𝐧𝐞𝐳𝐮𝐤𝐨 🅕
┋๏${prefix}𝐨𝐧𝐞𝐩𝐢𝐞𝐜𝐞 🅕
┋๏${prefix}𝐩𝐨𝐤𝐞𝐦𝐨𝐧 🅕
┋๏${prefix}𝐫𝐚𝐧𝐝𝐨𝐦𝐧𝐢𝐦𝐞 🅕
┋๏${prefix}𝐫𝐚𝐧𝐝𝐨𝐦𝐧𝐢𝐦𝐞2 🅕
┋๏${prefix}𝐫𝐢𝐳𝐞 🅕
┋๏${prefix}𝐬𝐚𝐠𝐢𝐫𝐢 🅕
┋๏${prefix}𝐬𝐚𝐤𝐮𝐫𝐚 🅕
┋๏${prefix}𝐬𝐚𝐬𝐮𝐤𝐞 🅕
┋๏${prefix}𝐬𝐡𝐢𝐧𝐚 🅕
┋๏${prefix}𝐬𝐡𝐢𝐧𝐤𝐚 🅕
┋๏${prefix}𝐬𝐡𝐢𝐧𝐨𝐦𝐢𝐲𝐚 🅕
┋๏${prefix}𝐬𝐡𝐢𝐳𝐮𝐤𝐚 🅕
┋๏${prefix}𝐬𝐡𝐨𝐭𝐚 🅕
┋๏${prefix}𝐭𝐞𝐣𝐢𝐧𝐚 🅕
┋๏${prefix}𝐭𝐨𝐮𝐤𝐚𝐜𝐡𝐚𝐧 🅕
┋๏${prefix}𝐭𝐬𝐮𝐧𝐚𝐝𝐞 🅕
┋๏${prefix}𝐰𝐚𝐢𝐟𝐮 🅕
┋๏${prefix}𝐰𝐚𝐢𝐟𝐮2 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐰𝐚𝐥𝐥 🅕
┋๏${prefix}𝐲𝐨𝐭𝐬𝐮𝐛𝐚 🅕
┋๏${prefix}𝐲𝐮𝐤𝐢 🅕
┋๏${prefix}𝐲𝐮𝐥𝐢𝐛𝐨𝐜𝐢𝐥 🅕
┋๏${prefix}𝐲𝐮𝐦𝐞𝐤𝐨 🅕
┋๏${prefix}8𝐛𝐚𝐥𝐥 🅕
┋๏${prefix}𝐭𝐢𝐜𝐤𝐥𝐞 🅕
┋๏${prefix}𝐠𝐞𝐜𝐠 🅕
┋๏${prefix}𝐟𝐞𝐞𝐝 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐚𝐰𝐨𝐨 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐦𝐞𝐠𝐮𝐦𝐢𝐧 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐬𝐡𝐢𝐧𝐨𝐛𝐮 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐡𝐚𝐧𝐝𝐡𝐨𝐥𝐝 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐡𝐢𝐠𝐡𝐟𝐢𝐯𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐜𝐫𝐢𝐧𝐠𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐝𝐚𝐧𝐜𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐡𝐚𝐩𝐩𝐲 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐠𝐥𝐨𝐦𝐩 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐛𝐥𝐮𝐬𝐡 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐬𝐦𝐮𝐠 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐰𝐚𝐯𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐬𝐦𝐢𝐥𝐥𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐩𝐨𝐤𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐰𝐢𝐧𝐤 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐛𝐨𝐧𝐤 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐛𝐮𝐥𝐥𝐲 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐲𝐞𝐞𝐭 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐛𝐢𝐭𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐥𝐢𝐜𝐤 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐤𝐢𝐥𝐥 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐜𝐫𝐲 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐰𝐥𝐩 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐤𝐢𝐬𝐬 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐡𝐮𝐠 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐧𝐞𝐤𝐨 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐩𝐚𝐭 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐬𝐥𝐚𝐩 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐜𝐮𝐝𝐝𝐥𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐰𝐚𝐢𝐟𝐮 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐧𝐨𝐦 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐟𝐨𝐱𝐠𝐢𝐫𝐥 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐠𝐞𝐜𝐠 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐭𝐢𝐜𝐤𝐥𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐟𝐞𝐞𝐝 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐚𝐯𝐚𝐭𝐚𝐫 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞 🅕
╰–––––––––––––––༓

╭––『 𝐀𝐧𝐢𝐦𝐞 𝐍𝐒𝐅𝐖 』
┋๏${prefix}𝐡𝐞𝐧𝐭𝐚𝐢 🅕
┋๏${prefix}𝐠𝐢𝐟𝐡𝐞𝐧𝐭𝐚𝐢 🅕
┋๏${prefix}𝐠𝐢𝐟𝐛𝐥𝐨𝐰𝐣𝐨𝐛 🅕
┋๏${prefix}𝐡𝐞𝐧𝐭𝐚𝐢𝐯𝐢𝐝 🅕
┋๏${prefix}𝐡𝐧𝐞𝐤𝐨 🅕
┋๏${prefix}𝐧𝐰𝐚𝐢𝐟𝐮 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐬𝐩𝐚𝐧𝐤 🅕
┋๏${prefix}𝐭𝐫𝐚𝐩 🅕
┋๏${prefix}𝐛𝐥𝐨𝐰𝐣𝐨𝐛 🅕
┋๏${prefix}𝐜𝐮𝐜𝐤𝐨𝐥𝐝 🅕
┋๏${prefix}𝐦𝐢𝐥𝐟 🅕
┋๏${prefix}𝐞𝐛𝐚 🅕
┋๏${prefix}𝐠𝐚𝐧𝐠𝐛𝐚𝐧𝐠 🅕
┋๏${prefix}𝐧𝐞𝐤𝐨-𝐡𝐞𝐧𝐭𝐚𝐢 🅕
┋๏${prefix}𝐧𝐬𝐟𝐰𝐥𝐨𝐥𝐢 🅕
┋๏${prefix}𝐩𝐮𝐬𝐬𝐲 🅕
┋๏${prefix}𝐲𝐮𝐫𝐢 🅕
┋๏${prefix}𝐳𝐞𝐭𝐭𝐚𝐢 🅕
╰–––––––––––––––༓

╭––『 𝐏𝐡𝐨𝐭𝐨𝐎𝐱𝐲 𝐌𝐚𝐤𝐞𝐫 』
┋๏${prefix}𝐬𝐡𝐚𝐝𝐨𝐰 🅕 
┋๏${prefix}𝐰𝐫𝐢𝐭𝐞 🅕 
┋๏${prefix}𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜 🅕 
┋๏${prefix}𝐛𝐮𝐫𝐧𝐩𝐚𝐩𝐞𝐫 🅕
┋๏${prefix}𝐬𝐦𝐨𝐤𝐞 🅕 
┋๏${prefix}𝐧𝐚𝐫𝐮𝐭𝐨𝐛𝐚𝐧𝐧𝐞𝐫 🅕 
┋๏${prefix}𝐥𝐨𝐯𝐞 🅕 
┋๏${prefix}𝐮𝐧𝐝𝐞𝐫𝐠𝐫𝐚𝐬𝐬 🅕
┋๏${prefix}𝐝𝐨𝐮𝐛𝐥𝐞𝐥𝐨𝐯𝐞 🅕 
┋๏${prefix}𝐜𝐨𝐟𝐟𝐞𝐜𝐮𝐩 🅕
┋๏${prefix}𝐮𝐧𝐝𝐞𝐫𝐰𝐚𝐭𝐞𝐫𝐨𝐜𝐞𝐚𝐧 🅕
┋๏${prefix}𝐬𝐦𝐨𝐤𝐲𝐧𝐞𝐨𝐧 🅕
┋๏${prefix}𝐬𝐭𝐚𝐫𝐬𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐫𝐚𝐢𝐧𝐛𝐨𝐰𝐞𝐟𝐟𝐞𝐜𝐭 🅕
┋๏${prefix}𝐛𝐚𝐥𝐥𝐨𝐨𝐧𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐦𝐞𝐭𝐚𝐥𝐥𝐢𝐜𝐞𝐟𝐟𝐞𝐜𝐭 🅕
┋๏${prefix}𝐞𝐦𝐛𝐫𝐨𝐢𝐝𝐞𝐫𝐲𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐟𝐥𝐚𝐦𝐢𝐧𝐠𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐬𝐭𝐨𝐧𝐞𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐰𝐫𝐢𝐭𝐞𝐚𝐫𝐭 🅕
┋๏${prefix}𝐬𝐮𝐦𝐦𝐞𝐫𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐰𝐨𝐥𝐟𝐦𝐞𝐭𝐚𝐥𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐧𝐚𝐭𝐮𝐫𝐞3𝐝𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐫𝐨𝐬𝐞𝐬𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐧𝐚𝐭𝐮𝐫𝐞𝐭𝐲𝐩𝐨𝐠𝐫𝐚𝐩𝐡𝐲 🅕
┋๏${prefix}𝐪𝐮𝐨𝐭𝐞𝐬𝐮𝐧𝐝𝐞𝐫 🅕
┋๏${prefix}𝐬𝐡𝐢𝐧𝐞𝐭𝐞𝐱𝐭 🅕
╰–––––––––––––––༓

╭––『 𝐄𝐩𝐡𝐨𝐭𝐨360 𝐌𝐚𝐤𝐞𝐫 』
┋๏${prefix}𝐠𝐥𝐢𝐭𝐜𝐡𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐰𝐫𝐢𝐭𝐞𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐚𝐝𝐯𝐚𝐧𝐜𝐞𝐝𝐠𝐥𝐨𝐰 🅕
┋๏${prefix}𝐭𝐲𝐩𝐨𝐠𝐫𝐚𝐩𝐡𝐲𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐩𝐢𝐱𝐞𝐥𝐠𝐥𝐢𝐭𝐜𝐡 🅕
┋๏${prefix}𝐧𝐞𝐨𝐧𝐠𝐥𝐢𝐭𝐜𝐡 🅕
┋๏${prefix}𝐟𝐥𝐚𝐠𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐟𝐥𝐚𝐠3𝐝𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐝𝐞𝐥𝐞𝐭𝐢𝐧𝐠𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤𝐬𝐭𝐲𝐥𝐞 🅕
┋๏${prefix}𝐠𝐥𝐨𝐰𝐢𝐧𝐠𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐮𝐧𝐝𝐞𝐫𝐰𝐚𝐭𝐞𝐫𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐥𝐨𝐠𝐨𝐦𝐚𝐤𝐞𝐫 🅕
┋๏${prefix}𝐜𝐚𝐫𝐭𝐨𝐨𝐧𝐬𝐭𝐲𝐥𝐞 🅕
┋๏${prefix}𝐩𝐚𝐩𝐞𝐫𝐜𝐮𝐭𝐬𝐭𝐲𝐥𝐞 🅕
┋๏${prefix}𝐰𝐚𝐭𝐞𝐫𝐜𝐨𝐥𝐨𝐫𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐞𝐟𝐟𝐞𝐜𝐭𝐜𝐥𝐨𝐮𝐝𝐬 🅕
┋๏${prefix}𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤𝐥𝐨𝐠𝐨 🅕
┋๏${prefix}𝐠𝐫𝐚𝐝𝐢𝐞𝐧𝐭𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐬𝐮𝐦𝐦𝐞𝐫𝐛𝐞𝐚𝐜𝐡 🅕
┋๏${prefix}𝐥𝐮𝐱𝐮𝐫𝐲𝐠𝐨𝐥𝐝 🅕
┋๏${prefix}𝐦𝐮𝐥𝐭𝐢𝐜𝐨𝐥𝐨𝐫𝐞𝐝𝐧𝐞𝐨𝐧 🅕
┋๏${prefix}𝐬𝐚𝐧𝐝𝐬𝐮𝐦𝐦𝐞𝐫 🅕
┋๏${prefix}𝐠𝐚𝐥𝐚𝐱𝐲𝐰𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 🅕
┋๏${prefix}1917𝐬𝐭𝐲𝐥𝐞 🅕
┋๏${prefix}𝐦𝐚𝐤𝐢𝐧𝐠𝐧𝐞𝐨𝐧 🅕
┋๏${prefix}𝐫𝐨𝐲𝐚𝐥𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐟𝐫𝐞𝐞𝐜𝐫𝐞𝐚𝐭𝐞 🅕
┋๏${prefix}𝐠𝐚𝐥𝐚𝐱𝐲𝐬𝐭𝐲𝐥𝐞 🅕
┋๏${prefix}𝐥𝐢𝐠𝐡𝐭𝐞𝐟𝐟𝐞𝐜𝐭𝐬 🅕
╰–––––––––––––––༓

╭––『 𝐌𝐚𝐤𝐞𝐫 』
┋๏${prefix}𝐛𝐥𝐮𝐫 🅕
┋๏${prefix}𝐛𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 🅕
┋๏${prefix}𝐟𝐚𝐜𝐞𝐩𝐚𝐥𝐦 🅕
┋๏${prefix}𝐢𝐧𝐯𝐞𝐫𝐭 🅕
┋๏${prefix}𝐩𝐢𝐱𝐞𝐥𝐚𝐭𝐞 🅕
┋๏${prefix}𝐫𝐚𝐢𝐧𝐛𝐨𝐰 🅕
┋๏${prefix}𝐭𝐫𝐢𝐠𝐠𝐞𝐫 🅕
┋๏${prefix}𝐰𝐚𝐧𝐭𝐞𝐝 🅕
┋๏${prefix}𝐰𝐚𝐬𝐭𝐞𝐝 🅕
┋๏${prefix}𝐜𝐚𝐫𝐛𝐨𝐧 🅕
╰–––––––––––––––༓

╭––『 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 』
┋๏${prefix}𝐬𝐞𝐭𝐜𝐦𝐝 🅕
┋๏${prefix}𝐝𝐞𝐥𝐜𝐦𝐝 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐜𝐦𝐝 🅕
┋๏${prefix}𝐥𝐨𝐜𝐤𝐜𝐦𝐝 🅕
┋๏${prefix}𝐚𝐝𝐝𝐦𝐬𝐠 🅕
┋๏${prefix}𝐝𝐞𝐥𝐦𝐬𝐠 🅕
┋๏${prefix}𝐠𝐞𝐭𝐦𝐬𝐠 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐦𝐬𝐠 🅕
╰–––––––––––––––༓

╭––『 𝐁𝐮𝐠 & 𝐖𝐚𝐫 』
┋๏${prefix}𝐚𝐦𝐨𝐮𝐧𝐭𝐛𝐮𝐠 🅟
┋๏${prefix}𝐩𝐦𝐛𝐮𝐠 🅟
┋๏${prefix}𝐝𝐞𝐥𝐚𝐲𝐛𝐮𝐠 🅟
┋๏${prefix}𝐝𝐨𝐜𝐮𝐛𝐮𝐠 🅟
┋๏${prefix}𝐮𝐧𝐥𝐢𝐦𝐢𝐭𝐞𝐝𝐛𝐮𝐠 🅟
┋๏${prefix}𝐛𝐨𝐦𝐛𝐮𝐠 🅟
┋๏${prefix}𝐥𝐚𝐠𝐛𝐮𝐠 🅟
┋๏${prefix}𝐭𝐫𝐨𝐥𝐥𝐲𝐛𝐮𝐠 🅟
┋๏${prefix}𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐝𝐞𝐥𝐚𝐲𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐥𝐚𝐠𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐛𝐨𝐦𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐮𝐧𝐥𝐢𝐦𝐢𝐭𝐞𝐝𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐭𝐫𝐨𝐥𝐥𝐲𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐝𝐨𝐜𝐮𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐯𝐞𝐫𝐢𝐟 🅟
┋๏${prefix}𝐛𝐚𝐧𝐯1 🅟
┋๏${prefix}𝐛𝐚𝐧𝐯2 🅟
┋๏${prefix}𝐛𝐚𝐧𝐯3 🅟
┋๏${prefix}𝐛𝐚𝐧𝐯4 🅟
┋๏${prefix}𝐛𝐚𝐧𝐯5 🅟
┋๏${prefix}𝐛𝐚𝐧𝐯6 🅟
┋๏${prefix}𝐮𝐧𝐛𝐚𝐧𝐯1 🅟
┋๏${prefix}𝐮𝐧𝐛𝐚𝐧𝐯2 🅟
┋๏${prefix}𝐮𝐧𝐛𝐚𝐧𝐯3 🅟
┋๏${prefix}𝐮𝐧𝐛𝐚𝐧𝐯4 🅟
┋๏${prefix}𝐮𝐧𝐛𝐚𝐧𝐯5 🅟
╰–––––––––––––––༓

╭––『 𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮 』
┋๏${prefix}𝐩𝐢𝐧𝐠 🅕
┋๏${prefix}𝐦𝐞𝐧𝐮 🅕
┋๏${prefix}𝐦𝐲𝐢𝐩 🅕
┋๏${prefix}𝐫𝐞𝐩𝐨 🅕
┋๏${prefix}𝐫𝐞𝐩𝐨𝐫𝐭𝐛𝐮𝐠 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐨𝐰𝐧𝐞𝐫 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐬𝐭𝐢𝐜𝐤𝐞𝐫 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐢𝐦𝐚𝐠𝐞 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐯𝐢𝐝𝐞𝐨 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐯𝐧 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐚𝐩𝐤 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐳𝐢𝐩 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐩𝐝𝐟 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐛𝐚𝐝𝐰𝐨𝐫𝐝 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐩𝐜 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐠𝐜 🅕
┋๏${prefix}𝐢𝐝𝐠𝐫𝐨𝐮𝐩 🅕
┋๏${prefix}𝐨𝐰𝐧𝐞𝐫 🅕
┋๏${prefix}𝐫𝐞𝐧𝐭𝐛𝐨𝐭 🅕
┋๏${prefix}𝐝𝐨𝐧𝐚𝐭𝐞 🅕
┋๏${prefix}𝐟𝐫𝐢𝐞𝐧𝐝 🅕
┋๏${prefix}𝐨𝐛𝐟𝐮𝐬𝐜𝐚𝐭𝐞 🅕
┋๏${prefix}𝐬𝐭𝐲𝐥𝐞𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐟𝐥𝐢𝐩𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐭𝐭𝐬 🅕
┋๏${prefix}𝐬𝐚𝐲 🅕
┋๏${prefix}𝐭𝐨𝐠𝐢𝐟 🅕
┋๏${prefix}𝐭𝐨𝐪𝐫 🅕
┋๏${prefix}𝐛𝐚𝐬𝐬 🅕
┋๏${prefix}𝐛𝐥𝐨𝐰𝐧 🅕
┋๏${prefix}𝐝𝐞𝐞𝐩 🅕
┋๏${prefix}𝐞𝐚𝐫𝐫𝐚𝐩𝐞 🅕
┋๏${prefix}𝐟𝐚𝐬𝐭 🅕
┋๏${prefix}𝐟𝐚𝐭 🅕
┋๏${prefix}𝐧𝐢𝐠𝐡𝐭𝐜𝐨𝐫𝐞 🅕
┋๏${prefix}𝐫𝐞𝐯𝐞𝐫𝐬𝐞 🅕
┋๏${prefix}𝐫𝐨𝐛𝐨𝐭 🅕
┋๏${prefix}𝐬𝐥𝐨𝐰 🅕
┋๏${prefix}𝐬𝐦𝐨𝐨𝐭𝐡 🅕
┋๏${prefix}𝐬𝐪𝐮𝐢𝐫𝐫𝐞𝐥 🅕
┋๏${prefix}𝐭𝐢𝐧𝐲𝐮𝐫𝐥 🅕
┋๏${prefix}𝐭𝐨𝐯𝐧 🅕
┋๏${prefix}𝐭𝐨𝐚𝐮𝐝𝐢𝐨 🅕
┋๏${prefix}𝐭𝐨𝐦𝐩3 🅕
┋๏${prefix}𝐭𝐨𝐦𝐩4🅕
┋๏${prefix}𝐭𝐨𝐢𝐦𝐠 🅕
┋๏${prefix}𝐭𝐨𝐨𝐧𝐜𝐞 🅕
┋๏${prefix}𝐬𝐭𝐢𝐜𝐤𝐞𝐫 🅕
┋๏${prefix}𝐭𝐚𝐤𝐞 🅟
┋๏${prefix}𝐞𝐦𝐨𝐣𝐢 🅕
┋๏${prefix}𝐯𝐨𝐥𝐚𝐮𝐝𝐢𝐨 🅕
┋๏${prefix}𝐯𝐨𝐥𝐯𝐢𝐝𝐞𝐨 🅕
┋๏${prefix}𝐞𝐛𝐢𝐧𝐚𝐫𝐲 🅕
┋๏${prefix}𝐝𝐛𝐢𝐧𝐚𝐫𝐲 🅕
┋๏${prefix}𝐬𝐬𝐰𝐞𝐛 🅕
┋๏${prefix}𝐪𝐮𝐨𝐭𝐞𝐝 🅕
┋๏${prefix}𝐫𝐮𝐧𝐭𝐢𝐦𝐞 🅕
┋๏${prefix}𝐜𝐡𝐞𝐜𝐤𝐚𝐜𝐜𝐨𝐮𝐧𝐭 🅕
┋๏${prefix}𝐭𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞 🅕
┋๏${prefix}𝐪𝐮𝐫𝐚𝐧 🅕
┋๏${prefix}𝐛𝐢𝐛𝐥𝐞 🅕
╰–––––––––––––––༓
`}

global.animemenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐀𝐧𝐢𝐦𝐞 』
┋๏${prefix}𝐚𝐤𝐢𝐫𝐚 🅕
┋๏${prefix}𝐚𝐤𝐢𝐲𝐚𝐦𝐚 🅕
┋๏${prefix}𝐚𝐧𝐚 🅕
┋๏${prefix}𝐚𝐬𝐮𝐧𝐚 🅕
┋๏${prefix}𝐚𝐲𝐮𝐳𝐚𝐰𝐚 🅕
┋๏${prefix}𝐛𝐨𝐫𝐮𝐭𝐨 🅕
┋๏${prefix}𝐜𝐡𝐢𝐡𝐨 🅕
┋๏${prefix}𝐜𝐡𝐢𝐭𝐨𝐠𝐞 🅕
┋๏${prefix}𝐜𝐨𝐬𝐩𝐥𝐚𝐲𝐥𝐨𝐥𝐢 🅕
┋๏${prefix}𝐜𝐨𝐬𝐩𝐥𝐚𝐲𝐬𝐚𝐠𝐢𝐫𝐢 🅕
┋๏${prefix}𝐝𝐞𝐢𝐝𝐚𝐫𝐚 🅕
┋๏${prefix}𝐝𝐨𝐫𝐚𝐞𝐦𝐨𝐧 🅕
┋๏${prefix}𝐞𝐥𝐚𝐢𝐧𝐚 🅕
┋๏${prefix}𝐞𝐦𝐢𝐥𝐢𝐚 🅕
┋๏${prefix}𝐞𝐫𝐳𝐚 🅕
┋๏${prefix}𝐠𝐫𝐞𝐦𝐨𝐫𝐲 🅕
┋๏${prefix}𝐡𝐞𝐬𝐭𝐢𝐚 🅕
┋๏${prefix}𝐡𝐮𝐬𝐛𝐮 🅕
┋๏${prefix}𝐢𝐧𝐨𝐫𝐢 🅕
┋๏${prefix}𝐢𝐬𝐮𝐳𝐮 🅕
┋๏${prefix}𝐢𝐭𝐚𝐜𝐡𝐢 🅕
┋๏${prefix}𝐢𝐭𝐨𝐫𝐢 🅕
┋๏${prefix}𝐤𝐚𝐠𝐚 🅕
┋๏${prefix}𝐤𝐚𝐠𝐮𝐫𝐚 🅕
┋๏${prefix}𝐤𝐚𝐤𝐚𝐬𝐢𝐡 🅕
┋๏${prefix}𝐤𝐚𝐨𝐫𝐢 🅕
┋๏${prefix}𝐤𝐞𝐧𝐞𝐤𝐢 🅕
┋๏${prefix}𝐤𝐨𝐭𝐨𝐫𝐢 🅕
┋๏${prefix}𝐤𝐮𝐫𝐮𝐦𝐢 🅕
┋๏${prefix}𝐥𝐨𝐥𝐢 🅕
┋๏${prefix}𝐥𝐨𝐥𝐢2 🅕
┋๏${prefix}𝐦𝐚𝐝𝐚𝐫𝐚 🅕
┋๏${prefix}𝐦𝐞𝐠𝐮𝐦𝐢𝐧 🅕
┋๏${prefix}𝐦𝐢𝐤𝐚𝐬𝐚 🅕
┋๏${prefix}𝐦𝐢𝐤𝐞𝐲 🅕
┋๏${prefix}𝐦𝐢𝐤𝐮 🅕
┋๏${prefix}𝐦𝐢𝐧𝐚𝐭𝐨 🅕
┋๏${prefix}𝐧𝐚𝐫𝐮𝐭𝐨 🅕
┋๏${prefix}𝐧𝐞𝐤𝐨 🅕
┋๏${prefix}𝐧𝐞𝐤𝐨𝐧𝐢𝐦𝐞 🅕
┋๏${prefix}𝐧𝐞𝐳𝐮𝐤𝐨 🅕
┋๏${prefix}𝐨𝐧𝐞𝐩𝐢𝐞𝐜𝐞 🅕
┋๏${prefix}𝐩𝐨𝐤𝐞𝐦𝐨𝐧 🅕
┋๏${prefix}𝐫𝐚𝐧𝐝𝐨𝐦𝐧𝐢𝐦𝐞 🅕
┋๏${prefix}𝐫𝐚𝐧𝐝𝐨𝐦𝐧𝐢𝐦𝐞2 🅕
┋๏${prefix}𝐫𝐢𝐳𝐞 🅕
┋๏${prefix}𝐬𝐚𝐠𝐢𝐫𝐢 🅕
┋๏${prefix}𝐬𝐚𝐤𝐮𝐫𝐚 🅕
┋๏${prefix}𝐬𝐚𝐬𝐮𝐤𝐞 🅕
┋๏${prefix}𝐬𝐡𝐢𝐧𝐚 🅕
┋๏${prefix}𝐬𝐡𝐢𝐧𝐤𝐚 🅕
┋๏${prefix}𝐬𝐡𝐢𝐧𝐨𝐦𝐢𝐲𝐚 🅕
┋๏${prefix}𝐬𝐡𝐢𝐳𝐮𝐤𝐚 🅕
┋๏${prefix}𝐬𝐡𝐨𝐭𝐚 🅕
┋๏${prefix}𝐭𝐞𝐣𝐢𝐧𝐚 🅕
┋๏${prefix}𝐭𝐨𝐮𝐤𝐚𝐜𝐡𝐚𝐧 🅕
┋๏${prefix}𝐭𝐬𝐮𝐧𝐚𝐝𝐞 🅕
┋๏${prefix}𝐰𝐚𝐢𝐟𝐮 🅕
┋๏${prefix}𝐰𝐚𝐢𝐟𝐮2 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐰𝐚𝐥𝐥 🅕
┋๏${prefix}𝐲𝐨𝐭𝐬𝐮𝐛𝐚 🅕
┋๏${prefix}𝐲𝐮𝐤𝐢 🅕
┋๏${prefix}𝐲𝐮𝐥𝐢𝐛𝐨𝐜𝐢𝐥 🅕
┋๏${prefix}𝐲𝐮𝐦𝐞𝐤𝐨 🅕
┋๏${prefix}8𝐛𝐚𝐥𝐥 🅕
┋๏${prefix}𝐭𝐢𝐜𝐤𝐥𝐞 🅕
┋๏${prefix}𝐠𝐞𝐜𝐠 🅕
┋๏${prefix}𝐟𝐞𝐞𝐝 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐚𝐰𝐨𝐨 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐦𝐞𝐠𝐮𝐦𝐢𝐧 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐬𝐡𝐢𝐧𝐨𝐛𝐮 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐡𝐚𝐧𝐝𝐡𝐨𝐥𝐝 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐡𝐢𝐠𝐡𝐟𝐢𝐯𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐜𝐫𝐢𝐧𝐠𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐝𝐚𝐧𝐜𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐡𝐚𝐩𝐩𝐲 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐠𝐥𝐨𝐦𝐩 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐛𝐥𝐮𝐬𝐡 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐬𝐦𝐮𝐠 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐰𝐚𝐯𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐬𝐦𝐢𝐥𝐥𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐩𝐨𝐤𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐰𝐢𝐧𝐤 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐛𝐨𝐧𝐤 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐛𝐮𝐥𝐥𝐲 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐲𝐞𝐞𝐭 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐛𝐢𝐭𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐥𝐢𝐜𝐤 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐤𝐢𝐥𝐥 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐜𝐫𝐲 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐰𝐥𝐩 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐤𝐢𝐬𝐬 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐡𝐮𝐠 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐧𝐞𝐤𝐨 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐩𝐚𝐭 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐬𝐥𝐚𝐩 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐜𝐮𝐝𝐝𝐥𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐰𝐚𝐢𝐟𝐮 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐧𝐨𝐦 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐟𝐨𝐱𝐠𝐢𝐫𝐥 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐠𝐞𝐜𝐠 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐭𝐢𝐜𝐤𝐥𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐟𝐞𝐞𝐝 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐚𝐯𝐚𝐭𝐚𝐫 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐪𝐮𝐨𝐭𝐞 🅕
╰–––––––––––––––༓
`}

global.ownermenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮 』
┋๏${prefix}𝐚𝐮𝐭𝐨𝐫𝐞𝐚𝐝 🅞
┋๏${prefix}𝐚𝐮𝐭𝐨𝐛𝐢𝐨 🅞
┋๏${prefix}𝐚𝐮𝐭𝐨𝐭𝐲𝐩𝐞 🅞
┋๏${prefix}𝐮𝐧𝐚𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 🅞
┋๏${prefix}𝐚𝐮𝐭𝐨𝐫𝐞𝐜𝐨𝐫𝐝 🅞
┋๏${prefix}𝐚𝐮𝐭𝐨𝐫𝐞𝐜𝐨𝐫𝐝𝐭𝐲𝐩𝐞 🅞
┋๏${prefix}𝐚𝐮𝐭𝐨𝐬𝐰𝐯𝐢𝐞𝐰 🅞
┋๏${prefix}𝐬𝐞𝐭𝐚𝐮𝐭𝐨𝐛𝐥𝐨𝐜𝐤 🅞
┋๏${prefix}𝐬𝐞𝐭𝐚𝐧𝐭𝐢𝐟𝐨𝐫𝐞𝐢𝐠𝐧 🅞
┋๏${prefix}𝐚𝐮𝐭𝐨𝐛𝐥𝐨𝐜𝐤 🅞
┋๏${prefix}𝐨𝐧𝐥𝐲𝐠𝐜 🅞
┋๏${prefix}𝐨𝐧𝐥𝐲𝐩𝐜 🅞
┋๏${prefix}𝐨𝐧𝐥𝐲𝐢𝐧𝐝𝐢𝐚 🅞
┋๏${prefix}𝐨𝐧𝐥𝐲𝐢𝐧𝐝𝐨 🅞
┋๏${prefix}𝐚𝐧𝐭𝐢𝐜𝐚𝐥𝐥 🅞
┋๏${prefix}𝐬𝐞𝐥𝐟 🅞
┋๏${prefix}𝐩𝐮𝐛𝐥𝐢𝐜 🅞
┋๏${prefix}𝐣𝐨𝐢𝐧 🅞
┋๏${prefix}𝐩𝐨𝐥𝐥 🅞
┋๏${prefix}𝐛𝐜 🅞
┋๏${prefix}𝐛𝐜𝐠𝐫𝐨𝐮𝐩 🅞
┋๏${prefix}𝐬𝐞𝐭𝐦𝐞𝐧𝐮 🅞
┋๏${prefix}𝐬𝐞𝐭𝐢𝐦𝐠𝐦𝐞𝐧𝐮 🅞
┋๏${prefix}𝐬𝐞𝐭𝐯𝐢𝐝𝐦𝐞𝐧𝐮 🅞
┋๏${prefix}𝐬𝐞𝐭𝐠𝐢𝐟𝐦𝐞𝐧𝐮 🅞
┋๏${prefix}𝐬𝐞𝐭𝐫𝐞𝐩𝐥𝐲 🅞
┋๏${prefix}𝐬𝐞𝐭𝐩𝐫𝐞𝐟𝐢𝐱 🅞
┋๏${prefix}𝐚𝐝𝐝𝐥𝐢𝐦𝐢𝐭 🅞
┋๏${prefix}𝐝𝐞𝐥𝐥𝐢𝐦𝐢𝐭 🅞
┋๏${prefix}𝐫𝐞𝐬𝐞𝐭𝐡𝐢𝐭 🅞
┋๏${prefix}𝐫𝐞𝐬𝐞𝐭𝐮𝐬𝐞𝐫 🅞
┋๏${prefix}𝐜𝐫𝐞𝐚𝐭𝐞𝐠𝐜 🅞
┋๏${prefix}𝐮𝐬𝐞𝐫𝐣𝐢𝐝 🅞
┋๏${prefix}𝐬𝐞𝐭𝐞𝐱𝐢𝐟 🅞
┋๏${prefix}𝐬𝐞𝐭𝐛𝐨𝐭𝐛𝐢𝐨 🅞
┋๏${prefix}𝐝𝐞𝐥𝐩𝐩𝐛𝐨𝐭 🅞
┋๏${prefix}𝐬𝐡𝐮𝐭𝐝𝐨𝐰𝐧 🅞
┋๏${prefix}𝐬𝐞𝐭𝐩𝐩𝐛𝐨𝐭 🅞
┋๏${prefix}𝐚𝐝𝐝𝐩𝐫𝐞𝐦 🅞
┋๏${prefix}𝐝𝐞𝐥𝐩𝐫𝐞𝐦 🅞
┋๏${prefix}𝐚𝐝𝐝𝐨𝐰𝐧𝐞𝐫 🅞
┋๏${prefix}𝐝𝐞𝐥𝐨𝐰𝐧𝐞𝐫 🅞
┋๏${prefix}𝐚𝐝𝐝𝐯𝐧 🅞
┋๏${prefix}𝐚𝐝𝐝𝐚𝐩𝐤 🅞
┋๏${prefix}𝐚𝐝𝐝𝐳𝐢𝐩 🅞
┋๏${prefix}𝐚𝐝𝐝𝐩𝐝𝐟 🅞
┋๏${prefix}𝐝𝐞𝐥𝐚𝐩𝐤 🅞
┋๏${prefix}𝐝𝐞𝐥𝐳𝐢𝐩 🅞
┋๏${prefix}𝐝𝐞𝐥𝐩𝐝𝐟 🅞
┋๏${prefix}𝐝𝐞𝐥𝐯𝐧 🅞
┋๏${prefix}𝐚𝐝𝐝𝐬𝐭𝐢𝐜𝐤𝐞𝐫 🅞
┋๏${prefix}𝐝𝐞𝐥𝐬𝐭𝐢𝐜𝐤𝐞𝐫 🅞
┋๏${prefix}𝐚𝐝𝐝𝐢𝐦𝐚𝐠𝐞 🅞
┋๏${prefix}𝐝𝐞𝐥𝐢𝐦𝐚𝐠𝐞 🅞
┋๏${prefix}𝐚𝐝𝐝𝐯𝐢𝐝𝐞𝐨 🅞
┋๏${prefix}𝐝𝐞𝐥𝐯𝐢𝐝𝐞𝐨 🅞
┋๏${prefix}𝐚𝐝𝐝𝐭𝐢𝐭𝐥𝐞 🅞
┋๏${prefix}𝐝𝐞𝐥𝐭𝐢𝐭𝐥𝐞 🅞
┋๏${prefix}𝐮𝐩𝐬𝐰𝐭𝐞𝐱𝐭 🅞
┋๏${prefix}𝐮𝐩𝐬𝐰𝐯𝐢𝐝𝐞𝐨 🅞
┋๏${prefix}𝐮𝐩𝐬𝐰𝐢𝐦𝐚𝐠𝐞 🅞
┋๏${prefix}𝐮𝐩𝐬𝐰𝐚𝐮𝐝𝐢𝐨 🅞
┋๏${prefix}𝐛𝐥𝐨𝐜𝐤 🅞
┋๏${prefix}𝐮𝐧𝐛𝐥𝐨𝐜𝐤 🅞
┋๏${prefix}𝐥𝐞𝐚𝐯𝐞𝐠𝐜 🅞
┋๏${prefix}𝐩𝐮𝐬𝐡𝐜𝐨𝐧𝐭𝐚𝐜𝐭 🅞
┋๏${prefix}𝐩𝐮𝐬𝐡𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐯2 🅞
╰–––––––––––––––༓
`}

global.othermenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮 』
┋๏${prefix}𝐩𝐢𝐧𝐠 🅕
┋๏${prefix}𝐦𝐞𝐧𝐮 🅕
┋๏${prefix}𝐦𝐲𝐢𝐩 🅕
┋๏${prefix}𝐫𝐞𝐩𝐨 🅕
┋๏${prefix}𝐫𝐞𝐩𝐨𝐫𝐭𝐛𝐮𝐠 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐨𝐰𝐧𝐞𝐫 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐬𝐭𝐢𝐜𝐤𝐞𝐫 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐢𝐦𝐚𝐠𝐞 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐯𝐢𝐝𝐞𝐨 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐯𝐧 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐚𝐩𝐤 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐳𝐢𝐩 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐩𝐝𝐟 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐛𝐚𝐝𝐰𝐨𝐫𝐝 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐩𝐜 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐠𝐜 🅕
┋๏${prefix}𝐢𝐬𝐠𝐫𝐨𝐮𝐩 🅕
┋๏${prefix}𝐨𝐰𝐧𝐞𝐫 🅕
┋๏${prefix}𝐫𝐞𝐧𝐭𝐛𝐨𝐭 🅕
┋๏${prefix}𝐝𝐨𝐧𝐚𝐭𝐞 🅕
┋๏${prefix}𝐟𝐫𝐢𝐞𝐧𝐝 🅕
┋๏${prefix}𝐨𝐛𝐟𝐮𝐬𝐜𝐚𝐭𝐞 🅕
┋๏${prefix}𝐬𝐭𝐲𝐥𝐞𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐟𝐥𝐢𝐩𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐭𝐭𝐬 🅕
┋๏${prefix}𝐬𝐚𝐲 🅕
┋๏${prefix}𝐭𝐨𝐠𝐢𝐟 🅕
┋๏${prefix}𝐭𝐨𝐪𝐫 🅕
┋๏${prefix}𝐛𝐚𝐬𝐬 🅕
┋๏${prefix}𝐛𝐥𝐨𝐰𝐧 🅕
┋๏${prefix}𝐝𝐞𝐞𝐩 🅕
┋๏${prefix}𝐞𝐚𝐫𝐫𝐚𝐩𝐞 🅕
┋๏${prefix}𝐟𝐚𝐬𝐭 🅕
┋๏${prefix}𝐟𝐚𝐭 🅕
┋๏${prefix}𝐧𝐢𝐠𝐡𝐭𝐜𝐨𝐫𝐞 🅕
┋๏${prefix}𝐫𝐞𝐯𝐞𝐫𝐬𝐞 🅕
┋๏${prefix}𝐫𝐨𝐛𝐨𝐭 🅕
┋๏${prefix}𝐬𝐥𝐨𝐰 🅕
┋๏${prefix}𝐬𝐦𝐨𝐨𝐭𝐡 🅕
┋๏${prefix}𝐬𝐪𝐮𝐢𝐫𝐫𝐞𝐥 🅕
┋๏${prefix}𝐭𝐢𝐧𝐲𝐮𝐫𝐥 🅕
┋๏${prefix}𝐭𝐨𝐯𝐧 🅕
┋๏${prefix}𝐭𝐨𝐚𝐮𝐝𝐢𝐨 🅕
┋๏${prefix}𝐭𝐨𝐦𝐩3 🅕
┋๏${prefix}𝐭𝐨𝐦𝐩4🅕
┋๏${prefix}𝐭𝐨𝐢𝐦𝐠 🅕
┋๏${prefix}𝐭𝐨𝐨𝐧𝐜𝐞 🅕
┋๏${prefix}𝐬𝐭𝐢𝐜𝐤𝐞𝐫 🅕
┋๏${prefix}𝐭𝐚𝐤𝐞 🅟
┋๏${prefix}𝐞𝐦𝐨𝐣𝐢 🅕
┋๏${prefix}𝐯𝐨𝐥𝐚𝐮𝐝𝐢𝐨 🅕
┋๏${prefix}𝐯𝐨𝐥𝐯𝐢𝐝𝐞𝐨 🅕
┋๏${prefix}𝐞𝐛𝐢𝐧𝐚𝐫𝐲 🅕
┋๏${prefix}𝐝𝐛𝐢𝐧𝐚𝐫𝐲 🅕
┋๏${prefix}𝐬𝐬𝐰𝐞𝐛 🅕
┋๏${prefix}𝐪𝐮𝐨𝐭𝐞𝐝 🅕
┋๏${prefix}𝐜𝐡𝐞𝐜𝐤𝐚𝐜𝐜𝐨𝐮𝐧𝐭 🅕
┋๏${prefix}𝐫𝐮𝐧𝐭𝐢𝐦𝐞 🅕
┋๏${prefix}𝐭𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞 🅕
┋๏${prefix}𝐪𝐮𝐫𝐚𝐧 🅕
┋๏${prefix}𝐛𝐢𝐛𝐥𝐞 🅕
╰–––––––––––––––༓
`}

global.downloadmenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮 』
┋๏${prefix}𝐲𝐭𝐬𝐞𝐚𝐫𝐜𝐡 🅕
┋๏${prefix}𝐢𝐭𝐮𝐧𝐞𝐬 🅕
┋๏${prefix}𝐩𝐥𝐚𝐲 🅕
┋๏${prefix}𝐲𝐭𝐦𝐩3 🅕
┋๏${prefix}𝐲𝐭𝐦𝐩4 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐚𝐮𝐝𝐢𝐨 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤 🅕
┋๏${prefix}𝐚𝐩𝐤 🅕
┋๏${prefix}𝐢𝐠𝐯𝐢𝐝𝐞𝐨 🅕
┋๏${prefix}𝐢𝐠𝐢𝐦𝐚𝐠𝐞 🅕
┋๏${prefix}𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 🅕
┋๏${prefix}𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 🅕
┋๏${prefix}𝐚𝐩𝐤 🅕
┋๏${prefix}𝐠𝐨𝐨𝐠𝐥𝐞 🅕
┋๏${prefix}𝐢𝐦𝐝𝐛 🅕
┋๏${prefix}𝐰𝐞𝐚𝐭𝐡𝐞𝐫 🅕
┋๏${prefix}𝐰𝐚𝐧𝐮𝐦𝐛𝐞𝐫 🅕
┋๏${prefix}𝐬𝐩𝐨𝐭𝐢𝐟𝐲 🅟
┋๏${prefix}𝐠𝐢𝐭𝐜𝐥𝐨𝐧𝐞 🅕
┋๏${prefix}𝐡𝐚𝐩𝐩𝐲𝐦𝐨𝐝 🅕
┋๏${prefix}𝐠𝐝𝐫𝐢𝐯𝐞 🅕
┋๏${prefix}𝐩𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭 🅕
┋๏${prefix}𝐫𝐢𝐧𝐠𝐭𝐨𝐧𝐞 🅕
╰–––––––––––––––༓
`}

global.groupmenu = (prefic) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮 』
┋๏${prefix}𝐚𝐧𝐭𝐢𝐛𝐨𝐭 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐯𝐢𝐞𝐰𝐨𝐧𝐜𝐞 🅖
┋๏${prefix}𝐰𝐞𝐥𝐜𝐨𝐦𝐞 🅖
┋๏${prefix}𝐚𝐝𝐦𝐢𝐧𝐞𝐯𝐞𝐧𝐭 🅖
┋๏${prefix}𝐠𝐫𝐨𝐮𝐩𝐞𝐯𝐞𝐧𝐭 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐟𝐨𝐫𝐞𝐢𝐠𝐧 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐦𝐞𝐝𝐢𝐚 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐚𝐮𝐝𝐢𝐨 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐯𝐢𝐝𝐞𝐨 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐢𝐦𝐚𝐠𝐞 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐥𝐨𝐜𝐚𝐭𝐢𝐨𝐧 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐜𝐨𝐧𝐭𝐚𝐜𝐭 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐬𝐭𝐢𝐜𝐤𝐞𝐫 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐩𝐨𝐥𝐥 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝐠𝐜 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱 🅖
┋๏${prefix}𝐠𝐫𝐨𝐮𝐩𝐥𝐢𝐧𝐤 🅖
┋๏${prefix}𝐥𝐢𝐬𝐭𝐚𝐝𝐦𝐢𝐧 🅖
┋๏${prefix}𝐢𝐧𝐯𝐢𝐭𝐞 🅖
┋๏${prefix}𝐞𝐩𝐡𝐞𝐦𝐞𝐫𝐚𝐥 🅖
┋๏${prefix}𝐝𝐞𝐥𝐞𝐭𝐞 🅖
┋๏${prefix}𝐬𝐞𝐭𝐩𝐩𝐠𝐫𝐨𝐮𝐩 🅖
┋๏${prefix}𝐝𝐞𝐥𝐩𝐩𝐠𝐫𝐨𝐮𝐩 🅖
┋๏${prefix}𝐬𝐞𝐭𝐧𝐚𝐦𝐞𝐠𝐜 🅖
┋๏${prefix}𝐬𝐞𝐭𝐝𝐞𝐬𝐜 🅖
┋๏${prefix}𝐚𝐝𝐝 🅖
┋๏${prefix}𝐤𝐢𝐜𝐤 🅖
┋๏${prefix}𝐩𝐫𝐨𝐦𝐨𝐭𝐞 🅖
┋๏${prefix}𝐝𝐞𝐦𝐨𝐭𝐞 🅖
┋๏${prefix}𝐠𝐞𝐭𝐜𝐨𝐧𝐭𝐚𝐜𝐭 🅞
┋๏${prefix}𝐬𝐚𝐯𝐞𝐜𝐨𝐧𝐭𝐚𝐜𝐭 🅞
┋๏${prefix}𝐬𝐞𝐧𝐝𝐜𝐨𝐧𝐭𝐚𝐜𝐭 🅞
┋๏${prefix}𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐚𝐠 🅞
┋๏${prefix}𝐡𝐢𝐝𝐞𝐭𝐚𝐠 🅖
┋๏${prefix}𝐭𝐨𝐭𝐚𝐠 🅖
┋๏${prefix}𝐭𝐚𝐠𝐚𝐥𝐥 🅖
┋๏${prefix}𝐞𝐝𝐢𝐭𝐢𝐧𝐟𝐨 🅖
┋๏${prefix}𝐨𝐩𝐞𝐧𝐭𝐢𝐦𝐞 🅖
┋๏${prefix}𝐜𝐥𝐨𝐬𝐞𝐭𝐢𝐦𝐞 🅖
┋๏${prefix}𝐫𝐞𝐬𝐞𝐭𝐥𝐢𝐧𝐤 🅖
┋๏${prefix}𝐠𝐞𝐭𝐛𝐢𝐨 🅖
┋๏${prefix}𝐯𝐨𝐭𝐞 🅖
┋๏${prefix}𝐮𝐩𝐯𝐨𝐭𝐞 🅖
┋๏${prefix}𝐝𝐨𝐰𝐧𝐯𝐨𝐭𝐞 🅖
┋๏${prefix}𝐜𝐡𝐞𝐜𝐤𝐯𝐨𝐭𝐞 🅖
┋๏${prefix}𝐝𝐞𝐥𝐯𝐨𝐭𝐞 🅖
┋๏${prefix}𝐚𝐮𝐭𝐨𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐠𝐜 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐮𝐬 🅖
┋๏${prefix}𝐚𝐧𝐭𝐢𝐭𝐨𝐱𝐢𝐜 🅖
┋๏${prefix}𝐧𝐬𝐟𝐰 🅖
┋๏${prefix}𝐫𝐞𝐚𝐜𝐭 🅖
╰–––––––––––––––༓
`}

global.funmenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐅𝐮𝐧 𝐌𝐞𝐧𝐮 』
┋๏${prefix}𝐝𝐞𝐟𝐢𝐧𝐞 🅕
┋๏${prefix}𝐥𝐲𝐫𝐢𝐜𝐬 🅕
┋๏${prefix}𝐭𝐢𝐜𝐭𝐚𝐜𝐭𝐨𝐞 🅕
┋๏${prefix}𝐬𝐮𝐢𝐭 🅕
┋๏${prefix}𝐦𝐚𝐭𝐡 🅕
┋๏${prefix}𝐟𝐚𝐜𝐭 🅕
┋๏${prefix}𝐭𝐫𝐮𝐭𝐡 🅕
┋๏${prefix}𝐝𝐚𝐫𝐞 🅕
┋๏${prefix}𝐜𝐨𝐮𝐩𝐥𝐞 🅕
┋๏${prefix}𝐬𝐨𝐮𝐥𝐦𝐚𝐭𝐞 🅕
┋๏${prefix}𝐬𝐭𝐮𝐩𝐢𝐝𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐡𝐚𝐧𝐝𝐬𝐨𝐦𝐞𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐮𝐧𝐜𝐥𝐞𝐚𝐧𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐡𝐨𝐭𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐬𝐦𝐚𝐫𝐭𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐠𝐫𝐞𝐚𝐭𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐞𝐯𝐢𝐥𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐝𝐨𝐠𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐜𝐨𝐨𝐥𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐰𝐚𝐢𝐟𝐮𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐚𝐰𝐞𝐬𝐨𝐦𝐞𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐠𝐚𝐲𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐜𝐮𝐭𝐞𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐥𝐞𝐬𝐛𝐢𝐚𝐧𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐡𝐨𝐫𝐧𝐲𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐩𝐫𝐞𝐭𝐭𝐲𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐥𝐨𝐯𝐞𝐥𝐲𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐮𝐠𝐥𝐲𝐜𝐡𝐞𝐜𝐤 🅕
┋๏${prefix}𝐩𝐢𝐜𝐤 🅕
┋๏${prefix}𝐩𝐢𝐜𝐤𝐮𝐩𝐥𝐢𝐧𝐞 🅕
┋๏${prefix}𝐪𝐮𝐨𝐭𝐞𝐬 🅕
┋๏${prefix}𝐜𝐚𝐧 🅕
┋๏${prefix}𝐢𝐬 🅕
┋๏${prefix}𝐰𝐡𝐞𝐧 🅕
┋๏${prefix}𝐰𝐡𝐞𝐫𝐞 🅕
┋๏${prefix}𝐰𝐡𝐚𝐭 🅕
┋๏${prefix}𝐡𝐨𝐰 🅕
┋๏${prefix}𝐫𝐚𝐭𝐞 🅕
┋๏${prefix}𝐜𝐫𝐲 🅕
┋๏${prefix}𝐤𝐢𝐥𝐥 🅕
┋๏${prefix}𝐡𝐮𝐠 🅕
┋๏${prefix}𝐩𝐚𝐭 🅕
┋๏${prefix}𝐥𝐢𝐜𝐤 🅕 
┋๏${prefix}𝐤𝐢𝐬𝐬 🅕
┋๏${prefix}𝐛𝐢𝐭𝐞 🅕
┋๏${prefix}𝐲𝐞𝐞𝐭 🅕
┋๏${prefix}𝐛𝐮𝐥𝐥𝐲 🅕
┋๏${prefix}𝐛𝐨𝐧𝐤 🅕
┋๏${prefix}𝐰𝐢𝐧𝐤 🅕
┋๏${prefix}𝐩𝐨𝐤𝐞 🅕
┋๏${prefix}𝐧𝐨𝐦 🅕
┋๏${prefix}𝐬𝐥𝐚𝐩 🅕
┋๏${prefix}𝐬𝐦𝐢𝐥𝐞 🅕 
┋๏${prefix}𝐰𝐚𝐯𝐞 🅕
┋๏${prefix}𝐚𝐰𝐨𝐨 🅕
┋๏${prefix}𝐛𝐥𝐮𝐬𝐡 🅕
┋๏${prefix}𝐬𝐦𝐮𝐠 🅕
┋๏${prefix}𝐠𝐥𝐨𝐦𝐩 🅕 
┋๏${prefix}𝐡𝐚𝐩𝐩𝐲 🅕
┋๏${prefix}𝐝𝐚𝐧𝐜𝐞 🅕
┋๏${prefix}𝐜𝐫𝐢𝐧𝐠𝐞 🅕
┋๏${prefix}𝐜𝐮𝐝𝐝𝐥𝐞 🅕
┋๏${prefix}𝐡𝐢𝐠𝐡𝐟𝐢𝐯𝐞 🅕 
┋๏${prefix}𝐬𝐡𝐢𝐧𝐨𝐛𝐮 🅕
┋๏${prefix}𝐡𝐚𝐧𝐝𝐡𝐨𝐥𝐝 🅕
┋๏${prefix}𝐬𝐩𝐚𝐧𝐤 🅕
┋๏${prefix}𝐭𝐢𝐜𝐤𝐥𝐞 🅕
┋๏${prefix}𝐚𝐯𝐚𝐭𝐚𝐫 🅕
┋๏${prefix}𝐟𝐞𝐞𝐝 🅕
┋๏${prefix}𝐟𝐨𝐱_𝐠𝐢𝐫𝐥 🅕
┋๏${prefix}𝐠𝐞𝐜𝐠 🅕
┋๏${prefix}𝐜𝐡𝐞𝐜𝐤𝐦𝐞 🅕
┋๏${prefix}𝐬𝐨𝐮𝐧𝐝1 - 𝐬𝐨𝐮𝐧𝐝161 🅕
╰–––––––––––––––༓
`}

global.stalkermenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐒𝐭𝐚𝐥𝐤𝐞𝐫 』
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐬𝐭𝐚𝐥𝐤 🅕
┋๏${prefix}𝐦𝐥𝐬𝐭𝐚𝐥𝐤 🅕
┋๏${prefix}𝐧𝐩𝐦𝐬𝐭𝐚𝐥𝐤 🅕
┋๏${prefix}𝐠𝐡𝐬𝐭𝐚𝐥𝐤 🅕
╰–––––––––––––––༓
`}

global.stickermenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 』
┋๏${prefix}𝐠𝐨𝐨𝐬𝐞 ??
┋๏${prefix}𝐰𝐨𝐨𝐟 🅕
┋๏${prefix}8𝐛𝐚𝐥𝐥 🅕
┋๏${prefix}𝐥𝐢𝐳𝐚𝐫𝐝 🅕
┋๏${prefix}𝐦𝐞𝐨𝐰 🅕
┋๏${prefix}𝐠𝐮𝐫𝐚 🅕
┋๏${prefix}𝐝𝐨𝐠𝐞 🅕
┋๏${prefix}𝐩𝐚𝐭𝐫𝐢𝐜𝐤 🅕
┋๏${prefix}𝐥𝐨𝐯𝐞𝐬𝐭𝐢𝐜𝐤 🅕
┋๏${prefix}𝐭𝐞𝐥𝐞𝐬𝐭𝐢𝐜𝐤 🅕
┋๏${prefix}𝐭𝐭𝐩 🅕
┋๏${prefix}𝐚𝐭𝐭𝐩 🅕
╰–––––––––––––––༓
`}

global.databasemenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 』
┋๏${prefix}𝐬𝐞𝐭𝐜𝐦𝐝 🅕
┋๏${prefix}𝐝𝐞𝐥𝐜𝐦𝐝 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐜𝐦𝐝 🅕
┋๏${prefix}𝐥𝐨𝐜𝐤𝐜𝐦𝐝 🅕
┋๏${prefix}𝐚𝐝𝐝𝐦𝐬𝐠 🅕
┋๏${prefix}𝐝𝐞𝐥𝐦𝐬𝐠 🅕
┋๏${prefix}𝐠𝐞𝐭𝐦𝐬𝐠 🅕
┋๏${prefix}𝐥𝐢𝐬𝐭𝐦𝐬𝐠 🅕
╰–––––––––––––––༓
`}

global.aimenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐎𝐩𝐞𝐧𝐀𝐈 』
┋๏${prefix}𝐨𝐩𝐞𝐧𝐚𝐢 🅕
┋๏${prefix}𝐛𝐥𝐚𝐜𝐤𝐛𝐨𝐱𝐚𝐢 🅕
┋๏${prefix}𝐛𝐚𝐫𝐝𝐚𝐢 🅕
┋๏${prefix}𝐥𝐚𝐦𝐚𝐚𝐢 🅕
┋๏${prefix}𝐠𝐞𝐦𝐢𝐧𝐢𝐚𝐢 🅕
┋๏${prefix}𝐩𝐡𝐨𝐭𝐨𝐥𝐞𝐚𝐩𝐚𝐢 🅕
┋๏${prefix}𝐦𝐚𝐭𝐡𝐬𝐚𝐢 🅕
┋๏${prefix}𝐜𝐨𝐥𝐨𝐫𝐢𝐳𝐞 🅕
┋๏${prefix}𝐞𝐧𝐡𝐚𝐧𝐜𝐞 🅕
┋๏${prefix}𝐝𝐞𝐡𝐚𝐳𝐞 🅕
┋๏${prefix}𝐝𝐚𝐥𝐥𝐞 🅕
┋๏${prefix}𝐚𝐢 🅕
┋๏${prefix}𝐫𝐞𝐦𝐢𝐧𝐢 🅕
╰–––––––––––––––༓
`}

global.bugmenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐁𝐮𝐠 & 𝐖𝐚𝐫 』
┋๏${prefix}𝐚𝐦𝐨𝐮𝐧𝐭𝐛𝐮𝐠 🅟
┋๏${prefix}𝐩𝐦𝐛𝐮𝐠 🅟
┋๏${prefix}𝐝𝐞𝐥𝐚𝐲𝐛𝐮𝐠 🅟
┋๏${prefix}𝐝𝐨𝐜𝐮𝐛𝐮𝐠 🅟
┋๏${prefix}𝐮𝐧𝐥𝐢𝐦𝐢𝐭𝐞𝐝𝐛𝐮𝐠 🅟
┋๏${prefix}𝐛𝐨𝐦𝐛𝐮𝐠 🅟
┋๏${prefix}𝐥𝐚𝐠𝐛𝐮𝐠 🅟
┋๏${prefix}𝐭𝐫𝐨𝐥𝐥𝐲𝐛𝐮𝐠 🅟
┋๏${prefix}𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐝𝐞𝐥𝐚𝐲𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐥𝐚𝐠𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐛𝐨𝐦𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐮𝐧𝐥𝐢𝐦𝐢𝐭𝐞𝐝𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐭𝐫𝐨𝐥𝐥𝐲𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐝𝐨𝐜𝐮𝐠𝐜𝐛𝐮𝐠 🅟
┋๏${prefix}𝐯𝐞𝐫𝐢𝐟 🅟
┋๏${prefix}𝐛𝐚𝐧𝐯1 🅟
┋๏${prefix}𝐛𝐚𝐧𝐯2 🅟
┋๏${prefix}𝐛𝐚𝐧𝐯3 🅟
┋๏${prefix}𝐛𝐚𝐧𝐯4 🅟
┋๏${prefix}𝐛𝐚𝐧𝐯5 🅟
┋๏${prefix}𝐛𝐚𝐧𝐯6 🅟
┋๏${prefix}𝐮𝐧𝐛𝐚𝐧𝐯1 🅟
┋๏${prefix}𝐮𝐧𝐛𝐚𝐧𝐯2 🅟
┋๏${prefix}𝐮𝐧𝐛𝐚𝐧𝐯3 🅟
┋๏${prefix}𝐮𝐧𝐛𝐚𝐧𝐯4 🅟
┋๏${prefix}𝐮𝐧𝐛𝐚𝐧𝐯5 🅟
╰–––––––––––––––༓
`}

global.randomphotomenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐑𝐚𝐧𝐝𝐨𝐦 𝐏𝐡𝐨𝐭𝐨 』
┋๏${prefix}𝐚𝐞𝐬𝐭𝐡𝐞𝐭𝐢𝐜 🅕
┋๏${prefix}𝐜𝐨𝐟𝐟𝐞𝐞 🅕
┋๏${prefix}𝐰𝐢𝐤𝐢𝐦𝐞𝐝𝐢𝐚 🅕
┋๏${prefix}𝐰𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 🅕
┋๏${prefix}𝐚𝐫𝐭 🅕
┋๏${prefix}𝐛𝐭𝐬 🅕
┋๏${prefix}𝐝𝐨𝐠𝐰𝐨𝐨𝐟 🅕
┋๏${prefix}𝐜𝐚𝐭𝐦𝐞𝐨𝐰 🅕
┋๏${prefix}𝐥𝐢𝐳𝐚𝐫𝐝𝐩𝐢𝐜 🅕
┋๏${prefix}𝐠𝐨𝐨𝐬𝐞𝐛𝐢𝐫𝐝 🅕
┋๏${prefix}8𝐛𝐚𝐥𝐥𝐩𝐨𝐨𝐥 🅕
┋๏${prefix}𝐜𝐨𝐬𝐩𝐥𝐚𝐲 🅕
┋๏${prefix}𝐡𝐚𝐜𝐤𝐞𝐫 🅕
┋๏${prefix}𝐜𝐲𝐛𝐞𝐫 🅕
┋๏${prefix}𝐠𝐚𝐦𝐞𝐰𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 🅕
┋๏${prefix}𝐢𝐬𝐥𝐚𝐦𝐢𝐜 🅕
┋๏${prefix}𝐣𝐞𝐧𝐧𝐢𝐞 🅕
┋๏${prefix}𝐣𝐢𝐬𝐨 🅕
┋๏${prefix}𝐬𝐚𝐭𝐚𝐧𝐢𝐜 🅕
┋๏${prefix}𝐣𝐮𝐬𝐭𝐢𝐧𝐚 🅕
┋๏${prefix}𝐜𝐚𝐫𝐭𝐨𝐨𝐧 🅕
┋๏${prefix}𝐩𝐞𝐧𝐭𝐨𝐥 🅕
┋๏${prefix}𝐜𝐚𝐭 🅕
┋๏${prefix}𝐤𝐩𝐨𝐩 🅕
┋๏${prefix}𝐞𝐱𝐨 🅕
┋๏${prefix}𝐥𝐢𝐬𝐚 🅕
┋๏${prefix}𝐬𝐩𝐚𝐜𝐞 🅕
┋๏${prefix}𝐜𝐚𝐫 🅕
┋๏${prefix}𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 🅕
┋๏${prefix}𝐛𝐢𝐤𝐞 🅕
┋๏${prefix}𝐬𝐡𝐨𝐫𝐭𝐪𝐮𝐨𝐭𝐞 🅕
┋๏${prefix}𝐚𝐧𝐭𝐢𝐰𝐨𝐫𝐤 🅕
┋๏${prefix}𝐡𝐚𝐜𝐤𝐢𝐧𝐠 🅕
┋๏${prefix}𝐛𝐨𝐧𝐞𝐤𝐚 🅕
┋๏${prefix}𝐫𝐨𝐬𝐞 🅕
┋๏${prefix}𝐫𝐲𝐮𝐣𝐢𝐧 🅕
┋๏${prefix}𝐮𝐥𝐳𝐳𝐚𝐧𝐠𝐛𝐨𝐲 🅕
┋๏${prefix}𝐮𝐥𝐳𝐳𝐚𝐧𝐠𝐠𝐢𝐫𝐥 🅕
┋๏${prefix}𝐰𝐚𝐥𝐥𝐦𝐥 🅕
┋๏${prefix}𝐰𝐚𝐥𝐥𝐩𝐡𝐨𝐧𝐞 🅕
┋๏${prefix}𝐦𝐨𝐮𝐧𝐭𝐚𝐢𝐧 🅕
┋๏${prefix}𝐠𝐨𝐨𝐬𝐞 🅕
┋๏${prefix}𝐩𝐫𝐨𝐟𝐢𝐥𝐞𝐩𝐢𝐜 🅕
┋๏${prefix}𝐜𝐨𝐮𝐩𝐥𝐞𝐩𝐩 🅕
┋๏${prefix}𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 🅕
┋๏${prefix}𝐩𝐮𝐛𝐠 🅕
┋๏${prefix}𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤 🅕
┋๏${prefix}𝐫𝐚𝐧𝐝𝐨𝐦𝐛𝐨𝐲 🅕  
┋๏${prefix}𝐫𝐚𝐧𝐝𝐨𝐦𝐠𝐢𝐫𝐥 🅕
┋๏${prefix}𝐡𝐢𝐣𝐚𝐛 🅕  
┋๏${prefix}𝐜𝐡𝐢𝐧𝐞𝐬𝐞 🅕
┋๏${prefix}𝐢𝐧𝐝𝐨 🅕
┋๏${prefix}𝐣𝐚𝐩𝐚𝐧𝐞𝐬𝐞 🅕
┋๏${prefix}𝐤𝐨𝐫𝐞𝐚𝐧 🅕
┋๏${prefix}𝐦𝐚𝐥𝐚𝐲 🅕
┋๏${prefix}𝐭𝐡𝐚𝐢 🅕
┋๏${prefix}𝐯𝐢𝐞𝐭𝐧𝐚𝐦𝐞𝐬𝐞 🅕
╰–––––––––––––––༓
`}

global.randomvideomenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐑𝐚𝐧𝐝𝐨𝐦 𝐕𝐢𝐝𝐞𝐨 』
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐠𝐢𝐫𝐥 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐧𝐮𝐤𝐭𝐡𝐲 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐤𝐚𝐲𝐞𝐬 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐩𝐚𝐧𝐫𝐢𝐤𝐚 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐧𝐨𝐭𝐧𝐨𝐭 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐠𝐡𝐞𝐚 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐬𝐚𝐧𝐭𝐮𝐲 🅕
┋๏${prefix}𝐭𝐢𝐤𝐭𝐨𝐤𝐛𝐨𝐜𝐢𝐥 🅕
╰–––––––––––––––༓
`}

global.photooxymenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐏𝐡𝐨𝐭𝐨𝐎𝐱𝐲 𝐌𝐚𝐤𝐞𝐫 』
┋๏${prefix}𝐬𝐡𝐚𝐝𝐨𝐰 🅕 
┋๏${prefix}𝐰𝐫𝐢𝐭𝐞 🅕 
┋๏${prefix}𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜 🅕 
┋๏${prefix}𝐛𝐮𝐫𝐧𝐩𝐚𝐩𝐞𝐫 🅕
┋๏${prefix}𝐬𝐦𝐨𝐤𝐞 🅕 
┋๏${prefix}𝐧𝐚𝐫𝐮𝐭𝐨𝐛𝐚𝐧𝐧𝐞𝐫 🅕 
┋๏${prefix}𝐥𝐨𝐯𝐞 🅕 
┋๏${prefix}𝐮𝐧𝐝𝐞𝐫𝐠𝐫𝐚𝐬𝐬 🅕
┋๏${prefix}𝐝𝐨𝐮𝐛𝐥𝐞𝐥𝐨𝐯𝐞 🅕 
┋๏${prefix}𝐜𝐨𝐟𝐟𝐞𝐜𝐮𝐩 🅕
┋๏${prefix}𝐮𝐧𝐝𝐞𝐫𝐰𝐚𝐭𝐞𝐫𝐨𝐜𝐞𝐚𝐧 🅕
┋๏${prefix}𝐬𝐦𝐨𝐤𝐲𝐧𝐞𝐨𝐧 🅕
┋๏${prefix}𝐬𝐭𝐚𝐫𝐬𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐫𝐚𝐢𝐧𝐛𝐨𝐰𝐞𝐟𝐟𝐞𝐜𝐭 🅕
┋๏${prefix}𝐛𝐚𝐥𝐥𝐨𝐨𝐧𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐦𝐞𝐭𝐚𝐥𝐥𝐢𝐜𝐞𝐟𝐟𝐞𝐜𝐭 🅕
┋๏${prefix}𝐞𝐦𝐛𝐫𝐨𝐢𝐝𝐞𝐫𝐲𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐟𝐥𝐚𝐦𝐢𝐧𝐠𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐬𝐭𝐨𝐧𝐞𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐰𝐫𝐢𝐭𝐞𝐚𝐫𝐭 🅕
┋๏${prefix}𝐬𝐮𝐦𝐦𝐞𝐫𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐰𝐨𝐥𝐟𝐦𝐞𝐭𝐚𝐥𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐧𝐚𝐭𝐮𝐫𝐞3𝐝𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐫𝐨𝐬𝐞𝐬𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐧𝐚𝐭𝐮𝐫𝐞𝐭𝐲𝐩𝐨𝐠𝐫𝐚𝐩𝐡𝐲 🅕
┋๏${prefix}𝐪𝐮𝐨𝐭𝐞𝐬𝐮𝐧𝐝𝐞𝐫 🅕
┋๏${prefix}𝐬𝐡𝐢𝐧𝐞𝐭𝐞𝐱𝐭 🅕
╰–––––––––––––––༓
`}

global.ephoto360menu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐄𝐩𝐡𝐨𝐭𝐨360 𝐌𝐚𝐤𝐞𝐫 』
┋๏${prefix}𝐠𝐥𝐢𝐭𝐜𝐡𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐰𝐫𝐢𝐭𝐞𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐚𝐝𝐯𝐚𝐧𝐜𝐞𝐝𝐠𝐥𝐨𝐰 🅕
┋๏${prefix}𝐭𝐲𝐩𝐨𝐠𝐫𝐚𝐩𝐡𝐲𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐩𝐢𝐱𝐞𝐥𝐠𝐥𝐢𝐭𝐜𝐡 🅕
┋๏${prefix}𝐧𝐞𝐨𝐧𝐠𝐥𝐢𝐭𝐜𝐡 🅕
┋๏${prefix}𝐟𝐥𝐚𝐠𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐟𝐥𝐚𝐠3𝐝𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐝𝐞𝐥𝐞𝐭𝐢𝐧𝐠𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤𝐬𝐭𝐲𝐥𝐞 🅕
┋๏${prefix}𝐠𝐥𝐨𝐰𝐢𝐧𝐠𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐮𝐧𝐝𝐞𝐫𝐰𝐚𝐭𝐞𝐫𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐥𝐨𝐠𝐨𝐦𝐚𝐤𝐞𝐫 🅕
┋๏${prefix}𝐜𝐚𝐫𝐭𝐨𝐨𝐧𝐬𝐭𝐲𝐥𝐞 🅕
┋๏${prefix}𝐩𝐚𝐩𝐞𝐫𝐜𝐮𝐭𝐬𝐭𝐲𝐥𝐞 🅕
┋๏${prefix}𝐰𝐚𝐭𝐞𝐫𝐜𝐨𝐥𝐨𝐫𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐞𝐟𝐟𝐞𝐜𝐭𝐜𝐥𝐨𝐮𝐝𝐬 🅕
┋๏${prefix}𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤𝐥𝐨𝐠𝐨 🅕
┋๏${prefix}𝐠𝐫𝐚𝐝𝐢𝐞𝐧𝐭𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐬𝐮𝐦𝐦𝐞𝐫𝐛𝐞𝐚𝐜𝐡 🅕
┋๏${prefix}𝐥𝐮𝐱𝐮𝐫𝐲𝐠𝐨𝐥𝐝 🅕
┋๏${prefix}𝐦𝐮𝐥𝐭𝐢𝐜𝐨𝐥𝐨𝐫𝐞𝐝𝐧𝐞𝐨𝐧 🅕
┋๏${prefix}𝐬𝐚𝐧𝐝𝐬𝐮𝐦𝐦𝐞𝐫 🅕
┋๏${prefix}𝐠𝐚𝐥𝐚𝐱𝐲𝐰𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 🅕
┋๏${prefix}1917𝐬𝐭𝐲𝐥𝐞 🅕
┋๏${prefix}𝐦𝐚𝐤𝐢𝐧𝐠𝐧𝐞𝐨𝐧 🅕
┋๏${prefix}𝐫𝐨𝐲𝐚𝐥𝐭𝐞𝐱𝐭 🅕
┋๏${prefix}𝐟𝐫𝐞𝐞𝐜𝐫𝐞𝐚𝐭𝐞 🅕
┋๏${prefix}𝐠𝐚𝐥𝐚𝐱𝐲𝐬𝐭𝐲𝐥𝐞 🅕
┋๏${prefix}𝐥𝐢𝐠𝐡𝐭𝐞𝐟𝐟𝐞𝐜𝐭𝐬 🅕
╰–––––––––––––––༓
`}

global.makermenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐌𝐚𝐤𝐞𝐫 』
┋๏${prefix}𝐛𝐥𝐮𝐫 🅕
┋๏${prefix}𝐛𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 🅕
┋๏${prefix}𝐟𝐚𝐜𝐞𝐩𝐚𝐥𝐦 🅕
┋๏${prefix}𝐢𝐧𝐯𝐞𝐫𝐭 🅕
┋๏${prefix}𝐩𝐢𝐱𝐞𝐥𝐚𝐭𝐞 🅕
┋๏${prefix}𝐫𝐚𝐢𝐧𝐛𝐨𝐰 🅕
┋๏${prefix}𝐭𝐫𝐢𝐠𝐠𝐞𝐫 🅕
┋๏${prefix}𝐰𝐚𝐧𝐭𝐞𝐝 🅕
┋๏${prefix}𝐰𝐚𝐬𝐭𝐞𝐝 🅕
┋๏${prefix}𝐜𝐚𝐫𝐛𝐨𝐧 🅕
╰–––––––––––––––༓
`}

global.nsfwmenu = (prefix) => {
return `🅞 = 𝐅𝐨𝐫 𝐎𝐰𝐧𝐞𝐫
🅖 = 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩
🅕 = 𝐅𝐨𝐫 𝐅𝐫𝐞𝐞 𝐔𝐬𝐞𝐫
🅟 = 𝐅𝐨𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐔𝐬𝐞𝐫

╭––『 𝐀𝐧𝐢𝐦𝐞 𝐍𝐒𝐅𝐖 』
┋๏${prefix}𝐡𝐞𝐧𝐭𝐚𝐢 🅕
┋๏${prefix}𝐠𝐢𝐟𝐡𝐞𝐧𝐭𝐚𝐢 🅕
┋๏${prefix}𝐠𝐢𝐟𝐛𝐥𝐨𝐰𝐣𝐨𝐛 🅕
┋๏${prefix}𝐡𝐞𝐧𝐭𝐚𝐢𝐯𝐢𝐝 🅕
┋๏${prefix}𝐡𝐧𝐞𝐤𝐨 🅕
┋๏${prefix}𝐧𝐰𝐚𝐢𝐟𝐮 🅕
┋๏${prefix}𝐚𝐧𝐢𝐦𝐞𝐬𝐩𝐚𝐧𝐤 🅕
┋๏${prefix}𝐭𝐫𝐚𝐩 🅕
┋๏${prefix}𝐛𝐥𝐨𝐰𝐣𝐨𝐛 🅕
┋๏${prefix}𝐜𝐮𝐜𝐤𝐨𝐥𝐝 🅕
┋๏${prefix}𝐦𝐢𝐥𝐟 🅕
┋๏${prefix}𝐞𝐛𝐚 🅕
┋๏${prefix}𝐠𝐚𝐧𝐠𝐛𝐚𝐧𝐠 🅕
┋๏${prefix}𝐧𝐬𝐟𝐰𝐥𝐨𝐥𝐢 🅕
┋๏${prefix}𝐩𝐮𝐬𝐬𝐲 🅕
┋๏${prefix}𝐲𝐮𝐫𝐢 🅕
┋๏${prefix}𝐳𝐞𝐭𝐭𝐚𝐢 🅕
╰–––––––––––––––༓
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
