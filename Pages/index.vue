<!-- Franky Liu 24673898 -->
<template>
    <div class="space-y-8">
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <img 
          src="/image/P1.jpg" 
          alt="Franky Liu" 
          class="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-md"
        >
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Franky Liu</h1>
          <p class="mt-2 text-gray-600">I'm a second-year UP student studying IKS and I love cats</p>
        </div>
      </div>
  
      <!-- Cat API Section -->

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Cat Corner</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-if="catImage" class="overflow-hidden rounded-lg">
            <img 
              :src="catImage" 
              alt="Random Cat" 
              class="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform"
            >
          </div>
          <div class="flex items-center">
            <div>
              <p class="text-lg font-medium text-gray-700 mb-2">Fun fact about cats:</p>
              <p v-if="catFact" class="text-gray-600 italic">"{{ catFact }}"</p>
              <p v-else class="text-gray-500">Loading cat fact...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        catImage: null,
        catFact: null,
      };
    },
    async mounted() {
      try {
        // the 2 api use 1 for picture 1 for fact
        const [imageResponse, factResponse] = await Promise.all([
          fetch("https://api.thecatapi.com/v1/images/search"),
          fetch("https://meowfacts.herokuapp.com/")
        ]);
        
        const [imageData, factData] = await Promise.all([
          imageResponse.json(),
          factResponse.json()
        ]);
        
        this.catImage = imageData[0].url;
        this.catFact = factData.data[0];
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  };
  </script>