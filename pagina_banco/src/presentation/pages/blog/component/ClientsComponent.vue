<script setup>
import LogoComponentVue from "@/presentation/components/LogoComponent.vue";
import CardServicesComponentVue from "./CardServicesComponent.vue";
</script>

<template>
  <div class="flex flex-col items-center  space-y-12 sm:h-screen justify-center bg-white py-10">
    <div>
      <p class="text-black/80 font-bold text-xl">Our clients</p>
      <p class="text-black/40 text-sm">
        We have been working with some Fortune 500+ clients
      </p>
    </div>

    <div class="flex justify-between gap-28">
      <LogoComponentVue path="Logo.png" description="Logo" />
      <LogoComponentVue path="Logo1.png" description="Logo 1" />
      <LogoComponentVue path="Logo2.png" description="Logo 2" />
      <LogoComponentVue path="Logo3.png" description="Logo 3" />
      <LogoComponentVue path="Logo4.png" description="Logo 4" />
      <LogoComponentVue path="Logo5.png" description="Logo 5" />
      <LogoComponentVue path="Logo6.png" description="Logo 6" />
    </div>

    <div>
      <p class="text-black/80 font-bold text-xl text-center">
        Manage your entire community<br />
        in a single system
      </p>
      <p class="text-black/40 text-sm">
        We have been working with some Fortune 500+ clients
      </p>
    </div>

    <div class="flex">
      <CardServicesComponentVue
        path="Icon1.png"
        title="Membership Organisations"
        description=" Our membership management software provides full automation of membership
      renewals and payments"
      />
      <CardServicesComponentVue
        path="Icon1.png"
        title="National Associations"
        description="Our membership management software provides full automation of membership renewals and payments"
      />
      <CardServicesComponentVue
        path="Icon1.png"
        title="Clubs And Groups"
        description="Our membership management software provides full automation of membership renewals and payments"
      />
    </div>
  </div>
</template>
