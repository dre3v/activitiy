<template>

<v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Classes
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="item in covidData"

        >
          <td>{{ item.classes }}</td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>
    
    
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'

  const  covidData=ref([])


  async function getCovidData () {
       axios({
                method:'GET',
                url:'https://omgvamp-hearthstone-v1.p.rapidapi.com/info', 
                
                headers: {
                  'X-RapidAPI-Key': 'be20050593msh31f5bb3c1795313p1efbb7jsnd6e8d87654e8',
                  'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
                        }  
            }).then( response => {
       covidData.value=(response.data)
       console.log(covidData.value)
      })
  
  }


   onMounted( async () => {
       await getCovidData()
   })

  
</script>

