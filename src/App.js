import React, { useState } from 'react';
import { PageHeader, Row, Col, message, Card } from 'antd';
import './main.css'
import AddTodoForm from './Components/AddTodoForm';
import TodoList from './Components/TodoList';
import _ from 'lodash'

function App() {
  const [todos, setTodos] = useState([])

  const addTodos = (data) => {
    setTodos(prevState => {
      prevState.push(data)
      return [...prevState]
    })
  }

  const removeTodo = (idx) => {
    setTodos(prevState => {
      _.remove(prevState, (item, index) => {
        return index === idx
      })

      return [...prevState]
    })
  }

  const setUpdateIsComplete = (checked, index) => {
    setTodos(prevState => {
      prevState.forEach((item, idx) => {
        if (idx === index) {
          prevState[index].isComplete = checked
        }
      })

      return [...prevState]
    })

    message.success('Update ข้อมูลเรียบร้อย')
  }

  return (
    <div className="main-div">
      <Card>
        <PageHeader
          title="Levi Ackerman"
          className="site-page-header"
          subTitle="Captain Levi"
          avatar={{ src: 'https://i.pinimg.com/originals/f9/95/c7/f995c7831c5a914ed1eca429bd333b07.png' }}
        >
          <Row gutter={8}>
            <Col span={18}>
              <Row justify="center" style={{ marginBottom: 15 }}>
                <span>
                  รายการสิ่งที่ต้องทำ
            </span>
              </Row>
              <Row style={{ marginBottom: 15 }}>
                <AddTodoForm addTodos={addTodos} todos={todos} />
              </Row>
              <Row style={{ marginBottom: 15 }}>
                <TodoList todos={todos} removeTodo={removeTodo} setUpdateIsComplete={setUpdateIsComplete} />
              </Row>
            </Col>
            <Col span={6}>
              <Row justify="center">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="data:image/jpeg;base64,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" />}
                >
                  <Card.Meta title="Captain Levi" description="Coming soon attack on titan the final season" />
                </Card>
              </Row>
            </Col>
          </Row>
        </PageHeader>
      </Card>
    </div>
  );
}

export default App;
