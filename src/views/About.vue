<template>
  <div id="q-app">
    <div class="row">
      <q-img
        rounded
        src="/deptrai.jpeg"
        :ratio="4 / 3"
        class="q-mt-xl shadow-18"
        style="height:550px; width:350px; display: flex;"
      ></q-img>
      <Profile />
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";
export default {
  components: {
    Profile,
  },
};
</script>
