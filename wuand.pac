// 鉴于刑法修正案（九）关于第二百八十七条的描述，规则中加入了黑名单，请谅解
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// video
if (
  regExpMatch(url, "http:\/\/v\.youku\.com\/crossdomain\.xml") ||
  regExpMatch(url, "^.*?://.*?(tudou|qiyi|iqiyi|le|letv|letvcdn|sohu|ku6|ku6cdn|pps).(com|tv)/crossdomain.xml$")
 ) return "PROXY yk.pp.navi.youku.com:80";
// blacklist
if (
  shExpMatch(url, "https://plus.google.com/*") ||
  shExpMatch(url, "https://www.youtube.com/upload") ||
  shExpMatch(url, "https://twitter.com/i/tweet/create") ||
  shExpMatch(url, "https://www.facebook.com/ajax/updatestatus.php*") ||
  shExpMatch(url, "https://www.facebook.com/ufi/add/comment*") 
) return "DIRECT";
// goproxy php
if (
  dnsDomainIs(host, "www.dmm.com") ||
  dnsDomainIs(host, "osapi.dmm.com") ||
  dnsDomainIs(host, "dmmgames.com") ||
  dnsDomainIs(host, "w010.touken-ranbu.jp") ||
  dnsDomainIs(host, "itchibanketsu.jp") ||
  dnsDomainIs(host, "wikiwiki.jp")
) return "PROXY 127.0.0.1:8088";
// goproxy
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
  dnsDomainIs(host, "googlesource.com") ||
// youtube
  dnsDomainIs(host, "youtube.com") ||
  dnsDomainIs(host, "ytimg.com") ||
  dnsDomainIs(host, "googlevideo.com") ||
  dnsDomainIs(host, "youtu.be") ||
// twitter
  dnsDomainIs(host, "twitter.com") ||
  dnsDomainIs(host, "twimg.com") ||
  dnsDomainIs(host, "t.co") ||
// facebook
  dnsDomainIs(host, "facebook.com") ||
  dnsDomainIs(host, "fbcdn.net") ||
  dnsDomainIs(host, "facebook.net") ||
  dnsDomainIs(host, "instagram.com") ||
// cdn
  dnsDomainIs(host, "amazonaws.com") ||
  dnsDomainIs(host, "akamaihd.net") ||
// github
  dnsDomainIs(host, "github.com") ||
  dnsDomainIs(host, "githubusercontent.com") ||
  dnsDomainIs(host, "githubapp.com") ||
  dnsDomainIs(host, "github.io") ||
// wikipedia
  dnsDomainIs(host, "wikipedia.org") ||
  dnsDomainIs(host, "wikimedia.org") ||
// yahoo
  dnsDomainIs(host, "flickr.com") ||
  dnsDomainIs(host, "yahoo.com") ||
  shExpMatch(url, "*://*.yimg.com/*") ||
  dnsDomainIs(host, "staticflickr.com") ||
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
  dnsDomainIs(host, "dmmgames.com") ||
// niconico
  dnsDomainIs(host, "nicovideo.jp") ||
  dnsDomainIs(host, "smilevideo.jp") ||
  dnsDomainIs(host, "nimg.jp") ||
// twitch
  dnsDomainIs(host, "twitch.tv") ||
  dnsDomainIs(host, "jtvnw.net") ||
  dnsDomainIs(host, "ttvnw.net") ||
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
  dnsDomainIs(host, "sta.sh") ||
// game
  dnsDomainIs(host, "ujj.co.jp") ||
  dnsDomainIs(host, "garena.tw") ||
  dnsDomainIs(host, "gbf.game.mbga.jp") ||
  dnsDomainIs(host, "gbf.game-a.mbga.jp") ||
  dnsDomainIs(host, "gbf.game-a1.mbga.jp") ||
  dnsDomainIs(host, "gbf.game-a2.mbga.jp") ||
  dnsDomainIs(host, "gbf.game-a3.mbga.jp") ||
  dnsDomainIs(host, "cdn-connet.mobage.jp") ||
  dnsDomainIs(host, "connet.mobage.jp") ||
  dnsDomainIs(host, "granbluefantasy.jp") ||
// others
  dnsDomainIs(host, "adblockplus.org") ||
  dnsDomainIs(host, "recaptcha.net") ||
  dnsDomainIs(host, "vimeo.com") ||
  dnsDomainIs(host, "vimeocdn.com") ||
  dnsDomainIs(host, "miniclip.com") ||
  dnsDomainIs(host, "miniclipcdn.com") ||
  dnsDomainIs(host, "weblio.jp") ||
  dnsDomainIs(host, "dictionary.goo.ne.jp") ||
  dnsDomainIs(host, "archive.fo") ||
  dnsDomainIs(host, "jiumodiary.com") ||
  dnsDomainIs(host, "tensorflow.org") ||
  dnsDomainIs(host, "economist.com") ||
  dnsDomainIs(host, "edu.tw") ||
  dnsDomainIs(host, "topcoder.com") ||
  dnsDomainIs(host, "bloomberg.com") ||
  dnsDomainIs(host, "bandwagonhost.com") ||  
  dnsDomainIs(host, "archive.org") ||
  dnsDomainIs(host, "cloudfront.net") ||
  dnsDomainIs(host, "kastatic.org") ||
  dnsDomainIs(host, "ratebeer.com") ||
  dnsDomainIs(host, "chromium.org") ||
  dnsDomainIs(host, "coursera.org") ||
  dnsDomainIs(host, "gitbook.com") ||
  dnsDomainIs(host, "slideshare.net") ||
// shopping
  dnsDomainIs(host, "nordstrom.com") ||
  dnsDomainIs(host, "nordstromimage.com") ||
  dnsDomainIs(host, "nordstrommedia.com") ||
  dnsDomainIs(host, "toranoana.jp") ||
  dnsDomainIs(host, "suruga-ya.jp") ||
  dnsDomainIs(host, "steinmart.com") ||
// netdisk
  dnsDomainIs(host, "mediafire.com") ||
  dnsDomainIs(host, "getuploader.com") ||
  dnsDomainIs(host, "onedrive.live.com") ||
// blogs
  shExpMatch(url, "*://lineblog.me/ri_ri_ri_10/*") ||
  shExpMatch(url, "*://line.blogimg.jp/ri_ri_ri_10/*") ||
  dnsDomainIs(host, "parts.blog.livedoor.jp") ||
  dnsDomainIs(host, "dicomiseasy.blogspot.com") ||
  dnsDomainIs(host, "dicomiseasy.blogspot.co.il") ||
  dnsDomainIs(host, "xxchoroxx.blog.fc2.com") ||
  dnsDomainIs(host, "hqmeded-ecg.blogspot.com") ||
  dnsDomainIs(host, "afewguyscoding.com") ||
// sources fix
  dnsDomainIs(host, "r.r10s.jp") ||
// test
  dnsDomainIs(host, "ip.cn")
) return "PROXY 127.0.0.1:8087";
return "DIRECT";
}
