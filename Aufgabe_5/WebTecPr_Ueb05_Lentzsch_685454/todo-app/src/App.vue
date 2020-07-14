<template>
  <div class ="has-background-dark">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:add-todo="addTodo"></create-todo>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo,
  },
  // data function avails data to the template
  data() {
    return {
      myStyle:{
            backgroundColor:"#111111",

            },
      todos: [{
        title: 'Project hochladen',
        description: 'Aufgabe_5',
        duration: '45',
        done: false,
      }, {
        title: 'Project stylen',
        description: 'Aufgabe_5',
        duration: '60',
        done: true,
      },{
        title: 'Project testen',
        description: 'Aufgabe_5',
        duration: '70',
        done: false,
      },{
        title: 'Project erneut testen',
        description: 'Aufgabe_5',
        duration: '10',
        done: false,
      }],
    };
  },
  methods: {
    addTodo(object) {
      this.todos.push(object);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
