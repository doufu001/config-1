// ==UserScript==
// @name             视频站启用html5播放器
// @description      拥抱html5，告别Flash。支持站点：优.土、QQ、新浪、微博、搜狐、乐视、央视、风行等。并添加播放快捷键：快进、快退、暂停/播放、音量调节
// @version          0.5.5
// @homepage         http://bbs.kafan.cn/thread-2093014-1-1.html
// @include          *://pan.baidu.com/play/*
// @include          https://*.qq.com/*
// @exclude          *://live.qq.com/*
// @exclude          *://user.qzone.qq.com/*
// @exclude          *://lpl.qq.com/*
// @exclude          *://qt.qq.com/zhibo/*
// @include          http://v.youku.com/v_show/id_*
// @include          https://v.youku.com/v_show/id_*
// @include          *://*.bilibili.com/*
// include          http://*.cctv.com/*
// @exclude          http://tv.cctv.com/live/*
// include          http://*.cntv.cn/*
// @include          *://video.sina.*
// @include          *://weibo.com/*
// @include          *://www.weibo.com/*
// @include          http://*.le.com/*.html*
// @include          *://*.lesports.com/*.html*
// @include          *://tv.sohu.com/*.shtml*
// @include          *://*.tv.sohu.com/*.shtml*
// @include          *://film.sohu.com/album/*
// @include          *://www.fun.tv/vplay/*
// @include          *://m.fun.tv/*
// @include          https://www.panda.tv/*
// @exclude          https://www.panda.tv/
// @grant            unsafeWindow
// @run-at           document-start
// @namespace  https://greasyfork.org/users/7036
// ==/UserScript==
'use strict';

Object.defineProperty(navigator, 'plugins', {
	get: function() {
		return { length: 0 };
	}
});
String.prototype.r1 = function(r) {
	return r.test(this) && RegExp.$1;
};

let v, totalTime,
	oldCanplay = null,
	playerInfo = {},
	path = location.pathname,
isFullScreen = () => {
	return !!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen ||
        document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement);
},
//惰性函数
requestFullScreen = v => {
	const fn = v.requestFullscreen || v.webkitRequestFullScreen || v.mozRequestFullScreen || v.msRequestFullScreen;
	if (fn) requestFullScreen = v => fn.call(v);
	else requestFullScreen = () => {};
	requestFullScreen(v);
};

const u = location.hostname,
mDomain = u.startsWith('video.sina.') ? 'sina' : u.split('.').reverse()[1],//主域名
ua_samsung = 'Mozilla/5.0 (Linux; U; Android 4.0.4; GT-I9300 Build/IMM76D) AppleWebKit/534.30 Version/4.0 Mobile Safari/534.30',
q = css => document.querySelector(css),
fakeUA = ua => Object.defineProperty(navigator, 'userAgent', {
	value: ua,
	writable: false,
	configurable: false,
	enumerable: true
}),
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
	return !!x;
},
onCanplay = function(e) {
	//v.oncanplay = null;//注释掉，应对列表点播而不刷新页面
	console.log('脚本[启用html5播放器]，事件oncanplay');
	if (playerInfo.onMetadata) {
		playerInfo.onMetadata();
		delete playerInfo.onMetadata;
	}
	oldCanplay && oldCanplay(e);
	const r = path !== location.pathname;//点播了另一个视频
	if (totalTime && !r) return;//分段视频返回
	totalTime = totalTime || Math.round(v.duration);
	//跳过片头
	if (totalTime > 666 && 'youku' !== mDomain) setTimeout( () => {
		v.currentTime = 66;
	}, 9);
	if (r) path = location.pathname;
},
hotKey = function(e) {
	if (e.ctrlKey || e.altKey) return;
	if (/INPUT|TEXTAREA/.test(e.target.nodeName)) return;
	let n;
	switch (e.keyCode) {
	case 32: //space
		if (e.shiftKey || playerInfo.disableSpace) return;
		v.paused ? v.play() : v.pause();
		e.preventDefault();
		//e.stopPropagation();
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
		if (e.shiftKey) return;
		doClick(playerInfo.nextCSS);
		break;
	//case 80: // P 上一首
	case 38: //加音量
		n = v.volume + 0.1;
		if (e.shiftKey || n > 1) return;
		v.volume = n.toFixed(2);
		e.preventDefault();
		break;
	case 40: //降音量
		n = v.volume - 0.1;
		if (e.shiftKey || n < 0) return;
		v.volume = n.toFixed(2);
		e.preventDefault();
		break;
	case 13: //全屏
		if (e.shiftKey) doClick(playerInfo.webfullCSS);
		else if (!isFullScreen()) doClick(playerInfo.fullCSS) || requestFullScreen(v);
		break;
	case 88: //按键X：减速播放 -0.1
		if (e.shiftKey) return;
		n = v.playbackRate;
		if (n > 0.1) {
			n -= 0.1;
			v.playbackRate = n.toFixed(1);
		}
		break;
	case 67: //按键C：加速播放 +0.1
		if (e.shiftKey) return;
		n = v.playbackRate;
		if (n < 16) {
			n += 0.1;
			v.playbackRate = n.toFixed(1);
		}
		break;
	case 90: //按键Z：正常速度播放
		if (e.shiftKey) return;
		v.playbackRate = 1;
		break;
	case 70: //按键F：下一帧
		if (e.shiftKey) return;
		if (!v.paused) v.pause();
		v.currentTime += Number(1 / 30);
		break;
	case 68: //按键D：上一帧
		if (e.shiftKey) return;
		if (!v.paused) v.pause();
		v.currentTime -= Number(1 / 30);
		break;
	}
},
init = () => {
	new MutationObserver(function(records) {
		v = q('video');
		if (v) {
			oldCanplay = v.oncanplay;
			v.oncanplay = onCanplay;
			this.disconnect();
			document.addEventListener('keydown', hotKey, !1);
			if (playerInfo.timeCSS)
				totalTime = getAllDuration(playerInfo.timeCSS);
		}
	}).observe(document.documentElement, {
		childList : true,
		subtree : true
	});
};

