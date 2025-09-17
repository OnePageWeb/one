const n="简单卡片",t="展示标题与单行内容的简单卡片",e='{"text":"<div class=\\"card-simple\\">\\n  <div class=\\"title\\">@{标题?标题}</div>\\n  <div class=\\"content\\">@{内容?单行内容}</div>\\n</div>","params":[{"name":"标题","desc":"","value":"标题"},{"name":"内容","desc":"","value":"单行内容"}]}',s=`.card-simple {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin: 15px 0;
}

.card-simple .title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-simple .content {
  font-size: 14px;
  color: #555;
}
`,o=7,c=8,a="text",d={name:n,desc:t,config:e,style:s,w:7,h:8,type:a};export{e as config,d as default,t as desc,c as h,n as name,s as style,a as type,o as w};
