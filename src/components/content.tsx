import { Row, Col, Divider, Typography, Card, Space, Badge } from "antd";
import useStore from "../store/store";

const { Title, Text, Paragraph } = Typography;

export const Content = () => {
  const { name, title, experience, workExperience, education, skills } =
    useStore();
  return (
    <Row justify="center" style={{ padding: "20px 0" }}>
      <Col span={20}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="个人信息">
              <Paragraph>
                <Text strong>姓名：</Text>
                {name}
                <br />
                <Text strong>职位：</Text>
                {title}
                <br />
                <Text strong>工作经验：</Text>
                {experience}
              </Paragraph>
            </Card>
          </Col>

          <Col span={24}>
            <Card title="工作经历">
              {workExperience.map((exp, index) => (
                <Row key={index} gutter={[16, 16]}>
                  <Col span={24}>
                    <Space wrap>
                      <Badge
                        color="blue"
                        text={<Text strong>{exp.company}</Text>}
                      />
                      <Text type="secondary">-</Text>
                      <Text>{exp.position}</Text>
                      <Text>({exp.period})</Text>
                    </Space>
                  </Col>
                  <Paragraph>
                    {exp.responsibilities.map((resp, i) => (
                      <Paragraph key={i}>• {resp}</Paragraph>
                    ))}
                  </Paragraph>
                </Row>
              ))}
            </Card>
          </Col>
          <Col span={24}>
            <Card title="教育背景">
              {education.map((edu, index) => (
                <div key={index}>
                  <Text strong>{edu.school}</Text> - {edu.degree} ({edu.period})
                  <br />
                </div>
              ))}
            </Card>
          </Col>

          <Col span={24}>
            <Card title="技能">
              {skills.map((skill, index) => (
                <Col span={24}>
                  <Space key={index}>
                    <Text type="secondary">•</Text>
                    <Text>{skill}</Text>
                  </Space>
                </Col>
              ))}
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
