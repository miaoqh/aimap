import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// src/App.jsx
import ResourceCard from './components/ResourceCard';

function App() {
  return (
    <div>
      <h1>我的书籍资源</h1>

      <section>
        <h2>讲义</h2>
        <ResourceCard
          title="第 1 章 绪论"
          description="AI历史、学科基础、课程内容"
          filePath="chapters/《人工智能原理-模型与算法》讲义2026秋季-第一章导言.pdf"
          type="download"
        />
      </section>
      
      <section>
        <h2>代码练习</h2>
        <ResourceCard
          title="第 1 章 Notebook"
          description="包含本章所有代码示例"
          filePath="notebooks/chapter1.ipynb"
          type="download"
        />
      </section>

      <section>
        <h2>幻灯片</h2>
        <ResourceCard
          title="第 1 讲幻灯片"
          description="PDF 格式，可在线预览"
          filePath="slides/lecture1.pdf"
          type="open"
        />
      </section>

      <section>
        <h2>插图</h2>
        <img
          src={`${import.meta.env.BASE_URL}figures/architecture.png`}
          alt="架构图"
          style={{ maxWidth: '100%' }}
        />
      </section>
    </div>
  );
}

export default App;