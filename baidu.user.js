// ==UserScript==
// @name 百度网盘直接下载
// @version      1.0.0
// @description 本版适用于最新百度网盘！分享页面也可以下载哦，反正我就是不用度娘云管家！
// @match        *://pan.baidu.com/disk/home*
// @match        *://yun.baidu.com/disk/home*
// @match        *://pan.baidu.com/s/*
// @match        *://yun.baidu.com/s/*
// @match        *://pan.baidu.com/share/link*
// @match        *://yun.baidu.com/share/link*
// @run-at       document-start
// @include        *://pan.baidu.com/disk/home*
// @include        *://yun.baidu.com/disk/home*
// @include        *://pan.baidu.com/s/*
// @include        *://yun.baidu.com/s/*
// @include        *://pan.baidu.com/share/link*
// @include        *://yun.baidu.com/share/link*
// @run-at       document-start
// @namespace http://jixun.org/
// ==/UserScript==


try { var w=unsafeWindow; } catch (e) { var w=window; }
w.navigator.__defineGetter__ ('platform', function () {return 'Cracked by Jixun ^^';});
