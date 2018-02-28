<template>
  <div class="footer">
    <div id="one">
      <router-link to='/'></router-link>
      <span>星空</span>
    </div>
    <div id="two">
      <router-link to='/login'></router-link>
      <span>聊天</span>
    </div>
    <div id="three">
      <router-link to='/userMessage'></router-link>
      <span>个人</span>
    </div>
  </div>
</template>

<style scoped>
  .footer{
    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 1;
    background-color: white;
    width: 10rem;
    height: 1.307rem;
    justify-content: space-around;
    align-items: center;
  }
  .footer > div{
    width: 0.667rem;
    height: 1rem;
    text-align: center;
  }
  .footer a{
    display: block;
    width: 100%;
    height: 0.667rem;
  }
  #one a{
     background-image: url(../assets/images/xx@2x.png);
  }
  #one a.router-link-active{
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYxN0M2MzlCMEU3MjExRTg4REFFQzUxNDE1OEZFNTI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYxN0M2MzlDMEU3MjExRTg4REFFQzUxNDE1OEZFNTI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjE3QzYzOTkwRTcyMTFFODhEQUVDNTE0MTU4RkU1MjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjE3QzYzOUEwRTcyMTFFODhEQUVDNTE0MTU4RkU1MjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Oe8yyAAAE30lEQVR42tRaaWhUVxR+STTa4K51wTXqGJMKFtQq/nChiLGK4hbqRkURFUtx31BscBepBhFFoa3iikvABQ0Vt5i6xhVr4t7EFUFUoo1paPxO53vkMExmXsy7k5cDH/fMnffmvu8uZ3sTlTKv2DIo/YGJwH/AWuCK2wPsXRXzf1vNIIluwHH1eSTQFvjbxGDRBolsYPuOkLFWmRos2uBqdKc+jRD5HmhZlYiksi0CdhBF7FtQVYgkAAOob1b9W9lOAupXBSJLlL5S6SvYioGZ7XUisv9HUd8GvFDfPQN2Up8OxHmZyHylLw3yvd0XpwyA54g0ACZTTwceBLkmFzhCfS4Q40Uic9SDLQlx3c9sGwETvEbkC+An6ieBWyGuzQayqC/2GpFp6vAucnD9YmUchnmFSIw65JeB8w7uOaVWbaUXiMQDfwANg1itcLKQbQdgF/BlRR7EafRbC2gNdARaAZ0YyfYEYnnN7zwfTkWs1z5GxeJ7vmOYfx+4TR+UAzwE3peXiIQXTdkmAi3Yyl6uE+J30ujkyispDGPEbNcFviW0vAUekdQT4C/gHvBcm/goJlZy+MZymcPJayCPPyizdwC4WcEt2gUYylVO4qqHi8dKgDsyEUiuNgiRyQHBnS13gXzgMR80nw5NZucfy6zE8fx14A6Rrezj9g422YOrKad0laZTZvwlM7kSq3LkA8/J7YD+KJJpQoeaytX8QYi84kWylNcCAj2vSQl3iKAmsI79L6JVOBHPw9TT8r4kccJluxUAq6MZMiQr55ap0lQvipyRP2nl/gX64LDn2w4xAxiinORpoKsHSfgUCTG3vUAiO9CzHwKGU5f9dw7o7CESrfhMDXlWegMXygpRDgIjqNcgey+QacM4rjE/9+GzhYy1xMGNVvY8k969sqQZV8ImIZ7/rNOgcTcwhnpt4CLjrMogIWM35+d+ZcVzoaLfXcpZ1ubKtI0gicZMwOyC3iDgxOeG8b9Z/iK0nZqeZ25uWmxjE8/PEhkfrWg+8iswVc3SpggQWUNTazGDPOZWYrVZBZYpas+aEPERU1ShIt3tDPEXpX9jkMjXQHXL/04lzUSqW6T06gaJxJrO2ROUnmeQSJ56Np8JIokqV8gxSOSBSi0STa6IDPTGIJFiNVEJJojYnj03AuY31xSRGLVfI0HkbsDkuUakNUtDkSbicxpJOC3QtQ+y7E6km0oDbjEALA+RWI59yS0itvX4yFpWOOnLWkDvgH4hIn8c2B/m/kc0KPWY2l5ya2vZh+4ey0VlidSftjPUtkkUKmcqtYB9DABDFTkK1aokunlGNJGy8oY0bp9x7HsKzGDoL5hp+Yt8djSbxeg6Pozl6miCSE4Qa7aQg9oveqSysYz3rLf8NdqnrEElMBAs5LXjee9abqNgRHxuEWmjot3rqn8SB1vOxEtkC2dQasnBKuhSak0loY0qbptl+eu4c9S1N9Qk1nODyFfK40rVohdbeeh2/C6dEbHUkR86jKd+ZMnpAPuaMg+R7TmQxYUPtFxJbhApUPpe4IxVWsCT9xnJTH4uf4a/yGbVJtkq/QuUGAx5d7LHKi2WF7hBJIsrIKa6B/vu81CLn8hwwQFm8LfGKfPejzWsw5aD1xZO/Egx/cJSWp9MprsfDXj0HTTPU7mFhZSj13mfBBgAD4QK5sa3u2wAAAAASUVORK5CYII=);
  }
  #two a{
    background-image: url(../assets/images/talk@2x.png);
  }
  #two a.router-link-active{
    background-image: url(../assets/images/xxi@2x.png);
  }
  #three a{
    background-image: url(../assets/images/gr@2x.png);
  }
  #three a.router-link-active{
    background-image: url(../assets/images/geren@2x.png);
  }
  .footer span{
    font-size: 0.267rem;
    line-height: 1;
    color: #565656;
  }
  a.router-link-active + span{
    color: #5677fc;
  }
</style>