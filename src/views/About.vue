<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-03-19 09:21:38
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-03-30 16:01:20
 -->
<template>
  <div class="about">
    <hr>
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
    <hr>
    <van-row>
      <van-col span="8"></van-col>
      <van-col span="8">
        <van-form @submit="submitAdd">
          <van-field v-model="username"
                     name="用户名"
                     label="用户名"
                     placeholder="用户名"
                     :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="account"
                     name="账号"
                     label="账号"
                     placeholder="账号"
                     :rules="[{ required: true, message: '请填写账号' }]" />
          <van-field v-model="password"
                     type="password"
                     name="密码"
                     label="密码"
                     placeholder="密码"
                     :rules="[{ required: true, message: '请填写密码' }]" />
          <van-field v-model="repeatPass"
                     type="password"
                     name="确认密码"
                     label="确认密码"
                     placeholder="确认密码"
                     :rules="[{ required: true, message: '请确认密码' }]" />
          <van-field v-model="email"
                     name="邮箱"
                     label="邮箱"
                     placeholder="邮箱"
                     :rules="[{ required: true, message: '请填写邮箱' }]" />
          <van-field v-model="phone"
                     name="手机"
                     label="手机"
                     placeholder="手机"
                     :rules="[{ required: true, message: '请填写手机' }]" />
          <van-field v-model="card"
                     name="卡号"
                     label="卡号"
                     placeholder="卡号"
                     :rules="[{ required: true, message: '请填写卡号' }]" />
          <van-field name="radio"
                     label="性别">
            <template #input>
              <van-radio-group v-model="sex"
                               direction="horizontal">
                <van-radio name="1">男</van-radio>
                <van-radio name="2">女</van-radio>
              </van-radio-group>
            </template>
          </van-field>
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
      account: '',
      repeatPass: '',
      email: '',
      phone: '',
      card: '',
      birth: '',
      sex: '1'
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
    submitAdd (values) {
      console.log('submit', values, Object.values(values)[0]);
      let data = {
        name: this.username,
        password: this.password,
        account: this.account,
        repeatPass: this.repeatPass,
        email: this.email,
        phone: this.phone,
        card: this.card,
        birth: this.birth,
        sex: this.sex
      }
      this.$axios.post('/api/user/addUser', data).then(
        res => {
          if (res.data !== -1) {
             this.$notify({ type: 'success', message: '添加成功！' });
          }else{
             this.$notify({ type: 'danger', message: '添加失败！' });
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