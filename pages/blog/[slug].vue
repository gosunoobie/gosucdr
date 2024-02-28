<template>
  <section
    class="mx-[10px] xs:mx-[16px] sm:mx-[30px] md:lg-[50px] lg:mx-[80px] xl:mx-[110px] font-['Poppins']"
    v-for="blogItem in blogStore.getBlogData(param)"
    :key="blogItem.id"
  >
    <header class="mt-[105px] xs:mt-[130px]">
      <h1
        class="text-[18px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold"
      >
        {{ blogItem.title }}
      </h1>
      <h3
        class="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium mt-2 pb-3 xs:pb-5"
      >
        {{ blogItem.short_intro }}
      </h3>
      <aside
        class="flex justify-between text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold mb-3 xs:mb-5 pt-2 xs:pt-5 border-t-2 border-t-black"
      >
        <h3 class="">{{ blogItem.author_username }}</h3>
        <p class="">{{ formatDate(blogItem.date_created) }}</p>
      </aside>
    </header>

    <main>
      <article
        class="w-full h-[280px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[640px] bg-no-repeat bg-contain bg-center"
        :style="`background-image: url('${blogItem.image}')`"
      ></article>
    </main>

    <article class="font-normal text-[22px] my-[20px] md:my-[40px]">
      <div
        v-html="blogItem.body"
        id="htmlContainer"
        class="flex flex-col gap-2 md:gap-4"
      ></div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { useHomeStore } from "../../stores/home";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
const blogStore = useHomeStore();
const param = ref("");

onMounted(() => {
  param.value = useRoute().params.slug;
  blogStore.getBlogApi().then(() => {
    const res = blogStore.getBlogData(param.value);

    useSeoMeta({
      title: res[0].title,
      ogTitle: res[0].title,
      description: res[0].short_intro,
      ogDescription: res[0].short_intro,
      ogImage: res[0].image,
    });
  });
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
:deep(#htmlContainer > p) {
  font-size: 20px !important;
}
@media screen and (max-width: 1038px) {
  :deep(#htmlContainer > p) {
    font-size: 18px !important;
  }
}
@media screen and (max-width: 800px) {
  :deep(#htmlContainer > p) {
    font-size: 16px !important;
  }
}

@media screen and (max-width: 670px) {
  :deep(#htmlContainer > p) {
    font-size: 15px !important;
  }
}
</style>
