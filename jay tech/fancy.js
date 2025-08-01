const { zokou } = require("../framework/zokou");
const fancy = require("../jmd/style");

zokou({ nomCom: "fancy", categorie: "Fun", reaction: "〽️" }, async (dest, zk, commandeOptions) => {
    const { arg, repondre, prefixe, ms } = commandeOptions;
    const id = arg[0]?.match(/\d+/)?.join('');
    const text = arg.slice(1).join(" ");

    try {
        if (id === undefined || text === undefined) {
            return await zk.sendMessage(dest, {
                text: `\nExemple : ${prefixe}fancy 10 sir jay\n` + String.fromCharCode(8206).repeat(4001) + fancy.list('J-MD', fancy),
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363382023564830@newsletter",
                        newsletterName: "J-MD"
                    }
                }
            }, { quoted: ms });
        }

        const selectedStyle = fancy[parseInt(id) - 1];
        const resultText = selectedStyle ? fancy.apply(selectedStyle, text) : '_Style introuvable :(_';

        return await zk.sendMessage(dest, {
            text: resultText,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363382023564830@newsletter",
                    newsletterName: "J-MD"
                }
            }
        }, { quoted: ms });

    } catch (error) {
        console.error(error);
        return await repondre('_Une erreur s\'est produite :(_');
    }
});
