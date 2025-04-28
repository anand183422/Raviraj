import axios from "axios";
import { useState,useEffect } from "react";
import Header from "@/components/Header";
import Script from "next/script";
import Footer from "@/components/Footer";
import slugify from "slugify";
import Link from "next/link";

const Blog=()=>
  {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      fetchdata();
    }, []);
  
    const fetchdata = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/blog");
        setBlogs(res.data.blog); // ✅ if your Laravel key is 'blog'
        
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
  
    return (
        <>

<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" /> 
	<title>Blog &#8211; ravirajsabalepatil.onlinespe.com</title>
<meta name='robots' content='max-image-preview:large' />

	<link rel="alternate" type="application/rss+xml" title="ravirajsabalepatil.onlinespe.com &raquo; Feed" href="https://ravirajsabalepatil.onlinespe.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="ravirajsabalepatil.onlinespe.com &raquo; Comments Feed" href="https://ravirajsabalepatil.onlinespe.com/comments/feed/" />
<Script id="wpemoji-settings" strategy="beforeInteractive">
        {`
          window._wpemojiSettings = {
            "baseUrl": "https://s.w.org/images/core/emoji/15.0.3/72x72/",
            "ext": ".png",
            "svgUrl": "https://s.w.org/images/core/emoji/15.0.3/svg/",
            "svgExt": ".svg",
            "source": {
              "concatemoji": "https://ravirajsabalepatil.onlinespe.com/wp-includes/js/wp-emoji-release.min.js?ver=6.7.2"
            }
          };
          /*! This file is auto-generated */
          !function(i,n){
            var o,s,e;
            function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}
            function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}
            function u(e,t,n){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\uddfa\\ud83c\\uddf3","\\ud83c\\uddfa\\u200b\\ud83c\\uddf3")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!n(e,"\\ud83d\\udc26\\u200d\\u2b1b","\\ud83d\\udc26\\u200b\\u2b1b")}return!1}
            function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}
            function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}
            "undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){
              var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();
              if(!n){
                if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)
                  try{
                    var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",
                        r=new Blob([e],{type:"text/javascript"}),
                        a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});
                    return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})
                  }catch(e){}
                c(n=f(s,u,p))
              }
              t(n)
            }).then(function(e){
              for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);
              n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}
            }).then(function(){return e}).then(function(){
              var e;
              n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))
            }))
          }((window,document),window._wpemojiSettings);
        `}
      </Script>
{/* <link rel='stylesheet' id='astra-theme-css-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/themes/astra/assets/css/minified/main.min.css?ver=4.9.0' media='all' /> */}


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
<link rel='stylesheet' id='widget-posts-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/pro-elements/assets/css/widget-posts.min.css?ver=3.27.4' media='all' />
<link rel='stylesheet' id='elementor-post-441-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/elementor/css/post-441.css?ver=1745299750' media='all' />
<link rel='stylesheet' id='elementor-post-54-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/elementor/css/post-54.css?ver=1745013606' media='all' />
<link rel='stylesheet' id='elementor-post-175-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/elementor/css/post-175.css?ver=1745013606' media='all' />
<link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CJost%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CWindSong%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CCabin%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.7.2' media='all' />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
{/* <Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/themes/astra/assets/js/minified/flexibility.min.js?ver=4.9.0" id="astra-flexibility-js"></Script>
<Script id="astra-flexibility-js-after">
flexibility(document.documentElement);
</Script> */}
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></Script>
<link rel="https://api.w.org/" href="https://ravirajsabalepatil.onlinespe.com/wp-json/" /><link rel="alternate" title="JSON" type="application/json" href="https://ravirajsabalepatil.onlinespe.com/wp-json/wp/v2/pages/441" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://ravirajsabalepatil.onlinespe.com/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 6.7.2" />
<link rel="canonical" href="https://ravirajsabalepatil.onlinespe.com/article/" />
<link rel='shortlink' href='https://ravirajsabalepatil.onlinespe.com/?p=441' />
<link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href="https://ravirajsabalepatil.onlinespe.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fravirajsabalepatil.onlinespe.com%2Farticle%2F" />
<link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" href="https://ravirajsabalepatil.onlinespe.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fravirajsabalepatil.onlinespe.com%2Farticle%2F&#038;format=xml" />
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
	title="Skip to content">
		Skip to content</a>
  <div className="hfeed site" id="page">
   <Header />
    <div id="content" className="site-content">
      <div className="ast-container">
        <div
          data-elementor-type="wp-page"
          data-elementor-id={441}
          className="elementor elementor-441"
          data-elementor-post-type="page"
        >
          <div
            className="elementor-element elementor-element-1918352 e-flex e-con-boxed e-con e-parent"
            data-id={1918352}
            data-element_type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-90c8ca3 e-con-full e-flex e-con e-child"
                data-id="90c8ca3"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-7ccec6d elementor-widget elementor-widget-heading"
                  data-id="7ccec6d"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Blogs
                    </h2>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-90979ae e-flex e-con-boxed e-con e-parent"
            data-id="90979ae"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-8a59b54 e-con-full e-flex e-con e-child"
                data-id="8a59b54"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-3f62770 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-card-shadow-yes elementor-posts__hover-gradient elementor-widget elementor-widget-posts"
                  data-id="3f62770"
                  data-element_type="widget"
                  data-settings='{"cards_columns":"3","cards_columns_tablet":"2","cards_columns_mobile":"1","cards_row_gap":{"unit":"px","size":35,"sizes":[]},"cards_row_gap_tablet":{"unit":"px","size":"","sizes":[]},"cards_row_gap_mobile":{"unit":"px","size":"","sizes":[]}}'
                  data-widget_type="posts.cards"
                >
                  <div className="elementor-widget-container">
                  <div className="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid">
  {Array.isArray(blogs) &&
    blogs.map((blog) => {

      return (
        <article
          key={blog.id}
          className="elementor-post elementor-grid-item post type-post status-publish format-standard has-post-thumbnail hentry category-blog"
        >
          <div className="elementor-post__card">
            <a
              className="elementor-post__thumbnail__link"
              href={`/Blogs/blogDes/${encodeURIComponent(blog.title)}`}
              tabIndex={-1}
            >
              <div>
                <img
                  decoding="async"
                  src={blog.photo}
                  alt={blog.title}
                  style={{ width: '110%', height: 'auto', marginBottom: '0%' }}
                />
              </div>
            </a>

            <div className="elementor-post__text">
              <h3 className="elementor-post__title">
                <a  href={`/Blogs/blogDes/${encodeURIComponent(blog.title)}`}>{blog.title}</a>
              </h3>
              <a
                className="elementor-post__read-more"
                href={`/Blogs/blogDes/${encodeURIComponent(blog.title)}`}
                aria-label={`Read more about ${blog.title}`}
                tabIndex={-1}
              >
                Read More »
              </a>
            </div>

            <div className="elementor-post__meta-data">
              <span className="elementor-post-date">
                {new Date(blog.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </article>
      );
    })}
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

      {/* Astra theme config */}
      {/* <Script id="astra-theme-js-extra" strategy="beforeInteractive">
        {`
          var astra = {
            "break_point": "921",
            "isRtl": "",
            "is_scroll_to_id": "1",
            "is_scroll_to_top": "1",
            "is_header_footer_builder_active": "1",
            "responsive_cart_click": "flyout",
            "palette_key": ""
          };
        `}
      </Script> */}

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
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/dist/i18n.min.js?ver=5e580eb46a90c2b997e6" id="wp-i18n-js"></Script>
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

export default Blog;