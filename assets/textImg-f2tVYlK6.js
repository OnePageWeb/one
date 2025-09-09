const n="图片显示",t="配置图片地址来显示一张图片",s='{"text":"<img \\n    src=\\"@{图片地址?https://picsum.photos/800/600}\\" \\n    alt=\\"响应式图片示例\\" \\n    class=\\"responsive-image\\"\\n>","params":[{"name":"图片地址","desc":"","value":"https://picsum.photos/800/600"}]}',o=`.image-container {
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
}`,a=11,i=14,e="text",c={name:n,desc:t,config:s,style:o,w:11,h:14,type:e};export{s as config,c as default,t as desc,i as h,n as name,o as style,e as type,a as w};
