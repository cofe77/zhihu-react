import React, { useEffect, useState } from "react"
import { PlusCircleOutlined } from "@ant-design/icons"
import "./style.less"
import { Input, message, Popconfirm, Select, Space } from "antd"
import api from "../../../../api"

const { Option } = Select

const dgreeData = {
  1:"高中及以下",
  2:"大专",
  3:"本科",
  4:"硕士",
  5:"博士及以上"
}

type dgreeType = keyof typeof dgreeData

function PeopleEditEdu(props: { id: any; educations: any; shouldUpdate:any }) {
  const { id,educations,shouldUpdate } = props
  const [educationNew, setEducationNew] = useState({
    school: "",
    major: "",
    dgree: 0,
    hireTime: 0,
    graduTime: 0
  })
  const [isEducationEditShow, setIsEducationEditShow] = useState(false)
  useEffect(() => {
    setEducationNew(educations)
  }, [educations])
  function restoreEducationNew() {
    setEducationNew({
      school: "",
      major: "",
      dgree: 0,
      hireTime: 0,
      graduTime: 0
    })
  }
  // 修改education
  function handleAddEducation() {
    setIsEducationEditShow(true)
    restoreEducationNew()
  }
  function handleCancelEditEducation() {
    restoreEducationNew()
    setIsEducationEditShow(false)
  }
  function handleSchoolInput(e: { target: { value: any } }) {
    setEducationNew({
      ...educationNew,
      school:e.target.value
    })
  }
  function handleMajorInput(e: { target: { value: any } }) {
    setEducationNew({
      ...educationNew,
      major:e.target.value
    })
  }
  function handleDgreeChange(value:number) {
    setEducationNew({
      ...educationNew,
      dgree:value
    })
  }
  function handleHireChange(value:number) {
    setEducationNew({
      ...educationNew,
      hireTime:value
    })
  }
  function handleGraduChange(value:number) {
    setEducationNew({
      ...educationNew,
      graduTime:value
    })
  }
  function handleSaveEducation(){
    api.addUserEducation({
      userId: id,
      ...educationNew
    }).then((res: any) => {
      if(res.data.status === 20031){
        message.success(res.data.msg)
        setIsEducationEditShow(false)
        restoreEducationNew()
        shouldUpdate()
      }
    }).catch((err: any) => {
      message.error(err.data.error)
    })
  }
  function onDeleteConfirm(id: string) {
    api.deleteUserEducation(id).then((res: any) => {
      if(res.data.status === 20031){
        message.success(res.data.msg)
        shouldUpdate()
      }
    }).catch((err: any) => {
      message.error(err.data.error)
    })
  }
  return (
    <div className="edit-info-item">
      <div className="info-item-title">教育经历</div>
      <div className="info-item-body">
        {!isEducationEditShow && <div>
          <div className="people-edit-add" onClick={handleAddEducation}><PlusCircleOutlined className="add-icon" />添加教育经历</div>
        </div>}
        {isEducationEditShow && <div>
          <div className="edu-edit-form-top">
            <Space size={"middle"}>
              <Input placeholder="学校或教育机构名" style={{ "width":"190px" }} onChange={handleSchoolInput}/>
              <Input placeholder="专业方向（选填）" style={{ "width":"190px" }} onChange={handleMajorInput}/>
              <Select placeholder="学历" style={{ "width": "190px" }} onChange={handleDgreeChange}>
                {Array.from(new Array(6).keys()).slice(1).reverse().map((v, k) => <Option value={v} key={k}>{dgreeData[v as dgreeType]}</Option>)}
              </Select>
            </Space>
          </div>
          <div>
            <Space size={"middle"}>
              <Select placeholder="入学年份" style={{ "width":"190px" }} onChange={handleHireChange}>
                {Array.from(new Array(2023).keys()).slice(1950).reverse().map((v, k) => <Option value={v} key={k}>{v}</Option>)}
              </Select>
              <Select placeholder="毕业年份" style={{ "width":"190px" }} onChange={handleGraduChange}>
                {Array.from(new Array(2023).keys()).slice(1950).concat(0).reverse().map((v, k) => <Option value={v} key={k}>{v === 0 ? "至今" : v}</Option>)}
              </Select>
              <div className="btn btn-primary people-edit-save-btn" onClick={handleSaveEducation}>保存</div>
              <div className="btn btn-grey" onClick={handleCancelEditEducation}>取消</div>
            </Space>
          </div>
        </div>}
        <div className="edu-item-container">
          {educations?.map((education: { hireTime: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; graduTime: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; school: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; dgree: unknown; id: string }, key: React.Key | null | undefined) => {
            return (
              <div className="edu-item" key={key}>
                <div className="edu-item-icon">
                  <img src="/api/static/media/2.png" alt="" />
                </div>
                <div className="edu-item-info">
                  <div className="edu-info-date">{education?.hireTime}年-{education?.graduTime}年</div>
                  <div className="edu-info-school">{education?.school}{education?.dgree && " · " + dgreeData[education?.dgree as unknown as dgreeType]}</div>
                </div>
                <div className="edu-item-close">
                  <Popconfirm
                      title="是否删除这一项？"
                      onConfirm={() => onDeleteConfirm(education?.id)}
                      okText="确认"
                      cancelText="取消"
                    >
                    ×
                  </Popconfirm>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PeopleEditEdu
