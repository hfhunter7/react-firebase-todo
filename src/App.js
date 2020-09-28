import React, { useState } from 'react';
import { PageHeader, Typography, Row, Col } from 'antd';
import './main.css'
import AddTodoForm from './Components/AddTodoForm';
import TodoList from './Components/TodoList';
import _ from 'lodash'

const { Paragraph } = Typography;

const IconLink = ({ src, text }) => (
  <a className="example-link" href="/">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const content = (
  <>
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level color system and a
      product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
      easier for designers to have a clear psychological expectation of color when adjusting colors,
      as well as facilitate communication in teams.
    </Paragraph>
    <Row gutter={8}>
      <Col>
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
          text="Quick Start"
        /></Col>
      <Col>
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
          text=" Product Info"
        />
      </Col>
      <Col>
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
          text="Product Doc"
        />
      </Col>
    </Row>
  </>
);

const Content = ({ children, extraContent }) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
};

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
      _.remove(prevState , (item, index) => {
        return index === idx
      })

      return [...prevState]
    })
  }

  return (
    <div className="main-div">
      <PageHeader
        title="Levi Ackerman"
        className="site-page-header"
        subTitle="Captain Levi"
        avatar={{ src: 'https://i.pinimg.com/originals/f9/95/c7/f995c7831c5a914ed1eca429bd333b07.png' }}
      >
        <Content
          extraContent={
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
              alt="content"
              width="100%"
            />
          }
        >
          <Row style={{ marginBottom: 15 }}>
            {content}
          </Row>
          <Row justify="center" style={{ marginBottom: 15 }}>
            <span>
               รายการสิ่งที่ต้องทำ
            </span>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <AddTodoForm addTodos={addTodos} todos={todos}/>
          </Row>
          <Row style={{ marginBottom: 15 }}>
            <TodoList todos={todos} removeTodo={removeTodo}/>
          </Row>
        </Content>
      </PageHeader>
    </div>
  );
}

export default App;
