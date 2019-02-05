// update: 2019.2.3
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// whitelist
if (
// chinalist
  dnsDomainIs(host, "baidu.com") ||
  dnsDomainIs(host, "alipay.com") ||
  dnsDomainIs(host, "taobao.com") ||
  dnsDomainIs(host, "tmall.com") ||
  dnsDomainIs(host, "qq.com") ||
  dnsDomainIs(host, "jd.com") ||
  dnsDomainIs(host, "iqiyi.com") ||
  dnsDomainIs(host, "youku.com") ||
  dnsDomainIs(host, "weibo.com") ||
  dnsDomainIs(host, "bilibili.com") ||
  shExpMatch(url, "*://*.cn/*") 
) return "DIRECT";
return "PROXY 127.0.0.1:2333";
}