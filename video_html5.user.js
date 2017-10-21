// ==UserScript==
// @name             视频站启用html5播放器
// @description      拥抱html5，告别Flash。支持站点：优.土、QQ、新浪、微博、网易短视频[娱乐、云课堂、新闻]、搜狐、乐视、央视、风行、百度云视频、熊猫、龙珠、战旗直播等。并添加播放快捷键：快进、快退、暂停/播放、音量调节、下一个视频、全屏、上下帧、播放速度调节
// @version          0.6.3
// @homepage         http://bbs.kafan.cn/thread-2093014-1-1.html
// @include          *://pan.baidu.com/*
// @include          https://v.qq.com/*
// @include          *://film.qq.com/*
// @include          *://view.inews.qq.com/*
// @include          *://news.qq.com/*
// @include          http://v.youku.com/v_show/id_*
// @include          https://v.youku.com/v_show/id_*
// @include          *://v.163.com/*.html*
// include          *://live.163.com/*.html*
// include          *://c.m.163.com/*.html
// @include          *://ent.163.com/*.html*
// @include          *://news.163.com/*.html*
// @include          *://news.163.com/special/*
// @include          *://study.163.com/course/*.htm?courseId=*
// include          http://*.cctv.com/*
// @exclude          http://tv.cctv.com/live/*
// include          http://*.cntv.cn/*
// @include          *://news.sina.com.cn/*
// @include          *://video.sina.com.cn/*
// @include          *://video.sina.cn/*
// @include          *://weibo.com/*
// @include          *://www.weibo.com/*
// @include          http://*.le.com/*.html*
// @include          *://*.lesports.com/*.html*
// @include          *://www.fun.tv/vplay/*
// @include          *://m.fun.tv/*
// @include          https://www.panda.tv/*
// @exclude          https://www.panda.tv/
// @include          https://*.zhanqi.tv/*
// @include          *://*.longzhu.com/*
// @include          *://*.bilibili.com/*
// @grant            unsafeWindow
// @require          https://cdn.jsdelivr.net/hls.js/latest/hls.min.js
// @run-at           document-start
// @namespace  https://greasyfork.org/users/7036
// ==/UserScript==
'use strict';

if (window.chrome)
	NodeList.prototype[Symbol.iterator] = HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

let v, vList, totalTime, isLive = !1,
	oldCanplay = null,
	playerInfo = {},
	path = location.pathname,
requestFullScreen = () => {
	const fn = v.requestFullscreen || v.webkitRequestFullScreen || v.mozRequestFullScreen || v.msRequestFullScreen;
	requestFullScreen = fn ? () => fn.call(v): () => {};
	requestFullScreen();
},
exitFullScreen = () => {
	const d = document,
	fn = d.exitFullscreen || d.webkitExitFullscreen || d.mozCancelFullScreen || d.msExitFullscreen;
	exitFullScreen = fn ? () => fn.call(d): () => {};
	exitFullScreen();
};

