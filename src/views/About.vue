<template>
  <div class="col content-center" id="about">
    <div class="row justify-center" id="resume">
      <q-icon
        class="q-mt-xs text-deep-orange-12"
        name="mdi-square"
        size="lg"
      ></q-icon>
      <p class="text-h3">
        Resume
      </p>
    </div>
    <br />

    <div class="row-8 content-center">
      <p class="text-h4 ">
        Contact
      </p>
      <q-card class="my-card q-mt-xl " id="card-contact">
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
      <p class="text-h4 q-mt-xl ">
        Education
      </p>
      <q-card class="my-card q-mt-xl " id="card-education">
        <q-card-section>
          <div class="row q-mt-lg q-ml-xl">
            <div class="col">
              <p class="text-h5 text-deep-orange-12 text-bold">2021-Present</p>
              <p class="text-h6">{{ person.university }}</p>
              <p class="text-subtitle1">{{ person.degree }}</p>
            </div>
            <div class="col">
              <p class="text-h6 q-mt-xl" style="max-width: 300px;">
                I am a sophomore at Hanoi University. The forerunner of Vietnam
                University of Foreign Languages, HANU is a university with good
                training in foreign languages as well as majors.
              </p>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="my-card q-mt-xl">
        <q-card-section>
          <div class="row q-mt-lg q-ml-xl">
            <div class="col">
              <p class="text-h5  text-bold">
                Professional Skillset
              </p>
              <div class="row">
                <q-icon
                  class="q-mt-xs text-deep-orange-12"
                  name="mdi-square"
                  size="xs"
                ></q-icon
                >&nbsp;
                <p class="text-subtitle1">
                  Critical thinking
                </p>

                <q-icon
                  class="q-ml-xl q-mt-xs text-deep-orange-12"
                  name="mdi-square"
                  size="xs"
                ></q-icon
                >&nbsp;
                <p class="text-subtitle1">
                  Eager to learn
                </p>
              </div>
              <div class="row">
                <q-icon
                  class="q-mt-xs text-deep-orange-12"
                  name="mdi-square"
                  size="xs"
                ></q-icon
                >&nbsp;
                <p class="text-subtitle1">
                  Team work & Collaboration
                </p>
              </div>
            </div>
          </div>
          <div class="row q-mt-lg q-ml-xl">
            <div class="col">
              <p class="text-h5 text-bold">
                Languages
              </p>
              <div class="row">
                <q-icon
                  class="q-mt-xs text-deep-orange-12"
                  name="mdi-square"
                  size="xs"
                ></q-icon
                >&nbsp;
                <p class="text-subtitle1">
                  Vietnam (native)
                </p>

                <q-icon
                  class="q-ml-xl q-mt-xs text-deep-orange-12"
                  name="mdi-square"
                  size="xs"
                ></q-icon
                >&nbsp;
                <p class="text-subtitle1">
                  English (proficient)
                </p>
              </div>
            </div>
          </div>
        </q-card-section>
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
#about {
  background-color: #ffe7cf;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 5%;
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
  font-weight: 300;
  line-height: 30px;
}
</style>
