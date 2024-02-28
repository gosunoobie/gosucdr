<template>
  <section
    class="w-full mt-[-70px] h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[calc(100vh-71px)] flex flex-col justify-end text-white font-['Poppins'] font-semibold relative overflow-hidden"
  >
    <article
      class="absolute blog-bg w-[100vw] h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] scale-[1] hover:scale-[1.2] transition-all duration-[1000ms] ease-in-out z-[10] bg-no-repeat bg-center bg-cover delay-100"
    ></article>
    <article class="relative z-[11]">
      <div class="absolute z-10 w-full h-full bg-white opacity-25"></div>
      <p
        class="mx-auto text-center max-w-[80%] md:max-w-[655px] text-[24px] !font-secular xs:text-[28px] sm:text-[34px] lg:text-[40px] xl:text-[50px] py-6"
      >
        TRAVEL WITH TRIPTURBO, YOUR ADVENTURE AWAITS
      </p>
    </article>
  </section>

  <section
    class="font-['Poppins'] uppercase mb-[20px] md:mb-[40px] mt-[30px] md:mt-[60px]"
  >
    <h3
      class="font-[300] text-base xs:text-[18px] lg:text-[20px] xl:text-[24px] text-center mb-[10px]"
    >
      Trip Inspiration
    </h3>
    <p
      class="font-medium text-[18px] xs:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[30px] text-center w-[75%] md:w-[625px] mx-auto"
    >
      FIND THE PERFECT PLACE TO DO ACTIVTIES, STAY AT HOTELS AND MORE
    </p>
  </section>

  <section
    class="w-[95%] lg:w-[80%] mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 font-['Poppins'] mb-12"
    v-if="homeStore.blogsArr.length > 0"
  >
    <RouterLink
      :to="`/blog/${blog.slug}`"
      class="relative h-[300px] sm:h-[360px] md:h-[400px] bg-no-repeat bg-cover rounded-lg overflow-hidden cursor-pointer flex flex-col justify-end group"
      v-for="blog in homeStore.getBlogLists"
      :key="blog.id"
    >
      <article
        :style="`background-image: url('${blog.thumbnail}')`"
        class="absolute w-[100%] h-[100%] group-hover:scale-[1.2] delay-150 transition-all duration-[1000ms] ease-in-out z-[10] bg-no-repeat bg-cover bg-center"
      ></article>
      <aside class="relative z-[11] w-ful text-white">
        <div
          class="w-full bg-black opacity-[0.475] absolute h-full z-[12]"
        ></div>
        <article class="px-5 py-4">
          <div class="flex justify-between">
            <aside class="max-w-[72.5%]">
              <h3
                class="relative z-[13] text-base sm:text-lg font-semibold mb-[2px] no-underline group-hover:underline"
              >
                {{ blog.title }}
              </h3>
            </aside>

            <aside class="min-w-[20%] flex justify-end">
              <p class="text-xs sm:text-sm font-semibold z-[13] relative">
                {{ formatDate(blog.date_created) }}
              </p>
            </aside>
          </div>
          <div class="">
            <p class="relative z-[13] text-xs sm:text-sm font-medium">
              {{ blog.short_intro }}
            </p>
          </div>
        </article>
      </aside>
    </RouterLink>

    <!-- <div v-for="blog in blogs">
<div v-html="blog.body" id="htmlContainer"></div>

</div> -->
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useHomeStore } from "../../stores/home.ts";
const homeStore = useHomeStore();
onMounted(() => {
  homeStore.getBlogApi();
});

function formatDate(inputDate) {
  // Parse the input date string
  const dateObj = new Date(inputDate);

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, month, and year
  const day = dateObj.getDate();
  const month = monthNames[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  // Format the result
  const formattedDate = `${day} ${month}, ${year}`;

  return formattedDate;
}
</script>

<style scoped>
.font-secular {
  font-family: "Secular One";
}
.blog-bg {
  background-image: url(../../assets/images/mainBg.jpg);
}

/* @media screen and (max-width: 670px) {
  .blog-bg {
    background-image: url(../../assets/blog/blogSmBack.webp);
  }
} */
</style>
