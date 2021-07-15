<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2019-03-21 11:23:18
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-15 15:25:33
 -->
<template>
  <div class="background-pic"
       id="background-pic">
    <div class="background-title">
      <svg version="1.1"
           id="图层_1"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           x="0px"
           y="0px"
           width="116px"
           height="48px"
           viewBox="0 0 58.333 24.333"
           enable-background="new 0 0 58.333 24.333"
           xml:space="preserve">

        <path class="yy"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="none"
              d="M57.52,23.36h-1.2l-0.72-0.24l-0.48-0.72V2.24l-0.24-0.72l-0.96-0.48
		L53.2,1.28L52.48,2v21.36L41.2,1.04v21.6l-0.48,0.96h-9.36l2.4-0.96l1.2-0.96l1.2-1.68l0.48-1.68v-2.16l-0.24-1.68l-1.2-1.68
		l-1.44-1.2l-1.44-0.48l-2.16-0.24l-1.44-0.48l-0.96-0.72l-0.72-1.44V6.56l0.72-1.44l0.96-0.72l0.96-0.48h1.44l1.2,0.24l1.2,1.2
		l0.24,1.44L34,8.48l0.96,0.96h1.2l0.72-0.96V6.32L36.4,4.64l-0.72-1.2l-1.2-0.96l-1.44-0.96l-1.92-0.24h-1.2L28,1.52l-1.44,0.96
		l-1.2,0.96L24.4,4.88L24.16,6.8v1.92l0.48,1.44l1.2,1.68l1.44,0.96l1.2,0.48l1.44,0.24l1.44,0.24l1.68,0.72l0.96,1.2v2.4l-0.48,1.44
		l-1.44,0.96l-1.44,0.24l-1.92-0.48l-1.68-1.92V15.2l-0.72-0.72h-1.44l-0.72,0.72v7.44l-0.72,0.96H20.8l-0.96-0.72l-0.24-1.92
		l-1.2-1.92l-1.92-0.96c0,0-1.574-0.054-3.226-0.111c-1.82-0.063-3.734-0.129-3.734-0.129s-0.772-0.234-1.44-0.72
		c-0.652-0.475-1.2-1.2-1.2-1.2s-0.415-0.289-0.72-0.96c-0.295-0.649-0.48-1.68-0.48-1.68s-0.064-1.534,0-2.88
		c0.055-1.16,0-2.16,0-2.16L6.4,6.32l1.68-1.44c0,0,2.1-0.96,2.16-0.96l2.64,0.24l2.16,1.2l1.44,2.16l0.24,2.4l1.44,0.96l1.2-0.72
		V6.8c0,0-0.429-1.034-0.96-1.92c-0.548-0.914-1.2-1.68-1.2-1.68S16.167,2.473,15.28,2c-0.913-0.487-1.68-0.72-1.68-0.72
		s-0.947-0.24-1.92-0.24c-1.063,0-2.16,0.24-2.16,0.24S8.447,1.517,7.36,2C6.287,2.477,5.2,3.2,5.2,3.2s-0.874,0.9-1.44,1.92
		C3.13,6.254,3.04,7.76,3.04,7.76S2.8,8.783,2.8,10.4c0,1.847,0.24,4.08,0.24,4.08s0.468,1.721,1.2,2.88
		c0.707,1.12,1.68,1.68,1.68,1.68l3.6,1.68h6.24c0,0,0.67,0.074,0.96,0.48c0.309,0.433,0.24,0.96,0.24,0.96s0.022,0.405-0.24,0.72
		c-0.33,0.396-0.96,0.72-0.96,0.72H0.64" />
      </svg>
      <!-- <span class="font-white font-size">的个人主页</span> -->
    </div>
    <div class="background-modal"
         id="background-modal">
      <div class="content">
        <div class="photo"
             id="photo"></div>
        <div class="resume font-white font-size">
          <p>大前端开发工程师</p>
          <hr>
          <p>
          <div class="resume-detail">姓名</div>
          <span>曹双娜</span>
          </p>
          <!-- <p><div class="resume-detail">生日</div> <span >1990-02-27</span></p> -->
          <p>
          <div class="resume-detail">地址</div>
          <span>中国 · 青岛</span>
          </p>
          <!-- <p>
          <div class="resume-detail">E-Mail</div>
          <span>caoshuangna@163.com</span>
          </p> -->
          <p>
          <div class="resume-detail">GitHub</div>
          <span>https://github.com/shiwenna</span>
          </p>
          <p>
          <div class="resume-detail">Zhihu</div>
          <span>https://www.zhihu.com/people/shi-wen-27-53</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  font-size: 10px;
}

@media only screen and (min-width: 401px) {
  html {
    font-size: 15px !important;
  }
}

@media only screen and (min-width: 428px) {
  html {
    font-size: 16.75px !important;
  }
}

@media only screen and (min-width: 481px) {
  html {
    font-size: 16px !important;
  }
}

@media only screen and (min-width: 569px) {
  html {
    font-size: 16px !important;
  }
}

@media only screen and (min-width: 641px) {
  html {
    font-size: 16px !important;
  }
}
@media only screen and (min-width: 1440px) {
  html {
    font-size: 25px !important;
  }
}

.background-pic {
  background: hsl(14, 10%, 41%) url(../assets/background4.png) no-repeat;
  background-size: contain;
  text-align: left;
}

.background-modal {
  width: 80%;
  background-color: #1d1917a3;
  background-color: rgba(29, 25, 23, 0);
  margin: auto;
}

.background-title {
  margin: auto;
  width: 80%;
  padding: 50px 0 30px;
}

.yy {
  stroke-width: 2;
  stroke: #fff;
  animation: lineMove 6s infinite;
}

@keyframes lineMove {
  0% {
    stroke-dasharray: 324, 3;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 324, 3;
    stroke-dashoffset: 324;
  }
}

.font-white {
  color: white;
}

.font-size {
  font-size: 1.5rem;
}

.content {
  margin: auto;
  /* width: 90%; */
  padding: 100px 0 30px;
}

.photo {
  background-size: contain;
  width: 45%;
  display: inline-block;
}

.resume {
  width: 51%;
  display: inline-block;
}

.resume-detail {
  width: 30%;
  display: inline-block;
}
</style>
