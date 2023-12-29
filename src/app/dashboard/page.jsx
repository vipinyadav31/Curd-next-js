"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./../page.module.css";
import {
    DeleteOutlined,
    DesktopOutlined,
    EditOutlined,
} from "@ant-design/icons";
import {
    Layout,
    Menu,
    theme,
    Row,
    Table,
    Popconfirm,
    message,
    Button,
} from "antd";
import Adduser from "./Adduser";
import Edites from "./Edites";
import { useRouter } from "next/navigation";

const { Header, Content, Sider } = Layout;
const App = () => {
    const router = useRouter();
    const [apiData, setApiData] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const [addUser, setAddUser] = useState(false);
    const [editRequest, setEditRequest] = useState(false);
    const [editId, setEditId] = useState("");
    const [gettingResponse, setGettingResponse] = useState("");

    const isloggedIn = localStorage.getItem("token");
    if (!isloggedIn) {
        router.push("/");
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://65682d079927836bd9742fb2.mockapi.io/usersData"
                );
                setApiData(response.data);
            } catch (error) {
                message.error(error);
            }
        };
        fetchData();
    }, [addUser, gettingResponse, editRequest]);

    const confirm = async (id) => {
        const response = await axios.delete(
            `https://65682d079927836bd9742fb2.mockapi.io/usersData/${id}`
        );
        setGettingResponse(response);
        message.success("user deleted successfully ");
    };
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            align: "center",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            align: "center",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            align: "center",
        },
        {
            title: "Action",
            dataIndex: "id",
            width: "15%",
            key: "id",
            render: (id) => (
                <>
                    <Button
                        onClick={() => {
                            setEditRequest(true);
                            setEditId(id);
                        }}
                    >
                        <EditOutlined />
                    </Button>
                    <Popconfirm
                        title="Delete users"
                        description="Are you sure to delete this users?"
                        onConfirm={() => confirm(id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button
                            style={{
                                marginLeft: "10px",
                            }}
                        >
                            <DeleteOutlined
                                style={{
                                    color: "red",
                                }}
                            />
                        </Button>
                    </Popconfirm>
                </>
            ),
        },
    ];
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const onClose = () => {
        setAddUser(false);
        setEditRequest(false);
    };
    return (
        <div className={styles.parent}>
            <Layout style={{ minHeight: "100%" }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                >
                    <h3 className="d-flex justify-content-center text-white mt-4 mb-4">
                        Zest HRM
                    </h3>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                        items={[
                            {
                                key: "1",
                                icon: <DesktopOutlined />,
                                label: "desktop",
                            },
                        ]}
                    ></Menu>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    />
                    <Content
                        style={{
                            margin: "26px",
                        }}
                    >
                        <Row
                            justify="center"
                            style={{
                                display: "flex",
                                justifyContent: "right",
                            }}
                        >
                            <Button
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    marginRight: "8vw",
                                    marginBottom: "10px"
                                }}
                                type="primary"
                                onClick={() => setAddUser(true)}
                            >
                                Add
                            </Button>
                        </Row>
                        <Row justify="center">
                            <Table
                                style={{ width: "80%" }}
                                pagination={false}
                                dataSource={apiData}
                                columns={columns}
                                scroll={{ x: true }}
                                bordered
                                rowKey={(keys) => keys.id}
                            />
                        </Row>
                    </Content>
                </Layout>
                <Adduser isShow={addUser} handleCancel={onClose} />
                <Edites
                    isShow={editRequest}
                    handleCancel={onClose}
                    id={editId}
                />
            </Layout>
        </div>
    );
};
export default App;
