// VIRUSI-MBAYA-MD 

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "null";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngwathegang3@gmai.com";
global.location = "Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Vurusian/Virusi-Mbaya-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://https://telegra.ph/file/7f03fb699a244da228740.jpg";
global.devs = "254748721079,254762016957,254110853827,254728746852,255655147353,254728782591,254700505700";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254757567093";
global.style = process.env.STYLE || "4";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/8aa6951466328563add47.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "2547xxxx";
global.read_status_from = process.env.READ_STATUS_FROM || "2547xxxx";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://pearni-3db1e9057508.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Virusi;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUkyUEpIS0xkUUNETW1rZWkwT1dqVFZXeDBvM1B2RGJkRC9uU3dDL1NuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3pTYVh0NnF6eGVzQXZQY3pocHppNyt4Q0VOQWdXVEEyTmdEVmRRZmMzUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQk5IdmNoQkFXK083WTdRYUU4UHI1d2tINjBoVmh5eTlrUTdVbU1EaEdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGVG1xTTY1b1NWWGF5OGlDZzJkVUlhaGlFcEhraTBMbnVON3VhMzJxNlZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJOSVJCVGN4cm5QVHVaazNwYWN2SThtUWRwUUhjRnFmeE9PU0xLS3JoMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZEZFBCVjVqU2RvdTQxVzM4cUxpeWRUeXFZSERXWFVCRTNvRlZJTTJhbFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBTWWtyVjVIWmRhR1BsMDdRUE54YkFZdGxObGlqTHk4dGJ0TTljUlBGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTW9UNTNPek9OOFJBN0JBVDdzdW9qSGJVZGdXelBSdXo3WXJjcXlJUE9VST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpaVW5wdGVvVC9wcUdOWE80VmltME11QXdaRTUvM3VMdGk2amtUQU4wb3NtOTNQYkNhRlpkQjJDa2dZZEo2QUNQVjlpYlhuNncyYzFSdUd3WmkyZ0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiJWUlh6eUNwQm5JN1dPa1JjRy9USmZScW9aK2t2dmk1K3ZaYmhQQmRpS01vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqMG43YzkwbFNLdWJjcFU5MURjNDd3IiwicGhvbmVJZCI6IjE2OTE5OWQ1LWYwY2UtNDIyZi1hYWNjLTY0NjU3NTNlMmUwZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsTkFMSitPQS84UEtPVVQ4YlNVcDZhOVVZUTA9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDMUVMRzBhblFjVmJnRTZFL2FVQ2NFOWxydz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BLbDhjSUJFS2plOGJVR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpRcHk2Q21KZHJ2UVUra2V4SXVuRHdJV1JocW5RS0d3VUpzdVlTUDlMWFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJ4NVNaU0t0OFdTOTIxZkEzSTZHUHMrY20yM05ISDUreW41TFQxVGtUUjVETng2NkM4bTRQOW01Y0lFV3doZDNvT2xpZ0I1T1RzNFBPNXZUQkFqSURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPSGJETTJ4SUE1QUpJd1pzZkF1c3prM3hubVBDM0Vpc3hrc2VmcUwyblhkWHF5LzdFVXp3eHJ2c2EwSGZEMVQ2S2IxMit4N29nK0ltS1J6MDdNVXZCQT09In0sIm1lIjp7ImlkIjoiMjU0NzU3NTY3MDkzOjIxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRveGljIGtpZCIsImxpZCI6IjEyMzg1NDQ5MjAzNzMwMToyMUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU3NTY3MDkzOjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlkwS2N1Z3BpWGE3MEZQcEhzU0xwdzhDRmtZYXAwQ2hzRkNiTG1Fai9TMTEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzYyNTI3OCwibGFzdFByb3BIYXNoIjoiM2haeFZxIn0="
  module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🦠𝗩𝗜𝗥𝗨𝗦𝗜-𝗠𝗕𝗔𝗬𝗔-𝗠𝗗🦠🦟",
  author: process.env.PACK_AUTHER || "Virusi-Md",
  packname: process.env.PACK_NAME || "🦠",
  botname: process.env.BOT_NAME || "𝗩𝗜𝗥𝗨𝗦𝗜-𝗠𝗕𝗔𝗬𝗔-𝗠𝗗",
  ownername: process.env.OWNER_NAME || "Vurusian",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "VIRUSI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
