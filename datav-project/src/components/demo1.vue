<template>
  <div class="container">
    <div class="header">
      <div class="left">
        <img :src="logo" />
      </div>

      <div class="right">
        <dv-border-box-2 class="rightone">
          <div class="button-text" @click="handleRoute">信息管理</div></dv-border-box-2
        >

        <dv-border-box-2 class="rightone margintop30"
          ><div class="button-text">MRP管理系统</div></dv-border-box-2
        >

        <div class="time">2020-05-16 16:00:00</div>
      </div>
      <div class="centertitle">
        <div class="title">PACK自动组装线</div>
        <div class="wrapper">
          <div>总产量</div>
          <div>良品</div>
          <div>不良品</div>
        </div>
      </div>
    </div>
    <div class="content">
      <dv-border-box-1 class="border-1">
        <div class="row" ref="row">
          <dv-border-box-6
            class="row-item"
            v-for="(item, index) in [1, 2, 3, 4]"
            :key="index"
          >
            <div class="title">
              <dv-digital-flop
                :config="{
                  number: [item],
                  content: `{nt}${alias}`,
                }"
                style="width: 100%; height: 100%"
              />
            </div>
            <div class="content1">
              <dv-scroll-board
                :config="data1"
                style="width: 100%; height: 100%"
              />
            </div>
          </dv-border-box-6>
        </div>
        <div class="row">
          <dv-border-box-6
            class="row-item"
            v-for="(item, index) in [5, 6, 7, 8]"
            :key="index"
          >
            <div class="title">
              <dv-digital-flop
                :config="{
                  number: [item],
                  content: `{nt}${alias}`,
                }"
                style="width: 100%; height: 100%"
              />
            </div>
            <div class="content1">
              <dv-scroll-board
                :config="data1"
                style="width: 100%; height: 100%"
              />
            </div>
          </dv-border-box-6>
        </div>
      </dv-border-box-1>
    </div>
  </div>
</template>

<script>
const logo = require("../assets/logo_1688.png"); 
let data1 = [
  ["行1列1", "行1列2行1列2行1列2行1列2行1列2行1列2行1列2" ],
  ["行2列1", "行2列2" ],
  ["行3列1", "行3列2"],
  ["行4列1", "行4列2"],
  ["行5列1", "行5列2"],
  ["行6列1", "行6列2"],
  ["行7列1", "行7列2"],
  ["行8列1", "行8列2"],
  ["行9列1", "行9列2"],
  ["行10列1", "行10列2"],
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
      alias: `号机`,
      logo: logo,
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
      console.log(this.$refs.row.clientWidth);
    },
    handleRoute:function(){
        this.$router.push('/demo2')
    }
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
.centertitle {
  display: flex;
  font-size: 30px;
  color: #3de7c9;
  height: 80%;
  flex-direction: column;
  width: 50%;
}
.centertitle .title{
    font-size: 42px;
    text-align: center;
}
.centertitle .wrapper{
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom:0px;
    width:100%;
} 
</style>
