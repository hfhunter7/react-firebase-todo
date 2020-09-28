import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const AddTodoForm = (props) => {
    const { addTodos } = props
    const [form] = Form.useForm()

    const onFinish = values => {
        console.log('Finish:', values);

        const data = {
            todoName: values.todoName,
            isComplete: false
        }
        addTodos(data)
        form.resetFields()
    };

    return (
        <div style={{ width: '100%' }}>
            <Form form={form} name="add_todo" onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="todoName"
                            rules={[{ required: true, message: 'Please input your todo' }]}
                        >
                            <Input placeholder="สิ่งที่ต้องทำวันนี้" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit">
                                เพิ่ม
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default AddTodoForm