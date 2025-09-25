const n="左侧标题文章",t="简单的文章块，用于展示文章内容，标题在左侧",e=["text","article","card"],i='{"text":"<div class=\\"article-sideblock\\">\\n  <div class=\\"title\\">侧边块标题</div>\\n  <div class=\\"content\\">\\n    标题单独放在左侧彩色块中，  \\n    内容放在右侧白底块中。  \\n    类似于书籍章节或报告摘要的排版。\\n  </div>\\n</div>\\n","params":[]}',c=`.article-sideblock {
  display: grid;
  grid-template-columns: 100px 1fr;
  border-radius: 10px;
  overflow: hidden;
  min-width: 200px;
  height: 100%;
}

.article-sideblock .title {
  background: #2575fc;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  writing-mode: vertical-rl;
  height: calc(100% - 40px);
  overflow: auto;
  letter-spacing: 2px;
}

.article-sideblock .content {
  background: #fff;
  font-size: 15px;
  color: #333;
  line-height: 1.8;
  padding: 25px;
  white-space: pre-line;
  height: 100%;
  overflow: auto;
}
`,l=8,s=9,o="text",d={name:n,desc:t,tags:e,config:i,style:c,w:8,h:9,type:o};export{i as config,d as default,t as desc,s as h,n as name,c as style,e as tags,o as type,l as w};
