let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `βγπΈπ½πππ°π»π°π²πΈπΎπ½ π³π΄π» π±πΎπγ
ββ ΰΉΫ£ΫΝ‘ΝΫππ¨π₯π gracias por π₯³solicitar la instalaciΓ³n π€ del bot gracias por tu preferencia te dejarΓ© los requisitos para π©βπ»instalar el bot cualquier duda puedes contactarme a mi nΓΊmero personal en caso de si  necesitas ayuda para instalar π€΄
βββββΧβΧβΧβΧβββ
βγπ½ππΌπ΄ππΎ π³π΄π πΌπΈ π²ππ΄π°π³πΎπγ
ββhttp://wa.me/5212411719888
βββββΧβΧβΧβΧβββ
βγππππππππ: ππππ’ :γ
ββhttps://youtu.be/HoxZuQokeMM
βββββΧβΧβΧβΧβββ
βγπ²πΎπΌπ°π½π³πΎπ ππ΄ππΌππγ
ββpkg update && pkg upgrade
ββpkg install git -y
ββpkg install nodejs -y
ββpkg install ffmpeg -y
ββpkg install imagemagick -y
ββtermux-setup-storage
ββgit clone https://github.com/Yovanihades1212/HADES-BOT-MDV2.git
ββcd HADES-BOT-MDV2
ββnpm install
ββpkg install yarn
ββnpm update
ββyarn
ββnpm install
ββnpm start
βββββΧβΧβΧβΧβββ
βγπΈπ½π΅πΎππΌπ°π²πΈπΎπ½ γβ
ββSi el termux se cierra para volver activar escribe:
ββcd HADES-BOT-MDV2 
ββnpm start 
βββββΧβΧβΧβΧβγ
ββ Para obtener nuevamente el 
ββcodigo QR, escribe en el termux:
ββcd HADES-BOT-MDV2 
ββrm -rf Hades-Session
ββnpm start 
βββββΧβΧβΧβΧβγ
ββCada vez que realices una modificacion en el
ββrepositorio del Bot (tu GitHub), puedes usar 
ββel comando #actualizar para que se actualicen los datos
βββββΧβΧβΧβΧβγ
ββAconsejable maximo 30 grupos, despues 
ββde esa cantidad el Bot empieza a ir 
excesivamente lento (depende del
ββWhatsApp igual)
βββββΧβΧβΧβΧβββ`
let buttonMessage= {
'document': { url: `https://youtu.be/4eA5nDxPjOA` },
'mimetype': `application/${document}`,
'fileName': `ππππ-πππππ-πππ-ππβ¨`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Yovanihades1212/HADES-BOT-MDV2.git',
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΌπ΄π½π'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'π³πΎπ½π°π'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['instalarbot','script']
export default handler
