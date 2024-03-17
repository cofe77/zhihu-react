import { message } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import api from "../../api";
import PeopleDynamicUnit from "../../components/People/PeopleDynamicUnit/PeopleDynamicUnit";

const titleData = {
  1: "回答了问题",
  2: "添加了问题",
  3: "收藏了回答",
  4: "赞同了回答",
};

type titleType = keyof typeof titleData;

function PeopleIndex() {
  const { username } = useSelector((state: any) => state.user.userInfo);
  const [dynamics, setDynamics] = useState([]);
  useEffect(() => {
    if (username) {
      api
        .getUserDynamicByUsername(username)
        .then((res: any) => {
          setDynamics(res.data.data);
        })
        .catch((err: any) => {
          message.error(err.state);
        });
    }
  }, [username]);
  return (
    <div className="people-index">
      <div className="people-center-header">我的动态</div>
      {dynamics?.map(
        (dynamic: { type: number; question: any; createTime: string }, key) => {
          return (
            <div className="people-index-item" key={key}>
              <div className="index-item-header">
                <div>{titleData[dynamic.type as unknown as titleType]}</div>
                <div>
                  {moment(dynamic.createTime).format("yyyy-MM-DD HH:mm:ss")}
                </div>
              </div>
              <div className="index-item-body">
                <div className="item-body-title">{dynamic.question.title}</div>
                {dynamic.question.answer && (
                  <PeopleDynamicUnit dynamic={dynamic} />
                )}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default PeopleIndex;
