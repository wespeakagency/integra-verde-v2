"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import type { TikTokWindow } from "@/lib/tiktok"

const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID

export default function TikTokPixel() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasTrackedInitialPage = useRef(false)
  const searchParamString = searchParams.toString()

  useEffect(() => {
    if (!TIKTOK_PIXEL_ID) {
      console.warn("TikTok Pixel: falta NEXT_PUBLIC_TIKTOK_PIXEL_ID.")
      return
    }

    if (!hasTrackedInitialPage.current) {
      hasTrackedInitialPage.current = true
      return
    }

    const ttq = (window as TikTokWindow).ttq

    if (ttq?.page) {
      ttq.page()
    }
  }, [pathname, searchParamString])

  if (!TIKTOK_PIXEL_ID) {
    return null
  }

  return (
    <Script id="tiktok-pixel" strategy="afterInteractive">
      {`
                !function (w, d, t) {
                    w.TiktokAnalyticsObject = t;
                    var ttq = w[t] = w[t] || [];
                    ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"];
                    ttq.setAndDefer = function (target, method) {
                        target[method] = function () {
                            target.push([method].concat(Array.prototype.slice.call(arguments, 0)));
                        };
                    };
                    for (var i = 0; i < ttq.methods.length; i++) {
                        ttq.setAndDefer(ttq, ttq.methods[i]);
                    }
                    ttq.instance = function (id) {
                        var instance = ttq._i[id] || [];
                        for (var j = 0; j < ttq.methods.length; j++) {
                            ttq.setAndDefer(instance, ttq.methods[j]);
                        }
                        return instance;
                    };
                    ttq.load = function (id, options) {
                        var url = "https://analytics.tiktok.com/i18n/pixel/events.js";
                        var partner = options && options.partner;
                        ttq._i = ttq._i || {};
                        ttq._i[id] = [];
                        ttq._i[id]._u = url;
                        ttq._t = ttq._t || {};
                        ttq._t[id] = +new Date();
                        ttq._o = ttq._o || {};
                        ttq._o[id] = options || {};
                        options = d.createElement("script");
                        options.type = "text/javascript";
                        options.async = !0;
                        options.src = url + "?sdkid=" + id + "&lib=" + t;
                        var firstScript = d.getElementsByTagName("script")[0];
                        firstScript.parentNode.insertBefore(options, firstScript);
                    };

                    ttq.load('${TIKTOK_PIXEL_ID}');
                    ttq.page();
                }(window, document, 'ttq');
            `}
    </Script>
  )
}
