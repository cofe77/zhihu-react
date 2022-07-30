import React from "react"
import { Form, Input, Button, Checkbox, message, Row, Col } from "antd"
import "./style.less"
import api from "../../api"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    api.register(values).then((res: any) => {
      if (res.data.status === 20011) {
        message.info("注册成功！")
        navigate("/login", { replace: true })
      } else {
        message.error({
          content:"登陆失败"
        })
      }
  }).catch((err: any) => {
      console.log(err)
  })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <div
      style={{
        width: "100%",
        height:800,
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        style={{
          width: 400,
          padding: "20px 30px",
          backgroundColor:"white"
        }}
        initialValues={{
          remember: true
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
              message: "Please input your username!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="昵称"
          name="nick"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
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
              message: "Please input your password!"
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Row justify="space-around">
            <Col span={6}>
              <Button type="primary" onClick={() => navigate("/login", { replace: true })}>
                去登录
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register
