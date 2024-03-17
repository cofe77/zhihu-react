import React from "react";
import { Form, Input, Button, Checkbox, message, Row, Col } from "antd";
import "./style.less";
import api from "../../api";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/features/questionSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    api
      .login(values)
      .then((res: any) => {
        if (res.data.status === 20011) {
          localStorage.setItem(
            "userInfo",
            JSON.stringify(res.data.data.userInfo)
          );
          localStorage.setItem("token", JSON.stringify(res.data.data.token));
          dispatch(setUserInfo({ userInfo: res.data.data.userInfo }));
          navigate("/", { replace: true });
        } else {
          message.error({
            content: "登陆失败",
          });
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        width: "100%",
        height: 800,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          width: 400,
          padding: "20px 30px",
          backgroundColor: "white",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="pwd"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Row justify="space-around">
            <Col span={6}>
              <Button
                type="primary"
                onClick={() => navigate("/register", { replace: true })}
              >
                去注册
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <div>账号：meenie</div>
        <div>密码：123456</div>
      </Form>
    </div>
  );
};

export default Login;
