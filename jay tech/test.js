const { zokou } = require(__dirname + '/../framework/zokou');
const moment = require("moment-timezone");
const set = require(__dirname + '/../set');

moment.tz.setDefault(set.TZ || "Africa/Nairobi");

zokou({
  nomCom: "ping1",
  categorie: "General",
  reaction: "🟢"
}, async (dest, zk, commandeOptions) => {
  const { ms, sender } = commandeOptions;

  const time = moment().format("HH:mm:ss");
  const date = moment().format("DD/MM/YYYY");

  const response = `
╭───[ 𝗕.𝗠.𝗕-𝗧𝗘𝗖𝗛 𝗣𝗜𝗡𝗚 ]───⬣
│ 📅 Date: ${date}
│ 🕒 Time: ${time}
│ 👑 Owner: *${set.OWNER_NAME}*
╰───────────⬣`;

  // Friend's Blue Tick vCard
  const quotedContact = {
    key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`,
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: "B.M.B VERIFIED ✅",
        vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:B.M.B VERIFIED ✅\nORG:BMB-TECH BOT;\nTEL;type=CELL;type=VOICE;waid=254700000001:+254 700 000001\nEND:VCARD"
      }
    }
  };

  try {
    await zk.sendMessage(dest, {
      text: response,
      contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: "𝗕.𝗠.𝗕-𝗧𝗘𝗖𝗛 BOT",
          body: "Ping response from the system",
          thumbnailUrl: "https://github.com/bmbxmd1/BMB-DATA/raw/refs/heads/main/background.jpg",
          mediaType: 1,
          renderSmallThumbnail: true,
          showAdAttribution: true
        },
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363382023564830@newsletter",
          newsletterName: "𝙱.𝙼.𝙱-𝚇𝙼𝙳",
          serverMessageId: 1
        }
      }
    }, { quoted: quotedContact });
  } catch (err) {
    console.log("Ping error:", err);
    await zk.sendMessage(dest, { text: "❌ Ping failed. Check logs." }, { quoted: quotedContact });
  }
});
