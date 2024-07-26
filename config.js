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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349034789561";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349034789561";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349034789561";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2349034789561";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349034789561";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_47_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICA3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICA0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDM3LFxuICAgICAgICA0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcxLFxuICAgICAgICA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDk5LFxuICAgICAgICAyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjExLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzLFxuICAgICAgICA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidGZPUVBVMUE1TXh2OUtXY0lhNytxY2RyRk5OcFR0eTgwcW9PQmdEVFpkaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDM0Nzg5NTYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCODlFQTYwQ0YyMUE1NzIxQjM3NkExQzBCNEI4MDlGMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE5NTQ4NTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDM0Nzg5NTYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNTcyOUNFQzM1MkFDNjJCOEMwNDA2NUVFOENEQ0IwOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE5NTQ4NTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiam5BSkM3RTNSbjZKekZXaTNlS3hUQVwiLFxuICBcInBob25lSWRcIjogXCI4M2E4ZmE1My02M2M2LTQ4YTAtODY4OC0zYzk2ZWNiMDU0MDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICAxNDAsXG4gICAgICAxOTMsXG4gICAgICA1OCxcbiAgICAgIDUyLFxuICAgICAgMjEwLFxuICAgICAgMzYsXG4gICAgICA0NCxcbiAgICAgIDI3LFxuICAgICAgMjA0LFxuICAgICAgMTg1LFxuICAgICAgMTI4LFxuICAgICAgMTI4LFxuICAgICAgMTU1LFxuICAgICAgMTg5LFxuICAgICAgNjYsXG4gICAgICA1NSxcbiAgICAgIDExMyxcbiAgICAgIDIxOCxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxNixcbiAgICAgIDE3NixcbiAgICAgIDE3LFxuICAgICAgMTU5LFxuICAgICAgMTAyLFxuICAgICAgMzUsXG4gICAgICAyNDMsXG4gICAgICAyMDYsXG4gICAgICA3MSxcbiAgICAgIDIzOCxcbiAgICAgIDE1LFxuICAgICAgMTksXG4gICAgICAxNTQsXG4gICAgICAyMjcsXG4gICAgICAwLFxuICAgICAgMTAxLFxuICAgICAgMTIxLFxuICAgICAgMTEzLFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlMzN0tKM0FDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM0Nzg5NTYxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MDc5MDgzMzY2ODE1MTozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkRvbmFsZCBCdWNrc1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tMSnFMb0VFSnpraTdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ2w4RmZpNHhUSWR6cnZoNkRxZlhSY29KbXpTSENLWUNEdVMwdnNvVCtnZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtYmVvNEk1SUllMjg5TE1iM2dzcUJaWkpTbnY1Vmd3VENJWWN1Mjc4OFUwS3c1a2x1OUtlMzVpTmpHdUtvVUljMHUrdTVuWmp3dVVBOEFzZFVBOHVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYc0k5VW9iWUp2bXB4Z1BTUi9WQlBSd1NlNlZpbEFHZElCOXNPYjJXN3pIZkR2UUF5a1ZwY0Y0T2pIMUNMWmx5OHMrZkU2THNVYVdRMmZ6OFluNVVBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM0Nzg5NTYxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTk1NDg0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURFelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREV6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicjRZbUZ2VFFXZVJpQkVnbmlveDh2VEZYUVYzZFVCME4rNWtnYXdHZDh0Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTk2MDQxMzc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5NTQ4NTIwMThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DozzyJosh-MD",
  ownername:process.env.OWNER_NAME|| "DozzyJosh3",


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
