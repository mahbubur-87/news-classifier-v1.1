







var __IntegralASDiagnosticCall = (function() {
	try {
		var alreadySent = {};
		return function(code, err, config) {
			try {
				var gen = function(code, err, config) {
					var url = '//diag.adsafeprotected.com/js?';
					try {
						url += 'code:fwjs-diag-' + code;
						url += '&err:';
						if (err && err.message) {
							url += encodeURIComponent(err.message.toString().replace(/ /g, '-')).substring(0, 200);
						}
						if (config) {
							
							url += '&version:' + config.version || '';
							url += '&server:' + config.mn || '';
							url += '&mode:' + config.mode || '';
							url += '&forceAppend:' + config.forceAppend || '';
							url += '&asid:' + config.asid || '';
							url += '&anId:' + config.anId || '';
							url += '&advEntityId:' + config.advEntityId || '';
							url += '&pubEntityId:' + config.pubEntityId || '';
							url += '&mobOrTab:' + config.mobOrTab || '';
							url += '&app:' + config.app || '';
							url += '&mobAppWebview:' + config.mobAppWebview || '';
						}
						url += '&domless:' + __IASScope.isDomless;
					} catch (e) {
						url += '&diagx:' + (e && e.message ? e.message.toString().replace(/ /g, '-') : '');
					}
					return url;
				};

				var send = function(url) {
					if (__IASScope.isDomless && __IASOmidVerificationClient && __IASOmidVerificationClient.sendUrl) {
						__IASOmidVerificationClient.sendUrl(url);
					} else {
						var img = new Image();
						img.src = url;
					}
				};
				if (!alreadySent[code] && Math.random() < 0.01) {
					alreadySent[code] = true;
					send(gen(code, err, config));
				}
			} catch (e) {}
		};
	} catch (e) {
		return function() {};
	}
})();





try {

	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'true',
		version: '19.8.213',
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.5.5.js", main: "static.adsafeprotected.com/main.19.8.213.js"},
		protocol: 'https',
		jsref: "https:\/\/tpc.googlesyndication.com\/",
		asid: "a6d03851-d9af-11eb-a5a7-02556ee5b261",
		allowViewability: "true",
		jsFeatures: "viewabilityready,rattie,exch,usedtdomain,resolution,usetpl,idMap,offscreen,everySecond:1,slid,fm2:1,largeAd,chromeNativeIO,ios,ancestor,avmm,avgrn,swapids,pIntervals:10,usesca,bustediframe,impFailSafe,yieldmo,sfdetect,pmdetect,novidnodeerr:5,viewabilityOptimization,usehaps,customMetric,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,mrcAudit:1,bbs,bas,spg,exitOASRSEarly:1,encodeInvalidUrlChars,jsdiag1,jsdiag2",
		minimizeCalls: "false",
		adWidth: "",
		adHeight: "",
		forceAppend: "true",
		sp_imp_maxLength: 8000,
		sp_imp_jsInfo_minLength: 200,
		_onInViewMRC15: __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
		_onInViewMRC: __IntegralASConfig && __IntegralASConfig.onInViewMRC,
		_onMeasurable: __IntegralASConfig && __IntegralASConfig.onMeasurable,
		_onAPIResult: __IntegralASConfig && __IntegralASConfig.onAPIResult,
		_onInViewFull: __IntegralASConfig && __IntegralASConfig.onInViewFull,
		_onSuspicious: __IntegralASConfig && __IntegralASConfig.onSuspicious,
		_onInViewMRC5: __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
		reqquery: "",
		mode: "fwjsvid",
		requrl: "",
		dtBaseURL: "https:\/\/dt.adsafeprotected.com\/dt?advEntityId=699047",
		adsafeSrc: "https:\/\/pixel.adsafeprotected.com\/rfw\/st\/699047\/54509675\/skeleton.js?videoId=8f2b0897c690b92139e563238d2dfe68&xmapp=0&xmtp=v&xsId=b0dfb422-ccc5-4b6c-9c2a-c22eedbf8f61&adsafe_par=&logTestResults=false",
		tpiLookupURL: "",
		getTpl: "false",
		use100v: false,
		useBapiCallback: "",
		useViewabilityNotification: "",
		scriptUrl: "https:\/\/pixel.adsafeprotected.com\/fwjsvid\/st\/699047\/54509675\/skeleton.js?videoId=8f2b0897c690b92139e563238d2dfe68&xmapp=0&xmtp=v&xsId=b0dfb422-ccc5-4b",
		accountForSadImps: '',
		fwMonitoring: 'false',
		mn: "app37ie",
		mobOrTab: false,
		app: false,
		mobAppWebview: false,
		mobFwUrl: "",
		anId: '',
		advEntityId: '699047',
		pubEntityId: '54509675',
		videoId: '8f2b0897c690b92139e563238d2dfe68',
		rts: {},
		customViewability: [{ "id":"publ1", "tiv": 1, "minunit":1, "thresholds": [{"piv":100, "ub":242499}, {"piv":30, "lb":242500}], "mediaTypes":["display"], "distributionChannels":["web","app"] }, { "id":"publ2", "tiv": 2, "minunit":2, "thresholds": [{"piv":100, "ub": 242499}, {"piv":50, "lb": 242500}], "mediaTypes":["video"], "distributionChannels":["web","app"] }],
		serverSideAppDetection: [],
		groupm_native_publisher: false,
		integration: null,
		staticServer: '\/\/static.adsafeprotected.com\/',
		passback: '',
		iasProxyPartnerDomain: ''
	};

