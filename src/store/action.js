export const ADD_TODO = 'todos/addNewTodo'
export const UPDATE_TODO_STATUS = 'todos/updateTodoStatus'
export const CLEAR_TODO = 'todos/clearTodo'
export const UPDATE_TODO_PRIORITY ='todos/updateTodoPriority'

export function addNewTodo (payload) {
    return { type: ADD_TODO, payload }
}

export function updateTodoStatus (payload) {
    return { type: UPDATE_TODO_STATUS, payload }
}

export function clearTodo () {
    return { type: CLEAR_TODO }
}

export function updateTodoPriority (payload) {
    return { type: UPDATE_TODO_PRIORITY, payload }
}