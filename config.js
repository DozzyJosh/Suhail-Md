const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347060887025";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347060887025";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2347060887025";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2347060887025";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347060887025";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_08_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkwLFxuICAgICAgICA4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAzLFxuICAgICAgICA1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDczLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDU0LFxuICAgICAgICA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMSxcbiAgICAgICAgOTksXG4gICAgICAgIDU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMS82NkxyT3pjVVFJZTdESU9EK2VJaDRaWngzR2tpV0RqTUR0eGRUTmc1bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDYwODg3MDI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzN0Y5NzZFRjNFOUQzNjFCRTY1RERBM0YzRkMxNEE5QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE5ODQ4OTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDYwODg3MDI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFM0FBQTY0MDUyQTlEQTQ4RkZGRTBCOEU2NzI4MjBCMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE5ODQ4OTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSGZuRWdlNE9SUE9GelBOcXJ5V19YUVwiLFxuICBcInBob25lSWRcIjogXCIzYzY5M2M2OS0yZTQ5LTRkY2ItOGZlNS02NzNlMzYyMDE1YTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgNTIsXG4gICAgICA2OSxcbiAgICAgIDEwNyxcbiAgICAgIDQyLFxuICAgICAgMTA2LFxuICAgICAgMjYsXG4gICAgICAzMCxcbiAgICAgIDYzLFxuICAgICAgNTYsXG4gICAgICAxNDAsXG4gICAgICAyMjIsXG4gICAgICAxODQsXG4gICAgICAxNCxcbiAgICAgIDIwMSxcbiAgICAgIDExNCxcbiAgICAgIDIwMixcbiAgICAgIDk1LFxuICAgICAgMSxcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgOTIsXG4gICAgICAyNDIsXG4gICAgICA4NCxcbiAgICAgIDEzNSxcbiAgICAgIDYsXG4gICAgICAyNTUsXG4gICAgICA5MCxcbiAgICAgIDE1NSxcbiAgICAgIDE2MixcbiAgICAgIDIxOCxcbiAgICAgIDExMyxcbiAgICAgIDI1MyxcbiAgICAgIDQ2LFxuICAgICAgMTg0LFxuICAgICAgMjI1LFxuICAgICAgMTAsXG4gICAgICAyNTQsXG4gICAgICAyOSxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhDV0VCQ0dQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYwODg3MDI1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQZXJwZXR1YWxcIixcbiAgICBcImxpZFwiOiBcIjIyOTk1NzU4MjE5NDI1OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHJXcjdzQ0VQak9qYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5bEJ0d1ZYVTlhMDE1VjFWa0t2ZC9rcHBBYUgrQXdZdjMxNE5ncDU4c1djPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFmODdTKzNiY0dyOVFKRHpDOWZqM2JMaUJxYWs5ZUlsMlZVd3QyaEZtNjdNVHFNemw1OFJjc1dHSlplYTZEQzk2OWtrUVdNMUIweVN1QmJieXBvdUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImQ1RDE5VmpibDNPZHdTd0RCN2t0UzZvUTlGUnhjM3RMejM2RmNka21BUDUwQjhUQ0laYm5JNnhmRkEzK2pMSHQ0YlVpaXltQlFMV2YrRkc0ZzF0cmdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjA4ODcwMjU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTk4NDg5MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJac1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlpzLmpzb24iOiAie1wia2V5RGF0YVwiOlwieklUekRVYXVSNy9mLzllWnBqRklRZ1JXejJoYXRMZzM1UE5URVl2UXFVQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjEzODQwNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTk4NDg5NjIwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DozzyJosh-MD",
  ownername:process.env.OWNER_NAME|| "❤️Becky❤️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
