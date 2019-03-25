import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGrinBeam as fasGrinBeam,
  faHome as fasHome,
  faEnvelope as fasEnvelope,
  faStar as fasStar,
  faPhoneVolume as fasPhoneVolume,
  faMapMarker as fasMapMarker,
  faBuilding as fasBuilding,
  faClock as fasClock,
  faBirthdayCake as fasBirthdayCake

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
library.add(fasGrinBeam, fasHome, fasEnvelope, fasStar, fasPhoneVolume, fasMapMarker, fasBuilding, fasClock, fasBirthdayCake);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: h => h(App)
}).$mount("#app");
