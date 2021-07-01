

<template>
  <div class="login_box">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="账号登录">
        <a-form
          layout="vertical"
          :model="formState"
          @finish="handleFinish"
          @finishFailed="handleFinishFailed"
        >
          <a-form-item>
            <a-input
              v-model:value="formState.username"
              :placeholder="$t('login.username')"
            >
              <template #prefix>
                <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-model:value="formState.password"
              type="password"
              :placeholder="$t('login.password')"
            >
              <template #prefix>
                <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <div class="remeber_me">
              <a-checkbox v-model:checked="checked">记住我</a-checkbox>
              <div class="forget_pass">忘记密码</div>
            </div>
          </a-form-item>

          <a-form-item class="login_btn_form_item">
            <a-button
              class="login_btn"
              type="primary"
              html-type="submit"
              :disabled="formState.user === '' || formState.password === ''"
              @click="login"
            >
              {{ $t("login.login") }}
            </a-button>
          </a-form-item>
          <div class="noaccount">
            {{ $t("login.noaccount") }}
            <span class="register" @click="goRegister">{{
              $t("login.register")
            }}</span>
          </div>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="2" tab="安全登录" force-render>
        <div class="code_wrapper">
          <img src="@/assets/images/code.png" alt="" />
          <div class="noaccount">
            {{ $t("login.noaccount") }}
            <span class="register" @click="goRegister">{{
              $t("login.register")
            }}</span>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { defineComponent, reactive, UnwrapRef, ref } from "vue";
interface FormState {
  username: string;
  password: string;
}
import { useStore } from "@/store";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "LoginBox",
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      username: "",
      password: "",
    });
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    const activeKey = ref<string>("1");
    const checked = ref<boolean>(true);
    const store = useStore();
    const login = () => {
      store
        .dispatch("userModule/login", formState)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const router = useRouter();
    const goRegister = () => {
      router.push("/register");
    };

    return {
      formState,
      handleFinish,
      handleFinishFailed,
      activeKey,
      checked,
      login,
      goRegister,
    };
  },
});
</script>

<style lang="less" scoped>
@import url("./loginBox.less");
</style>
<style lang="less">
.login_box {
  .remeber_me {
    .ant-checkbox + span {
      color: #808080;
      font-size: 12px;
    }
  }
  .ant-form-vertical .ant-form-item {
    padding: 0;
  }
}
</style>