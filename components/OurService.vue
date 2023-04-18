<script setup></script>

<template>
  <div class="w-full bg-red relative">
    <div class="pb-8">
      <h1
        class="title-stroke text-white font-bold text-stroke-black text-center font-sans text-2xl w-full"
      >
        <div class=" text-8xl font-extrabold p-2 uppercase absolute -top-2
        absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2
         text-white tracking-tight font-sans border-black-800 from-white">Our Services</div>
      </h1>

      <div class="">
        <ul class="grid grid-cols-3 gap-10 pt-28 pb-10 mx-auto w-10/12">
          <li
            class="border p-3 shadow-xl border-4 border-red-800 px-7 py-10 bg-white rounded-3xl"
          >
            <h1 class="text-center font-bold lg:text-2xl">Application Development</h1>
            <hr
              class="w-48 h-1 mx-auto mt-5 bg-gray-100 border-0 rounded bg-gray-700"
            />
            <img
              src="https://raw.githubusercontent.com/jorenlee/lunatronix.ca.public-images/main/Android Head Red.png"
              class="w-8/12 mx-auto"
            />
            <p class="text-center">
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit.<br />
              Nulla semper condimentum tortor,<br />
              at fringilla ipsum rhoncus sodales.<br />
              Nunc pellentesque ultricies sodales. <br />Cras accumsan iaculis
              velit,<br />
              vel pretium sem tempor nec. <br />Suspendisse venenatis et ligula
              vel aliquam.
            </p>
          </li>
          <li
            class="border p-3 shadow-xl border-4 border-red-800 px-7 py-10 bg-white rounded-3xl"
          >
            <h1 class="text-center font-bold lg:text-2xl">Webiste Development</h1>
            <hr
              class="w-48 h-1 mx-auto mt-5 bg-gray-100 border-0 rounded bg-gray-700"
            />
            <img
              src="https://raw.githubusercontent.com/jorenlee/lunatronix.ca.public-images/main/PC Red.png"
              class="w-10/12 mx-auto"
            />
            <p class="text-center">
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit.<br />
              Nulla semper condimentum tortor,<br />
              at fringilla ipsum rhoncus sodales.<br />
              Nunc pellentesque ultricies sodales. <br />Cras accumsan iaculis
              velit,<br />
              vel pretium sem tempor nec.<br />
              Suspendisse venenatis et ligula vel aliquam.
            </p>
          </li>

          <li
            class="border p-3 shadow-xl border-4 border-red-800 px-7 py-10 bg-white rounded-3xl"
          >
            <h1 class="text-center font-bold text-center font-bold lg:text-2xl">e-Commerce Developement</h1>
            <hr
              class="w-48 h-1 mx-auto mt-5 bg-gray-100 border-0 rounded bg-gray-700"
            />
            <img
              src="https://raw.githubusercontent.com/jorenlee/lunatronix.ca.public-images/main/Basket Red.png"
              class="w-10/12 mx-auto"
            />
            <p class="text-center">
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit.<br />
              Nulla semper condimentum tortor,<br />
              at fringilla ipsum rhoncus sodales.<br />
              Nunc pellentesque ultricies sodales.<br />
              Cras accumsan iaculis velit,<br />
              vel pretium sem tempor nec. <br />Suspendisse venenatis et ligula
              vel aliquam.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="lg:flex bg-gradient-to-t from-white py-10 shadow">
      <div class="lg:w-5/12 from-red-500 lg:py-5">
        <div class="lg:w-11/12 lg:mx-auto lg:pl-28 lg:pt-10">
          <h1 class="font-bold text-5xl">Why choose Lunatronix?</h1>
          <p class="py-5 text-yellow-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            semper condimentum tortor, at fringilla ipsum rhoncus sodales. Nunc
            pellentesque ultricies sodales. Cras accumsan iaculis velit, vel
            pretium sem tempor nec. Suspendisse venenatis et ligula vel aliquam.
            Proin tincidunt quis lorem eget tempus. Phasellus dapibus turpis et
            tincidunt eleifend. Pellentesque maximus molestie tellus, non
            pharetra quam elementum hendrerit.
          </p>

          <button
            class=" ring-yellow-400 border-2 border-yellow-500 hover:bg-yellow-400 lg:px-4 px-6 py-3.5 w-48 text-black rounded-full font-black lg:text-bold text-md mb-5"
          >
            Avail Now!
          </button>
        </div>
      </div>
      <div class="lg:w-10/12">
        <img
          src="../assets/icons/Illustration.png"
          class="lg:w-11/12 h-auto mx-auto"
        />
      </div>
      </div>
  </div>
</template>
<style scoped>
.bg-red {
  background-image: url("https://raw.githubusercontent.com/jorenlee/lunatronix.ca.public-images/main/faded red.png");
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
