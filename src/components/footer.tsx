import { Row, Col, Typography, Space } from "antd";
import { GithubOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import useStore from "../store/store";

const { Text, Link } = Typography;

export const Footer = () => {
  const { email, phone, github } = useStore();
  return (
    <Row justify="center" style={{ padding: "20px 0", background: "#f0f2f5" }}>
      <Col span={20}>
        <Row justify="space-between" align="middle">
          <Col>
            <Link type="secondary" href={github} target="_blank">
              <GithubOutlined />
            </Link>
          </Col>
          <Col>
            <Space>
              <MailOutlined />
              <Text>{email}</Text>
              <PhoneOutlined />
              <Text>{phone}</Text>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
