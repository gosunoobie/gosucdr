<template>
  <header>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink> <NuxtLink to="/blog/">Blog</NuxtLink>
      </li>
    </ul>
  </header>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
