<template>
  <div id="app">
    <div class="container">
      <addTodos />
      <FilterTodos/>
      <todos/>
    </div>
  </div>
</template>

<script>
import addTodos from './components/addTodo.vue'
import Todos from './components/todos.vue'
import FilterTodos from './components/filtertodos.vue'

export default {
  name: 'App',
  components: {
    Todos,
    addTodos,
    FilterTodos
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