const u = location.hostname,
mDomain = u.includes('.sina.') ? 'sina' : u.split('.').reverse()[1],//主域名
ua_samsung = 'Mozilla/5.0 (Linux; U; Android 4.0.4; GT-I9300 Build/IMM76D) AppleWebKit/534.30 Version/4.0 Mobile Safari/534.30',
ua_ipad2 = 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3',
q = css => document.querySelector(css),
//$cls = name => document.getElementsByClassName(name)[0],
r1 = (regp, s) => regp.test(s) && RegExp.$1,
fakeUA = ua => Object.defineProperty(navigator, 'userAgent', {
	value: ua,
	writable: false,
	configurable: false,
	enumerable: true
}),
isFullScreen = () => {
	const d = document;
	return !!(d.fullscreen || d.webkitIsFullScreen || d.mozFullScreen ||
    d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement);
},
getAllDuration = css => {
	const a = q(css).innerHTML.split(':');
	//console.log(q(css), a);
	let n = a.pop() | 0, multiplier = 1;
	for (let k of a.reverse()) {
		multiplier *= 60;
		n += k * multiplier;
	}
	return n || 2e4;
},
doClick = css => {
	if (!css) return !1;
	const x = q(css);
	x && x.click();
	//x && x.dispatchEvent(new MouseEvent('click'));
	return !!x;
},
removeAllElem = css => {
	for (let e of document.querySelectorAll(css)) e.remove();
},
getVideo = () => {
	vList = vList || document.getElementsByTagName('video');
	for (let e of vList)
		if (e.offsetWidth>1) return (v = e);
},
onCanplay = function(e) {
	v.oncanplay = null;
	console.log('脚本[启用html5播放器]，事件oncanplay');
	if (playerInfo.onMetadata) {
		playerInfo.onMetadata();
		delete playerInfo.onMetadata;
	}
	oldCanplay && oldCanplay(e);
	totalTime = totalTime || Math.round(v.duration);
	if (!isLive && totalTime > 666 && 'qq' !== mDomain) setTimeout(() => {
		v.currentTime = 66;//跳过片头
	}, 9);
},
hotKey = function(e) {
	//判断ctrl,alt,shift三键状态，防止浏览器快捷键被占用
	if (e.ctrlKey || e.altKey || /INPUT|TEXTAREA/.test(e.target.nodeName))
		return;
	if (e.shiftKey && ![13,37,39].includes(e.keyCode))
		return;
	if (isLive && [37,39,78,88,67,90].includes(e.keyCode))
		return;
	vList && getVideo();
	if (!v || v.offsetWidth === 0) v = q('video');
	let n;
	switch (e.keyCode) {
	case 32: //space
		if (playerInfo.disableSpace) return;
		v.paused ? v.play() : v.pause();
		e.preventDefault();
		e.stopPropagation();
		break;
	case 37: //left
		n = e.shiftKey ? 27 : 5; //快退5秒,shift加速
		v.currentTime -= n;
		break;
	case 39: //right
		n = e.shiftKey ? 27 : 5; //快进5秒,shift加速
		v.currentTime += n;
		break;
	case 78: // N 下一首
		doClick(playerInfo.nextCSS);
		break;
	//case 80: // P 上一首
	case 38: //加音量
		n = v.volume + 0.1;
		if (n > 1) return;
		v.volume = n.toFixed(2);
		e.preventDefault();
		break;
	case 40: //降音量
		n = v.volume - 0.1;
		if (n < 0) return;
		v.volume = n.toFixed(2);
		e.preventDefault();
		break;
	case 13: //全屏
		if (e.shiftKey)
			doClick(playerInfo.webfullCSS);
		else if (!isFullScreen())
			doClick(playerInfo.fullCSS) || requestFullScreen();
		break;
	case 88: //按键X：减速播放 -0.1
		n = v.playbackRate;
		if (n > 0.1) {
			n -= 0.1;
			v.playbackRate = n.toFixed(1);
		}
		break;
	case 67: //按键C：加速播放 +0.1
		n = v.playbackRate;
		if (n < 16) {
			n += 0.1;
			v.playbackRate = n.toFixed(1);
		}
		break;
	case 90: //按键Z：正常速度播放
		v.playbackRate = 1;
		break;
	case 70: //按键F：下一帧
		n = .03;
	case 68: //按键D：上一帧
		n = n || -0.03;
		if (!v.paused) v.pause();
		v.currentTime += n;
	}
},
doHls = () => {
	if (!v || !v.src.includes('.m3u8') || !Hls.isSupported())
		return;
/* 	const config = {
		debug: true,
		xhrSetup: function (xhr, url) {
			xhr.withCredentials = true; // do send cookie
			xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With");
			xhr.setRequestHeader("Access-Control-Allow-Origin", u);
			xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
		}
	}; */
	const hls = new Hls();
	hls.loadSource(v.src);
	hls.attachMedia(v);
	hls.on(Hls.Events.MANIFEST_PARSED, () => v.play());
},
init = cb => {
	new MutationObserver(function(records) {
		v = q('video');
		if (v) {
			oldCanplay = v.oncanplay;
			v.oncanplay = onCanplay;
			this.disconnect();
			document.addEventListener('keydown', hotKey, !1);
			if (playerInfo.timeCSS)
				totalTime = getAllDuration(playerInfo.timeCSS);
			console.log(v);
			cb && cb();
		}
	}).observe(document.documentElement, {
		childList : true,
		subtree : true
	});
};

