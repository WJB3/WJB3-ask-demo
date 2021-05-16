<template>
  <div class="container">
    <div class="header">
      <div class="left">
        <img :src="logo" />
      </div>

      <div class="right">
        <dv-border-box-2 class="rightone">
          <div class="button-text">信息管理</div></dv-border-box-2
        >

        <dv-border-box-2 class="rightone margintop30"
          ><div class="button-text">MRP管理系统</div></dv-border-box-2
        >

        <div class="time">2020-05-16 16:00:00</div>
      </div>
      <div class="centertitle">
        <div class="title">PACK自动组装线</div>
      </div>
      <div class="lefttitle">
        <div class="title">信息管理</div>
      </div>
    </div>
    <div class="content" ref="rowItem">
      <dv-border-box-1 class="border-1">
        <div class="row" ref="row">
          <dv-border-box-6 class="row-item width3">
            <div class="title">
              <dv-digital-flop
                :config="{
                  number: [''],
                  content: `设备故障率`,
                }"
                style="width: 100%; height: 100%"
              />
            </div>
            <div class="content1">
              <dv-charts :option="options1[0]" />
            </div>
          </dv-border-box-6>
          <dv-border-box-6 class="row-item width3">
            <div class="title">
              <dv-digital-flop
                :config="{
                  number: [''],
                  content: `排除故障所需时间`,
                }"
                style="width: 100%; height: 100%"
              />
            </div>
            <div class="content1">
              <dv-charts :option="options1[0]" />
            </div>
          </dv-border-box-6>
        </div>
        <div class="row">
          <dv-border-box-6 class="row-item width3">
            <div class="title">
              <dv-digital-flop
                :config="{
                  number: [''],
                  content: `当周故障对比上一周`,
                }"
                style="width: 100%; height: 100%"
              />
            </div>
            <div class="content1">
              <dv-charts :option="options1[0]" />
            </div>
          </dv-border-box-6>
          <dv-border-box-6 class="row-item width3">
            <div class="title">
              <dv-digital-flop
                :config="{
                  number: [''],
                  content: `当周故障所需时间对比上一周`,
                }"
                style="width: 100%; height: 100%"
              />
            </div>
            <div class="content1">
              <dv-charts :option="options1[0]" />
            </div>
          </dv-border-box-6>
        </div>
        <dv-border-box-6
          class="row-extra width3 row-item"
          :style="{
            top: distance,
            bottom: distance,
            height: `calc(100% - ${
              2 * distance.substr(0, distance.length - 2)
            }px )`,
          }"
        >
          <div class="title">
            <dv-digital-flop
              :config="{
                number: [''],
                content: `设备故障率`,
              }"
              style="width: 100%; height: 100%"
            />
          </div>
          <div class="content1">
            <dv-scroll-board
              :config="data1"
              style="width: 100%; height: 98%;"
            />
          </div>
        </dv-border-box-6>
      </dv-border-box-1>
    </div>
  </div>
</template>

<script>
const logo = require("../assets/logo_1688.png");
import options1 from "./options";
let data1 = [
  ["行1列1", "行1列2", "行1列3"],
  ["行2列1", "行2列2", "行2列3"],
  ["行3列1", "行3列2", "行3列3"],
  ["行4列1", "行4列2", "行4列3"],
  ["行5列1", "行5列2", "行5列3"],
  ["行6列1", "行6列2", "行6列3"],
  ["行7列1", "行7列2", "行7列3"],
  ["行8列1", "行8列2", "行8列3"],
  ["行9列1", "行9列2", "行9列3"],
  ["行10列1", "行10列2", "行10列3"],
];

export default {
  data() {
    return {
      echarts: {
        width: 0,
        height: 0,
      },
      data1: {
        data: data1,
        index: true,
      },
      distance: "0px",
      alias: `号机`,
      logo: logo,
      options1,
    };
  },
  mounted: function () {
    const self = this;
    self.computedRowItem();
    window.addEventListener("resize", () => {
      self.computedRowItem();
    });
  },
  methods: {
    computedRowItem: function () {
      this.top = this.$refs.row.getBoundingClientRect();
      this.rowtop = this.$refs.rowItem.getBoundingClientRect();
      this.rowto1p = getComputedStyle(this.$refs.row);

      console.log(this.top);
      console.log(this.rowtop);

      this.distance = this.rowto1p["padding"];
      console.log(this.distance);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 24%;
  padding: 1%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.header .center {
}
.header .center .text {
  font-size: 40px;
  color: #3de7c9;
}
.content {
  width: 98%;
  height: 75%;
  margin-left: 1%;
  margin-bottom: 1%;
}
.border-1 {
  /* padding: 1%; */
}
.row {
  display: flex;
  height: 50%;
  padding: 1%;
  box-sizing: border-box;
}
.width3 {
  width: 33.3333333333%;
}
.first-1 {
}
.row-item {
  padding: 1%;
  box-sizing: border-box;
}
.row-item .title {
  height: 10%;
}
.row-item .content1 {
  height: 88%;
}
.row-extra {
  display: flex;
  height: 98%;
  box-sizing: border-box;
  top: 2%;
  position: absolute;
  right: 1%;
}
.row-extra .title {
  height: 5%;
}
.row-extra .content1 {
  height: 95%;
}
.right {
  width: 380px;
  position: relative;
}
.rightone {
  width: 138px;
  height: 44px;
}
.rightone .button-text {
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.margintop30 {
  margin-top: 30px;
}
.time {
  font-size: 20px;
  color: #3de7c9;
  position: absolute;
  right: 0;
  top: 0;
}
.centertitle {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
}
.lefttitle {
  position: absolute;
  font-size: 40px;
  color: #3de7c9;
  left: 1%;
  bottom: 1%;
}
.centertitle {
  display: flex;
  font-size: 30px;
  color: #3de7c9;
  height: 80%;
  flex-direction: column;
  width: 50%;
}
.centertitle .title {
  font-size: 42px;
  text-align: center;
}
.centertitle .wrapper {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>
