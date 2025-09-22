const n="快捷键按钮",e="模拟快捷键按下，ALT + 【设定值】",t=["button","shortcutKey"],o=`{"name":"Q","content":{"text":"const key = '@{快捷按键值:小写字母?q}'\\n\\n// 创建键盘按下事件\\nconst keydownEvent = new KeyboardEvent('keydown', {\\n  key: key,\\n  keyCode: 'KeyD',\\n  altKey: true,\\n  code: key\\n});\\n\\n// 创建键盘释放事件\\nconst keyupEvent = new KeyboardEvent('keyup', {\\n  key: key,\\n  keyCode: 'KeyD',\\n  altKey: true,\\n  code: key\\n});\\n\\n// 创建键盘释放事件\\nconst altKeyupEvent = new KeyboardEvent('keyup', {\\n  key: 'Alt',\\n  keyCode: 'alt',\\n  altKey: true,\\n  code: 'Alt'\\n});\\n\\n// 向文档或特定元素触发事件\\nwindow.dispatchEvent(keydownEvent);\\n// 模拟按下后释放\\nsetTimeout(() => {\\n  window.dispatchEvent(keyupEvent);\\n  window.dispatchEvent(altKeyupEvent);\\n}, 100);","params":[{"name":"快捷按键值","desc":"小写字母","value":"q"}]}}`,y=`.button {

  svg {
    width: 60%;
    fill: white;

    &:hover {
       transform: rotate(180deg);
    }
  }
}
`,c=2,a=3,s="button",d={name:n,desc:e,tags:t,config:o,style:y,w:2,h:3,type:s};export{o as config,d as default,e as desc,a as h,n as name,y as style,t as tags,s as type,c as w};
