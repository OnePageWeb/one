const n="暗黑主题按钮",e="点击后可切换至暗黑主题",t=["button","themes"],a=`{"name":"暗色样式","content":{"text":"function appendWorkspaceParam(workspaceValue) {\\n    // 获取当前页面URL\\n    const currentUrl = window.location.href;\\n    // 创建URL对象以便操作参数\\n    const url = new URL(currentUrl);\\n    // 设置或更新workspace参数\\n    url.searchParams.set('style', workspaceValue);\\n    // 跳转到新URL（刷新页面）\\n    window.location.href = url.toString();\\n}\\n\\nconst name = '@{样式名称:这里填入要启用样式的名称，以英文逗号区隔?default}'\\nappendWorkspaceParam(name)","params":[{"name":"样式名称","desc":"这里填入要启用样式的名称，以英文逗号区隔","value":"black"}]}}`,o=`.button {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 5s ease infinite;
  color: #ffffff7d;
}`,c="button",r={name:n,desc:e,tags:t,config:a,style:o,type:c};export{a as config,r as default,e as desc,n as name,o as style,t as tags,c as type};
