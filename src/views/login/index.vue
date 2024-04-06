<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          :model="loginForm"
          class="login_form"
          ref="ruleFormRef"
          :rules="rules"
        >
          <h1>Hello</h1>
          <h2>欢迎来到山谣甄选</h2>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" :prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
              type="password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              :loading="loading"
              @click="submitForm(ruleFormRef)"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getTimeStr } from '@/utils/time'
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/store/modules/user'
const router = useRouter()
import { ElNotification, type FormInstance, type FormRules } from 'element-plus'
const userStore = useUserStore()
let loading = ref(false)
interface RuleForm {
  username: string
  password: string
}
const loginForm = reactive<RuleForm>({
  username: '',
  password: '',
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
const submitForm = (formEl: FormInstance | undefined) => {
  loading.value = true
  if (!formEl) return
  formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        let title = `Hi!${getTimeStr()}好`

        await userStore.userLogin(loginForm)
        router.push('/')
        loading.value = false
        ElNotification({
          type: 'success',
          message: '登录成功',
          title: title,
        })
      } catch (err) {
        loading.value = false
        ElNotification({
          type: 'error',
          message: (err as Error).message,
        })
      }
    } else {
      loading.value = false
      console.log('error submit!', fields)
    }
  })
}
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}
.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  padding: 40px;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
}
h1 {
  color: #fff;
  font-size: 40px;
}
h2 {
  color: #fff;
  font-size: 20px;
  margin: 20px 0;
}
.login_btn {
  width: 100%;
}
</style>
