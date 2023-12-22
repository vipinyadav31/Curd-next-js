"use client"
import React from 'react';
import { Tabs, Form, Input, Button } from 'antd';
// import 'antd/dist/antd.css';
// import './App.css';

const { TabPane } = Tabs;

const App = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className="App">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Organization" key="1">
          <Form name="orgForm" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <Form.Item label="Organization Name" name="orgName" rules={[{ required: true, message: 'Please input your organization name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="orgEmail" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="orgPassword" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Personal Details" key="2">
          <Form name="personalForm" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Please input your full name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="personalEmail" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="personalPassword" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
