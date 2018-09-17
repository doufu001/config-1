// update: 2018.9.17
// 鉴于《刑法》、《网络安全法》等法律的有关条款，规则中加入了黑名单，请谅解
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// blacklist
if (
// surprise
  shExpMatch(url, "https://www.youtube.com/upload") ||
  shExpMatch(url, "https://twitter.com/i/tweet/create") ||
  shExpMatch(url, "https://login.wikimedia.org/*") ||
  shExpMatch(url, "https://www.facebook.com/ajax/updatestatus.php*") ||
  shExpMatch(url, "https://www.facebook.com/ufi/add/comment*") ||
// google plus
  shExpMatch(url, "https://plus.google.com/*") 
) return "DIRECT";
// v2ray-2
if (
// surprise
  dnsDomainIs(host, "twitter.com") ||
  dnsDomainIs(host, "facebook.com") ||
// google
  shExpMatch(url, "*://*.google.*/*") ||
  dnsDomainIs(host, "gstatic.com") ||
  dnsDomainIs(host, "googleapis.com") ||
  dnsDomainIs(host, "googleusercontent.com") ||
  dnsDomainIs(host, "ggpht.com") ||
  dnsDomainIs(host, "gmail.com") ||
  dnsDomainIs(host, "googlesource.com") ||
  dnsDomainIs(host, "gvt1.com") ||
  dnsDomainIs(host, "goo.gl") ||
  dnsDomainIs(host, "googletagmanager.com") ||
  dnsDomainIs(host, "googletagservices") ||
  dnsDomainIs(host, "googlesyndication.com") ||
  dnsDomainIs(host, "googleadservices.com") ||
  dnsDomainIs(host, "doubleclick.net") ||
  dnsDomainIs(host, "google-analytics.com") ||
  dnsDomainIs(host, "accounts.youtube.com") ||
  dnsDomainIs(host, "img.youtube.com") ||
// art
  shExpMatch(url, "*://*.pinterest.*/*") ||
// acg
  dnsDomainIs(host, "nicovideo.jp") ||
// education
  shExpMatch(url, "*://sci-hub.*/*") ||
// coding
  dnsDomainIs(host, "github.com") 
 ) return "PROXY 127.0.0.1:2333";
// v2ray-3
if (
// dmm
  dnsDomainIs(host, "dmm.com") ||
  dnsDomainIs(host, "dmmgames.com") ||
  dnsDomainIs(host, "gsspat.jp") ||
  dnsDomainIs(host, "cxpublic.com") ||
  dnsDomainIs(host, "cxense.com") ||
  dnsDomainIs(host, "a-i-ad.com") ||
  dnsDomainIs(host, "ravenjs.com") ||
  shExpMatch(url, "http://pics.dmm.co.jp/digital/*48/*") ||
  shExpMatch(url, "http://203.104.209.*/*") ||
  dnsDomainIs(host, "dovs9u514acja.cloudfront.net") ||
  dnsDomainIs(host, "itchibanketsu.jp") ||
  dnsDomainIs(host, "touken-ranbu.jp") ||
  dnsDomainIs(host, "shiropro-re.net") ||
  dnsDomainIs(host, "millennium-war.net") ||
// shopping
  dnsDomainIs(host, "nordstrom.com") ||
  dnsDomainIs(host, "nordstrommedia.com") ||
  dnsDomainIs(host, "nordstromdata.com")
 ) return "PROXY 127.0.0.1:666";
// v2ray-1
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
  dnsDomainIs(host, "economist.com") ||
  dnsDomainIs(host, "bloomberg.com") ||
  dnsDomainIs(host, "reuters.com") ||
  dnsDomainIs(host, "issuu.com") ||
// art
  dnsDomainIs(host, "pinimg.com") ||
  dnsDomainIs(host, "instagram.com") ||
  shExpMatch(url, "*://instagram.*.fbcdn.net/*") ||
  dnsDomainIs(host, "deviantart.com") ||
  dnsDomainIs(host, "deviantart.net") ||
  dnsDomainIs(host, "behance.net") ||
  dnsDomainIs(host, "shutterstock.com") ||
  dnsDomainIs(host, "sketchappsources.com") ||
  dnsDomainIs(host, "flickr.com") ||
  dnsDomainIs(host, "s.yimg.com") ||
  dnsDomainIs(host, "proko.com") ||
  dnsDomainIs(host, "tineye.com") ||
