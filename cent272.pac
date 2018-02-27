// update: 2018.2.26
// 鉴于《刑法》、《网络安全法》等法律的有关条款，规则中加入了黑名单，请谅解
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// blacklist
if (
  shExpMatch(url, "https://plus.google.com/*") 
) return "PROXY 127.0.0.1";
// goproxy-jp
if (
  dnsDomainIs(host, "dmm.com") ||
  dnsDomainIs(host, "dmmgames.com") ||
  dnsDomainIs(host, "touken-ranbu.jp") ||
  dnsDomainIs(host, "cxpublic.com") ||
  dnsDomainIs(host, "a-i-ad.com") ||
  shExpMatch(url, "http://pics.dmm.co.jp/digital/*48/*") ||
  shExpMatch(url, "http://203.104.209.*/*") ||
  dnsDomainIs(host, "dovs9u514acja.cloudfront.net") ||
  dnsDomainIs(host, "wikiwiki.jp") 
 ) return "PROXY 127.0.0.1:20226";
// goproxy-ru
if (
// google
  shExpMatch(url, "*://*.google.*/*") ||
  dnsDomainIs(host, "gstatic.com") ||
  dnsDomainIs(host, "googleapis.com") ||
  dnsDomainIs(host, "googleusercontent.com") ||
  dnsDomainIs(host, "ggpht.com") ||
  dnsDomainIs(host, "gmail.com") ||
  dnsDomainIs(host, "googletagmanager.com") ||
  dnsDomainIs(host, "googlesyndication.com") ||
  dnsDomainIs(host, "googleadservices.com") ||
  dnsDomainIs(host, "doubleclick.net") ||
  dnsDomainIs(host, "google-analytics.com") ||
  dnsDomainIs(host, "gvt1.com") ||
  dnsDomainIs(host, "googlesource.com") ||
  dnsDomainIs(host, "goo.gl") ||
  dnsDomainIs(host, "accounts.youtube.com") ||
  dnsDomainIs(host, "consent.youtube.com") ||
// pinterest
  dnsDomainIs(host, "pinterest.com") ||
  dnsDomainIs(host, "pinimg.com") ||
  dnsDomainIs(host, "cedexis.com") ||
  dnsDomainIs(host, "cedexis-radar.net") ||
// Instagram
  dnsDomainIs(host, "instagram.com") ||
  dnsDomainIs(host, "cdninstagram.com") ||
  shExpMatch(url, "https://connect.facebook.net/*") ||
  shExpMatch(url, "https://staticxx.facebook.com/connect/*") ||
  shExpMatch(url, "https://www.facebook.com/connect/*") ||
// acg
  dnsDomainIs(host, "nicovideo.jp") ||
  dnsDomainIs(host, "smilevideo.jp") ||
  dnsDomainIs(host, "nimg.jp") ||
  dnsDomainIs(host, "dmhy.org") ||
  dnsDomainIs(host, "pixiv.net") ||
  dnsDomainIs(host, "line.me") ||
  dnsDomainIs(host, "line-apps.com") ||
  dnsDomainIs(host, "lineblog.me") ||
  dnsDomainIs(host, "saucenao.com") ||
// coding
  dnsDomainIs(host, "github.com") ||
  dnsDomainIs(host, "githubusercontent.com") ||
  dnsDomainIs(host, "githubapp.com") ||
  dnsDomainIs(host, "github.io") ||
  dnsDomainIs(host, "sourceforge.net") ||
  dnsDomainIs(host, "w3schools.com") ||
  dnsDomainIs(host, "android.com") ||
  dnsDomainIs(host, "golang.org") ||
  dnsDomainIs(host, "python.org") ||
  dnsDomainIs(host, "gitbook.com") ||
// education
  dnsDomainIs(host, "coursera.org") ||
  dnsDomainIs(host, "archive.org") ||
// art
  dnsDomainIs(host, "deviantart.com") ||
  dnsDomainIs(host, "deviantart.net") ||
// shopping
  dnsDomainIs(host, "nordstrom.com") ||
  dnsDomainIs(host, "nordstromimage.com") ||
  dnsDomainIs(host, "nordstrommedia.com") ||
// music
  dnsDomainIs(host, "soundcloud.com") ||
// game
  dnsDomainIs(host, "bahamut.com.tw") ||
  dnsDomainIs(host, "gamer.com.tw") ||
  dnsDomainIs(host, "miniclip.com") ||
  dnsDomainIs(host, "miniclipcdn.com") ||
// config
  dnsDomainIs(host, "adblockplus.org") ||
  dnsDomainIs(host, "greasyfork.org") ||
// cdn
  dnsDomainIs(host, "akamaihd.net") ||
  dnsDomainIs(host, "amazonaws.com") ||
  dnsDomainIs(host, "cloudfront.net") ||
// debug
  dnsDomainIs(host, "ip.cn") 
) return "PROXY 127.0.0.1:10226";
return "DIRECT";
}