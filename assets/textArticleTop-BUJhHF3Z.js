const n="顶部标题文章",t="简单的文章块，用于展示文章内容，标题在顶部",e=["text","article","card"],i='{"text":"<div class=\\"article-split\\">\\n  <div class=\\"title\\">撞色标题</div>\\n  <div class=\\"content\\">\\n    标题和内容放在不同背景块中，  \\n    形成强烈的视觉分区。  \\n    非常适合博客摘要或创意展示。\\n  </div>\\n</div>\\n","params":[]}',c=`.article-split {
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
}

.article-split .title {
  background: #ff6b6b;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 20px;
}

.article-split .content {
  background: #f9f9f9;
  height: calc(100% - 96px);
  color: #333;
  font-size: 15px;
  line-height: 1.8;
  padding: 20px;
  white-space: pre-line;
  overflow: auto;
}
`,s=7,l=9,o="text",a={name:n,desc:t,tags:e,config:i,style:c,w:7,h:9,type:o};export{i as config,a as default,t as desc,l as h,n as name,c as style,e as tags,o as type,s as w};
