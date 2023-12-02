const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}

*JIKA KALIAN INGIN DONATE KETIK ".donate" | MIMIN KURANG DANA BUAT BENERIN SERVER BOTNYA, BIAR TIDAK ERROR MULU*

*STATISTICS*
 • Upload : ${upload}
 • Downloads : ${download}

*BOT INFO*
 • Creator : ${ownerName}
 • Bot Name : ${botName}
 • Time : ${jam}
 • Date : ${tanggal(new Date())}
 • Runtime : ${runtime(process.uptime())}
 
 
*USER INFO*
 • Name : ${pushname !== undefined ? pushname : '-'}
 • Status : ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 • Limit : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 • Limit Game : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
 • Balance : ${getBalance(sender, balance)}
 • Role : ${role}
 
 
*MAIN MENU*${petik}
 • ${prefix}menu
 • ${prefix}infobot
 • ${prefix}donate
 • ${prefix}dashboard
 • ${prefix}owner
 • ${prefix}cekbandwidth
 • ${prefix}cekpremium
 • ${prefix}listpremium
 • ${prefix}listsewa
 • ${prefix}speed
 • ${prefix}runtime
 • ${prefix}listbahasa${petik}


*BALANCE MENU*${petik}
 • ${prefix}topglobal
 • ${prefix}toplocal
 • ${prefix}buylimit
 • ${prefix}buyglimit
 • ${prefix}transfer
 • ${prefix}limit
 • ${prefix}balance${petik}


*DOWNLOADS MENU*${petik}
 • ${prefix}ytmp3
 • ${prefix}ytmp4
 • ${prefix}instagram   (❌)
 • ${prefix}igphoto     (❌)
 • ${prefix}igvideo     (❌)
 • ${prefix}igreels     (❌)
 • ${prefix}tiktoknowm
 • ${prefix}tiktokaudio${petik}


 *CONVERTER/TOOLS*${petik} 
 • ${prefix}sticker
 • ${prefix}qc
 • ${prefix}xquote
 • ${prefix}stickerwm
 • ${prefix}smeme
 • ${prefix}toimg
 • ${prefix}tomp3
 • ${prefix}emojimix
 • ${prefix}aiimg       (❌)
 • ${prefix}aidraw      (❌)
 • ${prefix}say
 • ${prefix}translate${petik}
 

 *RANDOM MENU*${petik}
 • ${prefix}cecan
 • ${prefix}cogan
 • ${prefix}waifu${petik}


 *ANONYMOUS CHATS*${petik}
 • ${prefix}menfess
 • ${prefix}confess
 • ${prefix}balasmenfess
 • ${prefix}tolakmenfess
 • ${prefix}stopmenfess
 • ${prefix}anonymous
 • ${prefix}start
 • ${prefix}next
 • ${prefix}stop
 • ${prefix}sendprofile${petik}


*OWNERS MENU*${petik}
 • ${prefix}autorespond
 • ${prefix}broadcast
 • ${prefix}bcimg
 • ${prefix}bcstik
 • ${prefix}bcvn
 • ${prefix}bcvideo
 • ${prefix}bcsewa
 • ${prefix}addpremium
 • ${prefix}delpremium
 • ${prefix}addsewa
 • ${prefix}delsewa${petik}


 *GROUP MENU*${petik}
 • ${prefix}autoaigc
 • ${prefix}afk
 • ${prefix}welcome
 • ${prefix}left
 • ${prefix}pppanjanggc
 • ${prefix}setopen
 • ${prefix}changesetopen
 • ${prefix}delsetopen
 • ${prefix}setclose
 • ${prefix}changesetclose
 • ${prefix}delsetclose
 • ${prefix}setwelcome
 • ${prefix}changewelcome
 • ${prefix}delsetwelcome
 • ${prefix}setleft
 • ${prefix}changeleft
 • ${prefix}delsetleft
 • ${prefix}linkgc
 • ${prefix}setppgc
 • ${prefix}setppgc2 
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}antilink
 • ${prefix}antiwame
 • ${prefix}antilink2
 • ${prefix}antiwame2
 • ${prefix}open
 • ${prefix}close
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}revoke
 • ${prefix}hidetag
 • ${prefix}checksewa${petik}


`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `Untuk List Sewa ubah sendiri di folder command, file help.js 👌 baris ke 521`