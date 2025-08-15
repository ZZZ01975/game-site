# 信息架构 / URL / 导航

## 页面
- `/` 首页
- `/rpg.html`、`/action.html`、`/casual.html` 分类页
- `/game.html?id=<id>` 通用详情页
- `/404.html` 404

## URL 规范
- 一律使用**相对路径**（不要以 `/` 开头）；
- 详情页统一为 `game.html?id=<id>`，便于数据驱动。

## 导航规则
- 导航项： 首页 | RPG | 动作 | 休闲
- `.active` 高亮当前页（由 `assets/nav.js` 自动判断）
