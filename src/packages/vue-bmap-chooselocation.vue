<template>
  <div>
    <div class="ys-map">
      <div class="map-wrapper">
        <div id="map"></div>
        <i class="icon iconfont icon-weizhi position"></i>
        <i class="icon iconfont icon-dingwei nowposition" @click="locate"></i>
      </div>

      <div id="tips">
        <AddressItem :title="'当前位置'" @click.native="selectAddress(currentAddress,-1)" :checked="checked==-1"
                     :address="currentAddress"
                     :extra="'(以图上标记位置为准)'"/>
        <AddressItem v-for="(item,index) in potentialLocation" v-bind:key="index"
                     :title="item.title"
                     :address="item.address" :checked="index==checked" @click.native="selectAddress(item,index)"/>
        <!--            <div v-if="potentialLocation.length===0">{{point.lng}},{{point.lat}}</div>-->
      </div>
      <div class="ys-search-address">
        <i class="icon iconfont icon-back back" @click="onBackClick"></i>
        <div class="ys-search-wrapper">
          <i class="icon iconfont icon-search searchico" @click="searchValue=''"></i>
          <input type="text" v-model="searchValue" id="suggestId" placeholder="定位不准？试试手动输入">
          <i class="icon iconfont icon-close clear" @click="searchValue=''"></i>
        </div>
        <a class="okBtn" href="javascript:;" @click="onOkClick">确定</a>
      </div>
      <div class="search-tips" id="result">
        tips
      </div>
    </div>
  </div>
</template>

<script>
    import AddressItem from "../packages/AddressItem";

    export default {
        name: 'vue-bmap-chooselocation',
        components: {AddressItem},
        mounted() {
        },
        props: {
            isshow: {
                type: Boolean,
                default: false
            },
        },
        watch: {
            isshow: function (val) {
                this.show();
            },
        },
        methods: {
            itemchecked(e) {
                this.checked = e;
            },
            show() {
                this.showstatus = true;
                this.$nextTick(() => {
                    this.initMaps();
                    this.locate();
                    this.getSuggestion();
                })
            },
            hide() {
                this.showstatus = false;
            },
            initMaps() {
                this.map = new BMap.Map("map");
                let mPoint = new BMap.Point(116.404, 39.915);//Tiananmen Square
                this.map.centerAndZoom(mPoint, 18);
                this.map.addEventListener("click", this.onMapClicked);
                this.map.addEventListener('dragend', () => {
                    let pixel = this.map.pointToOverlayPixel(this.map.getCenter());
                    let point = this.map.overlayPixelToPoint({x: pixel.x, y: pixel.y});
                    this.analyze(point);
                })
            },
            locate() {
                let map = this.map;
                let geolocation = new BMap.Geolocation();
                const vm = this;
                geolocation.getCurrentPosition(function (r) {
                    if (this.getStatus() === BMAP_STATUS_SUCCESS) {
                        let mk = new BMap.Marker(r.point);
                        map.addOverlay(mk);
                        map.panTo(r.point);
                        vm.analyze(r.point);
                    } else {
                        console.log('failed ', this.getStatus());
                    }
                });
                //loading--
            },
            getAroundPOI(keyword) {
                let map = this.map;
                let mPoint = new BMap.Point(this.point.lng, this.point.lat);//h5 112.983323,28.141431
                let vm = this;
                let local = new BMap.LocalSearch(map, {
                    onSearchComplete(results) {
                        if (local.getStatus() === BMAP_STATUS_SUCCESS) {
                            let temp = [];
                            results.forEach(item => {
                                temp = temp.concat(item.Br);
                            });
                            vm.potentialLocation = temp;
                        } else {
                            console.warn("get poi error ,code -> ", local.getStatus());
                        }
                    }
                });
                local.searchNearby(keyword, mPoint, 1000);
            },
            /**
             * Attention: 解析地址会有异常--有时候会解析正确，有时候只会解析到区
             * @param point lng and lat
             */
            analyze(point) {//point:{lat:"",lng:""}
                const geoc = new BMap.Geocoder();
                geoc.getLocation(point, rs => {
                    this.point = rs.point;//===r.point
                    this.currentAddress = rs.address;
                    this.poiKeyword = rs.street || rs.address;
                });
            },
            /**
             * search tips
             */
            getSuggestion() {
                let ac = new BMap.Autocomplete({"input": "suggestId", "location": this.map});
                ac.addEventListener("onconfirm", e => {
                    let _value = e.item.value;
                    this.searchValue = _value.province + _value.city + _value.district + _value.street + _value.business;
                    this.setPlace(this.searchValue);
                });
            },
            selectAddress(item, index) {
                this.checked = index;
                console.log(this.checked);
                console.log(item);
                //todo: return item the same as onOkClicked function
            },
            setPlace(val) {
                let map = this.map;
                map.clearOverlays();
                const vm = this;
                let local = new BMap.LocalSearch(map, {
                    onSearchComplete() {
                        let pp = local.getResults().getPoi(0).point;
                        map.centerAndZoom(pp, 18);
                        map.addOverlay(new BMap.Marker(pp));
                        vm.analyze(pp);
                    }
                });
                local.search(val);
            },
            onMapClicked(e) {
                console.log(e);//todo: get point with dialog and return
            },
            onBackClick() {
                this.hide();
            },
            onOkClick() {
                if (this.checked == -1) {
                    console.log("已选中当前位置!");
                    console.log(this.currentAddress, this.point)
                    this.$emit('change', this.currentAddress, this.point);
                    this.hide();
                } else {
                    console.log(this.potentialLocation[this.checked].address, this.potentialLocation[this.checked].point)
                    this.$emit('change', this.potentialLocation[this.checked].address, this.potentialLocation[this.checked].point);
                    this.hide();
                }
            }
        },
        data() {
            return {
                showstatus: false,
                checked: -1,
                map: null,
                searchValue: "",
                currentAddress: "",
                point: {},
                poiKeyword: "",
                potentialLocation: [],
            }
        },
        watch: {
            poiKeyword(n) {
                this.getAroundPOI(["栋", "店", "小区", "学校", "餐饮", n]);
            }
        }
    }
