<template>
  <div class="hello">
    <button @click="goToCSS3()" >gotoCSS3</button>
    <button @click="goToDoList()" >goToDoList</button>
    <button @click="goLayout()" >goLayout</button>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      oneNumber: 1,
      twoNumber: 2
    }
  },
  mounted() {
    console.log(typeof this.oneNumber)
  },

  computed: {
    sumNumber: function() {
      console.log(this.oneNumber)

      return this.oneNumber + this.twoNumber
    }
  },
  methods:{
    goToCSS3:function(){
      this.$router.push("/goToCSS3")
    },
    goToDoList(){
      this.$router.push("/goToDoList")
    },
    goLayout(){
      this.$router.push("/goLayout")
    }
  }
}
</script>

<style scoped>
</style>
