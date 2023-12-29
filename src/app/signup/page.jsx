"use client";
import Link from "next/link";
import styles from "../page.module.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
    Steps,
    Checkbox,
    Button,
    DatePicker,
    Col,
    Form,
    Input,
    Row,
    Select,
    message,
} from "antd";

const { Option } = Select;
const { Step } = Steps;

const SignUp = () => {
    const [form] = Form.useForm();
    const [currentStep, setCurrentStep] = useState(0);
    const [orgDetails, setOrgDetails] = useState("");
    const router = useRouter();
    const onFinish = async (values) => {
        try {
            if (currentStep === 0) {
                setOrgDetails(values);
                setCurrentStep(1);
            } else if (currentStep === 1) {
                const payload = {
                    organisationDetails: {
                        name: orgDetails.name,
                        email: orgDetails.email,
                        mobileNo: orgDetails.phone,
                        industryType: orgDetails.Industry,
                        panNo: orgDetails.PAN,
                        gstNo: orgDetails.GST,
                        address: {
                            streetAddress: orgDetails.addresses,
                            state: orgDetails.state,
                            city: orgDetails.city,
                            zipCode: orgDetails.zipCode,
                        },
                    },
                    personalDetails: {
                        name: values.pname,
                        email: values.pemail,
                        mobileNo: values.pphone,
                        dob: values.dob,
                        address: {
                            streetAddress: values.paddresses,
                            state: values.pstate,
                            city: values.pcity,
                            zipCode: values.pzipCode,
                        },
                    },
                };
                await axios.post(
                    "https://staging-api.zesthrm.com/api/v1/customer/create",
                    payload
                );
                message.success("Account has been created successfully");
                router.push("/");
            }
        } catch (error) {
            message.error(
                "An error occurred. Please try again or contact support."
            );
        }
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
    return (
        <div className={styles.signup}>
            <div className={styles.main}>
                {currentStep === 0 && (
                    <Form
                        initialValues={{ prefixSelector: "91" }}
                        layout="vertical"
                        className=" forms bg-white  rounded-4 mt-5"
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
                            Start your ZestHRM journey
                        </h5>
                        <Steps current={currentStep}>
                            <Step title="Organization" />
                            <Step title="Personal Details" />
                        </Steps>
                        <Row gutter={[10, 10]}>
                            <Col md={12}>
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter your name",
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
                                                " Please enter valid email",
                                        },
                                        {
                                            required: true,
                                            message: "Please enter your email",
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
                                                "Please enter your phone number",
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
                                    name="Industry"
                                    label="Industry type"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter industry type",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Industry type" />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item name="PAN" label="PAN number">
                                    <Input placeholder="PAN" />
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item name="GST" label="GST number">
                                    <Input placeholder="GST" />
                                </Form.Item>
                            </Col>
                            <Col md={23}>
                                <Form.Item
                                    name="addresses"
                                    label=" Street address"
                                >
                                    <Input
                                        type="textarea"
                                        placeholder="Street address"
                                    />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item name="city" label="City">
                                    <Input placeholder="city name " />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item name="state" label="State">
                                    <Input placeholder="state name" />
                                </Form.Item>
                            </Col>
                            <Form.Item name=" zipcode" label="Zipcode">
                                <Input placeholder="zipcode" />
                            </Form.Item>
                        </Row>
                        <Form.Item>
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
                            <Link href="/"> Login Here. </Link>
                        </h6>
                    </Form>
                )}
                {currentStep === 1 && (
                    <Form
                        layout="vertical"
                        className=" forms bg-white  rounded-4 mt-5"
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
                            Start your ZestHRM journey
                        </h5>
                        <Steps current={currentStep}>
                            <Step title="Organization" />
                            <Step title="Personal Details" />
                        </Steps>
                        <Row gutter={[10, 10]}>
                            <Col md={12}>
                                <Form.Item
                                    name="pname"
                                    label="Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter your name!",
                                            whitespace: true,
                                        },
                                    ]}
                                >
                                    <Input placeholder=" name" />
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item
                                    name="pemail"
                                    label="Email"
                                    rules={[
                                        {
                                            type: "email",
                                            message:
                                                "The enter email is not valid ",
                                        },
                                        {
                                            required: true,
                                            message: "Please enter your email",
                                        },
                                    ]}
                                >
                                    <Input placeholder=" email" />
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item
                                    name="pphone"
                                    label="Contact number"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter your phone number",
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
                                    label="DOB"
                                    name="dob"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please select your date of birth",
                                        },
                                    ]}
                                >
                                    <DatePicker format="MM/DD/YYYY" />
                                </Form.Item>
                            </Col>
                            <Col md={23}>
                                <Form.Item
                                    name="paddresses"
                                    label=" Street address"
                                >
                                    <Input
                                        type="textarea"
                                        placeholder="Street address"
                                    />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item name="pcity" label="City">
                                    <Input placeholder="city name " />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item name="pstate" label="State">
                                    <Input placeholder="state name" />
                                </Form.Item>
                            </Col>
                            <Form.Item name="pzipcode" label="Zipcode">
                                <Input placeholder="zipcode" />
                            </Form.Item>
                        </Row>
                        <Form.Item>
                            <Checkbox required>
                                I agree to the
                                <Link href="/contitions" target="blank">
                                    terms & condititions
                                </Link>
                            </Checkbox>
                        </Form.Item>
                        <Row>
                            <Col>
                                <Form.Item>
                                    <Button
                                        type="default"
                                        htmlType="submit"
                                        style={{
                                            backgroundColor: "black",
                                            color: "white",
                                        }}
                                    >
                                        Complete Registration
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                        <h6 className="opacity-75">
                            Have already an account?
                            <Link href="/">Login Here. </Link>
                        </h6>
                    </Form>
                )}
            </div>
        </div>
    );
};
export default SignUp;
