// 鉴于刑法修正案（九）关于第二百八十七条的描述，规则中加入了黑名单，请谅解
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// blacklist
if (
  shExpMatch(url, "https://plus.google.com/*")
) return "DIRECT";
// v2ray
if (
  shExpMatch(url, "*://*.google.*/*") ||
  dnsDomainIs(host, "google.com") ||
  dnsDomainIs(host, "google.com.hk") 
 ) return "PROXY 127.0.0.1:6666";
// goproxy
if (
  dnsDomainIs(host, "www.dmm.com") ||
  dnsDomainIs(host, "osapi.dmm.com") ||
  dnsDomainIs(host, "w010.touken-ranbu.jp") ||
  dnsDomainIs(host, "game.bungo.dmmgames.com") ||
  dnsDomainIs(host, "wikiwiki.jp") 
 ) return "PROXY 127.0.0.1:1024";
 // xx-mini
if (
// google
  dnsDomainIs(host, "gstatic.com") ||
  dnsDomainIs(host, "googleapis.com") ||
  dnsDomainIs(host, "googleusercontent.com") ||
  dnsDomainIs(host, "ggpht.com") ||
  dnsDomainIs(host, "googleapis.com") ||
  dnsDomainIs(host, "android.com") ||
  dnsDomainIs(host, "golang.org") ||
  dnsDomainIs(host, "googletagmanager.com") ||
  dnsDomainIs(host, "googlesyndication.com") ||
  dnsDomainIs(host, "googleadservices.com") ||
  dnsDomainIs(host, "doubleclick.net") ||
  dnsDomainIs(host, "google-analytics.com") ||
  dnsDomainIs(host, "gvt1.com") ||
  dnsDomainIs(host, "gmail.com") ||
  dnsDomainIs(host, "googlesource.com") ||
  dnsDomainIs(host, "chromium.org") ||
  shExpMatch(url, "*://accounts.youtube.com/*") ||
// pinterest
  dnsDomainIs(host, "pinterest.com") ||
  dnsDomainIs(host, "pinimg.com") ||
// github
  dnsDomainIs(host, "github.com") ||
  dnsDomainIs(host, "githubusercontent.com") ||
  dnsDomainIs(host, "githubapp.com") ||
  dnsDomainIs(host, "github.io") ||
// dmm
  dnsDomainIs(host, "dmm.com") ||
  dnsDomainIs(host, "cxpublic.com") ||
  dnsDomainIs(host, "a-i-ad.com") ||
  shExpMatch(url, "http://pics.dmm.co.jp/digital/*48/*") ||
  dnsDomainIs(host, "swordlogic.com") ||
  shExpMatch(url, "http://203.104.209.*/*") ||
  dnsDomainIs(host, "touken-ranbu.jp") ||
  dnsDomainIs(host, "dmmgames.com") ||
  dnsDomainIs(host, "itchibanketsu.jp") ||
  dnsDomainIs(host, "shiropro-re.net") ||
  dnsDomainIs(host, "millennium-war.net") ||
  dnsDomainIs(host, "kamihimeproject.net") ||
// twitch
  dnsDomainIs(host, "twitch.tv") ||
  dnsDomainIs(host, "jtvnw.net") ||
  dnsDomainIs(host, "ttvnw.net") ||
// niconico
  dnsDomainIs(host, "nicovideo.jp") ||
  dnsDomainIs(host, "smilevideo.jp") ||
  dnsDomainIs(host, "nimg.jp") ||
// line
  dnsDomainIs(host, "line.me") ||
  dnsDomainIs(host, "line-apps.com") ||
// bahamut
  dnsDomainIs(host, "bahamut.com.tw") ||
  dnsDomainIs(host, "gamer.com.tw") ||
// deviantart
  dnsDomainIs(host, "deviantart.com") ||
  dnsDomainIs(host, "deviantart.net") ||
// miniclip
  dnsDomainIs(host, "miniclip.com") ||
  dnsDomainIs(host, "miniclipcdn.com") ||
// nordstrom
  dnsDomainIs(host, "nordstrom.com") ||
  dnsDomainIs(host, "nordstromimage.com") ||
  dnsDomainIs(host, "nordstrommedia.com") ||
// acg
  dnsDomainIs(host, "dmhy.org") ||
  dnsDomainIs(host, "pixiv.net") ||
  dnsDomainIs(host, "wikiwiki.jp") ||
  dnsDomainIs(host, "getchu.com") ||
  dnsDomainIs(host, "saucenao.com") ||
  dnsDomainIs(host, "otakomu.jp") ||
  dnsDomainIs(host, "pathofexile.com") ||
// design
  dnsDomainIs(host, "pixelovely.com") ||
  dnsDomainIs(host, "posemaniacs.com") ||
  dnsDomainIs(host, "shutterstock.com") ||
  dnsDomainIs(host, "sta.sh") ||
  dnsDomainIs(host, "issuu.com") ||
  dnsDomainIs(host, "artstation.com") ||
// music
  dnsDomainIs(host, "soundcloud.com") ||
  dnsDomainIs(host, "imslp.org") ||
  dnsDomainIs(host, "e-classical.com.tw") ||
  dnsDomainIs(host, "hinet.net") ||
  dnsDomainIs(host, "easybook.tw") ||
  dnsDomainIs(host, "ultras-tifo.net") ||
// code
  dnsDomainIs(host, "tensorflow.org") ||
  dnsDomainIs(host, "sourceforge.net") ||
  dnsDomainIs(host, "topcoder.com") ||
  dnsDomainIs(host, "gitbook.com") ||
  dnsDomainIs(host, "angelboy.tw") ||
// education
  dnsDomainIs(host, "edu.tw") ||
  dnsDomainIs(host, "coursera.org") ||
  dnsDomainIs(host, "nlm.nih.gov") ||
// shopping
  dnsDomainIs(host, "suruga-ya.jp") ||
  dnsDomainIs(host, "steinmart.com") ||
  dnsDomainIs(host, "vittz.co.kr") ||
  dnsDomainIs(host, "hmv.co.jp") ||
  dnsDomainIs(host, "rakuten.co.jp") ||
// cdn
  dnsDomainIs(host, "akamaihd.net") ||
  dnsDomainIs(host, "amazonaws.com") ||
  dnsDomainIs(host, "cloudfront.net") ||
// debug
  dnsDomainIs(host, "ip.cn") 
) return "PROXY 127.0.0.1:2333";
return "DIRECT";
}