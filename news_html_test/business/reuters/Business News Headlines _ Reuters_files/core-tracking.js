(function tracking($){

    var $logoLink             = $('.reuters-logo a'),
        $stickyLogoLink       = $('.header-mini-logo'),
        $navItemLinks         = $('.nav-item a'),
        $homeIcon             = $('.home-icon'),
        $breakingNewsLink     = $('#breakingNewsContainer a'),
        $editionList          = $('.edition-list a'),
        $searchBox            = $('#searchbox'),
        $footerLinks          = $('footer a'),
        $newsletterButton     = $('.newsletter-module .nl-signup'),
        $newsTipLink          = $('.news-tips-content a'),
        $articleSection       = $('.article-info .article-section');
        $modulePictures       = $('.module-pictures a');
        $evergreenHeadlines   = $('.module-evergreen a');

    function init() {
        $logoLink.on('mousedown', logoClick);
        $stickyLogoLink.on('mousedown', stickyLogoClick);
        $navItemLinks.on('mousedown', navClick);
        $homeIcon.on('mousedown', homeIconClick);
        $breakingNewsLink.on('mousedown', breakingNewsClick);
        $editionList.on('mousedown', editionListClick);
        $searchBox.on('mousedown', '#search-submit-button', searchClick);
        $newsletterButton.on('mousedown', newsletterModuleTracking);
        $articleSection.on('mousedown', articleChannelClick); 
        $modulePictures.on('mousedown', modulePicturesClick);
        $evergreenHeadlines.on('mousedown', evergreenHeadlinesClick);
        $newsTipLink.on('mousedown', newsTipLinkClick);
        $footerLinks .on('mousedown', footerLinksClick);
        moduleTracking();
        scrollTracking();
    }

    init(); 

})(jQuery);

function logoClick() {
    analytics.track('ui.interaction', {
        topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
        platform: 'Desktop',
        content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
        category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        label: 'Reuters Logo',
        ui_element: 'Reuters Logo',
        uiInteraction: "1",
        nonInteraction: "0"
    });
}

function navClick() {
    var label = this.text.trim();  
    if (label != '') {
        analytics.track('ui.interaction', {
            topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
            topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
            content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
            edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
            platform: 'Desktop',
            content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
            content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
            canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
            category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
            label: label,
            ui_element: label,
            uiInteraction: "1",
            nonInteraction: "0"
        });
    }
}

function homeIconClick() {
    analytics.track('ui.interaction', {
        topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
        platform: 'Desktop',
        content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
        category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        label: 'Home Icon',
        ui_element: 'Home Icon',
        uiInteraction: "1",
        nonInteraction: "0"
    });
}

function breakingNewsClick() {
    analytics.track('ui.interaction', {
        topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
        platform: 'Desktop',
        content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
        category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        label: 'Breaking News',
        ui_element: 'Breaking News',
        uiInteraction: "1",
        nonInteraction: "0"
    });
}

function editionListClick() {
    analytics.track('ui.interaction', {
        topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
        platform: 'Desktop',
        content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
        category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        label: 'edition switcher',
        ui_element: 'edition switcher',
        uiInteraction: "1",
        nonInteraction: "0"
    });
}

function searchClick() {
    analytics.track('search', {
        topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
        platform: 'Desktop',
        content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
        category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        search_term: document.forms['searchbox'].blob.value,
        label: 'Search',
        ui_element: 'Search',
        uiInteraction: "1",
        nonInteraction: "0"
    });
}

function articleChannelClick() {
    analytics.track('ui.interaction', {
        topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
        platform: 'Desktop',
        content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
        category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        label: 'Channel Name',
        ui_element: 'Channel Name',
        uiInteraction: "1",
        nonInteraction: "0"
    });
}

function stickyLogoClick() {
    analytics.track('ui.interaction', {
        topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
        platform: 'Desktop',
        content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
        category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        label: 'Reuters Logo Sticky',
        ui_element: 'Reuters Logo Sticky',
        uiInteraction: "1",
        nonInteraction: "0"
    });
}

function moduleTracking() {
    setTimeout(function() {
        var $hpModuleLinks    = $('.hp-module a');
        $hpModuleLinks.on('click',function() {
            var moduleId   = $(this).closest('.hp-module')[0].id;   
            var moduleName = moduleId.split('-').join(' ').toUpperCase();
            analytics.track('ui.interaction', {
                topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
                topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
                content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
                edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
                platform: 'Desktop',
                content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
                content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
                canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
                category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
                label: moduleName,
                ui_element: moduleName,
                uiInteraction: "1",
                nonInteraction: "0"
            });
        });
        backButtonTracker();
    }, 1000);
}

function newsletterModuleTracking() {
    var newsletterName = $(this).closest('.newsletter').find('.nl-name').text().toUpperCase();
    newsletterName = 'HP NEWSLETTER - ' + newsletterName;
    analytics.track('ui.interaction', {
        topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
        platform: 'Desktop',
        content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
        category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        label: newsletterName,
        ui_element: newsletterName,
        uiInteraction: "1",
        nonInteraction: "0"
    });
}

function newsTipLinkClick() {
    analytics.track('ui.interaction', {
        topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
        platform: 'Desktop',
        content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
        category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        label: 'News Tip',
        ui_element: 'News Tip',
        uiInteraction: "1",
        nonInteraction: "0"
    });
}

function modulePicturesClick() {
    analytics.track('ui.interaction', {
        topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
        platform: 'Desktop',
        content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
        category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        label: 'HP Pictures',
        ui_element: 'HP Pictures',
        uiInteraction: "1",
        nonInteraction: "0"
    });
}

