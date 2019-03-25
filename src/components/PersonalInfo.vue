<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card w-100">
        <img :src="image" class="card-img-top" alt="Profile Pic">
        <div class="card-body bg-personal-info">
          <h2 class="card-title text-center text-white">General Information</h2>
          <div class="card-text">
            <ul class="list-unstyled mb-0">
              <li v-for="(info, index) in personalinfo" v-bind:key="index" class="pb-2 text-white pl-2">
                <span class="pr-2">
                  <font-awesome-icon :icon="info.icon" class="fa-lg"></font-awesome-icon>
                </span>
                <span class="pl-2">
                  {{ info.value }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "PersonalInfo",
  data: () => ({
    image: "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/22528488_10208674443253424_8742489099592047203_n.jpg?_nc_cat=102&_nc_ht=scontent.fktm8-1.fna&oh=ae70d3f6448024ca51666a7ba58d7aa0&oe=5D4F0D66",
    personalinfo: [
      {
        key: "name",
        value: "Kelina Shrestha",
        icon: "pen"
      },
      {
        key: "address",
        value: "Gatthaghar, Bhaktapur",
        icon: "home"
      },
      {
        key: "dob",
        value: "March 28, 1992",
        icon: "star"
      },
      {
        key: "email",
        value: "kelishrestha97@gmail.com",
        icon: "envelope"
      },
      {
        key: "contact_num",
        value: "+977-9860790767",
        icon: "phone-volume"
      }
    ]
  })
};
</script>
<style scoped>
.bg-personal-info {
  background-color: #36669a !important;
}
</style>
