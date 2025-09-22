const n="带图链接",t="通过配置来显示一个简单的链接，点击即可跳转",e=["text","link"],o='{"text":"<a href=\\"@{链接地址?https://github.com/Verlif/one}\\" class=\\"link-block\\" target=\\"_blank\\">\\n  <img src=\\"@{图标地址?https://picsum.photos/100/100}\\" alt=\\"图标\\" class=\\"link-image\\">\\n  <span class=\\"link-name\\">@{标签名称?标签名称}</span>\\n</a>","params":[{"name":"链接地址","desc":"","value":"https://github.com/Verlif/one"},{"name":"图标地址","desc":"","value":"https://picsum.photos/200/200"},{"name":"标签名称","desc":"","value":"标签名称"}]}',s=`.result {
    align-items: center;
    display: flex;
    justify-content: center;
}

.link-block {
    text-align: center;
    text-decoration: none;
    padding: 8px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
}

.link-block:hover {
    background-color: #ffffff24;
}

.link-image {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    object-fit: cover;
    margin-bottom: 8px;
}

.link-name {
    color: #333;
    font-size: 16px;
    font-weight: bold;
}`,c=2,a=4,i="text",l={name:n,desc:t,tags:e,config:o,style:s,w:2,h:4,type:i};export{o as config,l as default,t as desc,a as h,n as name,s as style,e as tags,i as type,c as w};
