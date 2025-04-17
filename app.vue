<template>
  <div class="min-h-screen bg-gray-50">
    <NuxtRouteAnnouncer />
    <nav class="bg-white shadow-sm py-4">
      <div class="max-w-6xl mx-auto px-4 flex space-x-6">
        <NuxtLink 
          to="/" 
          class="text-gray-700 hover:text-blue-600 transition-colors"
          active-class="text-blue-600 font-medium"
        >
          Home
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="text-gray-700 hover:text-blue-600 transition-colors"
          active-class="text-blue-600 font-medium"
        >
          Contact
        </NuxtLink>
        <NuxtLink 
          to="/project" 
          class="text-gray-700 hover:text-blue-600 transition-colors"
          active-class="text-blue-600 font-medium"
        >
          Projects
        </NuxtLink>
      </div>
    </nav>
    <main class="max-w-6xl mx-auto px-4 py-8">
      <NuxtPage />
    </main>
  </div>
</template>