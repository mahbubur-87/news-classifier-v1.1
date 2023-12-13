/**
 * File theme.js.
 *
 * Main JavaScript for theme
 *
 */

( function( $ ) {

    jQuery("#email-pricing").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            let email = jQuery("input#email-pricing").val();
            let nonce = myAjax.ajax_nonce;
            jQuery.ajax({
                type: 'post',
                url : myAjax.ajax_url,
                data: {
                    action: 'thelocal_ajax',
                    security: nonce,
                    site_action : 'pricing',
                    email: email,
                },
                cache: false,
                success: function(response) {
                    // Success message
                    jQuery('#pricing-response').html("<div class='alert alert-success'>");
                    jQuery('#pricing-response > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    jQuery('#pricing-response > .alert-success').append("<strong>"+response.data.message+"</strong>");
                    jQuery('#pricing-response > .alert-success').append('</div>');
                    jQuery('#pricing-form').trigger("reset");
                },
                error: function(response) {
                    // Fail message
                    jQuery('#pricing-response').html("<div class='alert alert-danger'>");
                    jQuery('#pricing-response > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    jQuery('#pricing-response > .alert-danger').append(jQuery("<strong>").text(response.responseJSON.data[0].message));
                    jQuery('#pricing-response > .alert-danger').append('</div>');
                    jQuery('#pricing-form').trigger("reset");
                },
                complete: function() {
                    setTimeout(function() {
                    }, 1000);
                }
            });
        },
        filter: function() {
            return jQuery(this).is(":visible");
        },
    });

    jQuery(".form-control").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            let nonce = myAjax.ajax_nonce;
            // get values from FORM
            let name = jQuery("input#name").val();
            let email = jQuery("input#email").val();
            let phone = jQuery("input#phone").val();
            let message = jQuery("textarea#message").val();
            let firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $this = jQuery("#sendMessageButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            jQuery.ajax({
                type: 'post',
                url : myAjax.ajax_url,
                data: {
                    action: 'thelocal_ajax',
                    security: nonce,
                    site_action : 'contact',
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function(response) {
                    // Success message
                    jQuery('#success').html("<div class='alert alert-success'>");
                    jQuery('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    jQuery('#success > .alert-success').append("<strong>"+response.data.message+"</strong>");
                    jQuery('#success > .alert-success').append('</div>');
                    //clear all fields
                    //jQuery('#contactForm').trigger("reset");
                },
                error: function(response) {
                    // Fail message
                    jQuery('#success').html("<div class='alert alert-danger'>");
                    jQuery('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    jQuery('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that mail server is not responding. Please try again later!"));
                    jQuery('#success > .alert-danger').append('</div>');
                    //clear all fields
                    jQuery('#contactForm').trigger("reset");
                },
                complete: function() {
                    setTimeout(function() {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                }
            });
        },
        filter: function() {
            return jQuery(this).is(":visible");
        },
    });

    jQuery(".add-notice-control").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            let nonce = myAjax.ajax_nonce;
            // get values from FORM
            let type = jQuery("select#type").val();
            let title = jQuery("input#notice_title").val();
            let description = jQuery("textarea#description").val();
            let location = jQuery("select#location").val();
            let showEmail = jQuery("select#showEmail").val();

            $this = jQuery(".noticeboard-add-submit");
            $this.prop("disabled", true);
            $this.val('Please wait...');
            jQuery.ajax({
                type: 'post',
                url : myAjax.ajax_url,
                data: {
                    action: 'thelocal_ajax',
                    security: nonce,
                    site_action : 'add_noticeboard',
                    type: type,
                    title: title,
                    description: description,
                    location: location,
                    showEmail : showEmail
                },
                cache: false,
                success: function(response) {
                    console.log(response);
                    $('.article-inner-content').html('<p>Thank you!</p>\n' +
                        '<p>All posts are subject to approval by The Local before being published.</p>\n' +
                        '<p>Your message should appear on the site within one working day.</p>\n' +
                        '<p><a class="font-orange" href="/noticeboard/">Return to Noticeboard</a></p>');
                },
                error: function(response) {

                },
                complete: function() {
                    setTimeout(function() {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                }
            });
        },
        filter: function() {
            return jQuery(this).is(":visible");
        },
    });

    jQuery(".edit-notice-control").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            let nonce = myAjax.ajax_nonce;
            // get values from FORM
            let postId = jQuery("input#postId").val();
            let type = jQuery("select#type").val();
            let title = jQuery("input#notice_title").val();
            let description = jQuery("textarea#description").val();
            let location = jQuery("select#location").val();
            let showEmail = jQuery("select#showEmail").val();

            $this = jQuery(".noticeboard-add-submit");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            $this.val('Please wait...');
            jQuery.ajax({
                type: 'post',
                url : myAjax.ajax_url,
                data: {
                    action: 'thelocal_ajax',
                    security: nonce,
                    site_action : 'edit_noticeboard',
                    postId : postId,
                    type: type,
                    title: title,
                    description: description,
                    location: location,
                    showEmail : showEmail
                },
                cache: false,
                success: function(response) {
                    window.location = 'members/noticeboard';
                },
                error: function(response) {

                },
                complete: function() {
                    setTimeout(function() {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                }
            });
        },
        filter: function() {
            return jQuery(this).is(":visible");
        },
    });

    jQuery('.deleteNotice').click(function(e){
        e.preventDefault();
        let postId = jQuery(this).data('notice');
        let nonce = myAjax.ajax_nonce;
        jQuery(this).html('Please wait...');

        jQuery.ajax({
            type: 'post',
            url : myAjax.ajax_url,
            data: {
                action: 'thelocal_ajax',
                security: nonce,
                site_action : 'delete_noticeboard',
                postId : postId,
            },
            cache: false,
            success: function(response) {
                window.location.reload();
            },
            error: function(response) {

            },
            complete: function() {
                setTimeout(function() {
                    $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                }, 1000);
            }
        });
    });

    jQuery(".send-corporate-control").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            let nonce = myAjax.ajax_nonce;
            // get values from FORM
            let company_name = jQuery("input#company_name").val();
            let contact_name = jQuery("input#contact_name").val();
            let company_email = jQuery("input#company_email").val();
            let contact_phone = jQuery("input#contact_phone").val();
            let number_of_subscriptions = jQuery("input#number_of_subscriptions").val();
            let comments = jQuery("textarea#comments").val();

            $this = jQuery(".send-corporate-submit");
            $this.prop("disabled", true);
            $this.val('Please wait...');
            jQuery.ajax({
                type: 'post',
                url : myAjax.ajax_url,
                data: {
                    action: 'thelocal_ajax',
                    security: nonce,
                    site_action : 'send_corporate',
                    company_name: company_name,
                    contact_name: contact_name,
                    company_email: company_email,
                    contact_phone: contact_phone,
                    number_of_subscriptions: number_of_subscriptions,
                    comments: comments,
                },
                cache: false,
                success: function(response) {
                    window.scrollTo(0, 0);
                    $('.article-inner-content').html('<b>Thanks for contacting us, you should receive an email from us shortly.<br><br>If you do not hear from us, please reach out to <a href="mailto:membership@thelocal.com">membership@thelocal.com</a>.</b>');
                },
                error: function(response) {

                },
                complete: function() {
                    setTimeout(function() {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                }
            });
        },
        filter: function() {
            return jQuery(this).is(":visible");
        },
    });

    //Owl carousel
    var $testimonialsDiv = jQuery('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
        });
    }

    var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel) {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }
} )( jQuery );


