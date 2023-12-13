// Detect private browsing
// Inpired by original gist: https://gist.github.com/cou929/7973956
// But based in general on comment: https://gist.github.com/cou929/7973956#gistcomment-1791792 and other comments
(function (window) {
    var on, off;

    async function Webkit() {
        document.addEventListener("DOMContentLoaded", function(event) {
            new Promise((rs, rj, m = new MessageChannel(), d = document, i = d.createElement('iframe')) => {
                i.src = 'https://httpbin.org/base64/PHNjcmlwdD5vbm1lc3NhZ2UgPSBlID0+IGUuZGF0YS5wb3N0TWVzc2FnZShuYXZpZ2F0b3IuY29va2llRW5hYmxlZCk8L3NjcmlwdD4='
                i.onload = _ => i.contentWindow.postMessage(m.port1, '*', [m.port1], m.port2.onmessage = e => i.remove(rs(e.data)))
                i.hidden = 1
                d.body.append(i)
            })
              .then(thirdPartyCookieEnabled => {
                  if (thirdPartyCookieEnabled) {
                      off();
                  } else {
                      on();
                  }
              });
        });

    }

    function Mozilla() {
        if ('MozAppearance' in document.documentElement.style) {
            const db = indexedDB.open('test');
            db.onerror = on;
            db.onsuccess = off;
            return true;
        }
    }

    function Safari() {
        if (/constructor/i.test(window.HTMLElement)) {
            // iOS 11
            // Origin: https://gist.github.com/cou929/7973956#gistcomment-2272103
            try {
                window.openDatabase(null, null, null, null);
            } catch (e) {
                on();
            }

            // Older Safari
            try {
                if (localStorage.length)
                    off();
                else {
                    localStorage.x = 1;
                    localStorage.removeItem('x');
                    off();
                }
            } catch (e) {
                // Original gist: https://gist.github.com/jherax/a81c8c132d09cc354a0e2cb911841ff1

                // Safari only enables cookie in private mode
                // if cookie is disabled then all client side storage is disabled
                // if all client side storage is disabled, then there is no point
                // in using private mode
                navigator.cookieEnabled ? on() : off();
            }

            return true;
        }
    }

    function IE10Edge() {
        if (!window.indexedDB && (window.PointerEvent || window.MSPointerEvent)) {
            on();
            return true;
        }
    }

    window.isPrivate = function (on_cb, off_cb) {
        on = on_cb || function () {};
        off = off_cb || function () {};
        Webkit() || Mozilla() || Safari() || IE10Edge() || off();
    };
})(window);
