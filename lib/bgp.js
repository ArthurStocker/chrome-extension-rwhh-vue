// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// Simple extension to remove 'Cookie' request header and 'Set-Cookie' response
// header.

function removeHeader(headers, name) {
    for (var i = 0; i < headers.length; i++) {
        if (headers[i].name.toLowerCase() == name) {
            console.log('Removing "' + name + '" header.');
            headers.splice(i, 1);
            break;
        }
    }
}

chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        //removeHeader(details.requestHeaders, 'cookie');
        return { requestHeaders: details.requestHeaders };
    },
    // filters
    { urls: ['*://*/*'] },
    // extraInfoSpec
    ['blocking', 'requestHeaders', 'extraHeaders']
);

chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
        //removeHeader(details.responseHeaders, 'set-cookie');
        //console.log(details);
        if (details.url.indexOf('amb_login.do') != -1 || details.url.indexOf('amb_welcome.do') != -1)
            details.responseHeaders.push({ name: "Content-Type", value: "text/html;charset=utf-8" });
        return { responseHeaders: details.responseHeaders };
    },
    // filters
    { urls: ['*://*/*'] },
    // extraInfoSpec
    ['blocking', 'responseHeaders', 'extraHeaders']
);