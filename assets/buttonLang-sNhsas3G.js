const n="语言切换",t="点击后可切换至对应语言",a=["button","language"],e=`{"name":"中文","content":{"text":"function appendWorkspaceParam(workspaceValue) {\\n    // 获取当前页面URL\\n    const currentUrl = window.location.href;\\n    // 创建URL对象以便操作参数\\n    const url = new URL(currentUrl);\\n    // 设置或更新workspace参数\\n    url.searchParams.set('lang', workspaceValue);\\n    // 跳转到新URL（刷新页面）\\n    window.location.href = url.toString();\\n}\\n\\nconst name = '@{语言标识:zh(中文); en(英文)?zh}'\\nappendWorkspaceParam(name)","params":[{"name":"语言标识","desc":"zh(中文); en(英文)","value":"zh"}]}}`,o=`.button {
  background-color: unset !important;

  &:hover {
    animation: upAndDown 0.5s ease-in-out infinite;
  }
}`,c="button",r={name:n,desc:t,tags:a,config:e,style:o,type:c};export{e as config,r as default,t as desc,n as name,o as style,a as tags,c as type};
