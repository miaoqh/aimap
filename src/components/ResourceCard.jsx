// src/components/ResourceCard.jsx
function ResourceCard({ title, description, filePath, type }) {
  // 自动拼接正确的资源 URL
  const url = `${import.meta.env.BASE_URL}${filePath}`;

  return (
    <div className="resource-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {type === 'download' ? (
        <a href={url} download>
          下载文件
        </a>
      ) : (
        <a href={url} target="_blank" rel="noopener noreferrer">
          在新标签页打开
        </a>
      )}
    </div>
  );
}

export default ResourceCard;