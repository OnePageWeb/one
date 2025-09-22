const n="底部标题文章",t="简单的文章块，用于展示文章内容，标题在底部",e=["text","article"],o='{"text":"<div class=\\"article-bottom\\">\\n  <div class=\\"content\\">\\n    这是一种把标题放在底部的设计。  \\n    内容展示为主，标题更像一个收尾点睛。  \\n    适合长文本或叙事类文章。\\n  </div>\\n  <div class=\\"title\\">底部标题</div>\\n</div>\\n","params":[]}',c=`.article-bottom {
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  height: 100%;
}

.article-bottom .content {
  padding: 25px;
  font-size: 15px;
  line-height: 1.9;
  color: #444;
  white-space: pre-line;
  overflow: auto;
  height: calc(100% - 98px);
}

.article-bottom .title {
  background: #2ecc71;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  padding: 12px;
}
`,s=7,a=9,i="text",l={name:n,desc:t,tags:e,config:o,style:c,w:7,h:9,type:i};export{o as config,l as default,t as desc,a as h,n as name,c as style,e as tags,i as type,s as w};
