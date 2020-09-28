import React from 'react'
import { List, Popconfirm, Button, Tag} from 'antd'

const TodoItem = (props) => {
    const { todo,index,removeTodoItem } = props
    return (
        <div>
            <List.Item
      actions={[
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => removeTodoItem(index)}
        >
          <Button type="danger">
            ลบ
          </Button>
        </Popconfirm>,
      ]}
      key={index}
    >
      <div>
        <Tag color={todo.isComplete ? 'cyan' : 'red'}>
          {todo.todoName}
        </Tag>
      </div>
    </List.Item>
        </div>
    )
}

export default TodoItem