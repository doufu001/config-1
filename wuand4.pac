// WunadBrowser PAC Rule
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// blacklist
if (
  shExpMatch(url, "https://plus.google.com/*") 
) return "DIRECT";
// proxy
if (
// google
  shExpMatch(url, "*://*.google.*/*") ||
  dnsDomainIs(host, "google.com") ||
  dnsDomainIs(host, "google.com.hk") ||
  dnsDomainIs(host, "google.co.jp") ||
  dnsDomainIs(host, "gstatic.com") ||
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
  shExpMatch(url, "*://accounts.youtube.com/*") ||
// github
  dnsDomainIs(host, "github.com") ||
  dnsDomainIs(host, "githubusercontent.com") ||
  dnsDomainIs(host, "githubapp.com") ||
  dnsDomainIs(host, "github.io") ||
// dmm
  dnsDomainIs(host, "dmm.com") ||
  dnsDomainIs(host, "fout.jp") ||
  dnsDomainIs(host, "adclr.jp") ||
  dnsDomainIs(host, "cxense.com") ||
  dnsDomainIs(host, "ladsp.com") ||
  dnsDomainIs(host, "cxpublic.com") ||
  dnsDomainIs(host, "a-i-ad.com") ||
  shExpMatch(url, "http://pics.dmm.co.jp/digital/*48/*") ||
  dnsDomainIs(host, "swordlogic.com") ||
  dnsDomainIs(host, "touken-ranbu.jp") ||
  shExpMatch(url, "http://203.104.209.*/*") ||
  dnsDomainIs(host, "itchibanketsu.jp") ||
  dnsDomainIs(host, "wikiwiki.jp") ||
  dnsDomainIs(host, "dmmgames.com") ||
  dnsDomainIs(host, "kamihimeproject.net") ||
// niconico
  dnsDomainIs(host, "nicovideo.jp") ||
  dnsDomainIs(host, "smilevideo.jp") ||
  dnsDomainIs(host, "nimg.jp") ||
// acg
  dnsDomainIs(host, "dmhy.org") ||
  dnsDomainIs(host, "pixiv.net") ||
  dnsDomainIs(host, "bahamut.com.tw") ||
  dnsDomainIs(host, "soundcloud.com") ||
  dnsDomainIs(host, "gamer.com.tw") ||
  dnsDomainIs(host, "deviantart.com") ||
  dnsDomainIs(host, "deviantart.net") ||
  dnsDomainIs(host, "getchu.com") ||
  dnsDomainIs(host, "saucenao.com") ||
// art
  dnsDomainIs(host, "pixelovely.com") ||
  dnsDomainIs(host, "posemaniacs.com") ||
  dnsDomainIs(host, "tineye.com") ||
  dnsDomainIs(host, "shutterstock.com") ||
// game
  dnsDomainIs(host, "ujj.co.jp") ||
  dnsDomainIs(host, "garena.tw") ||
// shopping
  dnsDomainIs(host, "nordstrom.com") ||
  dnsDomainIs(host, "nordstromimage.com") ||
  dnsDomainIs(host, "nordstrommedia.com") ||
  dnsDomainIs(host, "toranoana.jp") ||
  dnsDomainIs(host, "suruga-ya.jp") ||
  dnsDomainIs(host, "steinmart.com") ||
// test
  dnsDomainIs(host, "ip.cn")
) return "PROXY 127.0.0.1:6666";
return "DIRECT";
}