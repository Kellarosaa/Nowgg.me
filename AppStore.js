<!DOCTYPE html><html lang="en"><head><script type="d2cf3f4cd2c45896151e1c08-text/javascript">
              if(typeof window !== "undefined"){
                window.gtag_enable_tcf_support = true;
              }
              </script><link rel="preconnect" href="https://cdn.now.gg"><link rel="icon" href="/shuttle.png"><link rel="icon" href="/shuttle.png" sizes="32x32"><link rel="icon" href="/shuttle.png" sizes="48X48"><link rel="icon" href="/shuttle.png" sizes="96X96"><link rel="icon" href="/shuttle.png" sizes="192x192"><link rel="preload" as="script" href="https://www.googletagservices.com/tag/js/gpt.js"><meta name="msapplication-TileImage" content="https://cdn.now.gg/apps-content/common/img/favicon.ico"><script type="d2cf3f4cd2c45896151e1c08-text/javascript">
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js"
  });
</script><script async type="d2cf3f4cd2c45896151e1c08-text/javascript" src="https://www.googletagmanager.com/gtm.js?id=GTM-PRM8BWR"></script><script type="d2cf3f4cd2c45896151e1c08-text/javascript">!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0],a="https://cmp.inmobi.com".concat("/choice/","mw9xJtqPQGFbC","/","now.gg","/choice.js?tag_version=V3"),i=0;e.async=!0,e.type="text/javascript",e.src=a,t.parentNode.insertBefore(e,t),!function e(){for(var t,a="__tcfapiLocator",i=[],s=window;s;){try{if(s.frames[a]){t=s;break}}catch(n){}if(s===window.top)break;s=s.parent}t||(!function e(){var t=s.document,i=!!s.frames[a];if(!i){if(t.body){var n=t.createElement("iframe");n.style.cssText="display:none",n.name=a,t.body.appendChild(n)}else setTimeout(e,5)}return!i}(),s.__tcfapi=function e(){var t,a=arguments;if(!a.length)return i;if("setGdprApplies"===a[0])a.length>3&&2===a[2]&&"boolean"==typeof a[3]&&(t=a[3],"function"==typeof a[2]&&a[2]("set",!0));else if("ping"===a[0]){var s={gdprApplies:t,cmpLoaded:!1,cmpStatus:"stub"};"function"==typeof a[2]&&a[2](s)}else"init"===a[0]&&"object"==typeof a[3]&&(a[3]=Object.assign(a[3],{tag_version:"V3"})),i.push(a)},s.addEventListener(
      "message",function e(t){var a="string"==typeof t.data,i={};try{i=a?JSON.parse(t.data):t.data}catch(s){}var n=i.__tcfapiCall;n&&window.__tcfapi(n.command,n.version,function(e,i){var s={__tcfapiReturn:{returnValue:e,success:i,callId:n.callId}};a&&(s=JSON.stringify(s)),t&&t.source&&t.source.postMessage&&t.source.postMessage(s,"*")},n.parameter)},!1))}();var s=function(){var e=arguments;typeof window.__uspapi!==s&&setTimeout(function(){void 0!==window.__uspapi&&window.__uspapi.apply(window.__uspapi,e)},500)},n=function(){i++,window.__uspapi===s&&i<3?console.warn("USP is not accessible"):clearInterval(p)};if(void 0===window.__uspapi){window.__uspapi=s;var p=setInterval(n,6e3)}}();window.__tcfapi('addEventListener', 2, function (tcData) {
  var _a;

  var eventStatus = tcData === null || tcData === void 0 ? void 0 : tcData.eventStatus;
  var consents = (_a = tcData === null || tcData === void 0 ? void 0 : tcData.vendor) === null || _a === void 0 ? void 0 : _a.consents;
  var gdprApplies = tcData === null || tcData === void 0 ? void 0 : tcData.gdprApplies;
  sessionStorage.setItem('gdprApplies', gdprApplies ? 'true' : 'false');

  if (eventStatus === 'useractioncomplete' || eventStatus === 'tcloaded' && gdprApplies) {
    if (consents) {
      var isConsentAvailable = !!Object.keys(consents).length;
      sessionStorage.setItem('userConsent', isConsentAvailable ? 'true' : 'false');
      window.dispatchEvent(new Event('nggGaScriptLoad'));
    }
  }
});</script><meta name="next-font-preconnect"><meta name="HandheldFriendly" content="true"><link rel="preload" as="image" href="https://cdn.now.gg/assets-opt/_next/image?url=https%3A%2F%2Fcdn.now.gg%2Fapps-content%2Fcom.aptoide.partners.nowgg.store%2Fbanner%2Fdesktop%2Faptoide.jpg&amp;w=1200&amp;q=80"><script type="d2cf3f4cd2c45896151e1c08-text/javascript">
  if (typeof window !== 'undefined') {
    window.googletag = window.googletag || { cmd: [] };
    window.tude = window.tude || { cmd: [] };
    window.nggParams = {};

    (function() {
    let random = bytes => crypto.getRandomValues(new Uint8Array(bytes));
    let customRandom = (alphabet, defaultSize, getRandom) => {
      let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1;
      let step = -~((1.6 * mask * defaultSize) / alphabet.length);
      return (size = defaultSize) => {
        let id = ''
        while (true) {
          let bytes = getRandom(step)
          let j = step
          while (j--) {
            id += alphabet[bytes[j] & mask] || ''
            if (id.length === size) return id
          }
        }
      }
    }
    let customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random)
    const nanoid = customAlphabet('useandom26T198340PX75pxJACKVERYMINDBUSHWOLFGQZbfghjklqvwyzrict', 21);
    var Storage={valuesMap:new Map,getItem(a){var b=String(a);return this.valuesMap.has(a)?String(this.valuesMap.get(b)):null},setItem(a,b){this.valuesMap.set(String(a),String(b))},removeItem(a){this.valuesMap.delete(a)},clear(){this.valuesMap.clear()},key(a){if(!a)throw new TypeError("Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present.");return this.valuesMap.get(a)},get length(){return this.valuesMap.size}}
    var isNewUser = false;
    try {
      localStorage.setItem("test", "test");
      localStorage.removeItem("test");
    } catch(e) {
      Object.defineProperty(window, "localStorage", {
        value: Object.assign({}, Storage),
        configurable: !0,
        enumerable: !0,
        writable: !0
      })
    }

    try {
      sessionStorage.setItem("test", "test");
      sessionStorage.removeItem("test");
    } catch(e) {
      Object.defineProperty(window, "sessionStorage", {
        value: Object.assign({}, Storage),
        configurable: !0,
        enumerable: !0,
        writable: !0
      })
    }
    if (!sessionStorage.getItem("fe_uaSessionId")) {
      sessionStorage.setItem("fe_uaSessionId", "uasess-" + nanoid());
    }

    if (!localStorage.getItem("fe_uaId")) {
      isNewUser = true;
      localStorage.setItem("fe_uaId", "ua-" + nanoid());
      sessionStorage.setItem("ngg-is-new-user", "true");
    }

    window.nggParams["fe_uaSessionId"] = sessionStorage.getItem("fe_uaSessionId");
    window.nggParams["fe_uaId"] = localStorage.getItem("fe_uaId");

    
    try {
      if (
        window.location.host !== "now.us" &&
        window.location.pathname.startsWith("/play/") &&
        window.location.href.indexOf("ng_ifp_partner") === -1 &&
        window.location.href.indexOf("partner") === -1 &&
        sessionStorage.getItem("isEmbeddedFrame") === null
      ) {
        var qString = window.location.href.split("?")[1];
        window.location.href = window.location.pathname.replace("/play/", "/apps/") + ".html" + (qString ? "?" + qString : "");
      }
    } catch (e) {}
    


    let pageAccessedByReload = (window && window.performance &&
      (window.performance.navigation && window.performance.navigation.type === 1) ||
        window.performance
          .getEntriesByType('navigation')
          .map((nav) => nav.type)
          .includes('reload')
    );

    let newVisitId = "visitid-" + nanoid();
    window.ngVisitId = sessionStorage.getItem("ngVisitId") || newVisitId;
    sessionStorage.setItem("ngVisitId", window.ngVisitId);
    window.feSessionId = "fesess-" + nanoid();

    var rawPageUrl = window.location.href;
    let oldNgUaId = '';
    if(window && window.history && window.history.replaceState && window.location.href.indexOf("?") > -1) {
      let currUrl = new URL(window.location.href);
      let searchParams = new URLSearchParams(currUrl.search);

      let refresh_token = searchParams.get("refresh_token");
      refresh_token && sessionStorage.setItem("refresh_token", refresh_token);

      let allow_edit = searchParams.get("allow_edit");
      allow_edit && sessionStorage.setItem("allow_edit", allow_edit);

      let utmSource = searchParams.get("utm_source");
      utmSource && sessionStorage.setItem("utm_source", utmSource);

      let utmCampaign = searchParams.get("utm_campaign");
      utmCampaign && sessionStorage.setItem("utm_campaign", utmCampaign);

      let utmMedium = searchParams.get("utm_medium");
      utmMedium && sessionStorage.setItem("utm_medium", utmMedium);

      let deepLink = searchParams.get("deep_link");
      deepLink && sessionStorage.setItem("ngg-deep-link", deepLink);

      let accessCode = searchParams.get("access_code");
      accessCode && sessionStorage.setItem("access_code", accessCode);

      let maxFps = searchParams.get("maxFps");
      maxFps && sessionStorage.setItem("maxFps", maxFps);

      let maxStreamBitrateKbps = searchParams.get("maxStreamBitrateKbps");
      maxStreamBitrateKbps && sessionStorage.setItem("maxStreamBitrateKbps", maxStreamBitrateKbps);

      let framebufferSizeWidth = searchParams.get("framebufferSizeWidth");
      framebufferSizeWidth && sessionStorage.setItem("framebufferSizeWidth", framebufferSizeWidth);

      let framebufferSizeHeight = searchParams.get("framebufferSizeHeight");
      framebufferSizeHeight && sessionStorage.setItem("framebufferSizeHeight", framebufferSizeHeight);

      let loginPrompt = searchParams.get("loginPrompt");
      loginPrompt && sessionStorage.setItem("loginPrompt", loginPrompt);

      searchParams.forEach((value, key) => {
        if(key.includes("ngg-exp")){
          localStorage.setItem(decodeURIComponent(key), value);
        }
      });

      let ngIfpPartner = searchParams.get("ng_ifp_partner") || searchParams.get("partner");
      ngIfpPartner && sessionStorage.setItem("isEmbeddedFrame", ngIfpPartner);
      ngIfpPartner && sessionStorage.setItem("ntmSource", ['IfpPartner', ngIfpPartner].join(':'));

      let ngUaId = searchParams.get("ng_uaId");
      oldNgUaId = localStorage.getItem("fe_uaId");
      ngUaId && localStorage.setItem("fe_uaId", ngUaId);

      let ngUserSource = decodeURIComponent(searchParams.get("ng_userSource") || "");
      ngUserSource && localStorage.setItem("userSource", ngUserSource);

      let ngUserCampaign = decodeURIComponent(searchParams.get("ng_userCampaign") || "");
      ngUserCampaign && localStorage.setItem("userCampaign", ngUserCampaign);

      let ngUserAcqVar = decodeURIComponent(searchParams.get("ng_userAcqVar") || "");
      ngUserAcqVar && localStorage.setItem("userAcqVar", ngUserAcqVar);

      let ngUaSessionId = searchParams.get("ng_uaSessionId");
      ngUaSessionId && sessionStorage.setItem("fe_uaSessionId", ngUaSessionId);

      let nggForwardParams = decodeURIComponent(searchParams.get("nggForwardParams") || '');
      nggForwardParams && sessionStorage.setItem("nggForwardParams", nggForwardParams);
      !nggForwardParams && sessionStorage.removeItem("nggForwardParams");


      let ngStateVisitId;
      let statePageReferrer;
      let authStateParams = JSON.parse(searchParams.get("state"));
      if (authStateParams) {
        ngStateVisitId = decodeURIComponent(authStateParams["ng_visitId"] || '');
        if(ngStateVisitId){
          window.ngVisitId = ngStateVisitId;
          sessionStorage.setItem("ngVisitId", ngStateVisitId);
        }

        let ngStateFeSessionId = decodeURIComponent(authStateParams["ng_feSessionId"] || '');
        ngStateFeSessionId && (window.feSessionId = ngStateFeSessionId);

        let ngStateReferrer = decodeURIComponent(authStateParams["ng_ngReferrer"] || '');
        ngStateReferrer && sessionStorage.setItem("ngReferrer", ngStateReferrer);

        statePageReferrer = decodeURIComponent(authStateParams["pageReferrer"] || '');
        statePageReferrer && sessionStorage.setItem("pageReferrer", statePageReferrer);

        let triggeredBy = decodeURIComponent(authStateParams["triggeredBy"] || '');
        triggeredBy && localStorage.setItem("ngg-fe-triggeredBy", triggeredBy);

        let loginPageContext = decodeURIComponent(authStateParams["loginPageContext"] || '');
        loginPageContext && sessionStorage.setItem("ngg-login-page-context", loginPageContext);
      }

      let ngInviteId = decodeURIComponent(searchParams.get("ng_inviteId") || '');
      ngInviteId && sessionStorage.setItem("ngg-fe-inviteId", ngInviteId);

      let ngVisitId = decodeURIComponent(searchParams.get("ng_visitId") || '');
      if(ngVisitId){
        window.ngVisitId = ngVisitId;
        sessionStorage.setItem("ngVisitId", ngVisitId);
      }

      let ngEntryPoint = decodeURIComponent(searchParams.get("ng_ngEntryPoint") || '');
      ngEntryPoint && sessionStorage.setItem("ngEntryPoint", ngEntryPoint);

      let ngReferrer = decodeURIComponent(searchParams.get("ng_ngReferrer") || '');
      ngReferrer && sessionStorage.setItem("ngReferrer", ngReferrer);

      let ngUtmSource = decodeURIComponent(searchParams.get("ng_utmSource") || '');
      ngUtmSource && sessionStorage.setItem("utm_source", ngUtmSource);

      let ngUtmCampaign = decodeURIComponent(searchParams.get("ng_utmCampaign") || '');
      ngUtmCampaign && sessionStorage.setItem("utm_campaign", ngUtmCampaign);

      let ngUtmMedium = decodeURIComponent(searchParams.get("ng_utmMedium") || '');
      ngUtmMedium && sessionStorage.setItem("utm_medium", ngUtmMedium);

      let ngNtmSource = searchParams.get("ng_ntmSource");
      if (ngNtmSource) {
        if (ngIfpPartner) {
          let ngOnlySource = ngNtmSource;
          if (ngNtmSource.indexOf('IfpPartner') > -1)
            ngOnlySource = (ngNtmSource.split(',').length > 1) ? ngNtmSource.split(',')[1] : '';

          ngOnlySource && sessionStorage.setItem("ntmSource", [sessionStorage.getItem("ntmSource"), ngOnlySource].join(','));
        }
        else
          sessionStorage.setItem("ntmSource", ngNtmSource);
      } else if (!ngIfpPartner)
        sessionStorage.removeItem("ntmSource");

      let appLaunchExtraData = searchParams.get("appLaunchExtraData");
      appLaunchExtraData && sessionStorage.setItem("appLaunchExtraData", appLaunchExtraData);
      window.nggParams["appLaunchExtraData"] = appLaunchExtraData;

      let showFreeSpinFlow = searchParams.get("enable_free_spin");
      showFreeSpinFlow && sessionStorage.setItem("enableFreeSpin",showFreeSpinFlow);

      let customData = searchParams.get("customData");
      customData && sessionStorage.setItem("customData", customData);
      window.nggParams["customData"] = customData;

      !deepLink && sessionStorage.removeItem("ngg-deep-link");
      !allow_edit && sessionStorage.removeItem("allow_edit");
      !accessCode && sessionStorage.removeItem("access_code");
      !ngInviteId && sessionStorage.removeItem("ngg-fe-inviteId");
      !appLaunchExtraData && sessionStorage.removeItem("appLaunchExtraData");
      !showFreeSpinFlow && sessionStorage.removeItem("enableFreeSpin");
      !customData && sessionStorage.removeItem("customData");

      if (!ngVisitId && !ngStateVisitId) {
        !utmSource && !ngUtmSource && sessionStorage.removeItem("utm_source");
        !utmMedium && !ngUtmMedium && sessionStorage.removeItem("utm_medium");
        !utmCampaign && !ngUtmCampaign && sessionStorage.removeItem("utm_campaign");
        !ngEntryPoint && sessionStorage.removeItem("ngEntryPoint");
        !ngReferrer && sessionStorage.setItem("ngReferrer", document.referrer || 'NA');
        !ngNtmSource && !ngIfpPartner && sessionStorage.removeItem("ntmSource");
        sessionStorage.setItem("ngEntryPoint", window.location.href);
      }
      !statePageReferrer && sessionStorage.setItem("pageReferrer", searchParams.get("pageReferrer") || document.referrer || 'NA');

      var finalUrl = window.location.href.split("?")[0];
      let ngShort = searchParams.get("ng_short");
      if (ngShort) {
        finalUrl = finalUrl + "?ng_short=" + ngShort;
      }
      if (finalUrl != window.location.href) {
        window.history.replaceState(null, document.title, finalUrl);
      }
    } else if(pageAccessedByReload) {
      sessionStorage.setItem("pageReferrer", document.referrer || 'NA');
      sessionStorage.removeItem("nggForwardParams");
    } else {
      sessionStorage.setItem("pageReferrer", document.referrer || 'NA');
      sessionStorage.setItem("ngReferrer", document.referrer || 'NA');
      sessionStorage.setItem("ngEntryPoint", window.location.href);
      sessionStorage.removeItem("utm_source");
      sessionStorage.removeItem("utm_medium");
      sessionStorage.removeItem("utm_campaign");
      sessionStorage.removeItem("ntmSource");
      sessionStorage.removeItem("nggForwardParams");
      sessionStorage.removeItem("ngg-deep-link");
      sessionStorage.removeItem("showFreeSpinBtn");
      sessionStorage.removeItem("allow_edit");
      sessionStorage.removeItem("access_code");
      sessionStorage.removeItem("ngg-fe-inviteId");
      sessionStorage.removeItem("appLaunchExtraData");
      sessionStorage.removeItem("enableFreeSpin");
      sessionStorage.removeItem("customData");
      window.ngVisitId = newVisitId;
      sessionStorage.setItem("ngVisitId", window.ngVisitId);
    }


    function getSessionAcquitionSource() {
      if (typeof window === 'undefined') {
        return '';
      }
      var ngReferrer = sessionStorage.getItem('ngReferrer');
      var utmCampaign = sessionStorage.getItem('utm_campaign');
      var utmSource = sessionStorage.getItem('utm_source');
      var utmMedium = sessionStorage.getItem('utm_medium');
      if (utmMedium === 'ad' || utmMedium === 'paid') {
        return 'paid';
      }
      var isNgReferrerValueExist = !!ngReferrer && ngReferrer !== 'NA';
      var isUtmCampaignValueExist = !!utmCampaign && utmCampaign !== 'NA';
      var isUtmSourceValueExist = !!utmSource && utmSource !== 'NA';
      var isUtmMediumValueExist = !!utmMedium && utmMedium !== 'NA';
      if (!isUtmCampaignValueExist && !isUtmSourceValueExist && !isUtmMediumValueExist && isNgReferrerValueExist && (ngReferrer.indexOf('google') > -1 || ngReferrer.indexOf('bing') > -1)) {
        return 'organic';
      }
      if (!isUtmCampaignValueExist && !isUtmSourceValueExist && !isUtmMediumValueExist && isNgReferrerValueExist) {
        return 'referral';
      }
      if (!isUtmCampaignValueExist && !isUtmSourceValueExist && !isUtmMediumValueExist && !isNgReferrerValueExist) {
        return 'direct';
      }
      return 'others';
    }

    if (isNewUser) {
     localStorage.setItem("userSource", getSessionAcquitionSource());

     let userCampaign = sessionStorage.getItem('utm_campaign');

     if(userCampaign){
      localStorage.setItem("userCampaign", userCampaign);
     }

     function getLAFormattedTime() {
      try {
        var localeDateString = new Date().toLocaleDateString('en-US', {
          hour12: false,
          timeZone: 'America/Los_Angeles',
          timeZoneName: 'short',
          year: 'numeric',
          month: 'short',
          day: '2-digit'
        });
        var localeDateStringSplit = localeDateString.split(", ");
        var dateMonthString = localeDateStringSplit[0];
        var year = localeDateStringSplit[1];
        var tz = localeDateStringSplit[2];
        var dateMonthStringSplit = dateMonthString.split(" ");
        var month = dateMonthStringSplit[0];
        var date = dateMonthStringSplit[1];
        var value = year + "_" + month + "_" + date + "_" + tz;
        return value.toUpperCase();
      } catch (e) {
        return "";
      }
    }
    localStorage.setItem("userAcqVar", (userCampaign || "NA")+"_"+getLAFormattedTime());
    } else {
      sessionStorage.removeItem("ngg-is-new-user");
    }
    window.nggParams["fe_uaId"] = localStorage.getItem("fe_uaId");

    const getCookie = (cname) => {
      if (!navigator.cookieEnabled)
        return '';
      if (typeof document !== 'undefined') {
        const name = cname + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i += 1) {
          let c = ca[i];
          while (c.charAt(0) === ' ') c = c.substring(1);
          if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
      }
      return '';
    }
    window.gameInfo = {
      id: "5874",
      fsWidget: {
        x: 40,
        y: 15,
      }
    }

      // compiled device info start

      var globalDeviceDetails = (function () {
        var macIntelKeyword = "MacIntel";
        var isMacIntelPlatform = function isMacIntelPlatform() {
          return macIntelKeyword.indexOf(navigator.platform) !== -1;
        };
        var allOsNames = {
          mac: "mac",
          window: "window",
          ios: "ios",
          android: "android",
          chrome_os: "chrome_os",
          unix: "unix",
          beos: "beos",
          amigaos: "amigaos",
          linux: "linux"
        };
        var isMobileComputed;
        var isMobile = function isMobile() {
          if (typeof isMobileComputed === "undefined") {
            var toMatch = [
              /Android/i,
              /webOS/i,
              /iPhone/i,
              /iPad/i,
              /iPod/i,
              /BlackBerry/i,
              /Windows Phone/i,
              /Opera Mini/i,
              /IEMobile/i,
              /WPDesktop/i
            ];
            isMobileComputed = toMatch.some(function (toMatchItem) {
              return (
                navigator.userAgent.match(toMatchItem) ||
                /iPad|iPhone|iPod/.test(navigator.platform) ||
                (isMacIntelPlatform() && navigator.maxTouchPoints > 1)
              );
            });
          }
          return isMobileComputed;
        };
        var isIPad = function isIPad() {
          if (
            navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 2 &&
            isMacIntelPlatform()
          ) {
            return true;
          }
          return false;
        };
        var isChromeOS = function isChromeOS() {
          return /CrOS/.test(navigator.userAgent);
        };
        var isUnixOS = function isUnixOS() {
          var _navigator;
          return (
            ((_navigator = navigator) === null ||
            _navigator === void 0 ||
            (_navigator = _navigator.userAgent) === null ||
            _navigator === void 0
              ? void 0
              : _navigator.indexOf("X11")) !== -1
          );
        };
        var isBeOS = function isBeOS() {
          return /BeOS/.test(navigator.userAgent);
        };
        var isAmigaOS = function isAmigaOS() {
          return /AmigaOS/.test(navigator.userAgent);
        };
        var isTablet = function isTablet() {
          var userAgent = navigator.userAgent.toLowerCase();
          var tablet =
            /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
              userAgent
            );
          return tablet;
        };
        var isTV = function isTV() {
          try {
            var userAgent = navigator.userAgent.toLowerCase();
            var tvKeywords = [
              "smarttv",
              "googletv",
              "appletv",
              "hbbtv",
              "netcast",
              "webos",
              "tizen",
              "viera",
              "roku",
              "firetv"
            ];

            // eslint-disable-next-line no-plusplus
            for (var i = 0; i < tvKeywords.length; ++i) {
              if (userAgent.indexOf(tvKeywords[i]) > -1) {
                return true;
              }
            }
            if (
              !(isMobile() || isIPad() || isTablet()) &&
              userAgent.indexOf("jiopages") > -1
            ) {
              return true;
            }
            return false;
          } catch (e) {
            return false;
          }
        };
        var getOS = function getOS() {
          var userPlatform = window.navigator.platform;
          var macosPlatforms = ["Macintosh", macIntelKeyword, "MacPPC", "Mac68K"];
          var windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
          var iosPlatforms = ["iPhone", "iPad", "iPod"];
          var androidPlatforms = ["Android", "Linux"];
          var os = "other";
          if (iosPlatforms.indexOf(userPlatform) !== -1) {
            os = allOsNames.ios;
          } else if (macosPlatforms.indexOf(userPlatform) !== -1) {
            os = allOsNames.mac;
          } else if (windowsPlatforms.indexOf(userPlatform) !== -1) {
            os = allOsNames.window;
          } else if (
            androidPlatforms.indexOf(userPlatform) !== -1 ||
            os === "Android"
          ) {
            os = allOsNames.android;
          } else if (isChromeOS()) {
            os = allOsNames.chrome_os;
          } else if (isUnixOS()) {
            os = allOsNames.unix;
          } else if (isBeOS()) {
            os = allOsNames.beos;
          } else if (isAmigaOS()) {
            os = allOsNames.amigaos;
          }
          return os;
        };
        var getFeDeviceDetails = function getFeDeviceDetails() {
          var desktopSpecificOSNames = [
            allOsNames.mac,
            allOsNames.window,
            allOsNames.chrome_os,
            allOsNames.unix,
            allOsNames.beos,
            allOsNames.amigaos,
            allOsNames.linux
          ];
          var feDeviceType = "other";
          var feOsName = getOS();
          if (isIPad() || isTablet()) {
            feDeviceType = "tablet";
          } else if (isMobile()) {
            feDeviceType = "smartphone";
          } else if (
            desktopSpecificOSNames.indexOf(
              feOsName === null || feOsName === void 0
                ? void 0
                : feOsName.toLowerCase()
            ) !== -1 &&
            !isTV()
          ) {
            feDeviceType = "desktop";
          }
          return {
            feDeviceType: feDeviceType,
            feOsName: feOsName
          };
        };
        return getFeDeviceDetails();
      })();
      globalDeviceDetails = globalDeviceDetails || {};
      var _globalDeviceDetails = globalDeviceDetails,
        feDeviceType = _globalDeviceDetails.feDeviceType,
        feOsName = _globalDeviceDetails.feOsName;


      // compiled device info end

      var eventName= "FeBootstrap";

      if(true){
        eventName="ApBootstrap";
      }



      const getFeSessionTags = () => {
        const feSessionTags = [];

        try {
          if (false) {
            feSessionTags.push('TryAndDownload');
          }

          const ntmSource = sessionStorage.getItem('ntmSource');
          if (ntmSource && 'TopBarRecommendation' === ntmSource) {
            feSessionTags.push('TopBarRecommendation');
          } else if (ntmSource && 'TopBarRecommendationForLearning' === ntmSource) {
            feSessionTags.push('TopBarRecommendationForLearning');
          }

          feSessionTags.push(sessionStorage.getItem('isEmbeddedFrame') ? 'iFrame' : 'nowgg');
        } catch (_) {}

        return feSessionTags;
      };

    var timeSinceNavMsecs = 0;
    try {
      timeSinceNavMsecs = performance.now();
    } catch (e) {
      timeSinceNavMsecs = 0;
    }
    var extraData = {
      rawPageUrl: rawPageUrl,
      timeSinceNavMsecs: timeSinceNavMsecs,
      isNewUaId: isNewUser ? true: undefined,
      oldUaId: (oldNgUaId !== localStorage.getItem("fe_uaId") ? oldNgUaId : '') || 'NA',
    };

    const payload = {
      appId: "5874",
      uaId: window.nggParams["fe_uaId"] || localStorage.getItem("fe_uaId") || "NA",
      userType: "NA",
      uaSessionId: window.nggParams["fe_uaSessionId"] || sessionStorage.getItem("fe_uaSessionId") || "NA",
      feSessionId: window.feSessionId,
      packageName: "com.aptoide.partners.nowgg.store",
      originTimestamp: new Date(),
      eventName: eventName,
      extraData: extraData,
      feDeviceType: feDeviceType || '',
      feOsName: feOsName || '',
      utmSource: sessionStorage.getItem("utm_source") || getCookie('utm_source') || "NA",
      utmMedium: sessionStorage.getItem("utm_medium") || getCookie('utm_medium')|| "NA",
      utmCampaign: sessionStorage.getItem("utm_campaign") || getCookie('utm_campaign')|| "NA",
      ngReferrer: sessionStorage.getItem("ngReferrer") || "NA",
      pageReferrer: sessionStorage.getItem("pageReferrer") || "NA",
      ngEntryPoint: sessionStorage.getItem('ngEntryPoint') || 'NA',
      visitId: window.ngVisitId,
      ntmSource: sessionStorage.getItem('ntmSource') || 'NA',
      feSessionTags: getFeSessionTags(),
      userSource: localStorage.getItem('userSource') || 'NA',
      visitSource: getSessionAcquitionSource(),
      userCampaign: localStorage.getItem('userCampaign') || 'NA',
      userAcqVar: localStorage.getItem('userAcqVar') || 'NA',
      visitCampaign: sessionStorage.getItem('utm_campaign') || 'NA',
    };

    window.timeSinceBootstrapMsecs = timeSinceNavMsecs;

    fetch("/5/api/play/v1/reportEvent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-ngg-fe-version": "berlin-v1.29.175.2",
      "x-ngg-skip-evar-check": "false",
    },
    body: JSON.stringify(payload)
  }).then(response => {
    if (response.status === 205) {
      window.nggVersionMismatch = true;
      const nUrl = new URL(window.location.href);
      const searchParams = nUrl.searchParams;
      searchParams.set('ng_visitId',  encodeURIComponent(window.ngVisitId));
      searchParams.set('ng_ngReferrer',  encodeURIComponent(sessionStorage.getItem('ngReferrer') || ''));
      searchParams.set('ng_ngEntryPoint',  encodeURIComponent(sessionStorage.getItem('ngEntryPoint') || ''));
      searchParams.set('ng_utmSource',  encodeURIComponent(sessionStorage.getItem('utm_source') || ''));
      searchParams.set('ng_utmMedium',  encodeURIComponent(sessionStorage.getItem('utm_medium') || ''));
      searchParams.set('ng_utmCampaign',  encodeURIComponent(sessionStorage.getItem('utm_campaign') || ''));
      searchParams.set('ng_ntmSource', sessionStorage.getItem('ntmSource') || 'NA');
      nUrl.search = searchParams.toString();

      window.location.href = nUrl.toString();
    }
    return response.json();
  }).then(json => {
    if(json && json.clientIpInfo){
      window.nggClientIpInfo=json.clientIpInfo;

      window.dispatchEvent(
        new Event('nggClientIpInfoEvent'),
      );

    }

    var nuke = function() {
      sessionStorage.clear();
      localStorage.clear();
      window.location.reload();
    }
    if (json.status === "FailureUaIdRevoked") {
      fetch('https://now.gg/accounts/auth/v1/logout').then(nuke).catch(nuke);
    }
  }).catch(e => {});
      try {["start-url", "media", "now-gg-precache"].forEach(a => {caches.delete(a);});} catch (e) {}
    })()
}
</script><meta charset="UTF-8"><meta name="robots" content="index,follow"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"><meta httpequiv="X-UA-Compatible" content="ie=edge"><link rel="canonical" href="https://now.gg/apps/aptoide/5874/aptoide-2.html"><meta name="description" content="Play Aptoide instantly in browser without downloading. Enjoy lag-free, low latency, and high-quality gaming experience while playing this popular apps game."><meta name="baidu-site-verification" content="code-y42E1spUr0"><meta name="theme-color" content="#FF42A5"><meta property="og:locale" content="en"><meta property="og:type" content="website"><meta property="og:title" content="Play Aptoide Online for Free on PC &amp; Mobile | now.gg"><meta property="og:description" content="Play Aptoide instantly in browser without downloading. Enjoy lag-free, low latency, and high-quality gaming experience while playing this popular apps game."><meta property="og:url" content="https://now.gg/apps/aptoide/5874/aptoide-2.html"><meta property="og:site_name" content="now.gg"><meta property="twitter:title" content="Play Aptoide Online for Free on PC &amp; Mobile | now.gg"><meta name="twitter:description" content="Play Aptoide instantly in browser without downloading. Enjoy lag-free, low latency, and high-quality gaming experience while playing this popular apps game."><title>Play Aptoide Online for Free on PC &amp; Mobile | now.gg</title><meta property="og:image" content="https://cdn.now.gg/apps-content/com.aptoide.partners.nowgg.store/ogimage/aptoide.jpg"><meta property="og:image:secure_url" content="https://cdn.now.gg/apps-content/com.aptoide.partners.nowgg.store/ogimage/aptoide.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:type" content="image/jpeg"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="https://cdn.now.gg/apps-content/com.aptoide.partners.nowgg.store/ogimage/aptoide.jpg"><link rel="alternate" href="https://now.gg/apps/aptoide/5874/aptoide-2.html" hreflang="x-default"><script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","name":"Aptoide","mainEntity":[{"@type":"Question","name":"Are Aptoide games free? What apps can I download from Aptoide?","acceptedAnswer":{"@type":"Answer","text":"Many of the apps on Aptoide, including games, are available for free. Still, the publishers and developers of those specific apps determine whether apps are available for free or for a fee.  Aptoide offers a variety of apps and games, and while many are available for free, some may come with a price tag determined by their respective publishers and developers. A few examples of apps and games that you can find on Aptoide include WhatsApp Messenger, Facebook, Instagram, or games like Subway Surfers, Angry Birds, 2048, etc."}},{"@type":"Question","name":"Can you use Aptoide on PC?","acceptedAnswer":{"@type":"Answer","text":"Yes, users can access Aptoide on their PC by using a web browser through now.gg. Now.gg provides a platform that allows users to run Android apps, including Aptoide, directly in their web browsers without the need for downloads or installations. This means you can explore and download apps from Aptoide seamlessly on your PC, enhancing your app discovery and installation experience."}},{"@type":"Question","name":"Where is Aptoide based?","acceptedAnswer":{"@type":"Answer","text":"Portugal is home to Aptoide. In 2011, Paulo Trezentos and Alvaro Pinto founded it."}},{"@type":"Question","name":"How many people use Aptoide?","acceptedAnswer":{"@type":"Answer","text":"Aptoide has millions of users worldwide. The exact number of users can change over time."}},{"@type":"Question","name":"Can I delete Aptoide?","acceptedAnswer":{"@type":"Answer","text":" Yes, you can uninstall or delete the Aptoide app from your device if you no longer wish to use it."}},{"@type":"Question","name":"Is Aptoide 100% safe?","acceptedAnswer":{"@type":"Answer","text":"Aptoide functions differently from official app stores such as Google Play Store, but it is still a valid app store. The sources and developers who offer the apps on Aptoide are ultimately responsible for their security. "}},{"@type":"Question","name":"Is Aptoide better than Play Store?","acceptedAnswer":{"@type":"Answer","text":"The models and degrees of app curation offered by Aptoide and Google Play Store differ. The official Google Play Store makes all apps go through a review process. Aptoide is a different marketplace; it provides a more open platform."}}]}</script><script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","headline":"Play AptoideOnline for Free on PC & Mobile | now.gg","description":"Play Aptoide instantly in browser without downloading. Enjoy lag-free, low latency, and high-quality gaming experience while playing this popular apps game","url":"https://now.gg/apps/aptoide/5874/aptoide-2.html","primaryImageOfPage":"https://cdn.now.gg/apps-content/com.aptoide.partners.nowgg.store/banner/desktop/aptoide.jpg","about":[{"@type":"Thing","name":"Play","sameAs":["https://en.wikipedia.org/wiki/Gameplay","https://www.wikidata.org/wiki/Q1331296"]},{"@type":"Thing","name":"Aptoide","sameAs":[""]},{"@type":"Thing","name":"Online","sameAs":["https://en.wikipedia.org/wiki/Internet","https://www.wikidata.org/wiki/Q75","https://www.britannica.com/technology/Internet","https://dbpedia.org/page/Internet"]},{"@type":"Thing","name":"PC","sameAs":["https://en.wikipedia.org/wiki/Personal_computer","https://www.wikidata.org/wiki/Q16338","https://www.britannica.com/technology/personal-computer","http://dbpedia.org/page/Personal_computer"]},{"@type":"Thing","name":"Browser","sameAs":["https://en.wikipedia.org/wiki/Web_browser","https://www.wikidata.org/wiki/Q6368","https://dbpedia.org/page/Web_browser","https://www.britannica.com/technology/browser"]},{"@type":"Thing","name":"Game","sameAs":["https://en.wikipedia.org/wiki/Video_game","https://www.wikidata.org/wiki/Q7889","https://www.britannica.com/topic/electronic-game","http://dbpedia.org/page/Video_game","https://en.wikipedia.org/wiki/Online_game","https://www.wikidata.org/wiki/Q116634","https://www.britannica.com/technology/online-gaming","https://dbpedia.org/page/Online_game","https://en.wikipedia.org/wiki/Browser_game","https://www.wikidata.org/wiki/Q848991","https://en.wikipedia.org/wiki/Mobile_game","https://www.wikidata.org/wiki/Q1121542","https://dbpedia.org/page/Mobile_game"]}],"mentions":[{"@type":"Thing","name":"Android","sameAs":["https://en.wikipedia.org/wiki/Android_(operating_system)","https://www.wikidata.org/wiki/Q94","https://www.britannica.com/technology/Android-operating-system","https://yago-knowledge.org/resource/Android_(operating_system)","http://dbpedia.org/page/Android_(operating_system)"]}]}</script><script type="application/ld+json">{"@context":"https://schema.org","@type":"MobileApplication","name":"Aptoide","description":"Play Aptoide instantly in browser without downloading. Enjoy lag-free, low latency, and high-quality gaming experience while playing this popular apps game.","url":"https://now.gg/apps/aptoide/5874/aptoide-2.html","image":"https://cdn.now.gg/apps-content/com.aptoide.partners.nowgg.store/banner/mobile/aptoide.jpg","operatingSystem":"Windows, Mac, Android, iOS","applicationCategory":"GameApplication, MultimediaApplication","genre":"Popular Apps","aggregateRating":{"@type":"AggregateRating","ratingValue":4.14,"ratingCount":45796},"author":{"@type":"Organization","name":"now.gg"},"offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}</script><script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://now.gg"},{"@type":"ListItem","position":2,"name":"Games","item":"https://now.gg/games.html"},{"@type":"ListItem","position":3,"name":"Casual Games","item":"https://now.gg/games/popular-apps.html"},{"@type":"ListItem","position":4,"name":"Aptoide","item":"https://now.gg/apps/aptoide/5874/aptoide-2.html"}]}</script><meta name="next-head-count" content="32"><link rel="preload" href="/5/play/assets/_next/static/css/3d0ae4c613f4697f.css" as="style"><link rel="stylesheet" href="/5/play/assets/_next/static/css/3d0ae4c613f4697f.css" data-n-p><noscript data-n-css></noscript><script defer nomodule src="/5/play/assets/_next/static/chunks/polyfills-5cd94c89d3acac5f.js" type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/webpack-59bd839002dbdf25.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/framework-0e1b29c5be962d52.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/main-d59f0ad61824b1ab.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/pages/_app-189b624b48557ef4.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/29107295-9f8d41ddc6a12863.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/702-e8e516fd50745426.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/241-b48cc53babb7b9b2.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/804-495923f58f72f8ee.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/166-9fc5894855715c7a.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/761-cd7c67e5e09881b6.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/283-2dda1de48f449500.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/835-938097ec14b221d8.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/977-8511ad94d66de73e.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/880-d27f1c351dda280d.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/chunks/pages/apps/%5Bdev-slug%5D/%5Bid%5D/%5Bpub-slug%5D-dfaf03d19cc35877.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/Ebxbogsq0KMZcj5jZkRPh/_buildManifest.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/Ebxbogsq0KMZcj5jZkRPh/_ssgManifest.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><script src="/5/play/assets/_next/static/Ebxbogsq0KMZcj5jZkRPh/_middlewareManifest.js" defer type="d2cf3f4cd2c45896151e1c08-text/javascript"></script><style data-styled data-styled-version="5.3.3">.fVAfrk{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:15px;}/*!sc*/
.fVAfkl{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:18px;}/*!sc*/
.eoWdFx{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:9px;}/*!sc*/
data-styled.g1[id="sc-bdvvtL"]{content:"fVAfrk,fVAfkl,eoWdFx,"}/*!sc*/
*,*::after,*::before{box-sizing:border-box;}/*!sc*/
html{font-size:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;accent-color:#FF42A5;}/*!sc*/
body{margin:0;padding:0;margin:auto;font-family:'Poppins',sans-serif;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;-ms-overflow-style:none;}/*!sc*/
h1,h2,h3,h4,h5,h6,p{margin:0 0 0.5em 0;}/*!sc*/
a{color:#fff;}/*!sc*/
a:visited,a:hover,a:focused{color:#fff;}/*!sc*/
::-webkit-scrollbar{display:none;width:0px;}/*!sc*/
input[type="checkbox" i]{width:16px;height:16px;cursor:pointer;outline:1px solid #FF42A5;}/*!sc*/
label:focus-within{border:none;outline:1px solid #FF42A5;}/*!sc*/
body{overflow:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100vw;height:100vh;background-color:#111;}/*!sc*/
@media only screen and (orientation:portrait){body.rotate-screen{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:bottom left;-ms-transform-origin:bottom left;transform-origin:bottom left;position:absolute;top:-100vw;height:100vw;width:100vmax;background:rgba(0,0,0,1);overflow:hidden;}}/*!sc*/
@media only screen and (orientation:landscape) and (max-height:575.98px){body.portrait-mode{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:top right;-ms-transform-origin:top right;transform-origin:top right;position:absolute;top:0;right:100vw;height:100vw;width:100vh;background:black !important;overflow:hidden;}}/*!sc*/
body #__next{width:100%;height:100%;}/*!sc*/
.overlayKey{position:absolute;min-width:25px;text-align:center;z-index:1;opacity:0.75;pointer-events:none;}/*!sc*/
.overlayKey.MOBASkill .overlayKeyValue:not(.MobaText),.overlayKey.LBM .overlayKeyValue:not(.MobaText){background:none;border:none;}/*!sc*/
.overlayKey.MOBASkill .overlayKeyValue:not(.MobaText) img,.overlayKey.LBM .overlayKeyValue:not(.MobaText) img{width:26px;}/*!sc*/
.overlayKey.Scroll,.overlayKey.EdgeScroll{background:none !important;border:none !important;}/*!sc*/
.overlayKey.Scroll img,.overlayKey.EdgeScroll img{width:26px;}/*!sc*/
.overlayKey.FreeLook.gamepad .overlayKeyValue{position:absolute;}/*!sc*/
.overlayKey.Dpad > span{position:absolute;}/*!sc*/
.overlayKey.Pan::before,.overlayKey.Pan::after{content:"";}/*!sc*/
.overlayKey.Pan::before{height:78px;width:1px;position:absolute;background:white;-webkit-transform:translate3d(-1px,-18px,10px);-ms-transform:translate3d(-1px,-18px,10px);transform:translate3d(-1px,-18px,10px);}/*!sc*/
.overlayKey.Pan::after{width:78px;height:1px;position:absolute;background:white;-webkit-transform:translate3d(-39px,-21px,10px);-ms-transform:translate3d(-39px,-21px,10px);transform:translate3d(-39px,-21px,10px);}/*!sc*/
.overlayKey.Pan.editMode::before{-webkit-transform:translate3d(0px,0px,10px);-ms-transform:translate3d(0px,0px,10px);transform:translate3d(0px,0px,10px);}/*!sc*/
.overlayKey.Pan.editMode::after{-webkit-transform:translate3d(0px,0px,10px);-ms-transform:translate3d(0px,0px,10px);transform:translate3d(0px,0px,10px);}/*!sc*/
.overlayKey.Pan.gamepad::before,.overlayKey.Pan.gamepad::after{display:none;}/*!sc*/
.overlayKey.Pan.gamepad .overlayKeyValue{width:auto;height:auto;padding:10px;}/*!sc*/
.overlayKey.Pan.gamepad .overlayKeyValue::before{display:none;}/*!sc*/
.overlayKey.Pan .overlayKeyValue{width:40px;height:40px;border-radius:50%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;z-index:1;-webkit-transition:box-shadow 0.3s ease-in-out;transition:box-shadow 0.3s ease-in-out;}/*!sc*/
.overlayKey.Pan .overlayKeyValue::before{content:"";position:absolute;width:52px;height:52px;left:0;right:0;top:0;bottom:0;border:1px solid white;border-radius:50%;-webkit-transform:translate3d(-7.5px,-7px,10px);-ms-transform:translate3d(-7.5px,-7px,10px);transform:translate3d(-7.5px,-7px,10px);}/*!sc*/
.overlayKey.Pan .overlayKeyValue img{width:14px;}/*!sc*/
.overlayKeyValue{display:block;font-size:12px;line-height:1.1;border-radius:9px;padding:2px 6px;background-color:rgba(8,10,31,0.85);border:1px solid #f7faff;position:relative;white-space:nowrap;color:#f7faff;}/*!sc*/
.overlayKeyValue svg{width:16px;height:23px;}/*!sc*/
.overlayKeyValue.DpadImage{background:none;border:none;}/*!sc*/
.overlayKeyValue.DpadImage img{width:26px;}/*!sc*/
.simplebar-scrollbar:before{background-color:rgba(255,255,255,0.5);top:30px;bottom:20px;right:5px;}/*!sc*/
.Toastify__toast-container--top-center{top:100px;}/*!sc*/
.Toastify__toast-theme--colored.Toastify__toast--default{background-color:rgba(0,0,0,0.8) !important;border:1px solid rgba(255,255,255,0.2);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);border-radius:4px;}/*!sc*/
.Toastify__toast-theme--colored.Toastify__toast--default .Toastify__toast-body{font-size:16px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;line-height:1.5em;}/*!sc*/
.Toastify__toast-theme--colored.Toastify__toast--default .Toastify__toast-body div{text-align:center;color:#ffffff;}/*!sc*/
.Toastify__toast-theme--colored.Toastify__toast--default .Toastify__toast-body div > kbd{color:#0B0223;background:#EEE3D9;padding:6px 10px;border:1px solid;margin:0 2px;font-weight:500;font-size:14px;line-height:19px;border-radius:4px;}/*!sc*/
.Toastify__toast-container.Toastify__toast-container--top-center{width:420px;}/*!sc*/
.Toastify__close-button--colored{display:none;}/*!sc*/
.select-container .select__control{cursor:pointer;background:transparent;border:1px solid #FFFFFF1A;margin:12px 0px;}/*!sc*/
.select-container .select__control--menu-is-open{background:rgba(0,0,0,0.40);border:1px solid rgba(255,255,255,0.1);-webkit-backdrop-filter:blur(60px);backdrop-filter:blur(60px);border-bottom:0px;box-shadow:unset;border-radius:4px 4px 0px 0px;}/*!sc*/
.select-container .select__control--menu-is-open:hover{border-color:rgba(255,255,255,0.1);}/*!sc*/
.select-container .select__control--menu-is-open .select__indicator{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}/*!sc*/
.select-container .select__control--menu-is-open .select__indicator:hover{color:rgba(255,255,255,0.5);}/*!sc*/
.select-container .select__indicator-separator{display:none;}/*!sc*/
.select-container .select__indicator{color:rgba(255,255,255,0.5);}/*!sc*/
.select-container .select__indicator:hover{color:rgba(255,255,255,0.5);}/*!sc*/
.select-container .select__placeholder,.select-container .select__single-value{color:rgba(255,255,255,0.7);font-size:12px;}/*!sc*/
.select-container .select__menu{color:rgba(255,255,255,0.6);background:#444;box-shadow:unset;margin:0px 3px;border-radius:0px 0px 4px 4px;border:1px solid rgba(255,255,255,0.10);border-top:0px;background:rgba(0,0,0,0.40);-webkit-backdrop-filter:blur(60px);backdrop-filter:blur(60px);-webkit-transform:translateX(-3px);-ms-transform:translateX(-3px);transform:translateX(-3px);}/*!sc*/
.select-container .select__menu-list{padding:0px 8px 8px 8px;gap:4px;}/*!sc*/
.select-container .select__option{margin:2px 0px;padding:4px 4px 4px 8px;border-radius:4px;background:rgba(255,255,255,0.10);color:rgba(255,255,255,0.60);font-size:12px;font-weight:400;line-height:150%;}/*!sc*/
.select-container .select__option:hover{color:rgba(255,255,255);cursor:pointer;}/*!sc*/
.icon-gamepad.null{position:relative;}/*!sc*/
.icon-gamepad.null:after{content:'';border:2px;height:29px;width:1.5px;background:currentColor;position:absolute;-webkit-transform:rotate(40deg);-ms-transform:rotate(40deg);transform:rotate(40deg);left:10px;top:-4px;}/*!sc*/
.hidden{display:none;visibility:hidden;}/*!sc*/
.portal-page .quarter-4,.portal-page .quarter-5{position:static;width:50%;height:auto;rotate:none;background:none;}/*!sc*/
.portal-page .quarter-4 > li,.portal-page .quarter-5 > li{position:static;rotate:none;}/*!sc*/
.portal-page .quarter-4 > li > div,.portal-page .quarter-5 > li > div{position:relative;}/*!sc*/
.portal-page .quarter-4 > li > div > img,.portal-page .quarter-5 > li > div > img{position:static;}/*!sc*/
div .fit-html{width:calc(100% - 352px);left:176px;height:auto;}/*!sc*/
div .fit-app-page-html{width:72%;left:0;height:auto;}/*!sc*/
.revert-rotation{-webkit-transform:unset !important;-ms-transform:unset !important;transform:unset !important;top:0 !important;right:0 !important;position:relative !important;min-height:100vh;min-width:100vw;}/*!sc*/
.revert-rotation .landscape{display:none;}/*!sc*/
.overflow-hidden{overflow:hidden;}/*!sc*/
.body-overlay::before{position:absolute;left:0;top:0;content:'';width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:1;}/*!sc*/
:root{--grid-items-per-row:9;--grid-item-margin:8px;--grid-vertical-items-per-row:6;--grid-vertical-item-margin:24px;}/*!sc*/
@media only screen and (min-width:960px) and (max-width:1366px){:root{--grid-items-per-row:8;}}/*!sc*/
@media only screen and (min-width:550px) and (max-width:959px){:root{--grid-items-per-row:6;--grid-vertical-items-per-row:5;}}/*!sc*/
@media only screen and (max-width:549px){:root{--grid-items-per-row:3;--grid-vertical-items-per-row:2;--grid-vertical-item-margin:16px;}}/*!sc*/
.d-mobile,.d-mobile-flex{display:none !important;}/*!sc*/
.d-small{display:none !important;}/*!sc*/
.d-desk,.d-desk-flex,.d-none{display:none !important;}/*!sc*/
@media only screen and (max-width:768px){.d-mobile{display:block !important;}.d-mobile-flex{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;}}/*!sc*/
@media only screen and (min-width:769px){.d-desk{display:block !important;}.d-desk-flex{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;}}/*!sc*/
@media only screen and (max-width:1020px){.d-small{display:block !important;}}/*!sc*/
.videoSwiper .swiper-slide{width:auto;}/*!sc*/
.space-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}/*!sc*/
.hero-static{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:0 35px;list-style-type:none;height:400px;gap:25px;margin-top:32px;}/*!sc*/
@media only screen and (max-width:960px){.hero-static{height:300px;}}/*!sc*/
@media only screen and (max-width:767px){.hero-static{margin-top:16px;}}/*!sc*/
@media only screen and (max-width:767px) and (orientation:portrait){.hero-static{height:420px;}}/*!sc*/
.hero-static > div{max-width:1550px;width:100%;margin:auto;}/*!sc*/
.hero-static > div .gameInfo{z-index:2;}/*!sc*/
.hero-static li{overflow:hidden;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;width:100%;position:relative;}/*!sc*/
.hero-static li .banner{height:100%;}/*!sc*/
.hero-static li img:not(.banner){position:absolute;z-index:222;bottom:20px;left:20px;width:144px;height:144px;border:8px;}/*!sc*/
.hero-static li span{position:absolute;left:20%;bottom:20px;}/*!sc*/
.full-w-h{width:100%;height:100% !important;min-height:100% !important;}/*!sc*/
data-styled.g7[id="sc-global-gHgdwx1"]{content:"sc-global-gHgdwx1,"}/*!sc*/
.kDMDQX{color:currentcolor;font-size:24px;line-height:36px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;margin:0;font-weight:600;}/*!sc*/
data-styled.g48[id="sc-efQSVx"]{content:"kDMDQX,"}/*!sc*/
.eTRXlj{color:currentcolor;font-size:16px;font-weight:600;line-height:24px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;margin:0;}/*!sc*/
data-styled.g51[id="sc-dPiLbb"]{content:"eTRXlj,"}/*!sc*/
.gMYsnU{color:currentcolor;font-size:14px;font-weight:600;line-height:21px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;margin:0;}/*!sc*/
data-styled.g52[id="sc-bBHHxi"]{content:"gMYsnU,"}/*!sc*/
.jiXxYW{color:currentcolor;font-size:12px;font-weight:600;line-height:18px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;margin:0;}/*!sc*/
data-styled.g53[id="sc-cNKqjZ"]{content:"jiXxYW,"}/*!sc*/
.egClJc{color:currentcolor;font-size:14px;line-height:21px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;margin:0;font-weight:400;}/*!sc*/
data-styled.g59[id="sc-lbhJGD"]{content:"egClJc,"}/*!sc*/
.gmAqqm{color:currentcolor;font-size:12px;line-height:18px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;margin:0;font-weight:400;}/*!sc*/
data-styled.g63[id="sc-nVkyK"]{content:"gmAqqm,"}/*!sc*/
.fcvkTA{width:32px;height:32px;display:inline-block;position:relative;border-radius:50%;}/*!sc*/
data-styled.g68[id="sc-clIzBv"]{content:"fcvkTA,"}/*!sc*/
.PICaB{width:100%;height:100%;border-radius:50%;border:1px solid rgba(255,255,255,0.4);position:absolute;top:0;left:0;}/*!sc*/
data-styled.g69[id="sc-faUpoM"]{content:"PICaB,"}/*!sc*/
.dolTzc{width:100%;height:100%;border-radius:50%;border:1px solid #FFFFFF;border-bottom-color:transparent;position:absolute;top:0;left:0;-webkit-animation:fvtopB 1.5s linear infinite;animation:fvtopB 1.5s linear infinite;}/*!sc*/
data-styled.g70[id="sc-Galmp"]{content:"dolTzc,"}/*!sc*/
.dxSvGD{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;outline:none;border-radius:54px;font-family:inherit;color:rgba(255,255,255,0.4) !important;background:rgba(255,255,255,0.1) !important;border:0px;pointer-events:none;-webkit-backdrop-filter:blur(120px);backdrop-filter:blur(120px);gap:4px;padding:9.5px 24px;border-radius:8px;font-weight:600;font-size:14px;line-height:150%;}/*!sc*/
.dxSvGD:hover{background:#FF3392;color:#FFFFFF;border-color:undefined;border:undefined;}/*!sc*/
.dxSvGD:active{background:#FF42A5;color:#FFFFFF;border:0px;}/*!sc*/
.dxSvGD:disabled,.dxSvGD:hover:disabled{cursor:default;color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.1);box-shadow:undefined;border-color:undefined;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none;border:none;}/*!sc*/
.dxSvGD.more-cta{font-size:14px;padding:9px 27px;margin:auto;}/*!sc*/
@media only screen and (max-width:768px) and (orientation:portrait){.dxSvGD.more-cta{width:100%;}}/*!sc*/
.eGUePh{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;outline:none;border-radius:54px;font-family:inherit;color:#FFFFFF;background:#FF42A5;border:0px;box-shadow:0px 4px 4px rgba(0,0,0,0.2);-webkit-backdrop-filter:blur(120px);backdrop-filter:blur(120px);gap:4px;padding:7px 16px;border-radius:6px;font-weight:600;font-size:12px;line-height:150%;}/*!sc*/
.eGUePh:hover{background:#FF3392;color:#FFFFFF;border-color:undefined;border:undefined;}/*!sc*/
.eGUePh:active{background:#FF42A5;color:#FFFFFF;border:0px;}/*!sc*/
.eGUePh:disabled,.eGUePh:hover:disabled{cursor:default;color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.1);box-shadow:undefined;border-color:undefined;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none;border:none;}/*!sc*/
.eGUePh.more-cta{font-size:14px;padding:9px 27px;margin:auto;}/*!sc*/
@media only screen and (max-width:768px) and (orientation:portrait){.eGUePh.more-cta{width:100%;}}/*!sc*/
.cAesac{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;outline:none;border-radius:54px;font-family:inherit;color:#FF42A5;background:transparent;border:1px solid #FF42A5;box-shadow:0px 4px 4px rgba(0,0,0,0.2);gap:4px;padding:7px 16px;border-radius:6px;font-weight:600;font-size:12px;line-height:150%;}/*!sc*/
.cAesac:hover{background:transparent;color:#FF3392;border-color:undefined;border:2px solid #FF3392;margin:-1px;}/*!sc*/
.cAesac:active{background:transparent;color:#FF42A5;border:1px solid #FF42A5;}/*!sc*/
.cAesac:disabled,.cAesac:hover:disabled{cursor:default;color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.1);box-shadow:undefined;border-color:undefined;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none;border:none;}/*!sc*/
.cAesac.more-cta{font-size:14px;padding:9px 27px;margin:auto;}/*!sc*/
@media only screen and (max-width:768px) and (orientation:portrait){.cAesac.more-cta{width:100%;}}/*!sc*/
data-styled.g71[id="sc-fWCJzd"]{content:"dxSvGD,eGUePh,cAesac,"}/*!sc*/
.fnjHGA{width:100%;height:100%;overflow:hidden;display:inline-block;}/*!sc*/
.fnjHGA img{width:100%;height:100%;}/*!sc*/
data-styled.g73[id="sc-TBWPX"]{content:"fnjHGA,"}/*!sc*/
.gssvwf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;width:100%;padding:1px 0 0 0;z-index:auto;}/*!sc*/
data-styled.g74[id="sc-jIkXHa"]{content:"gssvwf,"}/*!sc*/
.fWYFhO{width:100%;border-radius:8px;position:relative;overflow:hidden;background-color:rgba(11,2,35,0.5);object-fit:cover;max-width:100%;width:100%;aspect-ratio:1;}/*!sc*/
@supports not (aspect-ratio:auto){.fWYFhO{height:110px;width:110px;max-width:110px;}}/*!sc*/
data-styled.g75[id="sc-ZOtfp"]{content:"fWYFhO,"}/*!sc*/
.hota-dq{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;max-width:calc(100%/var(--grid-items-per-row) - var(--grid-item-margin));margin:0 calc(var(--grid-item-margin)/2) var(--grid-item-margin);}/*!sc*/
data-styled.g76[id="sc-jOxtWs"]{content:"hota-dq,"}/*!sc*/
.rJKsS{color:#FFFFFF;width:100%;position:relative;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;padding:8px;border-radius:8px;}/*!sc*/
.rJKsS .game-info-tooltip{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1;}/*!sc*/
.rJKsS .game-info-tooltip:before{content:'';}/*!sc*/
.rJKsS:before{content:'';bottom:-8.5px;background:#FF42A5;-webkit-filter:blur(8px);filter:blur(8px);position:absolute;height:12px;width:84%;border-radius:50%;z-index:-1;opacity:0;pointer-events:none;}/*!sc*/
.rJKsS:after{position:absolute;content:'';opacity:0;top:-1px;bottom:-1px;left:-1px;right:-1px;border-radius:8px;border:1px solid #FF42A5;}/*!sc*/
.rJKsS:hover{background:#111111;}/*!sc*/
.rJKsS:hover .game-info-tooltip{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}/*!sc*/
.rJKsS:hover:after,.rJKsS:hover:before{opacity:1;}/*!sc*/
.rJKsS:hover .overlay-hue{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}/*!sc*/
.rJKsS p{text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal;}/*!sc*/
.rJKsS .playing-overlay{position:absolute;top:30%;left:50%;-webkit-transform:translate(-50%,-15%);-ms-transform:translate(-50%,-15%);transform:translate(-50%,-15%);padding:6px calc(100% / 8);color:#FFFFFF;background:rgba(17,17,17,0.7);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-radius:24px;}/*!sc*/
data-styled.g77[id="sc-hmjpVf"]{content:"rJKsS,"}/*!sc*/
.cfgND{width:100%;z-index:1;}/*!sc*/
.cfgND button{display:none;width:100%;margin-top:6px;padding:7px;}/*!sc*/
data-styled.g78[id="sc-eLwHnm"]{content:"cfgND,"}/*!sc*/
.ckjtHD{width:100%;max-width:1550px;margin:auto;pointer-events:auto;}/*!sc*/
data-styled.g105[id="sc-hAcGzb"]{content:"ckjtHD,"}/*!sc*/
.gIMaPh{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items :center;-webkit-box-align :center;-ms-flex-align :center;align-items :center;gap:undefinedpx;}/*!sc*/
data-styled.g136[id="sc-kiIyQV"]{content:"gIMaPh,"}/*!sc*/
.VLBiF{width:400px;position:relative;padding:7px 8px 7px 12px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.1);border-radius:8px;}/*!sc*/
.VLBiF:focus-within{border:1px solid #FF339E;}/*!sc*/
@media only screen and (max-width:850px){.VLBiF{width:400px;max-width:100%;margin:auto;}}/*!sc*/
@media only screen and (max-width:567px) and (orientation:portrait){.VLBiF{width:100%;}}/*!sc*/
data-styled.g156[id="sc-jivBlf"]{content:"VLBiF,"}/*!sc*/
.cxoknX{font-family:inherit;width:100%;padding:0 16px;border:0;outline:none;background:transparent;line-height:24px;color:#FFFFFF;}/*!sc*/
.cxoknX::-webkit-input-placeholder{color:rgba(255,255,255,0.8);}/*!sc*/
.cxoknX::-moz-placeholder{color:rgba(255,255,255,0.8);}/*!sc*/
.cxoknX:-ms-input-placeholder{color:rgba(255,255,255,0.8);}/*!sc*/
.cxoknX::placeholder{color:rgba(255,255,255,0.8);}/*!sc*/
data-styled.g157[id="sc-hkgtus"]{content:"cxoknX,"}/*!sc*/
.OhrLN{cursor:pointer;text-transform:uppercase;margin-left:auto;color:#FFFFFF;}/*!sc*/
data-styled.g158[id="sc-bSqaIl"]{content:"OhrLN,"}/*!sc*/
.pmuaz{cursor:pointer;width:16px;height:16px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}/*!sc*/
.pmuaz.app-search{margin-left:auto;width:48px;height:48px;padding:14px;margin-right:-16px;}/*!sc*/
data-styled.g159[id="sc-jvvksu"]{content:"pmuaz,"}/*!sc*/
.huzIrA{display:inline-block;position:relative;height:32px;width:32px;}/*!sc*/
.huzIrA::before{content:'';position:absolute;height:100%;width:100%;border-radius:50%;border:2px solid #FFFFFF;border-bottom-color:rgba(255,255,255,0.4);-webkit-animation-name:cJiLXh;animation-name:cJiLXh;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}/*!sc*/
data-styled.g167[id="sc-dkqQuH"]{content:"huzIrA,"}/*!sc*/
.byZIWF{margin-left:4px;}/*!sc*/
data-styled.g210[id="sc-PZsNp"]{content:"byZIWF,"}/*!sc*/
.gxTjfO{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;max-width:1120px;}/*!sc*/
data-styled.g221[id="sc-eJRTFu"]{content:"gxTjfO,"}/*!sc*/
.cEtQyw{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;width:100%;padding-top:24px;border-top:1px solid rgba(255,255,255,0.1);}/*!sc*/
.cEtQyw div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:24px;}/*!sc*/
@media (max-width:870px){.cEtQyw{gap:12px;}.cEtQyw div{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;row-gap:12px;}.cEtQyw div a:nth-last-child(1){width:100%;}}/*!sc*/
.cEtQyw a{-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.cEtQyw a:hover{color:#FF42A5;}/*!sc*/
.cEtQyw p,.cEtQyw a{color:rgba(255,255,255,0.6);font-size:12px;text-align:center;}/*!sc*/
data-styled.g222[id="sc-fGoOlv"]{content:"cEtQyw,"}/*!sc*/
.bEqZyu{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:8px;}/*!sc*/
@media (max-width:870px){.bEqZyu{display:none;}}/*!sc*/
data-styled.g224[id="sc-iidyiZ"]{content:"bEqZyu,"}/*!sc*/
.cTJngI{-webkit-flex:3;-ms-flex:3;flex:3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-height:300px;row-gap:50px;}/*!sc*/
@media (max-width:870px){.cTJngI{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-height:500px;row-gap:32px;}.cTJngI > div{width:50%;}}/*!sc*/
data-styled.g225[id="sc-dYPfWK"]{content:"cTJngI,"}/*!sc*/
.fVioZS{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:16px;}/*!sc*/
.fVioZS label{font-weight:600;font-size:10px;line-height:normal;text-transform:uppercase;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;color:rgba(255,255,255,0.4);display:block;}/*!sc*/
.fVioZS ul{padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style-type:none;gap:16px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}/*!sc*/
.fVioZS ul li{padding:0;}/*!sc*/
.fVioZS ul li a,.fVioZS ul li span{cursor:pointer;color:rgba(255,255,255,0.8);font-weight:400;font-size:14px;-webkit-text-decoration:none;text-decoration:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:12px;}/*!sc*/
.fVioZS ul li a svg,.fVioZS ul li span svg{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);}/*!sc*/
.fVioZS ul li a:hover,.fVioZS ul li span:hover{color:#FF42A5;}/*!sc*/
data-styled.g227[id="sc-gA-DPUo"]{content:"fVioZS,"}/*!sc*/
.eykzQo{content-visibility:auto;position:relative;z-index:2;padding:40px 20px;overflow:hidden;}/*!sc*/
@media only screen and (max-width:768px) and (orientation:portrait){.eykzQo{padding:20px;}}/*!sc*/
.eykzQo > div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:24px;}/*!sc*/
data-styled.g228[id="sc-hxaKAp"]{content:"eykzQo,"}/*!sc*/
.ePnmCF{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px;border-bottom:1px solid rgba(255,255,255,0.1);margin:0;width:100%;padding:0 0 24px 0;}/*!sc*/
.ePnmCF li:first-child{display:none;}/*!sc*/
@media (max-width:870px){.ePnmCF{gap:12px;}.ePnmCF li:first-child{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.ePnmCF li a{gap:12px;}}/*!sc*/
data-styled.g229[id="sc-gfXuXe"]{content:"ePnmCF,"}/*!sc*/
.jnZnWH{color:currentcolor;font-size:12px;line-height:18px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;margin:0;font-weight:400;-webkit-text-decoration:none;text-decoration:none;color:#FFFFFF;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;}/*!sc*/
.jnZnWH:hover{-webkit-text-decoration:underline;text-decoration:underline;}/*!sc*/
.jnZnWH svg{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}/*!sc*/
data-styled.g230[id="sc-hcupDf"]{content:"jnZnWH,"}/*!sc*/
.hoIdkj{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
.hoIdkj:last-child .sc-hcupDf{color:rgba(255,255,255,0.4);pointer-events:none;}/*!sc*/
.hoIdkj:last-child svg{display:none;}/*!sc*/
data-styled.g231[id="sc-oXPCX"]{content:"hoIdkj,"}/*!sc*/
.jHpVWz{width:16px;height:16px;}/*!sc*/
data-styled.g232[id="sc-hLVXRe"]{content:"jHpVWz,"}/*!sc*/
.irzzPk{position:absolute;left:50%;top:12px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}/*!sc*/
@media only screen and (max-width:767px){.irzzPk{display:none;}}/*!sc*/
data-styled.g517[id="sc-fMEUvU"]{content:"irzzPk,"}/*!sc*/
.QhZrO{width:100vw;height:100vh;background:rgba(0,0,0,0.5);position:fixed;top:0px;left:0px;z-index:9999;display:none;}/*!sc*/
data-styled.g803[id="sc-iGVQaA"]{content:"QhZrO,"}/*!sc*/
.hZnpJh{width:84%;max-width:640px;height:auto;background:rgba(50,50,50,0.5);border:1px solid rgba(255,255,255,0.1);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-radius:12px;overflow:hidden;margin:50vh auto 0px;position:relative;-webkit-transform:translate(0px,-50%);-ms-transform:translate(0px,-50%);transform:translate(0px,-50%);}/*!sc*/
data-styled.g804[id="sc-fPXHGl"]{content:"hZnpJh,"}/*!sc*/
.kgrTLi{color:rgba(255,255,255,0.9);display:inline-block;margin:16px 28px 0px 16px;}/*!sc*/
data-styled.g805[id="sc-dJrorO"]{content:"kgrTLi,"}/*!sc*/
.ceorDu{color:rgba(255,255,255,0.6);margin:8px 4px 16px 16px;max-height:50vh;overflow-y:auto;padding-right:12px;}/*!sc*/
.ceorDu a{color:inherit;}/*!sc*/
.ceorDu::-webkit-scrollbar{display:block;width:4px;}/*!sc*/
.ceorDu::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.2);border-radius:10px;}/*!sc*/
data-styled.g806[id="sc-StfXz"]{content:"ceorDu,"}/*!sc*/
.gQYFaL{position:absolute;right:16px;top:16px;display:inline-block;cursor:pointer;color:#FFFFFF;background:transparent;border:none;}/*!sc*/
data-styled.g807[id="sc-hVTcrQ"]{content:"gQYFaL,"}/*!sc*/
.daErVH{width:100vw;height:100vh;background:rgba(0,0,0,0.5);position:fixed;top:0px;left:0px;z-index:9999;display:none;}/*!sc*/
data-styled.g808[id="sc-feUTXB"]{content:"daErVH,"}/*!sc*/
.eUrPxZ{width:84%;max-width:640px;height:auto;background:rgba(50,50,50,0.5);border:1px solid rgba(255,255,255,0.1);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-radius:12px;overflow:hidden;margin:50vh auto 0px;position:relative;-webkit-transform:translate(0px,-50%);-ms-transform:translate(0px,-50%);transform:translate(0px,-50%);}/*!sc*/
data-styled.g809[id="sc-iydlzS"]{content:"eUrPxZ,"}/*!sc*/
.faMoPO{color:rgba(255,255,255,0.9);display:inline-block;margin:16px 28px 0px 16px;}/*!sc*/
data-styled.g810[id="sc-fHfdfD"]{content:"faMoPO,"}/*!sc*/
.kiILsH{color:rgba(255,255,255,0.6);margin:8px 4px 16px 16px;max-height:50vh;overflow-y:auto;padding-right:12px;}/*!sc*/
.kiILsH a{color:inherit;}/*!sc*/
.kiILsH::-webkit-scrollbar{display:block;width:4px;}/*!sc*/
.kiILsH::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.2);border-radius:10px;}/*!sc*/
data-styled.g811[id="sc-loVHwX"]{content:"kiILsH,"}/*!sc*/
.kZdVdU{position:absolute;right:16px;top:16px;display:inline-block;cursor:pointer;color:#FFFFFF;background:transparent;border:none;}/*!sc*/
data-styled.g812[id="sc-hwygmi"]{content:"kZdVdU,"}/*!sc*/
.eJjSEF{background:rgba(102,102,102,0.2);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-radius:8px;margin-bottom:10px;font-weight:400;font-size:14px;line-height:150%;color:rgba(255,255,255,0.7);position:relative;}/*!sc*/
.eJjSEF::after{margin-left:5px;content:"";border-style:solid;border-color:initial;border-image:initial;border-width:0px 1px 1px 0px;display:inline-block;padding:3px;-webkit-transform:rotate(45deg) translateY(-50%);-ms-transform:rotate(45deg) translateY(-50%);transform:rotate(45deg) translateY(-50%);position:absolute;-webkit-transition:all 0.2s ease-in-out 0s;transition:all 0.2s ease-in-out 0s;right:16px;top:16px;}/*!sc*/
data-styled.g813[id="sc-embLYd"]{content:"eJjSEF,"}/*!sc*/
.fBjYsj{padding:12px 30px 12px 12px;font-weight:500;font-size:14px;line-height:150%;color:rgba(255,255,255,0.7);cursor:pointer;}/*!sc*/
data-styled.g814[id="sc-tEkNo"]{content:"fBjYsj,"}/*!sc*/
.iAxKHR{padding:0px 12px 12px;margin-top:-12px;display:none;}/*!sc*/
data-styled.g815[id="sc-kDSTOn"]{content:"iAxKHR,"}/*!sc*/
.cToyNP{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}/*!sc*/
.cToyNP .img-custom-wrap{position:relative;width:132px;height:132px;}/*!sc*/
.cToyNP .img-custom-wrap img{border-radius:12px;}/*!sc*/
.cToyNP img{border-radius:12px;}/*!sc*/
data-styled.g821[id="sc-kUWnIc"]{content:"cToyNP,"}/*!sc*/
.eImUxv{color:#FFFFFF;padding:0 20px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;}/*!sc*/
data-styled.g823[id="sc-jIukRC"]{content:"eImUxv,"}/*!sc*/
.khtWTa{margin-top:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}/*!sc*/
data-styled.g824[id="sc-kERfxD"]{content:"khtWTa,"}/*!sc*/
.gsDLuF{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding-right:24px;position:relative;}/*!sc*/
.gsDLuF::after{content:"";width:1px;height:16px;background-color:rgba(255,255,255,0.2);position:absolute;right:12px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}/*!sc*/
.gsDLuF img{width:16px;}/*!sc*/
data-styled.g825[id="sc-kjTzZs"]{content:"gsDLuF,"}/*!sc*/
.hSRUbo{color:#FFFFFF;margin-left:4px;}/*!sc*/
data-styled.g826[id="sc-lgquFt"]{content:"hSRUbo,"}/*!sc*/
.fKecLK{color:#FFFFFF;display:inline-block;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding-right:24px;position:relative;}/*!sc*/
.fKecLK::after{content:"";width:1px;height:16px;background-color:rgba(255,255,255,0.2);position:absolute;right:12px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}/*!sc*/
data-styled.g827[id="sc-iXrxiS"]{content:"fKecLK,"}/*!sc*/
.MxrVj{color:currentcolor;font-size:14px;line-height:21px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;margin:0;font-weight:400;color:#FFFFFF;-webkit-text-decoration:underline;text-decoration:underline;}/*!sc*/
data-styled.g828[id="sc-jTOrOT"]{content:"MxrVj,"}/*!sc*/
.gFzgwn{width:-webkit-max-content;width:-moz-max-content;width:max-content;position:relative;z-index:1;}/*!sc*/
.gFzgwn button h4{font-size:18px;}/*!sc*/
.gFzgwn:hover img{width:73px;height:73px;top:-24px;right:-21.5px;}/*!sc*/
data-styled.g829[id="sc-dJjNIA"]{content:"gFzgwn,"}/*!sc*/
.fcJhUu{color:rgba(255,255,255,0.8);}/*!sc*/
data-styled.g831[id="sc-gAcjFF"]{content:"fcJhUu,"}/*!sc*/
.emfLsc{color:rgba(255,255,255,0.7);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;max-width:80%;margin-left:auto;margin-right:auto;}/*!sc*/
.emfLsc a{color:rgba(255,255,255,0.7);}/*!sc*/
.emfLsc a:hover{color:#FFFFFF;}/*!sc*/
data-styled.g832[id="sc-cHEIuQ"]{content:"emfLsc,"}/*!sc*/
.eaNkUY{color:#FFFFFF;-webkit-text-decoration:underline;text-decoration:underline;text-transform:uppercase;padding:0 14px 0 0;border:none;background:transparent;cursor:pointer;position:relative;}/*!sc*/
.eaNkUY:hover{color:rgba(255,255,255,0.9);}/*!sc*/
.eaNkUY:not(:last-child):after{content:"";width:1px;height:12px;background-color:rgba(255,255,255,0.2);position:absolute;right:7px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}/*!sc*/
data-styled.g833[id="sc-fnAgPf"]{content:"eaNkUY,"}/*!sc*/
.AvqxB{color:#FFFFFF;-webkit-text-decoration:underline;text-decoration:underline;background:transparent;cursor:pointer;border:none;padding:0;}/*!sc*/
.AvqxB:hover{color:rgba(255,255,255,0.9);}/*!sc*/
data-styled.g834[id="sc-bvcFEq"]{content:"AvqxB,"}/*!sc*/
.hlEDVL{position:relative;z-index:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:16px;-webkit-transition:all 0.6s ease-out;transition:all 0.6s ease-out;height:297px;width:100%;}/*!sc*/
@media (max-width:768px){.hlEDVL{margin-bottom:100px;}}/*!sc*/
@media only screen and (max-height:720px){.hlEDVL.videoComplianceLayoutDesktop{margin:auto;}}/*!sc*/
.hlEDVL .fade-out-element{-webkit-transition:all 0.5s ease-out;transition:all 0.5s ease-out;}/*!sc*/
.hlEDVL .fade-out{opacity:0;}/*!sc*/
data-styled.g835[id="sc-fOZvWV"]{content:"hlEDVL,"}/*!sc*/
.loKlqc{position:absolute;width:100%;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;opacity:0;-webkit-transition:all 0.6s ease-out;transition:all 0.6s ease-out;}/*!sc*/
.loKlqc p{color:rgba(255,255,255,0.5);}/*!sc*/
data-styled.g836[id="sc-bWBUMg"]{content:"loKlqc,"}/*!sc*/
.mYBzA{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
data-styled.g837[id="sc-eCxtgv"]{content:"mYBzA,"}/*!sc*/
.iEHjrA{z-index:1;padding:12px 16px 24px;text-align:center;-webkit-transition:all 0.6s ease-out;transition:all 0.6s ease-out;position:absolute;bottom:0;opacity:1;}/*!sc*/
@media only screen and (max-height:720px){.iEHjrA.videoComplianceLayoutDesktop{position:static;padding-top:0;}}/*!sc*/
data-styled.g838[id="sc-JZRVG"]{content:"iEHjrA,"}/*!sc*/
.kprCgH{max-width:96vw;}/*!sc*/
.kprCgH ul{overflow:auto;}/*!sc*/
data-styled.g840[id="sc-gLnRUk"]{content:"kprCgH,"}/*!sc*/
.hIcNRB{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:8px;padding:0;margin:0;opacity:1;-webkit-transition:all 0.6s ease-out;transition:all 0.6s ease-out;max-width:96vw;}/*!sc*/
data-styled.g841[id="sc-gwfuxq"]{content:"hIcNRB,"}/*!sc*/
.gCgdnZ{border-radius:24px;background:rgba(255,255,255,0.1);-webkit-backdrop-filter:blur(60px);backdrop-filter:blur(60px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:4px 12px;color:rgba(255,255,255,0.8);font-size:10px;font-weight:400;line-height:16px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;white-space:nowrap;}/*!sc*/
data-styled.g842[id="sc-dFhmdb"]{content:"gCgdnZ,"}/*!sc*/
.gnLNhe{background:rgba(255,255,255,0.1);position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;-ms-overflow-style:none;width:336px !important;height:280px !important;min-height:280px !important;max-height:280px !important;}/*!sc*/
.gnLNhe::-webkit-scrollbar{display:none;}/*!sc*/
data-styled.g843[id="sc-kIHixs"]{content:"gnLNhe,"}/*!sc*/
.bcMUAA{color:rgba(255,255,255,0.5);position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:-1;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;}/*!sc*/
data-styled.g844[id="sc-hRJa-dd"]{content:"bcMUAA,"}/*!sc*/
.AzuHJ{width:336px;padding-top:6px;margin:0 10px 0 4px;}/*!sc*/
data-styled.g846[id="sc-kgdwZD"]{content:"AzuHJ,"}/*!sc*/
.hZqgib{color:rgba(255,255,255,0.7);text-align:center;margin-top:17px;}/*!sc*/
data-styled.g847[id="sc-fUhJUY"]{content:"hZqgib,"}/*!sc*/
.ToVDD{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:12px;min-width:70px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0;margin:10px 10px 0 0;visibility:visible;}/*!sc*/
.ToVDD li span{width:70px;height:70px;-webkit-flex:1;-ms-flex:1;flex:1;}/*!sc*/
data-styled.g848[id="sc-ddjBAJ"]{content:"ToVDD,"}/*!sc*/
.fIuPVW{color:#FFFFFF;}/*!sc*/
.fIuPVW .desktopErr{z-index:5;}/*!sc*/
@media (orientation:landscape){.fIuPVW .session-end.isMobile{background:radial-gradient( 32.85% 62.63% at 50% 30.49%, rgba(81,165,201,0.2) 0%,rgba(51,80,111,0) 100% ), radial-gradient( 28.93% 32.16% at 64.37% 56.79%,rgba(179,214,97,0.2) 0%, rgba(179,214,97,0) 100% ),radial-gradient( 29.7% 41.69% at 37.22% 60.32%,rgba(255,66,165,0.2) 0%, rgba(255,66,165,0) 100% ),#0b0223;height:100vh;width:100vw;position:fixed;}.fIuPVW .session-end.isMobile > div{position:fixed;background:none;background:none;height:calc(100% - 65px) !important;padding:24px;overflow:auto;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.fIuPVW .session-end.isMobile > div .copyright-footer{position:fixed;}}/*!sc*/
data-styled.g850[id="sc-hIQvCv"]{content:"fIuPVW,"}/*!sc*/
.hVFipG{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}/*!sc*/
data-styled.g854[id="sc-cvpDkg"]{content:"hVFipG,"}/*!sc*/
.dRIyaG{position:relative;}/*!sc*/
@media only screen and (max-width:1024px){.dRIyaG{height:calc(100vh - 220px);min-height:584px;padding:0 !important;}}/*!sc*/
@media (orientation:landscape){@media only screen and (max-width:768px){.dRIyaG{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;min-height:460px;}}}/*!sc*/
@media only screen and (min-width:1366px){.dRIyaG.videoComplianceLayoutDesktop{height:auto !important;}}/*!sc*/
data-styled.g855[id="sc-iChBrv"]{content:"dRIyaG,"}/*!sc*/
.itIFlS{-webkit-transition:all 0.6s ease-out;transition:all 0.6s ease-out;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;border-bottom:1px solid rgba(255,255,255,0.10);border-left:1px solid rgba(255,255,255,0.10);-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}/*!sc*/
.itIFlS #htmlFrame{width:100%;height:100%;margin:0;}/*!sc*/
.itIFlS #browse-games-container{height:100vh;width:calc(100vw - 320px) !important;background-color:#111;position:fixed;left:160px !important;padding-top:112px;}/*!sc*/
.itIFlS #browse-games-container .icon-cross-thin{top:80px;}/*!sc*/
@media (orientation:landscape){@media only screen and (max-width:768px){.itIFlS{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;min-height:460px;}}}/*!sc*/
data-styled.g856[id="sc-eJKagG"]{content:"itIFlS,"}/*!sc*/
.cvwcvZ{-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;}/*!sc*/
.cvwcvZ.thirdLayout{padding:0 10px;}/*!sc*/
data-styled.g858[id="sc-iWlOgI"]{content:"cvwcvZ,"}/*!sc*/
.iRwtVd{position:absolute;height:100%;width:100%;}/*!sc*/
.iRwtVd::before{z-index:1;content:'';position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transition:all 0.6s ease-out;transition:all 0.6s ease-out;background-color:rgba(0,0,0,0.7);}/*!sc*/
data-styled.g859[id="sc-geUzUn"]{content:"iRwtVd,"}/*!sc*/
.fkHPPG{width:100%;height:100%;object-fit:cover;position:relative;object-position:center top;}/*!sc*/
data-styled.g860[id="sc-cmwYJy"]{content:"fkHPPG,"}/*!sc*/
.eMKvdS{color:rgba(255,255,255,0.9);font-size:20px;font-style:normal;font-weight:500;line-height:1.5;margin:0;}/*!sc*/
.eMKvdS span,.eMKvdS a{position:relative;display:inline-block;-webkit-text-decoration:none;text-decoration:none;color:inherit;}/*!sc*/
.eMKvdS span::after,.eMKvdS a::after{content:"";background:linear-gradient(270deg,rgba(255,66,165,0.00) 0%,#FF42A5 19.43%,#FF42A5 99.48%);width:100%;height:2px;position:absolute;left:0;bottom:0;}/*!sc*/
data-styled.g862[id="sc-cDIRlZ"]{content:"eMKvdS,"}/*!sc*/
.eqBfdS{padding:48px 32px;background-color:#111;background:rgba(255,255,255,0.1);}/*!sc*/
data-styled.g863[id="sc-uJTPy"]{content:"eqBfdS,"}/*!sc*/
.eMGmxQ{max-width:1550px;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:24px;}/*!sc*/
@media only screen and (max-width:992px){.eMGmxQ{gap:24px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}}/*!sc*/
data-styled.g864[id="sc-brgOvz"]{content:"eMGmxQ,"}/*!sc*/
.kTERRt{height:258px;border:1px solid transparent;border-radius:8px;position:relative;overflow:hidden;}/*!sc*/
.kTERRt:before{content:'';bottom:-8.5px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background:#FF42A5;-webkit-filter:blur(8px);filter:blur(8px);position:absolute;height:12px;width:84%;border-radius:50%;z-index:-1;pointer-events:none;opacity:0;}/*!sc*/
@supports (aspect-ratio:auto){@media (max-width:567px){.kTERRt{height:auto;aspect-ratio:1 / 1.5;}}}/*!sc*/
data-styled.g865[id="sc-iiihCA"]{content:"kTERRt,"}/*!sc*/
.hElJcd{margin-top:8px;}/*!sc*/
data-styled.g867[id="sc-gVGeMa"]{content:"hElJcd,"}/*!sc*/
.cUDdVZ{color:rgba(255,255,255,0.7);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}/*!sc*/
data-styled.g868[id="sc-hScZsb"]{content:"cUDdVZ,"}/*!sc*/
.kJBfWM{color:#FFFFFF;font-weight:500;margin-top:4px;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal;}/*!sc*/
data-styled.g869[id="sc-fKVgfs"]{content:"kJBfWM,"}/*!sc*/
.cCJaRk{width:calc((100% - 120px) / 6);}/*!sc*/
@media (max-width:768px){.cCJaRk{width:calc(50% - 12px);}}/*!sc*/
data-styled.g870[id="sc-gHsaLt"]{content:"cCJaRk,"}/*!sc*/
.gkNIJw{width:100%;display:block;-webkit-text-decoration:none;text-decoration:none;}/*!sc*/
.gkNIJw:hover .sc-iiihCA{border-color:#FF42A5;}/*!sc*/
.gkNIJw:hover .sc-iiihCA:before{opacity:1;}/*!sc*/
data-styled.g871[id="sc-iBNCcx"]{content:"gkNIJw,"}/*!sc*/
.jrvCkI{padding:24px 20px 0;background-color:#111;position:relative;z-index:1;margin-bottom:-32px;padding-bottom:32px;}/*!sc*/
.dLFIkq{padding:24px 20px 0;position:relative;z-index:1;margin-bottom:-32px;padding-bottom:32px;}/*!sc*/
data-styled.g872[id="sc-eJqaRI"]{content:"jrvCkI,dLFIkq,"}/*!sc*/
.WZFsr{max-width:1550px;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:32px;}/*!sc*/
data-styled.g875[id="sc-dNodA-d"]{content:"WZFsr,"}/*!sc*/
.fhLofn{--grid-items-per-row:4.5;}/*!sc*/
@media (max-width:512px){.fhLofn{--grid-items-per-row:3;}}/*!sc*/
data-styled.g876[id="sc-lkmlOk"]{content:"fhLofn,"}/*!sc*/
.houYCT{padding:0 36px;text-align:center;}/*!sc*/
data-styled.g877[id="sc-cAMaJD"]{content:"houYCT,"}/*!sc*/
.cKrSVf{color:rgba(255,255,255,0.9);font-size:32px;font-style:normal;font-weight:600;line-height:1.5;margin:0;}/*!sc*/
.cKrSVf span{position:relative;padding-bottom:20px;display:inline-block;}/*!sc*/
.cKrSVf span::after{content:"";background:linear-gradient(90deg,rgba(255,66,165,0.00) 0%,#FF42A5 48.96%,rgba(255,66,165,0.00) 100%);width:100%;height:2px;position:absolute;left:0;bottom:0;}/*!sc*/
@media only screen and (max-width:992px){.cKrSVf span{font-size:20px;}}/*!sc*/
data-styled.g878[id="sc-jXKiXK"]{content:"cKrSVf,"}/*!sc*/
.fSRVbZ{max-width:1550px;margin:0 auto;}/*!sc*/
data-styled.g879[id="sc-bqbccV"]{content:"fSRVbZ,"}/*!sc*/
.eHIQPh{margin:32px 0 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:24px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;list-style-type:none;}/*!sc*/
@media only screen and (max-width:992px){.eHIQPh{font-size:24px;gap:16px;}}/*!sc*/
data-styled.g881[id="sc-cYAZoO"]{content:"eHIQPh,"}/*!sc*/
.dGuPnd img{width:32px;height:32px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}/*!sc*/
.dGuPnd a{font-weight:600;border-radius:8px;background:rgba(255,255,255,0.1);padding:6px 12px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;color:#FFFFFF;border:1px solid transparent;-webkit-text-decoration:none;text-decoration:none;width:100%;}/*!sc*/
.dGuPnd a:hover{border-color:#FF42A5;}/*!sc*/
.dGuPnd a span{width:calc(100% - 44px);display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}/*!sc*/
@media only screen and (max-width:992px){.dGuPnd{width:calc((100% - 32px) / 3);}}/*!sc*/
@media only screen and (max-width:768px){.dGuPnd{width:calc(50% - 8px);}}/*!sc*/
.jbZPqT{display:none;}/*!sc*/
.jbZPqT img{width:32px;height:32px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}/*!sc*/
.jbZPqT a{font-weight:600;border-radius:8px;background:rgba(255,255,255,0.1);padding:6px 12px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;color:#FFFFFF;border:1px solid transparent;-webkit-text-decoration:none;text-decoration:none;width:100%;}/*!sc*/
.jbZPqT a:hover{border-color:#FF42A5;}/*!sc*/
.jbZPqT a span{width:calc(100% - 44px);display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}/*!sc*/
@media only screen and (max-width:992px){.jbZPqT{width:calc((100% - 32px) / 3);}}/*!sc*/
@media only screen and (max-width:768px){.jbZPqT{width:calc(50% - 8px);}}/*!sc*/
data-styled.g882[id="sc-hCQUz"]{content:"dGuPnd,jbZPqT,"}/*!sc*/
.jNmLzN{margin-top:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}/*!sc*/
@media only screen and (max-width:576px){.jNmLzN button{width:100%;}}/*!sc*/
data-styled.g883[id="sc-hlcNoQ"]{content:"jNmLzN,"}/*!sc*/
.kZgVjC{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:32px;}/*!sc*/
@media only screen and (max-width:768px){.kZgVjC h3{text-align:center;}.kZgVjC h3 a::after{background:linear-gradient(270deg, rgba(255,66,165,0.00) 0%,#FF42A5 19.43%,#FF42A5 79.89%,rgba(255,66,165,0.00) 99.48%);}.kZgVjC h3 + div{margin-top:20px;}}/*!sc*/
data-styled.g887[id="sc-gzZZGg"]{content:"kZgVjC,"}/*!sc*/
.evHXwG{z-index:10;height:64px;padding:0 24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;position:-webkit-sticky;position:sticky;top:0;border:1px solid rgba(255,255,255,0.1);border-width:0 1px 1px 1px;opacity:1;-webkit-transition:all 0.6s ease-out;transition:all 0.6s ease-out;}/*!sc*/
.evHXwG::before{content:'';width:100%;height:100%;position:absolute;left:0;top:0;-webkit-backdrop-filter:blur(60px);backdrop-filter:blur(60px);z-index:-1;}/*!sc*/
.evHXwG .app-logo a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}/*!sc*/
.evHXwG .search-bar{position:relative;-webkit-transform:initial;-ms-transform:initial;transform:initial;left:0;top:0;}/*!sc*/
.evHXwG .search-bar > div{width:380px;}/*!sc*/
@media only screen and (max-width:768px){.evHXwG{height:56px;}}/*!sc*/
data-styled.g888[id="sc-dJbRlR"]{content:"evHXwG,"}/*!sc*/
.gyirEZ{cursor:pointer;position:relative;width:40px;height:40px;border:1px solid rgba(255,255,255,0.2);border-radius:8px;-webkit-transition:background 0.3s ease-out 0s;transition:background 0.3s ease-out 0s;margin-right:12px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}/*!sc*/
.gyirEZ:hover{background:rgba(255,255,255,0.1);}/*!sc*/
.gyirEZ svg{-webkit-transition:all 0.6s ease-out;transition:all 0.6s ease-out;}/*!sc*/
.gyirEZ::after{content:'';position:absolute;right:-12px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);height:20px;width:1px;background:rgba(255,255,255,0.2);}/*!sc*/
@media (max-width:992px){.gyirEZ{display:none;}}/*!sc*/
data-styled.g891[id="sc-jTcELn"]{content:"gyirEZ,"}/*!sc*/
@-webkit-keyframes fvtopB{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}/*!sc*/
@keyframes fvtopB{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}/*!sc*/
data-styled.g892[id="sc-keyframes-fvtopB"]{content:"fvtopB,"}/*!sc*/
@-webkit-keyframes cJiLXh{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}/*!sc*/
@keyframes cJiLXh{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}/*!sc*/
data-styled.g893[id="sc-keyframes-cJiLXh"]{content:"cJiLXh,"}/*!sc*/
</style></head><body><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PRM8BWR" height="0" width="0" style="display: none; visibility: hidden;"></iframe></noscript><div id="__next"><noscript style="margin: auto; border-radius: 20px; padding: 20px; text-align: center; font-size: x-large; color: #ffffff; background: rgba(0, 0, 0, 0.8);">You need to enable JavaScript to run this app.</noscript><section class="sc-hIQvCv fIuPVW"><header class="sc-dJbRlR evHXwG"><div class="sc-kiIyQV gIMaPh app-logo"><a href="https://now.gg"><img id="ng-logo" width="120" height="30" src="https://cdn.now.gg/nowgg-static/logo/nowgg-logo.svg" alt="now.gg Logo" style="width: 165px; height: 50px; margin: 0px;" fetchpriority="low"></a><i size="15" style="cursor: pointer; padding: 5px;" id="ng-info" class="sc-bdvvtL fVAfrk icon-info undefined"></i></div><div class="sc-fMEUvU irzzPk search-bar"><div class="sc-jivBlf VLBiF"><span class="sc-jvvksu pmuaz"><svg style="width: 100%; margin-right: 0.5vw; height: 100%;" xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.812 14.8257L20.9165 19.929C21.1587 20.1712 21.1587 20.5716 20.9165 20.8137C20.7954 20.9395 20.6324 21 20.4741 21C20.3157 21 20.1527 20.9348 20.0316 20.8137L14.9272 15.7104C13.353 17.0794 11.2991 17.9082 9.05423 17.9082C4.11744 17.9082 0.0981445 13.8898 0.0981445 8.9541C0.0981445 4.0184 4.11278 0 9.05423 0C13.991 0 18.0103 4.01375 18.0103 8.9541C18.0103 11.1984 17.1813 13.2519 15.812 14.8257ZM9.04962 1.25721C4.80678 1.25721 1.35102 4.70755 1.35102 8.95411C1.35102 13.2007 4.80678 16.6557 9.04962 16.6557C13.2971 16.6557 16.7482 13.196 16.7482 8.95411C16.7482 4.7122 13.2971 1.25721 9.04962 1.25721Z" fill="white"></path></svg></span><input id="search-box" type="text" title="Search premium games" placeholder="Search premium games" value autocomplete="off" class="sc-lbhJGD sc-hkgtus egClJc cxoknX"><p style="display: none;" class="sc-nVkyK sc-bSqaIl gmAqqm OhrLN">Clear</p></div></div><span class="sc-jvvksu pmuaz d-mobile app-search"><svg style="width: 100%; margin-right: 0; height: 100%;" xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.812 14.8257L20.9165 19.929C21.1587 20.1712 21.1587 20.5716 20.9165 20.8137C20.7954 20.9395 20.6324 21 20.4741 21C20.3157 21 20.1527 20.9348 20.0316 20.8137L14.9272 15.7104C13.353 17.0794 11.2991 17.9082 9.05423 17.9082C4.11744 17.9082 0.0981445 13.8898 0.0981445 8.9541C0.0981445 4.0184 4.11278 0 9.05423 0C13.991 0 18.0103 4.01375 18.0103 8.9541C18.0103 11.1984 17.1813 13.2519 15.812 14.8257ZM9.04962 1.25721C4.80678 1.25721 1.35102 4.70755 1.35102 8.95411C1.35102 13.2007 4.80678 16.6557 9.04962 16.6557C13.2971 16.6557 16.7482 13.196 16.7482 8.95411C16.7482 4.7122 13.2971 1.25721 9.04962 1.25721Z" fill="white"></path></svg></span><div style="margin-le...
