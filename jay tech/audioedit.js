const { zokou } = require("../framework/zokou");
const fs = require("fs");
const { exec } = require("child_process");

const filename = `${Math.random().toString(36)}`;
const jidData = {
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: "120363382023564830@newsletter",
    newsletterName: "J-MD",
    serverMessageId: 1
  }
};

// DEEP
zokou({
  nomCom: "deep",
  categorie: "Audio-Edit"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, msgRepondu } = commandeOptions;
  if (!msgRepondu || !msgRepondu.audioMessage) return repondre("❗ Please mention an audio");
  const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  const ran = `${filename}.mp3`;
  const set = "-af atempo=4/4,asetrate=44500*2/3";

  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) return repondre("❌ Error during processing: " + err);
    const buffer = fs.readFileSync(ran);
    zk.sendMessage(dest, {
      audio: buffer,
      mimetype: "audio/mpeg",
      contextInfo: jidData
    }, { quoted: ms });
    fs.unlinkSync(ran);
  });
});

// BASS
zokou({
  nomCom: "bass",
  categorie: "Audio-Edit"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, msgRepondu } = commandeOptions;
  if (!msgRepondu || !msgRepondu.audioMessage) return repondre("❗ Please mention an audio");
  const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  const ran = `${filename}.mp3`;
  const set = "-af equalizer=f=18:width_type=o:width=2:g=14";

  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) return repondre("❌ Error during processing: " + err);
    const buffer = fs.readFileSync(ran);
    zk.sendMessage(dest, {
      audio: buffer,
      mimetype: "audio/mpeg",
      contextInfo: jidData
    }, { quoted: ms });
    fs.unlinkSync(ran);
  });
});

// REVERSE
zokou({
  nomCom: "reverse",
  categorie: "Audio-Edit"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, msgRepondu } = commandeOptions;
  if (!msgRepondu || !msgRepondu.audioMessage) return repondre("❗ Please mention an audio");
  const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  const ran = `${filename}.mp3`;
  const set = '-filter_complex "areverse"';

  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) return repondre("❌ Error during processing: " + err);
    const buffer = fs.readFileSync(ran);
    zk.sendMessage(dest, {
      audio: buffer,
      mimetype: "audio/mpeg",
      contextInfo: jidData
    }, { quoted: ms });
    fs.unlinkSync(ran);
  });
});

// SLOW
zokou({
  nomCom: "slow",
  categorie: "Audio-Edit"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, msgRepondu } = commandeOptions;
  if (!msgRepondu || !msgRepondu.audioMessage) return repondre("❗ Please mention an audio");
  const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  const ran = `${filename}.mp3`;
  const set = '-filter:a "atempo=0.8,asetrate=44100"';

  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) return repondre("❌ Error during processing: " + err);
    const buffer = fs.readFileSync(ran);
    zk.sendMessage(dest, {
      audio: buffer,
      mimetype: "audio/mpeg",
      contextInfo: jidData
    }, { quoted: ms });
    fs.unlinkSync(ran);
  });
});

// TEMPO
zokou({
  nomCom: "tempo",
  categorie: "Audio-Edit"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, msgRepondu } = commandeOptions;
  if (!msgRepondu || !msgRepondu.audioMessage) return repondre("❗ Please mention an audio");
  const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  const ran = `${filename}.mp3`;
  const set = '-filter:a "atempo=0.9,asetrate=65100"';

  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) return repondre("❌ Error during processing: " + err);
    const buffer = fs.readFileSync(ran);
    zk.sendMessage(dest, {
      audio: buffer,
      mimetype: "audio/mpeg",
      contextInfo: jidData
    }, { quoted: ms });
    fs.unlinkSync(ran);
  });
});

// NIGHTCORE
zokou({
  nomCom: "nightcore",
  categorie: "Audio-Edit"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, msgRepondu } = commandeOptions;
  if (!msgRepondu || !msgRepondu.audioMessage) return repondre("❗ Please mention an audio");
  const media = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  const ran = `${filename}.mp3`;
  const set = '-filter:a "atempo=1.07,asetrate=44100*1.20"';

  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) return repondre("❌ Error during processing: " + err);
    const buffer = fs.readFileSync(ran);
    zk.sendMessage(dest, {
      audio: buffer,
      mimetype: "audio/mpeg",
      contextInfo: jidData
    }, { quoted: ms });
    fs.unlinkSync(ran);
  });
});
