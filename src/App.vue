<template>
  <div id="app">
    <div class="container pt-3">
      <div class="row">
        <div class="col-md-12 p-0">
          <Header />
        </div>
        <div class="col-md-4 p-0">
          <PersonalInfo />
        </div>
        <div class="col-md-8 border p-0 bg-light">
          <b-card-body
            id="nav-scroller"
            ref="content"
            style="position:relative; height: 80vh; overflow-y:scroll;"
          >
            <p id="About"><About /></p>
            <hr>
            <p id="ProfessionalDetails"><ProfessionalDetails /></p>
            <hr>
            <p id="Languages"><Languages /></p>
            <hr>
            <p id="Education"><Education /></p>
            <hr>
            <p id="Experience"><Experience /></p>
            <hr>
            <p id="Contact"><Contact /></p>
          </b-card-body>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PersonalInfo from "./components/PersonalInfo.vue";
import About from "./components/About.vue";
import ProfessionalDetails from "./components/ProfessionalDetails.vue";
import Languages from "./components/Languages.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "app",
  components: {
    Header,
    About,
    ProfessionalDetails,
    PersonalInfo,
    Languages,
    Education,
    Experience,
    Contact
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
