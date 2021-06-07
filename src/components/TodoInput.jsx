import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewTodo, clearTodo } from '../store/action'

export default function TodoInput() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const [inputTodo, setInputTodo] = useState('')
    const [formError, setFormError] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const handleSubmit = () => {
        if (inputTodo) {
            const todoData = {
                id: todos.length ? todos[todos.length - 1].id + 1 : 1,
                task: inputTodo,
                done: false
            }
            dispatch(addNewTodo(todoData))
            setInputTodo('')
        } else {
            setFormError(true)
            setTimeout(() => {
                setFormError(false)
            }, 1000);
        }
    }

    const handleClearTodo = () => {
        dispatch(clearTodo())
    }

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark')
            setDarkMode(false)
        } else {
            document.documentElement.classList.add('dark')
            setDarkMode(true)
        }
    }

    return (
        <div className={
            formError ? (
                "bg-red-100 dark:bg-red-800 dark:border-red-900 border-2 border-red-500 p-1 md:p-3 flex space-x-3 rounded-2xl hover:shadow-lg focus-within:shadow-lg transition duration-300"
            ) : (
                "bg-gray-100 dark:bg-gray-700 border-2 border-opacity-0 border-gray-500 p-1 md:p-3 flex space-x-3 rounded-2xl hover:shadow-lg focus-within:shadow-lg transition duration-300"
            )
        }>
            <div className="flex items-center">
                <svg onClick={toggleDarkMode} xmlns="http://www.w3.org/2000/svg" className="dark:hover:bg-gray-600 dark:text-gray-200 dark:bg-gray-500 text-gray-800 h-8 w-8 md:h-10 md:w-10 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 cursor-pointer p-2 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                    darkMode ? (
                        "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ) : (
                        "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    )
                } />
                </svg>
            </div>
            <input disabled={
                formError ? true : false
            } className="flex-grow p-2 w-16 outline-none bg-transparent text-gray-700 dark:text-gray-200" onChange={(e) => setInputTodo(e.target.value)} onKeyUp={(e) => e.key === 'Enter' ? handleSubmit() : null} value={inputTodo} type="text" placeholder={
                formError ? "Task Title Cannot Be Empty" : "Create New Task"
            } />
            <div className="flex items-center space-x-2 border-l-2 border-gray-300 transition-colors duration-500 dark:border-gray-500 pl-3">
                <svg onClick={handleSubmit} xmlns="http://www.w3.org/2000/svg" className="dark:text-gray-200 dark:bg-gray-500 dark:hover:bg-gray-600 text-gray-500 h-8 w-8 md:h-10 md:w-10 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 cursor-pointer p-2 rounded-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <svg onClick={handleClearTodo} xmlns="http://www.w3.org/2000/svg" className="dark:text-gray-200 dark:bg-red-700 dark:hover:bg-red-800 text-red-200 h-8 w-8 md:h-10 md:w-10 bg-red-400 hover:bg-red-500 transition-colors duration-300 cursor-pointer p-2 rounded-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
        </div>
    )
}