//Piano
tp = window["tp"] || [];
tp.push(['init', function() {

    tp.enableGACrossDomainLinking();

    //For now here should be all covered, the others scripts from old CMS code are mostly using tp.pianoId.isUserValid()
    //to shown or not show some content

    let readerType = "anonymous"; //Default
    let fbqPrefix = window.location.href.indexOf('dev.') > -1 ? 'COM' : 'DEV COM'; //Facebook pixels

    // Something with Google Analytics
    tp.enableGACrossDomainLinking();

    //Set of variables
    tp.push(['setCustomVariable', 'currentUrl', thelocalGetURIPart('host')]);


    let querySearch = thelocalGetURIPart('search');
    if (querySearch.indexOf('utm_campaign=newsletter_member') !== -1) {
        //Set localstorage if there is URL param
        localStorage.setItem('thelocal_member', '1');
        // Remove thelocal_subscriber
        localStorage.removeItem('thelocal_subscriber');
    } else if (querySearch.indexOf('utm_campaign=newsletter_subscriber') !== -1) {
        //Set localstorage if there is URL param, but only if there is not thelocal_member
        if (localStorage.getItem('thelocal_member') !== '1') {
            localStorage.setItem('thelocal_subscriber', '1');
        }
    }

    //On each page push custom variable if there is localStorage value
    if (localStorage.getItem('thelocal_member') === '1') {
        tp.push(['setCustomVariable', 'thelocal_member', true]);
    }

    if (localStorage.getItem('thelocal_subscriber') === '1') {
        tp.push(['setCustomVariable', 'thelocal_subscriber', true]);
    }


    let pianoDebug = myAjax.piano_debug != 0;
    tp.push(['setDebug', pianoDebug]);

    // Users report cookies expiring, so set this incase it helps - http://docs.piano.io/piano-cookie-descriptions/
    tp.push(['setMaxCookieExpirationInDays', myAjax.piano_cookie_expire]);

    //Handlers
    tp.push(["addHandler", "loginSuccess", function(data){
        let event = data.event; //Will always be loginSuccess
        let email = data.params.email;
        let registration = data.registration;
        let source = data.source; //Either PIANOID or OFFER which indicates whether the user signed in by manually initializing registration/login or due to a paywall, respectively
        let user_token = data.user_token;

        let nonce = myAjax.ajax_nonce;
        jQuery.ajax({
            type : 'post',
            dataType : 'json',
            url : myAjax.ajax_url,
            data : {
                action: 'thelocal_ajax',
                security: nonce,
                site_action : 'user_login',
                email : email,
                token : user_token
            },
            success: function(response) {
                //location.reload();
            }
        });
    }]);

    tp.push(["addHandler", "registrationSuccess", function(dataRecieved){
        let user_token = dataRecieved.token;
        let registration = dataRecieved.registration; //Always true
        let email = dataRecieved.user.email; //User data

        let nonce = myAjax.ajax_nonce;
        jQuery.ajax({
            type : 'post',
            dataType : 'json',
            url : myAjax.ajax_url,
            data : {
                action: 'thelocal_ajax',
                security: nonce,
                site_action : 'user_registration',
                email : email,
                token : user_token
            },
            success: function(response) {
                //location.reload();
            }
        });
    }]);

    tp.push(["addHandler", "checkoutComplete", function(conversion){
        fbq('trackCustom', fbqPrefix + ' checkout completed');
        window.location.replace('/members/account');
    }]);

    tp.push(["addHandler", "checkoutClose", function(event){
        fbq('trackCustom', fbqPrefix + ' checkout dialog closed');
    }]);

    tp.push(["addHandler", "checkoutError", function(errorData){
        fbq('trackCustom', fbqPrefix + ' checkout error');
    }]);

    tp.push(["addHandler", "showOffer", function(offerParams){
        fbq('trackCustom', fbqPrefix + ' offer shown');
    }]);


    tp.push(["addHandler", "meterActive", function(meterData){
        _ain.track();
    }]);

    //Not implemented and not needed
    tp.push(["addHandler", "checkoutCustomEvent", function(event){
        //Your code after the custom event on checkout
    } ]);

    tp.push(["addHandler", "checkoutSelectTerm", function(termDetails, iframeId){
        // Your code after the user selects a term
    } ]);

    tp.push(["addHandler", "checkoutStateChange", function(stateView){
        // Your code after the checkout state changes
    } ]);

    tp.push( [ "addHandler", "showTemplate", function (templateParams) {
        // Your code after template has been shown
    }]);

    tp.push( [ "addHandler", "startCheckout", function () {
        // Your code after checkout has started
    }]);

    tp.push( [ "addHandler", "submitPayment", function () {
        // Your code after payment is submitted
    }]);

    tp.push(["addHandler", "loginRequired", function(params){
        return false;
    }]);

    tp.push(["addHandler", "experienceExecute", (e) => {

    }]);

    tp.push(["addHandler", "meterExpired", function(meterData){
        // The logic executed here could be differentiated
        // Based on meterData.meterName value
    }]);

    if (tp.pianoId.isUserValid()) {
        let email = tp.pianoId.getUser().email;
        uid = tp.pianoId.getUser().uid;
        readerType = "registered";
        jQuery(".noticeboard-add-noticeboard").after("<a class='noticeboard-manage-my-notices' href='/members/noticeboard'>Manage my notices</a>");
        if (thelocalGetURIPart('pathname') === '/members/account/') {
            tp.myaccount.show({
                displayMode: 'inline',
                containerSelector: '#my-account'
            });
        }

        //Google Analytics, only if article page
        if (myAjax.is_article_page === '1') {
            ga('send', 'event', 'Members', 'thelocal.com', window.location.href);
            ga('theLocalNetwork.send', 'event', 'Members', 'thelocal.com', window.location.href);
        }

        tp.api.callApi('/access/list', {}, function(response) {
            jQuery.each( response.data, function( key, value ) {
                if(value.granted){
                    readerType = 'subscribed';
                    return false;
                }
            });
        });

        _ain.access_level = myAjax.access_level;
        _ain.reader_type = readerType;
        tp.push(['addHandler', 'meterActive', function(meterData){
            _ain.track();
        }]);
        if(myAjax.access_level !== 'paid' || readerType === 'subscribed'){
            _ain.track();
        }

        //On noticeboard page
        jQuery(".add_noticeboard").after("<a class='manage_my_notices' href='/members/noticeboard'>Manage my notices</a>");

    } else {
        // Password reset function. If URL has reset_token parameter. Password can be reset only if user is anonymous
        var tokenMatch = window.location.search.match(/reset_token=([A-Za-z0-9]+)/);
        if (tokenMatch) {
            // Get value of the token
            var token = tokenMatch[1];
            // Present password reset form with the found token
            tp.pianoId.show({
                'resetPasswordToken': token, loggedIn: function () {
                    // Once user logs in - refresh the page
                    //location.reload();
                }
            });
        }
    }

    jQuery('.loginbutton').click(function(e){
        tp.pianoId.show({
            screen: 'login',
            displayMode: 'modal',
//            loggedIn: function() {
//                 //location.reload();
//             },
//             loginSuccess: function(data) {
//                 //location.reload();
//             },
//             registrationSuccess: function() {
//                 //location.reload();
//             },
//             loggedOut: function() {
//                 //location.reload();
//             }
        })
    });
}]);

