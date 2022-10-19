<template>

 <v-card
    class="ma-15"
    max-width="544"
    color="primary"
 >
  <v-card-title> String Manipulator </v-card-title>

   <v-text-field label="Enter a String" v-model="stringInput"></v-text-field>
   <v-text-field label="Enter a number" v-model.number="nonreactive"></v-text-field>

   <v-card-actions  >
   <v-btn @click="doCountVowel" >
        Count Vowel
   </v-btn>
   <v-btn @click="doSomething" >
       Test Nonreactive
   </v-btn>

   </v-card-actions>

   {{vowelCount}} <br/>   {{nonreactive}}
   
 </v-card>  

</template>

<script setup>

import {ref} from 'vue'

const stringInput = ref('')
const vowelCount = ref(0)
const nonreactive = ref(0)

function doCountVowel () {
     vowelCount.value = stringInput.value.match(/[aeiou]/gi).length;
     return vowelCount.value; 
}

function doSomething () {
      return nonreactive.value +=10 
}

</script>
