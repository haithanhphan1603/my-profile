<template>
  <router-link :to="{ name: 'blog-view', params: { id: blog.id } }">
    <div id="q-app">
      <div>
        <q-card class="my-card q-mt-xl">
          <q-card-section>
            <div class="text-h5">{{ blog.title }}</div>
            <div class="text-h6">{{ blog.description }}</div>
            <div class="text-subtitle2">{{ blog.time }}</div>
            <div class="text-subtitle2">{{ blog.date }}</div>
            <div class="text-subtitle2">{{ blog.location }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </router-link>
</template>
<style scoped>
.my-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
<script>
export default {
  props: {
    blog: Object,
  },
};
</script>
