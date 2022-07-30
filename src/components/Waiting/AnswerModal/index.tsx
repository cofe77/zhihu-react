import React, { useEffect, useState } from "react"
import { Button, Form } from "antd"
import { Editor, Toolbar } from "@wangeditor/editor-for-react"
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor"
import "@wangeditor/editor/dist/css/style.css"
import api from "../../../api"

const AnswerModal = (props: { question: any }) => {
  const { question } = props
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null) // TS 语法

  // 编辑器内容
  const [html, setHtml] = useState("<p>hello</p>")

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
        setHtml("<p>hello world</p>")
    }, 1500)
  }, [])

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = { } // TS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = { // TS 语法
      placeholder: "请输入内容..."
  }

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
        if (editor == null) return
        editor.destroy()
        setEditor(null)
    }
  }, [editor])

  const handleConfirm = () => {
      api.newAnswer({
        questionId: question.id,
        authorId: 2,
        mainPic:"/api/static/media/1.b4b91e14.jpg",
        content: html
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
  }
  return (
    <Form
      name="basic"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 18 }}
      onFinish={handleConfirm}
      onFinishFailed={(err) => { console.log(err) }}
    >
      <Form.Item
        label="问题"
      >
        {question.title}
      </Form.Item>

      <Form.Item
          label="问题描述"
      >
          <div style={{ paddingTop:5, textIndent: 2 }} dangerouslySetInnerHTML={{ __html:question.content }}></div>
      </Form.Item>

      <Form.Item
        label="您的回答"
        name="content"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
          <Toolbar
              editor={editor}
              defaultConfig={toolbarConfig}
              mode="default"
              style={{ borderBottom: "1px solid #ccc" }}
          />
          <Editor
              defaultConfig={editorConfig}
              value={html}
              onCreated={setEditor}
              onChange={(editor: { getHtml: () => React.SetStateAction<string> }) => setHtml(editor.getHtml())}
              mode="default"
              style={{ height: "500px", overflowY: "hidden" }}
          />
        </div>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    )
}

export default AnswerModal
