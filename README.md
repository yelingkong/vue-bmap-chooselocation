# vue-bmap-chooselocation

> 仿写微信小程序chooselocation

## Build Setup

本插件代码源自于 https://blog.csdn.net/csu_passer/article/details/85218670

为了实践一下插件发布，便在此代码的基础上进行了简单的封装。

使用该插件前，需要index.html页面中引入百度地图js

百度ak获取地址 http://lbsyun.baidu.com/index.php?title=jspopular/guide/getkey

安装

```$xslt
npm install vue-bmap-chooselocation -S 

```

```$xslt
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=yourAK"></script>
```
```$xslt
<template>
  <div id="app">
    <div @click="showmap">选择地区</div>
    <vueBmapChooselocation ref="vueBmapChooselocation" @change="changeaddress"></vueBmapChooselocation>
  </div>
</template>

<script>
    import vueBmapChooselocation from 'vue-bmap-chooselocation';

    export default {
        name: 'app',
        components: {
            vueBmapChooselocation,
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            changeaddress(address, point) {
                console.log(address, point);
            },
            showmap() {
                // this.$refs.vuecity.show();
                this.$refs.vueBmapChooselocation.show();
            }
        }
    }
</script>


```
