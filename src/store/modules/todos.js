import axios from 'axios'

const state = {
    todos : []
}

const getters = {
    allTodos: (state) => state.todos
}

const actions = {
    async fetchTodos({ commit }){
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos')
        commit('setTodos', response.data)
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
        const array = ['']
        for (let index = 0; index < limit; index++) {      
            array.push(state.todos[index])            
        }
        commit('setTodos',array)
    },
    async clearAll({ commit }) {
        commit('clearAll')
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    filterTdoos: (state, limit) => (state.todos = state.todos.map(function(x){
        for (let index = 0; index < limit; index++) {
            x = state.todo.todo[index]
            return x
        }
    })),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !==id),
    clearAll: (state) => state.todos = []
}

export default {
    state,
    getters,
    actions,
    mutations
}