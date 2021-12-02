(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b0490ae"],{"48eb":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.infos,(function(t,i){return a("p",{key:i},[e._v(e._s(t))])})),0)},r=[],v={name:"VueKeepAliveInfo",data:function(){return{infos:["        keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。","        ","        1、Props:","          include - 字符串或正则表达式。只有名称匹配的组件会被缓存。","          exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。exclude优先级大于include","          max - 数字。最多可以缓存多少组件实例。","  ","        2、结合router，缓存部分页面","          使用$route.meta的keepAlive属性：","             <keep-alive></keep-alive>",'               <router-view v-if="$route.meta.keepAlive"> </router-view>',"              所有路径匹配到的视图组件都会被缓存！","               </keep-alive>",'             <router-view v-if="!$route.meta.keepAlive"> </router-view>',"          需要在router中设置router的元信息meta：","            //...router.js","                {","                  name: 'vue-keepAlive-eg',","                  path: '/vue/routerView/',","                  meta: {","                    keepAlive: true // 不需要缓存","                  },","                  component: () => import('@/views/vue/keep-alive/eg')","                }, {","                  name: 'vue-keepAlive-eg1',","                  path: '/vue/routerView/eg1',","                  meta: {","                    keepAlive: false // 不需要缓存","                  },","                  component: () => import('@/views/vue/keep-alive/eg1')","                },","          使用效果，以上面router的代码为例：","            (1) 在eg页面输入框输入“asd”，然后手动跳转到eg1页面；",'            (2) 回到eg页面发现之前输入的"asd"依然保留，说明页面信息成功保存在内存中；',"  ","        3、keep-alive生命周期钩子函数：activated、deactivated","          使用keep-alive会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，需要在activated阶段获取数据，承担原来created钩子中获取数据的任务。","          被包含在 keep-alive 中创建的组件，会多出两个生命周期的钩子: activated 与 deactivated","            activated：在组件被激活时调用，在组件第一次渲染时也会被调用，之后每次keep-alive激活时被调用。","            deactivated：在组件被停用时调用。","          注意：只有组件被 keep-alive 包裹时，这两个生命周期才会被调用，如果作为正常组件使用，是不会被调用，以及在 2.1.0 版本之后，使用 exclude 排除之后，","          就算被包裹在 keep-alive 中，这两个钩子依然不会被调用！另外在服务端渲染时此钩子也不会被调用的。","  ","          什么时候获取数据？","            当引入keep-alive 的时候，页面第一次进入，钩子的触发顺序creat…ted，退出时触发deactivated。当再次进入（前进或者后退）时，只触发activated。","            我们知道 keep-alive 之后页面模板第一次初始化解析变成HTML片段…在重新解析而是读取内存中的数据，即，只有当数据变化时，才使用VirtualDOM进行diff更新。","          故，页面进入的数据获取应该在activated中也放一份。数据下载完毕手动操作DOM的部分也应该在activated中执行才会生效。","            所以，应该activated中留一份数据获取的代码，或者不要created部分，直接将created中的代码转移到activated中。","            ","        4、使用 router.meta 拓展","          假设这里有 3 个路由： A、B、C。","          需求：","            默认显示 A","            B 跳到 A，A 不刷新","            C 跳到 A，A 刷新","          实现方式","            在 A 路由里面设置 meta 属性：","              {","                path: '/',","                name: 'A',","                component: A,","                meta: {","                    keepAlive: true // 需要被缓存","                }","              }","            在 B 组件里面设置 beforeRouteLeave：","              export default {","                data() {","                    return {};","                },","                methods: {},","                beforeRouteLeave(to, from, next) {","                    // 设置下一个路由的 meta","                    to.meta.keepAlive = true;  // 让 A 缓存，即不刷新","                    next();","                }","              };","            在 C 组件里面设置 beforeRouteLeave：","              export default {","                data() {","                    return {};","                },","                methods: {},","                beforeRouteLeave(to, from, next) {","                    // 设置下一个路由的 meta","                    to.meta.keepAlive = false; // 让 A 不缓存，即刷新","                    next();","                }","              };","            这样便能实现 B 回到 A，A 不刷新；而 C 回到 A 则刷新。","  ","        5、vue实现前进刷新，后退不刷新 https://juejin.cn/post/6844903555657269261","      "]}},mounted:function(){console.log("vueKeepAliveBase")}},o=v,u=(a("9a94"),a("2877")),n=Object(u["a"])(o,i,r,!1,null,"463fd268",null);t["default"]=n.exports},6758:function(e,t,a){},"9a94":function(e,t,a){"use strict";a("6758")}}]);
//# sourceMappingURL=chunk-6b0490ae.54491a0b.js.map