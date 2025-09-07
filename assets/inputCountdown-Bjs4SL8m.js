const o="倒计时",n="简单的倒计时功能，输入总秒数，摁下CTRL+ENTER即可开始计时",e=`{"name":"倒计时","content":"const end = parseInt(input);\\nfor(let i = 0; i < end; i++) {\\n  setTimeout(() => {\\n    setResult(end - i);\\n  }, i * 1000);\\n};\\nconst resultText = '结束'\\nsetTimeout(() => {\\n  setResult(resultText);\\n}, end * 1000);","params":[{"name":"结束语","desc":"","value":"结束"}]}`,t=`.ioContainer {
  .el-textarea__inner {
    text-align: center;
    font-size: large;
  }
  .result {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    height: calc(100% - 76px) !important;
  }

  .input {
    height: 38px !important;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

}

.executeIcon {
  top: 42px !important;
}

.clearIcon, .copyIcon {
  display: none;
}`,i="input",s={name:"倒计时",desc:n,config:e,style:t,type:i};export{e as config,s as default,n as desc,o as name,t as style,i as type};
