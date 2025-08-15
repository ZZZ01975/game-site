// assets/nav.js
(function () {
  // 判断当前页面是否在 /games/ 子目录下，用于计算相对路径前缀
  const inGames = location.pathname.includes('/games/');
  const base = inGames ? '../' : './';

  // 定义导航链接
  const links = [
    { href: base, label: '首页', match: ['/', '/index.html'] },
    { href: base + 'rpg.html', label: 'RPG', match: ['/rpg.html'] },
    { href: base + 'action.html', label: '动作', match: ['/action.html'] },
    { href: base + 'casual.html', label: '休闲', match: ['/casual.html'] },
  ];

  // 当前路径用于高亮
  const p = location.pathname.toLowerCase();

  // 生成导航 HTML
  const html = `
    <div class="header">
      <div class="brand"><a href="${base}" style="text-decoration:none;color:inherit">US Game Hub</a></div>
      <div class="nav">
        ${links.map(l => {
          const active = l.match.some(m => p.endsWith(m));
          return `<a href="${l.href}" class="${active ? 'active' : ''}">${l.label}</a>`;
        }).join('')}
      </div>
    </div>
  `;

  // 插入到页面最上方：优先插到 #site-header，占位不存在则插入到 .container 最前
  const holder = document.getElementById('site-header') || document.querySelector('.container');
  if (holder) holder.insertAdjacentHTML('afterbegin', html);
})();
