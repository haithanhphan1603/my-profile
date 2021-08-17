<template>
  <div class="row project-page">
    <div class="text-h4" id="projects">
      <q-icon id="icon-page" name="mdi-square" color="deep-orange-12"></q-icon>
      Projects
    </div>
    <div class="col-md-12 q-mt-xl">
      <q-card class="my-card shadow-23" square>
        <q-card-section horizontal>
          <q-card-section class="col-7">
            <div class="q-mt-lg q-ml-xl ">
              <p class="text-h5 text-deep-orange-12 text-bold">
                {{ project[1].name }}
              </p>
              <p class="text-h6 text-bold">
                {{ project[1].position }}
              </p>
              <p class="text-subtitle1  ">{{ project[1].description }}</p>
            </div>
          </q-card-section>
          <q-img :src="project[1].img" class="col-5"></q-img>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 q-mt-xl">
      <q-card class="my-card shadow-23" square>
        <q-card-section horizontal>
          <q-card-section class="col-7">
            <div class="q-mt-lg q-ml-xl ">
              <p class="text-h5 text-deep-orange-12 text-bold">
                {{ project[0].name }}
              </p>
              <p class="text-h6 text-bold">
                {{ project[0].position }}
              </p>
              <p class="text-subtitle1  ">{{ project[0].description }}</p>
            </div>
          </q-card-section>
          <q-img :src="project[0].img" class="col-5"></q-img>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<style scoped>
#projects {
  margin: auto;
}
.project-page {
  background-color: #ffe7cf;
  padding-left: 22%;
  padding-right: 22%;
  padding-top: 10%;
  padding-bottom: 5%;
}
.text-h3,
.text-h4,
.text-h5 {
  font-family: "Poppins";
  font-weight: 900;
}
.my-card {
  font-family: "Avenir LT Std";
  font-size: 20px;
  line-height: 7px;
}
.text-h6 {
  font-weight: 900;
}
#icon-page {
  vertical-align: middle;
  position: relative;
  top: -2px;
}
</style>
<script>
export default {
  data() {
    return {
      project: [
        {
          id: 1,
          name: "ShopingH",
          description:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, inventore sit aperiam amet consectetur eligendi error fugiat quos nihil ducimus. Provident voluptas deserunt iure architecto similique ad magni molestias ut?",
          img: "/project1.jpeg",
          position: "Leader",
        },
        {
          id: 2,
          name: "NetworkA",
          description:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, inventore sit aperiam amet consectetur eligendi error fugiat quos nihil ducimus. Provident voluptas deserunt iure architecto similique ad magni molestias ut?",
          img: "/project2.jpeg",
          position: "Developer",
        },
      ],
    };
  },
};
</script>
