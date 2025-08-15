# 数据模型 · data/games.json（MVP）

[
  {
    "id": "legend",
    "title": "传奇 H5（内置演示）",
    "cover": "https://...jpg",
    "tags": ["RPG","H5"],
    "category": "RPG",
    "type": "canvas",      // canvas | iframe
    "iframe": null
  }
]

## 约定
- id：全局唯一
- category ∈ {"RPG","动作","休闲"}（可扩展）
- type=iframe 时必须提供 iframe URL
