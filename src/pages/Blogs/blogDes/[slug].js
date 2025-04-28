import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import Script from "next/script";
const Dragon =({blogs})=>{
  console.log(blogs)
    return(
        <>
 <meta charSet="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<link rel="profile" href="https://gmpg.org/xfn/11"/> 
	<title>{blogs.title}</title>
<meta name='robots' content='max-image-preview:large' />
<style jsx>{`
  img:is([sizes="auto" i], [sizes^="auto," i]) {
    contain-intrinsic-size: 3000px 1500px;
  }
`}</style>
	<link rel="alternate" type="application/rss+xml" title="ravirajsabalepatil.onlinespe.com &raquo; Feed" href="https://ravirajsabalepatil.onlinespe.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="ravirajsabalepatil.onlinespe.com &raquo; Comments Feed" href="https://ravirajsabalepatil.onlinespe.com/comments/feed/" />
<link rel="alternate" type="application/rss+xml" title="ravirajsabalepatil.onlinespe.com &raquo; शेती म्हणजे काय वो..!! Comments Feed" href="https://ravirajsabalepatil.onlinespe.com/%e0%a4%b6%e0%a5%87%e0%a4%a4%e0%a5%80-%e0%a4%ae%e0%a5%8d%e0%a4%b9%e0%a4%a3%e0%a4%9c%e0%a5%87-%e0%a4%95%e0%a4%be%e0%a4%af-%e0%a4%b5%e0%a5%8b/feed/" />
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

<style
  id="wp-emoji-styles-inline-css"
  dangerouslySetInnerHTML={{
    __html:
      "\n\n\timg.wp-smiley, img.emoji {\n\t\tdisplay: inline !important;\n\t\tborder: none !important;\n\t\tbox-shadow: none !important;\n\t\theight: 1em !important;\n\t\twidth: 1em !important;\n\t\tmargin: 0 0.07em !important;\n\t\tvertical-align: -0.1em !important;\n\t\tbackground: none !important;\n\t\tpadding: 0 !important;\n\t}\n"
  }}
/>
<link rel='stylesheet' id='wp-block-library-css' href='https://ravirajsabalepatil.onlinespe.com/wp-includes/css/dist/block-library/style.min.css?ver=6.7.2' media='all' />
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
<link rel='stylesheet' id='widget-image-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=3.27.6' media='all' />
<link rel='stylesheet' id='widget-post-info-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/pro-elements/assets/css/widget-post-info.min.css?ver=3.27.4' media='all' />
<link rel='stylesheet' id='widget-post-navigation-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/pro-elements/assets/css/widget-post-navigation.min.css?ver=3.27.4' media='all' />
<link rel='stylesheet' id='widget-posts-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/plugins/pro-elements/assets/css/widget-posts.min.css?ver=3.27.4' media='all' />
<link rel='stylesheet' id='elementor-post-19-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/elementor/css/post-19.css?ver=1745013605' media='all' />
<link rel='stylesheet' id='elementor-post-54-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/elementor/css/post-54.css?ver=1745013606' media='all' />
<link rel='stylesheet' id='elementor-post-175-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/elementor/css/post-175.css?ver=1745013606' media='all' />
<link rel='stylesheet' id='elementor-post-213-css' href='https://ravirajsabalepatil.onlinespe.com/wp-content/uploads/elementor/css/post-213.css?ver=1745299756' media='all' />
<link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CWindSong%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CCabin%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CJost%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.7.2' media='all' />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
{/* <Script src="https://ravirajsabalepatil.onlinespe.com/wp-content/themes/astra/assets/js/minified/flexibility.min.js?ver=4.9.0" id="astra-flexibility-js"></Script>
<Script id="astra-flexibility-js-after">
flexibility(document.documentElement);
</Script> */}
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></Script>
<Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></Script>
<link rel="https://api.w.org/" href="https://ravirajsabalepatil.onlinespe.com/wp-json/" />
<link rel="alternate" title="JSON" type="application/json" href="https://ravirajsabalepatil.onlinespe.com/wp-json/wp/v2/posts/347" />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://ravirajsabalepatil.onlinespe.com/xmlrpc.php?rsd" />
{/* <meta name="generator" content="WordPress 6.7.2" /> */}
<link rel="canonical" href="https://ravirajsabalepatil.onlinespe.com/%e0%a4%b6%e0%a5%87%e0%a4%a4%e0%a5%80-%e0%a4%ae%e0%a5%8d%e0%a4%b9%e0%a4%a3%e0%a4%9c%e0%a5%87-%e0%a4%95%e0%a4%be%e0%a4%af-%e0%a4%b5%e0%a5%8b/" />
<link rel='shortlink' href='https://ravirajsabalepatil.onlinespe.com/?p=347' />
<link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href="https://ravirajsabalepatil.onlinespe.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fravirajsabalepatil.onlinespe.com%2F%25e0%25a4%25b6%25e0%25a5%2587%25e0%25a4%25a4%25e0%25a5%2580-%25e0%25a4%25ae%25e0%25a5%258d%25e0%25a4%25b9%25e0%25a4%25a3%25e0%25a4%259c%25e0%25a5%2587-%25e0%25a4%2595%25e0%25a4%25be%25e0%25a4%25af-%25e0%25a4%25b5%25e0%25a5%258b%2F" />
<link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" href="https://ravirajsabalepatil.onlinespe.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fravirajsabalepatil.onlinespe.com%2F%25e0%25a4%25b6%25e0%25a5%2587%25e0%25a4%25a4%25e0%25a5%2580-%25e0%25a4%25ae%25e0%25a5%258d%25e0%25a4%25b9%25e0%25a4%25a3%25e0%25a4%259c%25e0%25a5%2587-%25e0%25a4%2595%25e0%25a4%25be%25e0%25a4%25af-%25e0%25a4%25b5%25e0%25a5%258b%2F&#038;format=xml" />
<link rel="pingback" href="https://ravirajsabalepatil.onlinespe.com/xmlrpc.php"/>
<meta name="generator" content="Elementor 3.27.6; features: e_font_icon_svg, additional_custom_breakpoints, e_element_cache; settings: css_print_method-external, google_font-enabled, font_display-swap"/>
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
        <div id="primary" className="content-area primary">
        
          <main key={blogs.id} id="main" className="site-main">
            <div
              data-elementor-type="single-post"
              data-elementor-id={213}
              className="elementor elementor-213 elementor-location-single post-362 post type-post status-publish format-standard has-post-thumbnail hentry category-blog ast-article-single"
              data-elementor-post-type="elementor_library"
            >
              <div
                className="elementor-element elementor-element-d6c80a3 e-flex e-con-boxed e-con e-parent"
                data-id="d6c80a3"
                data-element_type="container"
                data-settings='{"background_background":"classic"}'
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-822dc28 e-con-full e-flex e-con e-child"
                    data-id="822dc28"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-27d14f6 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
                      data-id="27d14f6"
                      data-element_type="widget"
                      data-widget_type="theme-post-title.default"
                    >
                      <div className="elementor-widget-container">
                        <h1 className="elementor-heading-title elementor-size-default">
                          {blogs.title}
                        </h1>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-a1fc905 e-flex e-con-boxed e-con e-parent"
                data-id="a1fc905"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-5e8788d e-con-full e-flex e-con e-child"
                    data-id="5e8788d"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-fb0afc6 e-con-full e-flex e-con e-child"
                      data-id="fb0afc6"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-6946032 e-con-full e-flex e-con e-child"
                        data-id={6946032}
                        data-element_type="container"
                      >
                        <div
                          className="elementor-element elementor-element-2b38cac elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
                          data-id="2b38cac"
                          data-element_type="widget"
                          data-widget_type="theme-post-featured-image.default"
                        >
                          <div className="elementor-widget-container">
                            <img
                              src={blogs.photo}
                              title="1731578015_dargon-fruite"
                              alt="1731578015_dargon-fruite"
                              loading="lazy"
                            />{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-e5938aa elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
                          data-id="e5938aa"
                          data-element_type="widget"
                          data-widget_type="theme-post-title.default"
                        >
                          <div className="elementor-widget-container">
                            <h1 className="elementor-heading-title elementor-size-default">
                              {blogs.title}
                            </h1>{" "}
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-2342b24 elementor-widget elementor-widget-post-info"
                          data-id="2342b24"
                          data-element_type="widget"
                          data-widget_type="post-info.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-inline-items elementor-icon-list-items elementor-post-info">
                              <li
                                className="elementor-icon-list-item elementor-repeater-item-d4514ff elementor-inline-item"
                                itemProp="author"
                              >
                                <a href="/author/poojarevigromgmail-com/index.html">
                                  <span className="elementor-icon-list-icon">
                                    <svg
                                      aria-hidden="true"
                                      className="e-font-icon-svg e-far-user-circle"
                                      viewBox="0 0 496 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z" />
                                    </svg>{" "}
                                  </span>
                                  <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-author">
                                    poojarevigrom@gmail.com{" "}
                                  </span>
                                </a>
                              </li>
                              <li
                                className="elementor-icon-list-item elementor-repeater-item-ab2836b elementor-inline-item"
                                itemProp="datePublished"
                              >
                                <a href="/2025/03/13/index.html">
                                  <span className="elementor-icon-list-icon">
                                    <svg
                                      aria-hidden="true"
                                      className="e-font-icon-svg e-fas-calendar"
                                      viewBox="0 0 448 512"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z" />
                                    </svg>{" "}
                                  </span>
                                  <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
                                    <time> {new Date(blogs.created_at).toISOString().slice(0, 10)}</time>{" "}
                                  </span>
                                </a>
                              </li>
                              <li className="elementor-icon-list-item elementor-repeater-item-378c289 elementor-inline-item">
                                <span className="elementor-icon-list-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-far-clock"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                                  </svg>{" "}
                                </span>
                                <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-time">
                                  <time>11:54 am</time>{" "}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-123f0ce elementor-widget elementor-widget-theme-post-content"
                        data-id="123f0ce"
                        data-element_type="widget"
                        data-widget_type="theme-post-content.default"
                      >
                        <div className="elementor-widget-container">
                        
                         <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html:blogs.description }}
    />

                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-f1125e5 elementor-post-navigation-borders-yes elementor-widget elementor-widget-post-navigation"
                        data-id="f1125e5"
                        data-element_type="widget"
                        data-widget_type="post-navigation.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-post-navigation">
                            <div className="elementor-post-navigation__prev elementor-post-navigation__link">
                              <a
                                href="/%e0%a4%85%e0%a4%ae%e0%a4%b0%e0%a5%81%e0%a4%a6-%e0%a4%95%e0%a5%80-%e0%a4%96%e0%a5%87%e0%a4%a4%e0%a5%80-%e0%a4%95%e0%a5%88%e0%a4%b8%e0%a5%87-%e0%a4%95%e0%a4%b0%e0%a5%87/index.html"
                                rel="prev"
                              >
                                <span className="post-navigation__arrow-wrapper post-navigation__arrow-prev">
                                  <i
                                    className="fa fa-angle-left"
                                    aria-hidden="true"
                                  />
                                  <span className="elementor-screen-only">
                                    Prev
                                  </span>
                                </span>
                                <span className="elementor-post-navigation__link__prev">
                                  <span className="post-navigation__prev--label">
                                    Previous
                                  </span>
                                  <span className="post-navigation__prev--title">
                                    अमरुद की खेती कैसे करे
                                  </span>
                                </span>
                              </a>{" "}
                            </div>
                            <div className="elementor-post-navigation__separator-wrapper">
                              <div className="elementor-post-navigation__separator" />
                            </div>
                            <div className="elementor-post-navigation__next elementor-post-navigation__link">
                              <a
                                href="/how-to-do-guava-farming/index.html"
                                rel="next"
                              >
                                <span className="elementor-post-navigation__link__next">
                                  <span className="post-navigation__next--label">
                                    Next
                                  </span>
                                  <span className="post-navigation__next--title">
                                    How To Do Guava Farming
                                  </span>
                                </span>
                                <span className="post-navigation__arrow-wrapper post-navigation__arrow-next">
                                  <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                  />
                                  <span className="elementor-screen-only">
                                    Next
                                  </span>
                                </span>
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-e851b87 e-con-full e-flex e-con e-child"
                      data-id="e851b87"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-7250f8d elementor-widget elementor-widget-heading"
                        data-id="7250f8d"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Recent Posts
                          </h2>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-ee94995 elementor-grid-1 elementor-posts--thumbnail-left elementor-posts--align-left elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-posts"
                        data-id="ee94995"
                        data-element_type="widget"
                        data-settings='{"classic_columns":"1","classic_row_gap":{"unit":"px","size":14,"sizes":[]},"classic_columns_tablet":"2","classic_columns_mobile":"1","classic_row_gap_tablet":{"unit":"px","size":"","sizes":[]},"classic_row_gap_mobile":{"unit":"px","size":"","sizes":[]}}'
                        data-widget_type="posts.classic"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid" >
                            <article className="elementor-post elementor-grid-item post-477 post type-post status-publish format-standard has-post-thumbnail hentry category-workshop" >
                              <a
                                className="elementor-post__thumbnail__link"
                                href="/%e0%a4%aa%e0%a5%87%e0%a4%b0%e0%a5%82-%e0%a4%86%e0%a4%a3%e0%a4%bf-%e0%a4%a1%e0%a5%8d%e0%a4%b0%e0%a5%85%e0%a4%97%e0%a4%a8-%e0%a4%ab%e0%a5%8d%e0%a4%b0%e0%a5%82%e0%a4%9f-%e0%a4%b2%e0%a4%be%e0%a4%97/index.html"
                                tabIndex={-1}
                              >
                                <div className="elementor-post__thumbnail">
                                  <img
                                    fetchPriority="high"
                                    width={4208}
                                    height={2715}
                                    src="/wp-content/uploads/2025/03/1731560983_raviraj-sabale-patil-WORKSHOP.png"
                                    className="attachment-full size-full wp-image-462"
                                    alt=""
                                  />
                                </div>
                              </a>
                              <div className="elementor-post__text">
                                <h3 className="elementor-post__title">
                                  <a href="/%e0%a4%aa%e0%a5%87%e0%a4%b0%e0%a5%82-%e0%a4%86%e0%a4%a3%e0%a4%bf-%e0%a4%a1%e0%a5%8d%e0%a4%b0%e0%a5%85%e0%a4%97%e0%a4%a8-%e0%a4%ab%e0%a5%8d%e0%a4%b0%e0%a5%82%e0%a4%9f-%e0%a4%b2%e0%a4%be%e0%a4%97/index.html">
                                    पेरू आणि ड्रॅगन फ्रूट लागवड कार्यशाळा 4 May
                                    2025: यशस्वी शेतीसाठी तज्ञ मार्गदर्शन{" "}
                                  </a>
                                </h3>
                                <a
                                  className="elementor-post__read-more"
                                  href="/%e0%a4%aa%e0%a5%87%e0%a4%b0%e0%a5%82-%e0%a4%86%e0%a4%a3%e0%a4%bf-%e0%a4%a1%e0%a5%8d%e0%a4%b0%e0%a5%85%e0%a4%97%e0%a4%a8-%e0%a4%ab%e0%a5%8d%e0%a4%b0%e0%a5%82%e0%a4%9f-%e0%a4%b2%e0%a4%be%e0%a4%97/index.html"
                                  aria-label="Read more about पेरू आणि ड्रॅगन फ्रूट लागवड कार्यशाळा 4 May 2025: यशस्वी शेतीसाठी तज्ञ मार्गदर्शन"
                                  tabIndex={-1}
                                >
                                  Read More »{" "}
                                </a>
                              </div>
                            </article>
                            <article className="elementor-post elementor-grid-item post-365 post type-post status-publish format-standard has-post-thumbnail hentry category-blog">
                              <a
                                className="elementor-post__thumbnail__link"
                                href="/Blogs/blogDes/How%20to%20do%20Guava%20Farming"
                                tabIndex={-1}
                              >
                                <div className="elementor-post__thumbnail">
                                  <img
                                    width={640}
                                    height={427}
                                    src="/wp-content/uploads/2025/03/1727242852_Guava.png"
                                    className="attachment-full size-full wp-image-360"
                                    alt=""
                                  />
                                </div>
                              </a>
                              <div className="elementor-post__text">
                                <h3 className="elementor-post__title">
                                  <a href="/Blogs/blogDes/How%20to%20do%20Guava%20Farming">
                                    How To Do Guava Farming{" "}
                                  </a>
                                </h3>
                                <a
                                  className="elementor-post__read-more"
                                  href="/Blogs/blogDes/How%20to%20do%20Guava%20Farming"
                                  aria-label="Read more about How To Do Guava Farming"
                                  tabIndex={-1}
                                >
                                  Read More »{" "}
                                </a>
                              </div>
                            </article>
                            <article className="elementor-post elementor-grid-item post-362 post type-post status-publish format-standard has-post-thumbnail hentry category-blog">
                              <a
                                className="elementor-post__thumbnail__link"
                                href="/Blogs/blogDes/How%20To%20do%20Dragon%20Fruit%20Farming"
                                tabIndex={-1}
                              >
                                <div className="elementor-post__thumbnail">
                                  <img
                                    width={1000}
                                    height={1000}
                                    src="/wp-content/uploads/2025/03/1731578015_dargon-fruite.jpg"
                                    className="attachment-full size-full wp-image-363"
                                    alt=""
                                  />
                                </div>
                              </a>
                              <div className="elementor-post__text">
                                <h3 className="elementor-post__title">
                                  <a href="/Blogs/blogDes/How%20To%20do%20Dragon%20Fruit%20Farming">
                                    How To Do Dragon Fruit Farming{" "}
                                  </a>
                                </h3>
                                <a
                                  className="elementor-post__read-more"
                                  href="/Blogs/blogDes/How%20To%20do%20Dragon%20Fruit%20Farming"
                                  aria-label="Read more about How To Do Dragon Fruit Farming"
                                  tabIndex={-1}
                                >
                                  Read More »{" "}
                                </a>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-a01f5ce elementor-widget elementor-widget-heading"
                        data-id="a01f5ce"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Contact{" "}
                          </h2>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-b9ba7d5 elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                        data-id="b9ba7d5"
                        data-element_type="widget"
                        data-widget_type="icon-box.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                              <span className="elementor-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-user-alt"
                                  viewBox="0 0 512 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z" />
                                </svg>{" "}
                              </span>
                            </div>
                            <div className="elementor-icon-box-content">
                              <h3 className="elementor-icon-box-title">
                                <span>Raviraj Sable Patil </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-abdc116 elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                        data-id="abdc116"
                        data-element_type="widget"
                        data-widget_type="icon-box.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                              <span className="elementor-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-envelope-open-text"
                                  viewBox="0 0 512 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z" />
                                </svg>{" "}
                              </span>
                            </div>
                            <div className="elementor-icon-box-content">
                              <h3 className="elementor-icon-box-title">
                                <span>ravirajsabalepatil@gmail.com </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-fd47638 elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                        data-id="fd47638"
                        data-element_type="widget"
                        data-widget_type="icon-box.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                              <span className="elementor-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-phone-alt"
                                  viewBox="0 0 512 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                                </svg>{" "}
                              </span>
                            </div>
                            <div className="elementor-icon-box-content">
                              <h3 className="elementor-icon-box-title">
                                <span>9021361877 </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-f244758 elementor-position-left elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                        data-id="f244758"
                        data-element_type="widget"
                        data-widget_type="icon-box.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                              <span className="elementor-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-map-marker-alt"
                                  viewBox="0 0 384 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                                </svg>{" "}
                              </span>
                            </div>
                            <div className="elementor-icon-box-content">
                              <h3 className="elementor-icon-box-title">
                                <span>
                                  Bhoom, Dist. Osmanabad, Maharashtra - 413504{" "}
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
         {/* #main */}
        </div>
        {/* #primary */}
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
			<Script src="https://ravirajsabalepatil.onlinespe.com/wp-includes/js/comment-reply.min.js?ver=6.7.2" id="comment-reply-js" async data-wp-strategy="async"></Script>

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
export async function getServerSideProps(context) {
  const slug = decodeURIComponent(context.params.slug);

  try {
    const res = await axios.get("http://127.0.0.1:8000/api/blog");
    const blogs = res.data.blog.find((b) => b.title === slug) || null;

    return { props: { blogs } };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { props: { blogs: null } };
  }
}


export default Dragon;