// eslint-disable-next-line vue/valid-template-root
<template>
  <div>
    <div class="container">
      <q-card class="shadow-23">
        <q-card-section class="my-card">
          <q-img class="img" src="/me1.jpg" />
          <br />
          <br />
          <h3 class="text-brown-10 no-margin">Phan <br />Hai</h3>
          <q-separator class="q-mt-sm" inset></q-separator>
          <h5 class="text-brown-10 q-mt-l">FREELANCER</h5>
        </q-card-section>
        <q-card-section class="q-pd-md">
          <a href="https://www.linkedin.com/in/h%E1%BA%A3i-phan-a84259217/">
            <q-icon name="mdi-linkedin" size="md"></q-icon
          ></a>
          <a href="https://github.com/haithanhphan1603">
            &nbsp;&nbsp; <q-icon name="mdi-github" size="md"></q-icon
          ></a>
          <a href="https://www.hackerrank.com/haithanhphan163"
            >&nbsp;&nbsp; <q-icon name="fab fa-hackerrank" size="md"></q-icon
          ></a>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 400px;
}
.my-card {
  background-color: #fdf6f0;
  text-align: center;
  font-weight: bold;
}
.img {
  width: 250px;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
h4 {
  font-weight: 100;
}
h3 {
  font-family: "Poppins";
  font-size: 33px;
  line-height: 33px;
  font-weight: 900;
}
h5 {
  font-size: 30px;
  font-family: "Source Code Pro";
  line-height: 0px;
  letter-spacing: 3px;
}
h6 {
  font-size: 20px;
  font-family: "Source Code Pro";
  line-height: 40px;
  font-weight: 520;
}
.q-pd-md {
  text-align: center;
}
</style>
