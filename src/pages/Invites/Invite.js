

import { useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Script from "next/script";
import Footer from "@/components/Footer";
const Invite=()=>{
    const [formData, setFormData] = useState({
        institutionName: "",
        eventDate: "",
        contactName: "",
        email: "",
        purpose: "",
      });
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      
    

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        
        const res = await axios.post(
          'http://127.0.0.1:8000/api/invite/store', // ✅ Use API route if your Laravel route is defined with prefix
          {
            institutionName: formData.institutionName,
            eventDate: formData.eventDate,
            contactName: formData.contactName,
            email: formData.email,
            purpose: formData.purpose
          },
          {
            headers: {
              Accept: '*/*',
              'Content-Type': 'application/json',
            }
          }
        );
        
        if (res.data.success){
          console.log(res.data.success);
          alert('data saved');
        }
        else{
          alert('data not saved please enter corectly')
        }
        
        
      };
      
    
return(
<>
<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11 " /> 
	<title>INVITE RAVIRAJ &#8211; ravirajsabalepatil.onlinespe.com</title>
<meta name='robots' content='max-image-preview:large' />
<style jsx>{`
  img:is([sizes="auto" i], [sizes^="auto," i]) {
    contain-intrinsic-size: 3000px 1500px;
  }
`}</style>
	<link rel="alternate" type="application/rss+xml" title="ravirajsabalepatil.onlinespe.com &raquo; Feed" href="https://ravirajsabalepatil.onlinespe.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="ravirajsabalepatil.onlinespe.com &raquo; Comments Feed" href="https://ravirajsabalepatil.onlinespe.com/comments/feed/" />
<Script id="wp-emoji-script" strategy="afterInteractive" dangerouslySetInnerHTML={{
      __html: `
        window._wpemojiSettings = {
          "baseUrl":"https://s.w.org/images/core/emoji/15.0.3/72x72/",
          "ext":".png",
          "svgUrl":"https://s.w.org/images/core/emoji/15.0.3/svg/",
          "svgExt":".svg",
          "source":{
            "concatemoji":"https://ravirajsabalepatil.onlinespe.com/wp-includes/js/wp-emoji-release.min.js?ver=6.7.2"
          }
        };
        /*! This file is auto-generated */
        !function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"🏳️‍⚧️","🏳️‍⚧️")?!1:!n(e,"🇺🇳","🇺🇳")&&!n(e,"🏴‍☠️","🏴‍☠️");case"emoji":return!n(e,"🐦‍⬛","🐦‍⬛")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
      `
    }} />
{/* <link rel='stylesheet' id='astra-theme-css-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/themes/astra/assets/css/minified/main.min.css?ver=4.9.0' media='all' /> */}
{/* <style id='astra-theme-css-inline-css'>
:root{--ast-post-nav-space:0;--ast-container-default-xlg-padding:2.5em;--ast-container-default-lg-padding:2.5em;--ast-container-default-slg-padding:2em;--ast-container-default-md-padding:2.5em;--ast-container-default-sm-padding:2.5em;--ast-container-default-xs-padding:2.4em;--ast-container-default-xxs-padding:1.8em;--ast-code-block-background:#ECEFF3;--ast-comment-inputs-background:#F9FAFB;--ast-normal-container-width:768px;--ast-narrow-container-width:750px;--ast-blog-title-font-weight:600;--ast-blog-meta-weight:600;--ast-global-color-primary:var(--ast-global-color-4);--ast-global-color-secondary:var(--ast-global-color-5);--ast-global-color-alternate-background:var(--ast-global-color-6);--ast-global-color-subtle-background:var(--ast-global-color-7);--ast-bg-style-guide:#F8FAFC;--ast-shadow-style-guide:0px 0px 4px 0 #00000057;--ast-global-dark-bg-style:#fff;--ast-global-dark-lfs:#fbfbfb;--ast-widget-bg-color:#fafafa;--ast-wc-container-head-bg-color:#fbfbfb;--ast-title-layout-bg:#eeeeee;--ast-search-border-color:#e7e7e7;--ast-lifter-hover-bg:#e6e6e6;--ast-gallery-block-color:#000;--srfm-color-input-label:var(--ast-global-color-2);}html{font-size:100%;}a{color:var(--ast-global-color-0);}a:hover,a:focus{color:var(--ast-global-color-1);}body,button,input,select,textarea,.ast-button,.ast-custom-button{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-weight:400;font-size:16px;font-size:1rem;line-height:var(--ast-body-line-height,1.65);}blockquote{color:var(--ast-global-color-3);}h1,.entry-content h1,h2,.entry-content h2,h3,.entry-content h3,h4,.entry-content h4,h5,.entry-content h5,h6,.entry-content h6,.site-title,.site-title a{font-weight:600;}.ast-site-identity .site-title a{color:var(--ast-global-color-2);}.site-title{font-size:26px;font-size:1.625rem;display:block;}.site-header .site-description{font-size:15px;font-size:0.9375rem;display:none;}.entry-title{font-size:20px;font-size:1.25rem;}.ast-blog-single-element.ast-taxonomy-container a{font-size:14px;font-size:0.875rem;}.ast-blog-meta-container{font-size:13px;font-size:0.8125rem;}.archive .ast-article-post .ast-article-inner,.blog .ast-article-post .ast-article-inner,.archive .ast-article-post .ast-article-inner:hover,.blog .ast-article-post .ast-article-inner:hover{border-top-left-radius:6px;border-top-right-radius:6px;border-bottom-right-radius:6px;border-bottom-left-radius:6px;overflow:hidden;}h1,.entry-content h1{font-size:36px;font-size:2.25rem;font-weight:600;line-height:1.4em;}h2,.entry-content h2{font-size:30px;font-size:1.875rem;font-weight:600;line-height:1.3em;}h3,.entry-content h3{font-size:24px;font-size:1.5rem;font-weight:600;line-height:1.3em;}h4,.entry-content h4{font-size:20px;font-size:1.25rem;line-height:1.2em;font-weight:600;}h5,.entry-content h5{font-size:18px;font-size:1.125rem;line-height:1.2em;font-weight:600;}h6,.entry-content h6{font-size:16px;font-size:1rem;line-height:1.25em;font-weight:600;}::selection{background-color:var(--ast-global-color-0);color:#ffffff;}body,h1,.entry-title a,.entry-content h1,h2,.entry-content h2,h3,.entry-content h3,h4,.entry-content h4,h5,.entry-content h5,h6,.entry-content h6{color:var(--ast-global-color-3);}.tagcloud a:hover,.tagcloud a:focus,.tagcloud a.current-item{color:#ffffff;border-color:var(--ast-global-color-0);background-color:var(--ast-global-color-0);}input:focus,input[type="text"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="password"]:focus,input[type="reset"]:focus,input[type="search"]:focus,textarea:focus{border-color:var(--ast-global-color-0);}input[type="radio"]:checked,input[type=reset],input[type="checkbox"]:checked,input[type="checkbox"]:hover:checked,input[type="checkbox"]:focus:checked,input[type=range]::-webkit-slider-thumb{border-color:var(--ast-global-color-0);background-color:var(--ast-global-color-0);box-shadow:none;}.site-footer a:hover + .post-count,.site-footer a:focus + .post-count{background:var(--ast-global-color-0);border-color:var(--ast-global-color-0);}.single .nav-links .nav-previous,.single .nav-links .nav-next{color:var(--ast-global-color-0);}.entry-meta,.entry-meta *{line-height:1.45;color:var(--ast-global-color-0);font-weight:600;}.entry-meta a:not(.ast-button):hover,.entry-meta a:not(.ast-button):hover *,.entry-meta a:not(.ast-button):focus,.entry-meta a:not(.ast-button):focus *,.page-links > .page-link,.page-links .page-link:hover,.post-navigation a:hover{color:var(--ast-global-color-1);}#cat option,.secondary .calendar_wrap thead a,.secondary .calendar_wrap thead a:visited{color:var(--ast-global-color-0);}.secondary .calendar_wrap #today,.ast-progress-val span{background:var(--ast-global-color-0);}.secondary a:hover + .post-count,.secondary a:focus + .post-count{background:var(--ast-global-color-0);border-color:var(--ast-global-color-0);}.calendar_wrap #today > a{color:#ffffff;}.page-links .page-link,.single .post-navigation a{color:var(--ast-global-color-3);}.ast-search-menu-icon .search-form button.search-submit{padding:0 4px;}.ast-search-menu-icon form.search-form{padding-right:0;}.ast-search-menu-icon.slide-search input.search-field{width:0;}.ast-header-search .ast-search-menu-icon.ast-dropdown-active .search-form,.ast-header-search .ast-search-menu-icon.ast-dropdown-active .search-field:focus{transition:all 0.2s;}.search-form input.search-field:focus{outline:none;}.ast-search-menu-icon .search-form button.search-submit:focus,.ast-theme-transparent-header .ast-header-search .ast-dropdown-active .ast-icon,.ast-theme-transparent-header .ast-inline-search .search-field:focus .ast-icon{color:var(--ast-global-color-1);}.ast-header-search .slide-search .search-form{border:2px solid var(--ast-global-color-0);}.ast-header-search .slide-search .search-field{background-color:(--ast-global-dark-bg-style);}.ast-archive-title{color:var(--ast-global-color-2);}.widget-title{font-size:22px;font-size:1.375rem;color:var(--ast-global-color-2);}.ast-single-post .entry-content a,.ast-comment-content a:not(.ast-comment-edit-reply-wrap a){text-decoration:underline;}.ast-single-post .elementor-button-wrapper .elementor-button,.ast-single-post .entry-content .uagb-tab a,.ast-single-post .entry-content .uagb-ifb-cta a,.ast-single-post .entry-content .uabb-module-content a,.ast-single-post .entry-content .uagb-post-grid a,.ast-single-post .entry-content .uagb-timeline a,.ast-single-post .entry-content .uagb-toc__wrap a,.ast-single-post .entry-content .uagb-taxomony-box a,.ast-single-post .entry-content .woocommerce a,.entry-content .wp-block-latest-posts > li > a,.ast-single-post .entry-content .wp-block-file__button,li.ast-post-filter-single,.ast-single-post .ast-comment-content .comment-reply-link,.ast-single-post .ast-comment-content .comment-edit-link{text-decoration:none;}.ast-search-menu-icon.slide-search a:focus-visible:focus-visible,.astra-search-icon:focus-visible,#close:focus-visible,a:focus-visible,.ast-menu-toggle:focus-visible,.site .skip-link:focus-visible,.wp-block-loginout input:focus-visible,.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper,.ast-header-navigation-arrow:focus-visible,.woocommerce .wc-proceed-to-checkout > .checkout-button:focus-visible,.woocommerce .woocommerce-MyAccount-navigation ul li a:focus-visible,.ast-orders-table__row .ast-orders-table__cell:focus-visible,.woocommerce .woocommerce-order-details .order-again > .button:focus-visible,.woocommerce .woocommerce-message a.button.wc-forward:focus-visible,.woocommerce #minus_qty:focus-visible,.woocommerce #plus_qty:focus-visible,a#ast-apply-coupon:focus-visible,.woocommerce .woocommerce-info a:focus-visible,.woocommerce .astra-shop-summary-wrap a:focus-visible,.woocommerce a.wc-forward:focus-visible,#ast-apply-coupon:focus-visible,.woocommerce-js .woocommerce-mini-cart-item a.remove:focus-visible,#close:focus-visible,.button.search-submit:focus-visible,#search_submit:focus,.normal-search:focus-visible,.ast-header-account-wrap:focus-visible,.woocommerce .ast-on-card-button.ast-quick-view-trigger:focus{outline-style:dotted;outline-color:inherit;outline-width:thin;}input:focus,input[type="text"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="password"]:focus,input[type="reset"]:focus,input[type="search"]:focus,input[type="number"]:focus,textarea:focus,.wp-block-search__input:focus,[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-minimal:focus,.ast-mobile-popup-drawer.active .menu-toggle-close:focus,.woocommerce-ordering select.orderby:focus,#ast-scroll-top:focus,#coupon_code:focus,.woocommerce-page #comment:focus,.woocommerce #reviews #respond input#submit:focus,.woocommerce a.add_to_cart_button:focus,.woocommerce .button.single_add_to_cart_button:focus,.woocommerce .woocommerce-cart-form button:focus,.woocommerce .woocommerce-cart-form__cart-item .quantity .qty:focus,.woocommerce .woocommerce-billing-fields .woocommerce-billing-fields__field-wrapper .woocommerce-input-wrapper > .input-text:focus,.woocommerce #order_comments:focus,.woocommerce #place_order:focus,.woocommerce .woocommerce-address-fields .woocommerce-address-fields__field-wrapper .woocommerce-input-wrapper > .input-text:focus,.woocommerce .woocommerce-MyAccount-content form button:focus,.woocommerce .woocommerce-MyAccount-content .woocommerce-EditAccountForm .woocommerce-form-row .woocommerce-Input.input-text:focus,.woocommerce .ast-woocommerce-container .woocommerce-pagination ul.page-numbers li a:focus,body #content .woocommerce form .form-row .select2-container--default .select2-selection--single:focus,#ast-coupon-code:focus,.woocommerce.woocommerce-js .quantity input[type=number]:focus,.woocommerce-js .woocommerce-mini-cart-item .quantity input[type=number]:focus,.woocommerce p#ast-coupon-trigger:focus{border-style:dotted;border-color:inherit;border-width:thin;}input{outline:none;}.ast-logo-title-inline .site-logo-img{padding-right:1em;}.site-logo-img img{ transition:all 0.2s linear;}body .ast-oembed-container *{position:absolute;top:0;width:100%;height:100%;left:0;}body .wp-block-embed-pocket-casts .ast-oembed-container *{position:unset;}.ast-single-post-featured-section + article {margin-top: 2em;}.site-content .ast-single-post-featured-section img {width: 100%;overflow: hidden;object-fit: cover;}.ast-separate-container .site-content .ast-single-post-featured-section + article {margin-top: -80px;z-index: 9;position: relative;border-radius: 4px;}@media (min-width: 922px) {.ast-no-sidebar .site-content .ast-article-image-container--wide {margin-left: -120px;margin-right: -120px;max-width: unset;width: unset;}.ast-left-sidebar .site-content .ast-article-image-container--wide,.ast-right-sidebar .site-content .ast-article-image-container--wide {margin-left: -10px;margin-right: -10px;}.site-content .ast-article-image-container--full {margin-left: calc( -50vw + 50%);margin-right: calc( -50vw + 50%);max-width: 100vw;width: 100vw;}.ast-left-sidebar .site-content .ast-article-image-container--full,.ast-right-sidebar .site-content .ast-article-image-container--full {margin-left: -10px;margin-right: -10px;max-width: inherit;width: auto;}}.site > .ast-single-related-posts-container {margin-top: 0;}@media (min-width: 922px) {.ast-desktop .ast-container--narrow {max-width: var(--ast-narrow-container-width);margin: 0 auto;}}.ast-page-builder-template .hentry {margin: 0;}.ast-page-builder-template .site-content > .ast-container {max-width: 100%;padding: 0;}.ast-page-builder-template .site .site-content #primary {padding: 0;margin: 0;}.ast-page-builder-template .no-results {text-align: center;margin: 4em auto;}.ast-page-builder-template .ast-pagination {padding: 2em;}.ast-page-builder-template .entry-header.ast-no-title.ast-no-thumbnail {margin-top: 0;}.ast-page-builder-template .entry-header.ast-header-without-markup {margin-top: 0;margin-bottom: 0;}.ast-page-builder-template .entry-header.ast-no-title.ast-no-meta {margin-bottom: 0;}.ast-page-builder-template.single .post-navigation {padding-bottom: 2em;}.ast-page-builder-template.single-post .site-content > .ast-container {max-width: 100%;}.ast-page-builder-template .entry-header {margin-top: 2em;margin-left: auto;margin-right: auto;}.ast-page-builder-template .ast-archive-description {margin: 2em auto 0;padding-left: 20px;padding-right: 20px;}.ast-page-builder-template .ast-row {margin-left: 0;margin-right: 0;}.single.ast-page-builder-template .entry-header + .entry-content,.single.ast-page-builder-template .ast-single-entry-banner + .site-content article .entry-content {margin-bottom: 2em;}@media(min-width: 921px) {.ast-page-builder-template.archive.ast-right-sidebar .ast-row article,.ast-page-builder-template.archive.ast-left-sidebar .ast-row article {padding-left: 0;padding-right: 0;}}input[type="text"],input[type="number"],input[type="email"],input[type="url"],input[type="password"],input[type="search"],input[type=reset],input[type=tel],input[type=date],select,textarea{font-size:16px;font-style:normal;font-weight:400;line-height:24px;width:100%;padding:12px 16px;border-radius:4px;box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05);color:var(--ast-form-input-text,#475569);}input[type="text"],input[type="number"],input[type="email"],input[type="url"],input[type="password"],input[type="search"],input[type=reset],input[type=tel],input[type=date],select{height:40px;}input[type="date"]{border-width:1px;border-style:solid;border-color:var(--ast-border-color);background:var( --ast-global-color-secondary,--ast-global-color-5 );}input[type="text"]:focus,input[type="number"]:focus,input[type="email"]:focus,input[type="url"]:focus,input[type="password"]:focus,input[type="search"]:focus,input[type=reset]:focus,input[type="tel"]:focus,input[type="date"]:focus,select:focus,textarea:focus{border-color:#046BD2;box-shadow:none;outline:none;color:var(--ast-form-input-focus-text,#475569);}label,legend{color:#111827;font-size:14px;font-style:normal;font-weight:500;line-height:20px;}select{padding:6px 10px;}fieldset{padding:30px;border-radius:4px;}button,.ast-button,.button,input[type="button"],input[type="reset"],input[type="submit"]{border-radius:4px;box-shadow:0px 1px 2px 0px rgba(0,0,0,0.05);}:root{--ast-comment-inputs-background:#FFF;}::placeholder{color:var(--ast-form-field-color,#9CA3AF);}::-ms-input-placeholder{color:var(--ast-form-field-color,#9CA3AF);}@media (max-width:921.9px){#ast-desktop-header{display:none;}}@media (min-width:922px){#ast-mobile-header{display:none;}}.wp-block-buttons.aligncenter{justify-content:center;}@media (max-width:921px){.ast-theme-transparent-header #primary,.ast-theme-transparent-header #secondary{padding:0;}}@media (max-width:921px){.ast-plain-container.ast-no-sidebar #primary{padding:0;}}.ast-plain-container.ast-no-sidebar #primary{margin-top:0;margin-bottom:0;}.wp-block-button.is-style-outline .wp-block-button__link{border-color:var(--ast-global-color-0);}div.wp-block-button.is-style-outline > .wp-block-button__link:not(.has-text-color),div.wp-block-button.wp-block-button__link.is-style-outline:not(.has-text-color){color:var(--ast-global-color-0);}.wp-block-button.is-style-outline .wp-block-button__link:hover,.wp-block-buttons .wp-block-button.is-style-outline .wp-block-button__link:focus,.wp-block-buttons .wp-block-button.is-style-outline > .wp-block-button__link:not(.has-text-color):hover,.wp-block-buttons .wp-block-button.wp-block-button__link.is-style-outline:not(.has-text-color):hover{color:#ffffff;background-color:var(--ast-global-color-1);border-color:var(--ast-global-color-1);}.post-page-numbers.current .page-link,.ast-pagination .page-numbers.current{color:#ffffff;border-color:var(--ast-global-color-0);background-color:var(--ast-global-color-0);}.wp-block-buttons .wp-block-button.is-style-outline .wp-block-button__link.wp-element-button,.ast-outline-button,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button{border-color:var(--ast-global-color-0);border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;font-family:inherit;font-weight:500;font-size:16px;font-size:1rem;line-height:1em;padding-top:13px;padding-right:30px;padding-bottom:13px;padding-left:30px;}.wp-block-buttons .wp-block-button.is-style-outline > .wp-block-button__link:not(.has-text-color),.wp-block-buttons .wp-block-button.wp-block-button__link.is-style-outline:not(.has-text-color),.ast-outline-button{color:var(--ast-global-color-0);}.wp-block-button.is-style-outline .wp-block-button__link:hover,.wp-block-buttons .wp-block-button.is-style-outline .wp-block-button__link:focus,.wp-block-buttons .wp-block-button.is-style-outline > .wp-block-button__link:not(.has-text-color):hover,.wp-block-buttons .wp-block-button.wp-block-button__link.is-style-outline:not(.has-text-color):hover,.ast-outline-button:hover,.ast-outline-button:focus,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button:hover,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button:focus{color:#ffffff;background-color:var(--ast-global-color-1);border-color:var(--ast-global-color-1);}.ast-single-post .entry-content a.ast-outline-button,.ast-single-post .entry-content .is-style-outline>.wp-block-button__link{text-decoration:none;}.wp-block-button .wp-block-button__link.wp-element-button.is-style-outline:not(.has-background),.wp-block-button.is-style-outline>.wp-block-button__link.wp-element-button:not(.has-background),.ast-outline-button{background-color:transparent;}.uagb-buttons-repeater.ast-outline-button{border-radius:9999px;}@media (max-width:921px){.wp-block-buttons .wp-block-button.is-style-outline .wp-block-button__link.wp-element-button,.ast-outline-button,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button{padding-top:12px;padding-right:28px;padding-bottom:12px;padding-left:28px;}}@media (max-width:544px){.wp-block-buttons .wp-block-button.is-style-outline .wp-block-button__link.wp-element-button,.ast-outline-button,.wp-block-uagb-buttons-child .uagb-buttons-repeater.ast-outline-button{padding-top:10px;padding-right:24px;padding-bottom:10px;padding-left:24px;}}.entry-content[data-ast-blocks-layout] > figure{margin-bottom:1em;}h1.widget-title{font-weight:600;}h2.widget-title{font-weight:600;}h3.widget-title{font-weight:600;} .content-area .elementor-widget-theme-post-content h1,.content-area .elementor-widget-theme-post-content h2,.content-area .elementor-widget-theme-post-content h3,.content-area .elementor-widget-theme-post-content h4,.content-area .elementor-widget-theme-post-content h5,.content-area .elementor-widget-theme-post-content h6{margin-top:1.5em;margin-bottom:calc(0.3em + 10px);}#page{display:flex;flex-direction:column;min-height:100vh;}.ast-404-layout-1 h1.page-title{color:var(--ast-global-color-2);}.single .post-navigation a{line-height:1em;height:inherit;}.error-404 .page-sub-title{font-size:1.5rem;font-weight:inherit;}.search .site-content .content-area .search-form{margin-bottom:0;}#page .site-content{flex-grow:1;}.widget{margin-bottom:1.25em;}#secondary li{line-height:1.5em;}#secondary .wp-block-group h2{margin-bottom:0.7em;}#secondary h2{font-size:1.7rem;}.ast-separate-container .ast-article-post,.ast-separate-container .ast-article-single,.ast-separate-container .comment-respond{padding:3em;}.ast-separate-container .ast-article-single .ast-article-single{padding:0;}.ast-article-single .wp-block-post-template-is-layout-grid{padding-left:0;}.ast-separate-container .comments-title,.ast-narrow-container .comments-title{padding:1.5em 2em;}.ast-page-builder-template .comment-form-textarea,.ast-comment-formwrap .ast-grid-common-col{padding:0;}.ast-comment-formwrap{padding:0;display:inline-flex;column-gap:20px;width:100%;margin-left:0;margin-right:0;}.comments-area textarea#comment:focus,.comments-area textarea#comment:active,.comments-area .ast-comment-formwrap input[type="text"]:focus,.comments-area .ast-comment-formwrap input[type="text"]:active {box-shadow:none;outline:none;}.archive.ast-page-builder-template .entry-header{margin-top:2em;}.ast-page-builder-template .ast-comment-formwrap{width:100%;}.entry-title{margin-bottom:0.6em;}.ast-archive-description p{font-size:inherit;font-weight:inherit;line-height:inherit;}.ast-separate-container .ast-comment-list li.depth-1,.hentry{margin-bottom:1.5em;}.site-content section.ast-archive-description{margin-bottom:2em;}@media (min-width:921px){.ast-left-sidebar.ast-page-builder-template #secondary,.archive.ast-right-sidebar.ast-page-builder-template .site-main{padding-left:20px;padding-right:20px;}}@media (max-width:544px){.ast-comment-formwrap.ast-row{column-gap:10px;display:inline-block;}#ast-commentform .ast-grid-common-col{position:relative;width:100%;}}@media (min-width:1201px){.ast-separate-container .ast-article-post,.ast-separate-container .ast-article-single,.ast-separate-container .ast-author-box,.ast-separate-container .ast-404-layout-1,.ast-separate-container .no-results{padding:3em;}} .content-area .elementor-widget-theme-post-content h1,.content-area .elementor-widget-theme-post-content h2,.content-area .elementor-widget-theme-post-content h3,.content-area .elementor-widget-theme-post-content h4,.content-area .elementor-widget-theme-post-content h5,.content-area .elementor-widget-theme-post-content h6{margin-top:1.5em;margin-bottom:calc(0.3em + 10px);}.elementor-loop-container .e-loop-item,.elementor-loop-container .ast-separate-container .ast-article-post,.elementor-loop-container .ast-separate-container .ast-article-single,.elementor-loop-container .ast-separate-container .comment-respond{padding:0px;}@media (max-width:921px){.ast-separate-container #primary,.ast-separate-container #secondary{padding:1.5em 0;}#primary,#secondary{padding:1.5em 0;margin:0;}.ast-left-sidebar #content > .ast-container{display:flex;flex-direction:column-reverse;width:100%;}}@media (min-width:922px){.ast-separate-container.ast-right-sidebar #primary,.ast-separate-container.ast-left-sidebar #primary{border:0;}.search-no-results.ast-separate-container #primary{margin-bottom:4em;}}.wp-block-button .wp-block-button__link{color:#ffffff;}.wp-block-button .wp-block-button__link:hover,.wp-block-button .wp-block-button__link:focus{color:#ffffff;background-color:var(--ast-global-color-1);border-color:var(--ast-global-color-1);}.elementor-widget-heading h1.elementor-heading-title{line-height:1.4em;}.elementor-widget-heading h2.elementor-heading-title{line-height:1.3em;}.elementor-widget-heading h3.elementor-heading-title{line-height:1.3em;}.elementor-widget-heading h4.elementor-heading-title{line-height:1.2em;}.elementor-widget-heading h5.elementor-heading-title{line-height:1.2em;}.elementor-widget-heading h6.elementor-heading-title{line-height:1.25em;}.wp-block-button .wp-block-button__link,.wp-block-search .wp-block-search__button,body .wp-block-file .wp-block-file__button{border-color:var(--ast-global-color-0);background-color:var(--ast-global-color-0);color:#ffffff;font-family:inherit;font-weight:500;line-height:1em;font-size:16px;font-size:1rem;padding-top:15px;padding-right:30px;padding-bottom:15px;padding-left:30px;}.ast-single-post .entry-content .wp-block-button .wp-block-button__link,.ast-single-post .entry-content .wp-block-search .wp-block-search__button,body .entry-content .wp-block-file .wp-block-file__button{text-decoration:none;}@media (max-width:921px){.wp-block-button .wp-block-button__link,.wp-block-search .wp-block-search__button,body .wp-block-file .wp-block-file__button{padding-top:14px;padding-right:28px;padding-bottom:14px;padding-left:28px;}}@media (max-width:544px){.wp-block-button .wp-block-button__link,.wp-block-search .wp-block-search__button,body .wp-block-file .wp-block-file__button{padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;}}.menu-toggle,button,.ast-button,.ast-custom-button,.button,input#submit,input[type="button"],input[type="submit"],input[type="reset"],#comments .submit,.search .search-submit,form[CLASS*="wp-block-search__"].wp-block-search .wp-block-search__inside-wrapper .wp-block-search__button,body .wp-block-file .wp-block-file__button,.search .search-submit,.woocommerce-js a.button,.woocommerce button.button,.woocommerce .woocommerce-message a.button,.woocommerce #respond input#submit.alt,.woocommerce input.button.alt,.woocommerce input.button,.woocommerce input.button:disabled,.woocommerce input.button:disabled[disabled],.woocommerce input.button:disabled:hover,.woocommerce input.button:disabled[disabled]:hover,.woocommerce #respond input#submit,.woocommerce button.button.alt.disabled,.wc-block-grid__products .wc-block-grid__product .wp-block-button__link,.wc-block-grid__product-onsale,[CLASS*="wc-block"] button,.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons .button:not(.checkout):not(.ast-continue-shopping),.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons a.checkout,.woocommerce button.button.alt.disabled.wc-variation-selection-needed,[CLASS*="wc-block"] .wc-block-components-button{border-style:solid;border-top-width:0;border-right-width:0;border-left-width:0;border-bottom-width:0;color:#ffffff;border-color:var(--ast-global-color-0);background-color:var(--ast-global-color-0);padding-top:15px;padding-right:30px;padding-bottom:15px;padding-left:30px;font-family:inherit;font-weight:500;font-size:16px;font-size:1rem;line-height:1em;}button:focus,.menu-toggle:hover,button:hover,.ast-button:hover,.ast-custom-button:hover .button:hover,.ast-custom-button:hover ,input[type=reset]:hover,input[type=reset]:focus,input#submit:hover,input#submit:focus,input[type="button"]:hover,input[type="button"]:focus,input[type="submit"]:hover,input[type="submit"]:focus,form[CLASS*="wp-block-search__"].wp-block-search .wp-block-search__inside-wrapper .wp-block-search__button:hover,form[CLASS*="wp-block-search__"].wp-block-search .wp-block-search__inside-wrapper .wp-block-search__button:focus,body .wp-block-file .wp-block-file__button:hover,body .wp-block-file .wp-block-file__button:focus,.woocommerce-js a.button:hover,.woocommerce button.button:hover,.woocommerce .woocommerce-message a.button:hover,.woocommerce #respond input#submit:hover,.woocommerce #respond input#submit.alt:hover,.woocommerce input.button.alt:hover,.woocommerce input.button:hover,.woocommerce button.button.alt.disabled:hover,.wc-block-grid__products .wc-block-grid__product .wp-block-button__link:hover,[CLASS*="wc-block"] button:hover,.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons .button:not(.checkout):not(.ast-continue-shopping):hover,.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons a.checkout:hover,.woocommerce button.button.alt.disabled.wc-variation-selection-needed:hover,[CLASS*="wc-block"] .wc-block-components-button:hover,[CLASS*="wc-block"] .wc-block-components-button:focus{color:#ffffff;background-color:var(--ast-global-color-1);border-color:var(--ast-global-color-1);}form[CLASS*="wp-block-search__"].wp-block-search .wp-block-search__inside-wrapper .wp-block-search__button.has-icon{padding-top:calc(15px - 3px);padding-right:calc(30px - 3px);padding-bottom:calc(15px - 3px);padding-left:calc(30px - 3px);}@media (max-width:921px){.menu-toggle,button,.ast-button,.ast-custom-button,.button,input#submit,input[type="button"],input[type="submit"],input[type="reset"],#comments .submit,.search .search-submit,form[CLASS*="wp-block-search__"].wp-block-search .wp-block-search__inside-wrapper .wp-block-search__button,body .wp-block-file .wp-block-file__button,.search .search-submit,.woocommerce-js a.button,.woocommerce button.button,.woocommerce .woocommerce-message a.button,.woocommerce #respond input#submit.alt,.woocommerce input.button.alt,.woocommerce input.button,.woocommerce input.button:disabled,.woocommerce input.button:disabled[disabled],.woocommerce input.button:disabled:hover,.woocommerce input.button:disabled[disabled]:hover,.woocommerce #respond input#submit,.woocommerce button.button.alt.disabled,.wc-block-grid__products .wc-block-grid__product .wp-block-button__link,.wc-block-grid__product-onsale,[CLASS*="wc-block"] button,.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons .button:not(.checkout):not(.ast-continue-shopping),.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons a.checkout,.woocommerce button.button.alt.disabled.wc-variation-selection-needed,[CLASS*="wc-block"] .wc-block-components-button{padding-top:14px;padding-right:28px;padding-bottom:14px;padding-left:28px;}}@media (max-width:544px){.menu-toggle,button,.ast-button,.ast-custom-button,.button,input#submit,input[type="button"],input[type="submit"],input[type="reset"],#comments .submit,.search .search-submit,form[CLASS*="wp-block-search__"].wp-block-search .wp-block-search__inside-wrapper .wp-block-search__button,body .wp-block-file .wp-block-file__button,.search .search-submit,.woocommerce-js a.button,.woocommerce button.button,.woocommerce .woocommerce-message a.button,.woocommerce #respond input#submit.alt,.woocommerce input.button.alt,.woocommerce input.button,.woocommerce input.button:disabled,.woocommerce input.button:disabled[disabled],.woocommerce input.button:disabled:hover,.woocommerce input.button:disabled[disabled]:hover,.woocommerce #respond input#submit,.woocommerce button.button.alt.disabled,.wc-block-grid__products .wc-block-grid__product .wp-block-button__link,.wc-block-grid__product-onsale,[CLASS*="wc-block"] button,.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons .button:not(.checkout):not(.ast-continue-shopping),.woocommerce-js .astra-cart-drawer .astra-cart-drawer-content .woocommerce-mini-cart__buttons a.checkout,.woocommerce button.button.alt.disabled.wc-variation-selection-needed,[CLASS*="wc-block"] .wc-block-components-button{padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;}}@media (max-width:921px){.ast-mobile-header-stack .main-header-bar .ast-search-menu-icon{display:inline-block;}.ast-header-break-point.ast-header-custom-item-outside .ast-mobile-header-stack .main-header-bar .ast-search-icon{margin:0;}.ast-comment-avatar-wrap img{max-width:2.5em;}.ast-comment-meta{padding:0 1.8888em 1.3333em;}}@media (min-width:544px){.ast-container{max-width:100%;}}@media (max-width:544px){.ast-separate-container .ast-article-post,.ast-separate-container .ast-article-single,.ast-separate-container .comments-title,.ast-separate-container .ast-archive-description{padding:1.5em 1em;}.ast-separate-container #content .ast-container{padding-left:0.54em;padding-right:0.54em;}.ast-separate-container .ast-comment-list .bypostauthor{padding:.5em;}.ast-search-menu-icon.ast-dropdown-active .search-field{width:170px;}} #ast-mobile-header .ast-site-header-cart-li a{pointer-events:none;}@media (min-width:545px){.ast-page-builder-template .comments-area,.single.ast-page-builder-template .entry-header,.single.ast-page-builder-template .post-navigation,.single.ast-page-builder-template .ast-single-related-posts-container{max-width:808px;margin-left:auto;margin-right:auto;}}.ast-separate-container{background-color:var(--ast-global-color-5);background-image:none;}@media (max-width:921px){.site-title{display:block;}.site-header .site-description{display:none;}h1,.entry-content h1{font-size:30px;font-size:1.875rem;}h2,.entry-content h2{font-size:25px;font-size:1.5625rem;}h3,.entry-content h3{font-size:20px;font-size:1.25rem;}}@media (max-width:544px){.site-title{display:block;}.site-header .site-description{display:none;}h1,.entry-content h1{font-size:30px;font-size:1.875rem;}h2,.entry-content h2{font-size:25px;font-size:1.5625rem;}h3,.entry-content h3{font-size:20px;font-size:1.25rem;}}@media (max-width:921px){html{font-size:91.2%;}}@media (max-width:544px){html{font-size:91.2%;}}@media (min-width:922px){.ast-container{max-width:808px;}}@media (min-width:922px){.site-content .ast-container{display:flex;}}@media (max-width:921px){.site-content .ast-container{flex-direction:column;}}@media (min-width:922px){.single-post .site-content > .ast-container{max-width:1920px;}}.entry-content h1,.entry-content h2,.entry-content h3,.entry-content h4,.entry-content h5,.entry-content h6{clear:none;}@media (min-width:922px){.main-header-menu .sub-menu .menu-item.ast-left-align-sub-menu:hover > .sub-menu,.main-header-menu .sub-menu .menu-item.ast-left-align-sub-menu.focus > .sub-menu{margin-left:-0px;}}.entry-content li > p{margin-bottom:0;}.site .comments-area{padding-bottom:2em;margin-top:2em;}.wp-block-file {display: flex;align-items: center;flex-wrap: wrap;justify-content: space-between;}.wp-block-pullquote {border: none;}.wp-block-pullquote blockquote::before {content: "\201D";font-family: "Helvetica",sans-serif;display: flex;transform: rotate( 180deg );font-size: 6rem;font-style: normal;line-height: 1;font-weight: bold;align-items: center;justify-content: center;}.has-text-align-right > blockquote::before {justify-content: flex-start;}.has-text-align-left > blockquote::before {justify-content: flex-end;}figure.wp-block-pullquote.is-style-solid-color blockquote {max-width: 100%;text-align: inherit;}:root {--wp--custom--ast-default-block-top-padding: 3em;--wp--custom--ast-default-block-right-padding: 3em;--wp--custom--ast-default-block-bottom-padding: 3em;--wp--custom--ast-default-block-left-padding: 3em;--wp--custom--ast-container-width: 768px;--wp--custom--ast-content-width-size: 768px;--wp--custom--ast-wide-width-size: calc(768px + var(--wp--custom--ast-default-block-left-padding) + var(--wp--custom--ast-default-block-right-padding));}.ast-narrow-container {--wp--custom--ast-content-width-size: 750px;--wp--custom--ast-wide-width-size: 750px;}@media(max-width: 921px) {:root {--wp--custom--ast-default-block-top-padding: 3em;--wp--custom--ast-default-block-right-padding: 2em;--wp--custom--ast-default-block-bottom-padding: 3em;--wp--custom--ast-default-block-left-padding: 2em;}}@media(max-width: 544px) {:root {--wp--custom--ast-default-block-top-padding: 3em;--wp--custom--ast-default-block-right-padding: 1.5em;--wp--custom--ast-default-block-bottom-padding: 3em;--wp--custom--ast-default-block-left-padding: 1.5em;}}.entry-content > .wp-block-group,.entry-content > .wp-block-cover,.entry-content > .wp-block-columns {padding-top: var(--wp--custom--ast-default-block-top-padding);padding-right: var(--wp--custom--ast-default-block-right-padding);padding-bottom: var(--wp--custom--ast-default-block-bottom-padding);padding-left: var(--wp--custom--ast-default-block-left-padding);}.ast-plain-container.ast-no-sidebar .entry-content > .alignfull,.ast-page-builder-template .ast-no-sidebar .entry-content > .alignfull {margin-left: calc( -50vw + 50%);margin-right: calc( -50vw + 50%);max-width: 100vw;width: 100vw;}.ast-plain-container.ast-no-sidebar .entry-content .alignfull .alignfull,.ast-page-builder-template.ast-no-sidebar .entry-content .alignfull .alignfull,.ast-plain-container.ast-no-sidebar .entry-content .alignfull .alignwide,.ast-page-builder-template.ast-no-sidebar .entry-content .alignfull .alignwide,.ast-plain-container.ast-no-sidebar .entry-content .alignwide .alignfull,.ast-page-builder-template.ast-no-sidebar .entry-content .alignwide .alignfull,.ast-plain-container.ast-no-sidebar .entry-content .alignwide .alignwide,.ast-page-builder-template.ast-no-sidebar .entry-content .alignwide .alignwide,.ast-plain-container.ast-no-sidebar .entry-content .wp-block-column .alignfull,.ast-page-builder-template.ast-no-sidebar .entry-content .wp-block-column .alignfull,.ast-plain-container.ast-no-sidebar .entry-content .wp-block-column .alignwide,.ast-page-builder-template.ast-no-sidebar .entry-content .wp-block-column .alignwide {margin-left: auto;margin-right: auto;width: 100%;}[data-ast-blocks-layout] .wp-block-separator:not(.is-style-dots) {height: 0;}[data-ast-blocks-layout] .wp-block-separator {margin: 20px auto;}[data-ast-blocks-layout] .wp-block-separator:not(.is-style-wide):not(.is-style-dots) {max-width: 100px;}[data-ast-blocks-layout] .wp-block-separator.has-background {padding: 0;}.entry-content[data-ast-blocks-layout] > * {max-width: var(--wp--custom--ast-content-width-size);margin-left: auto;margin-right: auto;}.entry-content[data-ast-blocks-layout] > .alignwide {max-width: var(--wp--custom--ast-wide-width-size);}.entry-content[data-ast-blocks-layout] .alignfull {max-width: none;}.entry-content .wp-block-columns {margin-bottom: 0;}blockquote {margin: 1.5em;border-color: rgba(0,0,0,0.05);}.wp-block-quote:not(.has-text-align-right):not(.has-text-align-center) {border-left: 5px solid rgba(0,0,0,0.05);}.has-text-align-right > blockquote,blockquote.has-text-align-right {border-right: 5px solid rgba(0,0,0,0.05);}.has-text-align-left > blockquote,blockquote.has-text-align-left {border-left: 5px solid rgba(0,0,0,0.05);}.wp-block-site-tagline,.wp-block-latest-posts .read-more {margin-top: 15px;}.wp-block-loginout p label {display: block;}.wp-block-loginout p:not(.login-remember):not(.login-submit) input {width: 100%;}.wp-block-loginout input:focus {border-color: transparent;}.wp-block-loginout input:focus {outline: thin dotted;}.entry-content .wp-block-media-text .wp-block-media-text__content {padding: 0 0 0 8%;}.entry-content .wp-block-media-text.has-media-on-the-right .wp-block-media-text__content {padding: 0 8% 0 0;}.entry-content .wp-block-media-text.has-background .wp-block-media-text__content {padding: 8%;}.entry-content .wp-block-cover:not([class*="background-color"]):not(.has-text-color.has-link-color) .wp-block-cover__inner-container,.entry-content .wp-block-cover:not([class*="background-color"]) .wp-block-cover-image-text,.entry-content .wp-block-cover:not([class*="background-color"]) .wp-block-cover-text,.entry-content .wp-block-cover-image:not([class*="background-color"]) .wp-block-cover__inner-container,.entry-content .wp-block-cover-image:not([class*="background-color"]) .wp-block-cover-image-text,.entry-content .wp-block-cover-image:not([class*="background-color"]) .wp-block-cover-text {color: var(--ast-global-color-primary,var(--ast-global-color-5));}.wp-block-loginout .login-remember input {width: 1.1rem;height: 1.1rem;margin: 0 5px 4px 0;vertical-align: middle;}.wp-block-latest-posts > li > *:first-child,.wp-block-latest-posts:not(.is-grid) > li:first-child {margin-top: 0;}.entry-content > .wp-block-buttons,.entry-content > .wp-block-uagb-buttons {margin-bottom: 1.5em;}.wp-block-search__inside-wrapper .wp-block-search__input {padding: 0 10px;color: var(--ast-global-color-3);background: var(--ast-global-color-primary,var(--ast-global-color-5));border-color: var(--ast-border-color);}.wp-block-latest-posts .read-more {margin-bottom: 1.5em;}.wp-block-search__no-button .wp-block-search__inside-wrapper .wp-block-search__input {padding-top: 5px;padding-bottom: 5px;}.wp-block-latest-posts .wp-block-latest-posts__post-date,.wp-block-latest-posts .wp-block-latest-posts__post-author {font-size: 1rem;}.wp-block-latest-posts > li > *,.wp-block-latest-posts:not(.is-grid) > li {margin-top: 12px;margin-bottom: 12px;}.ast-page-builder-template .entry-content[data-ast-blocks-layout] > *,.ast-page-builder-template .entry-content[data-ast-blocks-layout] > .alignfull:not(.wp-block-group):not(.uagb-is-root-container) > * {max-width: none;}.ast-page-builder-template .entry-content[data-ast-blocks-layout] > .alignwide:not(.uagb-is-root-container) > * {max-width: var(--wp--custom--ast-wide-width-size);}.ast-page-builder-template .entry-content[data-ast-blocks-layout] > .inherit-container-width > *,.ast-page-builder-template .entry-content[data-ast-blocks-layout] > *:not(.wp-block-group):not(.uagb-is-root-container) > *,.entry-content[data-ast-blocks-layout] > .wp-block-cover .wp-block-cover__inner-container {max-width: none ;margin-left: auto;margin-right: auto;}.entry-content[data-ast-blocks-layout] .wp-block-cover:not(.alignleft):not(.alignright) {width: auto;}@media(max-width: 1200px) {.ast-separate-container .entry-content > .alignfull,.ast-separate-container .entry-content[data-ast-blocks-layout] > .alignwide,.ast-plain-container .entry-content[data-ast-blocks-layout] > .alignwide,.ast-plain-container .entry-content .alignfull {margin-left: calc(-1 * min(var(--ast-container-default-xlg-padding),20px)) ;margin-right: calc(-1 * min(var(--ast-container-default-xlg-padding),20px));}}@media(min-width: 1201px) {.ast-separate-container .entry-content > .alignfull {margin-left: calc(-1 * var(--ast-container-default-xlg-padding) );margin-right: calc(-1 * var(--ast-container-default-xlg-padding) );}.ast-separate-container .entry-content[data-ast-blocks-layout] > .alignwide,.ast-plain-container .entry-content[data-ast-blocks-layout] > .alignwide {margin-left: auto;margin-right: auto;}}@media(min-width: 921px) {.ast-separate-container .entry-content .wp-block-group.alignwide:not(.inherit-container-width) > :where(:not(.alignleft):not(.alignright)),.ast-plain-container .entry-content .wp-block-group.alignwide:not(.inherit-container-width) > :where(:not(.alignleft):not(.alignright)) {max-width: calc( var(--wp--custom--ast-content-width-size) + 80px );}.ast-plain-container.ast-right-sidebar .entry-content[data-ast-blocks-layout] .alignfull,.ast-plain-container.ast-left-sidebar .entry-content[data-ast-blocks-layout] .alignfull {margin-left: -60px;margin-right: -60px;}}@media(min-width: 544px) {.entry-content > .alignleft {margin-right: 20px;}.entry-content > .alignright {margin-left: 20px;}}@media (max-width:544px){.wp-block-columns .wp-block-column:not(:last-child){margin-bottom:20px;}.wp-block-latest-posts{margin:0;}}@media( max-width: 600px ) {.entry-content .wp-block-media-text .wp-block-media-text__content,.entry-content .wp-block-media-text.has-media-on-the-right .wp-block-media-text__content {padding: 8% 0 0;}.entry-content .wp-block-media-text.has-background .wp-block-media-text__content {padding: 8%;}}.ast-page-builder-template .entry-header {padding-left: 0;}.ast-narrow-container .site-content .wp-block-uagb-image--align-full .wp-block-uagb-image__figure {max-width: 100%;margin-left: auto;margin-right: auto;}.entry-content ul,.entry-content ol {padding: revert;margin: revert;padding-left: 20px;}:root .has-ast-global-color-0-color{color:var(--ast-global-color-0);}:root .has-ast-global-color-0-background-color{background-color:var(--ast-global-color-0);}:root .wp-block-button .has-ast-global-color-0-color{color:var(--ast-global-color-0);}:root .wp-block-button .has-ast-global-color-0-background-color{background-color:var(--ast-global-color-0);}:root .has-ast-global-color-1-color{color:var(--ast-global-color-1);}:root .has-ast-global-color-1-background-color{background-color:var(--ast-global-color-1);}:root .wp-block-button .has-ast-global-color-1-color{color:var(--ast-global-color-1);}:root .wp-block-button .has-ast-global-color-1-background-color{background-color:var(--ast-global-color-1);}:root .has-ast-global-color-2-color{color:var(--ast-global-color-2);}:root .has-ast-global-color-2-background-color{background-color:var(--ast-global-color-2);}:root .wp-block-button .has-ast-global-color-2-color{color:var(--ast-global-color-2);}:root .wp-block-button .has-ast-global-color-2-background-color{background-color:var(--ast-global-color-2);}:root .has-ast-global-color-3-color{color:var(--ast-global-color-3);}:root .has-ast-global-color-3-background-color{background-color:var(--ast-global-color-3);}:root .wp-block-button .has-ast-global-color-3-color{color:var(--ast-global-color-3);}:root .wp-block-button .has-ast-global-color-3-background-color{background-color:var(--ast-global-color-3);}:root .has-ast-global-color-4-color{color:var(--ast-global-color-4);}:root .has-ast-global-color-4-background-color{background-color:var(--ast-global-color-4);}:root .wp-block-button .has-ast-global-color-4-color{color:var(--ast-global-color-4);}:root .wp-block-button .has-ast-global-color-4-background-color{background-color:var(--ast-global-color-4);}:root .has-ast-global-color-5-color{color:var(--ast-global-color-5);}:root .has-ast-global-color-5-background-color{background-color:var(--ast-global-color-5);}:root .wp-block-button .has-ast-global-color-5-color{color:var(--ast-global-color-5);}:root .wp-block-button .has-ast-global-color-5-background-color{background-color:var(--ast-global-color-5);}:root .has-ast-global-color-6-color{color:var(--ast-global-color-6);}:root .has-ast-global-color-6-background-color{background-color:var(--ast-global-color-6);}:root .wp-block-button .has-ast-global-color-6-color{color:var(--ast-global-color-6);}:root .wp-block-button .has-ast-global-color-6-background-color{background-color:var(--ast-global-color-6);}:root .has-ast-global-color-7-color{color:var(--ast-global-color-7);}:root .has-ast-global-color-7-background-color{background-color:var(--ast-global-color-7);}:root .wp-block-button .has-ast-global-color-7-color{color:var(--ast-global-color-7);}:root .wp-block-button .has-ast-global-color-7-background-color{background-color:var(--ast-global-color-7);}:root .has-ast-global-color-8-color{color:var(--ast-global-color-8);}:root .has-ast-global-color-8-background-color{background-color:var(--ast-global-color-8);}:root .wp-block-button .has-ast-global-color-8-color{color:var(--ast-global-color-8);}:root .wp-block-button .has-ast-global-color-8-background-color{background-color:var(--ast-global-color-8);}:root{--ast-global-color-0:#046bd2;--ast-global-color-1:#045cb4;--ast-global-color-2:#1e293b;--ast-global-color-3:#334155;--ast-global-color-4:#FFFFFF;--ast-global-color-5:#F0F5FA;--ast-global-color-6:#111111;--ast-global-color-7:#D1D5DB;--ast-global-color-8:#111111;}:root {--ast-border-color : var(--ast-global-color-7);}.ast-single-entry-banner {-js-display: flex;display: flex;flex-direction: column;justify-content: center;text-align: center;position: relative;background: var(--ast-title-layout-bg);}.ast-single-entry-banner[data-banner-layout="layout-1"] {max-width: 768px;background: inherit;padding: 20px 0;}.ast-single-entry-banner[data-banner-width-type="custom"] {margin: 0 auto;width: 100%;}.ast-single-entry-banner + .site-content .entry-header {margin-bottom: 0;}.site .ast-author-avatar {--ast-author-avatar-size: ;}a.ast-underline-text {text-decoration: underline;}.ast-container > .ast-terms-link {position: relative;display: block;}a.ast-button.ast-badge-tax {padding: 4px 8px;border-radius: 3px;font-size: inherit;}header.entry-header .entry-title{font-weight:600;font-size:32px;font-size:2rem;}header.entry-header > *:not(:last-child){margin-bottom:10px;}header.entry-header .post-thumb-img-content{text-align:center;}header.entry-header .post-thumb img,.ast-single-post-featured-section.post-thumb img{aspect-ratio:16/9;width:100%;height:100%;}.ast-archive-entry-banner {-js-display: flex;display: flex;flex-direction: column;justify-content: center;text-align: center;position: relative;background: var(--ast-title-layout-bg);}.ast-archive-entry-banner[data-banner-width-type="custom"] {margin: 0 auto;width: 100%;}.ast-archive-entry-banner[data-banner-layout="layout-1"] {background: inherit;padding: 20px 0;text-align: left;}body.archive .ast-archive-description{max-width:768px;width:100%;text-align:left;padding-top:3em;padding-right:3em;padding-bottom:3em;padding-left:3em;}body.archive .ast-archive-description .ast-archive-title,body.archive .ast-archive-description .ast-archive-title *{font-weight:600;font-size:32px;font-size:2rem;}body.archive .ast-archive-description > *:not(:last-child){margin-bottom:10px;}@media (max-width:921px){body.archive .ast-archive-description{text-align:left;}}@media (max-width:544px){body.archive .ast-archive-description{text-align:left;}}.ast-breadcrumbs .trail-browse,.ast-breadcrumbs .trail-items,.ast-breadcrumbs .trail-items li{display:inline-block;margin:0;padding:0;border:none;background:inherit;text-indent:0;text-decoration:none;}.ast-breadcrumbs .trail-browse{font-size:inherit;font-style:inherit;font-weight:inherit;color:inherit;}.ast-breadcrumbs .trail-items{list-style:none;}.trail-items li::after{padding:0 0.3em;content:"\00bb";}.trail-items li:last-of-type::after{display:none;}h1,.entry-content h1,h2,.entry-content h2,h3,.entry-content h3,h4,.entry-content h4,h5,.entry-content h5,h6,.entry-content h6{color:var(--ast-global-color-2);}.entry-title a{color:var(--ast-global-color-2);}@media (max-width:921px){.ast-builder-grid-row-container.ast-builder-grid-row-tablet-3-firstrow .ast-builder-grid-row > *:first-child,.ast-builder-grid-row-container.ast-builder-grid-row-tablet-3-lastrow .ast-builder-grid-row > *:last-child{grid-column:1 / -1;}}@media (max-width:544px){.ast-builder-grid-row-container.ast-builder-grid-row-mobile-3-firstrow .ast-builder-grid-row > *:first-child,.ast-builder-grid-row-container.ast-builder-grid-row-mobile-3-lastrow .ast-builder-grid-row > *:last-child{grid-column:1 / -1;}}.ast-builder-layout-element[data-section="title_tagline"]{display:flex;}@media (max-width:921px){.ast-header-break-point .ast-builder-layout-element[data-section="title_tagline"]{display:flex;}}@media (max-width:544px){.ast-header-break-point .ast-builder-layout-element[data-section="title_tagline"]{display:flex;}}.ast-builder-menu-1{font-family:inherit;font-weight:inherit;}.ast-builder-menu-1 .menu-item > .menu-link{color:var(--ast-global-color-3);}.ast-builder-menu-1 .menu-item > .ast-menu-toggle{color:var(--ast-global-color-3);}.ast-builder-menu-1 .menu-item:hover > .menu-link,.ast-builder-menu-1 .inline-on-mobile .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-1 .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-1 .menu-item.current-menu-item > .menu-link,.ast-builder-menu-1 .inline-on-mobile .menu-item.current-menu-item > .ast-menu-toggle,.ast-builder-menu-1 .current-menu-ancestor > .menu-link{color:var(--ast-global-color-1);}.ast-builder-menu-1 .menu-item.current-menu-item > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-1 .sub-menu,.ast-builder-menu-1 .inline-on-mobile .sub-menu{border-top-width:2px;border-bottom-width:0px;border-right-width:0px;border-left-width:0px;border-color:var(--ast-global-color-0);border-style:solid;}.ast-builder-menu-1 .sub-menu .sub-menu{top:-2px;}.ast-builder-menu-1 .main-header-menu > .menu-item > .sub-menu,.ast-builder-menu-1 .main-header-menu > .menu-item > .astra-full-megamenu-wrapper{margin-top:0px;}.ast-desktop .ast-builder-menu-1 .main-header-menu > .menu-item > .sub-menu:before,.ast-desktop .ast-builder-menu-1 .main-header-menu > .menu-item > .astra-full-megamenu-wrapper:before{height:calc( 0px + 2px + 5px );}.ast-desktop .ast-builder-menu-1 .menu-item .sub-menu .menu-link{border-style:none;}@media (max-width:921px){.ast-header-break-point .ast-builder-menu-1 .menu-item.menu-item-has-children > .ast-menu-toggle{top:0;}.ast-builder-menu-1 .inline-on-mobile .menu-item.menu-item-has-children > .ast-menu-toggle{right:-15px;}.ast-builder-menu-1 .menu-item-has-children > .menu-link:after{content:unset;}.ast-builder-menu-1 .main-header-menu > .menu-item > .sub-menu,.ast-builder-menu-1 .main-header-menu > .menu-item > .astra-full-megamenu-wrapper{margin-top:0;}}@media (max-width:544px){.ast-header-break-point .ast-builder-menu-1 .menu-item.menu-item-has-children > .ast-menu-toggle{top:0;}.ast-builder-menu-1 .main-header-menu > .menu-item > .sub-menu,.ast-builder-menu-1 .main-header-menu > .menu-item > .astra-full-megamenu-wrapper{margin-top:0;}}.ast-builder-menu-1{display:flex;}@media (max-width:921px){.ast-header-break-point .ast-builder-menu-1{display:flex;}}@media (max-width:544px){.ast-header-break-point .ast-builder-menu-1{display:flex;}}.site-below-footer-wrap{padding-top:20px;padding-bottom:20px;}.site-below-footer-wrap[data-section="section-below-footer-builder"]{background-color:var(--ast-global-color-4 );min-height:60px;border-style:solid;border-width:0px;border-top-width:1px;border-top-color:var( --ast-global-color-subtle-background,--ast-global-color-7 );}.site-below-footer-wrap[data-section="section-below-footer-builder"] .ast-builder-grid-row{max-width:768px;min-height:60px;margin-left:auto;margin-right:auto;}.site-below-footer-wrap[data-section="section-below-footer-builder"] .ast-builder-grid-row,.site-below-footer-wrap[data-section="section-below-footer-builder"] .site-footer-section{align-items:center;}.site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-inline .site-footer-section{display:flex;margin-bottom:0;}.ast-builder-grid-row-full .ast-builder-grid-row{grid-template-columns:1fr;}@media (max-width:921px){.site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-tablet-inline .site-footer-section{display:flex;margin-bottom:0;}.site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-tablet-stack .site-footer-section{display:block;margin-bottom:10px;}.ast-builder-grid-row-container.ast-builder-grid-row-tablet-full .ast-builder-grid-row{grid-template-columns:1fr;}}@media (max-width:544px){.site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-mobile-inline .site-footer-section{display:flex;margin-bottom:0;}.site-below-footer-wrap[data-section="section-below-footer-builder"].ast-footer-row-mobile-stack .site-footer-section{display:block;margin-bottom:10px;}.ast-builder-grid-row-container.ast-builder-grid-row-mobile-full .ast-builder-grid-row{grid-template-columns:1fr;}}.site-below-footer-wrap[data-section="section-below-footer-builder"]{display:grid;}@media (max-width:921px){.ast-header-break-point .site-below-footer-wrap[data-section="section-below-footer-builder"]{display:grid;}}@media (max-width:544px){.ast-header-break-point .site-below-footer-wrap[data-section="section-below-footer-builder"]{display:grid;}}.ast-footer-copyright{text-align:center;}.ast-footer-copyright {color:var(--ast-global-color-3);}@media (max-width:921px){.ast-footer-copyright{text-align:center;}}@media (max-width:544px){.ast-footer-copyright{text-align:center;}}.ast-footer-copyright {font-size:16px;font-size:1rem;}.ast-footer-copyright.ast-builder-layout-element{display:flex;}@media (max-width:921px){.ast-header-break-point .ast-footer-copyright.ast-builder-layout-element{display:flex;}}@media (max-width:544px){.ast-header-break-point .ast-footer-copyright.ast-builder-layout-element{display:flex;}}.footer-widget-area.widget-area.site-footer-focus-item{width:auto;}.ast-footer-row-inline .footer-widget-area.widget-area.site-footer-focus-item{width:100%;}.elementor-widget-heading .elementor-heading-title{margin:0;}.elementor-page .ast-menu-toggle{color:unset !important;background:unset !important;}.elementor-post.elementor-grid-item.hentry{margin-bottom:0;}.woocommerce div.product .elementor-element.elementor-products-grid .related.products ul.products li.product,.elementor-element .elementor-wc-products .woocommerce[class*='columns-'] ul.products li.product{width:auto;margin:0;float:none;}.elementor-toc__list-wrapper{margin:0;}body .elementor hr{background-color:#ccc;margin:0;}.ast-left-sidebar .elementor-section.elementor-section-stretched,.ast-right-sidebar .elementor-section.elementor-section-stretched{max-width:100%;left:0 !important;}.elementor-posts-container [CLASS*="ast-width-"]{width:100%;}.elementor-template-full-width .ast-container{display:block;}.elementor-screen-only,.screen-reader-text,.screen-reader-text span,.ui-helper-hidden-accessible{top:0 !important;}@media (max-width:544px){.elementor-element .elementor-wc-products .woocommerce[class*="columns-"] ul.products li.product{width:auto;margin:0;}.elementor-element .woocommerce .woocommerce-result-count{float:none;}}.ast-header-break-point .main-header-bar{border-bottom-width:1px;}@media (min-width:922px){.main-header-bar{border-bottom-width:1px;}}.main-header-menu .menu-item, #astra-footer-menu .menu-item, .main-header-bar .ast-masthead-custom-menu-items{-js-display:flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;}.main-header-menu > .menu-item > .menu-link, #astra-footer-menu > .menu-item > .menu-link{height:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-js-display:flex;display:flex;}.ast-header-break-point .main-navigation ul .menu-item .menu-link .icon-arrow:first-of-type svg{top:.2em;margin-top:0px;margin-left:0px;width:.65em;transform:translate(0, -2px) rotateZ(270deg);}.ast-mobile-popup-content .ast-submenu-expanded > .ast-menu-toggle{transform:rotateX(180deg);overflow-y:auto;}@media (min-width:922px){.ast-builder-menu .main-navigation > ul > li:last-child a{margin-right:0;}}.ast-separate-container .ast-article-inner{background-color:var(--ast-global-color-4);background-image:none;}@media (max-width:921px){.ast-separate-container .ast-article-inner{background-color:var(--ast-global-color-4);background-image:none;}}@media (max-width:544px){.ast-separate-container .ast-article-inner{background-color:var(--ast-global-color-4);background-image:none;}}.ast-separate-container .ast-article-single:not(.ast-related-post), .woocommerce.ast-separate-container .ast-woocommerce-container, .ast-separate-container .error-404, .ast-separate-container .no-results, .single.ast-separate-container .site-main .ast-author-meta, .ast-separate-container .related-posts-title-wrapper,.ast-separate-container .comments-count-wrapper, .ast-box-layout.ast-plain-container .site-content,.ast-padded-layout.ast-plain-container .site-content, .ast-separate-container .ast-archive-description, .ast-separate-container .comments-area{background-color:var(--ast-global-color-4);background-image:none;}@media (max-width:921px){.ast-separate-container .ast-article-single:not(.ast-related-post), .woocommerce.ast-separate-container .ast-woocommerce-container, .ast-separate-container .error-404, .ast-separate-container .no-results, .single.ast-separate-container .site-main .ast-author-meta, .ast-separate-container .related-posts-title-wrapper,.ast-separate-container .comments-count-wrapper, .ast-box-layout.ast-plain-container .site-content,.ast-padded-layout.ast-plain-container .site-content, .ast-separate-container .ast-archive-description{background-color:var(--ast-global-color-4);background-image:none;}}@media (max-width:544px){.ast-separate-container .ast-article-single:not(.ast-related-post), .woocommerce.ast-separate-container .ast-woocommerce-container, .ast-separate-container .error-404, .ast-separate-container .no-results, .single.ast-separate-container .site-main .ast-author-meta, .ast-separate-container .related-posts-title-wrapper,.ast-separate-container .comments-count-wrapper, .ast-box-layout.ast-plain-container .site-content,.ast-padded-layout.ast-plain-container .site-content, .ast-separate-container .ast-archive-description{background-color:var(--ast-global-color-4);background-image:none;}}.ast-separate-container.ast-two-container #secondary .widget{background-color:var(--ast-global-color-4);background-image:none;}@media (max-width:921px){.ast-separate-container.ast-two-container #secondary .widget{background-color:var(--ast-global-color-4);background-image:none;}}@media (max-width:544px){.ast-separate-container.ast-two-container #secondary .widget{background-color:var(--ast-global-color-4);background-image:none;}}.ast-plain-container, .ast-page-builder-template{background-color:var(--ast-global-color-4);background-image:none;}@media (max-width:921px){.ast-plain-container, .ast-page-builder-template{background-color:var(--ast-global-color-4);background-image:none;}}@media (max-width:544px){.ast-plain-container, .ast-page-builder-template{background-color:var(--ast-global-color-4);background-image:none;}}
		#ast-scroll-top {
			display: none;
			position: fixed;
			text-align: center;
			cursor: pointer;
			z-index: 99;
			width: 2.1em;
			height: 2.1em;
			line-height: 2.1;
			color: #ffffff;
			border-radius: 2px;
			content: "";
			outline: inherit;
		}
		@media (min-width: 769px) {
			#ast-scroll-top {
				content: "769";
			}
		}
		#ast-scroll-top .ast-icon.icon-arrow svg {
			margin-left: 0px;
			vertical-align: middle;
			transform: translate(0, -20%) rotate(180deg);
			width: 1.6em;
		}
		.ast-scroll-to-top-right {
			right: 30px;
			bottom: 30px;
		}
		.ast-scroll-to-top-left {
			left: 30px;
			bottom: 30px;
		}
	#ast-scroll-top{background-color:var(--ast-global-color-0);font-size:15px;}@media (max-width:921px){#ast-scroll-top .ast-icon.icon-arrow svg{width:1em;}}.ast-mobile-header-content > *,.ast-desktop-header-content > * {padding: 10px 0;height: auto;}.ast-mobile-header-content > *:first-child,.ast-desktop-header-content > *:first-child {padding-top: 10px;}.ast-mobile-header-content > .ast-builder-menu,.ast-desktop-header-content > .ast-builder-menu {padding-top: 0;}.ast-mobile-header-content > *:last-child,.ast-desktop-header-content > *:last-child {padding-bottom: 0;}.ast-mobile-header-content .ast-search-menu-icon.ast-inline-search label,.ast-desktop-header-content .ast-search-menu-icon.ast-inline-search label {width: 100%;}.ast-desktop-header-content .main-header-bar-navigation .ast-submenu-expanded > .ast-menu-toggle::before {transform: rotateX(180deg);}#ast-desktop-header .ast-desktop-header-content,.ast-mobile-header-content .ast-search-icon,.ast-desktop-header-content .ast-search-icon,.ast-mobile-header-wrap .ast-mobile-header-content,.ast-main-header-nav-open.ast-popup-nav-open .ast-mobile-header-wrap .ast-mobile-header-content,.ast-main-header-nav-open.ast-popup-nav-open .ast-desktop-header-content {display: none;}.ast-main-header-nav-open.ast-header-break-point #ast-desktop-header .ast-desktop-header-content,.ast-main-header-nav-open.ast-header-break-point .ast-mobile-header-wrap .ast-mobile-header-content {display: block;}.ast-desktop .ast-desktop-header-content .astra-menu-animation-slide-up > .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-slide-up > .menu-item .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-slide-down > .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-slide-down > .menu-item .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-fade > .menu-item > .sub-menu,.ast-desktop .ast-desktop-header-content .astra-menu-animation-fade > .menu-item .menu-item > .sub-menu {opacity: 1;visibility: visible;}.ast-hfb-header.ast-default-menu-enable.ast-header-break-point .ast-mobile-header-wrap .ast-mobile-header-content .main-header-bar-navigation {width: unset;margin: unset;}.ast-mobile-header-content.content-align-flex-end .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle,.ast-desktop-header-content.content-align-flex-end .main-header-bar-navigation .menu-item-has-children > .ast-menu-toggle {left: calc( 20px - 0.907em);right: auto;}.ast-mobile-header-content .ast-search-menu-icon,.ast-mobile-header-content .ast-search-menu-icon.slide-search,.ast-desktop-header-content .ast-search-menu-icon,.ast-desktop-header-content .ast-search-menu-icon.slide-search {width: 100%;position: relative;display: block;right: auto;transform: none;}.ast-mobile-header-content .ast-search-menu-icon.slide-search .search-form,.ast-mobile-header-content .ast-search-menu-icon .search-form,.ast-desktop-header-content .ast-search-menu-icon.slide-search .search-form,.ast-desktop-header-content .ast-search-menu-icon .search-form {right: 0;visibility: visible;opacity: 1;position: relative;top: auto;transform: none;padding: 0;display: block;overflow: hidden;}.ast-mobile-header-content .ast-search-menu-icon.ast-inline-search .search-field,.ast-mobile-header-content .ast-search-menu-icon .search-field,.ast-desktop-header-content .ast-search-menu-icon.ast-inline-search .search-field,.ast-desktop-header-content .ast-search-menu-icon .search-field {width: 100%;padding-right: 5.5em;}.ast-mobile-header-content .ast-search-menu-icon .search-submit,.ast-desktop-header-content .ast-search-menu-icon .search-submit {display: block;position: absolute;height: 100%;top: 0;right: 0;padding: 0 1em;border-radius: 0;}.ast-hfb-header.ast-default-menu-enable.ast-header-break-point .ast-mobile-header-wrap .ast-mobile-header-content .main-header-bar-navigation ul .sub-menu .menu-link {padding-left: 30px;}.ast-hfb-header.ast-default-menu-enable.ast-header-break-point .ast-mobile-header-wrap .ast-mobile-header-content .main-header-bar-navigation .sub-menu .menu-item .menu-item .menu-link {padding-left: 40px;}.ast-mobile-popup-drawer.active .ast-mobile-popup-inner{background-color:#ffffff;;}.ast-mobile-header-wrap .ast-mobile-header-content, .ast-desktop-header-content{background-color:#ffffff;;}.ast-mobile-popup-content > *, .ast-mobile-header-content > *, .ast-desktop-popup-content > *, .ast-desktop-header-content > *{padding-top:0px;padding-bottom:0px;}.content-align-flex-start .ast-builder-layout-element{justify-content:flex-start;}.content-align-flex-start .main-header-menu{text-align:left;}.ast-desktop-header-content, .ast-mobile-header-content{position:absolute;width:100%;}.ast-mobile-popup-drawer.active .menu-toggle-close{color:#3a3a3a;}.ast-mobile-header-wrap .ast-primary-header-bar,.ast-primary-header-bar .site-primary-header-wrap{min-height:80px;}.ast-desktop .ast-primary-header-bar .main-header-menu > .menu-item{line-height:80px;}.ast-header-break-point #masthead .ast-mobile-header-wrap .ast-primary-header-bar,.ast-header-break-point #masthead .ast-mobile-header-wrap .ast-below-header-bar,.ast-header-break-point #masthead .ast-mobile-header-wrap .ast-above-header-bar{padding-left:20px;padding-right:20px;}.ast-header-break-point .ast-primary-header-bar{border-bottom-width:1px;border-bottom-color:var( --ast-global-color-subtle-background,--ast-global-color-7 );border-bottom-style:solid;}@media (min-width:922px){.ast-primary-header-bar{border-bottom-width:1px;border-bottom-color:var( --ast-global-color-subtle-background,--ast-global-color-7 );border-bottom-style:solid;}}.ast-primary-header-bar{background-color:var( --ast-global-color-primary,--ast-global-color-4 );}.ast-primary-header-bar{display:block;}@media (max-width:921px){.ast-header-break-point .ast-primary-header-bar{display:grid;}}@media (max-width:544px){.ast-header-break-point .ast-primary-header-bar{display:grid;}}[data-section="section-header-mobile-trigger"] .ast-button-wrap .ast-mobile-menu-trigger-minimal{color:var(--ast-global-color-0);border:none;background:transparent;}[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg{width:20px;height:20px;fill:var(--ast-global-color-0);}[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-wrap .mobile-menu{color:var(--ast-global-color-0);}.ast-builder-menu-mobile .main-navigation .main-header-menu .menu-item > .menu-link{color:var(--ast-global-color-3);}.ast-builder-menu-mobile .main-navigation .main-header-menu .menu-item > .ast-menu-toggle{color:var(--ast-global-color-3);}.ast-builder-menu-mobile .main-navigation .main-header-menu .menu-item:hover > .menu-link, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .menu-item:hover > .menu-link, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .main-navigation .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .main-navigation .menu-item.current-menu-item > .menu-link, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .menu-item.current-menu-item > .ast-menu-toggle, .ast-builder-menu-mobile .main-navigation .menu-item.current-menu-ancestor > .menu-link, .ast-builder-menu-mobile .main-navigation .menu-item.current-menu-ancestor > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .main-navigation .menu-item.current-menu-item > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .main-navigation .menu-item.menu-item-has-children > .ast-menu-toggle{top:0;}.ast-builder-menu-mobile .main-navigation .menu-item-has-children > .menu-link:after{content:unset;}.ast-hfb-header .ast-builder-menu-mobile .main-header-menu, .ast-hfb-header .ast-builder-menu-mobile .main-navigation .menu-item .menu-link, .ast-hfb-header .ast-builder-menu-mobile .main-navigation .menu-item .sub-menu .menu-link{border-style:none;}.ast-builder-menu-mobile .main-navigation .menu-item.menu-item-has-children > .ast-menu-toggle{top:0;}@media (max-width:921px){.ast-builder-menu-mobile .main-navigation .main-header-menu .menu-item > .menu-link{color:var(--ast-global-color-3);}.ast-builder-menu-mobile .main-navigation .main-header-menu .menu-item > .ast-menu-toggle{color:var(--ast-global-color-3);}.ast-builder-menu-mobile .main-navigation .main-header-menu .menu-item:hover > .menu-link, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);background:var(--ast-global-color-5);}.ast-builder-menu-mobile .main-navigation .menu-item:hover > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .main-navigation .menu-item.current-menu-item > .menu-link, .ast-builder-menu-mobile .main-navigation .inline-on-mobile .menu-item.current-menu-item > .ast-menu-toggle, .ast-builder-menu-mobile .main-navigation .menu-item.current-menu-ancestor > .menu-link, .ast-builder-menu-mobile .main-navigation .menu-item.current-menu-ancestor > .ast-menu-toggle{color:var(--ast-global-color-1);background:var(--ast-global-color-5);}.ast-builder-menu-mobile .main-navigation .menu-item.current-menu-item > .ast-menu-toggle{color:var(--ast-global-color-1);}.ast-builder-menu-mobile .main-navigation .menu-item.menu-item-has-children > .ast-menu-toggle{top:0;}.ast-builder-menu-mobile .main-navigation .menu-item-has-children > .menu-link:after{content:unset;}.ast-builder-menu-mobile .main-navigation .main-header-menu , .ast-builder-menu-mobile .main-navigation .main-header-menu .menu-link, .ast-builder-menu-mobile .main-navigation .main-header-menu .sub-menu{background-color:var(--ast-global-color-4);}}@media (max-width:544px){.ast-builder-menu-mobile .main-navigation .menu-item.menu-item-has-children > .ast-menu-toggle{top:0;}}.ast-builder-menu-mobile .main-navigation{display:block;}@media (max-width:921px){.ast-header-break-point .ast-builder-menu-mobile .main-navigation{display:block;}}@media (max-width:544px){.ast-header-break-point .ast-builder-menu-mobile .main-navigation{display:block;}}:root{--e-global-color-astglobalcolor0:#046bd2;--e-global-color-astglobalcolor1:#045cb4;--e-global-color-astglobalcolor2:#1e293b;--e-global-color-astglobalcolor3:#334155;--e-global-color-astglobalcolor4:#FFFFFF;--e-global-color-astglobalcolor5:#F0F5FA;--e-global-color-astglobalcolor6:#111111;--e-global-color-astglobalcolor7:#D1D5DB;--e-global-color-astglobalcolor8:#111111;}
</style> */}
<style
  id="wp-emoji-styles-inline-css"
  dangerouslySetInnerHTML={{
    __html:
      "\n\n\timg.wp-smiley, img.emoji {\n\t\tdisplay: inline !important;\n\t\tborder: none !important;\n\t\tbox-shadow: none !important;\n\t\theight: 1em !important;\n\t\twidth: 1em !important;\n\t\tmargin: 0 0.07em !important;\n\t\tvertical-align: -0.1em !important;\n\t\tbackground: none !important;\n\t\tpadding: 0 !important;\n\t}\n"
  }}
/>
<style
  id="global-styles-inline-css"
  dangerouslySetInnerHTML={{
    __html:
      "\n:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--ast-global-color-0: var(--ast-global-color-0);--wp--preset--color--ast-global-color-1: var(--ast-global-color-1);--wp--preset--color--ast-global-color-2: var(--ast-global-color-2);--wp--preset--color--ast-global-color-3: var(--ast-global-color-3);--wp--preset--color--ast-global-color-4: var(--ast-global-color-4);--wp--preset--color--ast-global-color-5: var(--ast-global-color-5);--wp--preset--color--ast-global-color-6: var(--ast-global-color-6);--wp--preset--color--ast-global-color-7: var(--ast-global-color-7);--wp--preset--color--ast-global-color-8: var(--ast-global-color-8);--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:root { --wp--style--global--content-size: var(--wp--custom--ast-content-width-size);--wp--style--global--wide-size: var(--wp--custom--ast-wide-width-size); }:where(body) { margin: 0; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }:where(.wp-site-blocks) > * { margin-block-start: 24px; margin-block-end: 0; }:where(.wp-site-blocks) > :first-child { margin-block-start: 0; }:where(.wp-site-blocks) > :last-child { margin-block-end: 0; }:root { --wp--style--block-gap: 24px; }:root :where(.is-layout-flow) > :first-child{margin-block-start: 0;}:root :where(.is-layout-flow) > :last-child{margin-block-end: 0;}:root :where(.is-layout-flow) > *{margin-block-start: 24px;margin-block-end: 0;}:root :where(.is-layout-constrained) > :first-child{margin-block-start: 0;}:root :where(.is-layout-constrained) > :last-child{margin-block-end: 0;}:root :where(.is-layout-constrained) > *{margin-block-start: 24px;margin-block-end: 0;}:root :where(.is-layout-flex){gap: 24px;}:root :where(.is-layout-grid){gap: 24px;}.is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}a:where(:not(.wp-element-button)){text-decoration: none;}:root :where(.wp-element-button, .wp-block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;line-height: inherit;padding: calc(0.667em + 2px) calc(1.333em + 2px);text-decoration: none;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-ast-global-color-0-color{color: var(--wp--preset--color--ast-global-color-0) !important;}.has-ast-global-color-1-color{color: var(--wp--preset--color--ast-global-color-1) !important;}.has-ast-global-color-2-color{color: var(--wp--preset--color--ast-global-color-2) !important;}.has-ast-global-color-3-color{color: var(--wp--preset--color--ast-global-color-3) !important;}.has-ast-global-color-4-color{color: var(--wp--preset--color--ast-global-color-4) !important;}.has-ast-global-color-5-color{color: var(--wp--preset--color--ast-global-color-5) !important;}.has-ast-global-color-6-color{color: var(--wp--preset--color--ast-global-color-6) !important;}.has-ast-global-color-7-color{color: var(--wp--preset--color--ast-global-color-7) !important;}.has-ast-global-color-8-color{color: var(--wp--preset--color--ast-global-color-8) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-ast-global-color-0-background-color{background-color: var(--wp--preset--color--ast-global-color-0) !important;}.has-ast-global-color-1-background-color{background-color: var(--wp--preset--color--ast-global-color-1) !important;}.has-ast-global-color-2-background-color{background-color: var(--wp--preset--color--ast-global-color-2) !important;}.has-ast-global-color-3-background-color{background-color: var(--wp--preset--color--ast-global-color-3) !important;}.has-ast-global-color-4-background-color{background-color: var(--wp--preset--color--ast-global-color-4) !important;}.has-ast-global-color-5-background-color{background-color: var(--wp--preset--color--ast-global-color-5) !important;}.has-ast-global-color-6-background-color{background-color: var(--wp--preset--color--ast-global-color-6) !important;}.has-ast-global-color-7-background-color{background-color: var(--wp--preset--color--ast-global-color-7) !important;}.has-ast-global-color-8-background-color{background-color: var(--wp--preset--color--ast-global-color-8) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-ast-global-color-0-border-color{border-color: var(--wp--preset--color--ast-global-color-0) !important;}.has-ast-global-color-1-border-color{border-color: var(--wp--preset--color--ast-global-color-1) !important;}.has-ast-global-color-2-border-color{border-color: var(--wp--preset--color--ast-global-color-2) !important;}.has-ast-global-color-3-border-color{border-color: var(--wp--preset--color--ast-global-color-3) !important;}.has-ast-global-color-4-border-color{border-color: var(--wp--preset--color--ast-global-color-4) !important;}.has-ast-global-color-5-border-color{border-color: var(--wp--preset--color--ast-global-color-5) !important;}.has-ast-global-color-6-border-color{border-color: var(--wp--preset--color--ast-global-color-6) !important;}.has-ast-global-color-7-border-color{border-color: var(--wp--preset--color--ast-global-color-7) !important;}.has-ast-global-color-8-border-color{border-color: var(--wp--preset--color--ast-global-color-8) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}\n"
  }}
/>
<link rel='stylesheet' id='elementor-frontend-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.27.6' media='all' />
<link rel='stylesheet' id='widget-heading-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=3.27.6' media='all' />
<link rel='stylesheet' id='widget-nav-menu-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/pro-elements/assets/css/widget-nav-menu.min.css?ver=3.27.4' media='all' />
<link rel='stylesheet' id='e-sticky-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/pro-elements/assets/css/modules/sticky.min.css?ver=3.27.4' media='all' />
<link rel='stylesheet' id='widget-text-editor-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/elementor/assets/css/widget-text-editor.min.css?ver=3.27.6' media='all' />
<link rel='stylesheet' id='widget-social-icons-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css?ver=3.27.6' media='all' />
<link rel='stylesheet' id='e-apple-webkit-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css?ver=3.27.6' media='all' />
<link rel='stylesheet' id='widget-icon-list-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.27.6' media='all' />
<link rel='stylesheet' id='widget-icon-box-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/elementor/assets/css/widget-icon-box.min.css?ver=3.27.6' media='all' />
<link rel='stylesheet' id='elementor-post-19-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/elementor/css/post-19.css?ver=1745013605' media='all' />
<link rel='stylesheet' id='elementor-post-26-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/elementor/css/post-26.css?ver=1745299548' media='all' />
<link rel='stylesheet' id='elementor-post-54-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/elementor/css/post-54.css?ver=1745013606' media='all' />
<link rel='stylesheet' id='elementor-post-175-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/elementor/css/post-175.css?ver=1745013606' media='all' />
<link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CJost%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CWindSong%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CCabin%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.7.2' media='all' />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
{/* <script src="https://ravirajsabalepatil.onlinespe.com/wp-content/themes/astra/assets/js/minified/flexibility.min.js?ver=4.9.0" id="astra-flexibility-js"></script>
<script id="astra-flexibility-js-after">
flexibility(document.documentElement);
</script> */}
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></Script>

<link rel="https://api.w.org/" href="https://ravirajsabalepatil.onlinespe.com/wp-json/" /><link rel="alternate" title="JSON" type="application/json" href="https://ravirajsabalepatil.onlinespe.com/wp-json/wp/v2/pages/26" />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://ravirajsabalepatil.onlinespe.com/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 6.7.2" />
<link rel="canonical" href="https://ravirajsabalepatil.onlinespe.com/invite-raviraj/" />
<link rel='shortlink' href='https://ravirajsabalepatil.onlinespe.com/?p=26' />
<link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href="https://ravirajsabalepatil.onlinespe.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fravirajsabalepatil.onlinespe.com%2Finvite-raviraj%2F" />
<link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" href="https://ravirajsabalepatil.onlinespe.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fravirajsabalepatil.onlinespe.com%2Finvite-raviraj%2F&#038;format=xml" />
<meta name="generator" content="Elementor 3.27.6; features: e_font_icon_svg, additional_custom_breakpoints, e_element_cache; settings: css_print_method-external, google_font-enabled, font_display-swap" />
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n\t\t\t\t.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t}\n\t\t\t\t@media screen and (max-height: 1024px) {\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t@media screen and (max-height: 640px) {\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"
  }}
/>
      <style
  id="wp-custom-css"
  dangerouslySetInnerHTML={{
    __html:
      '\n\t\t\t.elementor-54 .elementor-element.elementor-element-b2311f7 .elementor-nav-menu--main:not(.e--pointer-framed) .elementor-item:before, .elementor-54 .elementor-element.elementor-element-b2311f7 .elementor-nav-menu--main:not(.e--pointer-framed) .elementor-item:after {\n    width: 60px;\n    position: absolute;\n    left: 20px;\n    top: 28px;\n    height: 1px;\n}\nli.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-294::after {\n    content: "";\n    position: absolute;\n    background: red;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    top: 4px;\n    border: none;\n    left: 82px;\n\t-webkit-animation: 2s blink ease infinite;\n  -moz-animation: 2s blink ease infinite;\n  -ms-animation: 2s blink ease infinite;\n  -o-animation: 2s blink ease infinite;\n  animation: 2s blink ease infinite;\n}\n@keyframes "blink" {\n  from, to {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@-moz-keyframes blink {\n  from, to {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes "blink" {\n  from, to {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@-ms-keyframes "blink" {\n  from, to {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@-o-keyframes "blink" {\n  from, to {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@media(max-width:425px){\n\tli.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-294::after {\n    content: "";\n\t\tdisplay:none;\n}\n\t.forminator-ui#forminator-module-324.forminator-design--default .forminator-label {\n    font-size: 12px;\n    font-family: inherit;\n    font-weight: 700;\n    font-family: \'Jost\' !important;\n    font-size: 18px !important;\n    font-weight: 400 !important;\n}\n\t\t'
  }}
/>
	
  <a
    className="skip-link screen-reader-text"
    href="#content"
    title="Skip to content"
  >
    Skip to content
  </a>
  <div className="hfeed site" id="page">
    <Header />
    <div id="content" className="site-content">
      <div className="ast-container">
        <div
          data-elementor-type="wp-page"
          data-elementor-id={26}
          className="elementor elementor-26"
          data-elementor-post-type="page"
        >
          <div
            className="elementor-element elementor-element-695555f e-flex e-con-boxed e-con e-parent"
            data-id="695555f"
            data-element_type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-8a238e1 e-con-full e-flex e-con e-child"
                data-id="8a238e1"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
              >
                <div
                  className="elementor-element elementor-element-8c4d0cd elementor-widget elementor-widget-heading"
                  data-id="8c4d0cd"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Invite Raviraj
                    </h2>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-c0dd058 e-flex e-con-boxed e-con e-parent"
            data-id="c0dd058"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-1878468 e-con-full e-flex e-con e-child"
                data-id={1878468}
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-e5ed455 e-con-full e-flex e-con e-child"
                  data-id="e5ed455"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-8e9bc49 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                    data-id="8e9bc49"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Invite Raviraj Sabale - Patil
                      </h2>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-5406456 elementor-widget elementor-widget-text-editor"
                    data-id={5406456}
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <p>
                        Raviraj Sabale-Patil is a dedicated farmer and an
                        inspiring speaker. He is passionate about agriculture
                        and enjoys sharing his knowledge to help others grow and
                        succeed. His words motivate people to work hard and stay
                        connected to their roots.
                      </p>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-7c38499 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="7c38499"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-check"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Educational Training
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-check"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Farming Guidance
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-check"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Crop Traning
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-check"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Dragon Fruit Farmimg Guidance
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-check"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Innovative Techniques
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-check"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Community Engagement
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-check"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Workshops and Training
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-d9742d3 e-con-full e-flex e-con e-child"
                  data-id="d9742d3"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-cd5a295 elementor-widget elementor-widget-shortcode"
                    data-id="cd5a295"
                    data-element_type="widget"
                    data-widget_type="shortcode.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-shortcode">
                        <div
                          className="forminator-ui forminator-custom-form forminator-custom-form-324 forminator-design--material  forminator_ajax"
                          data-forminator-render={0}
                          data-form="forminator-module-324"
                          data-uid="67f3c9f35dc59"
                        >
                          <br />
                        </div>
                        <form
      id="forminator-module-324"
      className="forminator-ui forminator-custom-form forminator-custom-form-324 forminator-design--material forminator_ajax"
      data-forminator-render="0"
      data-form-id="324"
      data-design="material"
      data-grid="open"
      data-uid="6807285c4ff4e"
      onSubmit={handleSubmit}
    >
      <div
        role="alert"
        aria-live="polite"
        className="forminator-response-message forminator-error"
        aria-hidden="true"
      ></div>

      {/* Institution Name */}
      <div className="forminator-row">
        <div id="name-1" className="forminator-field-name forminator-col forminator-col-12">
          <div className="forminator-field">
            <label
              htmlFor="forminator-field-name-1_6807285c4ff4e"
              id="forminator-field-name-1_6807285c4ff4e-label"
              className="forminator-label "
            >
              Name Of Institution
            </label>
            <input
              type="text"
              name="institutionName"
              placeholder="E.g. John Doe"
              id="forminator-field-name-1_6807285c4ff4e"
              className="forminator-input forminator-datepicker"
              aria-required="false"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Date of Event */}
      <div className="forminator-row">
        <div id="date-1" className="forminator-field-date forminator-col forminator-col-12">
          <div className="forminator-field">
            <label
              htmlFor="forminator-field-date-1-picker_6807285c4ff4e"
              id="forminator-field-date-1-picker_6807285c4ff4e-label"
              className="forminator-label"
            >
              Date of Event
            </label>
            <div className="forminator-input-with-icon">
              <span className="forminator-icon-calendar" aria-hidden="true"></span>
              <input
                type="date"
                name="eventDate"
                placeholder="Choose Date"
                id="forminator-field-date-1-picker_6807285c4ff4e"
                className="forminator-input forminator-datepicker"
                onChange={handleChange}
                autoComplete="off"
                data-format="mm/dd/yy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Name */}
      <div className="forminator-row">
        <div id="name-2" className="forminator-field-name forminator-col forminator-col-12">
          <div className="forminator-field">
            <label
              htmlFor="forminator-field-name-2_6807285c4ff4e"
              id="forminator-field-name-2_6807285c4ff4e-label"
              className="forminator-label"
            >
              Contact Name
            </label>
            <input
              type="text"
              name="contactName"
              placeholder="E.g. John Doe"
              id="forminator-field-name-2_6807285c4ff4e"
              className="forminator-input forminator-name--field"
              aria-required="false"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Email Address */}
      <div className="forminator-row">
        <div id="email-1" className="forminator-field-email forminator-col forminator-col-12">
          <div className="forminator-field">
            <label
              htmlFor="forminator-field-email-1_6807285c4ff4e"
              id="forminator-field-email-1_6807285c4ff4e-label"
              className="forminator-label"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="E.g. john@doe.com"
              id="forminator-field-email-1_6807285c4ff4e"
              className="forminator-input forminator-email--field"
              aria-required="false"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Purpose */}
      <div className="forminator-row">
        <div id="textarea-1" className="forminator-field-textarea forminator-col forminator-col-12">
          <div className="forminator-field">
            <label
              htmlFor="forminator-field-textarea-1_6807285c4ff4e"
              id="forminator-field-textarea-1_6807285c4ff4e-label"
              className="forminator-label"
            >
              Purpose Of Event
            </label>
            <textarea
              name="purpose"
              placeholder="E.g. text placeholder You can add new line"
              id="forminator-field-textarea-1_6807285c4ff4e"
              className="forminator-textarea"
              rows="6"
              onChange={handleChange}
              style={{ minHeight: '140px' }}
            ></textarea>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="forminator-row forminator-row-last">
        <div className="forminator-col">
          <div className="forminator-field">
            <button type="submit" className="forminator-button forminator-button-submit">
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hidden Inputs (optional if needed for WP backend) */}
      <input type="hidden" name="referer_url" value="" />
      <input type="hidden" name="forminator_nonce" value="ea044f3e1c" />
      <input type="hidden" name="_wp_http_referer" value="/invite-raviraj/" />
      <input type="hidden" name="form_id" value="324" />
      <input type="hidden" name="page_id" value="26" />
      <input type="hidden" name="form_type" value="default" />
      <input type="hidden" name="current_url" value="https://ravirajsabalepatil.onlinespe.com/invite-raviraj/" />
      <input type="hidden" name="render_id" value="0" />
      <input type="hidden" name="action" value="forminator_submit_form_custom-forms" />
    </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* ast-container */}
    </div>
    {/* #content */}
 <Footer />
  </div>
  {/* #page */}
  <div
    id="ast-scroll-top"
    tabIndex={0}
    className="ast-scroll-top-icon ast-scroll-to-top-right"
    data-on-devices="both"
  >
    <span className="ast-icon icon-arrow">
      <svg
        className="ast-arrow-svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        width="26px"
        height="16.043px"
        viewBox="57 35.171 26 16.043"
        enableBackground="new 57 35.171 26 16.043"
        xmlSpace="preserve"
      >
        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
      </svg>
    </span>{" "}
    <span className="screen-reader-text">Scroll to Top</span>
  </div>
  <Script id="lazyload-observer" strategy="afterInteractive">
        {`
          const lazyloadRunObserver = () => {
            const lazyloadBackgrounds = document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded)');
            const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  let lazyloadBackground = entry.target;
                  if (lazyloadBackground) {
                    lazyloadBackground.classList.add('e-lazyloaded');
                  }
                  lazyloadBackgroundObserver.unobserve(entry.target);
                }
              });
            }, { rootMargin: '200px 0px 200px 0px' });

            lazyloadBackgrounds.forEach((lazyloadBackground) => {
              lazyloadBackgroundObserver.observe(lazyloadBackground);
            });
          };

          const events = ['DOMContentLoaded', 'elementor/lazyload/observe'];
          events.forEach((event) => {
            document.addEventListener(event, lazyloadRunObserver);
          });
        `}
      </Script>
			<link rel='stylesheet' id='forminator-module-css-324-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/forminator/324_7804b16706bc9b8bdf8c3e5406490a7b/css/style-324.css?ver=1742024166' media='all' />
