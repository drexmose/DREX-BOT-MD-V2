//base by drex 
//re-upload? recode? copy code? give credit ya :)
//YouTube: @drexmose
//Instagram: drex_mose
//Telegram: t.me/dark_intent
//GitHub: @drexmose
//WhatsApp: +254102074064
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@drexmose

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Drex" //ur yt chanel name
global.socialm = "GitHub: drexmose" //ur github or insta name
global.location = "Africa, Kenya, Nairobi" //ur location

//new
global.botname = '𝐃𝐑𝐄𝐗 𝐁𝐎𝐓 𝐌𝐃 𝐕2' //ur bot name
global.ownernumber = '254102074064' //ur owner number
global.ownername = '𝐃𝐑𝐄𝐗 𝐌𝐎𝐒𝐄' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://chat.whatsapp.com/Hf4W852NAroEgMCuQpLX1a"
global.themeemoji = '😁'
global.wm = "Drex Bot Inc."
global.botscript = 'its under development bruh😂' //script link
global.packname = "𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐛𝐲"
global.author = "𝐘𝐨𝐮𝐫 𝐏𝐚𝐩𝐚 𝐃𝐫𝐞𝐱\n\n+254102074064"
global.creator = "254102074064@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254102074064"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
