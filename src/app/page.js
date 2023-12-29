"use client";
import styles from "./page.module.css";
import { Button, Form, Input ,message} from "antd";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const onFinish = async (values) => {
        try {
            const response = await axios.post(
                "https://staging-api.zesthrm.com/api/v1/auth/login",
                {
                    email: values.email,
                    password: values.password,
                }
            );
            localStorage.setItem("token", response.data.token);
            const isloggedIn = response.data.token;
            if (isloggedIn) {
                message.success("Login successfully");
                router.push(`/dashboard`);
            }
        } catch (error) {
            message.error(` Email is not registered with us. Try signup. `);
        }
    };
    
    return (
        <main className={styles.body}>
            <div className={styles.main}>
                <Form
                    layout="vertical"
                    className=" forms bg-white  rounded-4 mt-5"
                    name="basic"
                    labelCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 1000,
                        width: 330,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <p className="fs-5 ">Account Login</p>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                type: "email",
                                message: "Please enter valid email ",
                            },
                            {
                                required: true,
                                message: "Please enter your email",
                            },
                        ]}
                    >
                        <Input placeholder="Enter email" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your password",
                            },
                        ]}
                    >
                        <Input.Password placeholder="Enter Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="submit"
                            className="mt-3"
                            htmlType="submit"
                            style={{
                                backgroundColor: "black",
                                color: "white",
                                width: "100%",
                            }}
                        >
                            Login
                        </Button>
                    </Form.Item>
                    <p>
                        Not a member? <Link href="/signup">Signup Here. </Link>
                    </p>
                </Form>
            </div>
        </main>
    );
}