if (mDomain !== 'panda') init();

switch (mDomain) {
case 'qq':
	playerInfo = {
		disableSpace: true,
		//playCSS: 'txpdiv.txp_btn_play',
		nextCSS: 'txpdiv.txp_btn_next',
		webfullCSS: 'txpdiv.txp_btn_fake[data-status="false"]',
		fullCSS: 'txpdiv.txp_btn_fullscreen'
	};
	fakeUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:48.0) Gecko/20100101 Firefox/48.0');
	break;
case 'bilibili':
	fakeUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:48.0) Gecko/20100101 Firefox/48.0');
	break;
case 'youku':
	sessionStorage.P_l_h5 = 1;
	playerInfo = {
		disableSpace: true,
		//playCSS: 'button.control-play-icon',
		nextCSS: 'button.control-next-video',
		fullCSS: 'button.control-fullscreen-icon'
	};
	break;
case 'cctv':
case 'cntv':
	fakeUA(ua_samsung);
	break;
case 'sina':
	fakeUA('Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3');
//case 'weibo':
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
		/^\/[mv]play/.test(path) && location.assign(path.replace('/', '/i') + location.search);
		if (path.includes('play')) {
			playerInfo = {
				nextCSS: 'a.btn.next-btn',
				fullCSS: 'a.btn.full-btn'
			};
		}
		return;
	}
	let vid = path.r1(/\bv-(\d+)/);
	path.startsWith('/vplay/v-') && location.assign('//m.fun.tv/ivplay/?vid='+vid);
	let mid = path.r1(/\/g-(\d+)/);
	vid && location.assign(`//m.fun.tv/implay/?mid=${mid}&vid=${vid}`);

	document.addEventListener('DOMContentLoaded', ev => {
		//vid = window.vplay.videoid;
		const x = q('.nowplay[data-vid]');
		if (x) {
			vid = x.getAttribute('data-vid');
			location.assign(`//m.fun.tv/implay/?mid=${mid}&vid=${vid}`);
		}
	}, !1);
	break;
case 'tudou':
	playerInfo.onMetadata = () => {
		//获取播放时长
		totalTime = ~~q('meta[name=duration]').getAttribute('content');
		const cur = ~~v.duration +1;
		//console.log(cur, totalTime);
		if (cur < totalTime) {
			//分段视频，保持播放器原状
			q('#td-h5 +div').remove();
		} else {
			document.body.innerHTML = `<video width="100%" height="100%" autoplay controls src="${v.src}"/>`;
			setTimeout(() => {
				v = q('video');
				if (totalTime > 666) v.currentTime = 66;
			}, 9);
		}
	};
	break;
case 'panda':
	localStorage.setItem('panda.tv/user/player', '{"useH5player": 1}');
}