try {


	

	__IASScope = typeof window !== "undefined" ? window : this;
	
	__IntegralASConfig.isResolved = !!__IntegralASConfig.jsFeatures;
	__IntegralASConfig.staticMode = !__IntegralASConfig.isResolved;
	__IntegralASConfig.birthdate = new Date().getTime();
	__IntegralASConfig.perfBirth = (typeof __IASScope.performance !== "undefined" && typeof __IASScope.performance.now === 'function') ? __IASScope.performance.now() : null;




;(function(omidGlobal, factory, exports) {
	// CommonJS support
	if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(omidGlobal, exports);

		// If neither AMD nor CommonJS are used, export to a versioned name in the
		// global context.
	} else {
		var exports = {};
		var versions = ['1.3.6-iab2177'];
		var additionalVersionString = '';
		if (!!additionalVersionString) {
			versions.push(additionalVersionString);
		}

		factory(omidGlobal, exports);

		function deepFreeze(object) {
			for (var key in object) {
				if (object.hasOwnProperty(key)) {
					object[key] = deepFreeze(object[key]);
				}
			}
			return Object.freeze(object);
		}

		// Inject and freeze the exported components of omid.
		for (var key in exports) {
			if (exports.hasOwnProperty(key)) {
				if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
					// Define the top level property in the global scope
					Object.defineProperty(omidGlobal, key, {
//						value: {},       Removed trailing comma for build
						value: {}
					});
				}
				versions.forEach(function(version) {
					if (Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
						var frozenObject = deepFreeze(exports[key]);
						// Define the object exports keyed-off versions
						Object.defineProperty(omidGlobal[key], version, {
							get: function () {
								return frozenObject;
							},
//							enumerable: true,       Removed trailing comma for build
							enumerable: true
						});
					}
				});
			}
		}
	}
}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
	'use strict';
	var $jscomp = $jscomp || {};
	$jscomp.scope = {};
	$jscomp.arrayIteratorImpl = function(a) {
		var b = 0;
		return function() {
			return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
		};
	};
	$jscomp.arrayIterator = function(a) {
		return {next:$jscomp.arrayIteratorImpl(a)};
	};
	$jscomp.makeIterator = function(a) {
		var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
		return b ? b.call(a) : $jscomp.arrayIterator(a);
	};
	$jscomp.arrayFromIterator = function(a) {
		for (var b, c = []; !(b = a.next()).done;) {
			c.push(b.value);
		}
		return c;
	};
	$jscomp.arrayFromIterable = function(a) {
		return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
	};
	$jscomp.ASSUME_ES5 = !1;
	$jscomp.ASSUME_NO_NATIVE_MAP = !1;
	$jscomp.ASSUME_NO_NATIVE_SET = !1;
	$jscomp.SIMPLE_FROUND_POLYFILL = !1;
	$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
		var b = function() {
		};
		b.prototype = a;
		return new b;
	};
	$jscomp.underscoreProtoCanBeSet = function() {
		var a = {a:!0}, b = {};
		try {
			return b.__proto__ = a, b.a;
		} catch (c) {
		}
		return !1;
	};
	$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
		a.__proto__ = b;
		if (a.__proto__ !== b) {
			throw new TypeError(a + " is not extensible");
		}
		return a;
	} : null;
	$jscomp.inherits = function(a, b) {
		a.prototype = $jscomp.objectCreate(b.prototype);
		a.prototype.constructor = a;
		if ($jscomp.setPrototypeOf) {
			var c = $jscomp.setPrototypeOf;
			c(a, b);
		} else {
			for (c in b) {
				if ("prototype" != c) {
					if (Object.defineProperties) {
						var d = Object.getOwnPropertyDescriptor(b, c);
						d && Object.defineProperty(a, c, d);
					} else {
						a[c] = b[c];
					}
				}
			}
		}
		a.superClass_ = b.prototype;
	};
	var module$exports$omid$common$argsChecker = {assertTruthyString:function(a, b) {
			if (!b) {
				throw Error("Value for " + a + " is undefined, null or blank.");
			}
			if ("string" !== typeof b && !(b instanceof String)) {
				throw Error("Value for " + a + " is not a string.");
			}
			if ("" === b.trim()) {
				throw Error("Value for " + a + " is empty string.");
			}
		}, assertNotNullObject:function(a, b) {
			if (null == b) {
				throw Error("Value for " + a + " is undefined or null");
			}
		}, assertNumber:function(a, b) {
			if (null == b) {
				throw Error(a + " must not be null or undefined.");
			}
			if ("number" !== typeof b || isNaN(b)) {
				throw Error("Value for " + a + " is not a number");
			}
		}, assertNumberBetween:function(a, b, c, d) {
			(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
			if (b < c || b > d) {
				throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
			}
		}, assertFunction:function(a, b) {
			if (!b) {
				throw Error(a + " must not be truthy.");
			}
		}, assertPositiveNumber:function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
			if (0 > b) {
				throw Error(a + " must be a positive number.");
			}
		}};
	var module$exports$omid$common$VersionUtils = {}, module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
	module$exports$omid$common$VersionUtils.isValidVersion = function(a) {
		return /\d+\.\d+\.\d+(-.*)?/.test(a);
	};
	module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function(a, b) {
		a = a.split("-")[0].split(".");
		b = b.split("-")[0].split(".");
		for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
			var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
			if (d > e) {
				break;
			} else {
				if (d < e) {
					return !1;
				}
			}
		}
		return !0;
	};
	var module$exports$omid$common$ArgsSerDe = {}, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
	module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function(a, b) {
		return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
	};
	module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function(a, b) {
		return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
	};
	var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", LOADED:"loaded", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", MEDIA:"media", VIDEO:"video", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
			PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction", STATE_CHANGE:"stateChange"}, MediaEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ImpressionType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript",
			UNSPECIFIED:"unspecified", LOADED:"loaded", BEGIN_TO_RENDER:"beginToRender", ONE_PIXEL:"onePixel", VIEWABLE:"viewable", AUDIBLE:"audible", OTHER:"other"}, ErrorType:{GENERIC:"generic", VIDEO:"video", MEDIA:"media"}, AdSessionType:{NATIVE:"native", HTML:"html", JAVASCRIPT:"javascript"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{APP:"app", WEB:"web"},
		InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, CreativeType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", HTML_DISPLAY:"htmlDisplay", NATIVE_DISPLAY:"nativeDisplay", VIDEO:"video", AUDIO:"audio"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped"}, SupportedFeatures:{CONTAINER:"clid", VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll",
			POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY", OBSTRUCTIONS:"obstructions", OBSTRUCTION_CLASS:"obstructionClass", OBSTRUCTION_PURPOSE:"obstructionPurpose",
			OBSTRUCTION_REASON:"obstructionReason", PIXELS:"pixels"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
	var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
		this.guid = a;
		this.method = b;
		this.version = c;
		this.args = d;
	};
	module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
		return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] ||
			void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
	};
	module$exports$omid$common$InternalMessage.deserialize = function(a) {
		return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
	};
	module$exports$omid$common$InternalMessage.prototype.serialize = function() {
		var a = {};
		a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
		void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
		return a;
	};
	var module$exports$omid$common$Communication = function(a) {
		this.to = a;
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
	};
	module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
	};
	module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
		if (this.onMessage) {
			this.onMessage(a, b);
		}
	};
	module$exports$omid$common$Communication.prototype.serialize = function(a) {
		return JSON.stringify(a);
	};
	module$exports$omid$common$Communication.prototype.deserialize = function(a) {
		return JSON.parse(a);
	};
	module$exports$omid$common$Communication.prototype.isDirectCommunication = function() {
		return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
	};
	module$exports$omid$common$Communication.prototype.isCrossOrigin = function() {
	};
	var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", isOmidPresent:function(a) {
			try {
				return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
			} catch (b) {
				return !1;
			}
		}, declareOmidPresence:function(a) {
			a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" id="' + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '" name="') + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME +
				'"></iframe>'))));
		}, appendPresenceIframe_:function(a) {
			var b = a.document.createElement("iframe");
			b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
			b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
			b.style.display = "none";
			a.document.body.appendChild(b);
		}, isMutationObserverAvailable_:function(a) {
			return "MutationObserver" in a;
		}, registerMutationObserver_:function(a) {
			var b = new MutationObserver(function(c) {
				c.forEach(function(c) {
					"BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
				});
			});
			b.observe(a.document.documentElement, {childList:!0});
		}};
	var module$exports$omid$common$DirectCommunication = function(a) {
		module$exports$omid$common$Communication.call(this, a);
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
		this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
	};
	$jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
	module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.to : b;
		if (!b) {
			throw Error("Message destination must be defined at construction time or when sending the message.");
		}
		b.handleExportedMessage(a.serialize(), this);
	};
	module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(a, b) {
		module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
	};
	module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function() {
		return !1;
	};
	var module$exports$omid$common$eventTypedefs = {};
	var module$exports$omid$common$exporter = {};
	function module$contents$omid$common$exporter_getOmidExports() {
		return "undefined" === typeof omidExports ? null : omidExports;
	}
	function module$contents$omid$common$exporter_getOrCreateName(a, b) {
		return a && (a[b] || (a[b] = {}));
	}
	module$exports$omid$common$exporter.packageExport = function(a, b, c) {
		if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
			a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
		}
	};
	var module$exports$omid$common$guid = {generateGuid:function() {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
				var b = 16 * Math.random() | 0;
				a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
				return a;
			});
		}};
	var module$exports$omid$common$logger = {error:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
				throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(b))));
			}, function() {
				return console.error.apply(console, $jscomp.arrayFromIterable(b));
			});
		}, debug:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
			}, function() {
				return console.error.apply(console, $jscomp.arrayFromIterable(b));
			});
		}};
	function module$contents$omid$common$logger_executeLog(a, b) {
		"undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
	}
	;var module$exports$omid$common$OmidGlobalProvider = {}, module$contents$omid$common$OmidGlobalProvider_globalThis = eval("this");
	function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
		if ("undefined" !== typeof omidGlobal && omidGlobal) {
			return omidGlobal;
		}
		if ("undefined" !== typeof global && global) {
			return global;
		}
		if ("undefined" !== typeof window && window) {
			return window;
		}
		if ("undefined" !== typeof module$contents$omid$common$OmidGlobalProvider_globalThis && module$contents$omid$common$OmidGlobalProvider_globalThis) {
			return module$contents$omid$common$OmidGlobalProvider_globalThis;
		}
		throw Error("Could not determine global object context.");
	}
	module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
	var module$exports$omid$common$windowUtils = {};
	function module$contents$omid$common$windowUtils_isValidWindow(a) {
		return null != a && "undefined" !== typeof a.top && null != a.top;
	}
	module$exports$omid$common$windowUtils.isCrossOrigin = function(a) {
		if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
			return !1;
		}
		try {
			if ("undefined" === typeof a.location.hostname) {
				return !0;
			}
			module$contents$omid$common$windowUtils_isSameOriginForIE(a);
		} catch (b) {
			return !0;
		}
		return !1;
	};
	function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
		return "" === a.x || "" !== a.x;
	}
	module$exports$omid$common$windowUtils.resolveGlobalContext = function(a) {
		"undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
		return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
	};
	module$exports$omid$common$windowUtils.resolveTopWindowContext = function(a) {
		return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
	};
	module$exports$omid$common$windowUtils.evaluatePageUrl = function(a) {
		if (!module$contents$omid$common$windowUtils_isValidWindow(a)) {
			return null;
		}
		try {
			var b = a.top;
			return (0,module$exports$omid$common$windowUtils.isCrossOrigin)(b) ? null : b.location.href;
		} catch (c) {
			return null;
		}
	};
	var module$exports$omid$common$PostMessageCommunication = function(a, b) {
		b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
		module$exports$omid$common$Communication.call(this, b);
		var c = this;
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
		a.addEventListener("message", function(a) {
			if ("object" === typeof a.data) {
				var b = a.data;
				module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
			}
		});
	};
	$jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
	module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(a) {
		return !!(a && a.addEventListener && a.postMessage);
	};
	module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.to : b;
		if (!b) {
			throw Error("Message destination must be defined at construction time or when sending the message.");
		}
		b.postMessage(a.serialize(), "*");
	};
	module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function() {
		return this.to ? (0,module$exports$omid$common$windowUtils.isCrossOrigin)(this.to) : !0;
	};
	var module$exports$omid$common$Rectangle = function(a, b, c, d) {
		this.x = a;
		this.y = b;
		this.width = c;
		this.height = d;
	};
	var module$exports$omid$common$serviceCommunication = {}, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omidVerificationProperties", "serviceWindow"];
	function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
		return b.reduce(function(a, b) {
			return a && a[b];
		}, a);
	}
	function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
		if (!(0,module$exports$omid$common$windowUtils.isCrossOrigin)(b)) {
			try {
				var e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
				if (e) {
					return new module$exports$omid$common$DirectCommunication(e);
				}
			} catch (f) {
			}
		}
		return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
	}
	function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
		b = $jscomp.makeIterator(b);
		for (var e = b.next(); !e.done; e = b.next()) {
			if (e = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e.value, c, d)) {
				return e;
			}
		}
		return null;
	}
	module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = function(a, b, c) {
		c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
		var d = [a, (0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a)];
		b && d.unshift(b);
		return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
	};
	module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = function(a, b) {
		b = void 0 === b ? module$exports$omid$common$DetectOmid.isOmidPresent : b;
		var c = [], d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
		d && c.push(d);
		c.push((0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a));
		return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
	};
	var module$exports$omid$common$VastProperties = function(a, b, c, d) {
		this.isSkippable = a;
		this.skipOffset = b;
		this.isAutoPlay = c;
		this.position = d;
	};
	module$exports$omid$common$VastProperties.prototype.toJSON = function() {
		return {isSkippable:this.isSkippable, skipOffset:this.skipOffset, isAutoPlay:this.isAutoPlay, position:this.position};
	};
	var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.3.6-iab2177"};
	var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version, module$contents$omid$verificationClient$VerificationClient_EventCallback;
	function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
		var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
		return a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null;
	}
	var module$exports$omid$verificationClient$VerificationClient = function(a) {
		if (this.communication = a || (0,module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication)((0,module$exports$omid$common$windowUtils.resolveGlobalContext)())) {
			this.communication.onMessage = this.handleMessage_.bind(this);
		} else {
			if (a = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) {
				this.omid3p = a;
			}
		}
//----------this.remoteIntervals_ = this.remoteTimeouts_ = 0;
		this.callbackMap_ = {};
		this.imgCache_ = [];
		this.injectionId_ = (a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties) ? a.injectionId : void 0;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
		return !(!this.communication && !this.omid3p);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		this.omid3p ? this.omid3p.registerSessionObserver(a, b, this.injectionId_) : this.sendMessage_("addSessionListener", a, b, this.injectionId_);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("eventType", a);
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", b);
		this.omid3p ? this.omid3p.addEventListener(a, b) : this.sendMessage_("addEventListener", b, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function(a, b, c) {
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
		module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function(a) {
			a && b ? b() : !a && c && c();
		}, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function(a, b, c) {
		var d = this, e = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
		this.imgCache_.push(e);
		var f = function(a) {
			var b = d.imgCache_.indexOf(e);
			0 <= b && d.imgCache_.splice(b, 1);
			a && a();
		};
		e.addEventListener("load", f.bind(this, b));
		e.addEventListener("error", f.bind(this, c));
		e.src = a;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function(a, b, c) {
		var d = this;
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
		module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function(e, f) {
			e ? (d.evaluateJavaScript_(f, a), b()) : (module$exports$omid$common$logger.error("Service failed to load JavaScript resource."), c());
		}, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function(a, b, c) {
		var d = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document, e = d.body;
		d = d.createElement("script");
		d.onload = b;
		d.onerror = c;
		d.src = a;
		d.type = "application/javascript";
		e.appendChild(d);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function(a, b) {
		try {
			eval(a);
		} catch (c) {
			module$exports$omid$common$logger.error('Error evaluating the JavaScript resource from "' + b + '".');
		}
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
		if (this.hasTimeoutMethods_()) {
			return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(a, b);
		}
//----------var c = this.remoteTimeouts_++;
		var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
		this.sendMessage_("setTimeout", a, c, b);
		return c;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function(a) {
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeoutId", a);
		this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
		if (this.hasIntervalMethods_()) {
			return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(a, b);
		}
//----------var c = this.remoteIntervals_++;
		var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
		this.sendMessage_("setInterval", a, c, b);
		return c;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function(a) {
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("intervalId", a);
		this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function() {
		return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function() {
		return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function(a, b) {
		b = a.method;
		var c = a.guid;
		a = a.args;
		if ("response" === b && this.callbackMap_[c]) {
			var d = (0,module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, a);
			this.callbackMap_[c].apply(this, d);
		}
		"error" === b && window.console && module$exports$omid$common$logger.error(a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function(a, b) {
		for (var c = [], d = 1; d < arguments.length; ++d) {
			c[d - 1] = arguments[d];
		}
		this.sendMessage_.apply(this, [a, null].concat($jscomp.arrayFromIterable(c)));
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function(a, b, c) {
		for (var d = [], e = 2; e < arguments.length; ++e) {
			d[e - 2] = arguments[e];
		}
		this.communication && (e = (0,module$exports$omid$common$guid.generateGuid)(), b && (this.callbackMap_[e] = b), d = new module$exports$omid$common$InternalMessage(e, "VerificationService." + a, module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, (0,module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, d)), this.communication.sendMessage(d));
	};
	(0,module$exports$omid$common$exporter.packageExport)("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);

}, typeof exports === 'undefined' ? undefined : exports));



} catch(e) {
	__IntegralASDiagnosticCall('thirdparty', e);
}






	
	__IASScope.isDomless = typeof window === "undefined";
	__IASOmidVerificationClient = { isSupported: function () { return false; } };

	if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
		try {
			__IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.3.6-iab2177'](); //try standard in-browser instantiation
		}
		catch(e) {
			try {
				__IASOmidVerificationClient = new __IASScope.OmidVerificationClient(); //try domless version which has no version
			}
			catch(e) {
			}
		}
	}

	__IntegralASConfig.useFIF = (__IASScope && !!__IASScope.__IntegralASUseFIF) && __IntegralASConfig.mode === 'jload';
	__IntegralASConfig.adRefreshThreshold = __IASScope && __IASScope.__IntegralASAdRefreshThreshold;




__IntegralASConfig.getContextNode = function(win, topWin) {
	'use strict';

	if (__IASScope.isDomless) {
		return;
	}
	if (__IntegralASConfig.useFIF) {
		return __IASScope.frameElement; // Early exit if using FIF
	}

	if (document.currentScript) {
		return document.currentScript;
	}
	
	var tempScript,
		scripts = document.getElementsByTagName('script'),
		result = scripts[scripts.length - 1],
		scriptIndex = scripts.length,
		scriptUrl = __IntegralASConfig.scriptUrl;

	try {
		
		while (--scriptIndex >= 0) {
			tempScript = scripts[scriptIndex];
			if (
				tempScript.src &&
				tempScript.src.indexOf(scriptUrl) === 0 &&
				tempScript.getAttribute('data-ias-script-tag') === null
			) {
				result = tempScript;
				tempScript.setAttribute('data-ias-script-tag', 'found');
				break;
			}
		}
	} catch (e) {} // TODO: maybe a jsDiagnostic?

	return result;
};

__IntegralASConfig.contextNode = __IASScope.isDomless ? undefined : __IntegralASConfig.getContextNode(window, top);





__IntegralASConfig.perfFactory = function() {
	'use strict';

	var _marks = {};
	var START_CODE = 'A';
	var END_CODE = 'Z';

	function _addMark(codeName, time) {
		
		_marks[codeName] = time;
	}

	function mark(codeName) {
		_addMark(codeName, Math.round(__IASScope.performance.now()));
	}

	function markStart(baseName) {
		mark(baseName + START_CODE);
	}

	function markEnd(baseName) {
		mark(baseName + END_CODE);
	}

	function markResource(baseName, url) {
		var entry, entries;
		entries = __IASScope.performance.getEntriesByName(url);
		if (entries && entries.length) {
			entry = entries[entries.length - 1];
			if (entry.startTime > 0 && entry.responseEnd > 0) {
				_addMark(baseName + START_CODE, Math.round(entry.startTime));
				
				_addMark(baseName + END_CODE, Math.round(entry.responseEnd));
			}
		}
	}

	function getData() {
		return _marks;
	}

	function getStart(baseName) {
		return _marks[baseName + START_CODE];
	}

	function getEnd(baseName) {
		return _marks[baseName + END_CODE];
	}

	function noop() {}

	function setNoops() {
		_addMark = noop;
		mark = noop;
		markStart = noop;
		markEnd = noop;
		markResource = noop;
	}

	function isFunc(obj) {
		return typeof obj === 'function';
	}

	function _init() {
		var canUsePerformanceAPIs = false;
		var PERF_MARK_BOOTSTRAPPER_EXECUTION = 'be';
		var PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD = 'bd';
		var PERF_MARK_MAIN_SCRIPT_DOWNLOAD = 'md'; // note: this code is intentionally the same as the one in globalConstants.js
		var downloadMark;

		try {
			canUsePerformanceAPIs =
				__IASScope.performance &&
				isFunc(__IASScope.performance.getEntriesByName) &&
				isFunc(__IASScope.performance.now) &&
				__IntegralASConfig.perfBirth !== null; // initialized to null or a time in jsAddOns1-birthdate.js

			if (canUsePerformanceAPIs) {
				downloadMark = __IntegralASConfig.jsDoSplit
					? PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD
					: PERF_MARK_MAIN_SCRIPT_DOWNLOAD;

				markResource(downloadMark, __IntegralASConfig.scriptUrl); // in split mode, this captures download time for the bootstrapper script, in bundled mode, the bundled/main script
				_addMark(PERF_MARK_BOOTSTRAPPER_EXECUTION + START_CODE, Math.round(__IntegralASConfig.perfBirth)); // put the birthdate that we already captured into our list of marks
				markEnd(PERF_MARK_BOOTSTRAPPER_EXECUTION); // roughly the end time of execution for the bootstrapper script in split mode, in bundled mode, end of the bootstrapper part of the script and start of the module definition part
			} else {
				setNoops();
			}
		} catch (err) {
			// TODO: remove if we never get here?
			setNoops();
			if (isFunc(__IASScope.__IntegralASDiagnosticCall)) {
				__IASScope.__IntegralASDiagnosticCall('perf', err, __IntegralASConfig);
			}
		}
	}

	_init();

	return {
		mark: mark,
		markStart: markStart,
		markEnd: markEnd,
		markResource: markResource,
		getData: getData,
		getStart: getStart,
		getEnd: getEnd
	};
};
__IntegralASConfig.perf = __IntegralASConfig.perfFactory();





} catch(err) {
	__IntegralASConfig = {};
	__IntegralASDiagnosticCall('bootstrapper', err);
}
__IntegralASConfig.initVideo=function(l,w,J){function ka(h){if(!l.executedContinueMain){l.executedContinueMain=!0;var a;l.perf.markStart(la);bb(l).verifyContextNode();a=cb();var b=a.mAdTalk,c=a.iOutput,d=a.mErrors,e=a.mAncestorOrigins,f=a.mBrowser,p=a.mPageUrls,m=a.mFeatures,q=t,u=a.renderDetector,v,y,A;l.perf.markStart(ma);l.b11="1"===l.adHeight&&"1"===l.adWidth?"true":"false";l.cnod=l.contextNode?"true":"false";n.getAggregator().trigger("addOutputItem",{output:h?"1":"0"},"nbld",{type:k.IMPRESSION_EVENT});
n.getAggregator().trigger("addOutputItem",{output:l.mainBirthdate},"mtim",{type:k.IMPRESSION_EVENT});var x;try{b.isApplicable(t)&&(b.start(),c.addItem(b.getFrameMap(),"fm"),m.on("fm2")&&c.addItem(b.getFrameMapIncludingPeerCase(),"fm2"),m.on("idMap")&&(x=b.getIdMap())&&c.addItem(x,"idMap"))}catch(H){d.add(k.ERROR_CODES.ADTALK_GENERAL)}try{e.isApplicable(f,m,q)&&e.start(),A=p.detectTopURL(),m.on("exch")&&(v=(new db).createInstance(d,c),v.parse(A)),y=eb(),y.isApplicable(m)&&y.start(m),q.usesGroupMCustomMetric()&&
fb(),u.start()}catch(O){d.add(k.ERROR_CODES.IMPRESSION_LEADUP)}l.perf.markEnd(ma);h=A;b=a.mVideo;try{gb(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability).send(h),g.isFunction(b.triggerInitializationEvents)&&b.triggerInitializationEvents()}catch(C){__IntegralASDiagnosticCall("impsend",C,l)}h=a.mBrowser;b=a.mIds;c=a.mViewability;d=a.mFeatures;e=a.mComm;f=a.mDataTransfer;p=a.mErrors;m=a.iOutput;q=a.loopDelay;u=a.mAdTalk;v=a.viewabilityMeasurement;a=a.mAncestorOrigins;y=t;try{l.perf.markStart(na);
var r=hb();r.start();r.addFieldTypes([k.DT_SLOT.IM,k.DT_SLOT.FF,k.DT_SLOT.ENVIRONMENT,k.DT_SLOT.FF_EXP]);var s=jb(h,b,c);s.isApplicable(d)&&s.start();var F;d.bootstrapOn("getTpl")&&d.on("usetpl")&&(F=kb(e,f,p,b,m),F.init());lb(m,q,u,p,d,e,f,b,a);v&&v.start&&v.start();y.isDomless()||mb().start(["sca","xsca","rsrch"],d);nb();n.runTier(k.TIERS.VIEWABILITY);var G=ob();G.isApplicable(d)&&(G.start(),Q.recordBlockingTime(),l.perf.mark(pb),Q.setupOnLoadTracking(),Q.setupBrowserDelayTracking());l.perf.markEnd(na)}catch(R){p.add(k.ERROR_CODES.POST_IMPRESSION)}l.perf.markEnd(la)}}
function qb(h,a,b,c,d,e,f,p,m,q){try{l.perf.markStart(oa),l.tpiLookupURL&&rb(f,p).init(l.tpiLookupURL),t.isDomless()||q.isStarted()&&q.sendOriginList(),n.runAll(),r.execAtEndOfThread(function(){var e;try{l.perf.markStart(pa);e={output:(new Date).getTime()-d};h.addItem(e,"sinceFw",{type:k.DT_CODES.ADTALK});g.isDef(a.loopStarted())&&h.addItem({output:a.loopStarted()},"readyFired",{type:k.DT_CODES.ADTALK});l.perf.markEnd(pa);var f,p;l.isSplitMode&&(p=l.protocol+"://"+l.sp_cdnScripts.main,l.perf.markResource(qa,
p));l.impUrl&&l.perf.markResource(sb,l.impUrl);f=l.perf.getData();n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"prf",g(f).toION());b.isApplicable(t)&&b.sendAdTalkCall()}catch(m){c.add(k.ERROR_CODES.ADTALK_DELAY)}}),l.perf.markEnd(oa)}catch(u){c.add(k.ERROR_CODES.EVENT_LOOP_ONE)}}function tb(h){var a=new ub(h,t),b=new vb,c=new wb(h,t),d=xb(h,t),e=(new yb(l,t,h)).resolve(),f=[a],p=[];d.applies()&&f.push(d);c.applies()&&f.push(c);b.applies(h,t)&&f.push(b);g(e).each(function(a,b){f.push(new zb(b,
t));p.push(b.id)});0<p.length&&(n.getAggregator().trigger("addOutputItem",{output:p.join(".")},"scm",{type:k.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:p},"metricIdList",{type:k.DT_CODES.UNLOAD,asION:!0}));return f}function Ab(h,a){return!t.isVideo()||t.isAvid()||t.isOmid()||t.isInMobiMraidVideo()?{}:Bb(l.videoId,h,a)}function cb(){var h,a,b,c,d,e,f,p,m={};l.perf.markStart(ra);var q=n.getAggregator();Cb();m.mFeatures=q.request("features");m.mFeatures||(m.mFeatures=q.provide("features",
sa()));l.integration&&m.mFeatures.setReportedBootstrapFeatures("intblk","integration");l.autotagSizeSet&&m.mFeatures.setReportedBootstrapFeatures("ats","autotagSizeSet");l.encodeInvalidUrlChars=m.mFeatures.on("encodeInvalidUrlChars");q.provide("mobileApp",function(){return h=h||new Db(m.mFeatures)});q.provide("avidJsClient",function(){return a=a||new Eb(r.getWindow())});q.provide("context",t);m.mBrowser=q.provide("browser",(new Fb).createInstance());m.mErrors=q.request("mErrors");m.mIds=q.provide("ids",
Gb());m.iOutput=Hb(q);q.request("mJsonp");m.mComm=q.request("mComm");m.viewabilityMeasurement=(new Ib(Jb(m.mIds),m.mFeatures,m.mBrowser)).create();c=q.request("omidAdSessionContext");Kb(c,q);m.mFeatures.on("swapids")&&(l.oid=l.asid,l.asid=m.mIds.unq);m.mAdTalk=(new Lb).createInstance(m.mFeatures);b=Mb();c=Nb(q);d=q.provide("mPage",(new Ob).createInstance());m.mAncestorOrigins=Pb();m.mPageUrls=q.provide("pageUrls",(new Qb).createInstance(m.mAncestorOrigins,r));e=q.provide("mScreenEvents",Rb());q.provide("ieXDomainViewability",
Sb(m.mBrowser));f=Tb(m.mBrowser);p=Ab(m.mFeatures,e);m.mVideo=q.provide("video",p);Ub(Vb.build());f=(new Wb).createInstance(m.mErrors,f,m.mFeatures);d=(new Xb).createInstance(f,m.mErrors,d,t);p=q.provide("jobFactory",Yb());m.mDataTransfer=Zb(f,m.mErrors,m.mFeatures,m.mIds,m.iOutput,m.mBrowser,e,b);b=$b(m.mErrors,m.mFeatures,q,c);m.mMode=ac(b,m.mFeatures,m.viewabilityMeasurement.isImmediate());m.mViewability=q.provide("viewability",bc(B(),m.viewabilityMeasurement,m.mBrowser,m.mDataTransfer,m.mFeatures,
q,m.iOutput,d,e,m.mVideo));cc(m.mFeatures,m.mViewability,c,p);m.loopDelay=ta();m.renderDetector=dc();m.mDataTransfer.setViewabilityMod(m.mViewability);l.perf.markEnd(ra);return m}function ec(h){var a=h&&h.sca,b=h&&h.xsca,c=h&&h.w,d=h&&h.h;return function(e){e="string"===typeof e?JSON.parse(e):e;if(Object.assign)Object.assign(l,e);else for(var f in e)l[f]=e[f];l.isResolved=!0;l.sp_cdnScripts={sca:a,xsca:b};c&&d&&(l.adWidth=c,l.adHeight=d,l.autotagSizeSet=!0);ka(l.isNewBuild)}}function Cb(){var h,a,
b;b=n.getAggregator().request("omidAdSessionContext");h=b.app&&b.isDisplay&&!b.isWeb;(a=l.mobFwUrl&&-1<l.mobFwUrl.indexOf("/blocking/"))&&b.isLimitedSandbox&&"1"===l.adWidth&&"1"===l.adHeight&&(b.isLimitedSandbox=!1);h&&a&&(b.delayingViewabilityEvents=!0);if("app"===b.environment||!0===l.mobAppWebview)l.mobOrTab=!0}function Kb(h,a){if(h&&h.queuedOutputItems)for(var b=0;b<h.queuedOutputItems.length;b++)a.trigger("addOutputItem",{output:h.queuedOutputItems[b].value},h.queuedOutputItems[b].code,{type:"impression"})}
function cc(h,a,b,c){var d=tb(h);n.getAggregator().provide("viewabilityDefinitions",d);return g(d).map(fc(h,a,b,c))}function lb(h,a,b,c,d,e,f,p,m){var q;"true"!==l.minimizeCalls&&(q=(new Date).getTime(),r.execAtEndOfThread(function(){qb(h,a,b,c,q,d,e,f,p,m)}))}function ua(h){if(l.isResolved)ka(l.isNewBuild);else{if("string"===typeof h)try{h=JSON.parse(h)}catch(a){}var b=h&&h.host||"https://jsconfig.adsafeprotected.com",c=h&&h.config;c&&(b=b+"/jsconfig"+c+(l.adSessionId?"&adSessionId="+l.adSessionId:
""),n.getAggregator().trigger("jsonp",b,ec(h),!1,"cbName"))}}function fc(h,a,b,c){return function(d,e){var f,p,m;f=va(e,a);var q=gc(b,h,e.rts).getCallbacks(),g=wa(c.createPingJobs(e.type,e.timeInViewThresholds,q,e.metricId));e.sendOtherwiseInViewSignal&&(m=va(e,a,e.sendOtherwiseInViewSignal),p=wa(c.createPingJobs(e.type,e.timeInViewThresholds,q,e.metricId,e.sendOtherwiseInViewSignal)));e.rtsCallbacks=q;e.thresholdType===k.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?f=hc(f,e,g,t.isVideo()):
(f=xa(f,W(e.minUnit),g),e.sendOtherwiseInViewSignal&&(p=xa(m,W(e.minUnit),p,e.sendOtherwiseInViewSignal),p.start()));f.start();return f}}function ic(h){var a,b,c;l.mainBirthdate=l.hasOwnProperty("birthdate")?(new Date).getTime()-l.birthdate:-1;l.perf.markStart(ya);l.isNewBuild=h;h=[jc,kc,lc,mc,nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc];for(a=0;a<h.length;a+=1)n(h[a].name,h[a].dependencies,h[a].creator,h[a].settings);n.startSystem();h=n.getAggregator();h.provide({omidAdSessionContext:{}});h.provide({omidAdSessionVerificationParameters:{}});
l.isResolved&&h.provide("features",sa());a=yc();b=za();c=(new zc).createInstance(a,b);h.provide({mErrors:a,mJsonp:b,mComm:c});a=__IASOmidVerificationClient;h.provide({omidVerificationClient:a});h=[{environment:aa(a),adSessionReadyStrategy:Ac(a)},{environment:Bc(),adSessionReadyStrategy:Cc()}];(new Dc(h)).resolve().adSessionReadyStrategy.start();l.perf.markEnd(ya)}var Aa={};if(Object.assign)l=Object.assign({},l);else{for(var Ba in l)Aa[Ba]=l[Ba];l=Aa}var g=function(h){return new E(h)},E=function(h){this.iterable=
h};E.prototype.isObj=function(h){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return h?a:b};E.prototype.isArray=function(){return this.iterable instanceof Array};E.prototype.isEmpty=function(h){return 0===this.keys(h).length};E.prototype.each=function(h,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)h(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&h(c,b[c])};E.prototype.map=function(h,a){var b=[];this.each(function(c,d){var e=
h(c,d);if(void 0!==e||a)b[b.length]=e});return b};E.prototype.stringify=function(h,a){a=a||",";var b=[];this.each(function(a,d){var e=h(a,d);g.isDef(e)&&b.push(e)});return b.join(a)};E.prototype.toION=function(h,a){var b,c="[",d="]";a=a||0;h=h||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return g(c).toION(h,a)}):(c="{",d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),
m=g(c).toION(h,a);return d?m:(h[b]||b)+":"+m}));return c+b.join(",")+d};E.prototype.compareTo=function(h){var a=!1;this.each(function(b,c){h[b]!==c&&(a||(a={}),a[b]=c)});return a};E.prototype.toParams=function(h){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},h)};E.prototype._privateMixin=function(h,a,b){for(var c in a)g.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(h[c]=a[c]);return h};E.prototype.mapToObj=function(h){var a={},b=this;this.each(function(c,
d){var e=h(c,d);g(e).isObj()&&b._privateMixin(a,e)});return a};E.prototype.invert=function(){return this.mapToObj(function(h,a){var b={};b[a]=h;return b})};E.prototype.mixin=function(h,a){return this._privateMixin(this.iterable,h,a)};E.prototype.find=function(h){var a;this.each(function(b,c){h(b,c)&&(a=c)});return a};E.prototype.findFirst=function(h){var a,b;this.each(function(c,d){!b&&h(c,d)&&(a=d,b=!0)});return a};E.prototype.keys=function(h){var a=[];this.each(function(b){a.push(b)},h);return a};
E.prototype.asStrings=function(){var h={};this.each(function(a,b){h[a]=""+b});return h};E.prototype.selectProperties=function(h){var a={},b=this;g(h).each(function(c,d){g.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};E.prototype.filter=function(h,a){return this.map(function(a,c){var d;if(g.isUndef(h)||g.resolve(h,a,c))d=c;return d},a)};E.prototype.toArray=function(){return this.map(function(h,a){return a})};E.prototype.JSONStringify=function(){var h,a,b=!1;w.Prototype&&w.Prototype.Version&&
-1===w.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);h=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return h};E.prototype.contains=function(h){var a=g(this.iterable).findFirst(function(a,c){return h===c});return g.isDef(a)};g.toBase=function(h,a){var b,c=0>h,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];h=c?-h:h;do b=h%a,e.push(d[b]),h=(h-b)/a;while(0<h);e=e.reverse().join("");return c?"-"+e:
e};g.isDef=function(h){return"undefined"!==typeof h};g.isUndef=function(h){return!g.isDef(h)};g.isBool=function(h){return"boolean"===typeof h};g.noop=function(){};g.identity=function(h){return h};g.isFunction=function(h){return"function"===typeof h};g.isStr=function(h){return"string"===typeof h};g.useIfDef=function(h){return g.isDef(h)?h:!1};g.stringifyTriState=function(h){return!0===h?1:!1===h?0:"na"};g.getNum=function(h){h=parseInt(h);isFinite(h)||(h=-1);return h};g.resolve=function(h){var a=g(arguments).toArray();
a.shift();return g.isFunction(h)?h.apply({},a):h};g.flatJSONParse=function(h){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(h);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(h);return e};g.debounce=function(h,a,b){var c,d=b||w;return function(){var b=this,f=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;h.apply(b,f)},a)}};g.last=function(h){return h[h.length-1]};g.collapseArgsIntoHash=function(h,a){var b={};a?b[h]=a:b=h;return b};g.fromBoolToNum=function(h){return h?1:0};
g.isNumeric=function(h){return g.isDef(h)&&null!==h&&!isNaN(h)};g.fromNodeListToArray=function(h){return Array.prototype.slice.call(h)};g.encodeInvalidUrlChars=function(h,a){var b={$:"%24","[":"%5B","]":"%5D","{":"%7B","}":"%7D","|":"%7C"},c=h;a&&"string"===typeof h&&(c=h.replace(/%(?![0-9A-F][0-9A-F])/gi,"%25"),c=c.replace(/\$|\[|\]|\{|\}|\|/gi,function(a){return b[a]}));return c};var n=function(){var h,a={},b=[],c=[],d=function(){var a={},b=g(arguments).toArray();b.unshift(a);c.push(b);return a},
e=function(c,d,e,q,u){u=u||{};var v,y,k=function(a){0===b.length&&(b=g(a).map(function(a,b){return h.request(b)}))},n=function(){if(!v){var a=[];v=!0;k(["features","browser","context"]);u.emits&&(c.events=new B);if(!u.applies||u.applies.apply(u,b))y=!0,a=g(e).map(function(a,b){return h.request(b)},!0),a.push(c),g(c).mixin(q.apply({},a))}};(function(){var b=u.tier;g.isDef(b)&&(a[b]=a[b]||new ba,a[b].push(n))})();h.provide(d,function(){var a;n();y&&(a=c);return a});return c};d.runAll=function(){var b=
g(a).keys().sort(function(a,b){return a-b});g(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){h=h||new Ca;g(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return h};return d}(),k={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",
THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",
VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",
GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",IMPRESSION_PERFORMANCE:"e",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",
PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",
VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",OMID_GEOMETRY_MEASUREMENT_CHANGED:"omidGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,
0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",
QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",CONTENT_STYLED:"cs",MRAID_DEFAULT:"md",MRAID_READY:"mr",MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",UNIQUE_ID_TOKEN:"[IAS_ASID]"},ya="mf",la="cm",ra="in",ma="pr",na="po",pb="bl",oa="lo",pa="lt",qa="md",sb="id",bb=function(h){return{verifyContextNode:function(){if(!(__IASScope.isDomless||h.contextNode&&null!==h.contextNode.parentNode)){var a,b=J.getElementsByTagName("script"),
c=b.length,d=b[c-1],e=h.scriptUrl;try{for(;0<=--c;)if(a=b[c],a.src&&0===a.src.indexOf(e)&&null===a.getAttribute("data-ias-script-tag")){d=a;a.setAttribute("data-ias-script-tag","found");break}}catch(f){}h.contextNode=d}}}},Fc=function(){var h,a=["STYLE","SCRIPT","HEAD","META"],b=k.RENDER.CREATIVE_NODE_TYPES.concat(k.RENDER.CONTAINER_NODE_TYPES),c=0,d=l.useFIF&&t.friendlyIframe||t.isSpecifiedAd(),e=0,f=[],p=function(p){var q=s.isNodeXDomainIframe(p)||s.isNodeCreative(p),u=!p;h=u?l.contextNode.parentNode:
p;if(q||u){var v=f.length;0<v&&(e<v?e=v:(e=0,f=[]));n.getAggregator().trigger("evaluateCreativeFinderResult",p)}else{if(d){var y;y=q=p;u=t.friendly?r.getTop().document.body:l.contextNode.ownerDocument.body;for(;3>c;){if(u&&q===u){y=q;c=3;break}s.isWindow(q)&&(y=s.crossQuerySelector("["+k.AD_IDENTIFIER+"-"+l.asid+"]"),q=g.isDef(y)?y:q);y=q=g.isDef(q)?q.parentNode||q:q;c++}q=y}else q=p;if(s.isWindow(q)){try{v=q.document}catch(A){v=l.contextNode.ownerDocument}p=v}else"IFRAME"===s.getNodeName(q)?(f.push(p),
p=p.contentWindow.document):p=q;var v=[],u=(q=p&&p.getElementsByTagName&&p.getElementsByTagName("*"))&&q.length,x;if(q)for(var H=0;H<u;H++)x=(y=q[H])&&y.nodeName&&y.nodeName.toUpperCase(),!y.children||0!==y.children.length||g(b).contains(x)||g(a).contains(x)||g(v).contains(x)||v.push(x);v=b.concat(v);(new Ec(v,f)).searchDescendants(p)}};n.getAggregator().on("creativeFinderBatchCompleted",p);return{find:p,getClosestContainerName:function(){return s.getNodeName(h)}}},Ec=function(h,a){var b=function(b){function d(b){var c=
s.getNodeName(b),d=s.isNodeCreative(b)||"IFRAME"===c;c&&d&&!s.isEmptyTeadsFrame(b)&&(c=s.getNodeArea(b),c>m&&!g(a).contains(b)&&(p=b,m=c))}function e(){do d(b[f]),f+=1;while(0!==f%q&&f<b.length);f<b.length?r.execAtEndOfThread(e,0):n.getAggregator().trigger("creativeFinderBatchCompleted",p)}var f=0,p=null,m=-1,q=500;if(b.length&&n.getAggregator().request("useYieldSearch"))e();else{for(f;f<b.length;f++)d(b[f]);n.getAggregator().trigger("creativeFinderBatchCompleted",p)}};return{searchDescendants:function(a){a=
a||l.contextNode.parentNode;var d,e,f=[];for(d=0;d<h.length;d++){e=h[d].toLowerCase();var p=a.getElementsByTagName&&a.getElementsByTagName(e);if(p&&p.length)for(e=0;e<p.length;e++)f.push(p[e])}b(f)}}},dc=function(){var h,a=!1,b=!1,c=!1,d={status:k.RENDER.STATUS.OTHER,details:k.RENDER.DETAILS.OTHER},e={status:k.RENDER.STATUS.DETECTED,details:k.RENDER.DETAILS.ENVIRONMENT},f=n.getAggregator().request("omidAdSessionContext"),p=function(){c=a=!0},m=function(a){a&&(a.status=k.RENDER.STATUS.DETECTED);n.getAggregator().trigger("adRendered")},
q=function(){var a=!1;t.isOmid()&&f&&f.useOMID13Logic&&(a=!0);return a},u=function(a,b){h.save(k.RENDER.DIAGNOSTIC.CONTENT_STYLED);var c=/url(?:\(['"]?)(.*?)(?:['"]?\))/.exec(b.content)[1],d=s.createImage();d.onload=function(){0<d.naturalHeight*d.naturalWidth&&a.setAttribute&&a.setAttribute("data-ias-rend-bi",!1)};d.src=c;a.setAttribute("data-ias-rend-bi",!0)},v=function(a){var b={},c=r.getDoc(),d=function(e){var f=e&&e.type;if("readystatechange"===f&&"complete"===e.target.readyState||"load"===f)m(b),
h.saveNode(a),"readystatechange"===f?h.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===f&&h.save(k.RENDER.DIAGNOSTIC.LOAD_FIRED),x(b),z.removeEvent(a,"load",d),z.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(m(b),h.saveNode(a),h.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(z.addEvent(a,"load",d),z.addEvent(c,"readystatechange",d));return b},y=function(){var a=r.getWindow().mraid,b=a&&a.getState&&a.getState(),c=function(){z.removeEvent(a,"ready",c);h.save(k.RENDER.DETAILS.ENVIRONMENT);
h.save(k.RENDER.DIAGNOSTIC.MRAID_READY);m();x({status:k.RENDER.STATUS.DETECTED})};h.save(k.RENDER.DETAILS.ENVIRONMENT);"default"===b?(m(),h.save(k.RENDER.DIAGNOSTIC.MRAID_DEFAULT),d.status=k.RENDER.STATUS.DETECTED):"loading"===b?(z.addEvent(a,"ready",c),h.save(k.RENDER.DIAGNOSTIC.MRAID_LOADING)):(z.addEvent(a,"ready",c),h.save(k.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));x(d)},l=function(a){a===k.RENDER.STATUS.DETECTED&&n.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,
timestamp:r.now(),code:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},x=function(b){var c=h.build();b=b.status||d.status;c=c?c:d.details;a&&b===k.RENDER.STATUS.DETECTED?(l(b),n.getAggregator().trigger("addThrottledOutputItem","rend",b),n.getAggregator().trigger("addThrottledOutputItem","renddet",c)):(l(b),n.getAggregator().trigger("addOutputItem",{output:b},"rend"),n.getAggregator().trigger("addOutputItem",{output:c},"renddet"))},H=function(){n.getAggregator().on("primaryadfound",function(a){var b,
c=d,e=new Fc,f=!0;n.getAggregator().on("evaluateCreativeFinderResult",function(a){if(s.isNodeXDomainIframe(a))b?r.clearInterval(b):f=!1,c=v(a);else if(a){var d=!1,p=s.getRect(a),q;if(q=a&&"IMG"===s.getNodeName(a)){q=!0;var y=g.isDef(a.naturalWidth)?a.naturalHeight*a.naturalWidth:0,n=getComputedStyle(a),H=0===a.src.length&&I.contains(n.content,"url"),l=a.getAttribute&&a.getAttribute("data-ias-rend-bi");0<y&&!H&&(q=!1);"false"===l&&(h.save(k.RENDER.DIAGNOSTIC.CONTENT_STYLED),q=!1);H&&!l&&u(a,n)}q&&
(d=!0,h.save(k.RENDER.DIAGNOSTIC.BROKEN_IMAGE));!d&&p.width>=k.RENDER.WIDTH_THRESHOLD&&p.height>=k.RENDER.HEIGHT_THRESHOLD&&(m(c),b?r.clearInterval(b):f=!1);h.saveNode(a)}else a=e.getClosestContainerName()||h.getAdNodeName(a)||c.details,h.save(a);x(c)});var p=function(){var b=a&&a.getAdNode();try{e.find(b)}catch(c){n.getAggregator().trigger("renderdiag",c)}},q=n.getAggregator().request("mobileApp");q&&q.isMobileAppEnvironment&&q.isMobileAppEnvironment()&&t.isMraid()?y():(p(),f&&(b=r.setInterval(p,
500)));n.getAggregator().trigger("eligiblerender")})},O=function(){var a=f&&!!f.isVideo,c=!q()||f&&!!f.videoStartArrived,d=!q()||f&&!!f.geometryArrived,p=!f.omidEarlyExit||f.omidImpressionArrived,g=!(f.omidEarlyExit&&q())||f.omidLoadedArrived;return!b&&d&&p&&g&&(!a||c)?(n.getAggregator().trigger("addOutputItem",{output:t.getTagTime()},"oren"),n.getAggregator().trigger("eligiblerender"),h.save(k.RENDER.DETAILS.ENVIRONMENT),h.save(k.RENDER.DIAGNOSTIC.OMID_RENDERED),m(),x(e),b=!0):!1};return{start:function(){var a=
!1;n.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:"initial"});n.getAggregator().on("adRendered",function(){a=!0});n.getAggregator().provide("adRenderStatus",function(){return a});n.getAggregator().provide("useYieldSearch",function(){return c});h=new Gc;new Hc;n.getAggregator().on("impressionsent",p);q()||f.omidEarlyExit?O()||(h.save(k.RENDER.DETAILS.ENVIRONMENT),h.save(k.RENDER.DIAGNOSTIC.OMID_UNRENDERED),x(d),n.getAggregator().on("omidrendgeoupdate",
function(){O()}),n.getAggregator().on("omidrendvideostart",function(){O()}),f.omidEarlyExit&&(n.getAggregator().on("omidimpressionarrived",function(){O()}),n.getAggregator().on("omidloadedarrived",function(){O()}))):t.isAvid()||t.isOmid()||t.isVideo()?(n.getAggregator().trigger("eligiblerender"),h.save(e.details),m(),x(e)):(x(d),H())}}},Gc=function(){var h=[],a=[],b=function(a){var b;if(s.isWindow(a))b="WINDOW";else if(s.isNodeXDomainIframe(a))b="XIFRAME";else try{b=s.getNodeName(a)}catch(f){c("nen")}return b},
c=function(a){h.push(a)};return{build:function(){var b=[];g(a).each(function(a,c){b.push(c)});g(h).each(function(a,c){b.push(c)});a=[];h=[];return b.join(".")},getAdNodeName:b,save:c,saveNode:function(d){try{var e=d&&b(d),f=d&&s.getRect(d),p=d&&s.hasBackgroundImage(d),m=d&&d.innerText&&0<d.innerText.length,q=d&&d.children&&0===d.children.length&&m,h=f&&f.width>=k.RENDER.WIDTH_THRESHOLD&&f.height>=k.RENDER.HEIGHT_THRESHOLD?k.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:k.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE;a.push(e);
a.push(h);p&&a.push(k.RENDER.DIAGNOSTIC.STYLED_NODE);q&&a.push(k.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(g){c("sne")}}}},Hc=function(h){var a,b=!1,c=!1,d=function(){n.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&!c&&(__IntegralASDiagnosticCall("renderloop",a,l),n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"rle",1),c=!0)};n.getAggregator().on("eligiblerender",function(){b=!0;d()});n.getAggregator().on("renderdiag",function(b){a=b;d()});d()},
X=function(){return{applies:function(h,a){var b=n.getAggregator().request("mobileApp");return(h.browserIs(k.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||h.browserIs(k.BROWSERS.WEBKIT)||h.browserIs(k.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&h.hasIntersectionObserver()}}},Ic=function(){return{applies:function(h){var a=n.getAggregator().request("mobileApp");return(h.browserIs(k.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||h.browserIs(k.BROWSERS.WEBKIT)||h.browserIs(k.BROWSERS.MSEDGE))&&!a.isMobileAppEnvironment()&&
h.hasResizeObserver()}}},fb=function(){var h,a,b=!1,c=n.getAggregator().request("mPage"),d=function(){!b&&a&&h&&!c.isHidden()&&(b=!0,n.getAggregator().trigger("sendDt",k.DT_CODES.LARGE_BILLABLE))};n.getAggregator().on("primaryadfound",function(a){h=a.getDims().area()>=k.MRC_LARGE_AD_SIZE;d()});n.getAggregator().on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},Mb=function(){var h=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h",omidObstructions:"oobs"},c={omidObstructions:["sl",
"percentInView","reason"]};n.getAggregator().on("newScreenEvent",function(c){c=g(c).selectProperties(g(b).keys());c=g(c).asStrings();var f=g(c).compareTo(a);(f=d(f))&&JSON.stringify(f)!==JSON.stringify({})&&(f.t=t.getTagTime(),h.push(f));g(a).mixin(c)});var d=function(a){g(c).each(function(b,c){var d=!1;g(c).each(function(b,c){a[c]&&(d=!0)});!1===d&&delete a[b]});return a};return{toString:function(){return g(h).toION(b)}}},Ca=function(){var h=new Jc,a=new B;return g(h).mixin(a)},B=function(){var h=
{},a={},b=function(b,c,f){if((b=a[b])&&0!==b)return f&&(b=b.slice(0,1)),g(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){h[a]=h[a]||new ba;h[a].push(b,c)};return{on:function(a,e){var f={};e?f[a]=e:f=a;g(f).each(c);g(f).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=g(arguments).toArray();b.shift();var c;(c=h[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=g(arguments).toArray();c.shift();var f=b;a[f]=a[f]||[];a[f].push(c);(f=h[b])&&f.run.apply({},
c)}}},ca=function(){var h=function(a,c,d){var e,f=c.length,p=s.isWindow(a)?a.frames:s.getChildWindowsOf(a);d&&d(a,c);if(p&&p.length){for(a=0;a<p.length;a++)(e=p[a])&&s.isWindow(e)&&(c[f]=a,h(e,c,d));c.pop()}},a=function(a,c){try{h(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=s.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return g(d).filter(b)}}},ba=function(){var h=[];return{push:function(a,b){var c=
0;b=b||Number.MAX_VALUE;h[h.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;g(h).each(function(b,c){c.apply({},a)})}}},wa=function(h){var a={};return{doEligibleJobs:function(b){g(h).each(function(c,d){var e=d&&d.getTime();g.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},Ea=function(){var h,a=new da,b=function(b,d,e,f){var p,m,q,h;if(JSON&&JSON.parse)try{p=JSON.parse(b.data),m=b.source,h=g.noop,d(p)&&(f&&(q=f(m,p))&&(h=function(){a.send(function(){return q},
m)}),e(b,p,h))}catch(v){p&&n.getAggregator().trigger("error",k.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){h=function(f){b(f,a,d,e)};z.addEvent(w,"message",h)},stop:function(){h&&z.removeEvent(w,"message",h);h=null}}},da=function(){var h=function(a){return g(a).isObj()?[a]:(new ca).getFrames(a)},a=function(a){return g(a).mapToObj(function(a,b){var e;g.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=h(c);g(d).each(function(c,d){var p;
p=g.resolve(b,d)||{};p.sentTime=r.now();p=a(p);d.postMessage(g(p).JSONStringify(),"*")})}}}},Kc=function(h,a){return{onAll:function(b){var c={};g(a).each(function(d,e){h.on(e,function(){c[e]=1;g(c).keys().length===a.length&&(c={},b())})})}}},Hb=function(h){var a=0,b={},c=function(b,c,d){if(g.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=g.resolve(b.output);this.props.asION&&(a=g(a).toION());return a}},
d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var q=function(a,d,e){a=new c(a,d,e);b[a.id]=a};g(a.output).isObj()&&!e.asION?g(a.output).each(function(a,b){q({output:b},a,e)}):q(a,d,e)};h.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,h;a(e)&&(h=d.output(),e.encode&&(c=encodeURIComponent(c),h=encodeURIComponent(h)),g.isFunction(b)?
b(c,h):b[c]=h)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Jc=function(){var h={},a=function(a,c){h[a]=c};return{request:function(a){var c,d=h[a],e=g(arguments).toArray();e.shift();g.isUndef(d)||(c=g.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?h[b]=c:g(b).each(a);return c}}},Xb=function(){return{createInstance:function(h,a,b,c){return t.isDomless()?new Lc:new Mc(h,a,b,c)}}},Mc=function(h,a,b,c){var d;
return{collect:function(){var a=h.find(),f=a.getOutOfViewReasons(),p=b.isHidden(),m=c.isDeviceTypeGroupMobile()&&d?d:D(s.calcWinDims()),q=a.getDims();d=m;if(!a.hasAd()||!m.hasValidDims()||!q.hasValidDims())return{viewState:k.NA,posViewState:k.NA,embedded:t.embedded,winDimensions:m,adDimensions:q};!0===p&&f.push(k.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:m,adDimensions:q,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:f.length?k.OUT_OF_VIEW:a.getViewState(),
viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),reason:f.join("."),obstructed:g.stringifyTriState(a.isObstructed()),isHidden:g.stringifyTriState(a.isHidden()),tabHidden:g.stringifyTriState(p),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Lc=function(){return{collect:function(){return{}}}},Nc=function(h){h=h||g.identity;var a=[],b=r.now(),c=function(){var c=
r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=h(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},Fa=function(h,a){var b=h||1,c=0,d=0,e,f=0;return{start:function(){0===c%b&&(e=r.now())},stop:function(){var p=e||a;0===c%b&&(f+=r.now()-p,d++);c++},getTime:function(){return f},getCount:function(){return d}}},
Ga=function(){var h,a=0,b=0,c=new B(!0),d=function(){h&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(d):e())},e=function(){h=!1;a=0};return{onTick:function(a,d){var e=g.collapseArgsIntoHash(a,d);g(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){h||(h=!0,r.execAtEndOfThread(d))},kill:e,isActive:function(){return h}}},Oc=function(h,a){var b,c=a,d=function(a){b||(a&&h(),b=r.setInterval(h,c))},e=function(a){b&&(a&&h(),r.clearInterval(b),b=null)};return{start:d,stop:e,updateFrequency:function(a,
p){c=a;b&&(e(),d(p))}}},W=function(h){var a,b,c=0,d=t.getTagTime(),e=0,f=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=t.getTagTime();f=!1},mark:function(){a=f?t.getTagTime()-d:0;c+=a;c>=h&&(b=c-a<h,e+=b?c:a);d=t.getTagTime();f=!0}}},S=function(h,a){var b=h||l.adsafeSrc||l.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?l.protocol+":"+b:l.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],e=b[3],f=b[4],p=b[5],
m=h?b[6]:"",q=a?b[7]:"",u={},v=function(a){g.isDef(a)&&(f=a);return f},y=function(a){g.isDef(a)&&(p=a);return p},k=function(a,b){var c=a+"="+g(b).toION();return g.encodeInvalidUrlChars(c,l.encodeInvalidUrlChars)},q=q?q.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=u[b])?u[b]=d+c:a&&q.length&&(d=q.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),q=q.replace(d,d+c))},fullDom:c,hostname:e,sub:v,master:y,setParam:function(a,b){u[a]=u[a]||{};g(b).isObj()?g(u[a]).mixin(b):
u[a]=b},path:function(a){m=a},toString:function(){var a=v()?v()+".":"",b=m?"/"+m:"",c;q||!g(u).isEmpty()?(c=g(u).isEmpty()?"":g(u).stringify(k,"&"),c="?"+q+(q&&c?"&"+c:c)):c="";return d+"://"+a+y()+b+c}}},nb=function(){var h=function(a){var c=[];g(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,c;try{if(t.friendly&&!t.isMobileApp())if(b=n.getAggregator().request("adSlotIds"))c=
b;else{var d,e;if(d=s.getOurNodeInTop()){var f=s.getAncestorNodes(d);e=g(f).map(a)}if(b=e=e&&h(e))n.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:k.DT_CODES.ADTALK,asION:!0}),n.getAggregator().provide("adSlotIds",b),c=b}return c}catch(p){n.getAggregator().trigger("error",k.ERROR_CODES.AD_SLOT_ID)}}()},tc={name:"AdRefreshDetection",dependencies:[],creator:function(){var h=[15,30,45,60,90],a={start:function(){var a=this,c=l.asid,d=this.getChanId(),e=l&&l.contextNode&&l.contextNode.nextSibling&&
l.contextNode.nextSibling.id;c&&d&&(this.recordAdSlotImpression(c,d,e,function(c,d){c?n.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==h.indexOf(a)},getChanId:function(){for(var a=l.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var f=d.exec(a[e]);f&&3===f.length&&"chanId"===f[1]&&(c=f[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?
"self":a.refreshSessionId)+"."+a.refreshCount;n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var f=r.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(c){e(c)}},!1);f.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var d=this,e=l.adRefreshThreshold&&
parseInt(l.adRefreshThreshold)||null,f=r.getTop();if(e&&this.adRefreshIntervalIsValid(e))n.getAggregator().on("sendDt",function(p,h){p===k.DT_CODES.PING&&h===e&&(r.execAtEndOfThread(function(){f.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),"*")}),d.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ir",a);n.getAggregator().trigger("adSessionComplete")}};t.isRefreshable(function(b,c){var d;if(!b&&
c)try{d=JSON.parse(c),d.isRefreshable&&d.adServerName&&a.start()}catch(e){n.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH)}});return a},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(h,a,b){return b.isPossiblyRefreshable()}}},Pb=function(){var h,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){var f;if(f=e.isVideo()&&!(e.isAvid()||e.isMraid()||e.isOmid()))f=n.getAggregator().request("adNode")?parseFloat(n.getAggregator().request("videoVersion")):
void 0,f=3.7>f;return!f&&a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{h=r.getWindow().location.ancestorOrigins,a=!0}catch(b){n.getAggregator().trigger("error",k.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return h&&h.length||0},getTopDomain:function(){return g.last(h)},sendOriginList:function(){var a;a="ao:"+(h?g(h).map(b).reverse():[]).join(",");n.getAggregator().trigger("addOutputItem",{output:a},
"tpiLookup",{type:k.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});n.getAggregator().trigger("sendDt",k.DT_CODES.THIRD_PARTY)}}},kb=function(h,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},f=function(d){try{a.diagnostic("c");var f=d.length,q=0,u=0;e(f,0,0);g(d).each(function(a,b){h.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(f,q,++u)},!0);e(f,++q,u)})}catch(v){b.add(k.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new S).fullDom;"/"!==a.slice(-1)&&
(a+="/");a+="tpl?asId="+l.asid;h.jsonp(a,f)}catch(c){b.add(k.ERROR_CODES.AT_INIT)}}}},$b=function(h,a,b,c){return{enabled:"true"===l.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===l.accountForSadImps&&c.measure(a),l._onAPIResult&&l._onAPIResult(a)}catch(e){h.add(k.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},Fb=function(){return{createInstance:function(h,a,b,c){return t.isDomless()?new Pc:new Qc}}},Qc=function(){var h=k.BROWSERS,a=function(a){return b()===
a},b=function(){var a="u",b=r.getWindow();try{g.isDef(b.opera)&&g.isDef(b.opera.buildNumber)?a=h.OPERA:g.isDef(b.mozInnerScreenY)?a=h.GECKO:g.isDef(b.chrome)&&g.isDef(b.chrome.csi)?a=h.CHROME:g.isDef(b.msWriteProfilerMark)&&g.isDef(b.crypto)?a=h.MSEDGE:g.isDef(b.attachEvent)||g.isDef(b.msCrypto)?a=h.IE:g.isDef(b.WebKitPoint)&&(a=h.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=r.getWindow();g.isDef(b.navigator)&&g.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,
hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasMutationObserver:function(){return"function"===typeof MutationObserver},hasResizeObserver:function(){return"function"===typeof ResizeObserver},hasAncestorOrigins:function(){var a=r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!g.isFunction(a.postMessage))},getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:k.NA},getBrowserType:b,
getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var f=k.NA,p=r.getDoc(),m=p.createElement("div");if(a(h.IE))try{if("-ms-ime-align"in p.documentElement.style)f="11";else for(m.style.behavior="url(#default#clientcaps)",p=0;p<e.length&&!(f=m.getComponentVersion(e[p],"componentid").replace(/,/g,"."));p++);}catch(q){}e=f;f=k.NA;m=r.getWindow();g.isDef(m.navigator)&&g.isDef(m.navigator.appName)&&
(f=m.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:f}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],f=function(){return g(b).findFirst(function(b,c){return I.contains(a,c)})};return I.contains(a,"Android")&&f()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},Pc=function(){var h=function(){return!1},a=function(){return k.NA};return{getDocumentMode:a,
getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:h,getUserAgent:h,hasPostMessage:h,hasAncestorOrigins:h,hasIntersectionObserver:h,hasMutationObserver:h,isAndroidWebViewBrowser:h}},zc=function(){return{createInstance:function(h,a){return t.isDomless()?new Rc(a):new Sc(h,a)}}},Tc=function(){var h,a=function(a,c){var d="",e="",f=r.getDoc().getElementsByTagName("ins");if(f&&0<f.length){e=f[0];d="<ins";for(f=0;f<e.attributes.length;f++)d+=
" "+e.attributes[f].nodeName+'="'+e.attributes[f].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+c+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){h=n.getAggregator().request("omidAdSessionContext");var c=!(!h.app||!h.isDisplay||h.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!t.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){h=n.getAggregator().request("omidAdSessionContext");var c="iasbi"+l.asid,d;d=l.contextNode.parentNode;var e,f=l.adWidth&&0<l.adWidth?l.adWidth:0,p=l.adHeight&&0<l.adHeight?l.adHeight:0,m=r.getDoc().getElementsByTagName("ins"),
q;q=e=0;m&&0<m.length&&(q=m[0],e=parseInt(q.style.width),q=parseInt(q.style.height));f=e||f||window.innerWidth;p=q||p||window.innerHeight;"complete"===r.getDoc().readyState&&(l.forceAppend="true");"true"===l.forceAppend?(e=r.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):r.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=r.getDoc().getElementById(c))d.style.width=f+"px",d.style.height=p+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",
d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},Sc=function(h,a){var b=function(a){var b=l.iasProxyPartnerDomain;a=a&&-1!=a.toString().indexOf("jsconfig.adsafeprotected.com/jsconfig");return b&&!a},c=function(a,c,d,e){b(c)&&(c="//"+l.iasProxyPartnerDomain+encodeURIComponent(c));"script"!==a?(c=J.createElement("DIV"),c.innerHTML=d,d=c.childNodes[0]):(d=J.createElement("SCRIPT"),d.src=c,e&&(d.onload=e));l.contextNode.parentNode.appendChild(d)},
d=function(a,b,d){var e,f="";e=' src="'+b+'"';d&&(f="__IntegralASEventLoadHandler_"+l.asid.replace(/-/g,""),w[f]=d,f=' onload="'+f+" && "+f+'()"');f={script:['<script type="text/javascript"',f,e,">\x3c/script>"],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0"',f,e,"></iframe>"],img:["<img",f,e,"/>"]}[a].join("");t.isOmid()?(e=new Tc,e.isApplicable(b)?e.deployBlockingScriptIntoIframe(b):c(a,b,f,d)):"true"===l.forceAppend?
c(a,b,f,d):J.write(f)},e=function(a,c,d){var e=!d&&z.getXHR2();b(a)&&(a="//"+l.iasProxyPartnerDomain+encodeURIComponent(a));e?(e.open("POST",a),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&c&&c()},e.send()):(d=s.createImage(),c&&(d.onload=c),d.src=a)},f=function(a,c,d,e){var f=J.createElement("script");d=d||l.contextNode.parentNode;b(a)&&(a="//"+l.iasProxyPartnerDomain+encodeURIComponent(a));f.type="text/javascript";f.src=a;c&&(f.onload=c);e&&(f.setAttribute("defer",""),f.setAttribute("async",
""));g.isDef(d)&&d.appendChild(f)},p=function(a){g.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new S(a,!0)).toString(),e(a,void 0,!0))},m=function(b,c,d,e){f(a.wrap(b,c,d,e))};n.getAggregator().on({addNode:d,send:e,exec:f,notify:p,jsonp:m});return{addNode:d,send:e,exec:f,notify:p,jsonp:m}},Rc=function(h){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";n.getAggregator().request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,function(){})},
b=function(a,b){a=encodeURI(a);n.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){n.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){g.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new S(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(h.wrap(a,b,d,e))};n.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},t=
function(h){var a="undefined"===typeof window,b="undefined"!==typeof h&&"undefined"!==typeof top&&h!==top,c=function(){var b=!1;if(a)b=!0;else try{b=!!top.document}catch(c){}return b}(),d=function(){return a||g.isDef(r.getWindow().mraid)},e=function(){return!a&&g.isDef(r.getWindow().mraid)},f=function(){var b=!1;if(!a)var c=(b=r.getWindow().inmobi)&&b.IASDocumentVideoBuffer,b=b&&c&&g.isFunction(c.addVideoEventListener),b=e()&&!!b;return b},p=function(){var b;if(!(b=-1!==l.mode.indexOf("jsvid"))){var c;
b=!1;var d=n.getAggregator();if(!a&&(d=d.request("avidJsClient"),d.isAvidAvailable()))try{c=d.getAvidAdSessionContext(),b=c.mediaType===k.MEDIA_TYPE.VIDEO}catch(e){}(c=b)||(d=n.getAggregator(),c=d.request("omidVerificationClient"),b=!1,d=d.request("omidAdSessionContext"),c&&d&&(b=d.mediaType===k.MEDIA_TYPE.VIDEO),c=b||f());b=c}return b},m=function(){return!1===l.fwMonitoring||"false"===l.fwMonitoring},q=function(){return l.mobOrTab},u=function(a){return!1===g(l.customViewability).isArray()?!1:0<g(l.customViewability).filter(function(b,
c){return I.contains(c.id,a)}).length},v=function(){return u("grpm")||l.use100v};return{embedded:b,friendly:c,isFriendlyToParent:function(b){var c,d;if(a)b=!0;else{try{d=S(b.document.referrer),c=d.hostname===b.location.hostname}catch(e){}b=c}return b},friendlyIframe:b&&c,xDomainIframe:b&&!c,getTagTime:function(){return r.now()-l.birthdate},getPageTime:function(){var b=k.NA;!a&&g.isDef(h.chrome)&&g.isDef(h.chrome.csi)&&g.isFunction(h.chrome.csi)&&(b=r.round(h.chrome.csi().pageT));return b},isVideo:p,
isMobileApp:d,isSpecifiedAd:function(){var b=!1;a||(b=(b=g.isFunction(l.contextNode.getAttribute)&&l.contextNode.getAttribute("data-ias-container")||l._cl_adpath)&&g.isStr(b));return b},isCompoundAd:function(){var b=!1,c=/\[(.*)\]/;a||(b=c.exec(l._cl_adpath),b=null!==b&&0!==b[1].length&&1<b[1].split(",").length);return b},isAvid:function(){return!a&&g.isDef(r.getWindow().avid)},isOmid:function(){var a=n.getAggregator().request("omidVerificationClient");return a&&a.isSupported()&&!l.videoId},isOmidNative:function(){return(new Ha).accepts()},
isOmidForWeb:function(){return(new Ia).accepts()},isDomless:function(){return a},isAvidNative:function(){var b=!1,c=n.getAggregator();a||(c=c.request("avidJsClient"),c.isAvidAvailable()&&(b=c.getAvidAdSessionContext().avidAdSessionType,b=b===k.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||b===k.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return b},isBustedIframe:function(){var b=!1;a||(b=void 0!==ea());return b},isMraid:e,isSafeFrame:function(){var b=!1;a||(b=g(r.getWindow().$sf).isObj(!1)&&g(r.getWindow().$sf.ext).isObj(!1));
return b},isInMobiMraidVideo:f,isDeviceTypeGroupMobile:q,usesIASFullyInViewCustomMetric:function(){return u("fiv")||l.use100v||!v()},usesGroupMCustomMetric:v,isCeltra:function(){var b=!1;a||(b=Ja().isApplicable());return b},usesGroupMCustomMetricMobilePassThru:function(){return v()&&q()},usesZeroPivCustomMetric:function(){return!1===g(l.customViewability).isArray()?!1:0<g(l.customViewability).filter(function(a,b){return g(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=
r.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!a&&!d()&&!p()&&b&&"jload"===l.mode},integratedBlockingApplies:function(a){var b=!1,c,d,e;l.contextNode&&g.isFunction(l.contextNode.getAttribute)&&(c=l.contextNode.getAttribute("data-ias-check-tag"),d=l.contextNode.getAttribute("data-ias-check-done"),e=(e=l.contextNode.getAttribute("data-ias-callback"))&&
g.isFunction(r.getWindow()[e]));var f=g.isDef(JSON)&&g.isFunction(JSON.parse);a=l.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var p=!0===l.fwMonitoring||"true"===l.fwMonitoring;f&&a&&("true"===c&&"true"!==d&&e?(b=!0,p&&n.getAggregator().trigger("addOutputItem",{output:"imgb"},"smm",{type:"impression"})):(b=!1,p||n.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b},isBlocking:m,isBlockingSizmekTag:function(){return m()&&I.contains(l.scriptUrl,
"bs.serving-sys.com")}}}(w),z={addEvent:function(h,a,b,c){g.isDef(h.addEventListener)?"mouseenter"===a?h.addEventListener("mouseover",z.mouseEnter(b),c):"mouseleave"===a?h.addEventListener("mouseout",z.mouseEnter(b),c):h.addEventListener(a,b,c):g.isDef(h.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),h.attachEvent("on"+a,b))},removeEvent:function(h,a,b){g.isDef(h.removeEventListener)?("mouseenter"===a?(a="mouseover",b=z.mouseEnter):"mouseleave"===a&&(a="mouseout",b=z.mouseEnter),h.removeEventListener(a,
b)):g.isDef(h.detachEvent)&&h.detachEvent("on"+a,b)},mouseEnter:function(h){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,c)||h.call(this,b)}},isAChildOf:function(h,a){if(h===a)return!1;for(;a&&a!==h;)a=a.parentNode;return a===h},getStyle:function(h,a,b){var c="",d=J.defaultView&&J.defaultView.getComputedStyle;b=b||"";d?c=(h=J.defaultView.getComputedStyle(h,b))?h.getPropertyValue(a):c:h.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=
h.currentStyle[a]);return c},getXHR2:function(h,a){var b,c;g.isDef(w.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):g.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(h,a){if(t.isDomless())r.setTimeout(function(){h()},50);else{var b=a||(t.xDomainIframe?J:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),a())},50)},d=this;(function(a){var f=function(){a(!0)};g.isFunction(J.addEventListener)?"complete"==b.readyState||
"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(f):d.addEvent(b,"DOMContentLoaded",f,!1):c(a)})(h)}},isSandboxed:function(h){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)h=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(h.browserIs(k.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}h=a}c=h}return c},styleElement:function(h,a){if(h&&
g(h.style).isObj()&&g(a).isObj()){var b="";g(a).each(function(a,d){b+=a+": "+d+" !important;"});h.style.cssText=b}},nodeIsAbsolutelyPositioned:function(h){return"absolute"===z.getStyle(h,"position")||h.style&&"absolute"===h.style.position}},Y=function(h){var a,b=Y.callTypeCounter,c=[k.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=k.DT_CODES;g("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,
e){a[b[e]]=d[e]});return a};a=function(){var a=e()[h],d=b&&b[h];g.isDef(d)&&0!==d&&g(c).contains(h)&&(a=a+"."+d);d=b[h];b[h]=g.isDef(d)?d+1:1;return a}();return{callType:h,enumerator:a}};Y.callTypeCounter={};var Zb=function(h,a,b,c,d,e,f,p){var m=0,q=0,u=!1,v=function(a,e,p,h,v,y){p=p||!b.on("postDts");var t=a===k.DT_CODES.DIAGNOSTIC||a===k.DT_CODES.ADTALK||a===k.DT_CODES.SCA||a===k.DT_CODES.XSCA||a===k.DT_CODES.EXTERNAL||a===k.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==f.getCurrentLoc()))try{var s=
l.dtBaseURL,w=new S(s,!0),z=r.now();n.getAggregator().trigger("preSendDt",a);s||(w.path("dt"),b.on("usedtdomain")&&w.sub("dt"));A(w,a,e);v&&v.field&&w.setParam(v.field,v.value);h||x(w,a);n.getAggregator().trigger("send",w,function(){q+=1;m=r.now()-z;g.isFunction(y)&&y()},p);a===k.DT_CODES.UNLOAD&&(u=!0);d.cleanup()}catch(D){__IntegralASDiagnosticCall("dt-"+a,D),n.getAggregator().trigger("error",k.ERROR_CODES.PHONE_HOME)}};h=function(){u||v(k.DT_CODES.UNLOAD,-1,!0)};var y=function(a,c){var d={bapi:"a",
bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=l.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&v(k.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},A=function(a,b,e){var f=new Y(b);e=g.isDef(e)?e:f.enumerator;a.setParam("asId",l.asid);e={c:c.getCacheBustId(),pingTime:e,time:t.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},x=function(c,h){var g,u={};d.filterOutput(function(a){return a.standalone&&
!a.minDt&&a.type===h},function(a,b){c.setParam(a,b.replace("%3A",":"))});f.fastForward();if(h===k.DT_CODES.CUSTOM||h===k.DT_CODES.UNLOAD||h===k.DT_CODES.VIDEO_EVENTS||h===k.DT_CODES.FULLY_INVIEW||h===k.DT_CODES.PING||h===k.DT_CODES.VIEWABILITY_READY||h===k.DT_CODES.ADTALK)u.clog=p,t.isVideo()&&(g=t.isOmid()?"omidVideoEventsString":"videoEventsString",(g=n.getAggregator().request(g))&&!g.isEmpty()&&(u.ve=g));h===k.DT_CODES.UNLOAD&&(u.ndt=q);-1!==l.mode.indexOf("jsvid")&&(u.vv=n.getAggregator().request("videoVersion"));
u.NULL1=b.output();u.NULL2=f.stringify(10);u.em=t.embedded;u.fr=t.friendly;u.e=a.toString();u.tt=l.mode;u.dtt=m;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===h);b&&a.oneTime&&(a.flagForRemoval=!0);return b},u);c.setParam("tv",u);c.setParam("br",e.getBrowserType())};n.getAggregator().on({sendDt:function(a,b,c){v(a,g.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){v(a,b,void 0,!0)},sendDiag:y,updateDtCount:function(){q++},unload:h});return{send:v,unload:h,
diagnostic:y,setViewabilityMod:function(a){}}},D=function(h){var a={},b=!1,c=function(){var a=1===h.nodeType?s.nodeIsHidden(h):0===h.width||0===h.height;return b?!1:a},d=function(){var b={};g(a).each(function(a,c){b[a]=r.round(c)});return b},e=function(a){return g.isNumeric(a)||g.isUndef(a)},f=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;h!==w.parent&&(1!==h.nodeType?a=h:g.isDef(h.getBoundingClientRect)&&(b=s.getRect(h),g(a).mixin({x:g.useIfDef(b.x)||b.scrX,y:g.useIfDef(b.y)||
b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&g.isNumeric(a.width)&&g.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};g(a).each(function(a,c){b[a]="x"===a||"y"===a||"width"===a||"height"===a?r.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:f,isMrcLarge:function(){return f()>=
k.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=f()}}},s={findElementsWithSize:function(h){var a=[],b=function(c){1>s.getNodeArea(c)?g(c.children).each(function(a,c){b(c)}):a.push(c)};b(h);return a},nodeIsHidden:function(h){var a=this.getRect(h),b=0!==parseInt(z.getStyle(h,"width"))&&0===a.width,a=0===a.width||0===a.height;h="hidden"===z.getStyle(h,"visibility");return b||a||h},calcWinDims:function(){var h,a,b;try{a=s.browserWindowPosition(),b=s.windowSize(),h={scrX:r.round(a.scrX),scrY:r.round(a.scrY),
width:r.round(b.width),height:r.round(b.height)}}catch(c){n.getAggregator().trigger("error",k.ERROR_CODES.GET_WIN_DIMENSIONS),h={}}return h},windowSize:function(){var h={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,g.isDef(top.innerWidth))h.width=top.innerWidth,h.height=top.innerHeight;else if(g.isDef(b.clientWidth))h.width=b.clientWidth,h.height=b.clientHeight;else if(g.isDef(a.clientWidth))h.width=a.clientWidth,h.height=a.clientHeight;
else throw h.width=h.height=0,"";else g.isDef(w.outerWidth)&&(h.width=w.outerWidth,h.height=w.outerHeight);return h},browserWindowPosition:function(){var h=0,a=0;g.isDef(w.screenX)?(h=w.screenX,a=w.screenY):g.isDef(w.screenLeft)&&(h=w.screenLeft,a=w.screenTop);n.getAggregator().request("browser").browserIs(k.BROWSERS.GECKO)&&-8==h&&-8==a&&(h+=8,a+=8);return{scrX:h,scrY:a}},getNodeArea:function(h){var a=-1;h&&(h=s.getRect(h),a=h.width*h.height);return a},getRect:function(h){var a={},b=s.browserWindowPosition();
h=h.getBoundingClientRect();g.isUndef(h.x)&&(a.x=h.left,a.y=h.top);g.isUndef(h.width)&&(a.width=h.right-h.left,a.height=h.bottom-h.top);g(a).mixin(h,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(h){h=h.document;return h.documentElement&&g.isDef(h.documentElement.clientWidth)&&h.documentElement||h.body},getPlaceholderSpan:function(){var h=J.createElement("span");g(h.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});h.innerHTML=
".";return h},createImage:function(){var h=t.friendly&&r.getTop().Image;return g.isFunction(h)?new h:new Image},createHiddenIframe:function(h){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};z.styleElement(a,h?{display:"none"}:b);return a},tagNameIs:function(h,a){return h.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(h,a){var b,c,d,e=1E4,f=1E4;b=z.nodeIsAbsolutelyPositioned(h);d=!s.tagNameIs(h,
"OBJECT");if(null!==h.parentNode&&!b&&d&&!s.tagNameIs(a,"BODY")){d=h;do d=d.parentNode,b=!s.tagNameIs(d,"OBJECT"),c="inline"!==z.getStyle(d,"display"),b&&c&&(b=s.getRect(d),e=b.width<e?b.width:e,f=b.height<f?b.height:f);while(d.parentNode!==J&&d!==a)}return{width:r.round(e),height:r.round(f)}},hasBackgroundImage:function(h){h=z.getStyle(h,"background-image");return""!==h&&"none"!==h},isEmptyTeadsFrame:function(h){try{var a,b,c=!1;if(h&&h.document){var d=h&&"IFRAME"===h.nodeName&&h.contentDocument;
h.parentElement&&"teads-player"===h.parentElement.classList.item(0)&&d&&(b=(a=d.body)&&1>a.childElementCount)&&(c=!0)}return c}catch(e){return!1}},findChildWithLargestContent:function(h,a){var b=n.getAggregator().request("mobileApp").isMobileAppEnvironment(),c=n.getAggregator().request("omidAdSessionContext"),d=c&&c.hasOwnProperty("ignoreDivAsCandidate"),e=this.hasBackgroundImage,c=function(a){for(var c=a;a.parentNode!==h&&"inline"!==z.getStyle(a.parentNode,"display");){var e;if(!(e=!b)){e=a.parentNode;
var f=!0;if("visible"===z.getStyle(e,"overflow")||"visible"===z.getStyle(e,"overflowX")&&"visible"===z.getStyle(e,"overflowY"))f=!1;e=f&&0<s.getNodeArea(a.parentNode)}!e||b&&d&&"DIV"===a.parentNode.nodeName||(c=a.parentNode);a=a.parentNode}return c},f=null,p=function(a){var b,c,f=null,p=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var g=a[b],k=s.getNodeArea(g),n=g,l=void 0;if(l=n.parentNode===h)if(l=void 0,l="DIV"===n.nodeName)if(l=void 0,l=!e(n))if(l=void 0,!(l="0"===z.getStyle(n,"opacity")||"hidden"===
z.getStyle(n,"visibility"))){for(var r=l=void 0,n=n.childNodes,l=0;l<n.length;l++)1===n[l].nodeType&&(r=!0);l=!r}(n=!l)&&d&&"DIV"===g.nodeName&&(n=!1);l=s.isEmptyTeadsFrame(g);k>p&&n&&!l&&(f=g,p=k)}f&&(f.hasValidSizeForMobileApp=1<p);return f}(function(b){var c,d,e,f,p=[],h=a||"iframe img a object embed div".split(" ");c=0;for(d=h.length;c<d;c++){e=h[c].toLowerCase();var g=b.getElementsByTagName&&b.getElementsByTagName(e);if(g&&g.length)for(e=0,f=g.length;e<f;e++)p.push(g[e])}return p}(h));p&&(f=
c(p),f.hasValidSizeForMobileApp=p.hasValidSizeForMobileApp);return f},screenSize:function(){if(t.isDomless())return{width:0,height:0};var h={width:-1,height:-1};try{g.isDef(w.screen)&&(h={width:w.screen.width,height:w.screen.height})}catch(a){}return h},calcMonDims:function(){var h=g(s.screenSize()).mixin({scrX:0,scrY:0});g.isDef(screen.availLeft)&&(h={scrX:w.screen.availLeft,scrY:w.screen.availTop,width:w.screen.availWidth,height:w.screen.availHeight});return h},getOurIFrameInTop:function(){for(var h,
a=r.getTop(),b=r.getWindow();b!=a;)h=b,b=h.parent;return h},getOurNodeInTop:function(){var h;t.friendly&&(h=t.embedded?(h=s.getOurIFrameInTop())&&h.frameElement:l.contextNode);return h},getAncestorNodes:function(h){var a=[],b=h.ownerDocument&&h.ownerDocument.documentElement;if(b)for(;h.parentNode!==b;)a.push(h),h=h.parentNode;return a},getTagsNamed:function(h,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(h)}catch(d){b=null}return b},containsScriptTagWithSrc:function(h){return!!g(s.getTagsNamed("script")).findFirst(function(a,
b){var c=b.src;return g.isFunction(h)?h(c):c===h})},contains:function(h,a){var b=!1;try{b=g.isDef(h)&&g.isFunction(h.contains)&&h.contains(a)}catch(c){}return b},querySelector:function(h,a){var b;try{b=h.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(h,a){return h.ownerDocument&&(h.ownerDocument.defaultView||h.ownerDocument.parentWindow)===a},setAttributeOf:function(h,a,b){h&&g.isFunction(h.setAttribute)&&h.setAttribute(a,b)},removeAttributeOf:function(h,a){h&&g.isFunction(h.removeAttribute)&&
h.removeAttribute(a)},crossQuerySelector:function(h,a){var b,c,d=[l.contextNode.parentNode,r.getDoc()];t.friendly&&d.push(r.getTop().document);if(a&&t.embedded)try{d.push(r.getWindow().frameElement.ownerDocument)}catch(e){}g(d).each(function(a,d){try{c=s.querySelector(d,h)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(h){return h&&h.nodeName},isWindow:function(h){var a=!1;try{a=h&&"object"===typeof h&&"setInterval"in h}catch(b){a=!0}return!!a},getChildWindowsOf:function(h){var a=[];(h=s.getTagsNamed("iframe",
h))&&(a=g(h).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var h=r.getWindow().frameElement;return h&&h.id},isViewportVisible:function(h,a){var b=h.innerWidth,c=h.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(h){return h.tagName.toLowerCase()},getAttribute:function(h,a){return h.getAttribute(a)},attributeMatches:function(h,a,b){h=h&&s.getAttribute(h,a);return b.test(h)},isImageTag:function(h){return h&&h.src&&s.tagNameIs(h,"img")},
getDimensionFromStyle:function(h){var a,b=z.getStyle(h,"width");h=z.getStyle(h,"height");b&&h&&(a={width:g.getNum(b),height:g.getNum(h)});return a},getDimensionFromAttributes:function(h){var a,b=s.getAttribute(h,"width");h=s.getAttribute(h,"height");b&&h&&(a={width:g.getNum(b),height:g.getNum(h)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,f;if(c(b))e=b;else if(f=b.children)for(d=0;d<f.length&&!(e=a(f[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&
a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===z.getStyle(a,"position"),e="hidden"!==z.getStyle(b,"overflow")&&!d;t.isSpecifiedAd()&&(d||e)&&(c=!1);return c},isNodeCreative:function(a){var b=s.getNodeName(a),c=a&&a.innerText&&0<a.innerText.length,c=a&&a.children&&0===a.children.length&&c,d=b&&-1!==k.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase());return b?!!(d||s.hasBackgroundImage(a)||c):!1},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=
s.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return s.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===s.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},yc=function(){var a={},b=function(b){g.isDef(a[b])?a[b]++:a[b]=1};n.getAggregator().on("error",function(a){a=g(a).isObj()?a.errorCode:
a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},db=function(){return{createInstance:function(a,b){return t.isDomless()?new Uc:new Vc(a,b)}}},Vc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=g(a).map(function(a,b){return b.val}),b.push(l.adsafeSrc,l.requrl,l.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,
f=c(d),p=f&&f.length&&f.join("|"),m=l.exchList;p&&(e=g(m).map(function(a,b){return 0<=p.indexOf(I.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:k.IMPRESSION_EVENT}))}catch(q){a.add(k.ERROR_CODES.EXCHANGE_PARSING)}}}},Uc=function(){return{parse:function(a){}}},sa=function(){var a={},b=function(b){var c;g.isUndef(a[b])&&(c=l.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},c=
{es:"everySecond",sc:"usesca",ha:"usehaps"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"},e=function(){var b,e;b=g(c).mapToObj(function(b,c){var d={};d[b]=g.fromBoolToNum(a[c]);return d});e=g(d).mapToObj(function(a,b){var c={};c[a]=g.fromBoolToNum(f(b));return c});e.gm=g.fromBoolToNum(t.usesGroupMCustomMetric());return g(b).mixin(e)},f=function(a){var b=l[a];return g(["integration"]).contains(a)?!!b:!0===b||"true"===b||g.isFunction(b)};g(c).each(function(a,
c){b(c)});return{on:b,bootstrapOn:f,bootstrapperHas:function(a){a=g.isStr(a)?[a]:a;return g(a).map(function(a,b){if(g.isDef(l[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=l.sp_cdnScripts&&l.sp_cdnScripts[a];return c&&a},setReportedBootstrapFeatures:function(a,b){d[a]=b},reportedBootstrapFeatures:d,output:function(){return g(e()).toParams()}}},Tb=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,
OUT_OF_VIEW:25,PARTIAL_VIEW:50},e=k.NA;c=b?c:d;g.isDef(a)&&a!==k.NA&&-1<a&&(e=a>=c.IN_VIEW?k.IN_VIEW:a<=c.OUT_OF_VIEW?k.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?k.PARTIAL_VIEW_PLUS:k.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,b,c,d){var e=0,f=a;a.hasValidDims()&&!a.isHidden()&&(g([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=f.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),g=Math.max(c.scrY,d.scrY),k=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+
d.height),k=k-e,c=c-g;f=D({scrX:e,scrY:g,width:0<k?k:0,height:0<c?c:0})}}),e=r.round(f.area()/a.area()*100));return e}}},Gb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=w.Uint32Array&&w.crypto&&w.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),w.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);
a=a.slice(0,32)}catch(d){n.getAggregator().trigger("error",k.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return l.anId};return{getAsid:function(){return l.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return g.toBase(a,62)},getFwId:function(){return d()||l.advEntityId+"-"+l.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=
a}}},rb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(k.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},Wc=function(a,b,c,d,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return e?function(){var c=n.getAggregator().request("adRenderStatus"),e=d||b,g=a.getTimeInViewInSeconds();c||n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"nr_"+e,g)}:function(){var e=a.getTimeInViewInSeconds(),p=a.getTimeInViewForRts();
g.isDef(d)&&(n.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:b}),n.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));n.getAggregator().trigger("sendDt",b,e);if(c[p])c[p]()}}}},Yb=function(){return{createPingJobs:function(a,b,c,d,e){return g(b.getTimeThresholds()).map(function(b,p){return new Wc(p,a,c,d,e)})}}},Ka=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-l.birthdate||""}},d=function(){a||(a=n.getAggregator().request("viewabilityDefinitions"));
a&&0==b.length&&g(a).each(function(a,c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var e=a.indexOf(g(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),q=n.getAggregator().request("mScreenEvents").getCurrentEvent(),u=Math.floor(d.time/1E3);g(b).each(function(a,b){var c=!1,c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(q)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&
(n.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:k.DT_CODES.CUSTOM}),n.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:k.DT_CODES.CUSTOM}),n.getAggregator().trigger("sendDt",k.DT_CODES.CUSTOM,u),b.rtsCallbacks&&g.isFunction(b.rtsCallbacks[k.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[k.RTS_KEY_FOR_VQ]())})};return{init:function(){d();n.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},za=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+=
"&");return a.replace(b,"")},b=function(a,b,c){var p=a.indexOf("?");b=b+"="+c;if(-1===p)return a+"?"+b;p++;return a.slice(0,p)+b+"&"+a.slice(p)},c=function(){var a=l.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,e,f,p){var g=c(),q,u,k;p=p||"ias_callback";d=""+d;RegExp(p).test(d)&&(q=RegExp("("+p+"=)(.[^&]*)").exec(d)[0],u=q.split("=")[1],k=I.stringToFn(u),d=a(d,q));w[g]=function(a){e(a);f&&k&&k(a);w[g]=void 0};return d=b(d,p,g)},wrapToGlobal:function(a){var b=
c();w[b]=function(c){a(c);w[b]=void 0};return b}}},ac=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+g(b).stringify(function(a,b){return a+":"+b},","),c=S(a,!0),c.appendToParamValue("adsafe_jsinfo",g.encodeInvalidUrlChars(d,l.encodeInvalidUrlChars)),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,onloadCallback:La,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?n.getAggregator().trigger("jsonp",
c,a.callback,!0):n.getAggregator().trigger("send",c,function(){La();n.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:g.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:g.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){n.getAggregator().on("adImpression",function(e,m){var q;
try{q=d(c,m),a.enabled?n.getAggregator().trigger("jsonp",q,a.callback,!0):n.getAggregator().trigger("send",q,g.noop,!b.on("postMon"))}catch(u){__IntegralASDiagnosticCall("jsvidimp",u,l)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===l.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&n.getAggregator().trigger("jsonp",c(a),function(a){n.getAggregator().trigger("videoBlockResult",a)});n.getAggregator().on("adImpression",function(c,
e){var m;try{var k;if(k=b)k=c&&g.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;k&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));m=d(a,e);n.getAggregator().trigger("send",m,g.noop,!0)}catch(A){__IntegralASDiagnosticCall("fwjsvidimp",A,l)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[l.mode],d=!!b.isFW,g=function(a){var b;b=n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&
l.mobFwUrl?l.mobFwUrl:a?l.adsafeSrc:l.requrl;a||(b+="?"+l.reqquery);return b}(d),u=g.indexOf("BEGIN__ADSAFE"),k=-1!==u,y=k?g.slice(u):"",a=k?g.slice(0,u):a(g);return{isFW:d,baseUrl:a,macroUrl:y,sendImpression:function(a){var d=function(){b.nodeType?n.getAggregator().trigger("addNode",b.nodeType,a,b.onloadCallback):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)n.getAggregator().on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},
random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return w},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?n.getAggregator().request("omidVerificationClient"):w},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,
b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},getDoc:function(){t.isDomless();return J},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},getMutationObserver:function(a){t.isDomless();return new MutationObserver(a)},getResizeObserver:function(a){t.isDomless();
return new ResizeObserver(a)},pow:function(a,b){return Math.pow(a,b)}},Ob=function(){return{createInstance:function(){return t.isDomless()?new Xc:new Yc}}},Yc=function(){var a,b=!1,c=!1;n.getAggregator().request("features");var d=new ba,e=function(){return g.isDef(a.prop)?r.getDoc()[a.prop]:null},f=function(){var b=r.getWindow(),c=function(){d.run(e())};z.addEvent(b,"focus",c,!0);z.addEvent(b,"blur",c,!0);a.event&&z.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",
d=r.getDoc();g.isUndef(d.hidden)?g(["moz","ms","webkit"]).each(function(e,f){var k=f+"Hidden";g.isDef(d[k])&&(a=k,c=f+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:e,onHiddenChange:function(a){d.push(a);c||(c=!0,f())},supportsVisAPI:function(){return b}}},Xc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},Qb=function(){return{createInstance:function(a,b){return t.isDomless()?new Zc:new $c(a,b)}}},$c=function(a,b){var c,
d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||g.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],g.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},f=function(){var f,m=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+
1,d.lastIndexOf(">")),e;if(e=g.isDef(d)){var f=b.getWindow();e=!1;g.isDef(f.navigator)&&g.isDef(f.navigator.userAgent)&&(f=f.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==f&&2==f.length&&(f=f[1].split("."),3==parseInt(f[0],10)&&6>=parseInt(f[1],10)&&(3==f.length?13>=parseInt(f[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},q={};try{q.a=encodeURIComponent(top.location.href)}catch(u){}try{q.b=encodeURIComponent(parent.location.href)}catch(k){}if(t.embedded){try{q.c=encodeURIComponent(parent.document.referrer)}catch(n){}try{q.e=
encodeURIComponent(w.document.referrer)}catch(r){}}try{"jsi"!==l.mode&&(q.d=encodeURIComponent(w.location.href))}catch(x){}try{q.f=encodeURIComponent(l.jsref)}catch(H){}try{f=m(),q.g=encodeURIComponent(f.g||""),q.q=encodeURIComponent(f.q||""),a.isStarted()&&!f.g&&1<a.getMyFrameDepth()&&(q.g=encodeURIComponent(a.getTopDomain()))}catch(O){}q=d(q);q=e(q);f=[];for(var C in q)q.hasOwnProperty(C)&&f.push({key:C,val:q[C]});f.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?
-1:0});return c=f};return{detectTopURL:f,getDetectedURLs:function(){return c?c:f()}}},Zc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},Nb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",l._onSuspicious)},skipAsFraudulent:function(){return b}}},Rb=function(){var a=[],b={},c={sl:"n"},d=0,e,f,p,m={i:0,o:0,n:0,pp:0,pm:0},q=function(a){var b={},c=a.winDimensions,d=a.adDimensions;g.isDef(c)&&c.hasValidDims()&&(b.wc=c);g.isDef(d)&&
d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);g({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];g.isDef(e)&&(b[c]=e)});c=g(b).toParams();return""===c?"":","+c},u=function(a,c){var d=new Nc(c);return b[a]=d},v=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},l=function(){g(c).each(function(b,c){m[c]+=a.length?p-d:p});d=p},r=function(b){a.length&&l();g(b).each(function(a,
b){var d=c[a];d!==b&&"n"===d&&(m[b]+=m.n);c[a]=b});a.length||l()},x=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=q(a);var e=a.omidObstructions,m={sl:v(a.viewState)};p=t.getTagTime();r(m);m.t=p;c=g({toString:function(){g(b).each(function(a,b){b.fastForward()});return"{"+g(m).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+g(this.piv).stringify(b)+
"]");a+=",as:["+g(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(m);g(c).mixin(a);c.width=d.width;c.height=d.height;g.isUndef(c.percentInView)&&(c.percentInView=k.PIV_NA);g.isUndef(c.reason)&&(c.reason="");g.isDef(e)&&""!==e&&(c.omidObstructions=e);return f=c};(function(){u("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(g(d).each(function(a,e){g.isUndef(b)&&c<e&&(b=d[a-1])}),g.isUndef(b)&&(b=d[d.length-1]));return b});u("as",function(a){var b=k.NA;a=a.adDimensions?
a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){p=t.getTagTime();l()},registerLocation:function(d){var f,p=!1;c.sl==v(d.viewState)&&a.length?(f=new x(d),a[a.length-1].details=f.details):(f=new x(d),a.push(f),e=d.viewState,p=!0);n.getAggregator().trigger("newScreenEvent",f);g(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(p&&c.clear(),c.addState(f),a[a.length-1].breakdowns[b]=c.get()):c.addState(f)});return f},stringify:function(b){var c=
"";a.length&&(c=g({slTimes:"{"+g(m).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:u,getCurrentLoc:function(){return v(e)},getCurrentEvent:function(){return f}}},I={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:
a-26)})},stringToFn:function(a){var b,c=w,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],g.isUndef(c)||a===d.length-1&&!g.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!g.isUndef(b));a++);return b},contains:function(a,b){return g.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return g.isFunction(a.trim)?a.trim():a.replace(" ","")}},ad=function(){var a=function(){var a=function(a){return a&&
a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=s.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=s.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,f=function(a){var d=s.tagNameIs(a,"div"),e=s.attributeMatches(a,"class",b);a=s.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return s.traverseAndFindFirstMatchingNode(a,
f)},getClickableImage:function(b){var c,f=(b=s.getFirstChildElement(b))&&s.tagNameIs(b,"a"),g=s.attributeMatches(b,"href",d),k=s.attributeMatches(b,"target",e);f&&g&&k&&(b=s.getFirstChildElement(b),s.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return s.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},bd=function(){var a=ad(),b=function(a,b){b.tag=s.getTagName(a);b.size=s.getDimensionFromAttributes(a)||s.getDimensionFromStyle(a)};
return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}},qc={name:"viewport",dependencies:[],creator:function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!s.isViewportVisible(c,a))return c;if(c!==d&&t.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=r.getWindow();
return b(a,r.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();s.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}}},cd=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,g=a.innerHeight,q=!1;
d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==g)&&(q=!0);q&&!d&&(b(),e(),q=!1);c=a.innerWidth;g=a.innerHeight})}}},oc={name:"AS_Finder",dependencies:["viewport"],creator:function(a,b){var c,d=function(){try{var d=a.isHidden(),f,p={};d!==c&&(f=g.stringifyTriState(d),p.res1=f,p.ps=f,p.ts=r.now(),p.psfr=g.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",p));c=d}catch(m){n.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();
var b=a.getWindowWithHiddenViewport();if(b)cd(b).onResize(d)}}}},settings:{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}}},pc={name:"hA",dependencies:["AS_Finder"],creator:function(a){var b=0,c=function(a,b){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,a,g(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,f;if(t.embedded)try{f=l.contextNode.parentNode,b=bd().getDFPValue(f),f={},f.df=b.type,b.size&&(f.sz=b.size.width+"."+b.size.height),
b.tag&&(f.dom=b.tag),c("dfp",f),b.size&&a&&(a.events.on("newState",d),a.start())}catch(g){n.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN)}})()},settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}}},Ma=function(a,b,c,d){var e,f=0,p=0,m=!1,q=function(){e=Math.round(s.getNodeArea(a.body));if(e>=d){for(var q,u=e+20*e/100,l=a.querySelectorAll("iframe"),l=g.fromNodeListToArray(l);l.length&&(p<u||f<c);)q=l.shift(),q=Math.round(s.getNodeArea(q)),q>=d&&(f++,
p+=q);p>=u&&f>=c&&(u={va:e,bia:p,bin:f},n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,b,g(u).toION()),m=!0)}},u=function(){var b;b=new MutationObserver(function(a){m?b.disconnect():r.execAtEndOfThread(function(){g(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&s.isElement(c)&&s.tagNameIs(c,"IFRAME")&&g.debounce(q,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(r.execAtEndOfThread(q),!m&&g.isDef(w.MutationObserver)&&u())},
nc={name:"BS_InApp",dependencies:[],creator:function(){var a=r.getWindow().document;n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Ma(a,"bs1",3,100)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}}},mc={name:"BS_Browser",dependencies:[],creator:function(){var a=r.getWindow().document,b=a.body?Math.round(s.getNodeArea(a.body)):null;!n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&
b&&Ma(a,"bs2",10,b)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}}},Lb=function(){return{createInstance:function(a){return t.isDomless()?new dd:new ed(a)}}},ed=function(a){var b,c,d,e=new Ca,f=new ca,p=new fd(e),m=new gd,q=new hd,u=new id(e,a),k=function(){g.isUndef(d)&&(d=new jd(e));return d},l=function(){e.provide({frameCollection:function(){return p},adProxy:function(){return q},adTalkMessage:function(a){return new kd(a,
e)},adTalkMessageCollection:function(){return m},idMapModule:k,interFrameQuerySelector:function(a){return new ld(a)}})};return{isApplicable:function(a){return g.isDef(w.JSON)&&g.isDef(w.postMessage)&&!a.isAvid()&&(!a.isOmidNative()||a.isOmidForWeb())},start:function(){l();f.traverse(p.addFrame);u.startListening();u.sendToKnownFrames();n.getAggregator().once("stopAdTalk",function(){u.stopListening()});n.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:u.sendAdTalkCall,getFrameMap:function(){g.isUndef(b)&&
(b=new Na(e));return b},getFrameMapIncludingPeerCase:function(){g.isUndef(c)&&(c=new Na(e,!0));return c},getIdMap:k}},dd=function(){return{isApplicable:function(){return!1},start:function(){}}},kd=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=n.getAggregator().request("features").on("swapids")?l.oid:l.asid;var f=a||{},g=l.asid,d=d.tagId,m=t.embedded,q=t.friendly,u=l.birthdate;c=c.split("-")[2];var v;t.friendly?v="["+k.AD_IDENTIFIER+
"-"+l.asid+"]":(v=r.getWindow(),v=v.location&&v.location.href,v='iframe[src*="'+(v&&v.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:f,srcAsid:g,srcTagId:d,srcIsEmbedded:m,srcIsFriendly:q,srcBirthdate:u,iasCommonId:c,nodeSelector:v,positionStr:e,version:"0.1"}},gd=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return g(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},md=function(a,b,c,d){var e,f=a==w;e={position:b.slice(0),id:b.join("-"),
isMe:f,isLeaf:!a.frames.length,adProxies:f?c:[],selfDescription:void 0,unifiedId:l.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return g(e.position).map(function(a,b){return g.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||g.isDef(e.selfDescription)}};var p=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?g(a).each(function(a,d){m(b,d)&&c.push(d)}):c=
a;e.adProxies=b.concat(c)},m=function(a,b){return!g(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},q=function(a){g(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){p(b);q(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},fd=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,f,g){var m=a.request("adProxy").getAll();e=new md(e,f,m,g);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},
getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Na=function(a,b){var c=function(a,c){var g=c.adProxies,m="";if(c.isValidForMapping()){if(b)m+=d(g,c.getStringifiedPosition());else{var q;q=""+c.getStringifiedPosition();q+=c.isMe?"*":"";q+=g.length?"."+g[0].tagId:"";m+=q}return m}},d=function(a,b){var c="";return c=a.length?c+g(a).stringify(function(a,c){return b+(l.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),
d=g(b.list).stringify(c,"|");return g.toBase(b.getMe().unifiedId,62)+"+"+d}}},jd=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=l.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},f=function(a){var e=!1,e=!t.embedded,f="BODY"!==s.getNodeName(c)&&"HEAD"!==s.getNodeName(c),g;if(g=a.srcIsEmbedded){g="0.1"!==a.version;var l=a.nodeSelector&&-1===a.nodeSelector.indexOf(k.AD_IDENTIFIER);g=!(g?l:!a.srcIsFriendly)}e&&
f&&!g?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&t.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==l.asid&&f(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),n.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:f}},ld=function(a){var b=new ca,c=function(a){var b=
a,c="IFRAME"===s.getNodeName(a),d=s.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return s.querySelector(c(a),b)},e=function(c,e){var m,q,k;try{q=d(c,e),q||(m=b.getFrames(!0,a),g(m).findFirst(function(a,b){return k=d(b,e)}))}catch(l){}return q||k||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},id=function(a){var b=!1,c,d;d=n.getAggregator().request("features").on("swapids")?l.oid:l.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&
b.srcAsid!==l.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},f=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},p=function(){var c=k.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);n.getAggregator().trigger("sendDt",c)},m=function(c,d,e){var f,m,l,H,t;try{f=a.request("frameCollection");m=a.request("adTalkMessageCollection");l=d.messageContent.self;m.add(d);var C=f.getMe();C.unifiedId>l.unifiedId&&
(C.unifiedId=l.unifiedId);var s;s=r.now()-d.sentTime;d.transferDuration=s;m=H=f.getFrame(l.id);g.isUndef(m)||g.isUndef(m.selfDescription)?(H=H||f.addFrame(c.source,l.id.split("-"),d),H.addInformationFromSrc(d,l),e()):H.addInformationFromSrc(d,l);(t=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&p()}catch(w){n.getAggregator().trigger("error",k.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:p,sendToKnownFrames:function(){(new da).send(f)},startListening:function(){c=new Ea;c.listen(e,m,
f)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:m,createMessage:f}},nd=function(){var a=n.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},hd=function(){var a,b=[],c=function(a){a=new nd(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Sb=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-
a.clientY,e=!1);return e};a.browserIs(k.BROWSERS.IE)&&z.addEvent(r.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(k.BROWSERS.IE)&&(d=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},od=function(a,b){var c,d,e=k.NA,f=e,p=!1,m=!1,q=!1,u=!b,l=n.getAggregator().request("browser"),y=function(a,b){Ic().applies(l)&&r.getResizeObserver(function(c,d){var e=c.pop();0<e.contentRect.height*e.contentRect.width&&(b.unobserve(a),b.observe(a),d.disconnect())}).observe(a)},
A=function(){var b=r.getIntersectionObserver(function(a,b){var d=a.pop(),g=d.intersectionRect.width*d.intersectionRect.height/(d.boundingClientRect.width*d.boundingClientRect.height)*100;isNaN(g)&&(y(d.target,b),g=0);e=Math.min(g,100);c=d.boundingClientRect;e!==f&&r.execAtEndOfThread(function(){n.getAggregator().trigger("IOPivChange",e)});f=e},{threshold:k.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});u&&r.execAtEndOfThread(function(){e===k.NA&&(e=0)});b.observe(x(a));u&&r.execAtEndOfThread(function(){t.isBustedIframe()||
n.getAggregator().trigger("delayedViewabilityReady")});p=!0},x=function(b){if(!g.isUndef(b)){if(q){b=a.document;var c=b.createElement("div");g(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[k.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return d=b}};return{start:function(){var b;try{a.document&&(q=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){m=!0}b&&null!==b.bodyElement?A():b&&b.document?z.whenReady(A,b.document):m?
n.getAggregator().request("errors").add(k.ERROR_CODES.BUSTED_IFRAME_IN_IO):A()},isReady:function(){return e!==k.NA},isStarted:function(){return p},getAdNodeDimensions:function(){var a;c&&(a=D({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},getObservedNode:function(){return d},getPiv:function(){return e}}},ta=function(){var a=!1;(function(){z.whenReady(function(){n.getAggregator().trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}},uc={name:"loopDelay",
dependencies:[],creator:ta,settings:{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:k.TIERS.VIEWABILITY}},pd=function(){return{start:function(a){n.getAggregator().on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(k.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},qd=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},jb=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&
(d=!0,n.getAggregator().trigger("notify",l._onMeasurable))};return{start:function(){var b;b=[rd(),sd(),qd(),pd()];(b=g(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&g.isDef(l._onMeasurable)}}},sd=function(){return{start:function(a){Kc(n.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(k.BROWSERS.WEBKIT)||
c)&&t.isVideo()}}},rd=function(){return{start:function(a){n.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},td=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();g.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=g.isDef(g(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,
supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){n.getAggregator().trigger("adImpression")})}}},ud=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&g.isDef(d)&&(c=d.mediaType||k.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=
!1,c=a.getAvidAdSessionContext();g.isDef(c)&&(b=c.avidJsVersion,(c=g.isUndef(b))||(c=g.getNum(b.split(".")[0]),b=g.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},vd=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=g.isDef(g(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",
function(a){"AdImpression"===a.eventSubType&&n.getAggregator().trigger("adImpression")})}catch(b){}}}},wd=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=g.isDef(g(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},aa=function(a){var b=r.getWindow(),b=b&&b.omid3p,c=
n.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&g.isFunction(b.registerSessionObserver)&&g.isFunction(b.addEventListener));return{accepts:function(){return(d||e)&&!l.videoId},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},xd=function(a,b,c){var d=n.getAggregator().request("omidAdSessionContext"),d=d.isHtml&&d.isWeb,e,f=r.getWindow(),p=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?
f:a;e=d?["rjss","jss","jload","jsvid","fwjsvid"]:["rjss","jss","jload"];return{accepts:function(){var a=g.isDef(g(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){p.addEventListener("start",function(a){n.getAggregator().trigger("adImpression")})}}},Dc=function(a){return{resolve:function(){return g(a).findFirst(function(a,
c){return c.environment.accepts()})}}},Ac=function(a){var b=!1,c=!1,d=!1,e=!1,f=n.getAggregator().request("omidAdSessionContext");f.queuedOutputItems=[];var p=new fa,m=n.getAggregator().request("omidAdSessionVerificationParameters"),q=n.getAggregator().request("features"),k=r.getWindow(),v=(k=k&&k.omid3p)&&g.isFunction(k.registerSessionObserver)&&g.isFunction(k.addEventListener)?k:a,y=!1;f.omidEarlyExit=!1;f.mediaType="display";var A=!1,x=function(a,b){f.queuedOutputItems.push({code:a,value:b})},
H=function(a,b,c){n.getAggregator().trigger(a,b,c)},s=function(a){n.getAggregator().trigger(a)},C=function(){if(b&&c&&(!e||d)){w.omidSupported=!0;f.hasOwnProperty("impressionType")&&x("oiet",f.impressionType);f.hasOwnProperty("creativeType")&&x("oct",f.creativeType);f.underEvaluation&&x("oef",!0);y=f.exitedOASRS=!0;var a=m&&m.IAS&&0<Object.keys(m.IAS).length;ua(a?m.IAS:m)}},ib=function(a){function g(){return a.data.hasOwnProperty("supportsLoadedEvent")&&("true"===a.data.supportsLoadedEvent||!0===
a.data.supportsLoadedEvent)&&"string"===typeof a.data.creativeType&&""!==a.data.creativeType}var p="0";if("sessionStart"===a.type){f.adSessionType=a.data.context.adSessionType;f.environment=a.data.context.environment;f.accessMode=a.data.context.accessMode;f.omidNativeInfo=a.data.context.omidNativeInfo;f.omidJsInfo=a.data.context.omidJsInfo;f.deviceInfo=a.data.context.deviceInfo;f.app=a.data.context.app;f.app&&"string"===typeof f.app.appId&&-1<f.app.appId.toLowerCase().indexOf("pandora")&&(f.ignoreDivAsCandidate=
!0);a.data.hasOwnProperty("contentUrl")&&(f.contentUrl=a.data.contentUrl);a.data.context.hasOwnProperty("underEvaluation")&&(f.underEvaluation=a.data.context.underEvaluation);f.isJavaScript="javascript"===f.adSessionType;f.isNative="native"===f.adSessionType||"javascript"===f.adSessionType;f.isLimitedSandbox="app"===f.environment?t.embedded:"full"!==a.data.context.accessMode;f.isHtml="html"===a.data.context.adSessionType;f.isWeb="web"===a.data.context.environment;m=a.data.verificationParameters;f.isOmidForWebEnvironment=
f.isHtml&&f.isWeb;f.element=a.data.context.videoElement||a.data.context.slotElement||null;g()?(e=!0,f.useOMID13Logic=!0,x("ohand","13"),v.addEventListener("video",F),v.addEventListener("media",F)):x("ohand","12");f.isOmidForWebEnvironment||(f.integratedBlocking=l&&l.isResolved&&t.integratedBlockingApplies(l.mobFwUrl),f.integratedBlocking&&q&&q.on("exitOASRSEarly")&&(f.omidEarlyExit=!0,p="1",f.omidEarlyExit&&-1<l.mobFwUrl.indexOf("xmtp=v")&&(f.mediaType="video")),!a.data.mediaType||"display"!==a.data.mediaType&&
"video"!==a.data.mediaType||(f.mediaType=a.data.mediaType));f.omidEarlyExit&&(c=!0,x("omtp",f.mediaType),g()&&(d=!0),"video"===f.mediaType&&(f.isVideo=!0),f.isNativeVideo=f.isNative&&f.isVideo,f.isDisplay="display"===f.mediaType);for(var k=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},
{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],u,n,r,A=0;A<k.length;A++)u=k[A].root,n=k[A].field,r=k[A].code,"object"===typeof f[u]&&"undefined"!==typeof f[u][n]&&x(r,f[u][n]);x("oast",f.adSessionType);x("oacm",f.accessMode);x("oenv",f.environment);f.hasOwnProperty("contentUrl")&&
x("ocon",encodeURIComponent(f.contentUrl||""));x("oerl",p);x("oses",t.getTagTime());b=!0;C()}"sessionError"===a.type&&(p=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?a.data.message:"NoMessage"),y?H("addOutputItem",{output:p},"oser"):x("oser",p))},z=function(a){"impression"===a.type&&(f.omidImpressionArrived=!0,s("omidimpressionarrived"),f.mediaType=a.data.mediaType,x("omtp",f.mediaType),x("oimp",t.getTagTime()),"video"===
a.data.mediaType&&(f.isVideo=!0),a.data.adView&&(a.data.viewport||f.isWeb)&&(f.impressionViewabilityMeasurement={type:"geometryChange",data:{viewport:a.data.viewport,adView:a.data.adView}},"undefined"===typeof f.geometryArrived&&p.checkForViewAttachmentBasedOnAdSessionType(f,a.data.adView)&&(f.geometryArrived=!0,s("omidrendgeoupdate"))),a.data.hasOwnProperty("impressionType")&&!d&&(f.impressionType=a.data.impressionType),f.isNativeVideo=f.isNative&&"video"===a.data.mediaType,f.isDisplay="display"===
a.data.mediaType,c=!0,C())},F=function(a){a&&"start"===a.type?(f.videoStartArrived=!0,s("omidrendvideostart")):"loaded"===a.type&&(x("oloa",t.getTagTime()),d=!0,f.omidLoadedArrived=!0,s("omidloadedarrived"),a.data.hasOwnProperty("creativeType")&&(f.creativeType=a.data.creativeType),a.data.hasOwnProperty("impressionType")&&(f.impressionType=a.data.impressionType),!0!==f.omidEarlyExit||A||(H("addThrottledOutputItem","oiet",f.impressionType),H("addThrottledOutputItem","oct",f.creativeType),A=!0),C())};
return{start:function(){v.registerSessionObserver(ib,"IAS");v.addEventListener("impression",z)}}},Bc=function(){return{accepts:function(){return!0}}},Ia=function(){var a=n.getAggregator().request("omidAdSessionContext"),b=n.getAggregator().request("omidVerificationClient"),c=new aa(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},Cc=function(){return{start:function(){ua(l.contextNode&&(l.contextNode.dataset.iasParameters||l.iasParameters))}}},yd=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",
{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},zd=function(a,b){var c,d=function(a){var d,g,m;try{d=a.eventData.percentageInView,g=c&&75<=d,m={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:g,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,
numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",m)}catch(q){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Ad=function(a,b){var c=[],d=(new Date).getTime(),e=0,f=0,p=!1,m=new Ka,q=n.getAggregator().request("omidAdSessionContext"),u=r.getWindow(),v=(u=u&&u.omid3p)&&
g.isFunction(u.registerSessionObserver)&&g.isFunction(u.addEventListener)?u:a,y={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("rt:"+d.rt+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},A=function(){p=!0},x=function(a){if(-1!=="|start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish|complete|pause|bufferStart|skipped|playerStateChange|loaded|volumeChange|".indexOf("|"+
a.type+"|"))try{var m="",u=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),v=u-(l.birthdate||u+1),y="n",x=!1;switch(a.type){case "start":m="adVideoStart";q.videoStartArrived=!0;n.getAggregator().trigger("omidrendvideostart");d=u;f=a.data.duration;1E3<f&&(f/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":m="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":m="adVideo"+a.type.substring(0,1).toUpperCase()+
a.type.substring(1);x=!0;n.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":m="pauseAd";break;case "resume":case "bufferFinish":m="resumeAd";break;case "skipped":m="adSkipped"}if(""!==m){var r=n.getAggregator().request("mScreenEvents");r&&(y=r.getCurrentLoc());c.push({t:u-d,rt:v,tp:m,sl:y,ad_duration:f,volume:e})}if("loaded"===a.type&&g.isDef(a.data)){var A=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),m=-1!==A?A+1:void 0,u=[];!0===a.data.autoPlay?
u.push("autoplayed"):u.push("clicktoplay");!0===a.data.skippable&&u.push("skippable");"fullscreen"===a.data.state&&u.push("fullscreen");var t=u.join(".");!0===p?(g.isDef(m)&&n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vbp",m),n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vps",t)):(g.isDef(m)&&n.getAggregator().trigger("addOutputItem",{output:m},"vbp",{type:k.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:t},"vps",{type:k.IMPRESSION_EVENT}))}"start"===
a.type&&n.getAggregator().trigger("omidAdDuration",{ad_duration:f});var s;"playerStateChange"===a.type?s="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?s="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(s="AdPaused");g.isDef(s)&&b.trigger("videoPlaybackEvent",{eventType:s,eventData:null});x&&n.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS)}catch(z){__IntegralASDiagnosticCall("omidvideo",
z,w.bootstrapper)}};return{start:function(){n.getAggregator().on("impressionsent",A);n.getAggregator().provide({omidVideoEventsString:y});v.addEventListener("video",x);m.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Oa=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?k.IN_VIEW:k.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":k.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){n.getAggregator().trigger("addOutputItem",
{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Bd=function(a,b,c){var d=g.isDef(a)?a.environment:void 0,e=g.isDef(a)?a.measurementStrategy:void 0,f=function(){return g.isDef(e)};g.isDef(b)&&b.start();return{hasMeasurementStrategy:f,getScreenLocationInfo:function(a){return b.create(a)},
isImmediate:function(){return f()?d.isImmediate():!0},isMeasurable:function(){return f()?e.isMeasurable():!1},isMediaType:function(a){return f()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){f()&&d.start()},requiresDelayedViewabilityEvent:function(){f()&&b.requiresDelayedViewabilityEvent()}}},Ib=function(a,b,c){var d=n.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),
b=b.concat(a.getAvidMeasurementStrategies()),b=b.concat(a.getMraidMeasurementStrategies());(b=(new ga(b)).resolve())||n.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var c=new Cd(b);return new Bd(b,c,d.isMobileAppEnvironment())}}},Jb=function(a){var b=n.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=n.getAggregator().request("omidVerificationClient"),b=new aa(a),e=[];if(b.accepts()){var f=new Ha,g=new Dd,m=new Ia,q=n.getAggregator().request("omidAdSessionContext"),
k=new Ed(a,new B),f=[{environment:f,measurementStrategy:new Fd(a,new B)},{environment:m,measurementStrategy:new Gd(new Pa,r.getWindow(),new B)},{environment:g,measurementStrategy:new Qa(new ha,r.getWindow(),new B)}],f=(f=(new ga(f)).resolve())?f.measurementStrategy:{},m=new Ra(new Sa(new U),new U,q.isHtml),q=new wd(a,b,l.mode),g=new Ta(k,f,new B,m),b=new xd(a,b,l.mode),a=new Ua(k,f,new Ad(a,new B),new B,m);e.push({environment:q,measurementStrategy:g});e.push({environment:b,measurementStrategy:a})}return e},
getAvidMeasurementStrategies:function(){var b=n.getAggregator().request("avidJsClient"),d=new ud(b),e=[];if(d.accepts()){var f=new td(b,d,l.mode),g=new vd(b,d,l.mode),m;m=new yd(b,new B);if(d.supportsAdContainerGeometry()){var q=new Hd,k=new Id,v=new Qa(new ha,r.getWindow(),new B),y=new Jd(b,new B),q=(q=(new ga([{environment:q,measurementStrategy:y},{environment:k,measurementStrategy:v}])).resolve())?q.measurementStrategy:{},k=new Ra(new Sa(new U),new U,k.accepts()),v=new Kd(b,new B),b=new Ta(v,q,
new B,k);m=new Ua(v,q,m,new B,k)}else k=new zd(b,new B),b=new Oa(k,new B),m=new Va(k,m,new B);e.push({environment:f,measurementStrategy:b});e.push({environment:g,measurementStrategy:m});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Ld(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=n.getAggregator().request("context"),e=new Md(r.getWindow(),e),f=new Nd(r.getWindow(),new B);e.accepts()?
(d=new Od(r.getWindow(),new B),d=new Va(f,d,new B),d={environment:e,measurementStrategy:d}):(e=new Oa(f,new B),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},ga=function(a){return{resolve:function(){var b=g(a).findFirst(function(a,b){return b.environment.accepts()});if(g.isDef(b))return b}}},Cd=function(a){var b=!1,c,d={winDimensions:D({scrX:0,scrY:0,width:0,height:0}),adDimensions:D({scrX:0,scrY:0,width:0,height:0}),containerDimensions:D({scrX:0,scrY:0,width:0,height:0}),method:k.NA,
viewState:k.NA,percentInView:k.PIV_NA,reason:"",obstructed:k.NA,isHidden:k.NA,tabHidden:k.NA,posViewState:k.NA,adCompCount:1},e=function(a){return a?new D({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):D({scrX:0,scrY:0,width:0,height:0})},f=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||k.NA,viewState:a.viewState||k.NA,percentInView:g.isDef(a.percentageInView)?a.percentageInView:k.PIV_NA,
reason:a.outOfViewReason||"",obstructed:g.stringifyTriState(a.isObstructed),isHidden:k.NA,tabHidden:k.NA,posViewState:a.viewState||k.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};var d=a.omidObstructions;g.isDef(d)&&""!==d&&(c.omidObstructions=d);a.isMeasurable&&b&&(b=!1,n.getAggregator().trigger("delayedViewabilityReady"))};
return{create:function(b){var e=d;if(g.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;g.isDef(a)&&g.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(f),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Va=function(a,b,c){var d=!1,e=!1,f=!1,p,m,q,u,l=function(){if(!g.isUndef(m)){var a=
[],b,l;d?(e?(l=!1,b=100):(l=u,b=q),50>b&&a.push(k.OUT_OF_VIEW_REASONS.GEOM)):(l=!1,b=0,a.push(k.OUT_OF_VIEW_REASONS.VIDEO));f=!0;m.shouldDelegateToDomBasedViewability=l;m.percentageInView=b;m.viewState=50>b?k.OUT_OF_VIEW:k.IN_VIEW;m.outOfViewReason=a.join(".");p=m;c.trigger("measurementChanged",p)}},y=function(a){m=a;q=a.percentageInView;u=a.shouldDelegateToDomBasedViewability;l()},r=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?
d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);l()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(y);a.start();b.addVideoPlaybackEventListener(r);b.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return f}}},
Md=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,n.getAggregator().trigger("adImpression"))})}catch(d){}}}},Od=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},
addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Kd=function(a,b){var c=function(a){var c=new D(a.eventData.viewport||{width:0,height:0}),g=new D(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),m=new D(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:g.getRoundedGeometry(),computedAdContainer:m.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:k.DETECTION_METHODS.AVID,
outOfViewReason:d(a.eventData.reasons)};b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";g(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",
c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},Ra=function(a,b,c){function d(a,b,c){c=m(b,c);a=f(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},f=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},
p=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},m=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,l){if(g.isDef(e)&&g.isDef(l)){var n=e.viewport,y=e.computedAdContainer,A=y.obstructions,x=e.omidObstructions,t=A&&0<A.length,s=e.originalAdContainer,C=l.adGeometry,w=l.adFound,z=e.detectionMethod,F=0,n={x:0,y:0,width:n.width,height:n.height},G=p(s,C),R=e.outOfViewReason,M=0,K=0,B=t||!1,M=1>=C.width*C.height;
c&&M&&(w=!1,R=R||"",w||-1!==R.indexOf(k.OUT_OF_VIEW_REASONS.GEOM)||(R=k.OUT_OF_VIEW_REASONS.GEOM+(""!==R?"."+R:"")));if(w&&0<e.percentageInView){M=d(n,y,G);t?(F=m(y,G),F=f(n,y,F),F=p(y,F),F=a.calculateObstructedArea(F,A)):F=0;K=F;F=Math.round((M-K)/(G.width*G.height)*100);t&&0===K&&(B=!1);for(var C=(new D(G)).getRoundedGeometry(),w=B,N,t=0,K=b.getConfig(C).numberOfSlices,T=r.floor(C.height/K)||1,A=[],M=w?a.getObstructionStatusBySlice(K):[],Da,t=0;t<K;t++)N=C.y+T*t,t==K-1&&(T=C.y+C.height-N),N={x:C.x,
y:N,width:C.width,height:T},Da=d(n,y,N),N=1==Da/(N.width*N.height),A.push(N);if(w)for(y=r.min(M.length,K),t=0;t<y;t++)A[t]=A[t]&&!M[t];y=A}else y=b.getConfig(C).defaultSliceArray;s={windowDimensions:n,containerDimensions:s,adDimensions:G,percentageInView:F,viewState:50<=F?k.IN_VIEW:k.OUT_OF_VIEW,outOfViewReason:50<=F?"":R||k.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:z,isObstructed:B,sliceStatus:y};g.isDef(x)&&""!==x&&(s.omidObstructions=x);return s}}}},Hd=function(){return{accepts:function(){return t.isAvidNative()}}},
Jd=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;a=!!c;c=(new D({x:0,y:0,width:a?c.width:0,height:a?c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,adFound:a})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Id=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},Ta=function(a,b,c,d){var e,f,p,m=function(){if(g.isDef(e)&&
g.isDef(f)){var a=d.calculateGeometricMeasurement(e,f);p=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},q=function(a){e=a;m()},l=function(a){f=a;m()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(q);a.start();b.addAdGeometryMeasurementChangedListener(l);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",
a)},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return p}}},Sa=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var f,p,m,q;p=e&&0<e.length;var k;if(p){k=Math.round(d.width);var l=Math.round(d.height);f=Array(k);for(m=0;m<k;m++)f[m]=Array(l);k={matrix:f,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:k,height:l}}else k={};f=k;l=k=0;if(p){for(;k<e.length;k++){p=e[k];m=l=f;var n=p;f=Math.max(m.x,n.x);p=Math.max(m.y,n.y);
q=Math.min(m.x+m.width,n.x+n.width);n=Math.min(m.y+m.height,n.y+n.height);m=q-f;q=n-p;m=0<m?m:0;q=0<q?q:0;f-=l.x;p-=l.y;m=f+m;q=p+q;for(f=Math.round(f);f<Math.round(m);f++)for(n=Math.round(p);n<Math.round(q);n++)void 0!==l.matrix[f]&&void 0===l.matrix[f][n]&&(l.matrix[f][n]=1,l.obscuredPixelCount+=1);f=l}l=f.obscuredPixelCount;k=f;if(g.isUndef(k.matrix)||0===k.matrix.length)c=[];else{p=0;q=!1;f=k.matrix[0].length;m=k.matrix.length;q=a.getConfig({height:f}).numberOfSlices;for(var n=r.floor(f/q)||1,
t=[],x=0;x<f;x++){q=!1;for(var s=0;s<m;s++)if(1===k.matrix[s][x]){q=!0;break}p++;q&&(x+=n-p,p=n);if(p==n||x===f-1)t.push(q),p=0}c=t}}else c=b;return l},getObstructionStatusBySlice:function(){return c}}},Ed=function(a,b){var c=n.getAggregator().request("omidAdSessionContext");c.geometryChangeEvents=[];var d=null,e=!1,f=r.getWindow(),p=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a,m=new fa,q=function(){var a=r.getDoc().getElementById("iasbi"+l.asid);
a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(u(d),d=null)):r.setTimeout(q,50)},u=function(a){if(a&&"geometryChange"===a.type&&a.data&&a.data.adView){var f=a.data.adView,p=!!(f.measuringElement&&f.containerGeometry&&f.onScreenContainerGeometry);10>c.geometryChangeEvents.length&&(c.geometryChangeEvents.push(t.getTagTime()+"."+f.percentageInView),n.getAggregator().trigger("addOutputItem",{output:c.geometryChangeEvents.join("_")},"ogeo"));if(c.delayingViewabilityEvents)d=
a,e||(e=!0,q());else{var l=[];f.onScreenGeometry&&f.onScreenGeometry.obstructions&&0<f.onScreenGeometry.obstructions.length&&(p&&(f.onScreenContainerGeometry.obstructions=f.onScreenGeometry.obstructions),f.reasons&&-1<f.reasons.indexOf("obstructed")&&100>f.percentageInView&&(f.onScreenGeometry.obstructions=f.onScreenGeometry.obstructions.slice(0,4),g(f.onScreenGeometry.obstructions).each(function(a,b){l.push(Math.round(b.x)+"."+Math.round(b.y)+"."+Math.round(b.width)+"."+Math.round(b.height))})));
var u=t.isOmidForWeb()?s.calcWinDims():{width:0,height:0},u=new D(a.data.viewport||u),r=new D(p?f.containerGeometry:f.geometry||{x:0,y:0,width:0,height:0}),p=new D(p?f.onScreenContainerGeometry:f.onScreenGeometry||{x:0,y:0,width:0,height:0}),f={viewport:u.getRoundedGeometry(),originalAdContainer:r.getRoundedGeometry(),computedAdContainer:p.getRoundedGeometry(),percentageInView:f.percentageInView,detectionMethod:k.DETECTION_METHODS.OMID,outOfViewReason:v(f.reasons),omidObstructions:l.join("_")};"undefined"===
typeof c.geometryArrived&&m.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,f)}}},v=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN,hidden:k.OUT_OF_VIEW_REASONS.HIDDEN},
c=[];if(!a)return"";g(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&u(c.impressionViewabilityMeasurement);p.addEventListener("geometryChange",u)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:v}},Ha=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&
(a.isNative||a.isLimitedSandbox)}}},Fd=function(a,b){var c=n.getAggregator().request("omidAdSessionContext"),d=null,e=!1,f=r.getWindow(),p=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a,m=new fa,q=function(){var a=r.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(u(d),d=null)):r.setTimeout(q,50)},u=function(a){if(a&&"geometryChange"===a.type&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=
a,e||(e=!0,q());else{var f=a.data.adView.geometry,g=a.data.adView.containerGeometry,p=!!f,l=a.data.adView.measuringElement&&!!g,f=(new D({x:p&&l?f.x-g.x:0,y:p&&l?f.y-g.y:0,width:p?f.width:0,height:p?f.height:0})).getRoundedGeometry();"undefined"===typeof c.geometryArrived&&m.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:f,adFound:p})}};return{start:function(){void 0!==
c.impressionViewabilityMeasurement&&u(c.impressionViewabilityMeasurement);p.addEventListener("geometryChange",u)},addAdGeometryMeasurementChangedListener:function(a){b.on(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Dd=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Gd=function(a,b,c){var d,e=function(){var b=a.find(),e,m,q=!1;g.isDef(b)&&null!==b?(m=!0,e=b.getBoundingClientRect(),e={x:0,y:0,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&
(e.adWasClipped=!0)):(d&&(q=!0,e={x:0,y:0,width:0,height:0}),m=!1);if(b=m)b=e,b=!g.isDef(d)||!1!==g(b).compareTo(d);if(b||q)d=e,c.trigger(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:m})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Ua=function(a,b,c,d,e){var f=!1,p=!1,m,q,l,v,r,t=function(){if(!(g.isUndef(q)||g.isUndef(l)||g.isUndef(v))){r=!0;var a=e.calculateGeometricMeasurement(q,
l),b=f&&p,c=f&&50<=a.percentageInView,n={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:f,isVideoPlayingInFullscreen:b,isSoundOn:!0},t=a.omidObstructions;g.isDef(t)&&""!==t&&(n.omidObstructions=t);b&&(n.percentageInView=100);b||c?n.viewState=k.IN_VIEW:(n.viewState=k.OUT_OF_VIEW,n.outOfViewReason=
a.outOfViewReason||k.OUT_OF_VIEW_REASONS.VIDEO);m=n;d.trigger("videoGeometryMeasurementChanged",m)}},x=function(a){q=a;t()},s=function(a){l=a;t()},O=function(a){v=a;a=a.eventType;"AdEnteredFullscreen"===a?p=!0:"AdExitedFullscreen"===a?p=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?f=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(f=!1);t()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,
{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(x);a.start();b.addAdGeometryMeasurementChangedListener(s);b.start();c.addVideoPlaybackEventListener(O);c.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return r}}},Qa=function(a,b,c){var d,e=function(){var b=a.find(),e,m,q=!1;g.isDef(b)?(m=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,
width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(q=!0,e={x:0,y:0,width:0,height:0}),m=!1);if(b=m)b=e,b=!g.isDef(d)||!1!==g(b).compareTo(d);if(b||q)d=e,c.trigger(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:m})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Ld=function(a,b,c){return{accepts:function(){var d=g(a.mraid).isObj();return c&&(d||b)},
isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},Nd=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:k.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(g){}},
e=function(){var b=a.mraid;return g(b).isObj()&&g.isFunction(b.isViewable)},f=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},p=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){f()}):f())},m=function(){c||p()};return{start:function(){var b=!0;if(g.isDef(a.mraid)||s.containsScriptTagWithSrc("mraid.js"))b=!1;n.getAggregator().trigger("addOutputItem",{output:g.stringifyTriState(b)},"mi",{type:"impression"});b?n.getAggregator().trigger("exec",
"mraid.js",m):p()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},gc=function(a,b,c){var d={},e=function(c){var d=g.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||n.getAggregator().trigger("notify",c)});return d};(function(){c&&g(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},vb=function(){var a=new P({tiv:[1E4]}),b=g([k.IN_VIEW,k.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:k.DT_CODES.FULLY_INVIEW,
rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==l.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},ub=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,9E4];var g=[2E3,5E3,15E3],m=function(a,b){return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a[b?
"viewStateIgnoringRender":"viewState"])};c?(c=new P({tiv:d}),d=d[0]):f?(c=new P({tiv:g}),d=g[0]):(c=new P({tiv:e}),d=e[0]);e={5E3:l._onInViewMRC5,15E3:l._onInViewMRC15};e[d]=l._onInViewMRC;return{timeInViewThresholds:c,type:k.DT_CODES.PING,rts:e,isInView:m,isInViewIgnoringRender:function(a){return m(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},xb=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,
5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],g=[1E3,5E3,15E3],m=[2E3,5E3,15E3],q=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new P({tiv:f}):d?new P({tiv:m}):new P({tiv:g});n.getAggregator().provide("isFullyInViewProvider",{isFullyInView:q});return{timeInViewThresholds:c,type:k.DT_CODES.FULLY_INVIEW,isInView:q,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},wb=function(a,b){return{timeInViewThresholds:new P({tiv:[0]}),
type:k.DT_CODES.FULLY_INVIEW,rts:{0:l._onInViewFull},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},zb=function(a,b){var c,d,e,f=r.getMaxNumber(),p=b.isVideo(),m=a.id;d=a.sound&&"on"===a.sound;var q=!(a.soundExcl&&"groupm_native"===a.soundExcl&&l.groupm_native_publisher)&&d,n=function(b,c){if(!b.adDimensions)return!1;
var d=c?"percentInViewIgnoringRender":"percentInView",e,m,l,n=b.adDimensions.area();l=1===b.tabHidden;var u=r.max(b.fullPercentInView||0,b[d]),d=g(a.thresholds).findFirst(function(a,b){e=b.lb||0;m=b.ub||f;if(n>=e&&n<=m)return!0});l=!l&&u>=d.piv;b.method==k.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(l=!1);p&&(l=l&&b.isVideoPlaying,q&&(l=l&&b.isSoundOn));return l};c=new P(a);d=a.qiv;(function(){e={};var a;g.isDef(l.rts)&&g.isDef(l.rts[m])&&(a=c&&g.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],
a=g.isDef(a)?g.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():k.RTS_KEY_FOR_VQ,e[a]=l.rts[m])})();return{timeInViewThresholds:c,qivThreshold:d,type:k.DT_CODES.CUSTOM,rts:e,isInView:n,isInViewIgnoringRender:function(a){return n(a,!0)},metricId:m,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:q,sendOtherwiseInViewSignal:!0}},yb=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",f=b.isDeviceTypeGroupMobile()?"mobile":"desktop",
k=g(a.customViewability).isArray()&&0<a.customViewability.length,m=c.on("customMetric"),q=c.on("groupmCM"),l=function(a,b){var c,m,k,p,l;c=g(b.mediaTypes).contains(d);m=g(b.distributionChannels).contains(e);k=g.isDef(b.deviceGroups)?g(b.deviceGroups).contains(f):!0;p=I.contains(b.id,"fiv");l=I.contains(b.id,"groupmCM");p=!p;l&&(p=q);return p&&c&&m&&k};return{resolve:function(){var b=[],c;m&&k&&(c=g(a.customViewability).filter(l),g(c).each(function(a,c){b.push(c)}));return b}}},P=function(a){var b=
[];if(g(a.tiv).isArray())g(a.tiv).each(function(a,c){b.push(new ia(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new Pd;b.push(new Qd(c,parseInt(a[1].replace("%"))));b.push(new ia(1E3*parseInt(a[0])))}else g.isDef(a.tiv)&&b.push(new ia(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},Pd=function(){var a=-1,b=function(b){0<a||(b=g.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};n.getAggregator().on({omidAdDuration:b,adVideoStart:b,
adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},ia=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},Qd=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},xa=function(a,
b,c,d){var e=d?"isInViewIgnoringRender":"isInView",f=function(d){a[e](d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(f)}}},hc=function(a,b,c,d){var e,f,k,m,q,l,r=function(a,b){return!b&&a},t=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},s=function(a){var n=0,r=1===a.tabHidden,v=a.isVideoPlaying,s=a.isSoundOn,A=a.isVideoPlayingInFullscreen;g(a.sliceStatus).each(function(a,b){k(b,r,v,A)?e[a].mark():e[a].stop();m[a]=e[a].getTotalTime()});
x("slcVt",m);d&&(g(a.sliceStatus).each(function(a,b){t(b,r,v,A)&&s?f[a].mark():f[a].stop();q[a]=f[a].getTotalTime()}),x("slcVtVol",q));l=d&&b&&b.shouldIncludeSound?q:m;a=g(l).findFirst(function(a,b){n=Math.max(n,b);return 0>=b});g.isUndef(a)&&c.doEligibleJobs(n)},x=function(a,b){var c={};c[a]=b;n.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},H=function(a){!e&&a.sliceStatus&&(e=[],f=[],m=[],q=[],g(a.sliceStatus).each(function(a){e.push(new W(1));m.push(0);d&&(f.push(new W(1)),q.push(0))}))},
w=function(a){g.isUndef(a.sliceStatus)||(e||H(a),s(a))};return{start:function(){k=d?t:r;a.addMeasurementChangedListener(w)}}},va=function(a,b,c){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a,c)}}},bc=function(a,b,c,d,e,f,g,m,q,l){var n=!1,s=t.isVideo(),A=f.request("mobileApp"),x=X().applies(c,e),H=c.browserIs(k.BROWSERS.GECKO)||c.browserIs(k.BROWSERS.IE)&&e.on("rattie")||x,w=t.xDomainIframe&&!H,
C=new Fa(10),z=function(){e.on("viewabilityready")&&!n&&(d.send(k.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),n=!0)};f.on("delayedViewabilityReady",function(){D();z()});f.on("delayedViewabilityReadyCallOnly",z);var D=function(c){c=c||!1;try{C.start();var d,e;b.hasMeasurementStrategy()?e=(A.isMobileAppEnvironment()||t.isOmidNative())&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(m.collect(),c):(e=m.collect(),A.isMobileAppEnvironment()?(e.viewState=k.NA,
e.method=k.NA,e.percentInView=k.NA):w&&(e.viewState=k.NA,e.percentInView=k.PIV_NA),s&&!t.isAvid()&&l.setVideoSpecificScreenEventFields(e));d=q.registerLocation(e);c||a.trigger("measurementChanged",e);C.stop();var n=r.round(C.getTime()/C.getCount());g.addItem({output:n},"lt",{type:k.DT_CODES.UNLOAD});return d}catch(v){f.trigger("error",k.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:D,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":s?"2-5-15":
"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,d=a&&c.browserIs(k.BROWSERS.WEBKIT),e=a&&c.browserIs(k.BROWSERS.MSEDGE),a=a&&x,d=!d&&!e&&!a;return A.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){A.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}},vc={name:"viewabilityLoopLifecycle",dependencies:["viewability","features","context",
"browser"],creator:function(a,b,c,d){var e,f=Rd(c),p=[new Sd,new Td(f)],m=function(){return g(p).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},q=function(a){"sessionFinish"===a.type&&(n.getAggregator().trigger("addOutputItem",{output:t.getTagTime()},"osef"),n.getAggregator().trigger("adSessionComplete"))},u=function(a){z.addEvent(w,a,function(){n.getAggregator().trigger("adSessionComplete")},!1)},v=function(){var a=new Y(k.DT_CODES.VIDEO_EVENTS);n.getAggregator().trigger("sendDt",a.callType,
a.enumerator,function(){var a={id:l.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};n.getAggregator().once("startViewabilityLoop",function(){var b,c=n.getAggregator().request("mobileApp").isMobileAppEnvironment();n.getAggregator().request("ids").impressionIsIdentifiable()&&(e=Oc(a.checkScreenLoc,f.getPollingFrequency()),(b=m())?b.start(e):e.start(!0),t.isOmid()?n.getAggregator().request("omidVerificationClient").registerSessionObserver(q,"IAS"):
c?u("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):u("beforeunload"))});n.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmid()||v();n.getAggregator().trigger("unload");e&&e.stop();n.getAggregator().trigger("endAdSession");n.getAggregator().trigger("stopAdTalk")})},settings:{tier:k.TIERS.VIEWABILITY}},Rd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},Td=function(a){var b,c,d,e,f,g=
function(m){d&&!f&&1>m?(f=!0,r.setTimeout(function(){g(m)},1E3)):(e=1>m,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},m=function(a){g(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");d=c.usesZeroPivCustomMetric();return a},start:function(a){b=a;b.start(!0);n.getAggregator().on("IOPivChange",g);n.getAggregator().on("newScreenEvent",m)}}},Sd=function(){var a,b,c,d=!1,e=function(f){if(c&&
!d&&1>f)d=!0,r.setTimeout(function(){e(f)},1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a},f=function(){b.start(!0)};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=X();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);n.getAggregator().on("IOPivChange",e);n.getAggregator().on("nodesAdded",f)}}},ae=function(a,b,c,d,e,f){var p,m,q,u,v,y,A,x,H,O=s.getElementsWindow(b);s.getElementsDocument(b);
n.getAggregator().provide("iframeCalculatorHelper",Ud(O));var C=Vd(b,d),B=k.AD_IDENTIFIER+"-"+l.asid,$=!1,F=D({}),G=t.isDeviceTypeGroupMobile(),E=t.usesGroupMCustomMetricMobilePassThru(),M,K=function(){if(!p)if(p=C.calcDims(b,d,q),l.autotagSizeSet&&1<l.adWidth&&1<l.adHeight&&(p.set("width",l.adWidth),p.set("height",l.adHeight)),c===k.DETECTION_METHODS.VIDEO&&t.embedded){var a=p,e=(new D(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){n.getAggregator().trigger("error",
k.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===k.DETECTION_METHODS.AD_PLACEHOLDER&&p.treatAsPlaceholder();return p},I=function(){var b,d=t.xDomainIframe&&$;b=G&&$&&q.isReady();b=d||b;d=C.getClippedDims&&(c===k.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?m=q.getPiv():g.isUndef(m)&&(b=!G&&(t.friendly||g.isDef(w.mozInnerScreenX))&&e.on("offscreen"),x=K(),A=new D(s.calcWinDims()),y=new D(b?s.calcMonDims():{}),H=d?C.getClippedDims():F,m=a.calcPercentInView(x,A,y,H));return m},N=function(){return a.calcInitialViewState(I())},
T=function(){return b===w?!1:K().isHidden()};(function(){var d=r.getWindow(),e=r.getDoc(),f=b===d,g=e.body,m=n.getAggregator(),l=new X,p=m.request("browser"),s=m.request("features"),m=m.request("context"),x=!t.xDomainIframe,e=f&&g?e.body:b;M=t.friendlyIframe?d.frameElement:e;z.addEvent(e,"click",function(){n.getAggregator().trigger("adComponentClicked")});z.addEvent(e,"mouseover",function(){n.getAggregator().trigger("adComponentMousedOver")});l.applies(p,s,m)?(q=od(b,x),q.start(),$=!0,E&&c!==k.DETECTION_METHODS.AD_PLACEHOLDER&&
(d=new Wd(K().getRounded()),l=new Xd,l=new Yd(q.getObservedNode(),l),u=new Zd(d.getSlices(),l))):E&&(v=new $d(a))})();return{mark:function(){s.setAttributeOf(M,B,"")},cleanup:function(){s.removeAttributeOf(M,B)},isNode:function(a){return b===a},isHidden:T,isObstructed:function(){return!1},getDims:K,getPercentInView:I,getLocationState:N,getOnPageViewability:function(){return T()?k.OUT_OF_VIEW:N()},getDetectionMethod:function(){return c},getContainerDims:function(){return C.allowsOptimization?p:D(d)},
refresh:function(){H=x=A=y=m=p=void 0;if(f){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==w&&c&&c!==J&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;u&&u.isReadyToMeasure()?a=u.getSliceStatus():t.friendly&&v&&g.isDef(x)&&(a=v.getSliceStatus(x,A,y,H));return a}}},be=function(a,b){var c=[],d,e=g([]),f=function(){return c[0]&&c[0].getDetectionMethod()===k.DETECTION_METHODS.AD_PLACEHOLDER},l=function(m,l,q,p){var u=f()||0===c.length;
m=ae(a,m,l,q,b,p);f()&&(q=c.shift(),e=g(c),q.cleanup(),d=void 0);c.push(m);e=g(c);u&&m.mark();u&&l!==k.DETECTION_METHODS.AD_PLACEHOLDER&&n.getAggregator().trigger("primaryadfound",m)},m=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var g;g=e.getDims();g.hasValidDims()&&(a=e.getPercentInView(),b=a!==k.NA,g=g.area(),c+=g,f+=a/100*g)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},q=function(a){var b=n.getAggregator().request("adRenderStatus");return!a&&!b},u=function(a){var b;
b=m();b=b.hasMeasurement?r.round(b.totalInView/b.totalArea*100):k.PIV_NA;if(isNaN(b)||q(a))b=0;return b},v=function(c){var d=b.bootstrapOn("mobOrTab"),d=m().totalArea>=k.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!d&&!t.isVideo();return a.calcInitialViewState(u(c),d)},s=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},A=function(a){return function(){return c[0]&&c[0][a]()}};n.getAggregator().on("adComponentAdded",function(a){g(a).each(function(a,b){-1===s(b)&&l(b,k.DETECTION_METHODS.MUTATION)})});
n.getAggregator().on("adComponentRemoved",function(a){g(a).each(function(a,b){var d=s(b);-1<d&&c.splice(d,1)})});return{getDims:A("getDims"),isObstructed:A("isObstructed"),getDetectionMethod:A("getDetectionMethod"),getContainerDims:A("getContainerDims"),getViewState:v,getViewStateIgnoringRender:function(){return v(!0)},getPercentInView:u,getPercentInViewIgnoringRender:function(){return u(!0)},isHidden:A("isHidden"),isUsingPlaceholder:f,hasAd:function(){return!!c.length},refresh:function(){d=void 0;
e.each(function(a,b){b.refresh()})},addAdComponent:l,clearCollection:function(){e.each(function(a,b){b.cleanup()});c=[];e=g([]);d=void 0},getOutOfViewReasons:function(a){var b,e=[],f=c[0],g=k.OUT_OF_VIEW_REASONS;f&&(b=d||v(),q(a)?e.push(g.RENDER):b!==k.OUT_OF_VIEW&&b!==k.PARTIAL_VIEW_MINUS||e.push(g.GEOM),f.isHidden()&&e.push(g.HIDDEN),f.isObstructed()&&e.push(g.OBSTRUCTION));return e},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:A("getSliceStatus")}},
ce=function(a){var b=!1;if(!g.isUndef(w.MutationObserver)){var c=new w.MutationObserver(function(a){r.execAtEndOfThread(function(){b&&g(a).each(function(a,b){b.addedNodes.length&&n.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&n.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;r.setTimeout(function(){b=!1},40)};n.getAggregator().on("adComponentClicked",d);n.getAggregator().on("adComponentMousedOver",d);z.whenReady(function(){try{c.observe(J.body,
{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(k.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},je=function(a,b){var c=[de(),ee()],d=[Pa(),ha(),fe(),Wa(),ge(),he(),ie()],c=c.concat(d);return g(c).findFirst(function(c,d){return d.isApplicable(a,b)})},Wa=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},
find:function(){b=b||ea();var c=s.crossQuerySelector(ea().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},ke=function(a,b){var c,d=s.findChildWithLargestContent(a||l.contextNode.parentNode,b);1<s.getNodeArea(d)&&!d[k.IAS_DETECTOR]&&(c=d);return c},Pa=function(){var a=n.getAggregator().request("omidAdSessionContext");return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.OMID,isApplicable:function(){return t.isOmidForWeb()&&
!t.isOmidNative()},find:function(){a.element||a.queuedOutputItems.push({code:"oea",value:!0});return a.element},getAdContainer:function(){return a.element&&a.element.parentNode},allowForAdContainerChange:!0}},he=function(){return{detectionMethod:k.DETECTION_METHODS.IFRAME,find:function(){return w},isApplicable:function(){return t.embedded},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},le=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=g(b).findFirst(function(a,
b){return I.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),g=/;(\d+);/;d&&d.src&&(b=d.src.match(g)[1]);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=g(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return s.crossQuerySelector(b,!0)})}catch(c){}return a}}},me=function(){return{isApplicable:function(a,b){var c;
try{c=s.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&I.contains(c,"_tpi")&&s.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+s.getFrameId().replace("_tpi","")+"']"},detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Xa=function(){var a,b,c=r.getDoc(),d=function(){var b;a||(a=(b=(b=s.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=s.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+
d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),k=a.friendlyIframe&&r.getWindow().frameElement,k=k&&D(k).isOneByOne(),l=function(){var a=["bs.serving-sys.com/BurstingPipe/adServer","secure-ds.serving-sys.com/BurstingCachedScripts"],b=r.getDoc().scripts;return g(b).findFirst(function(b,c){return g(a).findFirst(function(a,b){return I.contains(c.src,b)})})}(),c=c.EBG&&c.EBG.ads&&!g(c.EBG.ads).isEmpty();
return b.on("sizmek")&&l&&c&&k&&d()&&e()},getCssSelector:e}},ea=function(){var a,b=n.getAggregator().request("features");a||(a=[Xa(),me(),le()]);return g(a).findFirst(function(a,d){return d.isApplicable(t,b)})},ge=function(){var a,b=function(){r.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:k.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,d=
Ja().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=s.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},Ja=function(){var a,b=function(){var b;(b=l.contextNode.parentNode)&&(I.contains(b.className,"celtra-ad-v3")||I.contains(b.className,"celtra-ad-v4"))?a=b:(b=b&&(s.querySelector(b,".celtra-ad-v3")||s.querySelector(b,".celtra-ad-v4")))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==
b()}}},ha=function(){var a=n.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=s.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[k.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},ee=function(){var a,b;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},
find:function(){var c=g.isFunction(l.contextNode.getAttribute)&&l.contextNode.getAttribute("data-ias-container");b=c&&"#"+c||l._cl_adpath;if(c=s.crossQuerySelector(b))a=s.getParent(c),1>s.getNodeArea(c)&&(a=c,c=s.findElementsWithSize(c));return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},de=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return t.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(l._cl_adpath)[1].split(",").forEach(function(d){if(c=
s.crossQuerySelector(d))a=s.getParent(c),1>s.getNodeArea(c)&&(a=c,c=s.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},ie=function(){return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:ke,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},fe=function(){return{detectionMethod:k.DETECTION_METHODS.VIDEO,find:n.getAggregator().request("video").findAdNode,
isApplicable:t.isVideo,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},Vd=function(a,b){var c,d;c=[ne(),oe(),pe()];d=g(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=qe();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},pe=function(){return{calcDims:function(a,b){var c,d,e=new D(a);s.isClippable(a,b)&&(c=s.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:
d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||t.isBustedIframe())&&s.nodeIsInWindow(a,r.getTop());a=!s.elementIsEmbedded(a);return b||a}}},oe=function(){var a=n.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&s.elementIsEmbedded(a)}}},ne=function(){var a=n.getAggregator().request("iframeCalculatorHelper");
return{calcDims:function(b){var c=a.calcDims();b=(new D(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!s.nodeIsInWindow(c,r.getTop()),e=t.isCeltra()&&s.elementIsEmbedded(a);return d||e}}},qe=function(){var a;return{calcDims:function(b,c,d){d=g.isDef(d)?d.getAdNodeDimensions():void 0;a&&g.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=
X();var c=n.getAggregator(),d=c.request("browser"),e=c.request("features"),c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(d,e,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},Ud=function(a){var b,c,d,e=n.getAggregator().request("features"),f=n.getAggregator().request("browser");a=a||r.getWindow();var l=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,g=0,m=e.length;g<m;g++)if(e[g]==b){d=e[g];
f=!0;break}if(f){d=s.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(t){n.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&l(b.parent,c)}return c},m=function(){var m,u={};try{var v,y,A,x,w,z,C=r.getMaxNumber(),D=r.getMaxNumber();t.friendly?(v=l(),A=v.left,x=v.top,C=v.width,D=v.height,y=s.browserWindowPosition(),w=y.scrX+A,z=y.scrY+x):e.on("rattie")&&f.browserIs(k.BROWSERS.IE)?(d=d||n.getAggregator().request("ieXDomainViewability"),
c=d.determineFramePosition(),w=c.scrX,z=c.scrY):g.isDef(a.mozInnerScreenX)&&(w=r.round(a.mozInnerScreenX),z=r.round(a.mozInnerScreenY));var u={scrX:w,scrY:z,iFrameClippingWidth:C,iFrameClippingHeight:D},B,F,G=b||s.getIeDimObj(a);b=G;g.isDef(a.innerWidth)?(B=a.innerWidth,F=a.innerHeight):G&&g.isDef(G.clientWidth)?(B=G.clientWidth,F=G.clientHeight,0===B&&0<G.offsetWidth&&(B=G.offsetWidth),0===F&&0<G.offsetHeight&&(F=G.offsetHeight)):a.frameElement&&g.isDef(a.frameElement.clientWidth)&&(B=a.frameElement.clientWidth,
F=a.frameElement.clientHeight);m=B;u.height=F;u.width=m}catch(E){n.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}return u};return{calcDims:function(){return new D(m())},getClippedDims:function(){var a=m();return new D({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Wb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new re:new se(a,b,c)}}},se=function(a,b,c){var d,e,f=n.getAggregator().request("browser"),p=l&&l.contextNode&&
l.contextNode.parentNode?l.contextNode.parentNode:null,m=be(b,c),q=function(){var a,b,e;d=d||je(t,c);a=d.find();t.friendlyIframe&&t.isBlockingSizmekTag()&&A(a);!a&&d.usePlaceholder?(u(),t.isDeviceTypeGroupMobile()&&f.hasMutationObserver()&&r.getMutationObserver(v).observe(p,{childList:!0})):a&&(a=g(a).isArray()?a:[a],b=d.getAdContainer(),e=d.allowForAdContainerChange,g(a).each(function(a,c){m.addAdComponent(c,g.resolve(d.detectionMethod),b,e)}))},u=function(){var a;m.hasAd()||(a=s.getPlaceholderSpan(),
p.insertBefore(a,l.contextNode.nextSibling),m.addAdComponent(a,k.DETECTION_METHODS.AD_PLACEHOLDER,s.getParent(a)))},v=function(a,b){var c=!1;g(a).each(function(a,b){b.addedNodes&&0<b.addedNodes.length&&(c=!0)});c&&(n.getAggregator().trigger("nodesAdded"),b.disconnect())},y=function(a,b){var e=!1;g(a).each(function(a,b){1>=b.target.height*b.target.width&&(e=!0)});var f;e&&(f=Xa(),f.isApplicable(t,c)&&(b.disconnect(),d=Wa(),m.clearCollection(),n.getAggregator().trigger("nodesAdded")))},A=function(a){var b;
if(!e&&f.hasMutationObserver()&&s.isWindow(a))try{e=r.getMutationObserver(y),b=a&&a.frameElement,e.observe(b,{attributes:!0,attributeFilter:["height","width"]})}catch(c){}};ce(a);return{find:function(){m.isUsingPlaceholder()||!m.hasAd()?q():m.refresh();return m},getDetectionMethod:function(){}}},re=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},Eb=function(a){var b,c=[],d=a||w,e=function(){return"stub"===g().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==
g().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},g=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,w.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:g,addEventListener:function(a,b){e()?c.push({type:a,
functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},Db=function(a){var b=new te,c=new ue,d="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"";(function(){var e="",f=n.getAggregator().request("omidAdSessionContext"),g=t.isDomless()||f&&"app"===f.environment,f=f&&"web"===f.environment;try{var m;if(!(m=g)){var l;
if(!(l=t.isAvid())){var u;if(!(u=t.isAvidNative())){var r;if(r=!f){var s;if(s=a.bootstrapOn("mobOrTab")){var A;if(A=a.bootstrapOn("mobAppWebview")){var g="FBAN FBAV Twitter Instagram Flipboard Snapchat LinkedInApp Pinterest".split(" "),x,f=!1;for(x=0;x<g.length;x++)if(-1<d.indexOf(g[x].toLowerCase())){f=!0;break}A=!f}s=A}r=s}u=r}l=u}m=l}if(m&&(e=b.detect(),b.hasDetectedMobileApp())){if("s_serv"===e||"u_cars"===e)ja[ja.length-1].detectionRules.userAgent[0]="/";c.detect();n.getAggregator().trigger("addOutputItem",
{output:"1"},"mapp",{type:"impression"});n.getAggregator().trigger("addOutputItem",{output:e},"drul",{type:"impression"})}}catch(w){n.getAggregator().trigger("error",k.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},ve={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(t.isDomless())return!1;var b=r.getWindow().location.href,c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(e){}if(t.embedded){try{c.push(parent.document.referrer)}catch(f){}try{c.push(J.referrer)}catch(k){}}try{"jsi"!==
l.mode&&c.push(w.location.href)}catch(m){}try{c.push(l.jsref)}catch(n){}c.sort(function(a,b){return a.length>b.length?1:a.length<b.length?-1:0});return!!g(a).findFirst(function(a,d){var e=!1,f,m,k="mobfox"===d?c:[b];for(m=0;m<k.length;m++){f=k[m];var l="string"===typeof d?[d]:d;if(g(l).isArray()&&(l[0].substring(0,4),l))for(var n=0;n<l.length&&(e=-1<f.indexOf(l[n]),!1!==e);n++);if(e)break}return e})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!g(a).findFirst(function(a,
c){var d;d=!1;var e=r.getWindow();g.isDef(e.navigator)&&g.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!g(a).findFirst(function(a,c){var d=!1;return d=g.isDef(I.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!g(a).findFirst(function(a,c){return s.containsScriptTagWithSrc(function(a){var b=!1;return b=g.isDef(a)&&-1!==a.indexOf(c)})})}}},Ya=
function(){var a=function(a,c){var d,e=ve[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return g(b).map(a).join("")}}},we=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},
{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",
detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads",
"app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_APPDET:"cars",safeToInjectMraid:!0,detectionRules:{url:[["carsales",".android"],["carsales",".ios"]]}}],te=function(){var a,b=function(a,b){var e,f=Ya().process(b.detectionRules);f&&(e=f+"_"+b.STRINGIFIED_APPDET);return e};return{detect:function(){a=g(we).map(b);a=0<a.length?a[0]:"";""===a&&l.hasOwnProperty("serverSideAppDetection")&&0!==l.serverSideAppDetection.length&&(a="s_serv");return a},hasDetectedMobileApp:function(){return void 0!==
a&&""!==a}}},ue=function(){var a=[],b=[],c=function(b,c){var f,g=Ya().process(c.detectionRules);g&&(a.push(c.STRINGIFIED_SDK+"*"+g),f=c);return f};return{detect:function(){b=g(ja).map(c);0<b.length&&n.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1===b.length&&g.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},ja=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],
url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,
detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},
{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},
{STRINGIFIED_SDK:"mrad",safeToInjectMraid:!0,detectionRules:{userAgent:["unmatchabledetectionstring"]}}],Wd=function(a){var b=[];(function(){if(10>a.height)b.push({geometry:new V(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var c=Math.floor(a.height),d=c%10,c=(c-d)/10,e,f=0;10>f;f++)e=e||0,e={geometry:new V(0,a.width,e,e+(f<d?c+1:c)),percentageInViewContribution:10,isInView:!1},b.push(e),e=e.geometry.value().bottomY})();return{getSlices:function(){return b}}},U=function(){var a=
k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Zd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();g(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value(),g=Math.max(d.leftX,f.leftX),
m=Math.min(d.rightX,f.rightX),k=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new V(g,m,k,f))}});return c},e=function(a,b){var c=0,e=d(a,b),f;g(e).each(function(a,b){f=b.value();c+=f.area});return c},f=function(){var b=0;c.mbs=[];g(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){g(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=f();c.mbrd=
1;a!==c.mbp&&c.mbivs.push([t.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=1;c.mbpr=[];c.mbir=[];g(a).each(function(a,b){c.mbpr.push(k.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];g(a).each(function(a,c){b.push(c.isInView)});return b}}},$d=function(a){var b=U();return{getSliceStatus:function(c,d,e,f){var g,m=[];g=c.getRounded();c=g.height;var k=g.scrY,l=new D({scrX:g.scrX,
width:g.width}),n=b.getConfig(g).numberOfSlices;l.set("height",r.floor(c/n));for(var t=0;t<n;t++)l.set("scrY",r.ceil(k+c/n*t)),g=100===a.calcPercentInView(l,d,e,f),m.push(g);return m}}},V=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),g=Math.ceil(c),m=Math.ceil(d),k=f-e,l=m-g,n=k*l,r=function(){return{leftX:e,rightX:f,topY:g,bottomY:m,width:k,height:l,area:n}};return{value:r,doesIntersect:function(a){var b=r();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>
b.topY}}},Xd=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},Yd=function(a,b){var c,d=[],e=[],f=function(){g(d).each(function(a,b){b(e)})},k=function(){var a=[];g(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),g=d.boundingClientRect;b=g.width;var l=d.intersectionRatio,d=d.intersectionRect,
n=d.left-g.left,g=d.top-g.top,g=new V(n,n+d.width,g,g+d.height);e.push(g);g=k();e=[];for(d=0;g.length>d&&g.length!==d+1;d++)e.push(new V(0,b,g[d],g[d+1]));f();1===l&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},fa=function(){var a=function(a){var b=!1;xe.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},b=function(b,e){return b.omidNativeInfo&&b.omidNativeInfo.partnerName&&a(b.omidNativeInfo.partnerName)?
e&&c(e.onScreenContainerGeometry):e&&c(e.onScreenGeometry)},c=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&a.hasOwnProperty("height")};return{detect:a,checkAdViewGeometryBasedOnWhitelist:b,checkGeometryObject:c,checkForViewAttachmentBasedOnAdSessionType:function(a,c){if(c&&c.reasons&&0>c.reasons.indexOf("notFound")&&a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&
b(a,c)))return!0}}},xe=[{PARTNER_NAME:"IAB"},{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],ye=function(){return{listenForResult:function(){n.getAggregator().on("videoBlockResult",function(a){var b=n.getAggregator().request("adNode"),c=!1,d="blockAd"+l.videoId;"failed"===a.action&&(c=!0);if(b&&g.isDef(b.blockAd))b.blockAd(c);else if(b&&g.isDef(b[d]))b[d](c)})}}},ze=function(a,b){var c,d,e,f,k;e=n.getAggregator().request("videoTranslator").translate(a.messageType);f=function(a){a=
a.eventData||{};a=g({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);k=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=g(a).mapToObj(c));return b}(a);d={t:a.time-l.birthdate,tp:e,sl:b};g(d).mixin(f);g(d).mixin(k);return c=g({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},
indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===f.viewMode||f.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===f.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(e)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},getVolume:function(a){return a.getVolumeFromContext(f)},
updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===e?n.getAggregator().persistentTrigger(e,f,k):n.getAggregator().trigger(e,f,k)},toString:function(){return"{"+g(d).toParams()+"}"}}).mixin(d)},Ae=function(){var a=[];return{registerEvent:function(b,c,d){b=new ze(b,c,d);a.push(b);return b},toString:function(){return"{"+g({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Be=function(){var a,b,c,d=function(d){c=g.isDef(d)?
0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&n.getAggregator().trigger("sendDt",k.DT_CODES.QUARTILE_FULLY_INVIEW)},f=function(){b=!0;d()},l=function(a){a=(new Za).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){n.getAggregator().on({adVideoStart:f,adImpression:f,volumeChanged:l,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=n.getAggregator().request("isFullyInViewProvider");
return!b||c&&c.isFullyInView(a)})}}},Ce=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Za=function(){return{getVolumeFromContext:function(a){var b,c=-1;g.isDef(a)&&(g.isDef(a.volume)?c=a.volume:g.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},Bb=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,f,p,m,q=[],u=k.OUT_OF_VIEW,s=!1,y=!1,
A=!1,x=!0,w=new Ae,B=Be(),C=new ye,D=new Za,E=new Ka,F=function(b){var d;s=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=w.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(y=!0,u=A?k.IN_VIEW:!1):d.indicatesNotPlaying()?(y=!1,u=k.OUT_OF_VIEW):d.indicatesFullscreen()?(A=!0,u=y?k.IN_VIEW:k.OUT_OF_VIEW):d.indicatesNormalSize()&&(A=!1,u=y?!1:k.OUT_OF_VIEW),b=parseFloat(d.getVolume(D)),0<b?x=!0:0===b&&(x=!1));q.push(d);m&&J();return d},G=function(b){var c,
f,k=za().wrapToGlobal(F),m=function(a){g.isStr(a)&&(n.getAggregator().provide("vc",function(){return a}),n.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{f=b[e]||b.getIasVidBridgeVersion,c=g.isFunction(f)&&"2"===f.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),s=!0,m(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,l)}},I=function(){var c=function(a){return g(g(a).toArray()).findFirst(function(a,b){return g.isFunction(b[d])})};f||(g(["*[data-integralas-vid-"+
a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);return f=c(d)}),!f&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},l));return f},M=function(){var a=I();a&&!s&&G(a);return a},K=function(a){a=D.getVolumeFromContext(a);x=g.isDef(a)?0<a:!1},J=function(){E.init();g(q).each(function(a,b){b&&(g.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&n.getAggregator().trigger("adSessionComplete"),
b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&n.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS),n.getAggregator().trigger("videoQuartileEvent",b)))});q=[];m=!0};(function(){z.addEvent(r.getWindow(),"message",function(a){F(a)});n.getAggregator().on({volumeChanged:K});n.getAggregator().provide({videoEventsString:w,videoVersion:function(){var a,b=M();try{a=b.getVersion()}catch(c){a=-1,n.getAggregator().trigger("error",k.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return p=
p||new Ce},adNode:M});M();C.listenForResult();B.isApplicable(t)&&B.start(c)})();return{findAdNode:M,getViewStateOverride:function(){return u},isHandshakeComplete:function(){return s},triggerInitializationEvents:J,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===k.NA;a.isVideoPlaying=!0;a.isSoundOn=x;a.isVideoPlayingInFullscreen=!1;if(u){if(u===k.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=k.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:
u;a.isVideoPlaying=u===k.IN_VIEW}A&&y&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},De=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},hb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():n.getAggregator().trigger("sendDt",k.DT_CODES.PERFORMANCE)}),a=!1},f=function(){b=new Ga;d=0;e(!0);b.start()},l=function(d,e,k,l){d=c[d];l?(g.isDef(d[e])||(d[e]=[]),d[e].push(k)):d[e]=k;b&&b.isActive()||
f();a=!0},m=function(c,d,e){n.getAggregator().trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||f();a=!0},q=function(b){g(c).each(function(d,e){var f=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};g(f).isEmpty()||(n.getAggregator().trigger("addOutputItem",{output:f},d,k),c[d]={});a=!1})};return{start:function(){n.getAggregator().on("preSendDt",function(a){q(a);b&&b.kill()});n.getAggregator().on("addThrottledProp",l);n.getAggregator().on("addThrottledOutputItem",m)},addFieldTypes:function(a){g(a).each(function(a,
b){c[b]={}})}}},ob=function(){var a={},b=function(b){a[b]||(a[b]=new Fa(1,l.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();n.getAggregator().trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){n.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Ee=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Ub=function(a){var b=
{},c=a instanceof Array&&0<a.length;c&&(g(a).each(function(a,c){b[c.getType()]=c}),n.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));n.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},Z=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},f=function(){var a,b={};e();g(d).each(function(d,
e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){d.push(a)},toString:function(){return g(f()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===b}}},Vb=function(){function a(){}a.build=function(){var a=[];a.push(new Z(k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=n.getAggregator().request("vc");var d={jv3:$a,av3:$a,jvw:Ee,avw:De};(c=c?d[c]:void 0)&&
a.push(c());return a};return a}(),$a=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},Q={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){n.getAggregator().trigger("measureTime",Q.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){z.addEvent(w,"load",function(){n.getAggregator().trigger("measureTime",Q.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new Ga;a.onTick({4:function(){n.getAggregator().trigger("markTime",
Q.IDS.IN_BROWSER_DELAY)},5:function(){n.getAggregator().trigger("measureTime",Q.IDS.IN_BROWSER_DELAY)}});a.start()}},L={isFrameworkAvailable:function(a,b){var c,d,e=r.getTop(),f=r.getWindow();try{c=e[a]}catch(g){for(;!d;){try{f.frames[b]&&(d=f.frames[b].parent)}catch(k){}if(f===e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=L.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),z.removeEvent(r.getWindow(),
"message",d))}catch(f){n.getAggregator().trigger("error",k.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+l.asid},send:function(a,b){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,a,b)}},kc={name:"CCPAConsentDetector",dependencies:[],creator:function(){function a(a){a&&L.send(b,g(a).toION())}var b="ccd";(function(){var b=L.isFrameworkAvailable("__uspapi","__uspapiLocator");L.send("cca",!!b);if(b){var d,e;g.isFunction(b)?b("getUSPData",1,a):(d={__uspapiCall:{command:"getUSPData",
version:1,callId:L.getCallId()}},e=L.getMessageHandler("__uspapiReturn",a),z.addEvent(r.getWindow(),"message",e),b.postMessage(d,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},jc={name:"GDPRConsentDetector",dependencies:[],creator:function(){function a(a){var e=g.isDef(a)&&g.isDef(a.vendorConsents)&&g.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:g.stringifyTriState(a.gdprApplies),cnst:g.stringifyTriState(e),glbl:g.stringifyTriState(a.hasGlobalScope),
mtdt:encodeURIComponent(a.metadata)};L.send(c,g(a).toION())}var b=278,c="gcd";(function(){var c=L.isFrameworkAvailable("__cmp","__cmpLocator");L.send("gca",!!c);if(c){var e,f;g.isFunction(c)?c("getVendorConsents",[b],a):(e={__cmpCall:{command:"getVendorConsents",parameter:[b],callId:L.getCallId()}},f=L.getMessageHandler("__cmpReturn",a),z.addEvent(r.getWindow(),"message",f),c.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},
lc={name:"GDPRV2ConsentDetector",dependencies:[],creator:function(){function a(a){var e=g.isDef(a)&&g.isDef(a.vendor)&&g.isDef(a.vendor.consents)&&g.isDef(a.vendor.consents[b])?a.vendor.consents[b]:void 0;a={appl:g.stringifyTriState(a.gdprApplies),cnst:g.stringifyTriState(e)};L.send(c,g(a).toION())}var b=278,c="gcd2";(function(){var c=L.isFrameworkAvailable("__tcfapi","__tcfapiLocator");L.send("gca2",!!c);if(c){var e,f;g.isFunction(c)?c("getTCData",2,a):(e={__tcfapiCall:{command:"getTCData",parameter:[b],
callId:L.getCallId(),version:2}},f=L.getMessageHandler("__tcfapiReturn",a),z.addEvent(r.getWindow(),"message",f),c.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},rc={name:"postMessageDetector",dependencies:[],creator:function(){var a=!1,b="pmdetector"+l.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=r.getWindow();z.addEvent(d,"message",c);d.postMessage(b,"*");r.execAtEndOfThread(function(){n.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.IM,"pom",g.stringifyTriState(a));z.removeEvent(d,"message",c)})})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}}},sc={name:"safeFrameDetector",dependencies:[],creator:function(){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"sf",g.stringifyTriState(t.isSafeFrame()))},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}}},gb=function(a,b,c,d,e,f,g){var m=function(a,b){return isNaN(a)||
0>a||""===a?b:a};return{send:function(q){try{var r,s=d.baseUrl,y,w,x=f.getDocumentMode();"number"===typeof x?(w=2E3,8===x?w=4E3:8<x&&(w=8E3)):w=m(l.sp_imp_maxLength,2E3);y=w;if(t.integratedBlockingApplies(s)){w=s;var z=n.getAggregator().request("mobileApp"),B=z&&z.isMobileAppEnvironment&&z.isMobileAppEnvironment(),C=l.contextNode.getAttribute("data-ias-container"),D=l.contextNode.getAttribute("data-ias-callback"),z=w+"adContainerId="+C+"&cbFunctionName="+D,z=B?z.replace("monitoring","blocking"):z.replace("skeleton.js",
l.integration+".js"),E=l.protocol+":"+l.staticServer+l.integration+"a.js",F=l.protocol+":"+l.staticServer+l.integration+".js",s=z+"&true_pb="+encodeURIComponent(l.passback)+(B?"&redirectUrl="+encodeURIComponent(F):"")+(B?"&passback=":"&adsafe_pb=")+encodeURIComponent(E)+"&"}var B=s=s.replace(k.UNIQUE_ID_TOKEN,l.asid),G=s.length,I,J,K=m(l.sp_imp_jsInfo_minLength,0),E="";try{I=y-G-K,0<I&&(J=Fe(q,I,14,b.on("partialUrls")),E+=J.join("&"))}catch(L){a.add(k.ERROR_CODES.IMPRESSION_URLS)}s=B+E;q=s+="&"===
s.slice(-1)?"":"&";var N,G="";try{N=y-s.length,G+=Ge(N,"adsafe_jsinfo=",a,b,c,e,f,g)}catch(P){a.add(k.ERROR_CODES.JSINFO),G+="adsafe_jsinfo=e:"+a.toString()}s=q+G;d.macroUrl&&(s+="&"===s.slice(-1)?"":"&",s+=d.macroUrl);r=s;l.impUrl=r;d.sendImpression(r);n.getAggregator().trigger("impressionsent")}catch(Q){__IntegralASDiagnosticCall("impsend",Q,l)}}}},La=function(){try{var a=l.perf,b,c,d,e,f,p;a.markEnd("ec");b=a.getEnd("ec");c=w.performance&&"function"===typeof w.performance.getEntriesByName&&w.performance.getEntriesByName(l.impUrl)[0];
var m=a.getStart("bd"),q=a.getStart(qa);d=l.jsDoSplit?Math.round(b-m):Math.round(b-q);e=Math.round(c&&c.duration);f=Math.round(b-(c&&c.responseEnd));g.isNumeric(d)&&g.isNumeric(e)&&g.isNumeric(f)&&(p={ttecl:d,ecd:e,tsecr:f},n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"imprf",g(p).toION()))}catch(r){n.getAggregator().trigger("error",k.ERROR_CODES.IMPRESSION_PERFORMANCE)}},Ge=function(a,b,c,d,e,f,p,m){return function(c){var d=g.encodeInvalidUrlChars(c.primary.join(","),l.encodeInvalidUrlChars),
f=b,k=0,m=function(a){if(a)return","+a};f.length+d.length+5<=a&&(f+=m(d),e.impressionIsIdentifiable(!0),g(c.secondary).each(function(b,c){var d=g.encodeInvalidUrlChars(c,l.encodeInvalidUrlChars);f.length+d.length+5<=a?f+=m(d):k+=1}));return f+=",ov:"+k}(function(){var a,b;b=a={viewState:k.NA};t.isDomless()?b=m.checkScreenLoc(!0)||a:d.on("impFailSafe")?r.getDoc().body&&(b=(b=m.checkScreenLoc(!0))?b:a):g.isDef(r.getDoc().body)&&(b=m.checkScreenLoc(!0));m.isImmediatelyMeasurable()||m.requiresDelayedViewabilityEvent();
a=b;var s=a.viewState;b=e.getAvidIds();s=["id:"+l.asid,"c:"+e.getCacheBustId(),"sl:"+s,"em:"+t.embedded,"fr:"+t.friendly];d.on("avidPropertiesInImpression")&&g.isDef(b)&&(s.push("abi:"+b.bundleIdentifier),s.push("apn:"+b.partner),s.push("apv:"+b.partnerVersion));a=He(a,c,d,e,f,p,m);n.getAggregator().trigger("eligiblerender");return{primary:s,secondary:a}}())},He=function(a,b,c,d,e,f,p){var m=[],q=n.getAggregator().request("mPage");m.push("mn:"+l.mn);l.iasProxyPartnerDomain&&m.push("ipp:"+encodeURIComponent(l.iasProxyPartnerDomain));
m.push("pt:"+function(){var b=p.stringifyPingTimes();a.viewState!==k.NA&&(b+=a.details);return b}());m.push(g(f.params()).toParams());c.on("mrcAudit")&&!t.isDomless()&&m.push("dvs:"+r.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||g.isUndef(b.props.type),d=!b.props||b.props.type===k.IMPRESSION_EVENT;(c||d)&&m.push(a+":"+b.output())});b.toString()&&m.push("e:"+b.toString());m.push(c.output());m.push("tt:"+l.mode);m.push("thd:"+g.stringifyTriState(q.supportsVisAPI()));m.push("et:"+
(r.now()-l.birthdate));l.perf.mark("si");c.on("swapids")?m.push("oid:"+l.oid):m.push("uid:"+d.unq);m.push("v:19.8.213");m.push("sp:"+(l.isSplitMode?1:0));m.push("st:"+(l.staticMode?1:0));m.push("fwm:"+("true"===l.fwMonitoring?1:0));c.on("resolution")&&(m.push("wr:"+g(s.windowSize()).toArray().join(".")),m.push("sr:"+g(s.screenSize()).toArray().join(".")));b=function(){var a;a=String(l.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,
b):a):a="NotFound";return a||""}();"NotFound"!==b&&m.push("x_xpc:"+b);return m},Fe=function(a,b,c,d){var e,f=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=g(a).map(function(a,b){if(k(b))return b}),a=g(a).map(function(a,b){if(!k(b))return b}),g(e.concat(a)).each(function(a,e){var g;g=e.val;var k=e.key,l;l=24+f.join("&").length+k.length+c;l=b-l;d&&l<g.length&&0<l&&(g=g.substr(0,l));if(g.length||""===e.val||""===e.type)g="adsafe_url="+g+"&adsafe_type="+k,k=
f.join("&").length,g.length+k<=b&&f.push(g)}));return f},eb=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=Ie(a.navigator.plugins);var b=a.hash(),c=b.join(".");n.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:k.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),n.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:k.DT_CODES.ADTALK}))}}},Le=function(a,b){return{start:function(){try{var c=
Je(),d=c.getMethodName(a),e=new S(b.getEnabledScriptUrl(a)),f=Ke,g=r.getDoc();(new f(g.body||g.head||g.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(l){n.getAggregator().trigger("error",k.ERROR_CODES.FEATURE_SCRIPT)}}}},Je=function(){var a=function(a,c,d){a===l.asid&&(d.unshift(c),n.getAggregator().trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:l.asid,constant:k,features:b,context:t,dtBaseURL:l.dtBaseURL,spg:ab};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+
a}}},mb=function(){return{start:function(a,b){g(a).each(function(a,d){b.getEnabledScriptUrl(d)&&Le(d,b).start()})}}},Ie=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=I.hashCode(e),e=g.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Ke=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=s.createHiddenIframe();
c.setAttribute("src","about:blank");c.setAttribute("class","_ntnrjf7826-hj");(a||l.contextNode.parentNode).appendChild(c);f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var g,k;g=(new Date).getTime();k=Math.floor(1E5*Math.random());b=b+"?t="+g+"&r="+k}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);
return{getWindow:function(){return c.contentWindow}}},ab=function(a){var b=new Ea;(function(){b.listen(function(b){return b&&b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==l.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,d){b.stop();r.setTimeout(function(){a.isDtCallAlreadySent()||(n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),g(d.cache).each(function(b,c){a.addToCache(b,c)}))},r.round(1E3*r.random()))})})();(function(){n.getAggregator().on("addToSpg",
function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),r.setTimeout(a.sendToOtherTags,1300),r.setTimeout(a.sendToOtherTags,3200))})})()},xc={name:"spg",dependencies:["spgCache"],creator:ab,settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}}},wc={name:"spgCache",dependencies:[],creator:function(){var a="asp ch fsc mvn no sd".split(" "),b={},c=!1,d=function(){return e(b)},e=function(b){return g(b).keys().sort().toString()===a.toString()},f=function(){c||
(c=!0,g(b).each(function(a,b){n.getAggregator().trigger("addOutputItem",b,a,{type:k.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),n.getAggregator().trigger("sendMinDt",k.DT_CODES.SCA))};return{allExpectedKeysPresent:e,isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&f()},isFull:d,sendToOtherTags:function(){(new da).send({scaInfoOriginatorASID:l.asid,cache:b})}}},settings:{}};try{ic()}catch(Me){__IntegralASDiagnosticCall("main",Me,l)}};
try{(function(){var l=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initVideo(__IntegralASConfig,l,l.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
