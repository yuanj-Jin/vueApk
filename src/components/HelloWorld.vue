<template>
  <div class="hello">
    <musicSearch></musicSearch>
    <group-title class="card_title">我的音乐</group-title>
    <grid>
      <grid-item :label="九宫格" v-for="i in 2" :key="i">
        <img slot="icon" src="../assets/grid_icon.png" />
      </grid-item>
    </grid>
    <group-title class="card_title">最近播放</group-title>
    <grid :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item link="/component/cell" :label="跳转到Cell">
        <img slot="icon" src="../assets/grid_icon.png" />
      </grid-item>
      <grid-item :link="{ path: '/component/cell'}" :label="跳转到Cell">
        <img slot="icon" src="../assets/grid_icon.png" />
      </grid-item>
    </grid>
    <group-title class="card_title">歌单</group-title>
    <grid :show-lr-borders="false">
      <grid-item :label="九宫格" v-for="i in 144" :key="i">
        <img slot="icon" src="../assets/grid_icon.png" />
      </grid-item>
    </grid>
    <musicHallEntrace @click="MusicHall()"></musicHallEntrace>
  </div>
</template>


<script>
import { Grid, GridItem, GroupTitle } from "vux";
import musicSearch from "./search/MusicSearch";
import musicHallEntrace from './MusiHallEntrace'

export default {
  components: { musicSearch,musicHallEntrace, Grid, GridItem, GroupTitle },
  name: "",
  data() {
    return {

      sidebarStyle: {
        backgroundColor: "purple",
        float: "left",
        width: "100px",
        // transform: translate(50px,100px);
        whiteSpace: "nowrap",
        overflow: "hidden",
        "-webkit-transition": "",
        "border-radius": "50%"
      }
    };
  },
  computed: {},
  methods: {
    onItemClick() {
      console.log("on item click");
    },
    musicHall() {
      console.log("on musicHall click");
    },
  }
};
</script>

<style scoped lang='less'>
.card_title {
  /* background-color: darkmagenta; */
  text-align: left;
}

</style>
