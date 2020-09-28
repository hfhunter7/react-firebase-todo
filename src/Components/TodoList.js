import React from 'react'
import { List } from 'antd'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    const { todos, removeTodo } = props

    const removeTodoItem = (idx) => {
        removeTodo(idx)
    }

    return (
        <div style={{ width: '100%' }}>
            <List
                locale={{
                    emptyText: "ยังไม่มีรายการที่ต้องทำ"
                }}
                bordered
                dataSource={todos}
                renderItem={(todo, index) => (
                    <TodoItem
                        index={index}
                        todo={todo}
                        removeTodoItem={removeTodoItem}
                    />
                )}
                pagination={{
                    position: 'bottom',
                    pageSize: 10
                }}
            />
        </div>
    )
}

export default TodoList