// acg
  dnsDomainIs(host, "smilevideo.jp") ||
  dnsDomainIs(host, "nimg.jp") ||
  dnsDomainIs(host, "pixiv.net") ||
  dnsDomainIs(host, "dmhy.org") ||
  dnsDomainIs(host, "wikiwiki.jp") ||
  dnsDomainIs(host, "saucenao.com") ||
  dnsDomainIs(host, "kadokawa.co.jp") ||
  dnsDomainIs(host, "granbluefantasy.jp") ||
  dnsDomainIs(host, "ja.wikipedia.org") ||
// coding
  dnsDomainIs(host, "githubusercontent.com") ||
  dnsDomainIs(host, "githubapp.com") ||
  dnsDomainIs(host, "github.io") ||
  dnsDomainIs(host, "sourceforge.net") ||
  dnsDomainIs(host, "fsdn.com") ||
  dnsDomainIs(host, "w3schools.com") ||
  dnsDomainIs(host, "android.com") ||
  dnsDomainIs(host, "golang.org") ||
  dnsDomainIs(host, "python.org") ||
  dnsDomainIs(host, "gitbook.com") ||
  dnsDomainIs(host, "gitbooks.io") ||
  dnsDomainIs(host, "tensorflow.org") ||
  dnsDomainIs(host, "mozilla.org") ||
// education
  dnsDomainIs(host, "coursera.org") ||
  dnsDomainIs(host, "archive.org") ||
  dnsDomainIs(host, "wuancake.org") ||
  dnsDomainIs(host, "jmlc.org") ||
  dnsDomainIs(host, "rus.ec") ||
  dnsDomainIs(host, "nih.gov") ||
  dnsDomainIs(host, "pubmed.gov") ||
  dnsDomainIs(host, "quora.com") ||
// music
  dnsDomainIs(host, "soundcloud.com") ||
  dnsDomainIs(host, "sndcdn.com") ||
// game
  dnsDomainIs(host, "twitch.tv") ||
  dnsDomainIs(host, "twitchcdn.net") ||
  dnsDomainIs(host, "twitchsvc.net") ||
  dnsDomainIs(host, "jtvnw.net") ||
  dnsDomainIs(host, "ttvnw.net") ||
  dnsDomainIs(host, "bahamut.com.tw") ||
  dnsDomainIs(host, "gamer.com.tw") ||
  dnsDomainIs(host, "miniclip.com") ||
  dnsDomainIs(host, "miniclipcdn.com") ||
  dnsDomainIs(host, "garena.live") ||
  dnsDomainIs(host, "garena.tv") ||
  dnsDomainIs(host, "humblebundle.com") ||
  dnsDomainIs(host, "steamcommunity.com") ||
  dnsDomainIs(host, "minecraft.com") ||
// entertainment
  dnsDomainIs(host, "line.me") ||
  dnsDomainIs(host, "line-apps.com") ||
  dnsDomainIs(host, "line-scdn.net") ||
  dnsDomainIs(host, "mgoon.com") ||
  dnsDomainIs(host, "wecandeo.com") ||
  dnsDomainIs(host, "btbtt.co") ||
// shopping
  dnsDomainIs(host, "amazon.co.jp") ||
// config
  dnsDomainIs(host, "adblockplus.org") ||
  dnsDomainIs(host, "greasyfork.org") ||
// cdn
  dnsDomainIs(host, "akamaihd.net") ||
  dnsDomainIs(host, "amazonaws.com") ||
  dnsDomainIs(host, "cloudfront.net") ||
  dnsDomainIs(host, "cloudflare.com") ||
// debug
  dnsDomainIs(host, "ip.cn") 
) return "PROXY 127.0.0.1:233";
return "DIRECT";
}