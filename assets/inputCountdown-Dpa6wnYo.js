const c="倒计时",n="简单的倒计时功能，输入总秒数，摁下CTRL+ENTER即可开始计时",t=["input","countdown"],e=`{"name":"倒计时","content":"const end = parseInt(input);\\nfor(let i = 0; i < end; i++) {\\n  setTimeout(() => {\\n    setResult(end - i);\\n  }, i * 1000);\\n};\\n  setTimeout(() => {\\n    setResult('结束');\\n  }, end * 1000);","params":[]}`,o=`.ioContainer {
  .result {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    height: calc(100% - 70px) !important;
  }

  .input {
    height: 32px !important;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .el-textarea__inner {
    text-align: center;
    font-size: large;
  }
}

.executeIcon {
  top: 36px !important;
}

.clearIcon,
.copyIcon {
  display: none;
}`,s=4,a=7,i="input",l={name:"倒计时",desc:n,tags:t,config:e,style:o,w:4,h:7,type:i};export{e as config,l as default,n as desc,a as h,c as name,o as style,t as tags,i as type,s as w};
