<template>
<div>
  <div>
    <h1 style="text-align:center">Todo Application</h1>
  </div>
  <div>
    
    <h2 style="color:#111111">Completed: {{todos.filter(todo => {return todo.done === true}).length}}</h2>
    <h2 style="color:#111111">Need to be done: {{todos.filter(todo => {return todo.done === false}).length}}</h2>
    <todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" :todo.sync="todo"></todo>
  </div>
</div>

  
</template>

<script type = "text/javascript" >

import Todo from './Todo';

export default {
  props: ["todos"],
  components: {
    Todo
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      if (this.todos[todoIndex].done == true) {
        this.todos[todoIndex].done = false;
      } else {
        this.todos[todoIndex].done = true;
      }
    }
  }
};
</script>
