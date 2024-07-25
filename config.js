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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349045743299";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349045743299";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349045743299";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2349045743299";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349045743299";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_40_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIyLFxuICAgICAgICA5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUwLFxuICAgICAgICA4MixcbiAgICAgICAgMTYwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NyxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzksXG4gICAgICAgIDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA3LFxuICAgICAgICA5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAyLFxuICAgICAgICAxMixcbiAgICAgICAgMTQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0LFxuICAgICAgICA0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDU2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyRnVjdmJEK2pnSlJNQ3lPWG5jaE03UWQ3V3UzTWR3M2ZQWWU3UWlTUWhZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKUGZhY1BYMFJqT2JxYjdOampDM2JRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZkZGVjMzc0LTkxNmItNGNjZC05ZDQwLTA0OWQ3MzQwNmZjNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxLFxuICAgICAgMTU1LFxuICAgICAgMjQ5LFxuICAgICAgMTY2LFxuICAgICAgMTQ3LFxuICAgICAgNzksXG4gICAgICAyMjMsXG4gICAgICAxMCxcbiAgICAgIDIzNyxcbiAgICAgIDIxNyxcbiAgICAgIDI0NSxcbiAgICAgIDIyMixcbiAgICAgIDI1MSxcbiAgICAgIDE1MSxcbiAgICAgIDE0MSxcbiAgICAgIDIyNyxcbiAgICAgIDExMCxcbiAgICAgIDIzNSxcbiAgICAgIDMsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMzQsXG4gICAgICAwLFxuICAgICAgMzQsXG4gICAgICAxMDIsXG4gICAgICA1MixcbiAgICAgIDU3LFxuICAgICAgNDgsXG4gICAgICA4NCxcbiAgICAgIDI4LFxuICAgICAgNzQsXG4gICAgICAxNCxcbiAgICAgIDM1LFxuICAgICAgMTM3LFxuICAgICAgMjMxLFxuICAgICAgMTQ4LFxuICAgICAgMTgwLFxuICAgICAgMjE5LFxuICAgICAgMjUyLFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdDN01GSk1BXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ1NzQzMjk5OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjY0ODYxNTI5MDA3MDY6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDNBd3NzR0VObW9pN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUMTZ0YnhvQUZHWWtBdk9oZUlXbHJPc3hjZzFKaUpBTmplMnhHdlcxcVE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdxdXNtZWh6UWl4WmNGYlpudUZLTFBWeVJDcWZZdlNKMXZ5RVZQMFpkZVZkdnFBZ3QyV1BvTEdMK1ArMXRKUEFFa08xRitqU2hDNTlMb0RIb0tvYUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9KczNPajJMWTNtUUJQSmlyRzBZUCs3azhKVSs0ZEdwT0xQTmdoUDRWdTlkZlFrNzdka0FYdjk0NWFaYjF2eUJKL1FnN3NGQTNMQ1NrUzRCdTVEcGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDU3NDMyOTk6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5NDcyMzBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DozzyJosh-MD",
  ownername:process.env.OWNER_NAME|| "DozzyJosh",


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
