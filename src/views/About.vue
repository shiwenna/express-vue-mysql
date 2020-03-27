<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-03-19 09:21:38
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-03-27 17:35:27
 -->
<template>
  <div class="about">
    <van-row>
      <van-col span="8"></van-col>
      <van-col span="8">
        <van-form @submit="onSubmit">
          <van-field v-model="username"
                     name="用户名"
                     label="用户名"
                     placeholder="用户名"
                     :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password"
                     type="password"
                     name="密码"
                     label="密码"
                     placeholder="密码"
                     :rules="[{ required: true, message: '请填写密码' }]" />
          <div style="margin: 16px;">
            <van-button round
                        block
                        type="info"
                        native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
      </van-col>
      <van-col span="8"></van-col>
    </van-row>

  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values, Object.values(values)[0]);
      let data = {
        name: this.username,
        password: this.password,
      }
      this.$axios.post('/api/user/login', data).then(
        res => {
          if (res.data !== -1) {
            alert('登陆成功')
          }
        },
        err => {
          err.msg && this.$message.error(err.msg);
        }
      )
    },

  },
};
</script>