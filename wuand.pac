// update: 2017.6.16
// 鉴于刑法修正案（九）关于第二百八十七条的描述，规则中加入了黑名单，请谅解
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// blacklist
if (
  shExpMatch(url, "https://plus.google.com/*") ||
  shExpMatch(url, "https://www.youtube.com/upload") ||
  shExpMatch(url, "https://twitter.com/i/tweet/create") ||
  shExpMatch(url, "https://www.facebook.com/ajax/updatestatus.php*") ||
  shExpMatch(url, "https://www.facebook.com/ufi/add/comment*") 
) return "PROXY 127.0.0.1";
// hosts
if (
  shExpMatch(url, "https://*.google.com/*") ||
  shExpMatch(url, "https://*.google.com.hk/*") ||
  shExpMatch(url, "https://accounts.youtube.com/*") ||
  dnsDomainIs(host, "www.dmm.com") ||
  dnsDomainIs(host, "osapi.dmm.com") ||
  dnsDomainIs(host, "pc-play.games.dmm.com") ||
  shExpMatch(url, "https://www.tumblr.com/*")
 ) return "DIRECT";
 // xx-mini
if (
// google
  shExpMatch(url, "*://*.google.*/*") ||
  shExpMatch(url, "http://*.gstatic.com/*") ||
  dnsDomainIs(host, "googleapis.com") ||
  shExpMatch(url, "http://*.googleusercontent.com/*") ||
  dnsDomainIs(host, "ggpht.com") ||
  dnsDomainIs(host, "googleapis.com") ||
  dnsDomainIs(host, "googletagmanager.com") ||
  dnsDomainIs(host, "googlesyndication.com") ||
  dnsDomainIs(host, "googleadservices.com") ||
  dnsDomainIs(host, "doubleclick.net") ||
  dnsDomainIs(host, "google-analytics.com") ||
  dnsDomainIs(host, "gvt1.com") ||
  dnsDomainIs(host, "gmail.com") ||
  dnsDomainIs(host, "googlesource.com") ||
// dmm
  dnsDomainIs(host, "dmm.com") ||
  dnsDomainIs(host, "cxpublic.com") ||
  dnsDomainIs(host, "a-i-ad.com") ||
  shExpMatch(url, "http://pics.dmm.co.jp/digital/*48/*") ||
  shExpMatch(url, "http://203.104.209.*/*") ||
  dnsDomainIs(host, "static.touken-ranbu.jp") ||
  dnsDomainIs(host, "cdn.bungo.dmmgames.com") ||
// famous
  dnsDomainIs(host, "youtube.com") ||
  dnsDomainIs(host, "ytimg.com") ||
  dnsDomainIs(host, "googlevideo.com") ||
  dnsDomainIs(host, "youtu.be") ||
  dnsDomainIs(host, "twitter.com") ||
  dnsDomainIs(host, "twimg.com") ||
  dnsDomainIs(host, "t.co") ||
  dnsDomainIs(host, "facebook.com") ||
  dnsDomainIs(host, "fbcdn.net") ||
  dnsDomainIs(host, "facebook.net") ||
  dnsDomainIs(host, "instagram.com") ||
  dnsDomainIs(host, "wikipedia.org") ||
  dnsDomainIs(host, "wikimedia.org") ||
  dnsDomainIs(host, "medium.com") ||
  dnsDomainIs(host, "flickr.com") ||
  dnsDomainIs(host, "yahoo.com") ||
  shExpMatch(url, "*://*.yimg.com/*") ||
  dnsDomainIs(host, "staticflickr.com") ||
  dnsDomainIs(host, "tumblr.com") ||
  dnsDomainIs(host, "pinterest.com") ||
  dnsDomainIs(host, "pinimg.com") ||
  dnsDomainIs(host, "vimeo.com") ||
  dnsDomainIs(host, "vimeocdn.com") ||
// acg
  dnsDomainIs(host, "nicovideo.jp") ||
  dnsDomainIs(host, "smilevideo.jp") ||
  dnsDomainIs(host, "nimg.jp") ||
  dnsDomainIs(host, "dmhy.org") ||
  dnsDomainIs(host, "pixiv.net") ||
  dnsDomainIs(host, "getchu.com") ||
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
// netdisk
  dnsDomainIs(host, "dropbox.com") ||
  dnsDomainIs(host, "dropboxstatic.com") ||
  dnsDomainIs(host, "onedrive.live.com") ||
  dnsDomainIs(host, "mediafire.com") ||
  dnsDomainIs(host, "getuploader.com") ||
// shopping
  dnsDomainIs(host, "nordstrom.com") ||
  dnsDomainIs(host, "nordstromimage.com") ||
  dnsDomainIs(host, "nordstrommedia.com") ||
// music
  dnsDomainIs(host, "soundcloud.com") ||
// news
  dnsDomainIs(host, "economist.com") ||
  dnsDomainIs(host, "bloomberg.com") ||
// game
  dnsDomainIs(host, "twitch.tv") ||
  dnsDomainIs(host, "jtvnw.net") ||
  dnsDomainIs(host, "ttvnw.net") ||
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
) return "PROXY 127.0.0.1:2333";
return "DIRECT";
}