if (mDomain !== 'zhanqi') Object.defineProperty(navigator, 'plugins', {
	get: function() {
		return { length: 0 };
	}
});

switch (mDomain) {
case 'qq':
	playerInfo = {
		disableSpace: true,
		nextCSS: 'txpdiv.txp_btn_next',
		webfullCSS: 'txpdiv.txp_btn_fake[data-status="false"]',
		fullCSS: 'txpdiv.txp_btn_fullscreen',
		onMetadata: getVideo
	};
	fakeUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:48.0) Gecko/20100101 Firefox/48.0');
	break;
case 'youku':
	sessionStorage.P_l_h5 = 1;
	playerInfo = {
		disableSpace: true,//切换至播放时异常，官方已拦截空格键
		fullCSS: 'button.control-fullscreen-icon',
		timeCSS: 'span.control-time-duration',
		//修正播放控制栏不能正常隐藏
		onMetadata: () => {
			const bar = q('.h5player-dashboard');
			if (!bar) return;
			q('.youku_layer_logo').remove();
			getVideo();
			const player = bar.closest('.youku-film-player'),
			layer = player.querySelector('.h5-ext-layer-adsdk'),//.h5-layer-conatiner
			top_bar = player.querySelector('.top_area');//全屏时的顶部状态栏
			let timer = null;
			bar.addEventListener('mousemove', ev => {
				if (timer) {
					clearTimeout(timer);
					timer = null;
				}
				ev.preventDefault();
				ev.stopPropagation();
			}, !1);
			//拦截鼠标消息，阻断官方的消息处理
			layer.addEventListener('mousemove', ev => {
				ev.preventDefault();
				ev.stopPropagation();
				if (bar.offsetWidth === 0) {
					isFullScreen() && (top_bar.style.display = 'block');
					//控制栏隐藏，则显示之
					bar.style.display = 'block';
				}
				else if (!timer) {
					//控制栏显示，则定时隐藏
					timer = setTimeout(() => {
						bar.style.display = 'none';
						isFullScreen() && (top_bar.style.display = 'none');
						timer = null;
					}, 2600);
				}
			}, !1);
			layer.addEventListener('click', ev => {
				getVideo();
				v.paused ? v.play() : v.pause();
			}, !1);
			layer.addEventListener('dblclick', ev => {
				isFullScreen() ? exitFullScreen() : doClick('button.control-fullscreen-icon');
			}, !1);
			//修正下一个按钮无效
			const btn = q('button.control-next-video');
			if (btn && btn.offsetWidth>1) {
				let e = q('.program.current');
				e = e && e.closest('.item') || q('.item.current');
				e = e.nextSibling;
				if (!e) return;
				e = e.querySelector('a');//下一个视频链接
				btn.addEventListener('click', ev => e.click());
				const attr = e.closest('[item-id]').getAttribute('item-id');
				playerInfo.nextCSS = `[item-id="${attr}"] a`;
			}
		}
	};
	break;
case 'cctv':
case 'cntv':
	fakeUA(ua_samsung);
	break;
case 'sina':
case '163':
	fakeUA(ua_ipad2);
	break;
case 'bilibili':
	fakeUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:48.0) Gecko/20100101 Firefox/48.0');
	break;
