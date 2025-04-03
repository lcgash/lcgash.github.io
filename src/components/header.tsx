import {
  Col,
  Row,
  Typography,
  Divider,
  theme,
  Tag,
  Space,
  ConfigProvider,
} from "antd";
import useStore from "../store/store";

const { Title, Text } = Typography;
const { useToken } = theme;

export const Header = () => {
  const { token } = useToken();

  const { name, title, experience, email, phone, tags } = useStore();

  return (
    <ConfigProvider theme={{ token: { colorText: "#fff", colorLink: "#fff" } }}>
      <div
        className="header"
        style={{ backgroundColor: token.colorPrimary, color: "#fff!important" }}
      >
        <div className="wave-container">
          <svg
            className="wave-svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              fill="var(--wave-color)"
              d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
            >
              <animate
                attributeName="d"
                dur="22s"
                repeatCount="indefinite"
                values="
              M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z;
              M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z;
              M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z
            "
              />
            </path>
          </svg>
        </div>
        <Row justify="center">
          <Col span={22}>
            <Row align="bottom" justify="space-between" gutter={24}>
              <Col span={16}>
                <Row gutter={[4, 4]}>
                  <Col span={24}>
                    <Title level={3}>{name}</Title>
                  </Col>
                  <Col span={24}>
                    <Space split={<Divider type="vertical" />}>
                      <Text>{title}</Text>
                      <Text>{experience}</Text>
                    </Space>
                  </Col>
                  <Col span={24}>
                    <Space wrap>
                      {tags?.map((tag, index) => (
                        <Tag key={index} color={tag.color} bordered={false}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Space>
                  </Col>
                </Row>
              </Col>
              <Col span={8} style={{ textAlign: "right" }}>
                <Space direction="vertical" size={0}>
                  <Text copyable>{email}</Text>
                  <Text copyable>{phone}</Text>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
};
