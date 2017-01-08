// WuandSpecial PAC Rule
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// video
if (
  regExpMatch(url, "http:\/\/v\.youku\.com\/crossdomain\.xml") ||
  regExpMatch(url, "^.*?://.*?(tudou|qiyi|iqiyi|le|letv|letvcdn|sohu|ku6|ku6cdn|pps).(com|tv)/crossdomain.xml$")
 ) return "PROXY yk.pp.navi.youku.com:80";
// proxy
if (
// Google
  shExpMatch(url, "*://*.google.*/*") ||
  dnsDomainIs(host, "google.com.hk") ||
  dnsDomainIs(host, "google.co.jp") ||
  dnsDomainIs(host, "gstatic.com") ||
  dnsDomainIs(host, "googleusercontent.com") ||
  dnsDomainIs(host, "ggpht.com") ||
  dnsDomainIs(host, "googleapis.com") ||
  dnsDomainIs(host, "goo.gl") ||
  dnsDomainIs(host, "android.com") ||
  dnsDomainIs(host, "g.co") ||
  dnsDomainIs(host, "gmail.com") ||
  dnsDomainIs(host, "googlemail.com") ||
  dnsDomainIs(host, "golang.org") ||
  dnsDomainIs(host, "appspot.com") ||
  dnsDomainIs(host, "googledrive.com") ||
  dnsDomainIs(host, "feedburner.com") ||
  shExpMatch(url, "*://*.blogspot.*/*") ||
  dnsDomainIs(host, "abc.xyz") ||
  dnsDomainIs(host, "googletagmanager.com") ||
  dnsDomainIs(host, "googlesyndication.com") ||
  dnsDomainIs(host, "googleadservices.com") ||
  dnsDomainIs(host, "doubleclick.net") ||
  dnsDomainIs(host, "google-analytics.com") ||
  dnsDomainIs(host, "chromium.org") ||
  dnsDomainIs(host, "accounts.youtube.com") ||
  dnsDomainIs(host, "gvt1.com") ||
//Twitter
  dnsDomainIs(host, "twitter.com") ||
  dnsDomainIs(host, "twimg.com") ||
  dnsDomainIs(host, "t.co") ||
// Youtube
  dnsDomainIs(host, "youtube.com") ||
  dnsDomainIs(host, "ytimg.com") ||
  dnsDomainIs(host, "youtube-nocookie.com") ||
  dnsDomainIs(host, "googlevideo.com") ||
  host == "youtu.be" ||
// Facebook
  dnsDomainIs(host, "facebook.com") ||
  dnsDomainIs(host, "fbcdn.net") ||
  dnsDomainIs(host, "akamaihd.net") ||
  dnsDomainIs(host, "facebook.net") ||
  dnsDomainIs(host, "instagram.com") ||
// Github
  dnsDomainIs(host, "github.com") ||
  dnsDomainIs(host, "amazonaws.com") ||
// Yahoo
  dnsDomainIs(host, "flickr.com") ||
  dnsDomainIs(host, "yahoo.com") ||
  shExpMatch(url, "http*://*.yimg.com/*") ||
  dnsDomainIs(host, "staticflickr.com") ||
// news
  dnsDomainIs(host, "nytimes.com") ||
  dnsDomainIs(host, "nyt.com") ||
// DMM
  dnsDomainIs(host, "dmm.com") ||
  shExpMatch(url, "http://203.104.209.*/*") ||
  shExpMatch(url, "http://125.6.187.*/*") ||
  dnsDomainIs(host, "fout.jp") ||
  dnsDomainIs(host, "adclr.jp") ||
  dnsDomainIs(host, "cxense.com") ||
  dnsDomainIs(host, "ladsp.com") ||
  dnsDomainIs(host, "cxpublic.com") ||
  shExpMatch(url, "http://pics.dmm.co.jp/digital/*48/*") ||
  dnsDomainIs(host, "swordlogic.com") ||  
  dnsDomainIs(host, "touken-ranbu.jp") ||
// niconico
  dnsDomainIs(host, "nicovideo.jp") ||
  dnsDomainIs(host, "smilevideo.jp") ||
  dnsDomainIs(host, "nimg.jp") ||
// ACG
  dnsDomainIs(host, "gamer.com.tw") ||
  dnsDomainIs(host, "bahamut.com.tw") ||
  dnsDomainIs(host, "toranoana.jp") ||
  dnsDomainIs(host, "getuploader.com") ||
  dnsDomainIs(host, "soundcloud.com") ||
  dnsDomainIs(host, "xbox.com") ||
  dnsDomainIs(host, "neowing.co.jp") ||
  dnsDomainIs(host, "dailymotion.com") ||
  dnsDomainIs(host, "fc2.com") ||
  dnsDomainIs(host, "himado.in") ||
  dnsDomainIs(host, "dmcdn.net") ||
  dnsDomainIs(host, "postimg.org") ||
  dnsDomainIs(host, "exblog.jp") ||
  dnsDomainIs(host, "bookoffonline.co.jp") ||
  dnsDomainIs(host, "otomate.jp") ||
  dnsDomainIs(host, "gamestop.com") ||
  dnsDomainIs(host, "twitch.tv") ||
  dnsDomainIs(host, "ttvnw.net") ||
  dnsDomainIs(host, "deviantart.com") ||
  dnsDomainIs(host, "deviantart.net") ||
  dnsDomainIs(host, "photobucket.com") ||
  dnsDomainIs(host, "pixiv.net") ||
  dnsDomainIs(host, "dmhy.org") ||
  dnsDomainIs(host, "agar.io") ||
  dnsDomainIs(host, "slither.io") ||
  dnsDomainIs(host, "wikiwiki.jp") ||
  dnsDomainIs(host, "getchu.com") ||
  dnsDomainIs(host, "konachan.net") ||
// Shopping
  dnsDomainIs(host, "belk.com") ||
  dnsDomainIs(host, "cultizm.com") ||
  dnsDomainIs(host, "shop.com") ||
  dnsDomainIs(host, "urbanoutfitters.com") ||
  dnsDomainIs(host, "steampowered.com") ||
  dnsDomainIs(host, "nordstrom.com") ||
  dnsDomainIs(host, "suruga-ya.jp") ||
  dnsDomainIs(host, "fromnaturewithlove.com") ||
  dnsDomainIs(host, "shopping.pchome.com.tw") ||
  dnsDomainIs(host, "24h.pchome.com.tw") ||
  dnsDomainIs(host, "ec1img.pchome.com.tw") ||
  dnsDomainIs(host, "tommy.com") ||
  dnsDomainIs(host, "costco.com") ||
  dnsDomainIs(host, "abercrombie.com") ||
  dnsDomainIs(host, "katespade.com") ||
  dnsDomainIs(host, "americanas.com.br") ||
  dnsDomainIs(host, "nordstrom.com") ||
  dnsDomainIs(host, "nordstromimage.com") ||
  dnsDomainIs(host, "image.rakuten.co.jp") ||
// Tech & Study
  dnsDomainIs(host, "html5rocks.com") ||
  dnsDomainIs(host, "sourceforge.net") ||
  dnsDomainIs(host, "w3schools.com") ||
  dnsDomainIs(host, "putty.org") ||
  dnsDomainIs(host, "livejournal.com") ||
  dnsDomainIs(host, "jacksonsart.com") ||
  dnsDomainIs(host, "blog.livedoor.com") ||
  dnsDomainIs(host, "wikipedia.org") ||
  dnsDomainIs(host, "wikimedia.org") ||
  dnsDomainIs(host, "archive.org") ||
  dnsDomainIs(host, "gen.lib.rus.ec") ||
  dnsDomainIs(host, "atlantis-press.com") ||
  dnsDomainIs(host, "englishtips.org") ||
// Other
  dnsDomainIs(host, "ifm.com") ||
  dnsDomainIs(host, "emerson.com") ||
  dnsDomainIs(host, "abb.com") ||
  dnsDomainIs(host, "playstation.com") ||
  dnsDomainIs(host, "probrewer.com") ||
  dnsDomainIs(host, "uploader.jp") ||
  dnsDomainIs(host, "jiandan.net") ||
  dnsDomainIs(host, "python.org") ||
  dnsDomainIs(host, "case.cy.edu.tw") ||
  dnsDomainIs(host, "unionmadegoods.com") ||
  dnsDomainIs(host, "kidsgamegame.com") ||
  dnsDomainIs(host, "gravatar.com") ||
  dnsDomainIs(host, "slideshare.net") ||
  dnsDomainIs(host, "torrentz.eu") ||
  dnsDomainIs(host, "calbee.co.jp") ||
  dnsDomainIs(host, "onsen.ag") ||
  dnsDomainIs(host, "saucenao.com") ||
  dnsDomainIs(host, "secure.logmein.com") ||
  dnsDomainIs(host, "mediafire.com") ||
  dnsDomainIs(host, "iqdb.org") ||
  dnsDomainIs(host, "tofo.me") ||
  dnsDomainIs(host, "onedrive.live.com") ||
  dnsDomainIs(host, "wix.com") ||
  dnsDomainIs(host, "dillards.com") ||
  dnsDomainIs(host, "bonton.com") ||
  dnsDomainIs(host, "myer.com.au") ||
  dnsDomainIs(host, "hoovers.com") ||
  dnsDomainIs(host, "pokemon-gl.com") ||
  dnsDomainIs(host, "shutterstock.com") ||
  dnsDomainIs(host, "vimeo.com") ||
  dnsDomainIs(host, "nasa.gov") ||
  dnsDomainIs(host, "akaboo.jp") ||
  dnsDomainIs(host, "plurk.com") ||
  dnsDomainIs(host, "vimeo.com") ||
  dnsDomainIs(host, "pixnet.net") ||
  dnsDomainIs(host, "mykomica.org") ||
  dnsDomainIs(host, "reddit.com") ||
  dnsDomainIs(host, "photobucket.com") ||
  dnsDomainIs(host, "pbsrc.com") ||
  dnsDomainIs(host, "appnee.com") ||
  dnsDomainIs(host, "android.com") ||
  dnsDomainIs(host, "soundcloud.com") ||
  dnsDomainIs(host, "csgozone.net") ||
  dnsDomainIs(host, "madewithangular.com") ||
  dnsDomainIs(host, "daum.net") ||
  dnsDomainIs(host, "clipconverter.cc") ||
  dnsDomainIs(host, "viber.com") ||
  dnsDomainIs(host, "naarnederland.nl") ||
  dnsDomainIs(host, "dropbox.com") ||
  dnsDomainIs(host, "tumblr.com") ||
  dnsDomainIs(host, "itsnotheritsme.com") ||
  dnsDomainIs(host, "hostmonster.com") ||
  dnsDomainIs(host, "softasm.com") ||
  dnsDomainIs(host, "4shared.com") ||
  dnsDomainIs(host, "raidcall.com.tw") ||
  dnsDomainIs(host, "bbs.jjwxc.net") ||
  dnsDomainIs(host, "medium.com") ||
  dnsDomainIs(host, "economist.com") ||
  dnsDomainIs(host, "yifanxing.com") ||
  dnsDomainIs(host, "adblockplus.org") ||
  dnsDomainIs(host, "rosonbbs.com") ||
  dnsDomainIs(host, "telegram.org") ||
  dnsDomainIs(host, "telegram.me") ||
// adult
  dnsDomainIs(host, "sexinsex.net") ||
  dnsDomainIs(host, "sis001.com") ||
// Test
  dnsDomainIs(host, "ip.cn")
) return "PROXY 127.0.0.1:2333";
return "DIRECT";
}
