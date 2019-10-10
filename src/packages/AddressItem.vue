<template>
  <div class="mpas_items">
    <div class="weizhi">
      <p class="title">{{title}}</p>
      <p class="address">{{address}}</p>
    </div>
    <div v-if="checked" class="map_select">
      <i class="icon iconfont icon-xuanze xuanze"></i>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            address: {
                type: String,
                default: ''
            },
            checked: {
                type: Boolean,
                default: false
            },
        },
        data: function () {
            return {
                name2: this.name,
            }
        },
        methods: {
            clear() {
                this.name2 = '';
            },
        },
        watch: {
            name: function (val) {
                this.name2 = this.name;
            },
            name2: function (val) {
                console.log(this.name2);
                this.$emit('change', this.name2)
            }
        },
    }
</script>
<style lang="less" scoped>
  @import url('https://at.alicdn.com/t/font_1450071_2k03ofa1d9w.css');

  * {
    margin: 0;
    padding: 0;
  }

  .mpas_items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    width: 94%;
  }

  .map_select {
    margin-right: 10px;
  }

  .weizhi {
    padding: 8px;
    border-bottom: 1px solid #f5f5f5;

    .title {
      font-size: 16px;
      margin-bottom: 5px;
    }

    .address {
      font-size: 14px;
    }

  }

  .icon-xuanze {
    font-size: 20px;
    color: #0f96db;
  }

  .xuanze {
    color: #0f96db;
  }
</style>
