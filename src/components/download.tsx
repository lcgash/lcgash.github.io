import { FloatButton } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import generatePDF from "react-to-pdf";

export const Download = () => {
  const getTargetElement = () => document.getElementById("resume-layout");

  return (
    <FloatButton
      icon={<ArrowDownOutlined />}
      onClick={() => generatePDF(getTargetElement, { filename: "page.pdf" })}
    >
      Download PDF
    </FloatButton>
  );
};
