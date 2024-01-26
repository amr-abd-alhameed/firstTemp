import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointLeft } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="p-about fs-2" style={{ textAlign: "justify" }}>
            ازيكم يا شباب <span className="purple">زميلكم أحمد </span>
            من <span className="purple"> الفيوم </span>
            <br /> رابعه اتصالات - جامعة الفيوم متخصص في هندسة الشبكات و أنطمة
            الاتصالات
            <br />
            كما أني متخصص في بعض لغات البرمجة مثل بايثون و سي بلس بلس
            <br />
            <br />
            بعض هواياتي
          </p>
          <ul>
            <li className="about-activity  fs-3">
              <ImPointLeft style={{ marginLeft: "10px" }} /> تطوير الشبكات
            </li>
            <li className="about-activity fs-3">
              <ImPointLeft style={{ marginLeft: "10px" }} /> تصميم الربوتات
            </li>
            <li className="about-activity fs-3">
              <ImPointLeft style={{ marginLeft: "10px" }} /> تصميم طائرات بدون
              طيار
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
