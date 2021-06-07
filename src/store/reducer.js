import {
    ADD_TODO,
    UPDATE_TODO_STATUS,
    CLEAR_TODO,
    UPDATE_TODO_PRIORITY
} from './action'

const initialState = {
    todos: [
        {
            id: 1,
            task: 'Mengerjakan Holiday Challenge',
            done: false,
            priority: false
        },
        {
            id: 2,
            task: 'Mengerjakan Entertainme Client Side',
            done: true,
            priority: true
        }
    ]
}

function reducer (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case ADD_TODO:
            return { ...state, todos: state.todos.concat(payload) }
        case UPDATE_TODO_STATUS:
            return { ...state, todos: state.todos.map(todo => {
                if (payload.id === todo.id) {
                    return { ...todo, done: !todo.done }
                }
                return todo
            }) }
        case CLEAR_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.done === false) }
        case UPDATE_TODO_PRIORITY:
            return { ...state, todos: state.todos.map(todo => {
                if (payload.id === todo.id) {
                    return { ...todo, priority: !todo.priority }
                }
                return todo
            }) }
        default:
            return state
    }
}

export default reducer