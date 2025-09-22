const n="标题模板",t="黑白变换背景的标题格子",e=["text","title"],o='{"text":"标题"}',i=`.result {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  background: linear-gradient(-45deg, #ffffff5e, #000000cc);
  background-size: 400% 400%;
  animation: gradientBG 10s ease infinite;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,s="text",a={name:n,desc:t,tags:e,config:o,style:i,type:s};export{o as config,a as default,t as desc,n as name,i as style,e as tags,s as type};
