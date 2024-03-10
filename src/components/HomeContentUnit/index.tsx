import React, { useState } from "react";

import QAndAContent from "./QAndAContent";

import "./style.less";
import AnswerOperate from "./AnswerOperate";

const HomeContentUnit = (props: { question: any }) => {
  const question = props.question;
  const [isFold, setIsFold] = useState(true);
  return (
    <div
      className="bd-content-unit"
      data-agree-state="agreeState"
      data-is-fold="false"
    >
      <div className="content-title">
        <a
          href={"/question/" + question.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          {question.title}
        </a>
      </div>
      <div className="content-main">
        <QAndAContent
          question={question}
          isFold={isFold}
          expandHandle={() => setIsFold(false)}
        />
      </div>
      <AnswerOperate
        isFold={isFold}
        answer={question.answer}
        setIsFold={() => setIsFold(true)}
      />
    </div>
  );
};

export default HomeContentUnit;