<link rel='stylesheet' id='forminator-icons-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/forminator/assets/forminator-ui/css/forminator-icons.min.css?ver=1.42.1' media='all' />
<link rel='stylesheet' id='forminator-utilities-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/forminator/assets/forminator-ui/css/src/forminator-utilities.min.css?ver=1.42.1' media='all' />
<link rel='stylesheet' id='forminator-grid-default-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/forminator/assets/forminator-ui/css/src/grid/forminator-grid.open.min.css?ver=1.42.1' media='all' />
<link rel='stylesheet' id='forminator-forms-material-base-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/forminator/assets/forminator-ui/css/src/form/forminator-form-material.base.min.css?ver=1.42.1' media='all' />
<link rel='stylesheet' id='forminator-forms-material-full-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/forminator/assets/forminator-ui/css/src/form/forminator-form-material.full.min.css?ver=1.42.1' media='all' />
<link rel='stylesheet' id='buttons-css' href='https://ravirajsabalepatil.onlinespe.com/wp-includes/css/buttons.min.css?ver=6.7.2' media='all' />
<link rel='stylesheet' id='forminator-font-roboto-css' href='https://fonts.bunny.net/css?family=Roboto&#038;ver=1.0' media='all' />
{/* <Script id="astra-theme-js-js-extra">
{`var astra = {"break_point":"921","isRtl":"","is_scroll_to_id":"1","is_scroll_to_top":"1","is_header_footer_builder_active":"1","responsive_cart_click":"flyout","palette_key":""}; `}
</Script> */}
{/* <Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/themes/astra/assets/js/minified/frontend.min.js?ver=4.9.0" id="astra-theme-js-js"></Script> */}
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/pro-elements/assets/lib/smartmenus/jquery.smartmenus.min.js?ver=1.2.1" id="smartmenus-js"></Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/pro-elements/assets/lib/sticky/jquery.sticky.min.js?ver=3.27.4" id="e-sticky-js"></Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/forminator/assets/js/library/jquery.validate.min.js?ver=1.42.1" id="forminator-jquery-validate-js"></Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/forminator/assets/forminator-ui/js/forminator-form.min.js?ver=1.42.1" id="forminator-form-js"></Script>
<Script id="forminator-front-scripts-js-extra">
{`var ForminatorFront = {"ajaxUrl":"https:\/\/ravirajsabalepatil.onlinespe.com\/wp-admin\/admin-ajax.php","cform":{"processing":"Submitting form, please wait","error":"An error occurred while processing the form. Please try again","upload_error":"An upload error occurred while processing the form. Please try again","pagination_prev":"Previous","pagination_next":"Next","pagination_go":"Submit","gateway":{"processing":"Processing payment, please wait","paid":"Success! Payment confirmed. Submitting form, please wait","error":"Error! Something went wrong when verifying the payment"},"captcha_error":"Invalid CAPTCHA","no_file_chosen":"No file chosen","intlTelInput_utils_script":"https:\/\/ravirajsabalepatil.onlinespe.com\/wp-content\/plugins\/forminator\/assets\/js\/library\/intlTelInputUtils.js","process_error":"Please try again","payment_failed":"Payment failed. Please try again.","payment_cancelled":"Payment was cancelled"},"poll":{"processing":"Submitting vote, please wait","error":"An error occurred saving the vote. Please try again"},"quiz":{"view_results":"View Results"},"select2":{"load_more":"Loading more results\u2026","no_result_found":"No results found","searching":"Searching\u2026","loaded_error":"The results could not be loaded."}};`}
</Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/forminator/build/front/front.multi.min.js?ver=1.42.1" id="forminator-front-scripts-js"></Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/dist/vendor/moment.min.js?ver=2.30.1" id="moment-js"></Script>
{/* <Script id="moment-js-after">
{`moment.updateLocale( 'en_US', {"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"weekdays":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"weekdaysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"week":{"dow":1},"longDateFormat":{"LT":"g:i a","LTS":null,"L":null,"LL":"F j, Y","LLL":"F j, Y g:i a","LLLL":null}} );`}
</Script> */}
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3" id="jquery-ui-core-js"></Script>
<Script id="jquery-ui-datepicker-js-extra">
{`var datepickerLang = {"monthNames":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthNamesShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"dayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"dayNamesShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"dayNamesMin":["S","M","T","W","T","F","S"],"dateFormat":"MM d, yy","firstDay":"1","isRTL":""};`}
</Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/jquery/ui/datepicker.min.js?ver=1.13.3" id="jquery-ui-datepicker-js"></Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/pro-elements/assets/js/webpack-pro.runtime.min.js?ver=3.27.4" id="elementor-pro-webpack-runtime-js"></Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.27.6" id="elementor-webpack-runtime-js"></Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.27.6" id="elementor-frontend-modules-js"></Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/dist/hooks.min.js?ver=4d63a3d491d11ffd8ac6" id="wp-hooks-js"></Script>
{/* <Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/dist/i18n.min.js?ver=5e580eb46a90c2b997e6" id="wp-i18n-js"></Script> */}
{/* <Script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</Script> */}
<Script id="elementor-pro-frontend-js-before">
{`var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/ravirajsabalepatil.onlinespe.com\/wp-admin\/admin-ajax.php","nonce":"a87275c5ed","urls":{"assets":"https:\/\/ravirajsabalepatil.onlinespe.com\/wp-content\/plugins\/pro-elements\/assets\/","rest":"https:\/\/ravirajsabalepatil.onlinespe.com\/wp-json\/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":false},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/ravirajsabalepatil.onlinespe.com\/wp-content\/plugins\/pro-elements\/modules\/lottie\/assets\/animations\/default.json"}};`}
</Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/pro-elements/assets/js/frontend.min.js?ver=3.27.4" id="elementor-pro-frontend-js"></Script>

      <Script id="elementor-frontend-config" strategy="beforeInteractive">
        {`
          var elementorFrontendConfig = {
            "environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},
            "i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},
            "is_rtl":false,
            "breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},
            "responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},
            "version":"3.27.6",
            "is_static":false,
            "experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_swiper_latest":true,"e_onboarding":true,"theme_builder_v2":true,"home_screen":true,"nested-elements":true,"editor_v2":true,"e_element_cache":true,"link-in-bio":true,"floating-buttons":true,"launchpad-checklist":true},
            "urls":{"assets":"https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/elementor/assets/","ajaxurl":"https://ravirajsabalepatil.onlinespe.com/wp-admin/admin-ajax.php","uploadUrl":"https://ravirajsabalepatil.onlinespe.com/wp-content/uploads"},
            "nonces":{"floatingButtonsClickTracking":"64634f79dd"},
            "swiperClass":"swiper",
            "settings":{"page":[],"editorPreferences":[]},
            "kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},
            "post":{"id":26,"title":"INVITE%20RAVIRAJ%20%E2%80%93%20ravirajsabalepatil.onlinespe.com","excerpt":"","featuredImage":false}
          };
        `}
      </Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.27.6" id="elementor-frontend-js"></Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/pro-elements/assets/js/elements-handlers.min.js?ver=3.27.4" id="pro-elements-handlers-js"></Script>
			<Script>
			{`/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1); `}
			</Script>
			{/* <Script type="text/javascript">{`jQuery(function() {jQuery.ajax({url: 'https://ravirajsabalepatil.onlinespe.com/wp-admin/admin-ajax.php',type: "POST",data: {action: "forminator_get_nonce",form_id: "324",},success: function (response) {jQuery('#forminator-module-324 #forminator_nonce').val( response.data );}});})</Script>		<Script type="text/javascript">
			jQuery(function () {
				window.Forminator_Cform_Paginations = window.Forminator_Cform_Paginations || [];
								window.Forminator_Cform_Paginations[324] =
						{"has-pagination":false,"pagination-header-design":"show","pagination-header":"nav","last-steps":"Finish","last-previous":"Previous","pagination-labels":"default","has-paypal":false};

				var runForminatorFront = function () {
					jQuery('#forminator-module-324[data-forminator-render="0"]')
						.forminatorFront({"form_type":"custom-form","inline_validation":true,"print_value":false,"rules":"\"date-1\": {\n\"dateformat\": \"mm\/dd\/yy\",},\n\"email-1\": {\n\"email\": false,},\n","messages":"\"date-1\": {\n\"dateformat\": \"Not valid date\",\n},\n\"email-1\": {\n},\n","conditions":{"fields":[],"relations":{"name-1":[],"date-1":[],"name-2":[],"email-1":[],"textarea-1":[],"submit":[]}},"calendar":"{\"days\":[\"Su\",\"Mo\",\"Tu\",\"We\",\"Th\",\"Fr\",\"Sa\"],\"months\":[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"]}","paypal_config":{"live_id":"","sandbox_id":"","redirect_url":"https:\/\/ravirajsabalepatil.onlinespe.com\/invite-raviraj","form_id":324},"forminator_fields":["address","calculation","captcha","consent","currency","custom","date","email","gdprcheckbox","group","hidden","html","checkbox","name","number","page-break","password","paypal","phone","postdata","radio","rating","section","select","slider","stripe-ocs","stripe","text","textarea","time","upload","url"],"general_messages":{"calculation_error":"Failed to calculate field.","payment_require_ssl_error":"SSL required to submit this form, please check your URL.","payment_require_amount_error":"PayPal amount must be greater than 0.","form_has_error":"Please correct the errors before submission."},"payment_require_ssl":false,"has_loader":true,"loader_label":"Submitting...","calcs_memoize_time":300,"is_reset_enabled":true,"has_stripe":false,"has_paypal":false,"submit_button_class":""});
				}

				if (window.elementorFrontend) {
					if (typeof elementorFrontend.hooks !== "undefined") {
						elementorFrontend.hooks.addAction('frontend/element_ready/global', function () {
							runForminatorFront();
						});
					}
				} else {
					runForminatorFront();
				}

										if (typeof ForminatorValidationErrors !== 'undefined') {
					var forminatorFrontSubmit = jQuery(ForminatorValidationErrors.selector).data('forminatorFrontSubmit');
					if (typeof forminatorFrontSubmit !== 'undefined') {
						forminatorFrontSubmit.show_messages(ForminatorValidationErrors.errors);
					}
				}
				if (typeof ForminatorFormHider !== 'undefined') {
					var forminatorFront = jQuery(ForminatorFormHider.selector).data('forminatorFront');
					if (typeof forminatorFront !== 'undefined') {
						jQuery(forminatorFront.forminator_selector).find('.forminator-row').hide();
						jQuery(forminatorFront.forminator_selector).find('.forminator-pagination-steps').hide();
						jQuery(forminatorFront.forminator_selector).find('.forminator-pagination-footer').hide();
					}
				}
			});`}
		</Script> */}
</>

);
}

export default Invite;