<template>
  <div class="row" id="about">
    <div class="text-h4" id="about-icon">
      <q-icon id="icon-page" name="mdi-square" color="deep-orange-12"></q-icon>
      About
    </div>
    <br />

    <div class="col-12">
      <div class="row justify-between cv-card">
        <div class="col-sm-1 col-md-4">
          <p class="text-h5 ">
            Base Information
          </p>
        </div>
        <div class="col-sm-3 col-md-4">
          <q-btn
            class="float-right"
            unelevated
            rounded
            color="orange-9"
            label="Download CV"
          ></q-btn>
        </div>
      </div>
      <q-card class="my-card q-mt-xl shadow-23 " id="card-contact" square>
        <q-card-section>
          <div class="q-mt-lg q-ml-xl">
            <p class="text-h5 text-deep-orange-12 text-bold">Address</p>
            <p class="text-h6">{{ person.address }}</p>
            <p class="text-h5 text-deep-orange-12 text-bold">Phone</p>
            <p class="text-h6">{{ person.phone }}</p>
            <p class="text-h5 text-deep-orange-12 text-bold">E-mail</p>
            <p class="text-h6">{{ person.mail }}</p>
          </div>
        </q-card-section>
      </q-card>

      <p class="text-h5 q-mt-xl ">
        Education
      </p>
      <q-card class="my-card q-mt-xl shadow-23" id="card-education" square>
        <q-card-section>
          <div class="row q-mt-lg q-ml-xl">
            <div class="col-sm-12 col-md-6">
              <p class="text-h5 text-deep-orange-12 text-bold">2021-Present</p>
              <p class="text-h6">{{ person.university }}</p>
              <p class="text-subtitle1">{{ person.degree }}</p>
            </div>
            <div class="col-sm-12 col-md-6">
              <p class="text-h6 q-mt-xl" style="max-width: 300px;">
                I am a sophomore at Hanoi University. The forerunner of Vietnam
                University of Foreign Languages, HANU is a university with good
                training in foreign languages as well as majors.
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card>
        <div class="row q-mt-xl my-card">
          <div class="row q-mt-lg q-ml-xl">
            <p class="text-h5 col-sm-12 col-md-12 ">Professional Skillset</p>

            <div class="text-subtitle1" id="skill-card">
              <q-icon
                id="icon"
                name="mdi-square"
                color="deep-orange-12"
              ></q-icon>
              Critical thinking
            </div>
            <div class=" text-subtitle1" id="skill-card">
              <q-icon
                id="icon"
                name="mdi-square"
                color="deep-orange-12"
              ></q-icon>
              Eager to learn
            </div>
            <div class="col-md-12 text-subtitle1" id="skill-card">
              <q-icon
                id="icon"
                name="mdi-square"
                color="deep-orange-12"
              ></q-icon>
              Teamwork & Collaboration
            </div>
          </div>
          <div class="row q-mt-lg q-ml-xl">
            <p class="text-h5 col-sm-12 col-md-12 ">Languages</p>

            <div class=" text-subtitle1" id="skill-card">
              <q-icon
                id="icon"
                name="mdi-square"
                color="deep-orange-12"
              ></q-icon>
              Vietnam(native)
            </div>
            <div class=" text-subtitle1" id="skill-card">
              <q-icon
                id="icon"
                name="mdi-square"
                color="deep-orange-12"
              ></q-icon>
              English(proficent)
            </div>
          </div>
          <div class="row q-mt-lg q-ml-xl">
            <p class="text-h5 col-sm-12 col-md-12 ">Programming Languages</p>

            <div class=" text-subtitle1" id="skill-card">
              <q-icon
                id="icon"
                name="mdi-language-javascript"
                color="deep-orange-12"
              ></q-icon>
              JavaScript
            </div>
            <div class=" text-subtitle1" id="skill-card">
              <q-icon
                id="icon"
                name="mdi-language-css3"
                color="deep-orange-12"
              ></q-icon>
              CSS
            </div>
            <div class=" text-subtitle1" id="skill-card">
              <q-icon
                id="icon"
                name="mdi-language-html5"
                color="deep-orange-12"
              ></q-icon>
              HTML5
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      person: {
        address: "Hanoi, Vietnam",
        phone: "0328141680",
        mail: "haithanhphan163@gmail.com",
        university: "Hanoi University",
        degree: "Computer Science",
      },
    };
  },
};
</script>
<style scoped>
#about-icon {
  margin: auto;
  margin-bottom: 10%;
}
#about {
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
  padding: 20px;
}
.text-h6 {
  font-weight: 300;
  line-height: 30px;
}
.resume {
  margin: auto;
  margin-bottom: 10%;
}
#icon {
  vertical-align: middle;
  position: relative;
  top: -1px;
}
#icon-page {
  vertical-align: middle;
  position: relative;
  top: -2px;
}
#skill-card {
  padding: 20px;
}

@media only screen and (max-width: 768px) {
  #about {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 20%;
    padding-bottom: 5%;
  }
  .text-h6 {
    font-size: 17px;
  }
  #skill-card {
    padding: 10px;
  }
}
</style>
