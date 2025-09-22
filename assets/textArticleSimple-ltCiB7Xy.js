const n="简单文章块",t="简单的文章块，用于展示文章内容",i=["text","article"],e='{"text":"<div class=\\"article article-minimal\\">\\n  <div class=\\"title\\">极简主义的美学</div>\\n  <div class=\\"content\\">\\n    极简不仅是一种设计风格，更是一种生活态度。  \\n    去掉冗余，只留下最本质的表达。  \\n    在有限的空间中，留给读者无限的想象。\\n  </div>\\n</div>","params":[]}',a=`.article-minimal {
  margin: 20px;
  height: calc(100% - 100px);
  width: calc(100% - 100px);
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  line-height: 1.8;
  overflow: auto;
  font-family: "Helvetica Neue", sans-serif;
}

.article-minimal .title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #222;
}

.article-minimal .content {
  font-size: 16px;
  color: #444;
  white-space: pre-line;
}
`,o=8,l=13,c="text",s={name:n,desc:t,tags:i,config:e,style:a,w:8,h:13,type:c};export{e as config,s as default,t as desc,l as h,n as name,a as style,i as tags,c as type,o as w};
