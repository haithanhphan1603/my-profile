<template>
  <div id="q-app" class="q-mt-xl">
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax1.jpg"
          :height="150"
        ></q-parallax>

        <q-card-section>
          <div class="text-h6">How did I get into programming?</div>
          <div class="text-subtitle2">24/06/2021</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<style scoped>
.mycard:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
