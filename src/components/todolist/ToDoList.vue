<template>
  <div class="hello">
    <input v-model="text" />
    <button @click="handleSubmit">提交</button>
    <ul>
      <todo-list
        v-for="(iterm,index) in list"
        :key="index"
        :index="index"
        :content="iterm"
        @delete="handleDelete"
      ></todo-list>
    </ul>
  </div>
</template>

<script>
import ToDo_List_Li from "../todolist/ToDo_List_Li";
export default {
  components: {
    "todo-list": ToDo_List_Li
  },
  data() {
    return {
      text: "",
      list: []
    };
  },
  methods: {
    handleSubmit() {
      this.list.push(this.text);
      this.text = "";
    },
    handleDelete(index) {
      console.log(index)
      this.list.splice(index,1);
    }
  }
};
</script>

<style scoped>
</style>
