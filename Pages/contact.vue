<template>
    <div class="max-w-2xl mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Contact Me</h1>
      
      <!-- Netlify Form with required attributes -->
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="bg-white p-6 rounded-lg shadow-md"
        @submit.prevent="handleSubmit"
      >
        <!-- Hidden Netlify Form Fields -->
        <input type="hidden" name="form-name" value="contact">
        <input type="hidden" name="bot-field">
        
        <!-- Name Field -->
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="formData.name"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          >
        </div>
        
        <!-- Email Field -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="formData.email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          >
        </div>
        
        <!-- Message Field -->
        <div class="mb-6">
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
          <textarea
            id="message"
            name="message"
            v-model="formData.message"
            rows="5"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message here..."
          ></textarea>
        </div>
        
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Message
        </button>
        
        <!-- Form Status Message -->
        <div v-if="formStatus" class="mt-4 p-3 rounded-md" :class="statusClasses">
          {{ formStatus }}
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  const formData = reactive({
    name: '',
    email: '',
    message: ''
  });
  
  const formStatus = ref('');
  const statusClasses = ref('');
  
  const handleSubmit = async () => {
    try {
      // Prepare form data for Netlify
      const formPayload = new FormData();
      formPayload.append('form-name', 'contact');
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });
  
      // Submit to Netlify
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formPayload).toString()
      });
  
      // Success state
      formStatus.value = 'Message sent successfully!';
      statusClasses.value = 'bg-green-100 text-green-800';
      
      // Reset form
      formData.name = '';
      formData.email = '';
      formData.message = '';
      
      // Clear status after 5 seconds
      setTimeout(() => {
        formStatus.value = '';
      }, 5000);
  
    } catch (error) {
      // Error state
      formStatus.value = 'Failed to send message. Please try again.';
      statusClasses.value = 'bg-red-100 text-red-800';
      console.error('Form submission error:', error);
    }
  };
  </script>