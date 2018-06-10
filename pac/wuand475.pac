// update: 2018.6.10
// 鉴于《刑法》、《网络安全法》等法律的有关条款，规则中加入了黑名单，请谅解
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// blacklist
if (
  shExpMatch(url, "https://plus.google.com/*") ||
  shExpMatch(url, "https://www.youtube.com/upload") ||
  shExpMatch(url, "https://twitter.com/i/tweet/create") ||
  shExpMatch(url, "https://login.wikimedia.org/*") ||
  shExpMatch(url, "https://www.facebook.com/ajax/updatestatus.php*") ||
  shExpMatch(url, "https://www.facebook.com/ufi/add/comment*") ||
  dnsDomainIs(host, "web.telegram.org") ||
  dnsDomainIs(host, "live.github.com") 
) return "DIRECT";
// goproxy-php
if (
  shExpMatch(url, "*://smile-*.nicovideo.jp/*") ||
  dnsDomainIs(host, "assets-cdn.github.com") ||
  shExpMatch(url, "*://scholar.google.*/*") 
) return "PROXY 127.0.0.1:233";
// goproxy-gae
if (
// surprise
  dnsDomainIs(host, "api.twitter.com") ||
// game
  dnsDomainIs(host, "twitch.tv") 
 ) return "PROXY 127.0.0.1:23333";
// goproxy-jp
if (
// education
  shExpMatch(url, "*://sci-hub.*/*") ||
// dmm
  dnsDomainIs(host, "dmm.com") ||
  dnsDomainIs(host, "dmmgames.com") ||
  dnsDomainIs(host, "gsspat.jp") ||
  dnsDomainIs(host, "touken-ranbu.jp") ||
  dnsDomainIs(host, "cxpublic.com") ||
  dnsDomainIs(host, "cxense.com") ||
  dnsDomainIs(host, "a-i-ad.com") ||
  dnsDomainIs(host, "ravenjs.com") ||
  shExpMatch(url, "http://pics.dmm.co.jp/digital/*48/*") ||
  shExpMatch(url, "http://203.104.209.*/*") ||
  dnsDomainIs(host, "dovs9u514acja.cloudfront.net") ||
// acg
  dnsDomainIs(host, "www.nicovideo.jp") ||
  dnsDomainIs(host, "wikiwiki.jp") 
 ) return "PROXY 127.0.0.1:666";
// goagent-php
if (
// surprise
  dnsDomainIs(host, "facebook.com") ||
  dnsDomainIs(host, "twitter.com") ||
// google
  shExpMatch(url, "*://*.google.*/*") ||
  dnsDomainIs(host, "google.com") ||
  dnsDomainIs(host, "gstatic.com") ||
  dnsDomainIs(host, "googleapis.com") ||
  dnsDomainIs(host, "googleusercontent.com") ||
  dnsDomainIs(host, "ggpht.com") ||
  dnsDomainIs(host, "gmail.com") ||
  dnsDomainIs(host, "googletagmanager.com") ||
  dnsDomainIs(host, "googletagservices") ||
  dnsDomainIs(host, "googlesyndication.com") ||
  dnsDomainIs(host, "googleadservices.com") ||
  dnsDomainIs(host, "doubleclick.net") ||
  dnsDomainIs(host, "google-analytics.com") ||
  dnsDomainIs(host, "gvt1.com") ||
  dnsDomainIs(host, "googlesource.com") ||
  dnsDomainIs(host, "accounts.youtube.com") ||
  dnsDomainIs(host, "consent.youtube.com") ||
  dnsDomainIs(host, "goo.gl") ||
  dnsDomainIs(host, "android.com") ||
  dnsDomainIs(host, "golang.org") ||
// pinterest
  shExpMatch(url, "*://*.pinterest.*/*") ||
// shopping
  dnsDomainIs(host, "nordstrom.com") ||
  dnsDomainIs(host, "nordstrommedia.com") ||
// acg
  dnsDomainIs(host, "nicovideo.jp") ||
// coding
  dnsDomainIs(host, "github.com") 
 ) return "PROXY 127.0.0.1:2333";
