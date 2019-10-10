<template>
  <div id="app">
    <div @click="showmap">选择地区</div>
    <vueBmapChooselocation ref="vueBmapChooselocation" @change="changeaddress"></vueBmapChooselocation>
  </div>
</template>

<script>
    import vueBmapChooselocation from '../src/packages/vue-bmap-chooselocation';

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

