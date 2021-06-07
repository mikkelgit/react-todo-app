import React, { useState } from "react";
import { useSelector } from 'react-redux'
import TodoInput from './components/TodoInput'
import TodoCard from './components/TodoCard'
import CardFilter from './components/CardFilter'
import EmptyTodoPlaceholder from './components/EmptyTodoPlaceholder'
import filterData from './helpers/filterData'

export default function App() {
    const todos = useSelector(state => state.todos)
    const [filterTodos, setFilterTodos] = useState('All')

    return (
        <div className="bg-gray-300 min-h-screen py-10 md:py-20 lg:px-48 xl:px-64 px-2 dark:bg-gray-900 duration-700">
            <div className="container mx-auto space-y-5 md:space-y-8">
                <TodoInput />
                <div className="md:px-12">
                    <CardFilter filterTodos={filterTodos} setFilterTodos={setFilterTodos} />
                    {
                        filterData(todos, filterTodos).length? (
                            filterData(todos, filterTodos).map(todo => <TodoCard key={todo.id} todo={todo} />)
                        ) : (
                            <EmptyTodoPlaceholder />
                        )
                    }
                </div>
            </div>
        </div>
    )
}