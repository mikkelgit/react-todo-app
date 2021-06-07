import React from 'react'

export default function EmptyTodoPlaceholder() {
    return (
        <div className="bg-gray-100 dark:bg-gray-700 dark:border-gray-900 hover:shadow-lg p-5 rounded-b-lg border border-gray-300 space-x-2 transition duration-500">
            <div className="select-none flex justify-center items-center space-x-3 text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p className="font-bold opacity-75 text-lg lg:text-xl">No Task Found</p>
            </div>
        </div>
    )
}
