<template>
  <div>
    <div class="back-wrap">
      <router-link to = '/'></router-link>
      <p>点亮你的小星星</p>
    </div>
    <div class="base">
      <div class="base-wrap head">
        <p>头像</p>
        <div>
          <input type="file" accept="image/*" id="head-image" @change="uploadImage">
        </div>
        <button></button>
      </div>
      <div>
        <div class="base-wrap name">
          <p>昵称</p>
          <font>{{username}}</font>
          <button @click="selectFn('昵称')"></button>
        </div>
        <div class="base-wrap sex">
          <p>性别</p>
          <font>{{sex}}</font>
          <button @click="selectFn('性别')"></button>
        </div>
      </div>
      <div class="base-wrap word">
        <p>星语</p>
        <font>女</font>
        <button></button>
      </div>
    </div>
    <div class="biao-qian">
      <p>选择你的星星属性，最多只能选五个</p>
      <ul>
        <li><button>啦啦啦啦啦</button></li>
        <li><button>啦啦啦啦</button></li>
        <li><button>啦啦啦</button></li>
        <li><button>啦啦啦</button></li>
        <li><button>啦啦啦</button></li>
        <li><button>啦啦啦</button></li>
        <li><button>啦啦啦</button></li>
      </ul>
      <button @click="selectFn('添加标签')">+ 自定义标签</button>
    </div>
    <footer>
      <button>点亮星星</button>
    </footer>
    <div class="shadow" v-if="select != ''">
      <div class="check-box">
        <h2>{{select}}</h2>
        <ul v-if="select ==='性别'">
          <li>
            <input type="radio" id="man" v-model="sex" value="男">
            <lable for="man">男</lable>
          </li>
          <li>
            <input type="radio" id="woman" v-model="sex" value="女">
            <lable for="woman">女</lable>
          </li>
        </ul>
        <input type="text" v-model="username" v-if="select === '昵称'" placeholder="填写昵称">
        <input type="text" v-model="biaoqian" v-if="select === '添加标签'" placeholder="填写标签">
        <button class="quxiao" @click="resureFn">取消</button>
        <button class="queren" @click="resureFn">确认</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .back-wrap{
    width: 100%;
    height: 1.173rem;
    background-color: #5677fc;
    text-align: center;
  }
  .back-wrap a{
    display: inline-block;
    width: 0.293rem;
    height: 0.533rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxRUM2NUJBMEJFQjExRThBREYxRkUzMjU4NUVENEU2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxRUM2NUJCMEJFQjExRThBREYxRkUzMjU4NUVENEU2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjFFQzY1QjgwQkVCMTFFOEFERjFGRTMyNTg1RUQ0RTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjFFQzY1QjkwQkVCMTFFOEFERjFGRTMyNTg1RUQ0RTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Xuc2nAAABSklEQVR42rTWMU/CQBQH8LagJuzizNfAzYlgIGV1dGVhLwnRaNhcqMagk4ODH4HFREpCMI6Gja9yvAM7cHnX3rv3fMmfpK/JL8dxfTRQSgVCaUDeIVf6OhCEH9S+NpBTKXSiDuutGvArhfSN3q/0SnXdc/c4RdC7/P6/oL5wavv6HLh0pT6w00qp8CMFdYWfqKgL/Oy6pxR4iqC3rr8JBb2hnCCs+YKgI+p5NxuvCJr4PJ1lK018Z0kROuRMPv0xRtBr7vCPYCjXkeG9Zo9/0GuQH2TVLe5W6JxY8DYXFsfNxrEUjjWPIN8IfsmFRfCimza8w4WL8C4XzvEVgsdcOMeXCN7jwmScevArkIUL7vO4RhY85sI6ISQrwrmvsZltW8Kd7l8hJIM0jX6XC+vSfxZzA/+QgHP8C3L+d30hBes6gwwgn5DZVoABANZqdhA+IPi7AAAAAElFTkSuQmCC);
    position: absolute;
    top: 0.293rem;
    left: 0.533rem;
  }
  .back-wrap p{
    font-size: 36px;
    color: #ffffff;
    line-height: 1.173rem;
  }
  .base{
    width: 10rem;
    /*height: 6.9rem;*/
    height: 7.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .base-wrap{
    width: 10rem;
    display: flex;
    align-items: center;
  }
  .head{
    height: 1.707rem;
    box-shadow: 0 0.267rem 5px #f1f1f1, 0 -0.267rem 5px rgb(241,241,241);
  }
  .name{
    height: 1.173rem;
    border-bottom: 1px solid #dfdfdd;
  }
  .sex{
    height: 1.173rem;
  }
  .word{
    height: 1.707rem;
    box-shadow: 0 0.25rem 2px #f1f1f1, 0 -0.25rem 2px rgb(241,241,241);
  }
  .base-wrap p{
    font-size: 32px;
    line-height: 1;
    color: #565656;
    margin-left: 0.52rem;
  }
  .base-wrap button{
    width: 0.227rem;
    height: 0.413rem;
    background-color: #ffffff;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAfCAYAAAABZyaKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM1NzEzMTU2MEJFQjExRThBMDI2QjNGMjhGNDQzODFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM1NzEzMTU3MEJFQjExRThBMDI2QjNGMjhGNDQzODFFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzU3MTMxNTQwQkVCMTFFOEEwMjZCM0YyOEY0NDM4MUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzU3MTMxNTUwQkVCMTFFOEEwMjZCM0YyOEY0NDM4MUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4NMIjBAAAB00lEQVR42pSWWUoDQRCGJ5MRBXEhGg/hsw8eIkfQRw3uhiRGDRqNBo1rVMRxAxWP4CmEvHoE44IQNbhvf8k/MAxZugs+Jj0h31RXV/fEZ9t2j2EYg+AMnIOSoRHhcNiwcN0GLaALyPgIvOmITHABfKAOrII+UK8rGeFUfkADWKLI0pE8gnGXqBEsggFmqCSRKIIYOKVIapRmlsoSiQeQACfgF7SCFIjoSCTuwTQ4pigAkiCqI5G4BTPgkOM2MFVNZFa4fwPmwL5HFNORSBRYXNslmiwnMmvU7JqiPY9oQkfiZLTgmVrCnZGp2JQFT40CXMW4DPyhUEi1u2V3X3KPdbKPuvP5vN809OIOrPMq0SRLryuRp/dzOhLv4MDSEAS4MnGOX8AayKhm0u5pthLPnhROtg+VTIJ8epRHwzPIcbX+o5akg40VoUDOni3ubkNFEmRTjbGfijyPU6ptH2QRR6WXKMiVE1TKxCniML93BOlKKVtlljHpEkgNNmUZeUjVlEgjzfJFJvef2AfL4Lta9R1JM5h3CWQZVyj5qtUDFl8RstWHWETpxCzYYFsbKpIsM/DxRxkW8lV1P4ikl58/OaUdZqP1GpXlvGJRd3X/FUj8CTAAZc9r2xTsDzMAAAAASUVORK5CYII=);
    position: absolute;
    right: 0.533rem;
  }
  .name font,.sex font{
    font-size: 26px;
    line-height: 1;
    color: #989898;
    position: absolute;
    right: 1.027rem;
  }
  .word font{
    display: inline-flex;
    width: 5.5rem;
    height: 0.973rem;
    justify-content: flex-end;
    flex-wrap: wrap;
    font-size: 26px;
    /*line-height: 1;*/
    color: #989898;
    position: absolute;
    right: 1.027rem;
  }
  .head div{
    width: 1.44rem;
    height: 1.44rem;
    margin-left: 6.173rem;
    background-color: #f1f1f1;
    border-radius: 50%;
    background-size: auto;
    background-position: center;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJEMUNFREI0MEJFQjExRThBNkFDQ0Q2ODg3NzgyQ0U3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJEMUNFREI1MEJFQjExRThBNkFDQ0Q2ODg3NzgyQ0U3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkQxQ0VEQjIwQkVCMTFFOEE2QUNDRDY4ODc3ODJDRTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkQxQ0VEQjMwQkVCMTFFOEE2QUNDRDY4ODc3ODJDRTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5SBYLxAAABQElEQVR42mKcMWMGA5WBCRA3Q9k1QHwWn+L09HSSDGehsmOFgPggEHNB+bZALAvE76llAROVHayJ5FgQ4AZiLWpaQG0H/ydSbNA4+B+RYoPGwTQHow4edfCog0cdPOrgUQePOnjUwYPJwW+JFCMbsCA5XBZKk9t+/Q3EuljEQWLfgJgVm6aZM2cSMpcR2kR9DOxO/QM52AKIlwKxEhXawthibC0eOVLAPaDnokGGLKCCYwklL2okPZAb5zNBO45DBQiBHJw3hBycB0rDK4D4AhDrAPFfCvpgf6E95E408XIgvgbEzBQkNZDey8BMdxNWStyAYkrBeSwOBmXop7g0kDqQQu1yWJZIsdGabtTBow4edfCog0cdPOrgUQePOnggHMxIpNigcTArkWKDxsF3iRQbNA4G9SyioDQym2oAIMAA/wI13Ps98eIAAAAASUVORK5CYII=);
  }
  #head-image{
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .biao-qian{
    width: 10rem;
    height: 7rem;
    background-color: rgb(241,241,241);
  }
  .biao-qian p{
    font-size: 24px;
    line-height: 2.5;
    color: #989898;
    margin-left: 0.533rem;
  }
  .biao-qian ul{
    margin-left: 0.533rem;
    height: 5.067rem;
  }
  .biao-qian ul li{
    float: left;
    margin-bottom: 0.267rem;
  }
  .biao-qian li button{
    width: auto;
    height: 1rem;
    line-height: 1rem;
    background: transparent;
    border-radius: 0.267rem;
    border: 1px solid #dfdfdd;
    color: #dfdfdd;
    font-size: 0.48rem;
    padding-left: 0.267rem;
    padding-right: 0.267rem;
    text-align: center;
    margin-right: 0.267rem;
  }
  .button-checked{
    color: #5677fc;
    border: 1px solid #5677fc;
  }
  .biao-qian > button{
    width: 3.333rem;
    height: 1rem;
    background: transparent;
    color: #565656;
    font-size: 36px;
    line-height: 1rem;
    border-radius: 0.267rem;
    border: 1px solid #dfdfdd;
    text-align: center;
    margin-left: 0.533rem;
  }
  footer{
    width: 10rem;
    height: 2.36rem;
    background-color: rgb(241,241,241);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer button{
    width: 8.933rem;
    height: 1.6rem;
    background-color: #5677fc;
    border-radius: 0.2rem;
    font-size: 0.48rem;
    color: #ffffff;
    vertical-align: center;
  }
  .shadow{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(127,127,127,0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .check-box{
    width: 7.6rem;
    height: 5.467rem;
    background-color: #ffffff;
    border-radius: 0.4rem;
    font-size: 36px;
    color:rgb(86,86,86);
    padding-left: 0.5rem;
    z-index: 1;
    position: relative;
  }
  .check-box h2{
    margin-top: 0.534rem;
  }
  .check-box ul{
    margin-top: 0.8rem;
  }
  .check-box ul > li:last-child{
    margin-top: 0.534rem;
  }
  input[type="radio"] + lable::before{
    content: "\a0";
    display: inline-block;
    vertical-align: .1em;
    width: .8em;
    height: .8em;
    margin-right: 1em;
    border-style: solid;
    border-width: 4px;
    border-color: #565656;
    border-radius: 50%;
    background: white;
    text-indent: .15em;
    line-height: .65;
  }
  /*隐藏默认的单选框样式*/
  input[type="radio"]{
    width: 1em;
    height: 1em;
    position: absolute;
    clip: rect(0,0,0,0);
  }
  input[type="radio"]:checked + lable::before{
    content: "\2713";
    border-color: #5677fc;
  }
  .check-box button{
    width: 1.334rem;
    height: 0.8rem;
    position: absolute;
    bottom: 0.534rem;
    background: white;
    color: #5677fc;
    font-size: 36px;
  }
  .check-box button:hover{
    background-color: #f1f1f1;
  }
  .queren{
    right: 0.267rem;
  }
  .quxiao{
    right: 1.867rem;
  }
  input[type="text"]{
    margin-top: 0.8rem;
    font-size: 34px;
    color: rgb(152,152,152); 
  }
</style>

<script>
  export default{
    data(){
      return{
        userHead: null,
        sex: '女',
        username: '',
        biaoqian: '',
        select: ''
      } 
    },
    methods:{
      uploadImage(){
        let userHead = this.userHead
        let formdata = new FormData()
        formdata.append('userHead',userHead)
        this.$http.post('',formdata).then((res)=>{

        })
      },
      selectFn(title){
        this.select = title
      },
      resureFn(){
        this.select = ''
      }
    }
  }
</script>