import React from 'react'
import { useDispatch } from 'react-redux'
import { updateTodoStatus, updateTodoPriority } from '../store/action'

export default function TodoCard({ todo }) {
    const dispatch = useDispatch()

    const handleTaskDone = () => {
        dispatch(updateTodoStatus({ id: todo.id }))
    }

    const handleTodoPriorty = () => {
        dispatch(updateTodoPriority({ id: todo.id }))
    }

    return (
        <div className="bg-gray-100 dark:bg-gray-700 dark:border-gray-900 hover:shadow-lg p-5 last:rounded-b-lg border border-gray-300 flex items-center space-x-2 justify-between transition duration-500">
            <div className="space-x-3 flex items-center">
                <div>
                {
                    todo.done ? (
                        <div onClick={handleTaskDone} className="h-6 w-6 transition-colors duration-300 cursor-pointer opacity-75 hover:shadow hover:opacity-100 bg-green-600 text-gray-100 rounded-full border-2 border-green-300 dark:border-green-500 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    ) : (
                        <div onClick={handleTaskDone} className="cursor-pointer transition-colors duration-300 opacity-75 hover:shadow hover:opacity-100 h-6 w-6 rounded-full border-2 border-gray-300 dark:border-gray-500">
                        </div>
                    )
                }
                </div>
                <p onClick={handleTaskDone} className={todo.done ? "overflow-y-auto max-h-16 text-lg md:text-xl line-through text-gray-300 dark:text-gray-500 select-none transition-colors duration-500 cursor-pointer break-all" : "text-lg overflow-y-auto max-h-16 md:text-xl text-gray-500 dark:text-gray-300 select-none transition-colors duration-500 cursor-pointer break-all"}>{ todo.task }</p>
            </div>
            <div className="border-l-2 transition-colors duration-500 dark:border-gray-500 border-gray-300 pl-3 bg-red">
                <svg onClick={handleTodoPriorty} xmlns="http://www.w3.org/2000/svg" className={
                    todo.priority ? "h-7 w-7 text-yellow-400 cursor-pointer transition-colors duration-500" : "h-7 w-7 text-gray-500 hover:text-yellow-500 transition-colors duration-500 cursor-pointer"
                } fill={ todo.priority ? "currentColor" : "none" } viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            </div>
        </div>
    )
}
