import { create } from "zustand";

interface ResumeData {
  name: string;
  title: string;
  experience: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  email: string;
  phone: string;
  workExperience: Array<{
    company: string;
    position: string;
    period: string;
    responsibilities: string[];
  }>;
  education: Array<{
    school: string;
    degree: string;
    period: string;
  }>;
  skills: string[];
  github: string;
}

const useStore = create<ResumeData>(() => ({
  name: "张三",
  title: "前端开发工程师",
  experience: "3年经验",
  tags: [
    {
      name: "Devops",
      color: "green",
    },
    {
      name: "Golang",
      color: "blue",
    },
    {
      name: "CI/CD",
      color: "purple",
    },
    {
      name: "PaaS",
      color: "red",
    },
  ],
  email: "lcgash@163.com",
  phone: "17600646861",
  workExperience: [
    {
      company: "ABC科技有限公司",
      position: "前端开发工程师",
      period: "2020-至今",
      responsibilities: [
        "负责公司核心产品的前端架构设计和开发",
        "使用React+TypeScript重构项目，提升性能30%",
        "带领3人前端团队完成多个重点项目",
      ],
    },
    {
      company: "XYZ软件公司",
      position: "前端开发实习生",
      period: "2018-2020",
      responsibilities: [
        "参与公司官网和后台管理系统开发",
        "协助团队完成前端组件库建设",
      ],
    },
  ],
  education: [
    {
      school: "上海交通大学",
      degree: "计算机科学与技术 硕士",
      period: "2016-2019",
    },
    {
      school: "复旦大学",
      degree: "软件工程 本科",
      period: "2012-2016",
    },
  ],
  skills: [
    "精通React、TypeScript、Next.js",
    "熟悉Ant Design、TailwindCSS等UI框架",
    "掌握Node.js、Express后端开发",
    "熟悉Git、Webpack等开发工具",
  ],
  github: "https://github.com/lcgash",
}));

export default useStore;
