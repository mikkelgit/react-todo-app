import React from 'react'
import FilterOption from './FilterOption'

const filterOptions = ['All', 'Todo', 'Done', 'Priority']

export default function CardFilter({ filterTodos, setFilterTodos }) {
    return (
        <div className="bg-gray-200 dark:bg-gray-800 dark:border-gray-900 hover:shadow-lg transition duration-500 p-3 first:rounded-t-lg last:rounded-b-lg border border-gray-300 md:flex md:space-x-5 space-y-1">
            {
                filterOptions.map((option, i) => <FilterOption key={i} option={option} filterTodos={filterTodos} setFilterTodos={setFilterTodos} />)
            }
        </div>
    )
}
