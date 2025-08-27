const n="标题模板",t="黑白变换背景的标题格子",e='{"text":"标题"}',o=`.result {
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
}`,i="text",s={name:n,desc:t,config:e,style:o,type:i};export{e as config,s as default,t as desc,n as name,o as style,i as type};
