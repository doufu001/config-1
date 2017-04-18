// WunadBrowser PAC Rule
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// blacklist
if (
  shExpMatch(url, "https://plus.google.com/*") 
) return "DIRECT";
// goproxy
if (
  shExpMatch(url, "http://203.104.209.*/*") ||
  dnsDomainIs(host, "nicovideo.jp") ||
  dnsDomainIs(host, "smilevideo.jp") ||
  dnsDomainIs(host, "nimg.jp") ||
  dnsDomainIs(host, "line.me") ||
  dnsDomainIs(host, "line-apps.com") ||
  dnsDomainIs(host, "amazonaws.com") ||
  dnsDomainIs(host, "cloudfront.net") ||
  shExpMatch(url, "http://*.google.com/*") ||
  shExpMatch(url, "http://*.gmail.com/*") ||
  dnsDomainIs(host, "ip.cn")
 ) return "PROXY 127.0.0.1:6666";
// goproxy php
if (
  dnsDomainIs(host, "dmm.com") ||
  dnsDomainIs(host, "wikiwiki.jp") 
 ) return "PROXY 127.0.0.1:6667";
// wallproxy
if (
// google
  shExpMatch(url, "*://*.google.*/*") ||
  dnsDomainIs(host, "google.com") ||
  dnsDomainIs(host, "google.com.hk") ||
  dnsDomainIs(host, "google.co.jp") ||
  dnsDomainIs(host, "gstatic.com") ||
  dnsDomainIs(host, "googleapis.com") ||
  dnsDomainIs(host, "googleusercontent.com") ||
  dnsDomainIs(host, "ggpht.com") ||
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
  dnsDomainIs(host, "fout.jp") ||
  dnsDomainIs(host, "adclr.jp") ||
  dnsDomainIs(host, "cxense.com") ||
  dnsDomainIs(host, "ladsp.com") ||
  dnsDomainIs(host, "cxpublic.com") ||
  dnsDomainIs(host, "a-i-ad.com") ||
  shExpMatch(url, "http://pics.dmm.co.jp/digital/*48/*") ||
  dnsDomainIs(host, "swordlogic.com") ||
  dnsDomainIs(host, "touken-ranbu.jp") ||
  dnsDomainIs(host, "dmmgames.com") ||
  dnsDomainIs(host, "itchibanketsu.jp") ||
  dnsDomainIs(host, "shiropro-re.net") ||
  dnsDomainIs(host, "millennium-war.net") ||
  dnsDomainIs(host, "kamihimeproject.net") ||
// github
  dnsDomainIs(host, "github.com") ||
  dnsDomainIs(host, "githubusercontent.com") ||
  dnsDomainIs(host, "githubapp.com") ||
// acg
  dnsDomainIs(host, "pixiv.net") ||
  dnsDomainIs(host, "gamer.com.tw") ||
  dnsDomainIs(host, "bahamut.com.tw") ||
// art
  dnsDomainIs(host, "deviantart.com") ||
  dnsDomainIs(host, "deviantart.net") ||
  dnsDomainIs(host, "imslp.org") ||
// music
  dnsDomainIs(host, "soundcloud.com") ||
// test
  dnsDomainIs(host, "ip.cn") 
) return "PROXY 127.0.0.1:2333";
return "DIRECT";
}