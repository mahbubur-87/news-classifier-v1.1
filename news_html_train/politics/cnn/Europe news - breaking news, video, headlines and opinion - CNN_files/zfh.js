/**
 * Loader for side scripts
 * @type {{snowplowLoaderScript: Window.zionFlagManager.snowplowLoaderScript, start: Window.zionFlagManager.start}}
 */
window.zionFeatureManager = {
    feature0Script: function(variant) {

    },
    feature1Script: function (variant) {
        // console.log(`running script 1: with variant ${variant}`);
    },
    feature2Script: function (variant) {
    },
    feature3Script: function (variant) {
        // console.log(`running script 3: with variant ${variant}`);
    },
    feature4Script: function (variant) {
        // console.log(`running script 4: with variant ${variant}`);
    },
    feature5Script: function (variant) {
        let __collector_sub_domain = 'collector-dev.cdp-dev';
        let __collector_top_domain = 'cnn.com';
        if( variant === 2){
            __collector_sub_domain = ((env)=>{
                switch (env){
                    case 'Prod':
                        return 'collector.cdp';
                    case 'Stage':
                        return 'collector-stage.cdp-dev';
                    case 'Ref':
                        return 'collector-ref.cdp-dev';
                    case 'Dev':
                        return 'collector-dev.cdp-dev';
                    case 'InternalDev':
                        return 'collector-internal.cdp-dev';
                    case 'InternalRef':
                        return 'collector-internal.cdp-dev';
                    default:
                        return 'collector-internal.cdp-dev'
                }
            })(ZION.environment);
        }

        if(variant === 1 || variant === 2){
            const __collector_url = `//${__collector_sub_domain}.${__collector_top_domain}`

            window.zion_analytics.startSnowPlow({
                // enableLogging:true, // logging specific to snowplow pipeline
                anonymousTracking: false,
                // appId: 'cnn-zion',
                // bufferSize: 1,
                collectorUrl: __collector_url,
                // connectionTimeout: 5000,
                // context_clientHints: true,
                // context_gaCookies: true,
                // context_geolocation: false,
                // context_performanceTiming: true,
                // context_webPage: true,
                // cookieDomain: undefined,
                // cookieLifetime: undefined,
                // cookieName: '_sp_',
                // cookieSameSite: 'None',
                // cookieSecure: true,
                // crossDomainLinker: () => false,
                // discoverRootDomain: true,
                // encodeBase64: true,
                environment: ZION.environment, // this will set the collector and tracker urls
                // eventMethod: 'post',
                // forceSecureTracker: true,
                // isLocalSnowplow: false,
                // maxLocalStorageQueueSize: undefined,
                // maxPostBytes: undefined,
                // pageUnloadTimer: undefined,
                // platform: 'web',
                // resetActivityTrackingOnPageView: undefined,
                // respectDoNotTrack: undefined,
                schemaVersion: '1-0-1',
                // skippedBrowserFeatures: ['pdf', 'qt', 'realp', 'wma', 'dir', 'fla', 'java', 'gears', 'ag'],
                spTrackerUrl: 'https://z.cdp-dev.cnn.com/sp/current/zion-sp.js',
                // stateStorageStrategy: 'cookieAndLocalStorage',
                // trackerNamespace: 'zionSp',
            });
        }


    },
    feature6Script: function (variant) {
        // console.log(`running script 6: with variant ${variant}`);
    },
    feature7Script: function (variant) {
        // console.log(`running script 7: with variant ${variant}`);
    },
    feature8Script: function (variant) {
        // console.log(`running script 8: with variant ${variant}`);
    },
    feature9Script: function (variant) {
        // console.log(`running script 9: with variant ${variant}`);
    },
    start: function(featureObjects, config) {
        window.zionFlagManagerDebug = function (message,type){
            if(config.debug){
                switch (type){
                    case 'table':
                        console.table(message)
                        break;
                    case 'error':
                        console.error(message)
                        break;
                    default:
                        console.info(message)
                        break;
                }
            }
        };
        window.zionFlagManagerDebug(featureObjects,'table');
        try{
            if(Object.prototype.toString.call(featureObjects) === '[object Object]'){
                Object.keys(featureObjects).forEach((featureKey)=>{
                    if(featureKey === '0'){
                        this.feature0Script(featureObjects[featureKey]);
                    };
                    if(featureKey === '1'){
                        this.feature1Script(featureObjects[featureKey]);
                    };
                    if(featureKey === '2'){
                        this.feature2Script(featureObjects[featureKey]);
                    };
                    if(featureKey === '3'){
                        this.feature3Script(featureObjects[featureKey]);
                    };
                    if(featureKey === '4'){
                        this.feature4Script(featureObjects[featureKey]);
                    };
                    if(featureKey === '5'){
                        this.feature5Script(featureObjects[featureKey]);
                    };
                    if(featureKey === '6'){
                        this.feature6Script(featureObjects[featureKey]);
                    };
                    if(featureKey === '7'){
                        this.feature7Script(featureObjects[featureKey]);
                    };
                    if(featureKey === '8'){
                        this.feature8Script(featureObjects[featureKey]);
                    };
                    if(featureKey === '9'){
                        this.feature9Script(featureObjects[featureKey]);
                    };
                })
            }
        } catch (e){
            window.zionFlagManagerDebug(e, 'error');
        }
    },
};