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
        <div class="col-md-8 p-0 bg-light">
          <b-card-body
            id="nav-scroller"
            ref="content"
            style="position:relative; height: 80vh; overflow-y:scroll;"
          >
            <p id="About"><About :profileDetails="profileDetails"/></p>
            <hr class="w-75 float-left ml-5">
            <p id="ProfessionalDetails"><ProfessionalDetails :profileDetails="profileDetails"/></p>
            <hr class="w-75 float-left ml-5">
            <p id="Languages"><Languages :profileDetails="profileDetails"/></p>
            <hr class="w-75 float-left ml-5">
            <p id="Education"><Education :profileDetails="profileDetails"/></p>
            <hr class="w-75 float-left ml-5">
            <p id="Experience"><Experience :profileDetails="profileDetails"/></p>
            <hr class="w-75 float-left ml-5">
            <p id="Contact"><Contact :profileDetails="profileDetails"/></p>
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
const baseURI = 'https://staging-api.kudoway.com';

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
  },
  props: {
    profileDetails: { type: Object },
    profileId: { type: Number }
  },
  methods: {
    authenticateUser: function(){
      const authenticationUrl = baseURI + "/api/v2/users/authenticate";
      this.$http.get(authenticationUrl)
      .then(response => {
        localStorage.setItem('xtoken', response.data.token)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
    },
    getUserDetail: function(){
      this.authenticateUser();
      const profileUrl = baseURI + "/api/v2/users/1349/profile/1349";
      this.$http({
        method:'get',
        url: profileUrl,
        headers: {'Content-Type': 'application/json', 'X-API-TOKEN': localStorage.getItem('xtoken')}
      })
      .then(profileResponse => {
        // this.info = response
        localStorage.setItem('profileId', '1349');
        localStorage.setItem('profileDetails', JSON.stringify(profileResponse.data))
        this.profileDetails = profileResponse.data
        this.profileId = 1349
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
    }
  },
  computed: {
    setData (){
      this.getUserDetail();
    }
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
