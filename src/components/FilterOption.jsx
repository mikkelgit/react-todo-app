import React from 'react'

export default function FilterOption({ option, filterTodos, setFilterTodos }) {
    return (
        <div onClick={() => setFilterTodos(option)} className={
            filterTodos === option ? (
                "cursor-pointer w-full transition-colors duration-300 border border-green-300 dark:bg-green-600 dark:border-green-700 bg-green-500 text-white dark:text-gray-100 md:w-20 px-5 py-1 rounded-lg justify-center flex flex-grow"
            ) : (
                "cursor-pointer w-full transition-colors duration-300 border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-800 dark:text-gray-200 md:w-20 px-5 py-1 rounded-lg justify-center flex flex-grow"
            )
        }>
            <p className="font-semibold select-none opacity-90" >{ option}</p>
        </div>
    )
}