// goproxy-php
if (
// surprise
  dnsDomainIs(host, "youtube.com") ||
  dnsDomainIs(host, "ytimg.com") ||
  dnsDomainIs(host, "googlevideo.com") ||
  dnsDomainIs(host, "youtu.be") ||
  dnsDomainIs(host, "twimg.com") ||
  dnsDomainIs(host, "t.co") ||
  dnsDomainIs(host, "fbcdn.net") ||
  dnsDomainIs(host, "facebook.net") ||
  dnsDomainIs(host, "instagram.com") ||
  dnsDomainIs(host, "wikipedia.org") ||
  dnsDomainIs(host, "wikimedia.org") ||
  dnsDomainIs(host, "medium.com") ||
  dnsDomainIs(host, "vimeo.com") ||
  dnsDomainIs(host, "vimeocdn.com") ||
  dnsDomainIs(host, "dropbox.com") ||
  dnsDomainIs(host, "dropboxstatic.com") ||
  dnsDomainIs(host, "onedrive.live.com") ||
  dnsDomainIs(host, "mediafire.com") ||
  dnsDomainIs(host, "getuploader.com") ||
  dnsDomainIs(host, "issuu.com") ||
  dnsDomainIs(host, "isu.pub") ||
  dnsDomainIs(host, "findyoutube.net") ||
// pinterest
  dnsDomainIs(host, "pinimg.com") ||
// Instagram
  dnsDomainIs(host, "instagram.com") ||
  dnsDomainIs(host, "cdninstagram.com") ||
  shExpMatch(url, "https://instagram.*.fbcdn.net/*") ||
// acg
  dnsDomainIs(host, "smilevideo.jp") ||
  dnsDomainIs(host, "nimg.jp") ||
  dnsDomainIs(host, "dmhy.org") ||
  dnsDomainIs(host, "pixiv.net") ||
  dnsDomainIs(host, "saucenao.com") ||
// coding
  dnsDomainIs(host, "githubusercontent.com") ||
  dnsDomainIs(host, "githubapp.com") ||
  dnsDomainIs(host, "github.io") ||
  dnsDomainIs(host, "sourceforge.net") ||
  dnsDomainIs(host, "fsdn.com") ||
  dnsDomainIs(host, "w3schools.com") ||
  dnsDomainIs(host, "python.org") ||
  dnsDomainIs(host, "gitbook.com") ||
  dnsDomainIs(host, "gitbooks.io") ||
// education
  dnsDomainIs(host, "coursera.org") ||
  dnsDomainIs(host, "archive.org") ||
  dnsDomainIs(host, "wuancake.org") ||
// art
  dnsDomainIs(host, "deviantart.com") ||
  dnsDomainIs(host, "deviantart.net") ||
  dnsDomainIs(host, "behance.net") ||
  dnsDomainIs(host, "shutterstock.com") ||
  dnsDomainIs(host, "sketchappsources.com") ||
  dnsDomainIs(host, "flickr.com") ||
  dnsDomainIs(host, "s.yimg.com") ||
  dnsDomainIs(host, "proko.com") ||
// music
  dnsDomainIs(host, "soundcloud.com") ||
  dnsDomainIs(host, "sndcdn.com") ||
// game
  dnsDomainIs(host, "bahamut.com.tw") ||
  dnsDomainIs(host, "gamer.com.tw") ||
  dnsDomainIs(host, "miniclip.com") ||
  dnsDomainIs(host, "miniclipcdn.com") ||
  dnsDomainIs(host, "twitchcdn.net") ||
  dnsDomainIs(host, "twitchsvc.net") ||
  dnsDomainIs(host, "jtvnw.net") ||
  dnsDomainIs(host, "ttvnw.net") ||
  dnsDomainIs(host, "garena.live") ||
  dnsDomainIs(host, "garena.tv") ||
// entertainment
  dnsDomainIs(host, "line.me") ||
  dnsDomainIs(host, "line-apps.com") ||
  dnsDomainIs(host, "line-scdn.net") ||
  dnsDomainIs(host, "mgoon.com") ||
  dnsDomainIs(host, "btbtt.co") ||
// telegram
  dnsDomainIs(host, "t.me") ||
  dnsDomainIs(host, "telegram.org") ||
  dnsDomainIs(host, "telesco.pe") ||
// config
  dnsDomainIs(host, "adblockplus.org") ||
  dnsDomainIs(host, "greasyfork.org") ||
// cdn
  dnsDomainIs(host, "akamaihd.net") ||
  dnsDomainIs(host, "amazonaws.com") ||
  dnsDomainIs(host, "cloudfront.net") ||
// debug
  dnsDomainIs(host, "ip.cn") 
) return "PROXY 127.0.0.1:233";
return "DIRECT";
}