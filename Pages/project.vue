<!-- Franky Liu 24673898 -->
<template>
    <div class="space-y-8">
      <h1 class="text-3xl font-bold text-gray-800">My Projects</h1>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in projects" 
          :key="project.id" 
          class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
        >
          <h2 class="text-xl font-semibold text-gray-800">{{ project.name }}</h2>
          <p class="mt-2 text-gray-600">{{ project.description }}</p>
          <p class="mt-3">
            <span class="font-medium text-gray-700">Technologies:</span> 
            <span class="text-gray-600">{{ project.technologies }}</span>
          </p>
          <a 
            :href="project.link" 
            target="_blank" 
            class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const projects = [
    {
      id: 1,
      name: "E-commerce Website",
      description: "A full-stack online store with payment integration",
      technologies: "Vue.js, Node.js, MongoDB",
      link: "#"
    },
    {
      id: 2,
      name: "Weather App",
      description: "Displays current weather using OpenWeather API",
      technologies: "JavaScript, API Integration",
      link: "#"
    },
    {
      id: 3,
      name: "Task Manager",
      description: "CRUD application for managing daily tasks",
      technologies: "React, Firebase",
      link: "#"
    }
  ]
  </script>