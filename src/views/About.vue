<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-03-19 09:21:38
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-15 15:30:11
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
var newarr = []
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
      sex: '1',
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
          } else {
            this.$notify({ type: 'danger', message: '添加失败！' });
          }
        },
        err => {
          err.msg && this.$message.error(err.msg);
        }
      )
    },
    getParents (data, id) {
      for (var i in data) {
        if (data[i].id == id) {
          return [data[i].id];
        }
        if (data[i].children) {

          var ro = this.getParents(data[i].children, id);
          if (ro !== undefined) {
            return ro.concat(data[i].id);
          }
        }
      }
    },
    render (arr, newarr) {
      let i = 0
      let len = arr.length
      for (; i < len; i++) {
        if (arr[i].age == 13) {
          newarr.push({ event: arr[i].event, id: arr[i].id, age: arr[i].age })
        }
        if (arr[i].children && arr[i].children.length > 0) {
          this.render(arr[i].children, newarr)
        }
      }
      return newarr
    },
    // deal (nodes, predicate) {
    //   // 如果已经没有节点了，结束递归
    //   if (!(nodes && nodes.length)) {
    //     return [];
    //   }

    //   const newChildren = [];
    //   for (const node of nodes) {
    //     if (predicate(node)) {
    //       // 如果节点符合条件，直接加入新的节点集
    //       newChildren.push(node);
    //       node.children = this.deal(node.children, predicate);
    //     } else {
    //       // 如果当前节点不符合条件，递归过滤子节点，
    //       // 把符合条件的子节点提升上来，并入新节点集
    //       newChildren.push(...this.deal(node.children, predicate));
    //     }
    //   }
    //   return newChildren;
    // },
    // deal1 (nodes, predicate) {
    //   // 如果已经没有节点了，结束递归
    //   if (!(nodes && nodes.length)) {
    //     return;
    //   }

    //   const newChildren = [];

    //   var newChildren3 = [] ;
    //   for (const node of nodes) {
    //     if (predicate(node)) {
    //       // 如果自己（节点）符合条件，直接加入到新的节点集
    //       newChildren.push(node);

    //       newChildren3.push(node);
    //       // 并接着处理其 children
    //       node.children = this.deal1(node.children, predicate);
    //     } else {
    //       // 如果自己不符合条件，需要根据子集来判断它是否将其加入新节点集
    //       // 根据递归调用 deal() 的返回值来判断
    //       const subs = this.deal1(node.children, predicate);
    //       if (subs && subs.length) {
    //         // 1. 如果子孙集中有符合要求的节点（返回 [...])，加入
    //         node.children = subs;
    //         newChildren.push(node);

    //         newChildren3 = nodes;
    //       }
    //       // 2. 否则，不加入（因为整个子集都没有符合条件的）
    //     }
    //   }
    //   return newChildren.length ? newChildren3 : void 0;
    //   // return newChildren2 ;
    // }
  },
  created () {
    // console.log(this.getParents(this.testData, '1-2-1'))
    // console.log(this.render(this.arr, newarr))
    // console.log(this.deal(this.arr, node => node.age === 13))
    // console.log(this.deal1(this.arr, node => node.age === 13))
    // console.log(this.deal1(this.testData, node => node.id === '1-2-2'))
  }
};
</script>