const n="装饰线标题文章",t="简单的文章块，用于展示文章内容，左侧装饰线",e=["text","article"],a='{"text":"<div class=\\"article article-magazine\\">\\n  <div class=\\"title\\">设计的边界</div>\\n  <div class=\\"content\\">\\n    设计并不是无限扩张的，它需要边界来塑造秩序。  \\n    边界不仅是限制，也是指引。  \\n    在边界中，创意才得以真正发挥。\\n  </div>\\n</div>","params":[]}',c=`.article-magazine {
  height: calc(100% - 100px);
  width: calc(100% - 100px);
  margin: 20px auto;
  padding: 30px;
  border-left: 6px solid #3498db;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.article-magazine .title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #2c3e50;
}

.article-magazine .content {
  font-size: 15px;
  color: #555;
  white-space: pre-line;
}
`,o=8,s=9,i="text",l={name:n,desc:t,tags:e,config:a,style:c,w:8,h:9,type:i};export{a as config,l as default,t as desc,s as h,n as name,c as style,e as tags,i as type,o as w};
