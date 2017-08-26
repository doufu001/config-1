// ==UserScript==
// @name        Onens.Clean.Player
// @namespace   http://onens.com/
// @description Thanks to OpenGG, Harv.c, KaFan15536900
// @version     2.4.1
// @include     http://*/*
// @include     https://*/*
// @grant       GM_xmlhttpRequest
// @run-at      document-end
// ==/UserScript==

Function.prototype.bind = function() {
	var fn = this,
		arg = Array.prototype.slice.call(arguments),
		obj = arg.shift();
	return function() {
		return fn.apply(obj, arg.concat(Array.prototype.slice.call(arguments)));
	};
};

String.prototype.sprintf = function() {
	var str = this.toString(),
		arg = Array.prototype.slice.call(arguments);
	if (arg.length)
		for (var i in arg)
			str = str.replace('%s', arg[i]);

	return str;
};

var OCPlayer = {
	done: [],
	host: 'https://coding.net/u/HalfLife/p/swf/git/raw/gh-pages/',
	rule: [{ // youku_loader
		find: /https?:\/\/static\.youku\.com(\/v[\d\.]*)?\/v\/swf\/(.*\/)?loaders?\.swf/i,
		replace: 'loader.swf'
	}, { // youku_player
		find: /https?:\/\/static\.youku\.com(\/v[\d\.]*)?\/v\/swf\/(.*\/)?q?player.*\.swf/i,
		replace: 'player.swf'
	}, { // ku6
		find: /https?:\/\/player\.ku6cdn\.com\/default\/.*\/(v|player)\.swf/i,
		replace: 'ku6.swf'
	}, { // ku6_out
		find: /https?:\/\/player\.ku6cdn\.com\/default\/out\/\d{12}\/player\.swf/i,
		replace: 'ku6_out.swf'
	}, { // iqiyi
		find: /https?:\/\/www\.iqiyi\.com\/(player\/\d+\/Player|common\/flashplayer\/\d+\/((Main)?Player_.*|[\d]{4}[a-z]+((?!aa).){6,7}))\.swf/i,
		replace: 'iqiyi5.swf'
	}, { // iqiy_out
		find: /https?:\/\/www\.iqiyi\.com\/common\/flashplayer\/\d+\/SharePlayer_.*\.swf/i,
		replace: 'iqiyi_out.swf'
	}, { // letvsdk
		find: /https?:\/\/player\.letvcdn\.com\/.*\/newplayer\/LetvPlayerSDK\.swf/i,
		replace: 'letvsdk.swf'
	}, { // pptv
		find: /https?:\/\/player\.pplive\.cn\/ikan\/.*\/player4player2\.swf/i,
		replace: 'pptv.swf'
	}, { // pptv_live
		find: /https?:\/\/player\.pplive\.cn\/live\/.*\/player4live2\.swf/i,
		replace: 'pptv.in.Live.swf'
	}, { // sohu_live
		find: /https?:\/\/(tv\.sohu\.com\/upload\/swf\/(p2p\/)?\d+|(\d+\.){3}\d+\/wp8player)\/Main\.swf/i,
		replace: 'sohu_live.swf'
	}, { // pps
		find: /https?:\/\/www\.iqiyi\.com\/common\/.*\/pps[\w]+.swf/i,
		replace: 'iqiyi.swf'
	}],

	
	init_css: 'object,embed{-webkit-animation-duration:.001s;-webkit-animation-name:playerInserted;-ms-animation-duration:.001s;-ms-animation-name:playerInserted;-o-animation-duration:.001s;-o-animation-name:playerInserted;animation-duration:.001s;animation-name:playerInserted;}@-webkit-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}@-ms-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}@-o-keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}@keyframes playerInserted{from{opacity:0.99;}to{opacity:1;}}',

	tips_css: '.ocplayer_tips{font:12px Arial, Verdana;padding:0 8px;cursor:default;border:1px solid #d5d5d5;line-height:25px;opacity:.2;background:#f5f5f5;position:fixed;right:0;bottom:-1px;z-index:999999}.ocplayer_tips:hover{opacity:.8}',

	tips_html: '<span style="color:green">Onens.Clean.Player \u5DF2\u542F\u7528</span> &nbsp; <a href="javascript:;" class="tips_close" style="color:gray" title="\u9690\u85CF\u63D0\u793A">\u9690\u85CF</a>',

	Handler: function(e) {
		if (e.animationName != 'playerInserted')
			return;

		var el = e.target;
		if (this.done.indexOf(el) != -1)
			return;

		this.done.push(el);

		var player = el.data || el.src;
		if (!player)
			return;

		for (var i in this.rule) {
			var find = this.rule[i]['find'];
			if (find.test(player)) {
				var replace = this.rule[i]['replace'];
				if (typeof replace == 'function')
					this.flag ? replace.bind(this, el, find)() : this.list.push(replace.bind(this, el, find));
				else
					this.flag || this.Reload.bind(this, el, find, replace)();

				break;
			}
		}
	},

	Reload: function(el, find, replace) {
		// replace = /^https?:\/\//i.test(replace) ? replace : (this.flag ? chrome.extension.getURL('player/' + replace) : this.host + replace);
		replace = /^https?:\/\//i.test(replace) ? replace : this.host + replace;
		el.data && (el.data = el.data.replace(find, replace)) || el.src && ((el.src = el.src.replace(find, replace)) && (el.style.display = 'block'));
		var next = el.nextSibling,
			node = el.parentNode,
			elem = el.cloneNode(true);
		this.done.push(elem);
		if (node) {
			node.removeChild(el);
			next ? node.insertBefore(elem, next) : node.appendChild(elem);
		}
		this.flag || this.Tips();
	},

	Script: function() {
		this.rule = this.rule.concat(this.extra);

		var events = ['webkitAnimationStart', 'msAnimationStart', 'oAnimationStart', 'animationstart'];
		for (var i in events)
			document.addEventListener(events[i], this.Handler.bind(this), false);
	},

	Style: function(css) {
		var style = document.createElement('style');
		style.setAttribute('type', 'text/css');
		style.innerHTML = css || this.init_css;
		document.getElementsByTagName('head')[0].appendChild(style);
	},

	Timer: function() {
		this.list = [];
		setInterval(function() {
			this.list.length && this.list.shift()();
		}.bind(this), 100);
	},

	Tips: function() {
		if (this.done.indexOf('tips') != -1)
			return;

		this.done.push('tips');

		this.Style(this.tips_css);

		var div = document.createElement('div');
		div.className = 'ocplayer_tips';
		div.innerHTML = this.tips_html;
		div.querySelector('.tips_close').addEventListener('click', function(e) {
			e.stopPropagation && e.stopPropagation();
			e.preventDefault && e.preventDefault();
			div.parentNode.removeChild(div);
		}, false);
		(document.documentElement || document.body).appendChild(div);
	},

	Chrome: function() {
		chrome.windows.onFocusChanged.addListener(function(winId) {
			this.Icon();
		}.bind(this));

		chrome.tabs.onSelectionChanged.addListener(function(tabId) {
			this.Icon();
		}.bind(this));

		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
			changeInfo.status == 'complete' && this.Icon();
		}.bind(this));

		chrome.webRequest.onBeforeRequest.addListener(function(details) {
			if (details.tabId == -1)
				return;

			var url = details.url;

			for (var i in this.rule) {
				var find = this.rule[i]['find'];
				if (find.test(url)) {
					chrome.tabs.get(details.tabId, function(tab) {
						var key = this.Tab(tab);
						key && this.done.push(key);
						this.Icon();
					}.bind(this));

					var replace = this.rule[i]['replace'];
					if (typeof replace == 'string') {
						// replace = /^https?:\/\//i.test(replace) ? replace : chrome.extension.getURL('player/' + replace);
						replace = /^https?:\/\//i.test(replace) ? replace : this.host + replace;
					} else {
						break;
					}

					return {
						redirectUrl: url.replace(find, replace)
					};
				}
			}

			return {
				cancel: false
			};
		}.bind(this), {
			urls: ['<all_urls>']
		}, ['blocking']);
	},

	Youku: function() {
		chrome.webRequest.onCompleted.addListener(function(details) {
			chrome.cookies.set({
				url: details.url,
				name: 'view',
				value: '0',
				path: '/',
				domain: '.youku.com'
			});
		}, {
			urls: ['http://*.youku.com/*'],
			types: ['main_frame']
		});
	},

	Icon: function() {
		chrome.tabs.getSelected(null, function(tab) {
			var key = this.Tab(tab);
			if (!key)
				return;

			var path, title;
			if (this.done.indexOf(key) != -1) {
				path = 'images/icon-22.png';
				title = 'Onens.Clean.Player \u5DF2\u542F\u7528';
			} else {
				path = 'images/icon-22-gray.png';
				title = 'Onens.Clean.Player \u672A\u542F\u7528';
			}

			chrome.browserAction.setIcon({
				path: path
			});

			chrome.browserAction.setTitle({
				title: title
			});
		}.bind(this));
	},

	Tab: function(tab) {
		return typeof tab == 'object' ? tab.windowId + '|' + tab.id + '|' + tab.url : false;
	},

	Init: function() {
		this.flag = typeof GM_xmlhttpRequest == 'undefined';
		if (this.flag) {
			if (!/^https?:\/\//i.test(window.location.href)) {
				this.Youku();
				this.Chrome();
			} else {
				this.Script();
			}
		} else {
			this.Timer();
			this.Style();
			this.Script();
		}
	}
};

OCPlayer.Init();