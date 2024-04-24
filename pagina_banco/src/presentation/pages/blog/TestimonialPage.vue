<script setup>
import LogoComponentVue from "@/presentation/components/LogoComponent.vue";
</script>

<template>
  <div class="bg-white h-screen items-center justify-center">
    <div class="px-3 grid grid-cols-3 pt-10">
      <div class="w-96 h-20"></div>
      <div class="space-y-2 text-black/40 col-span-2">
        <p class="text-xs">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p class="text-green-500">Tim Smith</p>
        <p class="text-xs">British Dragon Boat Racing Association</p>
        <div class="flex gap-5 items-center py-7">
          <LogoComponentVue path="Logo.png" description="Logo" />
          <LogoComponentVue path="Logo1.png" description="Logo 1" />
          <LogoComponentVue path="Logo2.png" description="Logo 2" />
          <LogoComponentVue path="Logo3.png" description="Logo 3" />
          <LogoComponentVue path="Logo4.png" description="Logo 4" />
          <LogoComponentVue path="Logo5.png" description="Logo 5" />
          <LogoComponentVue path="Logo6.png" description="Logo 6" />
          <p class="text-green-500 text-sm">Meet all customers</p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center flex-col space-y-5 my-20">
      <p class="text-2xl font-semibold text-black/80">
        Caring is the new marketing
      </p>
      <p class="justify-items-start text-black/40 sm:w-2/6 text-center">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's more.
      </p>
    </div>
  </div>
</template>
