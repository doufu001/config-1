// update: 2019.6.20
// 鉴于《刑法》、《网络安全法》等法律的有关条款，规则中加入了黑名单，请谅解
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// v2ray
if (
// scholar
  shExpMatch(url, "*://scholar.google.*/*") ||
  shExpMatch(url, "*://sci-hub.*/*") ||
// art
  shExpMatch(url, "*://*.pinterest.*/*") ||
  dnsDomainIs(host, "pinimg.com") ||
  dnsDomainIs(host, "deviantart.com") ||
  dnsDomainIs(host, "deviantart.net") ||
  dnsDomainIs(host, "behance.net") ||
  dnsDomainIs(host, "artstation.com") ||
// debug
  dnsDomainIs(host, "ip111.cn") 
) return "SOCKS5 127.0.0.1:233";
return "DIRECT";
}
