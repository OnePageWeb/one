const n="简单链接",t="简单链接，鼠标移上去后显示下划线",e=["text","link"],o='{"text":"<a href=\\"@{链接地址?https://github.com/Verlif/one}\\" class=\\"underline-link\\" target=\\"_blank\\">@{名称?项目地址}</a>","params":[{"name":"链接地址","desc":"","value":"https://github.com/Verlif/one"},{"name":"名称","desc":"","value":"项目地址"}]}',i=`.result {
  display: flex;
  align-items: center;
  justify-content: center;

  .underline-link {
    text-decoration: none;
    color: #3498db;
    font-weight: bold;
    position: relative;
  }

  .underline-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    left: 0;
    bottom: -3px;
    background: #3498db;
    transition: width 0.3s;
  }

  .underline-link:hover::after {
    width: 100%;
  }
}`,l=4,a=2,s="text",c={name:n,desc:t,tags:e,config:o,style:i,w:4,h:2,type:s};export{o as config,c as default,t as desc,a as h,n as name,i as style,e as tags,s as type,l as w};
