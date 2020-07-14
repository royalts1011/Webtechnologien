<template>
<div class ="has-background-dark">
<div>
  <div>
      <section>
    <nav class="navbar has-background-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <h1 class="title is-1 has-text-white-ter">Todo App</h1>
        </a>
      </div>
      <div id="navbarBasic" class="navbar-menu">
        <div class="navbar-start"></div>

        <div class="navbar-end">
          <a class="navbar-item has-text-white-ter" >
            <h2 style="color:#white">Completed: {{todos.filter(todo => {return todo.done === true}).length}}</h2>
          </a>
          <a class="navbar-item has-text-white-ter">
            <h2 style="color:#white">Need to be done: {{todos.filter(todo => {return todo.done === false}).length}}</h2>
          </a>
          <div class="navbar-item">
          </div>
        </div>
      </div>
    </nav>
  </section>
  </div>
  <div>
    <todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" :todo.sync="todo"></todo>
  </div>
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
