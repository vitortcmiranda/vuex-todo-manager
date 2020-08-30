import axios from 'axios'

const state = {
    todos : [],
    limit: 0
}

const getters = {
    allTodos: (state) => state.todos,
    todosCount:(state) => {
        return Object.keys(state.todos).length
    }
}

const actions = {
    async fetchTodos({ commit }){
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos')
        commit('setTodos', response.data)
        console.log('fetching todos')
    },
    async addTodo({ commit }, title){
        const response = await axios.post('http://jsonplaceholder.typicode.com/todos',{title, completed: false})

        commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id){
        await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id)
    },
    async filterTodos({ commit }, e) {
        // get the selected number 
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        commit('filterTodo',limit)
    },
    async filterTodosN({ commit }, val) {
        // get the selected number
        const limit = parseInt(val) 
        commit('filterTodo',limit)
    },
    async clearAll({ commit }) {
        commit('clearAll')
    },
    async updateTodo({ commit }, updTodo) {
        const response = await axios.put(`http://jsonplaceholder.typicode.com/todos/${updTodo.id}`)
        commit('updTodo',response)

    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),   
    newTodo: (state, todo) => state.todos.unshift(todo),
    filterTodo: (state, limit) => state.todos = state.todos.filter(todo => todo.id <= limit),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !==id),
    clearAll: (state) => state.todos = [],
    updTodo: (state,updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)
        console.log(index)
        // if(index !== -1)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}