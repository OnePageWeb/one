const n="工作区切换",o="可以通过修改参数来切换到不同的工作区",e=`{"name":"工作","content":{"text":"function appendWorkspaceParam(workspaceValue) {\\n    // 获取当前页面URL\\n    const currentUrl = window.location.href;\\n    // 创建URL对象以便操作参数\\n    const url = new URL(currentUrl);\\n    // 设置或更新workspace参数\\n    url.searchParams.set('workspace', workspaceValue);\\n    // 跳转到新URL（刷新页面）\\n    window.location.href = url.toString();\\n}\\n\\nconst name = '@{工作区名称:这里填入工作区名称?工作}'\\nappendWorkspaceParam(name)","params":[{"name":"工作区名称","desc":"这里填入工作区名称","value":"工作"}]}}`,t=`.button {
  background-color: unset !important;

  &:hover {
    animation: upAndDown 0.5s ease-in-out infinite;
  }
}`,a="button",r={name:n,desc:o,config:e,style:t,type:a};export{e as config,r as default,o as desc,n as name,t as style,a as type};
