const fs = require('fs');
const path = require('path');
const moment = require("moment-timezone");
const { zokou } = require(__dirname + "/../framework/zokou");
const s = require(__dirname + "/../set");

zokou({ nomCom: "about", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre } = commandeOptions;

  moment.tz.setDefault("Africa/Nairobi");
  const time = moment().format('HH:mm:ss');
  const date = moment().format('DD/MM/YYYY');

  const infoMsg = `┏━━━━━━━━━━━━━━━━━━
┃ 👋 Hello: *${ms.pushName}*
┃ 🤖 Bot: *${s.BOT}*
┃ 📍 Prefix: ${s.PREFIXE}
┃ 🔓 Mode: ${(s.MODE || "").toLowerCase() === "yes" ? "public" : "private"}
┃ 👑 Owner: ${s.OWNER_NAME}
┃ ⏰ Time: ${time}
┃ 📅 Date: ${date}
┗━━━━━━━━━━━━━━━━━
> 𝗠𝗮𝗱𝗲 𝗯𝘆 𝗝-𝗠𝗗`;

  try {
    const scsFolder = path.join(__dirname, "../scs");
    if (!fs.existsSync(scsFolder)) return repondre("❌ Folder `scs` not found!");

    const images = fs.readdirSync(scsFolder).filter(f => /^menu\d+\.jpg$/i.test(f));
    if (!images.length) return repondre("❌ No images found in /scs folder");

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imagePath = path.join(scsFolder, randomImage);

    if (!fs.existsSync(imagePath)) return repondre(`❌ Image file not found: ${imagePath}`);

    await zk.sendMessage(dest, {
      image: fs.readFileSync(imagePath),
      caption: infoMsg
    }, { quoted: ms });

  } catch (e) {
    console.error("🥵 Menu error:", e);
    repondre("🥵 Menu error: " + e.message);
  }
});
      
