"use client"
import styles from "./page.module.css";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function Home() {
    const [users , setUsers] = useState([])
    const onFinish = async (values) => {
        try {
            const response = await axios.post('https://staging-api.zesthrm.com/api/v1/auth/login');
            setUsers(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    
        console.log("Success:", users);   

    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <main className= "main">
          <div className={styles.main}>
        {/* <h2 className="d-flex justify-content-center bg-black text-white p-2 mb-5 ">Login page</h2> */}
            <Form
               layout="vertical"
                className=" U_formclass bg-white  rounded-4 mt-5"
                name="basic"
                labelCol={{
                    span: 16,
                }}
                // wrapperCol={{
                //     span: 16,
                // }}
                style={{
                    maxWidth: 1000,
                    width: 330,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >    
                <p className="fs-5 ">Account Login</p>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                            
                        },
                    ]}
                >
                    <Input  placeholder="Enter email" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password placeholder="Enter Password" />
                </Form.Item>    
                <Form.Item
                    wrapperCol={{
                        // offset: 8,
                        // span: 16,
                    }}
                >
                    {/* <Button type="primary" style={{"backgroundColor"}} htmlType="submit"> */}
                    <Button type="default"
                    className="mt-3"
                     htmlType="submit" 
                     style={{ backgroundColor: 'black', color: 'white', width: '100%',  }}
                     
                     >

                        Login
                    </Button>
                </Form.Item>
                <p>Not a member? <Link href="/signup">Signup Here. </Link></p>
            </Form>
            </div>
        </main>
    );
}
