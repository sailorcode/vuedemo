<template>
  <div id="todo">
    <input type="text" v-model='todo' @keydown.enter="addTodo()"/>
    <br>
    <hr>
    <p>已计划</p>
    <ul>
      <li v-for="(item,key) in todoList" v-if="!item.checked">
       <input type="checkbox" v-model="item.checked"/> {{item.title}} <button @click="removeData(key)">删除</button>
      </li>
    </ul>
    <p>已完成</p>
    <ul>
      <li v-for="(item,key) in todoList" v-if="item.checked">
        <input type="checkbox" v-model="item.checked"/> {{item.title}} <button @click="removeData(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      todo: "",
      todoList: []
    };
  },
  methods: {
    addTodo() {
      this.todoList.push({
        title:this.todo,
        checked:false
      });
    },
    removeData(key){
      alert(key);
      this.todoList.splice(key,1)
    }
  }
};
</script>