</script>

<style lang="less" scoped>
  @import url('https://at.alicdn.com/t/font_1450071_2k03ofa1d9w.css');

  * {
    margin: 0;
    padding: 0;
  }

  input {
    outline: none;
  }

  .ys-map {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    background: #fff;

    .map-wrapper {
      height: 50%;
      position: relative;

      #map {
        height: 100%;
      }

      img {
        width: 20px;
        object-fit: contain;
      }

      .position {
        position: absolute;
        left: 50%;
        font-size: 30px;
        color: #0e96da;
        top: 50%;
        transform: translate(-50%, -75%); //The bottom of the icon is centered,75  = 50(center) + 25(top)
        z-index: 100;
        width: 20px;
      }

      .nowposition {
        position: absolute;
        right: 20px;
        bottom: 20px;
        z-index: 100;
        width: 20px;
        font-size: 30px;
        color: #0e96da;
      }

    }

    #tips {
      width: 100%;
      height: 50%;
      overflow-y: scroll;
      position: relative;
      padding: 1px 12px;
    }

    .ys-search-address {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 60px;
      background: #f2f2f2;
      padding: 8px 0;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .back {
        width: 20px;
        object-fit: contain;
      }

      .okBtn {
        background: #e51c23;
        padding: 6px 10px;
        color: #fff;
        border-radius: 8px;
        font-size: 14px;
        text-decoration: none;
      }

      .ys-search-wrapper {
        width: 70%;
        border-radius: 20px;
        background: rgba(0, 0, 0, .06);

        display: flex;
        align-items: center;

        input {
          font-size: 14px;
        }

        .searchico {
          width: 24px;
          fill: #bbbbbb;
          color: #bbbbbb;
          margin-left: 10px;
          font-size: 20px;
          color: #bbbbbb;
        }

        .clear {
          margin-right: 10px;
          font-size: 20px;
          color: #bbbbbb;
        }

        input {
          padding: 8px 12px;
          background: transparent;
          border: none;
          width: 80%;
          height: 100%;
        }

        img {
          width: 12px;
          object-fit: contain;
        }
      }
    }

    .search-tips {
      position: absolute;
      left: 0;
      top: 50px;
      background: rgba(255, 255, 255, .8);
      border: 1px solid #C0C0C0;
      height: auto;
      display: none;
    }
  }
</style>
