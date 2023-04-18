<template>
    <div class="lg:w-full py-10 relative">
      <div class="">
        <div class="text-center">
          <h1 class="text-black-900 font-bold py-5 text-4xl drop-shadow-lg">
            Let’s work together!
          </h1>
          <p class="mb-10">Email us. We’d love to listen to your requirements.</p>
        </div>
        <div class="lg:mx-auto p-6 shadow-2xl lg:w-5/12">
          <div class="lg:mt-3">
            <input
              type="text"
              id="name"
              class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="NAME"
            />
          </div>
          <div class="lg:mt-3">
            <input
              type="text"
              id="email"
              class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="EMAIL"
            />
          </div>
          <div class="lg:mt-3">
            <input
              type="text"
              id="tell us your idea"
              class="border w-full px-2 py-5 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="TELL US YOUR IDEA"
            />
          </div>
        </div>
      </div>
      <div class="py-5 lg:flex justify-center">
        <button
          class="hover:border border-green-900 hover:bg-white bg-blue-500 hover:text-green-900 text-white rounded-full font-bold text-base btn w-fit px-10 py-2 uppercase"
        >
          Sent
        </button>
      </div>
    </div>
  </template>