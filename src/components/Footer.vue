<template>
  <div class="row " id="footer">
    <div class="col-sm-12 col-md-5">
      <p class="   text-subtitle1">
        © 2021 by Phan Hai.<br />
        Based on wix.com template.
      </p>
    </div>
    <div class=" col-sm-6  col-md-2 q-ml-xl">
      <p class="text-bold q-ml-lg text-subtitle1">
        Call
      </p>
      <p class="text-body2">0328141680</p>
    </div>

    <div class="col-sm-8 col-md-2 ">
      <p class="text-bold q-ml-xl text-subtitle1">
        &nbsp;&nbsp;Write
      </p>
      <p class="text-body2">
        haithanhphan163@gmail.com
      </p>
    </div>
    <div class="col-sm-4 col-md-2 ">
      <p class="text-bold  text-subtitle1 q-ml-xl">
        &nbsp; Follow
      </p>
      <ul>
        <li>
          <a href="https://www.facebook.com/htp163/"
            ><q-icon name="mdi-facebook"></q-icon
          ></a>
          <a href="https://www.linkedin.com/in/h%E1%BA%A3i-phan-a84259217/">
            <q-icon name="mdi-linkedin"></q-icon
          ></a>
          <a href="https://github.com/haithanhphan1603">
            <q-icon name="mdi-github"></q-icon
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
#footer {
  background-color: white;
  margin-left: 5%;
  margin-top: 50px;
  font-family: "Avenir LT Std";
  line-height: 4px;
}
a {
  color: black;
}
ul {
  list-style-type: none;
}
ul li {
  display: inline;
}
ul li a {
  padding: 5px;
}
@media only screen and (max-width: 768px) {
  #footer {
    padding: 5%;
  }
}
</style>