function evergreenHeadlinesClick() {
    analytics.track('ui.interaction', {
        topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
        platform: 'Desktop',
        content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
        category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        label: 'HP Featured Low',
        ui_element: 'HP Featured Low',
        uiInteraction: "1",
        nonInteraction: "0"
    });
}

function footerLinksClick() {
    analytics.track('ui.interaction', {
        topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
        topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
        content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
        platform: 'Desktop',
        content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
        canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
        category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
        label: 'Footer Link',
        ui_element: 'Footer Link',
        uiInteraction: "1",
        nonInteraction: "0"
    });
}

function scrollTracking() {

    let offset_y = 0;
    let current_quartile = 0;
    let scroll_direction = 'down';
    const quartile_status = {
        'scroll_.25_down': false,
        'scroll_.50_down': false,
        'scroll_.75_down': false,
        'scroll_1_down': false,
        'scroll_.25_up': false,
        'scroll_.50_up': false,
        'scroll_.75_up': false,
        'scroll_1_up': false,
    };

    const getScrollTop = () => {
        const body = document.body; //IE 'quirks'
        const html = document.documentElement; //IE with doctype
        const target = (html.clientHeight) ? html : body;
        return target.scrollTop;
    }

    const getScrollHeight = () => {
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        return height - window.innerHeight;
    }

    const getScrollQuartiles = () => {
        const scroll_handler = () => {  
            const prev_offset_y = offset_y;
            const current_offset_y = getScrollTop();        
            const ratio = getScrollTop() / getScrollHeight();
            offset_y = current_offset_y;

            const direction = prev_offset_y > current_offset_y ? 'up' : 'down';
           
            if (ratio >= 0.25 && ratio < 0.50) {
                trackQuartile('.25', direction);
            } else if (ratio >= 0.50 && ratio < 0.75) {
                trackQuartile('.50', direction);
            } else if (ratio >= 0.75 && ratio < 0.95) {
                trackQuartile('.75', direction);
            } else if (ratio >= 0.95 && ratio <= 1) {
                trackQuartile('1', direction);
            }     
        };

        document.addEventListener('scroll', scroll_handler);
    }

    const trackQuartile = (quartile, direction) => {
        const quartile_fired = quartile_status[`scroll_${quartile}_${direction}`];
        if ((current_quartile !== quartile || scroll_direction !== direction) && !quartile_fired) {

            // Set component variables for current state
            current_quartile = quartile;
            scroll_direction = direction;
            quartile_status[`scroll_${quartile}_${direction}`] = true;

            // Set tracking variables
            const scroll_properties = {
                scroll_quartile: quartile,
                category: 'Landing Page',
                label: 100 * quartile + '%',
                nonInteraction: 1,
                topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
                topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
                content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
                edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
                platform: 'Desktop',
                content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
                content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
                canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
            };
            const track_event = `scroll.${direction}.landing`;
            const track_properties = direction === 'up' ? {
                ...scroll_properties,
                scrollUpLanding: 1,
            } : {
                ...scroll_properties,
                scrollDownLanding: 1,
            };

            analytics.track(track_event, track_properties);
        }
    }

    console.log('GET SCROLL ########')
    getScrollQuartiles();
}

function backButtonTracker() {
    var storedPages = sessionStorage.getItem("sessionPages");
    sessionStorage.setItem("sessionPages", storedPages + ' ' + window.location.pathname);
    if (storedPages != null) {
        var storedPagesArray = storedPages.split(' '),
            storedPagesTotal = storedPagesArray.length,
            prevPageIndex    = storedPagesTotal - 2;
        if (window.location.pathname == storedPagesArray[prevPageIndex] && window.location.pathname != storedPagesArray[storedPagesTotal - 1]) {
            if (storedPagesArray[storedPagesTotal - 1].includes('/article/')) {
                // analytics.track('article.recirculation', {
                //     canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
                //     category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
                //     content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
                //     content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
                //     content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
                //     topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
                //     topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
                //     edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
                //     platform: 'Desktop',
                //     label: 'Back Button - Article',
                //     ui_element: 'Back Button - Article',
                //     uiInteraction: "1",
                //     nonInteraction: "0"
                // });
            } else {
                analytics.track('ui.interaction', {
                    canonical_url: document.querySelector('[name="analyticsAttributes.canonicalUrl"]').content,
                    category: document.querySelector('[name="analyticsAttributes.contentType"]').content,
                    content_type: document.querySelector('[name="analyticsAttributes.contentType"]').content,
                    content_type_channel: document.querySelector('[name="analyticsAttributes.contentType"]').content,
                    content_channel: document.querySelector('[name="analyticsAttributes.channel"]').content,
                    topic_channel: document.querySelector('[name="analyticsAttributes.topicChannel"]').content,
                    topic_sub_channel: document.querySelector('[name="analyticsAttributes.topicSubChannel"]').content,
                    edition: document.querySelector('[name="analyticsAttributes.edition"]').content,
                    platform: 'Desktop',
                    label: 'Back Button',
                    ui_element: 'Back Button',
                    uiInteraction: "1",
                    nonInteraction: "0"
                });
            }
        }
    }
    setTimeout(function () {
        sessionStorage.setItem("sessionPages", "");
    }, 600000);
}

function inAppleMobileDevice() {
    if (navigator && navigator.userAgent && navigator.userAgent != null) {
        var userAgent = navigator.userAgent.toLowerCase();
        var match_arr = userAgent.match(/(iphone|ipod|ipad)/);
        if (match_arr != null) {
            return true;
        }
    }
    return false;
}
