(function(t){function e(e){for(var s,r,n=e[0],d=e[1],l=e[2],c=0,u=[];c<n.length;c++)r=n[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);m&&m(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,n=1;n<i.length;n++){var d=i[n];0!==o[d]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},o={app:0},a=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/wall-of-memes/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var m=d;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0e94":function(t,e,i){},"16b4":function(t,e,i){t.exports=i.p+"img/photo_2020-11-02_23-54-11.62d87843.jpg"},"1a84":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("0cdd");var s=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("h1",{staticClass:"pt-4 px-2"},[t._v("Happy birthday Cate!!! 😊🎉🎊")]),i("div",{staticClass:"pb-1",attrs:{id:"nav"}},[i("router-link",{attrs:{to:{name:"Home"}}},[t._v("Wall of Memes")]),t._v(" | "),i("router-link",{attrs:{to:{name:"Text"}}},[t._v("Text")])],1),i("main",{staticClass:"pb-4 my-2",attrs:{role:"main"}},[i("router-view")],1),i("b-modal",{attrs:{centered:"",title:"Attention!","content-class":"sound-dialog-content","ok-only":"","ok-title":"Yes! 😊"},on:{ok:t.play},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[i("p",{staticClass:"my-4"},[t._v("Do you have sound enabled? 🔊")])]),i("div",{staticClass:"sound-panel",style:t.audioStarted?"height: 34px":"height: 0"},[i("div",{staticClass:"desc px-2 d-flex justify-content-between"},[i("div",[t._v("Martin Garrix feat. Khalid - Ocean")]),i("div",[t.audio&&t.paused?i("span",{staticClass:"cursor-pointer",on:{click:t.play}},[t._v(" ⏵︎ ")]):i("span",{staticClass:"cursor-pointer",on:{click:t.pause}},[t._v("⏸")])])]),i("div",{staticClass:"progress-bar",style:"width: "+100*t.audioTime/t.audioDuration+"%"})])],1)},a=[],r=(i("b680"),{data:function(){return{showModal:!0,audio:null,audioTime:0,audioDuration:0,audioStarted:!1,paused:!0}},methods:{play:function(){this.audio&&this.audio.play(),this.paused=!1,this.audioStarted=!0},pause:function(){this.audio&&this.audio.pause(),this.paused=!0}},mounted:function(){var t=this;this.audio=new Audio(i("5ca4")),this.audio.addEventListener("loadedmetadata",(function(){t.audioDuration=t.audio.duration})),this.audio.addEventListener("timeupdate",(function(){t.audioTime=t.audio.currentTime.toFixed()}))}}),n=r,d=(i("5c0b"),i("2877")),l=Object(d["a"])(n,o,a,!1,null,null,null),m=l.exports,c=i("5f5b");i("a0d8");s["default"].use(c["a"]);var u=i("ec02"),p=i.n(u);s["default"].component("vue-headful",p.a);var h=i("8c4f"),w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home p-3"},[i("vue-headful",{attrs:{title:"Cate B-Day 2020 | Wall of Memes"}}),i("h2",[t._v("Wall of Memes")]),i("span",{staticClass:"mb-3 d-block"},[t._v(" A collection of memes that I wanted to share with you. ")]),i("b-container",{staticClass:"memes",attrs:{fluid:""}},[i("b-row",t._l(t.filteredMemes,(function(e,s){return i("b-col",{key:s,staticClass:"my-2",attrs:{cols:"4",sm:"3",md:"2"}},[i("b-img",{staticClass:"cursor-pointer",attrs:{src:e.img,thumbnail:"","fluid-grow":"",height:"150",id:s==t.randomMemeIndex?"tooltip-img":"",alt:"Happy birthday Cate! 🎉🎂"},on:{click:function(){return t.imgClick(s)}}})],1)})),1)],1),i("b-tooltip",{ref:"img-tooltip",attrs:{target:"tooltip-img",variant:"primary",trigger:"manual",show:t.showImgTooltip,disabled:t.imgTooltipDisabled},on:{"update:show":function(e){t.showImgTooltip=e},"update:disabled":function(e){t.imgTooltipDisabled=e}}},[t._v(" Click me! ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showSlideshow,expression:"showSlideshow"}],ref:"slideshow",staticClass:"slideshow flex-column justify-content-center",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeSlideshow(e)}}},[i("div",{staticClass:"slideshow-close-container d-flex justify-content-center py-3"},[i("b-button-close",{staticClass:"slideshow-close",attrs:{"text-variant":"primary"},on:{click:t.closeSlideshow}})],1),i("b-carousel",{attrs:{controls:"",indicators:"",interval:0,background:"#ababab"},on:{click:function(t){return t.stopPropagation(),function(){return!0}()}},model:{value:t.slideshowIndex,callback:function(e){t.slideshowIndex=e},expression:"slideshowIndex"}},t._l(t.filteredMemes,(function(e,s){return i("b-carousel-slide",{key:s,attrs:{"caption-html":t.getMemeTitle(e),"text-html":t.getMemeSubtitle(e),"img-src":e.img}})})),1)],1)],1)},g=[],b=(i("4de4"),i("5530")),_=i("2f62"),f={name:"Home",data:function(){return{slideshowIndex:0,showSlideshow:!1,imgTooltipDisabled:!1,showImgTooltip:!0}},computed:Object(b["a"])(Object(b["a"])({},Object(_["c"])(["memes","randomMemeIndex"])),{},{filteredMemes:function(){return this.memes.filter((function(t){return!t.ignore}))}}),methods:Object(b["a"])(Object(b["a"])({},Object(_["b"])(["setRandomMemeIndex"])),{},{imgClick:function(t){this.slideshowIndex=t,this.showSlideshow=!0,this.imgTooltipDisabled=!0,this.showImgTooltip=!1,this.$refs["img-tooltip"].$emit("close")},closeSlideshow:function(){this.showSlideshow=!1},backbuttonListener:function(t){this.showSlideshow&&(t.preventDefault(),this.closeSlideshow())},escapeListener:function(t){"Escape"===t.key&&this.closeSlideshow()},getMemeTitle:function(t){var e=" ";return t.title&&(e=t.title),!t.subtitle&&t.displayLink&&(e+=' <a href="'.concat(t.url,'" target="_blank">🔗</a>')),e},getMemeSubtitle:function(t){var e=" ";return t.subtitle&&(e=t.subtitle,!t.title&&t.displayLink&&(e+=' <a href="'.concat(t.url,'" target="_blank">🔗</a>'))),e}}),mounted:function(){if(null===this.randomMemeIndex){var t=Math.floor(Math.random()*Math.min(this.memes.length,10));this.setRandomMemeIndex({index:t})}this.$refs["img-tooltip"].$emit("open"),document.addEventListener("backbutton",this.backbuttonListener,!1),window.addEventListener("keydown",this.escapeListener)},beforeDestroy:function(){document.removeEventListener("backbutton",this.backbuttonListener),window.removeEventListener("keydown",this.escapeListener)}},y=f,v=(i("ff06"),i("b5d4"),Object(d["a"])(y,w,g,!1,null,"12449f8e",null)),k=v.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text p-3"},[i("vue-headful",{attrs:{title:"Cate B-Day 2020 | Text"}}),t._m(0)],1)},j=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("p",[i("span",{staticClass:"text-center d-block display-4"},[t._v("Cate,")]),i("br"),i("span",{staticClass:"main-text"},[i("span",[t._v(" I know I said this over on Reddit already but you truly are one of the most amazing people I've ever met. It would literally be impossible to list all the things I love about you, but you're genuinely the best friend I've ever had and I couldn't ask for more. ")]),i("br"),i("br"),i("span",[t._v(" I know this year has been incredibly messy and hard but we've managed to communicate and stay by each other's side through all of it and it means the world to me. I know someday we'll be able to look back at all of this and see how much it's taught us, and for now we just have to pull through. But I know with you by my side I'll always manage. ")]),i("br"),i("br"),i("span",[t._v(" At the moment though I hope you enjoyed the memes and Reddit posts I've been collecting and have an amazing birthday!!! 😊 ")]),i("br"),i("span",{staticClass:"display-3 text-center d-block mt-4"},[t._v("🎂")]),i("br"),i("span",{staticClass:"display-4 text-right d-block mr-4"},[t._v(" Love, "),i("br"),t._v(" Ravi ")])])])])}],I=(i("accd"),{}),T=Object(d["a"])(I,x,j,!1,null,"c7e134be",null),C=T.exports;s["default"].use(h["a"]);var M=[{path:"/",name:"Home",component:k},{path:"/text",name:"Text",component:C}],S=new h["a"]({base:"/wall-of-memes/",routes:M}),O=S;s["default"].use(_["a"]);var L=new _["a"].Store({state:{memes:[{url:"https://www.reddit.com/r/wholesomememes/comments/dxxqrz/we_dont_do_that_here/",img:"https://i.redd.it/5r9o8so89dz31.jpg",subtitle:"Not on my watch!"},{url:"https://www.reddit.com/r/Tinder/comments/dykgki/we_might_be_in_boys/",img:"https://i.redd.it/vynwbbu8bnz31.png",title:"You should have expected at least ONE dad joke from me today. 😂"},{url:"https://www.reddit.com/r/BirdsArentReal/comments/dxwcto/made_these_in_mm_store_in_times_square_gotta/",img:"https://i.redd.it/6g5v2kh7pcz31.jpg",title:"Sorry to disappoint. 😔"},{url:"https://www.reddit.com/r/me_irl/comments/dyieeb/me_irl/",img:"https://i.redd.it/xmrg8l498mz31.jpg",title:"To be fair with all these Indians you've been loving. 😜"},{url:"https://www.reddit.com/r/me_irl/comments/e5l79p/me_irl/",img:"https://i.redd.it/l6cbm7idng241.jpg",subtitle:'<span class="bg-dark px-2">Honestly, I feel like you\'ll enjoy the second one more. 🤔</span>'},{url:"https://www.reddit.com/r/facepalm/comments/e0cedl/not_sure_if_this_has_been_posted_before/",img:"https://i.redd.it/biz8aaunvc041.jpg",title:"No comment. 😶"},{url:"https://www.reddit.com/r/sadcringe/comments/e09ljk/he_was_done_pudding_up_with_her/",img:"https://i.redd.it/dhvetdfkrb041.jpg",title:"I tira miss you Cate. 💓"},{url:"https://www.reddit.com/r/boottoobig/comments/e0ctsm/ice_is_cold_water_is_wet/",img:"https://i.redd.it/hey5homp2d041.jpg",title:"Baguette coffins shut with Flextape is all we've ever asked for!"},{url:"https://www.reddit.com/r/PewdiepieSubmissions/comments/e0hwq2/slaps_glass/",img:"https://i.redd.it/iknsc2j4vf041.jpg",subtitle:"I've always told you Elon Musk is an idiot, Cate."},{url:"https://www.reddit.com/r/wholesomememes/comments/e0n61y/recycle_yourself/",img:"https://i.redd.it/me11rs6urh041.jpg",title:'<span class="bg-dark d-block mt-4">Have you been counting the puns? 😛</span>'},{url:"https://www.reddit.com/r/me_irl/comments/e1hseb/me_irl/",img:"https://i.redd.it/4s3kunecsu041.jpg",title:"Communism and love are the ultimate birthday present. 🎂"},{url:"https://www.reddit.com/r/wholesomememes/comments/e30qi6/got_a_whole_lotta_love/",img:"https://i.redd.it/e9j62llmkg141.jpg",sutitle:"Pretty birdie. 😍"},{url:"https://www.reddit.com/r/blursedimages/comments/e7h47b/blursed_duel/",img:"https://i.redd.it/11bjwo7ey8341.jpg",title:"BAGUETTE FIGHTS! 🥖"},{url:"https://www.reddit.com/r/wholesomememes/comments/e98tud/it_starts_fading_away/",img:"https://i.redd.it/xh4icgij01441.jpg",title:"You always manage to put a smile on my face. 😊"},{url:"https://www.reddit.com/r/blursedimages/comments/gn4hqc/blursed_birthday/",img:"https://i.redd.it/ckk1eklyiuz41.jpg",title:"Again, bears, beets, FLEXPASTE!"},{url:"https://www.reddit.com/r/blursedimages/comments/gp7vgu/blursed_anatomy/",img:"https://i.redd.it/c3y7tblnkj051.jpg",subtitle:"This would have made our fanny pack meeting idea real odd. 😳"},{url:"https://www.reddit.com/r/birdswitharms/comments/fj72jz/remember_to_wash_your_hands_kiddos/",img:"https://i.redd.it/g9bs68vq2wm41.jpg",subtitle:'<span class="text-dark">Now this is one responsible <b>majestic</b> bird. 😜'},{url:"https://www.reddit.com/r/ToiletPaperUSA/comments/ebhah1/sorry_for_quality_but_i_did_this_on_a_phone/",img:"https://i.redd.it/b83c1p6pu0541.jpg",title:"In case laughing at conservatives hasn't gotten old yet..."},{url:"https://www.reddit.com/r/ShittyLifeProTips/comments/ebddym/slpt_for_tall_people/",img:"https://i.redd.it/idah3w971z441.jpg",subtitle:'<span class="bg-dark px-2">Thank god we won\'t have to do this with each other. 😂</span>'},{url:"https://www.reddit.com/r/clevercomebacks/comments/eauad1/i_also_want_to_exchange/",img:"https://i.redd.it/tiirkv403q441.jpg",subtitle:'<span class="bg-dark px-1">See Cate? You can toootally give me your yacht... 😜</span>'},{url:"https://www.reddit.com/r/me_irl/comments/g2wisg/me_irl/",img:"https://i.redd.it/aayup9hgobt41.jpg",subtitle:"Annoying Cate with puns on her birthday, oh yeahhh... 😎"},{url:"https://www.reddit.com/r/wholesomememes/comments/ebrja2/boop_boop_dig_dig/",img:"https://i.redd.it/v3i8czttq4541.jpg",subtitle:'<span class="text-dark">I\'ll always be here for you. 💓</span>'},{url:"https://www.reddit.com/r/wholesomememes/comments/ecfcj2/ill_stand_by_you/",img:"https://i.redd.it/64cel9aqbf541.jpg",subtitle:"In case I haven't said it enough."},{url:"https://www.reddit.com/r/funny/comments/ez88da/fine_legs/",img:"https://i.redd.it/7ujydvemc3f41.png",subtitle:'<span class="bg-dark px-1">Not sure if this is "ok" in 2020 anymore to be honest. 🤔</span>'},{url:"https://www.reddit.com/r/me_irl/comments/g6kvqc/me_irl/",img:"https://i.redd.it/ekik0ilvxju41.jpg",title:"No, I won't stop. 😜"},{url:"https://www.reddit.com/r/dankmemes/comments/d1ehrx/not_mine_but_i_had_to_post_it/",img:"https://i.redd.it/gg5zythruel31.jpg",subtitle:'<span class="bg-dark px-1">I told you one day I\'d use this pick-up line on you. 😂</span>'},{url:"https://www.reddit.com/r/Tinder/comments/8aaf4y/ha_ha_depression_pickup_lines/",img:"https://i.redd.it/zy7wt5p04bq01.jpg",subtitle:'<span class="bg-dark px-1">Not nearly as good as the original. 😘</span>'},{url:"https://www.reddit.com/r/blursedimages/comments/ex1kmh/blursed_leg/",img:"https://i.redd.it/3ph36ru729e41.jpg",subtitle:"Made for leg connoisseurs such as us. 😌"},{url:"https://www.reddit.com/r/puns/comments/g8hhpi/why_you_lie/",img:"https://i.redd.it/t8hwlhb8x6v41.jpg",title:"Have I made you groan yet? 😂"},{url:"https://www.reddit.com/r/HolUp/comments/gdc7rr/i_love_nature/",img:"https://i.redd.it/zmbvzx7c9rw41.jpg",title:'<span class="bg-light px-2 text-dark"><span class="font-weight-bold">ALMOST</span> as good as bird-watching tbh. 🔭</span>'},{url:"https://www.reddit.com/r/ShittyLifeProTips/comments/ggdkrc/lpt_proper_first_aid_procedure/",img:"https://i.redd.it/sgt69n7b1qx41.jpg",title:'<span class="text-dark bg-light px-2">Amputation has always been a solution. 🤷🏽‍♂️</span>'},{url:"https://www.reddit.com/r/notliketheothergirls/comments/eylfby/this_annoyed_me/",img:"https://i.redd.it/yv6ithfjjue41.png",subtitle:'<span class="text-dark">Guess I\'m just wired to think about you when I read chicken nuggets now. 🤷‍♂️</span>'},{url:"https://www.reddit.com/r/cursedcomments/comments/erzfdo/cursed_toaster/",img:"https://i.redd.it/7dnwqejil6c41.jpg",title:'<span class="bg-dark px-1">Panel 2 of posting toaster jokes. 😛</span>'},{url:"https://www.reddit.com/r/HistoryMemes/comments/g1jc5d/georgegeorge/",img:"https://i.redd.it/9cl4iy2c8ws41.jpg",subtitle:'<span class="text-left d-block" style="width: 50%">Y\'all American\'ts even come to Europe anymore smh.</span>'},{url:"https://www.reddit.com/r/wholesomememes/comments/epj8bb/honks_wholesomely/",img:"https://i.redd.it/gxq1p9ru55b41.png",title:"Peaceful spin on your favorite birdie! 😊"},{url:"https://www.reddit.com/r/me_irl/comments/ggwv5n/me_irl/",img:"https://i.redd.it/vuzqh2d81wx41.jpg",title:'<span class="text-dark bg-light p-2">...</span>'},{url:"https://www.reddit.com/r/starterpacks/comments/fxmjtt/love_or_hate_starter_pack/",img:"https://i.redd.it/2ynf2xbt9qr41.jpg",subtitle:'<span class="bg-dark px-2">Honestly I just put this here because of the seafood. 🤷‍♂️</span>'},{url:"https://www.reddit.com/r/Tinder/comments/ggxq8l/so_im_bad_at_roleplaying_i_guess/",img:"https://i.redd.it/k0cuvpboewx41.jpg",subtitle:'<span class="bg-dark px-2">I know you love the <a href="https://reddit.com/r/Tinder" target="_blank">/r/Tinder</a> posts. SEXY FIREBALL!!! 🔥</span>'},{url:"https://www.reddit.com/r/Tinder/comments/e1o2w4/bio_said_she_was_looking_for_a_seth_rogan_to_marry/",img:"https://i.redd.it/3s8i0puvww041.jpg",ignore:!0},{url:"https://www.reddit.com/r/KamikazeByWords/comments/e2ej12/when_you_find_the_right_one_you_know/",img:"https://i.redd.it/tyxfgtq2x4141.png",ignore:!0},{url:"https://www.reddit.com/r/wholesomememes/comments/e60d67/thank_you_joker/",img:"https://i.redd.it/p4uqsushrm241.jpg",ignore:!0},{url:"https://www.reddit.com/r/wholesomememes/comments/e1ocyt/how_i_feel_about_this_community_oc/",img:"https://i.redd.it/3xr2j1oetw041.jpg",subtitle:'<span class="text-dark">*panties drop*</span>'},{title:"I owe you some OC. 😊",img:i("16b4")},{url:"https://www.reddit.com/r/FoodPorn/comments/g3nuj0/homemade_lobstahhh_rolls/",img:"https://i.redd.it/53lw0sti0lt41.jpg",subtitle:"Not really a meme, but I thought you'd love this picture.",displayLink:!0},{title:"Happy Birthday dear. 😊🎂",img:i("8c0d")},{url:"https://www.reddit.com/r/wholesomememes/comments/dv40yz/lets_teach_the_youngins/",img:"https://i.redd.it/78ul9vera6y31.jpg",displayLink:!0,subtitle:'<span class="bg-dark px-2">I love you Cate, and I hope you have an amazing birthday. 💓</span>'}],randomMemeIndex:null},mutations:{setRandomMemeIndex:function(t,e){var i=e.index;t.randomMemeIndex=i}},actions:{},modules:{}});s["default"].config.productionTip=!1,new s["default"]({router:O,store:L,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"5ca4":function(t,e,i){t.exports=i.p+"media/martin_garrix-khalid-ocean.fe756b04.mp3"},"8c0d":function(t,e,i){t.exports=i.p+"img/photo_2020-11-02_00-00-11.b7342abe.jpg"},"974d":function(t,e,i){},"9c0c":function(t,e,i){},a0d8:function(t,e,i){},accd:function(t,e,i){"use strict";i("974d")},b5d4:function(t,e,i){"use strict";i("0e94")},ff06:function(t,e,i){"use strict";i("1a84")}});
//# sourceMappingURL=app.db41fc76.js.map