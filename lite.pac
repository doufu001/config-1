// WunadBrowser PAC Rule
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// blacklist
if (
  shExpMatch(url, "https://plus.google.com/*") 
) return "DIRECT";
// squid
if (
  shExpMatch(url, "http://w010.touken-ranbu.jp/*") ||
  shExpMatch(url, "http://game.bungo.dmmgames.com/*") ||
  shExpMatch(url, "http://www.itchibanketsu.jp/*") ||
  shExpMatch(url, "http://asset.itchibanketsu.jp/*") ||
  shExpMatch(url, "http://203.104.209.*/*") ||
  dnsDomainIs(host, "dmhy.org") ||
  dnsDomainIs(host, "wikiwiki.jp") 
) return "PROXY 52.193.69.71:25";
// wallproxy
if (
// google
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
// dmm
  dnsDomainIs(host, "dmm.com") ||
  dnsDomainIs(host, "cxpublic.com") ||
  dnsDomainIs(host, "a-i-ad.com") ||
  shExpMatch(url, "http://pics.dmm.co.jp/digital/*48/*") ||
  dnsDomainIs(host, "touken-ranbu.jp") ||
  dnsDomainIs(host, "dmmgames.com") ||
  dnsDomainIs(host, "itchibanketsu.jp") ||
  dnsDomainIs(host, "kamihimeproject.net") ||
  dnsDomainIs(host, "swordlogic.com") ||
// github
  dnsDomainIs(host, "github.com") ||
  dnsDomainIs(host, "githubusercontent.com") ||
  dnsDomainIs(host, "githubapp.com") ||
// niconico
  dnsDomainIs(host, "nicovideo.jp") ||
  dnsDomainIs(host, "smilevideo.jp") ||
  dnsDomainIs(host, "nimg.jp") ||
// acg
  dnsDomainIs(host, "pixiv.net") ||
  dnsDomainIs(host, "gamer.com.tw") ||
  dnsDomainIs(host, "bahamut.com.tw") ||
  dnsDomainIs(host, "deviantart.com") ||
  dnsDomainIs(host, "deviantart.net") ||
// test
  dnsDomainIs(host, "ip.cn") 
) return "PROXY 127.0.0.1:2333";
return "DIRECT";
}