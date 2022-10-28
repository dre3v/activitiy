<template>
    <div id="app">
    
      <center>
      <v-card id="quizCard" class="ma-10 pa-5" width="1000" elevation="10" color="white">
        <v-card-title>
          <h1  id="quiz"><strong>Quiz Sports</strong></h1>
        </v-card-title>
        <quiz @quiz-completed="handleQuizCompleted" :key="quizKey" id="quiz"/>
     
      </v-card>
      <v-card id="finishCard" class="ma-10 pa-5" width="1000" elevation="10" color="white"  v-show="showModal">
        
        <custom-modal
        v-show="showModal"
        id="quiz"
        header="Congratulations!"
        subheader="You've completed your Quiz!"
        :score="score"
        @reload="updateQuiz"
        @close="showModal = false"/>
      </v-card>

    </center>
    </div>
   
   </template>
   <script>
   import CustomModal from "../components/CustomModal.vue"
   import Quiz from "../components/Quiz.vue"
    
   export default {
    components: { Quiz, CustomModal },
    name: "App",
    data() {
      return {
        quizKey: 0,
        showModal: false,
        score: {
          allQuestions: 0,
          answeredQuestions: 0,
          correctlyAnsweredQuestions: 0,
        },
      };
    },
    methods: {
      handleQuizCompleted(score) {
        this.score = score;
        this.showModal = true;
      },
      updateQuiz() {
        this.showModal = false;
        this.quizKey++;
      },
     },
   };
   </script>
   <style>
 
   #quiz{
    color: rgb(0, 0, 0);
   }
   #quizCard {
    background-image: url("https://img.freepik.com/premium-photo/mini-soccer-ball-blue-pastel-background-minimalism-sport-concept-top-view-flat-lay_175682-22298.jpg?w=2000");
   }
   #finishCard {
    background-image: url("https://img.freepik.com/premium-photo/mini-soccer-ball-blue-pastel-background-minimalism-sport-concept-top-view-flat-lay_175682-22298.jpg?w=2000");
   }
  
  </style>