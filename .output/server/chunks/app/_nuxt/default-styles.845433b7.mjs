import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'vue';
import 'unhead';
import '@unhead/shared';

const default_vue_vue_type_style_index_0_lang = '/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n@font-face {\n  font-family: iconfont; /* Project id 4137688 */\n  src: url("data:font/woff2;base64,d09GMgABAAAAAAOAAAsAAAAAB7gAAAMxAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDBgqDDIJ7ATYCJAMMCwgABCAFhGcHOhvbBhHVmy/IfhzGjulFNEZbAkEw3iyryUXiP8fD11r5fnfP7IaYXCwAq3OpeABQufKJJiwP7FCxTkXu0NpEzDvxI2Jyfxn3mbSnTkTa6sizbGkLiciaHZ0aqvABZWG0y6f/uB87l+sCpAr1fy7HLb/A5m8DwA1rjoWH2XlAAe1tWYS9PCBvkd0Z5EW9ItDRdGaEpe5gEte1LdWt4wYisahBWhltpUIK1xSNSktlaAo19GARl1Sk0+klLoafj79mBo2kyqxrVu53ZXEvfuQfR/Kh1hL5M58i4MUJFTImb8wc29udG+U4ORlRxzplIYW1IqRJI61/QkJX11v+4yWiZpV3BuNxKvEju3KCH0cOSSCD2mOkj+IuYfWemKU+4tFD+u8Zwg8bObz+HTmz9pV9aN2bAssrDtcqzmKbQx8tzmawvr0mfiFBk2tnG+K7Uohu7GyKn4sB3Lxc378lmsWucA5dY3Q9cwMfh29rvKfMbmefT6pDwtKt4S0+r1v3r1iWoBuYKLm2dH3+z0KAJBDHDl5mxFg4HHkpTcxa+jl9Sqfbpc+NKRqgiSenH9MJfWg7nJ4+tGnv/DpgjdxPCpi2SgBp8niFlQ6umYqbH8wuo1i31Tryjeu/7TxKkZMcOhp2M2w09DH/Z/vNhy4jFSO7PLe3T2n4A099+nTK20Y4shO0XuY7eXaY/peP0v9/9xvLNq3/7Ohm/G4yC/j+6d0ZHGi9LOBmzZtyBn9KtRVIWvQQudQRbptAtvyG4wkdbRO/php6+hqu7gUuJzT1SiFpGARZ00haYU2ESiczoda0BDqaxHW8k16asigdMNYqgtDdNSRdPYSsu0daYX1ApS/sB7Xu/tDR+uhyWSdjY8+eUDBqkF/wqhbjaDgc94L2mQRVxR5Im8cRmPqxmDljQRpjy/ayM7MBQzXDiT+HKVVoVAMq7h1zW4bB1L2lVzV3ewQJDGlA+gKeUhXGJ+f8910g6ykRCEh72MlGcTI+mPRGAO2sLKCBG7lm82LNGDOAQSidgZNoR0lLVqDVzwuQwnpuQLxZDDaZgSr75dX55Y5AR9btOVLkKBoHnCjKPXcHW6pCdx0AAAA=") format("woff2"),\n       url("data:font/woff;base64,d09GRgABAAAAAAT0AAsAAAAAB7gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAGA8GElSY21hcAAAAYgAAABVAAABhmZX0NRnbHlmAAAB4AAAASgAAAGMrqgwY2hlYWQAAAMIAAAALwAAADYkyucRaGhlYQAAAzgAAAAcAAAAJAfeA4RobXR4AAADVAAAAAwAAAAMDAAAAGxvY2EAAANgAAAACAAAAAgAeADGbWF4cAAAA2gAAAAeAAAAIAEQAFpuYW1lAAADiAAAAUAAAAJnEKM8sHBvc3QAAATIAAAAKQAAADpD/a+qeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGFhYJzAwMrAwNTJdIaBgaEfQjO+ZjBi5ACKMrAyM2AFAWmuKQwHnjE/a2Ju+N/AwMB8hwFIMjCiKGICAHFYDOV4nO2QwQ2AMAwDL2npAzEIDwbixTAdtmu0bgpbYOlixcnLwAYkcYkM9mBM3Uot8sQeeY6fIje8pVZ7h88l062Eu0bh1xHzfDefbS1ms60u8AHSaQ9aAAAAeJx1j89Kw0AQh2c27MRiUpvumkDVlEaaovQPxJhAilV691bqvdA+Qg85+SKWnO1RfQjFs0efwKt4qrpbsKDgDrt83+zwgwED4OvZuDdikHAElwDNKE3SJG6FrTAwySTpuaoC7bH+ibTvyjIzPB/LLOyhWcYuS86x1cUBc+uYDtBnZDKYjkeROqPx0w9M57NJ1u9nk9mbhmFeHOfEuVVxKM/JqVica/jTsX9lrOFik6FhflXkQ7z7P2HTAab2fTcK9gH7EANgQAco6bARhGcYh2tzTxpRoq2ZOtKNklPHU2/cwzDYQZI+Gte2IL4acxI10a6z23pbrB4WShZbfrX0Uqqp6+zhtrSWnIgvLanI73R8Ra83n5kthI2Pi1JVD+p5gQDwDY89S7N4nGNgZGBgAOLYyKl/4vltvjJwszCAwIOrF7sQ9P8zLAzMJkAuBwMTSBQAXaEMKAB4nGNgZGBgbvjfwBDDwgACQJKRARUwAwBHCQJsBAAAAAQAAAAEAAAAAAAAAAB4AMZ4nGNgZGBgYGbwA2IQYAJiLiBkYPgP5jMAABB+AWsAAHichZE9bsJAEIWfwZAElChKpDRpVikoEsn8lEipUKCnoAez5ke211ovSNQ5TY6QE+QI6Whzikh52EMDRbza2W/evpkdyQDusIeH8rvnLtnDJbOSK7jAo3CV+pOwT34WrqGJnnCd+qtwAy94E26yY8YOnn/FrIV3YQ+3+BCu4AafwlXqX8I++Vu4hgf8CNep/wo3MPGuhZtoeeHA6qnTczXbqVVo0sik7niO9WITT+2pPNE2X5lUdYPOURrpVNtjm3y76DkXqciaRA15q+PYqMyatQ5dsHQu67fbkehBaBIMYKExhWOcQ2GGHeMKIQxSREV0Z/mY7gU2iFlp/3VP6LbIqR9yhS4CdM5cI7rSwnk6TY4tX+tRdXQrbsuahDSUWs1JYrLiDzzcramE1AMsi6oMfbS5ohN/UMyQ/AHYk29XeJxjYGKAAC4G7ICZkYmRmZGFgb04IzEvOaOUrbQgJz8xhYEBADh+BZgAAAA=") format("woff"),\n       url("data:font/ttf;base64,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") format("truetype");\n}\n.iconfont {\n  font-family: iconfont !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-shanchu:before {\n  content: "\\e603";\n}\n.icon-upload:before {\n  content: "\\e682";\n}\n:root {\n  --el-color-primary: #fff;\n  --el-bg-color-overlay:transparent;\n}\n*,:after,:before {\n  border-style: solid; /* 2 */\n  border-width: 0; /* 2 */ /* 1 */\n}\n:after,:before {\n  --tw-content: "";\n}\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n*/\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n}\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\nbody {\n  line-height: inherit; /* 2 */\n  margin: 0; /* 1 */\n}\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  border-top-width: 1px; /* 3 */\n  color: inherit; /* 2 */\n  height: 0; /* 1 */\n}\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n/*\nRemove the default font size and weight for headings.\n*/\nh1,h2,h3,h4,h5,h6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,strong {\n  font-weight: bolder;\n}\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\ncode,kbd,pre,samp {\n  font-size: 1em; /* 2 */\n}\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\nsub,sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -.25em;\n}\nsup {\n  top: -.5em;\n}\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  border-collapse: collapse; /* 3 */\n  border-color: inherit; /* 2 */\n  text-indent: 0; /* 1 */\n}\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,input,optgroup,select,textarea {\n  color: inherit; /* 1 */\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,select {\n  text-transform: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n[type=button],[type=reset],[type=submit],button {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nmenu,ol,ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\ninput::-moz-placeholder,textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n}\ninput::placeholder,textarea::placeholder {\n  opacity: 1; /* 1 */\n}\n/*\nSet the default cursor for buttons.\n*/\n[role=button],button {\n  cursor: pointer;\n}\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\naudio,canvas,embed,iframe,img,object,svg,video {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,video {\n  height: auto;\n  max-width: 100%;\n}\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n@font-face {\n  font-display: swap;\n  font-family: Google Sans;\n  font-style: normal;\n  font-weight: 500;\n  src: local("Google Sans Medium"), local("GoogleSans-Medium"), url(' + publicAssetsURL("fonts/GoogleSans-Medium.woff2") + ') format("woff2"), url(' + publicAssetsURL("fonts/GoogleSans-Medium.woff") + ') format("woff");\n}\n@font-face {\n  font-display: swap;\n  font-family: Google Sans;\n  font-style: normal;\n  font-weight: 700;\n  src: local("Google Sans Bold"), local("GoogleSans-Bold"), url(' + publicAssetsURL("fonts/GoogleSans-Bold.woff2") + ') format("woff2"), url(' + publicAssetsURL("fonts/GoogleSans-Bold.woff") + ') format("woff");\n}\nbody {\noverflow-x:hidden;--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity));--un-text-opacity:1;color:rgb(246 246 246 / var(--un-text-opacity));\n  cursor: none;\n}.dark body{--un-bg-opacity:1;background-color:rgb(17 24 39 / var(--un-bg-opacity));}\nhtml {\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n}\n@media (min-width:768px) {\nhtml {\n    font-size: 14px;\n}\n}\n@media (min-width:1024px) {\nhtml {\n    font-size: 15px;\n}\n}\n@media (min-width:1536px) {\nhtml {\n    font-size: 18px;\n}\n}\n@media (min-width:1800px) {\nhtml {\n    font-size: 20px;\n}\n}\n@media (min-width:2000px) {\nhtml {\n    font-size: 22px;\n}\n}\n:root {\n  color-scheme: light;\n}\n/* stylelint-disable-next-line selector-no-vendor-prefix */\n::-moz-selection {\n  background: #000;\n  color: #fff;\n}\n::selection {\n  background: #000;\n  color: #fff;\n}\n.section-container {\nmargin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem;\n}@media (min-width: 768px){.section-container{padding-left:3rem;padding-right:3rem;}}@media (min-width: 1280px){.section-container{padding-left:5rem;padding-right:5rem;}}@media (min-width: 1536px){.section-container{max-width:1536px;}}\n.typed-cursor {\n  font-size: 2rem;\n}\n.outer-menu.menu-visible .hamburger>div {\n  transform: rotate(135deg);\n}\n.outer-menu.menu-visible .hamburger>div:before {\n  top: 0;\n  transform: rotate(90deg);\n}\n.outer-menu.menu-visible .hamburger>div:after {\n  opacity: 0;\n  top: 0;\n  transform: rotate(90deg);\n}\n.outer-menu.menu-visible .menu {\n  backdrop-filter: blur(.625rem);\n  -webkit-backdrop-filter: blur(.625rem);\n  pointer-events: auto;\n  visibility: visible !important;\n}\n.outer-menu.menu-visible .menu>div {\n  transform: scale(1);\n  transition-duration: .75s;\n}\n.outer-menu.menu-visible .menu>div>div {\n  opacity: 1;\n  transition: opacity .4s ease .4s;\n}\n.outer-menu.menu-visible:hover .hamburger>div {\n  transform: rotate(225deg);\n}\n.outer-menu .hamburger {\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.outer-menu .hamburger>div {\n  height: .125rem;\n  transition: all .4s ease;\n  -webkit-box-pack: center;\n}\n.outer-menu .hamburger>div:after,.outer-menu .hamburger>div:before {\n  background: inherit;\n  content: "";\n  height: .125rem;\n  left: 0;\n  position: absolute;\n  top: -.5rem;\n  transition: all .4s ease;\n  width: 100%;\n  z-index: 1;\n}\n.outer-menu .hamburger>div:after {\n  top: .5rem;\n}\n.outer-menu .menu {\n  backface-visibility: hidden;\n  outline: .0625rem solid transparent;\n}\n.outer-menu .menu>div {\n  backface-visibility: hidden;\n  background: rgba(0,0,0,.5);\n  border-radius: 50%;\n  height: 250vw;\n  transform: scale(0);\n  transition: all .4s ease;\n  width: 250vw;\n  will-change: transform;\n}\n@supports not ((-webkit-backdrop-filter:blur(1px)) or (backdrop-filter:blur(1px))) {\n.outer-menu .menu>div {\n    background: rgba(0,0,0,.8);\n}\n}\n.outer-menu .menu>div>div {\n  max-width: 90vw;\n  transition: opacity .4s ease;\n}\n.outer-menu .menu>div ul li a {\n  background: linear-gradient(90deg, #fff, #fff 50%, #6dd5ed 51%, #2193b0);\n  -webkit-background-clip: text;\n  background-size: 200% 100%;\n  -webkit-text-fill-color: transparent;\n}\n.outer-menu .menu>div ul li a:focus,.outer-menu .menu>div ul li a:hover {\n  background-position: 100% 0;\n}\n.progress {\n  height: .1875rem;\n}\n.progress .progress-bar {\nwidth:100%;--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity));\n  height: .2rem;\n  transform: scaleX(0);\n  transform-origin: left;\n  will-change: transform;\n}\n.text-gradient {\n  background: linear-gradient(90deg, #6dd5ed, #2193b0);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.text-strong {\n  background: linear-gradient(90deg, #fff, #fff 50%, #6dd5ed 51%, #2193b0);\n  -webkit-background-clip: text;\n  background-size: 200% 100%;\n  -webkit-text-fill-color: transparent;\n}\n.project-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.skill {\n  padding-bottom: 1.25rem !important;\n  padding-right: 1.25rem !important;\n}\nfooter {\n  background: url(' + publicAssetsURL("footer-bg.svg") + `), linear-gradient(153.86deg, #02494c, #016877 15.69%, #0d576d 48.9%, #004865 95.52%);
}
.section-heading {
@apply text-gradient;
width:fit-content;font-size:2.25rem;line-height:2.5rem;font-weight:700;
}@media (min-width: 768px){.section-heading{font-size:3rem;line-height:1;}}
.section-title-sm {
font-size:0.875rem;line-height:1.25rem;--un-text-opacity:1;color:rgb(229 231 235 / var(--un-text-opacity));letter-spacing:0.1em;text-transform:uppercase;
}
.gap-6 {
  gap: 1.5rem;
}
.grid-flow-col {
  grid-auto-flow: column;
}
.auto-cols-max {
  grid-auto-columns: max-content;
}
.scroll-pl-6 {
  scroll-padding-left: 1.5rem;
}
.snap-mandatory {
  --tw-scroll-snap-strictness: mandatory;
}
.snap-x {
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.grid {
  display: grid;
}
*,:after,:before {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59,130,246,.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
}
*,:after,:before {
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
}
#__nuxt {
  font-family: Google Sans,Avenir,ui-sans-serif,"system-ui",-apple-system,BlinkMacSystemFont,'"Segoe UI"',Roboto,'"Helvetica Neue"',Arial,'"Noto Sans"',sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji,Helvetica;
  width: 100%;
}`;

const defaultStyles_845433b7 = [default_vue_vue_type_style_index_0_lang, default_vue_vue_type_style_index_0_lang];

export { defaultStyles_845433b7 as default };
//# sourceMappingURL=default-styles.845433b7.mjs.map