case 'le':
case 'lesports':
	if (!window.mozInnerScreenX) {//firefox黑屏
		fakeUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 Version/7.0.3 Safari/7046A194A');
		//totalTime = __INFO__.video.duration;
		playerInfo = {
			timeCSS: 'span.time_total',
			nextCSS: 'div.hv_ico_next',
			fullCSS: 'div.hv_ico_screen'
		};
	}
	break;
case 'sohu':
	fakeUA(ua_samsung);
	playerInfo = {
		timeCSS: 'span.x-duration-txt',
		nextCSS: 'li.on[data-vid]+li > a',
		fullCSS: 'div.x-fs-btn'
	};
	break;
case 'fun':
	if (u.startsWith('m.')) {
		if (!path.includes('play')) return;//非播放页，不执行init()
		/^\/[mv]/.test(path) && location.assign(path.replace('/', '/i') + location.search);
		playerInfo = {
			nextCSS: 'a.btn.next-btn',
			fullCSS: 'a.btn.full-btn'
		};
		break;
	}
	let vid = r1(/\bv-(\d+)/, path);
	let mid = r1(/\bg-(\d+)/, path);
	//剧集path: /implay/，单视频path: /ivplay/
	if (vid) {
		mid && location.assign(`//m.fun.tv/implay/?mid=${mid}&vid=${vid}`);
		location.assign('//m.fun.tv/ivplay/?vid='+vid);
	}

	mid && setTimeout( () => {
		vid = unsafeWindow.vplay.videoid;
		vid && location.assign(`//m.fun.tv/implay/?mid=${mid}&vid=${vid}`);
	}, 99);
	return;//非播放页，不执行init()
case 'tudou':
	playerInfo.onMetadata = () => {
		totalTime = ~~q('meta[name=duration]').getAttribute('content');
		const cur = ~~v.duration +1;
		if (cur < totalTime) {
			//分段视频，保持播放器原状 removeAllElem('#td-h5~div')
			q('.td-h5__appguide-fix').remove();
		} else {
			document.body.innerHTML = `<video width="100%" height="100%" autoplay controls src="${v.src}"/>`;
			setTimeout(() => {
				v = q('video');
				if (totalTime > 666) v.currentTime = 66;
			}, 9);
		}
		document.body.style.paddingBottom = 0;
	};
	break;
case 'panda':
	localStorage.setItem('panda.tv/user/player', '{"useH5player": 1}');
	playerInfo = {
		webfullCSS: 'span.h5player-control-bar-fullscreen',
		fullCSS: 'span.h5player-control-bar-allfullscreen'
	};
	isLive = true;
	break;
case 'longzhu':
	isLive = true;
	fakeUA(ua_ipad2);
	init(() => {
		if (v.src && v.src.includes('.m3u8'))
			doHls();
		else {
			q('#landscape_dialog').remove();
			new MutationObserver(function(records) {
				this.disconnect();
				doHls();
			})
			.observe(v, {
				attributes: true,
				attributeFilter: ['src']
			});
			setTimeout(() => q('.player.report-rbi-click').click(), 1200);
		}
	});
	break;
case 'zhanqi':
	setTimeout(function getM3u8_Addr() {
		const e = q('#BFPlayerID');//flash ID
		if (!e) {
			setTimeout(getM3u8_Addr, 300);
			return;
		}
		let s = e.children.flashvars.value,
		url = r1(/PlayUrl=([^&]+)/, s);//视频
		if (!url) {
			isLive = true;
			s = r1(/VideoLevels=([^&]+)/, s);//直播
			s = atob(s);
			url = JSON.parse(s).streamUrl;
		}
		e.parentNode.innerHTML = `<video width="100%" height="100%" autoplay controls src="${url}"/>`;
	}, 300);
	init(doHls);
}

!['longzhu', 'zhanqi'].includes(mDomain) && init();