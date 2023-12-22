"use client";
// improt styles from "./page"
// import styles from "./page.module.css";
import Link from "next/link";
import styles from "../page.module.css";
// import React, { useState } from "react";
import { AutoComplete, Button, Col, Form, Input, Row, Select } from "antd";
const { Option } = Select;

//main fuction start
const SignUp = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+91</Option>
                <Option value="91">+95</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    // main function return here
    return (
        <div className="main">
            <div className={styles.main}>
                <Form
                    layout="vertical"
                    className=" U_formclass bg-white  rounded-4 mt-5"
                    // {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 1000,
                        width: 460,
                    }}
                    scrollToFirstError
                >
                    <h5 className="opacity-75 pb-3 ">
                        {" "}
                        Start your ZestHRM journey
                    </h5>
                    <Row>
                        <Col md={12}>
                            <Form.Item
                                name="nickname"
                                label="Name"
                                // tooltip="What do you want others to call you?"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your nickname!",
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input placeholder="Organization name" />
                            </Form.Item>
                        </Col>
                        <Col md={12}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        type: "email",
                                        message:
                                            "The enter is not valid E-mail!",
                                    },
                                    {
                                        required: true,
                                        message: "Please enter your E-mail!",
                                    },
                                ]}
                            >
                                <Input placeholder="Organization email" />
                            </Form.Item>
                        </Col>

                        <Col md={12}>
                            <Form.Item
                                name="phone"
                                label="Contact number"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please enter your phone number!",
                                    },
                                ]}
                            >
                                <Input
                                placeholder="Mobile number"
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: "100%",
                                    }}
                                />
                            </Form.Item>
                        </Col>

                        <Col md={12}>
                            <Form.Item
                                name="Industry type"
                                label="Industry type"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter Industry type!",
                                    },
                                ]}
                            >
                                <Input 
                                    placeholder="Industry type"
                                />
                            </Form.Item>
                        </Col>

                        <Col>
                            <Form.Item
                                name="PAN number"
                                label="PAN number"
                                rules={[
                                    {
                                        // required: true,
                                        message:
                                            "Please enter PAN card number!",
                                    },
                                ]}
                            >
                                <Input
                                placeholder="PAN" />
                            </Form.Item>
                            {/*  */}
                        </Col>
                        <Col md={12}>
                            <Form.Item
                                name=" GST number"
                                label="GST number"
                                rules={[
                                    {
                                        // required: true,
                                        message:
                                            "Please Enter GST card number!",
                                    },
                                ]}
                            >
                                <Input
                                placeholder="GST" />
                            </Form.Item>
                        </Col>
                        <Col md={23}>
                        <Form.Item
                            name=" Addresses"
                            label=" Street address"
                            rules={[
                                {
                                    // required: true,
                                    message: "Please !",
                                },
                            ]}
                        >
                            <Input type="textarea"  placeholder="Street address"/>
                        </Form.Item>
                        </Col>

                        <Col>
                            <Form.Item
                                name=" City"
                                label="City"
                                rules={[
                                    {
                                        // required: true,
                                        message: "Please Enter  your city!",
                                    },
                                ]}
                            >
                                <Input placeholder="city name " />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item
                                name=" GST number"
                                label="State"
                                rules={[
                                    {
                                        // required: true,
                                        message:
                                            "Please Enter your State name!",
                                    },
                                ]}
                            >
                                <Input placeholder="state name" />
                            </Form.Item>
                        </Col>

                        <Form.Item
                            name=" GST number"
                            label="Zipcode"
                            rules={[
                                {
                                    // required: true,
                                    message: "Please Enter  your zipcode!",
                                },
                            ]}
                        >
                            <Input placeholder="zipcode" />
                        </Form.Item>
                    </Row>

                    <Form.Item
                        wrapperCol={
                            {
                                // offset: 8,
                                // span: 16,
                            }
                        }
                    >
                        <Button
                            type="default"
                            className="mt-3"
                            htmlType="submit"
                            style={{
                                backgroundColor: "black",
                                color: "white",
                                width: "100%",
                            }}
                        >
                            Next
                        </Button>
                    </Form.Item>

                    <h6 className="opacity-75">
                        Have already an account?
                        <Link href="/">Signup Here. </Link>
                    </h6>
                </Form>
            </div>
        </div>
    );
};
export default SignUp;
