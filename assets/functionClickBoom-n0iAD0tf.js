const n="鼠标点击波浪特效",e="鼠标点击后出现扩张的波浪特效",t=`{"content":{"text":"setResult('Boom')\\nconst ID = \\"clickExplosionHandler\\";\\nif (window[ID]) return; // 已存在则不重复绑定\\nwindow[ID] = true;\\n\\ndocument.addEventListener(\\"click\\", e => {\\n  const circle = document.createElement(\\"div\\");\\n  Object.assign(circle.style, {\\n    position: \\"fixed\\",\\n    left: e.clientX - 10 + \\"px\\",\\n    top: e.clientY - 10 + \\"px\\",\\n    width: \\"20px\\",\\n    height: \\"20px\\",\\n    borderRadius: \\"50%\\",\\n    border: \\"2px solid @{波浪颜色?rgba(0,150,255,0.8)}\\",\\n    pointerEvents: \\"none\\",\\n    zIndex: 1000,\\n    transform: \\"scale(0)\\",\\n    opacity: 1,\\n    transition: \\"transform 0.6s ease, opacity 0.6s ease\\"\\n  });\\n  document.body.appendChild(circle);\\n\\n  // 强制渲染，触发动画\\n  requestAnimationFrame(() => {\\n    circle.style.transform = \\"scale(6)\\";\\n    circle.style.opacity = \\"0\\";\\n  });\\n\\n  setTimeout(() => circle.remove(), 600);\\n});","params":[{"name":"波浪颜色","desc":"","value":"rgba(0,150,255,0.8)"}]},"autoExecute":true}`,o=`.result {
  background: #ffffff61;
  border-radius: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}`,s=3,i=3,c="function",r={name:n,desc:e,config:t,style:o,w:3,h:3,type:c};export{t as config,r as default,e as desc,i as h,n as name,o as style,c as type,s as w};
