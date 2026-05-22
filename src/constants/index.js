import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am an AI Engineer focused on building production ready LLM systems, RAG pipelines, and agentic AI workflows. I have shipped end to end AI systems across healthcare, analytics, and research domains, from model selection and prompt engineering to cloud deployment and APIs. I do not just experiment with AI, I build systems that actually run in production.`;

export const ABOUT_TEXT = `I am a dedicated AI Engineer passionate about designing and developing intelligent agentic systems, robust RAG pipelines, and scalable APIs. I have hands-on experience working with deep learning frameworks like PyTorch and TensorFlow, as well as AI orchestration tools like LangChain and LangGraph. I enjoy optimizing model performance, structuring retrieval pipelines, and building clean, responsive interfaces using React. I focus on bridging the gap between cutting-edge AI models and production-ready applications.`;

export const EXPERIENCES = [
  {
    year: "March 2025 - June 2025",
    role: "AI Developer",
    company: "Freelancer",
    description: `Built and deployed production grade AI systems as a freelance AI Developer, including a deep learning crop disease classification API using ResNet-50 and TensorFlow achieving 87%+ accuracy across 10+ categories. Designed and deployed scalable inference APIs on Google Cloud Platform using Python and Flask, with structured JSON outputs and automated prediction workflows. Integrated Firebase for real time cloud storage and monitoring of model predictions across distributed deployments.`,
    technologies: ["Python", "TensorFlow", "ResNet-50", "Flask", "GCP", "Firebase", "Docker", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "LucidCare",
    image: project4,
    description: "An end-to-end multimodal AI system for chest X-ray interpretation using YOLOv8 for lesion localization, DenseNet for disease classification, and LLM reasoning to generate structured diagnostic outputs. Implemented Explainable AI techniques for interpretability and built production grade Flask APIs with OCR driven report extraction. Published at IEEE conference.",
    technologies: ["Python", "YOLOv8", "DenseNet", "LLM", "Flask", "OCR", "Supabase"],
  },
  {
    title: "Autonomous AI Analytics Platform",
    image: project1,
    description: "A multi-agent agentic AI platform built with LangGraph, featuring five specialized agents including Planner, Analytics, ML, Reflection, and Report agents. Engineered stateful orchestration with conditional routing, retry logic, and reflection based quality evaluation for autonomous end-to-end dataset analysis and executive report generation.",
technologies: ["Python", "LangGraph", "FastAPI", "Groq API", "XGBoost", "Docker", "React.js"],
  },
  {
    title: "AstroChat",
    image: project2,
    description: "A RAG powered astronomy research assistant using a hybrid retrieval pipeline combining BM25 and FAISS vector search with Meta LLaMA APIs. Designed chunking strategy, embedding model selection, and retrieval evaluation workflow to improve semantic relevance and context aware response quality for domain specific queries.",
technologies: ["Python", "LangChain", "FAISS", "BM25", "Meta-LLaMA", "Flask", "AWS"],
  },
];

export const CONTACT = {
  phoneNo: "+91 8848478876",
  email: "rejiroshen2@gmail.com",
};
