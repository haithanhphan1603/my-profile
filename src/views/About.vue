<template>
  <div id="q-app">
  <div class="row">
  <q-img  rounded
          src="/deptrai.jpeg"
          :ratio="4/3"
          class="q-mt-xl shadow-18"
          style="height:550px; width:350px; display: flex;"
        ></q-img>  
    <div class="q-mt-xl q-ml-lg">
    <q-card class="my-card">
      <q-card-section class="card-section" >
        <div class="text-h5 text-deep-orange-9">MORE ABOUT ME!</div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-deep-orange-10">
        <q-tab label="Base information" name="one"></q-tab>
        <q-tab label="Skills" name="two"></q-tab>
         <q-tab label="Objective" name="three"></q-tab>
      </q-tabs>

      <q-separator></q-separator>

      <q-tab-panels v-model="tab" animated class="panel">
        <q-tab-panel name="one">
         <p class="text-h4 text-center">{{person.name}}<p>
         <p>Date of birth: {{ person.DOB }}</p>
         <p>Gender: {{ person.gender }}</p>
         <p>Phone: {{ person.phoneNumber }}</p>
         <p>Address: {{ person.address }}</p>

        
        </q-tab-panel>

        <q-tab-panel name="two" class="panel-2">
          <p class="col text-h5 ellipsis q-mt-sm">ENGLISH</p>
           <q-rating
               v-model="ratingModel[1]"
               size="1.2em"
               color="orange"
               readonly
               icon="star_border"
               icon-selected="star"
               icon-half="star_half"
           ></q-rating>
           <q-separator inset></q-separator>
           <br>
           <p class="col text-h5 ellipsis q-mt-sm">COMMUNICATION</p>
           <q-rating
               v-model="ratingModel[2]"
               size="1.2em"
               color="orange"
               readonly
               icon="star_border"
               icon-selected="star"
               icon-half="star_half"
           ></q-rating>
           <q-separator inset></q-separator>
           <br>
           <p  class="col text-h5 ellipsis q-mt-sm">TEAMWORK</p>
           <q-rating
               v-model="ratingModel[0]"
               size="1.2em"
               color="orange"
               readonly
               icon="star_border"
               icon-selected="star"
               icon-half="star_half"
           ></q-rating>
           <q-separator inset></q-separator>
        </q-tab-panel>
        <q-tab-panel name="three">
           Seeking to advance a growing tech career as a Software Developer. Offering skills in application development and object oriented languages to develop superior software applications and other core systems. Want to understand new technology and contribute a little to the programming community.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
  </div>
  </div>
</template>

<script>


 export default {
  name: 'Profile',
  data () {
    return {
      tab: 'one',
      person:{
        name: 'Phan Thanh Hai',
        gender: 'Male',
        DOB:'16/03/2002',
        phoneNumber:'0328141680',
        address:'Hanoi, Vietnam'
      },
      ratingModel: [3.5,4,4]}
      }
}
</script>
<style scoped>

.my-card{
  width: 100%;
  max-width: 400px;
  }
.panel{ line-height: 30px;
 font-size: 24px;
 background-image: url("/images.jpeg");
 background-repeat: no-repeat;
 background-size: cover;
 font-weight: 400;
 color: black;
 font-family: 'Kalam';
  }

.card-section{
  background-image: url("/be2.jpeg");
 
  
}
</style>


