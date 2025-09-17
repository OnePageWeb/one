const n="简单链接",t="简单链接，鼠标移上去后显示下划线",e='{"text":"<a href=\\"@{链接地址?https://github.com/Verlif/one}\\" class=\\"underline-link\\" target=\\"_blank\\">@{名称?项目地址}</a>","params":[{"name":"链接地址","desc":"","value":"https://github.com/Verlif/one"},{"name":"名称","desc":"","value":"项目地址"}]}',o=`.result {
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
}`,s=4,l=2,i="text",a={name:n,desc:t,config:e,style:o,w:4,h:2,type:i};export{e as config,a as default,t as desc,l as h,n as name,o as style,i as type,s as w};
