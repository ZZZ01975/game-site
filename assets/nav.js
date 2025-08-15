// assets/nav.js —— 自动插入统一导航（不依赖占位）
// 放在页面最后 </body> 前加载
(function () {
  const path = location.pathname.toLowerCase();
  const inGames = path.includes('/games/');
  const base = inGames ? '../' : './';

  const links = [
    { href: base,                 label: '首页', match: ['/', '/index.html'] },
    { href: base + 'rpg.html',    label: 'RPG',  match: ['/rpg.html'] },
    { href: base + 'action.html', label: '动作', match: ['/action.html'] },
    { href: base + 'casual.html', label: '休闲', match: ['/casual.html'] },
  ];

  const html = `
    <div class="header">
      <div class="brand"><a href="${base}" style="text-decoration:none;color:inherit">US Game Hub</a></div>
      <div class="nav">
        ${links.map(l=>{
          const active = l.match.some(m => path.endsWith(m));
          return `<a href="${l.href}" class="${active?'active':''}">${l.label}</a>`;
        }).join('')}
      </div>
    </div>
  `;

  const holder = document.getElementById('site-header')
             || document.getElementById('navbar')
             || document.querySelector('.container')
             || document.body;
  holder.insertAdjacentHTML('afterbegin', html);
})();
