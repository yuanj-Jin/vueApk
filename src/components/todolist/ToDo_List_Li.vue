<template>
      <li @click="fnDelete()">{{content}}|{{index}}</li>
</template>

<script>
export default {
      props:['index','content'],//接收父组件参数
      methods:{
            fnDelete(){
                  this.$emit('delete',this.index)//向父组件传递参数
            }
      }
};
</script>

<style scoped>
</style>