//On logout action
if (document.getElementById('logout') !== null) {
    document.getElementById('logout').onclick = function() {
        tp.pianoId.logout(function() {
            let nonce = myAjax.ajax_nonce;
            jQuery.ajax({
                type : 'post',
                dataType : 'json',
                url : myAjax.ajax_url,
                data : {
                    action: 'thelocal_ajax',
                    security: nonce,
                    site_action : 'user_logout',
                },
                success: function(response) {
                    location.reload();
                }
            });
        });
    };
}

//Prevents page from reload, for testing only
// window.onbeforeunload = function() {
//     return "";
// }

// Used by the social sharing buttons on each article (Facebook, Twitter, Google+)
function popupShareWindow(url, w = 520, h = 340) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, '_blank', 'toolbar=no, location=yes, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width='+w+', height='+h+', top='+top+', left='+left);
}

//Open the modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//Init gallery
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("gallery-myslides");
    var dots = document.getElementsByClassName("gallery-demo");
    var captionText = document.getElementById("gallery-caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex-1] !== undefined) {
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
    }
}

function activateSubmit() {
    document.getElementById('submit').disabled = document.getElementById('termsConfirm').checked != true;
}
function termsChecked() {
    if (document.getElementById('termsConfirm').checked == false) {
        document.getElementById('submit').disabled = true;
        document.getElementById('errorText').innerHTML = 'To continue you must have read the conditions of use.';
    }
}

//Gets the URL parts based on name
function thelocalGetURIPart(name)
{
    switch (name) {
        case 'protocol':
            return window.location.protocol;
        case 'host':
            return window.location.host;
        case 'pathname':
            return window.location.pathname;
        case 'search':
            return window.location.search;
        default:
            return window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search;
    }
}
