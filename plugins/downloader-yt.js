
let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner }) => {
    if (!args[0]) return m.reply('Link?')
    const sections = [
	{
	title: "đď¸ Audio",
	rows: [
	    {title: "Get Audio", rowId: `${usedPrefix}getaud ${args[0]} audio`},
	    {title: "YT Audio", rowId: `${usedPrefix}yta ${args[0]}`},
	    {title: "Ytmp3Juice", rowId: `${usedPrefix}yta ${args[0]} yes`}
	]
    },
    {
	title: "đĽ Video",
	rows: [
	    {title: "Quality 1080p", rowId: `${usedPrefix}getvid ${args[0]} 1080`},
{title: "Quality 720p", rowId: `${usedPrefix}getvid ${args[0]} 720`},
{title: "Quality 480p", rowId: `${usedPrefix}getvid ${args[0]} 480`},
{title: "Quality 360p", rowId: `${usedPrefix}getvid ${args[0]} 360`},
{title: "YT Mp4", rowId: `${usedPrefix}ytmp4 ${args[0]}`},
{title: "Ytmp4Juice", rowId: `${usedPrefix}ytmp4 ${args[0]} yes`}
	]
    },
   
]

const listMessage = {
  text: `${htjava}  á´ŠĘá´á´ęąá´ ęąá´Ęá´á´á´ yá´á´Ę á´á´á´ÉŞá´ á´yá´Šá´...`,
  footer: botdate,
  title: " đĽ đŹđ§ đđ˘đŞđĄđđ˘đđđđĽ",
  buttonText: "List Download",
  sections
}

return conn.sendMessage(m.chat, listMessage, { quoted: fpay})
}

handler.help = ['ytd']
handler.tags = ['downloader']
handler.command = /^ytd(mp[34]|[av])?$/i
handler.exp = 3

export default handler
