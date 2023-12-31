define('omniture', [], function() {

  function Scroll() {
    this.maxScrolled = window.pageYOffset;
  }

  Scroll.prototype.autoRecalculate = function() {
    var onScrollResize = function() {
      var currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > this.maxScrolled) {
        this.maxScrolled = currentScrollPosition;
      }
    };

    window.addEventListener('scroll', onScrollResize.bind(this));
    window.addEventListener('resize', onScrollResize.bind(this));

    return this;
  };

  Scroll.prototype.getMaxScrolled = function() {
    return this.maxScrolled;
  };

  Scroll.prototype.getMaxViewedPercentage = function() {
    var totalPageHeight = document.body.scrollHeight;
    var maxViewed = this.getMaxScrolled() + document.documentElement.clientHeight;

    return Math.round((maxViewed / totalPageHeight) * 100);
  };

  Scroll.prototype.getMaxViewedPercentageAndMaxScrolledPercentage = function() {
    if (document.body) {
      return [this.getMaxViewedPercentage(), this.getMaxScrolledPercentage()].join('|');
    }

    return false;
  };

  Scroll.prototype.getMaxScrolledPercentage = function() {
    var totalPageHeight = document.body.scrollHeight;

    return Math.round((this.maxScrolled / totalPageHeight) * 100);
  };

  var scroll = new Scroll();

  return {
    init: function(SKY_TRACKING) {
      /* MG:HH:JH 17012011 v3-8c.js */
      window.sky = window.sky ? window.sky : {};

      sky.tracking = {
        vmap: {
          storyType: ['prop63'],
          searchType: ['prop12', 'eVar31'],
          searchTerms: ['prop1', 'eVar1'],
          searchResults: ['prop34'],
          searchEngineExt: ['prop16', 'eVar3'],
          searchTermsExt: ['prop17', 'eVar8'],
          sport: ['prop61'],
          headline: ['prop3', 'eVar13'],
          errors: ['prop2', 'eVar2'],
          loginFrom: ['prop5', 'eVar5'],
          url: ['prop9', 'eVar9'],
          refDomain: ['prop36', 'eVar36'],
          contentType: ['prop20', 'eVar20'],
          contentId: ['prop21', 'eVar15'],
          site: ['prop23', 'eVar14'],
          browseMethod: ['prop24'],
          entitlements: ['eVar47'],
          loginType: ['eVar55'],
          section0: ['prop25', 'eVar26'],
          section1: ['prop27', 'eVar29'],
          section2: ['prop31', 'eVar30'],
          videoTitle: ['prop26', 'eVar28'],
          channel: ['channel', 'eVar24', 'hier1'],
          partTime: ['prop35', 'eVar35'],
          samId: ['prop39', 'eVar39'],
          loginStatus: ['eVar11'],
          _loginFrom: ['prop5', 'eVar5'],
          ageGender: ['eVar12'],
          skyPackage: ['eVar16'],
          purchaseId: ['eVar21'],
          fulfillment: ['eVar22'],
          customerType: ['eVar23'],
          optIn: ['eVar38'],
          fixtureDetails: ['prop51'],
          autoReloadedContent: ['prop52'],
          favouriteTeam: ['eVar51'],
          betslipBookmaker: ['eVar53'],
          betslipEventDetails: ['eVar54'],
          viewingHabit: ['eVar49'],
          byline: ['prop53'],
          pagination: ['prop54'],
          QScmpId: [],
          QScmpIdInt: [],
          account: [],
          section: [''],
          events: [],
          adTrackableClass: [],
          linkTrackableClass: [],
          trackingId: ['prop62'],
          pageScroll: ['prop72'],
          personlizedExperience: ["prop13", "eVar86" , "tnt"]
        },
        eventMap: {
          loginStart: 'event17',
          loginComplete: 'event16',
          regStart: 'event19',
          regComplete: 'event18',
          optIn: 'event25',
          enterComments: 'event12',
          enterRating: 'event13',
          commentScore: 'event14',
          enterCompetition: 'event74',
          enterPoll: 'event75',
          passwordStart: 'event76',
          passwordComplete: 'event77',
          activateStart: 'event78',
          activateComplete: 'event79',
          thumbsup: 'event80',
          thumbsdown: 'event81',
          placeBet: 'event27',
          betValue: 'event28',
          personalizedTileLoad: "event196",
          personalizedTileClick: "event197"
        },
        launch: function(o) {
          // Initial defaults:
          var p = {
            trackingServer: 'metrics.sky.com',
            trackingServerSecure: 'smetrics.sky.com',
            visitorNamespace: 'bskyb',
            charSet: 'UTF-8',
            trackDownloadLinks: true,
            trackExternalLinks: true,
            trackInlineStats: true,
            linkDownloadFileTypes: 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,air,wma',
            linkInternalFilters: 'javascript:,skyintranet,sky.com,skysports.co.uk,skyarts.co.uk,skybet.com,skypoker.com,skybingo.com,skyvegas.com,teamtalk.com,football365.com,sportinglife.com,sportal.com,bettingzone.co.uk,fixtures365.com,teamsky.com,oddschecker.com,sport365.com,skysports.com,sky.zoopla.co.uk,skyoneonline.co.uk,bskybpensionplan.com,skymobileiphone.com,skymovies.com,skyone.co.uk,sky1.co.uk,skyoneonline.co.uk,m.skynews.com,skyrainforestrescueschoolschallenge.org,skybroadband.com,skyartsonline.co.uk,skymoviesactive.com,skyhub.bskyb.com,skyone.co.uk,sky.co.uk,skybet.mobi,socceram.com,teamtalk.co.za,football365.co.uk,jointhebiggerpicture.com,skysportsnewsradio.com,' + window.location.host,
            linkLeaveQueryString: false,
            linkTrackVars: 'None',
            linkTrackEvents: 'None',
            browseMethod: 'web',
            url: (String(window.location.href).indexOf('?') > 0) ? String(window.location.href).split('?')[0] : window.location.href,
            server: window.location.hostname,
            contentType: 'generic',
            partTime: 'Day_Hour_Quarter',
            QScmpId: 'cmpid',
            QScmpIdInt: 'cmpid_int',
            adTrackableClass: "adTrackable",
            linkTrackableClass: "linkTrackable",
            track: true
          }
          if(!document.getElementsByClassName) document.getElementsByClassName = this.getElementsByClassName;
          var ev = ['event1'];
          var prod = [];
          // Check for mandatories:
          if(!o.site || !o.section) {
            return;
          }

          if(!o.loginType) {
            o.loginType = this.getLoginType();
          }

          if(!o.entitlements) {
            o.entitlements =  this.getEntitlements();
          }

          // Set derived parameters:
          if(o.tnt) {
            o.prop13 = o.tnt;
            o.tnt = 'D=c13';
            ev.push('event196')
          }
          if(o.site) o.site = o.site.toLowerCase();
          if(o.section) o.section = o.section.toLowerCase();
          if(o.contentType) o.contentType = o.contentType.toLowerCase();
          if(o.headline) o.headline = o.headline.toLowerCase();
          if(o.contentID) o.contentID = o.contentID.toLowerCase();
          if(o.search) o.search = o.search.toLowerCase();
          if(o.browseMethod) o.browseMethod = o.browseMethod.toLowerCase();
          if(o.searchTerms) o.searchTerms = o.searchTerms.toLowerCase();
          if(o.searchType) o.searchType = o.searchType.toLowerCase();
          if(o.videoTitle) o.videoTitle = o.videoTitle.toLowerCase();
          if(o.sport) o.sport = o.sport.toLowerCase();
          if(o.loginFrom) o.loginFrom = o.loginFrom.toLowerCase();
          if(o.errors) o.errors = o.errors.toLowerCase();
          if(o.section.indexOf('/') == 0) {
            o.section = o.section.substring(1)
          };
          if(o.section[o.section.length - 1] == '/') {
            o.section = o.section.substring(0, o.section.length - 1)
          };
          if(o.site.indexOf('/') == 0) {
            o.site = o.site.substring(1)
          };
          if(o.site[o.site.length - 1] == '/') {
            o.site = o.site.substring(0, o.site.length - 1)
          };
          var sl = o.section.split('/');
          if(!o.contentType || o.contentType == '') {
            p.pageName = o.site + '/' + o.section;
          } else {
            p.pageName = o.site + '/' + o.section + '/' + o.contentType;
          }
          var tempPN = '';
          if(o.headline && o.headline != '') {
            tempPN = o.site + '/' + o.section + '/' + o.headline;
          } else {
            tempPN = p.pageName;
          }
          p.channel = o.site + '/' + o.section;
          for(var i = 0; i < 3; ++i) p['section' + i] = o.site + '/' + sl.slice(0, i + 1).join('/');
          if(o.searchResults !== undefined) {
            ev.push(o.searchResults == 0 ? ['event15', 'event26'] : ['event15']);
          }
          if(o.events) {
            var ol = o.events.split(',');
            var omtrEvProd = evTmp = '';
            var omtrEvList = omtrEv = [];
            for(var i = 0; i < ol.length; ++i) {
              if(String(ol[i]).indexOf('|') > 0) {
                omtrEvList = ol[i].split('|');
                omtrEvProd = omtrEvList[0];
                for(var j = 1; j < omtrEvList.length; j++) {
                  evTmp = (this.eventMap[omtrEvList[j++]] ? this.eventMap[omtrEvList[j - 1]] : omtrEvList[j - 1]);
                  prod.push(';' + omtrEvProd + ';;;' + evTmp + '=' + omtrEvList[j]);
                  ev.push(evTmp);
                }
              } else {
                ev.push(this.eventMap[ol[i]] ? this.eventMap[ol[i]] : ol[i]);
              }
              omtrEvProd = evTmp = '';
              omtrEvList = omtrEv = [];
            }
          }
          if(o.errors) ev.push('event3');
          p.account = 'bskybglobal,bskyb' + o.site.split('/')[1];
          // Overwrite defaults with passed parameters
          for(k in o) {
            p[k] = o[k]
          }
          var pl = this.getAds(p.adTrackableClass);
          if(pl.length) {
            ev.push('event9');
            for(var i = 0; i < pl.length; ++i)
              prod.push(";" + pl[i] + ";;;;event9=1");
          }
          this.getFeaturedContents(p.linkTrackableClass);
          var s = s_gi(p.account);
          this.setupScrollTracking(s);
          this.setupTargetTileClick(s);
          this.loadPlugins(s);
          window.s_bskyb = this.s = s;
          // Load the media module
          this.loadMediaModule(s);
          s.loadModule("Media");
          s.Media.autoTrack = false;
          s.Media.trackWhilePlaying = true;
          s.Media.trackVars = "None";
          s.Media.trackEvents = "None";
          s.currentYear = new Date().getFullYear();
          // Change below if EU law on DST start/end dates changes
          var d = new Date(s.currentYear, 2, 31);
          s.dstStart = "03/" + (31 - d.getDay()) + "/" + s.currentYear;
          d = new Date(s.currentYear, 9, 31);
          s.dstEnd = "10/" + (31 - d.getDay()) + "/" + s.currentYear;
          this.setLoginVars(p, ev);
          //additional (altrnative) pagename storage
          if(tempPN != '') {
            s.prop55 = tempPN.substring(0, 100);
            s.eVar55 = tempPN.substring(0, 255);
          }
          var cmp = s.getQueryParam(p.QScmpId);
          if(cmp) {
            s.campaign = s.getValOnce(cmp, 's_campaign', 30);
            s.prop45 = cmp;
            s.eVar45 = "D=c45";
          } else {
            if(cmp = s.getQueryParam(p.QScmpIdInt)) {
              s.prop45 = cmp;
              s.eVar45 = "D=c45";
            }
          }
          if(cmp == "") {
            s.linkInternalFilters = p.linkInternalFilters;
            s.channelManager('attr,dcmp', '', 's_campaign', '0');
            var camps = "";
            var chan = "";
            var part = "";
            var term = "";
            var ref = "";
            if(s._campaignID) camps = s._campaignID.toLowerCase();
            if(s._channel) chan = s._channel.toLowerCase();
            if(s._keywords) term = s._keywords.toLowerCase();
            if(s._partner) part = s._partner.toLowerCase();
            if(s._referringDomain) ref = s._referringDomain.toLowerCase();
            if(camps.indexOf('ilc-') != 0 && camps.indexOf('knc-') != 0 && camps.indexOf('snt-') != 0 && camps != "") {
              s.campaign = s.getValOnce(camps, 'cmp_cookie', '30');
              s.prop45 = camps;
              s.eVar45 = "D=c45";
            }
            if(camps.indexOf('ilc-') == 0) {
              s.prop45 = camps;
              s.eVar45 = "D=c45";
            }
            if(camps.indexOf('knc-') == 0) {
              s.campaign = s.getValOnce(camps + "_" + part + "_" + term, 'cmp_cookie', '30');
              s.prop45 = "Paid Search";
              s.eVar45 = "D=c45";
              s.prop16 = part;
              s.eVar3 = "D=c16";
              s.prop17 = term;
              s.eVar8 = "D=c17";
            }
            if(camps.indexOf('snt-') == 0) {
              s.campaign = s.getValOnce(camps, 'cmp_cookie', '30');
              s.prop45 = "Paid Search";
              s.eVar45 = "D=c45";
              s.prop16 = part;
              s.eVar3 = "D=c16";
              s.prop17 = term;
              s.eVar8 = "D=c17";
            }
            if(s._channel != "Natural Search" && s._campaignID == "" && s._channel == "Direct Load") {
              s.prop45 = "Direct Load";
              s.eVar45 = "D=c45";
            }
            if(s._channel == "Natural Search" && s._campaignID == "" && s._channel != "Direct Load") {
              s.campaign = s.getValOnce("okc- natural search" + part + "_" + term, 'cmp_cookie', '30');
              s.prop45 = "Natural Search";
              s.eVar45 = "D=c45";
              s.prop16 = part;
              s.eVar3 = "D=c16";
              s.prop17 = term;
              s.eVar8 = "D=c17";
            }
            //not natural search and not campaign
            if(s._channel != "Natural Search" && s._campaignID == "" && s._channel != "Direct Load") {
              s.campaign = "";
              s.eVar45 = s._referringDomain;
              if(s.prop45 && (s.prop45 != '')) s.prop45 = "D=v45";
            }
          }
          var c_pastEv = s.clickThruQuality(s.eVar45, 'event7', 'event8', 's_ctq');
          if(c_pastEv) ev.push(c_pastEv);
          p.partTime = s.getTimePartingJH('h', '0');
          var refURL = document.referrer;
          if(refURL != "") {
            var iURL = refURL.indexOf('?') > -1 ? refURL.indexOf('?') : refURL.length;
            var qURL = refURL.indexOf('//') > -1 ? refURL.indexOf('//') + 2 : 0;
            var rURL = refURL.indexOf('/', qURL) > -1 ? refURL.indexOf('/', qURL) : iURL;
            p.refDomain = refURL.substring(qURL, rURL);
          }
          if(!o.contentType || o.contentType == '') {
            s.eVar19 = o.section;
          } else {
            s.eVar19 = o.section + '/' + o.contentType;
          }
          if(prod.length) s.products = prod.join(',');
          if(ev.length) s.events = ev.join(',');
          for(k in p) this.setVar(s, k, p[k]);

          //URL length optimisation
          s.pageURL = "D=Referrer";
          if(s.prop12) {
            s.eVar31 = "D=c12";
          }
          if(s.prop1) {
            eVar1 = "D=c1";
          }
          if(s.prop16) {
            s.eVar3 = "D=c16";
          }
          if(s.prop17) {
            s.eVar8 = "D=c17";
          }
          if(s.prop3) {
            s.eVar13 = "D=c3";
          }
          if(s.prop2) {
            s.eVar2 = "D=c2";
          }
          if(s.prop5) {
            s.eVar5 = "D=c5";
          }
          if(s.prop9) {
            s.eVar9 = "D=c9";
          }
          if(s.prop36) {
            s.eVar36 = "D=c36";
          }
          if(s.prop20) {
            s.eVar20 = "D=c20";
          }
          if(s.prop21) {
            s.eVar15 = "D=c21";
          }
          if(s.prop23) {
            s.eVar14 = "D=c23";
          }
          if(s.prop25) {
            s.eVar26 = "D=c25";
          }
          if(s.prop27) {
            s.eVar29 = "D=c27";
          }
          if(s.prop31) {
            s.eVar30 = "D=c31";
          }
          if(s.prop26) {
            s.eVar28 = "D=c26";
          }
          if(s.channel) {
            s.eVar24 = s.hier1 = "D=ch";
          }
          if(s.prop35) {
            s.eVar35 = "D=c35"
          }
          if(s.prop5) {
            s.eVar5 = "D=c5"
          }
          if(s.prop62) {
            s.eVar56 = "D=c62"
          }

          if(p.track) {
            s.t();
          }
        },
        setupScrollTracking: function(s) {

          scroll.autoRecalculate();

          var eventFunction = function(event) {

            s.linkTrackVars='prop72,eVar19';

            if(s.tnt) {
              delete s.tnt;
            }

            s.prop72 = scroll.getMaxViewedPercentageAndMaxScrolledPercentage();
            s.tl(true, 'o', 'track scroll depth');
          };
          window.addEventListener('beforeunload', eventFunction);

        },
        setupTargetTileClick: function(s) {

            var clickFunction = function() {
                s.events = "event6,event197";
                s.linkTrackVars = "prop39,eVar39,prop13,eVar7,tnt,events";
                s.linkTrackEvents = "event6,event197";
                s.tl(true, "o", "Target Tile Click")
            };

            if (window.sdc && window.sdc.pubSub) {
                window.sdc.pubSub.subscribe('dynamic-tile.events.dynamic-tile-clicked', clickFunction);
            }
        },
        getEntitlements: function() {
          if(!window.SKY_SPORTS.user || !window.SKY_SPORTS.user.isLoggedIn) {
            return;
          }

          var user = window.SKY_SPORTS.user;

          if(user.isSkySports) {
            return "sports sub";
          } else if (user.isSky) {
            return "basic sub";
          }

          return "no sub";
        },
        getLoginType: function() {
          if(!window.SKY_SPORTS.user || !window.SKY_SPORTS.user.isLoggedIn) {
            return;
          }

          var user = window.SKY_SPORTS.user;

          if(user.isNowTV) {
            return "now tv";
          } else if (user.isWholesale) {
            return "virgin media";
          }

          // If it isn't nowTv or Virgin we have to assume sky.com
          return "sky.com"

        },
        MovieStartManual: function(m_Name, m_Length, m_Player) {
          var s = sky.tracking.s;
          s.Media.open(m_Name, m_Length, m_Player);
          s.Media.play(m_Name, '0');
        },
        MovieEndManual: function(m_Name, m_Pos) {
          var s = sky.tracking.s;
          s.Media.stop(m_Name, m_Pos);
          s.Media.close(m_Name);
        },
        loadCookies: function() {
          var cl = document.cookie.split(';');
          var o = {};
          for(var i = 0; i < cl.length; i++) {
            var c = cl[i].split('=');
            // Trim whitespace
            o[c[0].replace(/^\s*((?:[\S\s]*\S)?)\s*$/, '$1')] = unescape(c[1]);
          }
          return o;
        },
        setVar: function(s, vname, val) {
          var vl = this.vmap[vname];
          vl = vl ? vl : [vname];
          for(var i = 0; i < vl.length; ++i) {
            s[vl[i]] = val;
          }
        },
        setLoginVars: function(p, ev) {
          var c = this.loadCookies();
          if(c.skySSO) {
            p.loginStatus = 'logged-in';
            if(c.skySSOLast != c.skySSO) {
              this.s.c_w('skySSOLast', c.skySSO);
              var fl = c.skyLoginFrom ? c.skyLoginFrom.split(',') : ['generic', 'l'];
              ev.push(fl[1] == 'l' ? this.eventMap.loginComplete : this.eventMap.regComplete);
              p._loginFrom = fl[0];
            }
          } else {
            p.loginStatus = 'not logged-in';
          }
          if(p.loginFrom) {
            var l = p.loginFrom.split(',');
            this.s.c_w('skyLoginFrom', p.loginFrom);
            ev.push(l[1] == 'l' ? this.eventMap.loginStart : this.eventMap.regStart);
          }
          p.samId = c.just;
          if(c.apd) p.ageGender = c.apd + '|' + c.gpd;
          if(c.sid_tvp) p.skyPackage = c.sid_tvp + '|' + c.sid_hd;
          p.customerType = c.custype;
          if(c.sid_bb) p.loginStatus = c.sid_bb + '|' + p.loginStatus
          if(c.ust) p.optIn = c.ust + '|' + c.sid_tsaoptin;
        },
        getAds: function(tClass) {
          var al = document.getElementsByClassName(tClass);
          var pl = [];
          for(var i = 0; i < al.length; ++i) {
            pl.push(al[i].getAttribute("place"));
            al[i].onclick = this.adClick;
          }
          return pl;
        },
        getFeaturedContents: function(tClass) {
          var al = document.getElementsByClassName(tClass);
          var pl = [];
          for(var i = 0; i < al.length; ++i) {
            pl.push(al[i].getAttribute("place"));
            al[i].onclick = this.featuredContentClick;
          }
          return pl;
        },
        adClick: function() {
          var s = sky.tracking.s;
          s.products = ';' + this.getAttribute("place");
          s.events = 'event5';
          s.linkTrackVars = 'prop39,eVar39,products,events';
          s.linkTrackEvents = 'event5';
          s.tl(this, 'o', 'Ad Click');
        },
        adClickManual: function(place) {
          var s = sky.tracking.s;
          s.products = ';' + String(place);
          s.events = 'event5';
          s.linkTrackVars = 'prop39,eVar39,products,events';
          s.linkTrackEvents = 'event5';
          s.tl(this, 'o', 'Ad Click');
        },
        featuredContentClick: function() {
          var s = sky.tracking.s;
          s.prop15 = this.getAttribute("place");
          s.eVar7 = "D=c15";
          s.events = 'event6';
          s.linkTrackVars = 'prop39,eVar39,prop15,eVar7,events';
          s.linkTrackEvents = 'event6';
          s.tl(this, 'o', 'Link Click');
        },
        featuredContentClickManual: function(place, description) {
          var s = sky.tracking.s;
          s.prop15 = String(place) + "|" + String(description);
          s.eVar7 = "D=c15";
          s.events = 'event6';
          s.linkTrackVars = 'prop39,eVar39,prop15,eVar7,events';
          s.linkTrackEvents = 'event6';
          s.tl(this, 'o', 'Link Click');
        },
        videoTitleClickManual: function(description) {
          var s = sky.tracking.s;
          s.prop26 = String(description);
          s.eVar28 = "D=c26";
          s.events = 'event6';
          s.linkTrackVars = 'prop26,eVar28,events';
          s.linkTrackEvents = 'event6';
          s.tl(this, 'o', 'Link Click');
        },
        multipleEVarsClickManual: function(data, config) {
          var s = sky.tracking.s;
          if (!config.props || !config.evars) {
            return;
          }

          // prop
          config.props.forEach((item) => {
            let propValue = null;
            data.props.forEach((prop) => {
              if (prop.prop === item) {
                propValue = prop.place ?
                  String(prop.place) + '|' + String(prop.description) :
                  String(prop.description);
              }
            });
            this.setVar(s, item, propValue);
          });

          // eVar
          config.evars.forEach((item) => {
            this.setVar(s, item.name, item.value);
          });

          // events
          s.events = config.events ? config.events : null;

          // linkTrackVars
          s.linkTrackVars = config.linkTrackVars ? config.linkTrackVars : null;

          // linkTrackEvents
          s.linkTrackEvents = config.linkTrackEvents ? config.linkTrackEvents : null;

          s.tl(this, 'o', 'Link Click');
        },
        actionTracking: function(varMap, linkType, linkDescription, callingObject) { //reviewing necessary
          var s = sky.tracking.s;
          s.linkTrackVars = [];
          s.linkTrackEvents = [];
          var omtrEvProd = evTmp = '';
          var omtrEvList = omtrEv = prod = [];
          for(var key in varMap) {
            el = (this.vmap[key].length > 1) ? this.vmap[key].join(',') : this.vmap[key];
            if(String(el).replace(/^\s+|\s+$/g, "").length > 0) s.linkTrackVars.push(el);
            if(key == "events") {
              s.linkTrackVars.push('events');
              if(String(varMap[key]).indexOf(',') > 0) {
                var ev_lst = varMap[key].split(',');
                for(j = 0; j < ev_lst.length; j++) {
                  if(ev_lst[j].indexOf('|') > 1) {
                    s.linkTrackVars.join(',').indexOf('products') > 0 ? '' : s.linkTrackVars.push('products');
                    omtrEvList = ev_lst[j].split('|');
                    omtrEvProd = omtrEvList[0];
                    for(var k = 1; k < omtrEvList.length; k++) {
                      evTmp = (this.eventMap[omtrEvList[k++]] ? this.eventMap[omtrEvList[k - 1]] : omtrEvList[k - 1]);
                      prod.push(';' + omtrEvProd + ';;;' + evTmp + '=' + omtrEvList[k]);
                      s.linkTrackEvents.push(evTmp);
                    }
                  } else {
                    if(this.eventMap[ev_lst[j]]) {
                      s.linkTrackEvents.push(this.eventMap[ev_lst[j]]);
                    } else {
                      s.linkTrackEvents.push(ev_lst[j]); //implement strict check.
                    }
                  }
                }
              } else {
                if(varMap[key].indexOf('|') > 1) {
                  s.linkTrackVars.join(',').indexOf('products') > 0 ? '' : s.linkTrackVars.push('products');
                  omtrEvList = varMap[key].split('|');
                  omtrEvProd = omtrEvList[0];
                  for(var k = 1; k < omtrEvList.length; k++) {
                    evTmp = (this.eventMap[omtrEvList[k++]] ? this.eventMap[omtrEvList[k - 1]] : omtrEvList[k - 1]);
                    prod.push(';' + omtrEvProd + ';;;' + evTmp + '=' + omtrEvList[k]);
                    s.linkTrackEvents.push(evTmp);
                  }
                } else {
                  if(this.eventMap[varMap[key]]) {
                    s.linkTrackEvents.push(this.eventMap[varMap[key]]);
                  } else {
                    s.linkTrackEvents.push(varMap[key]); //implement strict check.
                  }
                }
              }
            } else {
              sky.tracking.setVar(s, key, varMap[key]);
            }
          }
          if(prod.length > 0) s.products = prod.join(',');
          s.linkTrackEvents = s.linkTrackEvents.join(',');
          if(s.linkTrackEvents) s['events'] = s.linkTrackEvents;
          s.linkTrackVars = s.linkTrackVars.join(',');

          s.tl(callingObject, linkType, linkDescription);
        },
        getElementsByClassName: function(searchClass) {
          var classElements = new Array();
          var els = document.getElementsByTagName("*");
          var elsLen = els.length;
          var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
          for(i = 0, j = 0; i < elsLen; i++) {
            if(pattern.test(els[i].className)) {
              classElements[j] = els[i];
              j++;
            }
          }
          return classElements;
        },
        loadPlugins: function(s) {
          s.getValOnce = new Function("v", "c", "e", "" + "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime(" + ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
          s.clickThruQuality = function(scp, ct_ev, cp_ev, cpc) {
            var s = this,
              scp, ct_ev, cp_ev, cpc, ev, tct;
            if(s.p_fo(ct_ev) == 1) {
              if(!cpc) {
                cpc = 's_cpc';
              }
              ev = s.events ? s.events + ',' : '';
              if(scp) {
                s.c_w(cpc, 1, 0);
                return ct_ev;
              } else {
                if(s.c_r(cpc) >= 1) {
                  s.c_w(cpc, 0, 0);
                  return cp_ev;
                }
              }
            }
          };
          s.p_fo = new Function("n", "" + "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=" + "new Object;return 1;}else {return 0;}");
          /*
           * Plugin: getQueryParam 2.3
           */
          s.getQueryParam = new Function("p", "d", "u", "" + "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati" + "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p" + ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-" + "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i=" + "=p.length?i:i+1)}return v");
          s.p_gpv = new Function("k", "u", "" + "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=decodeURIComponent" + "(u.substring(i+1));v=s.pt(q,'&','p_gvf',k)}return v");
          s.p_gvf = new Function("t", "k", "" + "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T" + "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s." + "epa(v)}return ''");
          /*
           * Plugin Utility: Replace v1.0
           */
          s.repl = new Function("x", "o", "n", "" + "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x." + "substring(i+o.length);i=x.indexOf(o,i+l)}return x");
          /*
           * Utility Function: split v1.5 (JS 1.0 compatible)
           */
          s.split = new Function("l", "d", "" + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
          /*
           * Plugin: getPreviousValue v1.0 - return previous value of designated
           *   variable (requires split utility)
           */
          s.getPreviousValue = new Function("v", "c", "el", "" + "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" + "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" + "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)" + ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" + "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
          /*
           * channelManager v2.2 - Tracking External Traffic
           */
          s.channelManager = new Function("a", "b", "c", "V", "" + "var s=this,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F," + "G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,W,X,Y;g=s.referrer?s.referrer:documen" + "t.referrer;g=g.toLowerCase();if(!g){h='1'}i=g.indexOf('?')>-1?g.ind" + "exOf('?'):g.length;j=g.substring(0,i);k=s.linkInternalFilters.toLow" + "erCase();k=s.split(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k" + "[m])==-1?'':g;if(n)o=n}if(!o&&!h){p=g;q=g.indexOf('//')>-1?g.indexO" + "f('//')+2:0;r=g.indexOf('/',q)>-1?g.indexOf('/',q):i;t=g.substring(" + "q,r);t=t.toLowerCase();u=t;P='Referrers';v=s.seList+'>'+s._extraSea" + "rchEngines;if(V=='1'){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^'" + ");j=s.repl(j,'as_q','*');}A=s.split(v,'>');B=A.length;for(C=0;C<B;C" + "++){D=A[C];D=s.split(D,'|');E=s.split(D[0],',');F=E.length;for(G=0;" + "G<F;G++){H=j.indexOf(E[G]);if(H>-1){I=s.split(D[1],',');J=I.length;" + "for(K=0;K<J;K++){L=s.getQueryParam(I[K],'',g);if(L){L=L.toLowerCase" + "();M=L;if(D[2]){u=D[2];N=D[2]}else{N=t}if(V=='1'){N=s.repl(N,'#',' " + "- ');N=s.repl(N,'*','as_q');N=s.repl(N,'^','ahoo');N=s.repl(N,'%','" + "oogle');}}}}}}}O=s.getQueryParam(a,b);if(O){u=O;if(M){P='Paid Searc" + "h'}else{P='Paid Non-Search';}}if(!O&&M){u=N;P='Natural Search'}f=s." + "_channelDomain;if(f){k=s.split(f,'>');l=k.length;for(m=0;m<l;m++){Q" + "=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length;for(T=0;T<S;T++){" + "W=j.indexOf(R[T]);if(W>-1)P=Q[0]}}}d=s._channelParameter;if(d){k=s." + "split(d,'>');l=k.length;for(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.sp" + "lit(Q[1],',');S=R.length;for(T=0;T<S;T++){U=s.getQueryParam(R[T]);i" + "f(U)P=Q[0]}}}e=s._channelPattern;if(e){k=s.split(e,'>');l=k.length;" + "for(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length" + ";for(T=0;T<S;T++){X=O.indexOf(R[T]);if(X==0)P=Q[0]}}}if(h=='1'&&!O)" + "{u=P=t=p='Direct Load'}T=M+u+t;U=c?'c':'c_m';if(c!='0'){T=s.getValO" + "nce(T,U,0);}if(T)M=M?M:'n/a';s._referrer=T&&p?p:'';s._referringDoma" + "in=T&&t?t:'';s._partner=T&&N?N:'';s._campaignID=T&&O?O:'';s._campai" + "gn=T&&u?u:'';s._keywords=T&&M?M:'';s._channel=T&&P?P:'';"); /* Top 130 - Grouped */
          s.seList = "altavista.co,altavista.de|q,r|AltaVista>.aol.,suche.aolsvc" + ".de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>www.baidu.com|wd|Baidu>daum" + ".net,search.daum.net|q|Daum>google.,googlesyndication.com|q,as_q|Go" + "ogle>icqit.com|q|icq>bing.com|q|Microsoft Bing>myway.com|searchfor|" + "MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query" + ",search|Netscape Search>reference.com|q|Reference.com>seznam|w|Sezn" + "am.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.co.uk|key,query" + "|Tiscali>virgilio.it|qs|Virgilio>yahoo.com,yahoo.co.jp|p,va|Yahoo!>" + "yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Search>search.ea" + "rthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Search>" + "search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Search";
          /*
           * Plugin: getTimePartingJH
           * Based on getTimeParting 2.0 - Set timeparting values based on time zone
           * This version is altered for BSKYB to return WeekDay_hr_quarter
           * as in Wednesday_17_15  (when called with t="h")
           * By Jeroen Hustinx sept 24, 2010
           */
          s.getTimePartingJH = function(t, z) {
            var s = this,
              cy;
            dc = new Date('1/1/2000');
            if(dc.getDay() != 6 || dc.getMonth() != 0) {
              return 'Data Not Available';
            } else {
              z = parseFloat(z);
              var dsts = new Date(s.dstStart);
              var dste = new Date(s.dstEnd);
              fl = dste;
              cd = new Date();
              if(cd > dsts && cd < fl) {
                z = z + 1
              } else {
                z = z;
              }
              utc = cd.getTime() + (cd.getTimezoneOffset() * 60000);
              tz = new Date(utc + (3600000 * z));
              thisy = tz.getFullYear();
              var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
              if(thisy != s.currentYear) {
                return 'Data Not Available';
              } else {
                thish = tz.getHours();
                thismin = tz.getMinutes();
                thisd = tz.getDay();
                var dow = days[thisd];
                var mint = '00';
                if(thismin > 15) {
                  mint = '15'
                };
                if(thismin > 30) {
                  mint = '30'
                };
                if(thismin > 45) {
                  mint = '45'
                };
                var bskybstring = dow + '_' + thish + '_' + mint;
                if(t == 'h') {
                  return bskybstring
                }
                if(t == 'd') {
                  return dow
                }
              }
            }
          };
        },
        loadMediaModule: function(s) { /* Module: Media */
          s.m_Media_c = "var m=s.m_i('Media');m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a=''," + "x;n=m.cn(n);l=parseInt(l);if(!l)l=1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.p=m.cn(p);i.a=a;i.t=0" + ";i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;m.l[n]=i}};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o){var m=this,i;i=m.e(n,1,o);i.m=new Function('var m" + "=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.mt=setTimeout(i.m,5000)}}');i.m()};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){va" + "r m=this;if (m.trackWhilePlaying) {m.e(n,4,-1)}};m.e=function(n,x,o){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),ti=m.trackSeconds,tp=m.trackMilestones,z=new Array,j,d='--**--',t=1,b," + "v=m.trackVars,e=m.trackEvents,pe='media',pev3,w=new Object,vo=new Object;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){w.name=n;w.length=i.l;w.playerName=i.p;if(i.to<0)w.event=\"OPEN\";else w.event=(x=" + "=1?\"PLAY\":(x==2?\"STOP\":(x==3?\"MONITOR\":\"CLOSE\")));w.openTime=new Date();w.openTime.setTime(i.s*1000);if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {b=\"Media.\"+name;pev3 = m.s.ape(i.n)+d+i.l+d+m.s.a" + "pe(i.p)+d;if(x){if(o<0&&i.lt>0){o=(ts-i.lt)+i.lo;o=o<i.l?o:i.l-1}o=Math.floor(o);if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo;}if(x<=2){i.e+=(x==1?'S':'E')+o;i.lx=x;}else if(i.lx!=1)m.e(n,1,o);i.lt=ts" + ";i.lo=o;pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e+(x!=2?(m.trackWhilePlaying?'L':'E')+o:'');if(m.trackWhilePlaying){b=0;pe='m_o';if(x!=4){w.offset=o;w.percent=((w.offset+1)/w" + ".length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}if(i.to<0)pe='m_s';else if(x==4)pe='m_i';else{t=0;v=e='None';ti=ti?parseInt(ti):0;z=tp?" + "m.s.sp(tp,','):0;if(ti&&i.ts>=ti)t=1;else if(z){if(o<i.to)i.to=o;else{for(j=0;j<z.length;j++){ti=z[j]?parseInt(z[j]):0;if(ti&&((i.to+1)/i.l<ti/100)&&((o+1)/i.l>=ti/100)){t=1;j=z.length}}}}}}}else{m" + ".e(n,2,-1);if(m.trackWhilePlaying){w.offset=i.lo;w.percent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}m.l[n]=0;if(i" + ".e){pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e;if(m.trackWhilePlaying){v=e='None';pe='m_o'}else{t=0;m.s.fbr(b)}}else t=0;b=0}if(t){vo.linkTrackVars=v;vo.linkTrackEvents=e;vo.p" + "e=pe;vo.pev3=pev3;m.s.t(vo,b);if(m.trackWhilePlaying){i.ts=0;i.to=o;i.e=''}}}}return i};m.ae=function(n,l,p,x,o,b){if(n&&p){var m=this;if(!m.l||!m.l[n])m.open(n,l,p,b);m.e(n,x,o)}};m.a=function(o,t" + "){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m'," + "f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=n" + "ew Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catc" + "h(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){" + "p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n=" + "=8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='tex" + "t/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='Qui" + "ckTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l" + "=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n>0&&" + "o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='" + "RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=" + "o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o." + "'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+" + "'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.i" + "sie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false)";
          s.m_i("Media");
        }
      }

      /************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
      var s_code = '',
        s_objectID;

      function s_gi(un, pg, ss) {
        var c = "s._c='s_c';s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s" + ".an=s_an;s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=func" + "tion(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexO" + "f(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3)" + "return encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%" + "16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}return y}else{x=s.rep(escape(''+x),'+','%2B');if(c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if" + "(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;if(x){x=''+x;return s.em==3?de" + "codeURIComponent(x):unescape(s.rep(x,'+',' '))}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.l" + "ength;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.f" + "sf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=" + "s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)=='string')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}" + "c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var" + " s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('" + ".',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s." + "epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NON" + "E'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()" + "+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i]." + "o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv" + ">=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd," + "'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s" + ".t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=" + "p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this," + "l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,0,r.t,r.u)}};s.br=function(id,rs){var s=this;if(s.disableBufferedRequests||!s.c_w('s_br',rs))s.brl=rs};s.flushBufferedReques" + "ts=function(){this.fbr(0)};s.fbr=function(id){var s=this,br=s.c_r('s_br');if(!br)br=s.brl;if(br){if(!s.disableBufferedRequests)s.c_w('s_br','');s.mr(0,0,br)}s.brl=0};s.mr=function(sess,q,rs,id,ta,u" + "){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if" + "(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s" + ".ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/H.22.1/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047);if(id){s.br(id,rs);return}}if(s.d.images&&s.apv>=3" + "&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+']." + "mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e'," + "'this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if((!ta||ta=='_self'||ta=" + "='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0" + " alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=" + "function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,l,a,b='',c='',t;if(x){y=''+x;i=y.indexOf('?');if(i>0){a=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase()" + ";i=0;if(h.substring(0,7)=='http://')i+=7;else if(h.substring(0,8)=='https://')i+=8;h=h.substring(i);i=h.indexOf(\"/\");if(i>0){h=h.substring(0,i);if(h.indexOf('google')>=0){a=s.sp(a,'&');if(a.lengt" + "h>1){l=',q,ie,start,search_key,word,kw,cd,';for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c){y+='?'+b+'&'" + "+c;if(''+x!=y)x=y}}}}}}return x};s.hav=function(){var s=this,qs='',fv=s.linkTrackVars,fe=s.linkTrackEvents,mn,i;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].tr" + "ackVars;fe=s[mn].trackEvents}}fv=fv?fv+','+s.vl_l+','+s.vl_l2:'';for(i=0;i<s.va_t.length;i++){var k=s.va_t[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(v&&k!='linkName'&&k!='l" + "inkType'){if(s.pe||s.lnk||s.eo){if(fv&&(','+fv+',').indexOf(','+k+',')<0)v='';if(k=='events'&&fe)v=s.fs(v,fe)}if(v){if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pa" + "geURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigra" + "tionServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em=" + "=2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode" + "')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j" + "';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp'" + ";else if(k=='plugins')q='p';else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+q+'='+(k.substring(0,3)" + "!='pev'?s.ape(v):v)}}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t" + ")return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExt" + "ernalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)" + "!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t" + "();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Functi" + "on(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.inde" + "xOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'" + "')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE'" + ")t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p" + "=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' '" + ",'');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100" + ");o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&" + "s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,'" + ",','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[u" + "n]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Ob" + "ject.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq" + "[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o" + ".onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie|" + "|!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=func" + "tion(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e)" + ")return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.subst" + "ring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowe" + "rCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};" + "s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_" + "l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Ar" + "ray('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.le" + "ngth;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0" + ";if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(" + "\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl." + "length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexO" + "f('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadMo" + "dule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else " + "g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+']," + "o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!" + "o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javas" + "cript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1," + "f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.vo1=function(t,a){if(a[t]" + "||a['!'+t])this[t]=a[t]};s.vo2=function(t,a){if(!a[t]){a[t]=this[t];if(!a[t])a['!'+t]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.d" + "ll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.d" + "l=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.pt(s.vl_g,',','vo2',vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.t=fun" + "ction(vo,id){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate(" + ")+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Objec" + "t;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1'" + ";if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try" + "{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=" + "screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWid" + "th;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=" + "tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.f" + "l(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=c" + "t;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.pt(s.vl_g,',','vo2',vb);s.pt(s.vl_g,',','vo1',vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer" + ";if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o)" + ",n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:''" + ";if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)return ''}if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName" + ";t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=" + "s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot=" + "'+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,id,ta);qs='';s.m_m('t');if(s.p_r)s.p_r(" + ");s.referrer=''}s.sq(qs);}else{s.dl(vo);}if(vo)s.pt(s.vl_g,',','vo1',vb);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_link" + "Name=s.wd.s_linkType='';if(!id&&!s.tc){s.tc=1;s.flushBufferedRequests()}return code};s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};if(pg){s.wd.s_co=function(o)" + "{var s=s_gi(\"_\",1,1);return s.co(o)};s.wd.s_gs=function(un){var s=s_gi(un,1,1);return s.t()};s.wd.s_dc=function(un){var s=s_gi(un,1);return s.t()}}s.ssl=(s.wd.location.protocol.toLowerCase().inde" + "xOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var ap" + "n=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isope" + "ra=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=" + "parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i==" + "'%U0100'?1:0))}s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLi" + "fetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,products,linkName," + "linkType';for(var n=1;n<76;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browse" + "rHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests" + ",mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadF" + "ileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,_1_referrer';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()",
          w = window,
          l = w.s_c_il,
          n = navigator,
          u = n.userAgent,
          v = n.appVersion,
          e = v.indexOf('MSIE '),
          m = u.indexOf('Netscape6/'),
          a, i, s;
        if(un) {
          un = un.toLowerCase();
          if(l) for(i = 0; i < l.length; i++) {
            s = l[i];
            if(!s._c || s._c == 's_c') {
              if(s.oun == un) return s;
              else if(s.fs && s.sa && s.fs(s.oun, un)) {
                s.sa(un);
                return s
              }
            }
          }
        }
        w.s_an = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        w.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst" + "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
        w.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
        w.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
        w.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d" + "=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(" + "x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
        w.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
        w.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':" + "a");
        w.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i" + "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")" + "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
        c = s_d(c);
        if(e > 0) {
          a = parseInt(i = v.substring(e + 5));
          if(a > 3) a = parseFloat(i)
        } else if(m > 0) a = parseFloat(u.substring(m + 10));
        else a = parseFloat(v);
        if(a >= 5 && v.indexOf('Opera') < 0 && u.indexOf('Opera') < 0) {
          w.s_c = new Function("un", "pg", "ss", "var s=this;" + c);
          return new s_c(un, pg, ss)
        } else s = new Function("un", "pg", "ss", "var s=new Object;" + s_ft(c) + ";return s");
        return s(un, pg, ss)
      }

      /* Audience Manager DIL 5.0 */
      "function"!=typeof DIL&&(DIL=function(a,b){var d=[],c,e;a!==Object(a)&&(a={});var f,g,k,r,t,n,u,D,m,z,H;f=a.partner;g=a.containerNSID;k=a.iframeAttachmentDelay;r=!!a.disableDestinationPublishingIframe;t=a.iframeAkamaiHTTPS;n=a.mappings;u=a.uuidCookie;D=!0===a.enableErrorReporting;m=a.visitorService;z=a.declaredId;H=!0===a.removeFinishedScriptsAndCallbacks;var I,J,E,B;I=!0===a.disableScriptAttachment;J=!0===a.disableDefaultRequest;E=a.afterResultForDefaultRequest;B=a.dpIframeSrc;D&&DIL.errorModule.activate();
        var K=!0===window._dil_unit_tests;(c=b)&&d.push(c+"");if(!f||"string"!=typeof f)return c="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:c,filename:"dil.js"}),Error(c);c="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(g||"number"==typeof g)g=parseInt(g,10),!isNaN(g)&&0<=g&&(c="");c&&(g=0,d.push(c),c="");e=DIL.getDil(f,g);if(e instanceof DIL&&e.api.getPartner()==f&&e.api.getContainerNSID()==g)return e;
        if(this instanceof DIL)DIL.registerDil(this,f,g);else return new DIL(a,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+f+" and containerNSID = "+g);var w={IS_HTTPS:"https:"==document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC"},F={stuffed:{}},l={},p={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},
          callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:g+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,mid:null,noVisitorAPI:!1,instance:null,releaseType:"no VisitorAPI",
            admsProcessingStarted:!1,process:function(h){try{if(!this.admsProcessingStarted){var a=this,v,b,c,d,f;if("function"==typeof h&&"function"==typeof h.getInstance){if(m===Object(m)&&(v=m.namespace)&&"string"==typeof v)b=h.getInstance(v);else{this.releaseType="no namespace";this.releaseRequests();return}if(b===Object(b)&&"function"==typeof b.isAllowed&&"function"==typeof b.getMarketingCloudVisitorID){if(!b.isAllowed()){this.releaseType="VisitorAPI not allowed";this.releaseRequests();return}this.instance=
              b;this.admsProcessingStarted=!0;c=function(h){"VisitorAPI"!=a.releaseType&&(a.mid=h,a.releaseType="VisitorAPI",a.releaseRequests())};K&&(d=m.server)&&"string"==typeof d&&(b.server=d);f=b.getMarketingCloudVisitorID(c);if("string"==typeof f&&f.length){c(f);return}setTimeout(function(){"VisitorAPI"!=a.releaseType&&(a.releaseType="timeout",a.releaseRequests())},this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(e){this.releaseRequests()}},
            releaseRequests:function(){this.calledBack=!0;p.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var h=s.isPopulatedString,a=this.getMarketingCloudVisitorID();h(this.mid)&&this.mid==a||(this.mid=a);return h(this.mid)?"d_mid="+this.mid+"&":""}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(h,a){var b=s.isPopulatedString,c=encodeURIComponent;if(h===
            Object(h)&&b(a)){var d=h.dpid,f=h.dpuuid,e=null;if(b(d)&&b(f)){e=c(d)+"$"+c(f);if(!0===this.declaredIdCombos[e])return"setDeclaredId: combo exists for type '"+a+"'";this.declaredIdCombos[e]=!0;this.declaredId[a]={dpid:d,dpuuid:f};return"setDeclaredId: succeeded for type '"+a+"'"}}return"setDeclaredId: failed for type '"+a+"'"},getDeclaredIdQueryString:function(){var h=this.declaredId.request,a=this.declaredId.init,b="";null!==h?b="&d_dpid="+h.dpid+"&d_dpuuid="+h.dpuuid:null!==a&&(b="&d_dpid="+a.dpid+
              "&d_dpuuid="+a.dpuuid);return b}},registerRequest:function(h){var a=this.firingQueue;h===Object(h)&&a.push(h);!this.firing&&a.length&&(this.adms.calledBack?(h=a.shift(),h.src=h.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),x.fireRequest(h),this.firstRequestHasFired||"script"!=h.tag||(this.firstRequestHasFired=!0)):this.processVisitorAPI())},processVisitorAPI:function(){this.adms.process(window.Visitor)},requestRemoval:function(h){if(!H)return"removeFinishedScriptsAndCallbacks is not boolean true";
            var a=this.toRemove,b,c;h===Object(h)&&(b=h.script,c=h.callbackName,(b===Object(b)&&"SCRIPT"==b.nodeName||"no script created"==b)&&"string"==typeof c&&c.length&&a.push(h));if(this.readyToRemove&&a.length){c=a.shift();b=c.script;c=c.callbackName;"no script created"!=b?(h=b.src,b.parentNode.removeChild(b)):h=b;window[c]=null;try{delete window[c]}catch(d){}this.removed.push({scriptSrc:h,callbackName:c});DIL.variables.scriptsRemoved.push(h);DIL.variables.callbacksRemoved.push(c);return this.requestRemoval()}return"requestRemoval() processed"}};
        e=function(){var h="http://fast.",a="?d_nsid="+g+"#"+encodeURIComponent(document.location.href);if("string"===typeof B&&B.length)return B+a;w.IS_HTTPS&&(h=!0===t?"https://fast.":"https://");return h+f+".demdex.net/dest4.html"+a};var y={THROTTLE_START:3E4,throttleTimerSet:!1,id:"destination_publishing_iframe_"+f+"_"+g,url:e(),iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messageSendingInterval:w.POST_MESSAGE_ENABLED?15:100,jsonProcessed:[],attachIframe:function(){var h=
          this,a=document.createElement("iframe");a.id=this.id;a.style.cssText="display: none; width: 0; height: 0;";a.src=this.url;q.addListener(a,"load",function(){h.iframeHasLoaded=!0;h.requestToProcess()});document.body.appendChild(a);this.iframe=a},requestToProcess:function(h,a){var b=this;h&&!s.isEmptyObject(h)&&this.process(h,a);this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){b.messageSendingInterval=w.POST_MESSAGE_ENABLED?
          15:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},process:function(h,a){var b=encodeURIComponent,c,d,f,e,g,m;a===Object(a)&&(m=q.encodeAndBuildRequest(["",a.dpid||"",a.dpuuid||""],","));if((c=h.dests)&&c instanceof Array&&(d=c.length))for(f=0;f<d;f++)e=c[f],e=[b("dests"),b(e.id||""),b(e.y||""),b(e.c||"")],this.addMessage(e.join("|"));if((c=h.ibs)&&c instanceof Array&&(d=c.length))for(f=0;f<d;f++)e=c[f],e=[b("ibs"),b(e.id||""),b(e.tag||""),q.encodeAndBuildRequest(e.url||[],
          ","),b(e.ttl||""),"",m],this.addMessage(e.join("|"));if((c=h.dpcalls)&&c instanceof Array&&(d=c.length))for(f=0;f<d;f++)e=c[f],g=e.callback||{},g=[g.obj||"",g.fn||"",g.key||"",g.tag||"",g.url||""],e=[b("dpm"),b(e.id||""),b(e.tag||""),q.encodeAndBuildRequest(e.url||[],","),b(e.ttl||""),q.encodeAndBuildRequest(g,","),m],this.addMessage(e.join("|"));this.jsonProcessed.push(h)},addMessage:function(h){var a=encodeURIComponent,a=D?a("---destpub-debug---"):a("---destpub---");this.messages.push(a+h)},sendMessages:function(){var h=
          this,a;this.messages.length?(a=this.messages.shift(),DIL.xd.postMessage(a,this.url,this.iframe.contentWindow),this.messagesPosted.push(a),setTimeout(function(){h.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1}},G={traits:function(h){s.isValidPdata(h)&&(l.sids instanceof Array||(l.sids=[]),q.extendArray(l.sids,h));return this},pixels:function(h){s.isValidPdata(h)&&(l.pdata instanceof Array||(l.pdata=[]),q.extendArray(l.pdata,h));return this},logs:function(h){s.isValidLogdata(h)&&
        (l.logdata!==Object(l.logdata)&&(l.logdata={}),q.extendObject(l.logdata,h));return this},customQueryParams:function(h){s.isEmptyObject(h)||q.extendObject(l,h,p.reservedKeys);return this},signals:function(h,a){var b,c=h;if(!s.isEmptyObject(c)){if(a&&"string"==typeof a)for(b in c={},h)h.hasOwnProperty(b)&&(c[a+b]=h[b]);q.extendObject(l,c,p.reservedKeys)}return this},declaredId:function(h){p.declaredId.setDeclaredId(h,"request");return this},result:function(h){"function"==typeof h&&(l.callback=h);return this},
          afterResult:function(h){"function"==typeof h&&(l.postCallbackFn=h);return this},useImageRequest:function(){l.useImageRequest=!0;return this},clearData:function(){l={};return this},submit:function(){x.submitRequest(l);l={};return this},getPartner:function(){return f},getContainerNSID:function(){return g},getEventLog:function(){return d},getState:function(){var h={},a={};q.extendObject(h,p,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});q.extendObject(a,y,{attachIframe:!0,requestToProcess:!0,process:!0,
            sendMessages:!0});return{pendingRequest:l,otherRequestInfo:h,destinationPublishingInfo:a}},idSync:function(a){if(a!==Object(a)||"string"!=typeof a.dpid||!a.dpid.length)return"Error: config or config.dpid is empty";if("string"!=typeof a.url||!a.url.length)return"Error: config.url is empty";var b=a.url,c=a.minutesToLive,d=encodeURIComponent,f,b=b.replace(/^https:/,"").replace(/^http:/,"");if("undefined"==typeof c)c=20160;else if(c=parseInt(c,10),isNaN(c)||0>=c)return"Error: config.minutesToLive needs to be a positive number";
            f=q.encodeAndBuildRequest(["",a.dpid,a.dpuuid||""],",");a=["ibs",d(a.dpid),"img",d(b),c,"",f];y.addMessage(a.join("|"));p.firstRequestHasFired&&y.requestToProcess();return"Successfully queued"},aamIdSync:function(a){if(a!==Object(a)||"string"!=typeof a.dpuuid||!a.dpuuid.length)return"Error: config or config.dpuuid is empty";a.url="//dpm.demdex.net/ibs:dpid="+a.dpid+"&dpuuid="+a.dpuuid;return this.idSync(a)},passData:function(a){if(s.isEmptyObject(a))return"Error: json is empty or not an object";x.defaultCallback(a);
            return"json submitted for processing"},getPlatformParams:function(){return p.platformParams},getEventCallConfigParams:function(){var a=p,b=a.modStatsParams,c=a.platformParams,d;if(!b){b={};for(d in c)c.hasOwnProperty(d)&&!a.nonModStatsParams[d]&&(b[d.replace(/^d_/,"")]=c[d]);a.modStatsParams=b}return b}},x={submitRequest:function(a){p.registerRequest(x.createQueuedRequest(a));return!0},createQueuedRequest:function(a){var b=p,c,d=a.callback,e="img";if(!s.isEmptyObject(n)){var A,m,u;for(A in n)n.hasOwnProperty(A)&&
        (m=n[A],null!=m&&""!==m&&A in a&&!(m in a||m in p.reservedKeys)&&(u=a[A],null!=u&&""!==u&&(a[m]=u)))}s.isValidPdata(a.sids)||(a.sids=[]);s.isValidPdata(a.pdata)||(a.pdata=[]);s.isValidLogdata(a.logdata)||(a.logdata={});a.logdataArray=q.convertObjectToKeyValuePairs(a.logdata,"=",!0);a.logdataArray.push("_ts="+(new Date).getTime());"function"!=typeof d&&(d=this.defaultCallback);if(b.useJSONP=!a.useImageRequest||"boolean"!=typeof a.useImageRequest)e="script",c=b.callbackPrefix+"_"+f+"_"+g+"_"+(new Date).getTime();
          return{tag:e,src:x.makeRequestSrc(a,c),internalCallbackName:c,callbackFn:d,postCallbackFn:a.postCallbackFn,useImageRequest:a.useImageRequest,requestData:a}},defaultCallback:function(a,b){var c,d,f,e,g,m,n,l,k;if((c=a.stuff)&&c instanceof Array&&(d=c.length))for(f=0;f<d;f++)if((e=c[f])&&e===Object(e)){g=e.cn;m=e.cv;n=e.ttl;if("undefined"==typeof n||""===n)n=Math.floor(q.getMaxCookieExpiresInMinutes()/60/24);l=e.dmn||"."+document.domain.replace(/^www\./,"");k=e.type;g&&(m||"number"==typeof m)&&("var"!=
        k&&(n=parseInt(n,10))&&!isNaN(n)&&q.setCookie(g,m,1440*n,"/",l,!1),F.stuffed[g]=m)}c=a.uuid;s.isPopulatedString(c)&&!s.isEmptyObject(u)&&(d=u.path,"string"==typeof d&&d.length||(d="/"),f=parseInt(u.days,10),isNaN(f)&&(f=100),q.setCookie(u.name||"aam_did",c,1440*f,d,u.domain||"."+document.domain.replace(/^www\./,""),!0===u.secure));r||p.abortRequests||y.requestToProcess(a,b)},makeRequestSrc:function(a,b){a.sids=s.removeEmptyArrayValues(a.sids||[]);a.pdata=s.removeEmptyArrayValues(a.pdata||[]);var c=
          p,d=c.platformParams,e=q.encodeAndBuildRequest(a.sids,","),g=q.encodeAndBuildRequest(a.pdata,","),m=(a.logdataArray||[]).join("&");delete a.logdataArray;var n=w.IS_HTTPS?"https://":"http://",u=c.declaredId.getDeclaredIdQueryString(),l;l=[];var k,t,r,z;for(k in a)if(!(k in c.reservedKeys)&&a.hasOwnProperty(k))if(t=a[k],k=encodeURIComponent(k),t instanceof Array)for(r=0,z=t.length;r<z;r++)l.push(k+"="+encodeURIComponent(t[r]));else l.push(k+"="+encodeURIComponent(t));l=l.length?"&"+l.join("&"):"";return n+
          f+".demdex.net/event?d_nsid="+d.d_nsid+u+(e.length?"&d_sid="+e:"")+(g.length?"&d_px="+g:"")+(m.length?"&d_ld="+encodeURIComponent(m):"")+l+(c.useJSONP?"&d_rtbd="+d.d_rtbd+"&d_jsonv="+d.d_jsonv+"&d_dst="+d.d_dst+"&d_cb="+(b||""):"")},fireRequest:function(a){if("img"==a.tag)this.fireImage(a);else if("script"==a.tag){var b=p.declaredId,b=b.declaredId.request||b.declaredId.init||{};this.fireScript(a,{dpid:b.dpid||"",dpuuid:b.dpuuid||""})}},fireImage:function(a){var b=p,f,e;b.abortRequests||(b.firing=
          !0,f=new Image(0,0),b.sent.push(a),f.onload=function(){b.firing=!1;b.fired.push(a);b.num_of_img_responses++;b.registerRequest()},e=function(f){c="imgAbortOrErrorHandler received the event of type "+f.type;d.push(c);b.abortRequests=!0;b.firing=!1;b.errored.push(a);b.num_of_img_errors++;b.registerRequest()},f.addEventListener?(f.addEventListener("error",e,!1),f.addEventListener("abort",e,!1)):f.attachEvent&&(f.attachEvent("onerror",e),f.attachEvent("onabort",e)),f.src=a.src)},fireScript:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             b){var e=this,g=p,m,n,u=a.src,k=a.postCallbackFn,l="function"==typeof k,t=a.internalCallbackName;g.abortRequests||(g.firing=!0,window[t]=function(e){try{e!==Object(e)&&(e={});var m=a.callbackFn;g.firing=!1;g.fired.push(a);g.num_of_jsonp_responses++;m(e,b);l&&k(e,b)}catch(v){v.message="DIL jsonp callback caught error with message "+v.message;c=v.message;d.push(c);v.filename=v.filename||"dil.js";v.partner=f;DIL.errorModule.handleError(v);try{m({error:v.name+"|"+v.message}),l&&k({error:v.name+"|"+v.message})}catch(u){}}finally{g.requestRemoval({script:n,
          callbackName:t}),g.registerRequest()}},I?(g.firing=!1,g.requestRemoval({script:"no script created",callbackName:t})):(n=document.createElement("script"),n.addEventListener&&n.addEventListener("error",function(b){g.requestRemoval({script:n,callbackName:t});c="jsonp script tag error listener received the event of type "+b.type+" with src "+u;e.handleScriptError(c,a)},!1),n.type="text/javascript",n.src=u,m=DIL.variables.scriptNodeList[0],m.parentNode.insertBefore(n,m)),g.sent.push(a),g.declaredId.declaredId.request=
          null)},handleScriptError:function(a,b){var c=p;d.push(a);c.abortRequests=!0;c.firing=!1;c.errored.push(b);c.num_of_jsonp_errors++;c.registerRequest()}},s={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeEmptyArrayValues:function(a){for(var b=0,c=a.length,d,e=[],b=0;b<c;b++)d=a[b],
        "undefined"!=typeof d&&null!=d&&e.push(d);return e},isPopulatedString:function(a){return"string"==typeof a&&a.length}},q={addListener:function(){if(document.addEventListener)return function(a,b,c){a.addEventListener(b,function(a){"function"==typeof c&&c(a)},!1)};if(document.attachEvent)return function(a,b,c){a.attachEvent("on"+b,function(a){"function"==typeof c&&c(a)})}}(),convertObjectToKeyValuePairs:function(a,b,c){var d=[];b=b||"=";var e,f;for(e in a)f=a[e],"undefined"!=typeof f&&null!=f&&d.push(e+
          b+(c?encodeURIComponent(f):f));return d},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var e=Array(d),f=0;f<d;f++)f in c&&(e[f]=b.call(b,c[f],f,c));return e},filter:function(a,b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;var c=Object(a),
          d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var f=[],e=0;e<d;e++)if(e in c){var g=c[e];b.call(b,g,e,c)&&f.push(g)}return f}return a.filter(b)},getCookie:function(a){a+="=";var b=document.cookie.split(";"),c,d,e;c=0;for(d=b.length;c<d;c++){for(e=b[c];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return decodeURIComponent(e.substring(a.length,e.length))}return null},setCookie:function(a,b,c,d,e,f){var g=new Date;c&&(c*=6E4);document.cookie=a+"="+encodeURIComponent(b)+
          (c?";expires="+(new Date(g.getTime()+c)).toUTCString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(f?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,b),!0):!1},extendObject:function(a,b,c){var d;if(a===Object(a)&&b===Object(b)){for(d in b)!b.hasOwnProperty(d)||!s.isEmptyObject(c)&&d in c||(a[d]=b[d]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(w.COOKIE_MAX_EXPIRATION_DATE)).getTime()-(new Date).getTime())/
          1E3/60}};"error"==f&&0==g&&q.addListener(window,"load",function(){DIL.windowLoaded=!0});var C=function(){M();r||p.abortRequests||y.attachIframe();p.readyToRemove=!0;p.requestRemoval()},M=function(){r||setTimeout(function(){J||p.firstRequestHasFired||p.adms.admsProcessingStarted||p.adms.calledBack||("function"==typeof E?G.afterResult(E).submit():G.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)},L=document;"error"!=f&&(DIL.windowLoaded?C():"complete"!=L.readyState&&"loaded"!=L.readyState?q.addListener(window,
              "load",C):DIL.isAddedPostWindowLoadWasCalled?q.addListener(window,"load",C):(k="number"==typeof k?parseInt(k,10):0,0>k&&(k=0),setTimeout(C,k||DIL.constants.TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT)));p.declaredId.setDeclaredId(z,"init");this.api=G;this.getStuffedVariable=function(a){var b=F.stuffed[a];b||"number"==typeof b||(b=q.getCookie(a))||"number"==typeof b||(b="");return b};this.validators=s;this.helpers=q;this.constants=w;this.log=d;K&&(this.pendingRequest=l,this.requestController=p,this.setDestinationPublishingUrl=
          e,this.destinationPublishing=y,this.requestProcs=x,this.variables=F)},function(){var a=document,b;null==a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",b=function(){a.removeEventListener("DOMContentLoaded",b,!1);a.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(a){var b;if(a===Object(a))for(b in a)a.hasOwnProperty(b)&&(this[b]=a[b])},DIL.extendStaticPropertiesAndMethods({version:"5.0",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50,
        TIME_TO_CATCH_ALL_DP_IFRAME_ATTACHMENT:500},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoadWasCalled:!1,isAddedPostWindowLoad:function(a){this.isAddedPostWindowLoadWasCalled=!0;this.windowLoaded="function"==typeof a?!!a():"boolean"==typeof a?a:!0},create:function(a){try{return new DIL(a)}catch(b){return(new Image(0,0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+
        (new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(a,b,d){b=b+"$"+d;b in this.dils||(this.dils[b]=a)},getDil:function(a,b){var d;"string"!=typeof a&&(a="");b||(b=0);d=a+"$"+b;return d in this.dils?this.dils[d]:Error("The DIL instance with partner = "+a+" and containerNSID = "+b+" was not found")},dexGetQSVars:function(a,b,d){b=this.getDil(b,d);return b instanceof this?b.getStuffedVariable(a):""},xd:{postMessage:function(a,b,d){var c=1;b&&
      (window.postMessage?d.postMessage(a,b.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):b&&(d.location=b.replace(/#.*$/,"")+"#"+ +new Date+c++ +"&"+a))}}}),DIL.errorModule=function(){var a=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),b={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},d=!1;return{activate:function(){d=!0},handleError:function(c){if(!d)return"DIL error module has not been activated";
        c!==Object(c)&&(c={});var e=c.name?(new String(c.name)).toLowerCase():"",f=[];c={name:e,filename:c.filename?c.filename+"":"",partner:c.partner?c.partner+"":"no_partner",site:c.site?c.site+"":document.location.href,message:c.message?c.message+"":""};f.push(e in b?b[e]:b.noerrortypedefined);a.api.pixels(f).logs(c).useImageRequest().submit();return"DIL error report sent"},pixelMap:b}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(a,b,d){var c="";b=b||"Error caught in DIL module/submodule: ";
        a===Object(a)?c=b+(a.message||"err has no message"):(c=b+"err is not a valid object",a={});a.message=c;d instanceof DIL&&(a.partner=d.api.getPartner());DIL.errorModule.handleError(a);return this.errorMessage=c}}});
      DIL.tools.getSearchReferrer=function(a,b){var d=DIL.getDil("error"),c=DIL.tools.decomposeURI(a||document.referrer),e="",f="",g={queryParam:"q"};return(e=d.helpers.filter([b===Object(b)?b:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(a){return!(!a.hasOwnProperty("hostPattern")||!c.hostname.match(a.hostPattern))}).shift())?{valid:!0,name:c.hostname,keywords:(d.helpers.extendObject(g,e),f=g.queryPattern?
          (e=(""+c.search).match(g.queryPattern))?e[1]:"":c.uriParams[g.queryParam],decodeURIComponent(f||"").replace(/\+|%20/g," "))}:{valid:!1,name:"",keywords:""}};
      DIL.tools.decomposeURI=function(a){var b=DIL.getDil("error"),d=document.createElement("a");d.href=a||document.referrer;return{hash:d.hash,host:d.host.split(":").shift(),hostname:d.hostname,href:d.href,pathname:d.pathname.replace(/^\//,""),protocol:d.protocol,search:d.search,uriParams:function(a,d){b.helpers.map(d.split("&"),function(b){b=b.split("=");a[b.shift()]=b.shift()});return a}({},d.search.replace(/^(\/|\?)?|\/$/g,""))}};
      DIL.tools.getMetaTags=function(){var a={},b=document.getElementsByTagName("meta"),d,c,e,f,g;d=0;for(e=arguments.length;d<e;d++)if(f=arguments[d],null!==f)for(c=0;c<b.length;c++)if(g=b[c],g.name==f){a[f]=g.content;break}return a};
      DIL.modules.siteCatalyst={dil:null,handle:DIL.modules.helpers.handleModuleError,init:function(a,b,d,c){try{var e=this,f={name:"DIL Site Catalyst Module Error"},g=function(a){f.message=a;DIL.errorModule.handleError(f);return a};this.options=c===Object(c)?c:{};this.dil=null;if(b instanceof DIL)this.dil=b;else return g("dilInstance is not a valid instance of DIL");f.partner=b.api.getPartner();if(a!==Object(a))return g("siteCatalystReportingSuite is not an object");window.AppMeasurement_Module_DIL=a.m_DIL=
        function(a){var b="function"===typeof a.m_i?a.m_i("DIL"):this;if(b!==Object(b))return g("m is not an object");b.trackVars=e.constructTrackVars(d);b.d=0;b.s=a;b._t=function(){var a,b,c=","+this.trackVars+",",d=this.s,f,k=[];f=[];var t={},r=!1;if(d!==Object(d))return g("Error in m._t function: s is not an object");if(this.d){if("function"==typeof d.foreachVar)d.foreachVar(function(a,b){t[a]=b;r=!0},this.trackVars);else{if(!(d.va_t instanceof Array))return g("Error in m._t function: s.va_t is not an array");
          if(d.lightProfileID)(a=d.lightTrackVars)&&(a=","+a+","+d.vl_mr+",");else if(d.pe||d.linkType)a=d.linkTrackVars,d.pe&&(b=d.pe.substring(0,1).toUpperCase()+d.pe.substring(1),d[b]&&(a=d[b].trackVars)),a&&(a=","+a+","+d.vl_l+","+d.vl_l2+",");if(a){b=0;for(k=a.split(",");b<k.length;b++)0<=c.indexOf(","+k[b]+",")&&f.push(k[b]);f.length&&(c=","+f.join(",")+",")}f=0;for(b=d.va_t.length;f<b;f++)a=d.va_t[f],0<=c.indexOf(","+a+",")&&null!=d[a]&&""!==d[a]&&(t[a]=d[a],r=!0)}e.includeContextData(d,e,t).store_populated&&
        (r=!0);r&&this.d.api.signals(t,"c_").submit()}}};a.loadModule("DIL");a.DIL.d=b;return f.message?f.message:"DIL.modules.siteCatalyst.init() completed with no errors"}catch(k){return this.handle(k,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(a){var b=[],d,c,e,f,g;if(a===Object(a)){d=a.names;if(d instanceof Array&&(e=d.length))for(c=0;c<e;c++)f=d[c],"string"==typeof f&&f.length&&b.push(f);a=a.iteratedNames;if(a instanceof Array&&(e=a.length))for(c=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 0;c<e;c++)if(d=a[c],d===Object(d)&&(f=d.name,g=parseInt(d.maxIndex,10),"string"==typeof f&&f.length&&!isNaN(g)&&0<=g))for(d=0;d<=g;d++)b.push(f+d);if(b.length)return b.join(",")}return this.constructTrackVars({names:"pageName channel campaign products events pe pev1 pev2 pev3".split(" "),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:75}]})},includeContextData:function(a,b,d){var c={},e=!1;if(a.contextData===Object(a.contextData)){a=a.contextData;b=b.options.replaceContextDataPeriodsWith;
        var f,g;"string"===typeof b&&b.length||(b="_");for(f in a)a.hasOwnProperty(f)&&((g=a[f])||"number"===typeof g)&&(f=("contextData."+f).replace(/\./g,b),d[f]=g,e=!0)}c.store_populated=e;return c}};
      DIL.modules.GA={dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:DIL.modules.helpers.handleModuleError,init:function(a,b,d){try{this.tv=this.arr=this.dil=null;this.errorMessage="";this.signals={};this.hasSignals=!1;var c={name:"DIL GA Module Error"},e="";b instanceof DIL?(this.dil=b,c.partner=this.dil.api.getPartner()):(e="dilInstance is not a valid instance of DIL",
          c.message=e,DIL.errorModule.handleError(c));a instanceof Array&&a.length?this.arr=a:(e="gaArray is not an array or is empty",c.message=e,DIL.errorModule.handleError(c));this.tv=this.constructTrackVars(d);this.errorMessage=e}catch(f){this.handle(f,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(a){var b=[],d,c,e,f;if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){e=this.defaultTrackVars;f={};d=0;for(c=e.length;d<c;d++)f[e[d]]=
        !0;this.defaultTrackVarsObj=f}else f=this.defaultTrackVarsObj;if(a===Object(a)){a=a.names;if(a instanceof Array&&(c=a.length))for(d=0;d<c;d++)e=a[d],"string"==typeof e&&e.length&&e in f&&b.push(e);if(b.length)return b}return this.defaultTrackVars},constructGAObj:function(a){var b={};a=a instanceof Array?a:this.arr;var d,c,e,f;d=0;for(c=a.length;d<c;d++)e=a[d],e instanceof Array&&e.length&&(e=[],f=a[d],e instanceof Array&&f instanceof Array&&Array.prototype.push.apply(e,f),f=e.shift(),"string"==typeof f&&
      f.length&&(b[f]instanceof Array||(b[f]=[]),b[f].push(e)));return b},addToSignals:function(a,b){if("string"!=typeof a||""===a||null==b||""===b)return!1;this.signals[a]instanceof Array||(this.signals[a]=[]);this.signals[a].push(b);return this.hasSignals=!0},constructSignals:function(){var a=this.constructGAObj(),b={_setAccount:function(a){this.addToSignals("c_accountId",a)},_setCustomVar:function(a,b,c,d){"string"==typeof b&&b.length&&this.addToSignals("c_"+b,c)},_addItem:function(a,b,c,d,e,f){this.addToSignals("c_itemOrderId",
        a);this.addToSignals("c_itemSku",b);this.addToSignals("c_itemName",c);this.addToSignals("c_itemCategory",d);this.addToSignals("c_itemPrice",e);this.addToSignals("c_itemQuantity",f)},_addTrans:function(a,b,c,d,e,f,g,k){this.addToSignals("c_transOrderId",a);this.addToSignals("c_transAffiliation",b);this.addToSignals("c_transTotal",c);this.addToSignals("c_transTax",d);this.addToSignals("c_transShipping",e);this.addToSignals("c_transCity",f);this.addToSignals("c_transState",g);this.addToSignals("c_transCountry",
        k)},_trackSocial:function(a,b,c,d){this.addToSignals("c_socialNetwork",a);this.addToSignals("c_socialAction",b);this.addToSignals("c_socialTarget",c);this.addToSignals("c_socialPagePath",d)}},d=this.tv,c,e,f,g,k,r;c=0;for(e=d.length;c<e;c++)if(f=d[c],a.hasOwnProperty(f)&&b.hasOwnProperty(f)&&(r=a[f],r instanceof Array))for(g=0,k=r.length;g<k;g++)b[f].apply(this,r[g])},submit:function(){try{if(""!==this.errorMessage)return this.errorMessage;this.constructSignals();return this.hasSignals?(this.dil.api.signals(this.signals).submit(),
        "Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)+this.dil.log):"No signals present"}catch(a){return this.handle(a,"DIL.modules.GA.submit() caught error with message ",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:DIL.modules.helpers.handleModuleError,callback:null,v:function(){return!1},init:function(a,b,d){try{this.callback=this.dil=null,this.errorMessage="",a instanceof DIL?(this.dil=a,this.v=this.dil.validators.isPopulatedString,
          this.cookieName=this.v(b)?b:"aam_ga",this.delimiter=this.v(d)?d:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(c){this.handle(c,"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(a){var b,d,c,e,f,g;g=!1;var k=1;if(a===Object(a)&&(b=a.stuff)&&b instanceof Array&&(d=b.length))for(a=0;a<d;a++)if((c=b[a])&&c===Object(c)&&(e=c.cn,f=c.cv,e==this.cookieName&&this.v(f))){g=!0;break}if(g){b=
        f.split(this.delimiter);"undefined"==typeof window._gaq&&(window._gaq=[]);c=window._gaq;a=0;for(d=b.length;a<d&&!(g=b[a].split("="),f=g[0],g=g[1],this.v(f)&&this.v(g)&&c.push(["_setCustomVar",k++,f,g,1]),k>this.LIMIT);a++);this.errorMessage=1<k?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"==typeof this.callback)return this.callback()},submit:function(){try{var a=this;if(""!==this.errorMessage)return this.errorMessage;
        this.dil.api.afterResult(function(b){a.process(b)}).submit();return"DIL.modules.GA.Stuffer.submit() successful"}catch(b){return this.handle(b,"DIL.modules.GA.Stuffer.submit() caught error with message ",this.dil)}}}};
      DIL.modules.Peer39={aid:"",dil:null,optionals:null,errorMessage:"",calledBack:!1,script:null,scriptsSent:[],returnedData:[],handle:DIL.modules.helpers.handleModuleError,init:function(a,b,d){try{this.dil=null;this.errorMessage="";this.calledBack=!1;this.optionals=d===Object(d)?d:{};d={name:"DIL Peer39 Module Error"};var c=[],e="";this.isSecurePageButNotEnabled(document.location.protocol)&&(e="Module has not been enabled for a secure page",c.push(e),d.message=e,DIL.errorModule.handleError(d));b instanceof
      DIL?(this.dil=b,d.partner=this.dil.api.getPartner()):(e="dilInstance is not a valid instance of DIL",c.push(e),d.message=e,DIL.errorModule.handleError(d));"string"==typeof a&&a.length?this.aid=a:(e="aid is not a string or is empty",c.push(e),d.message=e,DIL.errorModule.handleError(d));this.errorMessage=c.join("\n")}catch(f){this.handle(f,"DIL.modules.Peer39.init() caught error with message ",this.dil)}finally{return this}},isSecurePageButNotEnabled:function(a){return"https:"==a&&!0!==this.optionals.enableHTTPS?
        !0:!1},constructSignals:function(){var a=this,b=this.constructScript(),d=DIL.variables.scriptNodeList[0];window["afterFinished_"+this.aid]=function(){try{var b=a.processData(p39_KVP_Short("c_p","|").split("|"));b.hasSignals&&a.dil.api.signals(b.signals).submit()}catch(d){}finally{a.calledBack=!0,"function"==typeof a.optionals.afterResult&&a.optionals.afterResult()}};d.parentNode.insertBefore(b,d);this.scriptsSent.push(b);return"Request sent to Peer39"},processData:function(a){var b,d,c,e,f={},g=!1;
        this.returnedData.push(a);if(a instanceof Array)for(b=0,d=a.length;b<d;b++)c=a[b].split("="),e=c[0],c=c[1],e&&isFinite(c)&&!isNaN(parseInt(c,10))&&(f[e]instanceof Array||(f[e]=[]),f[e].push(c),g=!0);return{hasSignals:g,signals:f}},constructScript:function(){var a=document.createElement("script"),b=this.optionals,d=b.scriptId,c=b.scriptSrc,b=b.scriptParams;a.id="string"==typeof d&&d.length?d:"peer39ScriptLoader";a.type="text/javascript";"string"==typeof c&&c.length?a.src=c:(a.src=(this.dil.constants.IS_HTTPS?
            "https:":"http:")+"//stags.peer39.net/"+this.aid+"/trg_"+this.aid+".js","string"==typeof b&&b.length&&(a.src+="?"+b));return a},submit:function(){try{return""!==this.errorMessage?this.errorMessage:this.constructSignals()}catch(a){return this.handle(a,"DIL.modules.Peer39.submit() caught error with message ",this.dil)}}};

      var skyDilConfig = {
        partner: 'bskyb',
        uuidCookie: {
          name: 'aam_uuid',
          days:30
        }
      };

      if(SKY_TRACKING.trackingId) {
        skyDilConfig.declaredId = {
          dpid : '6871',
          dpuuid : encodeURIComponent(SKY_TRACKING.trackingId)
        }
      }

      var skyDil = DIL.create(skyDilConfig);

      var _scDilObj = s_gi(SKY_TRACKING.account);
      DIL.modules.siteCatalyst.init(_scDilObj, skyDil, {
        names : ['pageName', 'channel', 'campaign', 'products', 'events', 'pe', 'referrer', 'server', 'purchaseID', 'zip', 'state'],
        iteratedNames : [{
          name : 'eVar',
          maxIndex : 75
        }, {
          name : 'prop',
          maxIndex : 75
        }, {
          name : 'pev',
          maxIndex : 3
        }, {
          name : 'hier',
          maxIndex : 4
        }
        ]
      });

      sky.tracking.launch(SKY_TRACKING);

    }
  };
});


//# sourceMappingURL=omniture.js.map