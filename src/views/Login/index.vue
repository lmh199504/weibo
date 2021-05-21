<template>
  <div class="login">
    <a-spin :spinning="loading"></a-spin>
    <div>{{ settingModuleCount }}</div>
    <a-button @click="addCount">+</a-button>
    <a-button @click="reduce">-</a-button>

    <div class="login_box">
      <a-form
        :model="formState"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item>
          <a-input v-model:value="formState.user" placeholder="Username">
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-model:value="formState.password"
            type="password"
            placeholder="Password"
          >
            <template #prefix>
              <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            class="login_btn"
            :disabled="formState.user === '' || formState.password === ''"
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <slideLock @handleSlide="handleSlide" v-if="showSlide"></slideLock>
  </div>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { defineComponent, reactive, UnwrapRef, Ref, ref, computed } from "vue";
interface FormState {
  user: string;
  password: string;
}
import slideLock from "@/components/slideLock/index.vue";

import { useStore } from "@/store";
export default defineComponent({
  name: "Lofin",
  setup() {
    const store = useStore();
    const formState: UnwrapRef<FormState> = reactive({
      user: "",
      password: "",
    });

    // 加载中
    const loading = ref<boolean>(false);
    //
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
      showSlide.value = true;
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    let isSlideSuccess: Ref<boolean> = ref(false);
    let showSlide: Ref<boolean> = ref(false);
    const handleSlide = (flag: boolean) => {
      isSlideSuccess.value = flag;
      showSlide.value = false;
      loading.value = true;
      store
        .dispatch("userModule/login", {
          username: formState.user,
          password: formState.password,
        })
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          loading.value;
        });
    };

    /** count*/
    const settingModuleCount = computed(() => store.state.settingModule.count);
    const addCount = () => {
      store.commit("settingModule/ADD_COUNT");
      store.dispatch("settingModule/testADD");
    };
    const reduce = () => {
      store.commit("settingModule/REDUCE_COUNT");
    };
    /** */

    return {
      isSlideSuccess,
      showSlide,
      formState,
      handleFinish,
      handleFinishFailed,
      handleSlide,
      settingModuleCount,
      addCount,
      reduce,
      loading,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
    slideLock,
  },
});
</script>

<style scoped lang="less">
@import "./login.less";
</style>
