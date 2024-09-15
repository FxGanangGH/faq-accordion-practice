<template>
  <div
    class="flex h-full min-h-screen w-screen flex-col items-center justify-center bg-camellia-500"
  >
    <div class="absolute top-0 z-0 h-64 w-full desktop:h-96">
      <img
        class="size-full object-cover"
        v-if="!isDesktop"
        src="/images/background-pattern-mobile.svg"
        alt="mobile-background"
      />
      <img
        class="size-full object-cover"
        v-if="isDesktop"
        src="/images/background-pattern-desktop.svg"
        alt="desktop-background"
      />
    </div>
    <div class="z-10 px-5 desktop:w-full desktop:max-w-xl">
      <div
        class="flex w-full flex-col items-center justify-center rounded-xl bg-white px-5 pt-5 desktop:px-10 desktop:pt-10"
      >
        <div class="flex w-full items-center gap-x-5 desktop:pb-5">
          <img
            class="size-5 desktop:size-10"
            src="/images/icon-star.svg"
            alt="faq-star"
          />
          <h1
            class="font-work-sans text-3xl font-bold text-lavender-600 desktop:text-5xl"
          >
            FAQs
          </h1>
        </div>
        <div
          v-for="(faq, index) in faqList"
          :key="index"
          class="flex w-full max-w-screen-md flex-col border-b border-gray-300 py-3 last:border-b-0 last:pb-5 desktop:last:pb-10"
        >
          <div
            @click="toggleAnswer(index)"
            class="flex w-full items-center justify-between"
          >
            <span
              class="w-9/12 font-work-sans font-bold leading-5 text-lavender-600 desktop:w-full"
            >
              {{ faq.question }}
            </span>
            <img
              v-show="activeFaqIndex != index || !showAnswer"
              class="size-8"
              src="/images/icon-plus.svg"
            />
            <img
              v-show="activeFaqIndex === index && showAnswer"
              class="size-8"
              src="/images/icon-minus.svg"
            />
          </div>
          <p
            v-show="activeFaqIndex === index && showAnswer"
            class="py-5 font-work-sans text-lavender-500"
            :class="{ 'pb-0': index === lastIndex }"
          >
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, onMounted } from "vue";

const currentWidth = ref(window.innerWidth);
const showAnswer = ref(false);
const activeFaqIndex = ref();
const isDesktop = computed(() => currentWidth.value >= 1440);
const lastIndex = computed(() => faqList.length - 1);
const faqList = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

onMounted(() => {
  window.addEventListener("resize", updateScreen);
});

const updateScreen = () => {
  currentWidth.value = window.innerWidth;
};
const toggleAnswer = (index: number) => {
  if (showAnswer.value === true && activeFaqIndex.value != index) {
    activeFaqIndex.value = index;
  } else {
    showAnswer.value = !showAnswer.value;
    activeFaqIndex.value = index;
  }
};
</script>
