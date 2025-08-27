const o="倒计时",n="简单的倒计时功能，输入总秒数，摁下CTRL+ENTER即可开始计时",t=`{"name":"倒计时","content":"const end = parseInt(input);\\nfor(let i = 0; i < end; i++) {\\n  setTimeout(() => {\\n    setResult(end - i);\\n  }, i * 1000);\\n};\\n  setTimeout(() => {\\n    setResult('结束');\\n  }, end * 1000);"}`,e=`.result {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}`,s="input",i={name:"倒计时",desc:n,config:t,style:e,type:s};export{t as config,i as default,n as desc,o as name,e as style,s as type};
