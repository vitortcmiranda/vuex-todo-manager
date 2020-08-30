<template>
  <div>
    filter todos:
    <select name id @change="filterTodos($event)" v-model="filterValue">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  data() {
    return {
      filterValue: 0,
    };
  },
  methods: {
    ...mapActions(['filterTodos']),
  },
  computed: {
    todosCount () {
      return this.$store.getters.todosCount
    }
  },
  watch: {
    filterValue: function(val) {
      if (this.todosCount < val) {
        this.$store.dispatch('fetchTodos');
        this.$store.dispatch('filterTodosN',val)
      }
    },
  },
};
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
