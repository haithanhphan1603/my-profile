// eslint-disable-next-line vue/valid-template-root
<template>
  <div>
    <div class="container col">
      <q-card class="shadow-23" square>
        <q-card-section class="my-card">
          <q-img class="img" src="/me1.jpg" />
          <br />
          <h3 class="text-brown-10 no-margin">Phan <br />Hai</h3>

          <q-separator
            class="col-2"
            color="pink"
            size="3px"
            style="width:90px;
             margin: auto;
             margin-top: 5%;"
            inset
          ></q-separator>
          <h5 class="text-brown-10 q-mt-l">FREELANCER</h5>
        </q-card-section>
        <q-card-section class="icon">
          <a href="https://www.linkedin.com/in/h%E1%BA%A3i-phan-a84259217/">
            <q-icon name="fab fa-linkedin" size="25px"></q-icon
          ></a>
          &nbsp;&nbsp;
          <a href="https://github.com/haithanhphan1603">
            <q-icon name="fab fa-github" size="25px"></q-icon
          ></a>
          &nbsp;&nbsp;
          <a href="https://www.hackerrank.com/haithanhphan163"
            ><q-icon name="fab fa-hackerrank" size="25px"></q-icon
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
  width: 220px;
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
  font-size: 25px;
  font-family: "Source Code Pro";
  line-height: 0px;
  letter-spacing: 5px;
  font-weight: 580;
}

.icon {
  text-align: center;
  letter-spacing: 3px;
}
</style>
