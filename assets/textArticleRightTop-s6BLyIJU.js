const n="右上角标题文章",t="简单的文章块，用于展示文章内容，标题在右上角",e=["text","article","card"],o='{"text":"<div class=\\"article-corner\\">\\n  <div class=\\"title\\">右上角标题</div>\\n  <div class=\\"content\\">\\n    这是一个标题在右上角的示例。  \\n    适合小短文或者强调内容开头。  \\n    让排版更有层次感和现代感。\\n  </div>\\n</div>\\n","params":[]}',c=`.article-corner {
  position: relative;
  background: #fafafa;
  border-radius: 10px;
  padding: 25px;
  margin: 25px;
  height: calc(100% - 100px);
  width: calc(100% - 100px);
  overflow: auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.article-corner .title {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #3498db;
}

.article-corner .content {
  font-size: 15px;
  color: #333;
  line-height: 1.8;
  white-space: pre-line;
}
`,a=7,r=11,i="text",s={name:n,desc:t,tags:e,config:o,style:c,w:7,h:11,type:i};export{o as config,s as default,t as desc,r as h,n as name,c as style,e as tags,i as type,a as w};
