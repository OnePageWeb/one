const n="图片显示",t="配置图片地址来显示一张图片",s=["text","image"],o='{"text":"<img \\n    src=\\"@{图片地址?https://picsum.photos/800/600}\\" \\n    alt=\\"响应式图片示例\\" \\n    class=\\"responsive-image\\"\\n>","params":[{"name":"图片地址","desc":"","value":"https://picsum.photos/800/600"}]}',e=`.image-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
}

.responsive-image {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 80vh;
    display: block;
    margin: 0 auto;
}`,i=11,c=14,a="text",m={name:n,desc:t,tags:s,config:o,style:e,w:11,h:14,type:a};export{o as config,m as default,t as desc,c as h,n as name,e as style,s as tags,a as type,i as w};
