<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="transparent" class="pb-0">
      <b-navbar-brand href="#">
        <Name />
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav pills slot="header" v-b-scrollspy:nav-scroller>
            <!-- <b-nav-item v-for="(header, i) in detailHeaders" href="header.component" @click="scrollIntoView">{{ header.name }}</b-nav-item> -->
            <b-nav-item href="#About" @click="scrollIntoView">About</b-nav-item>
            <b-nav-item href="#ProfessionalDetails" @click="scrollIntoView">Professional Details</b-nav-item>
            <b-nav-item href="#Languages" @click="scrollIntoView">Languages</b-nav-item>
            <b-nav-item href="#Education" @click="scrollIntoView">Education</b-nav-item>
            <b-nav-item href="#Experience" @click="scrollIntoView">Experience</b-nav-item>
            <b-nav-item href="#Contact" @click="scrollIntoView">Contact</b-nav-item>
          </b-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>
import Name from "./Name.vue";

export default {
  name: "Header",
  components: {
    Name
  },
  data: () => ({
    name: "Kelina Shrestha",
    detailHeaders: [
      {
        name: "About",
        component: "#About"
      },
      {
        name: "Professional Details",
        component: "#ProfessionalDetails"
      },
      {
        name: "Languages",
        component: "#Languages"
      },
      {
        name: "Education",
        component: "#Education"
      },
      {
        name: "Experience",
        component: "#Experience"
      },
      {
        name: "Contact",
        component: "#Contact"
      }
    ]
  })
};
</script>

<style scoped>
.nav-link.active {
  color: #fff !important;
  /* margin: 40px 0 0; */
}
.nav-pills .nav-link.active {
  background-color: #36669a;
}
</style>
