import { ConfigProvider, Layout, Row } from "antd";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { Download } from "./components/download";

const { Header: AntHeader, Content: AntContent, Footer: AntFooter } = Layout;

export const Main = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4a93fa",
          colorInfo: "#4a93fa",
          colorSuccess: "#42a312",
          colorWarning: "#f9a704",
          colorError: "#e60d10",
        },
      }}
    >
      <Layout id="resume-layout" style={{ backgroundColor: "#fff" }}>
        <Header />
        <AntContent>
          <Content />
        </AntContent>
        <AntFooter style={{ padding: 0 }}>
          <Footer />
        </AntFooter>
      </Layout>
      <Download />
    </ConfigProvider>
  );
};
