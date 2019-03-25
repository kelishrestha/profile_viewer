<template>
  <div class="p-5">
    <h1 class="display-4">Contact</h1>
    <div class="row">
      <div class="col-md-12">
        <font-awesome-icon icon="envelope" class="fa-lg"></font-awesome-icon>
        {{ contactInfo.email }}
      </div>
      <div class="col-md-12 pt-2">
        <font-awesome-icon icon="map-marker" class="fa-lg"></font-awesome-icon>
        {{ contactInfo.country }}
      </div>
      <div class="col-md-12 pt-2">
        <font-awesome-icon icon="building" class="fa-lg"></font-awesome-icon>
        {{ contactInfo.city }}
      </div>
      <div class="col-md-12 pt-2">
        <font-awesome-icon icon="clock" class="fa-lg"></font-awesome-icon>
        {{ contactInfo.timezone }}
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-12 pt-2">
        <h4> Nationality </h4>

        {{ contactInfo.nationality }}
      </div>
      <div class="col-md-12 pt-2">
        <h4> Other Nationalities </h4>
        <ul class="list-unstyled mb-0">
          <li v-for="(info, index) in contactInfo.other_nationalities" v-bind:key="index" class="pb-2">
            {{ index + 1 }}
            <span class="pl-2">
              {{ info.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="col-md-12 pt-2">
        <h4> Links </h4>
        <ul class="list-unstyled mb-0">
          <li v-for="(info, index) in contactInfo.links" v-bind:key="index" class="pb-2">
            <span class="text-capitalize">
              {{ info.name }}:
            </span>
            <a :href="info.url">
              {{ info.url }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    contactInfo: {
      email: "kelishrestha97@gmail.com",
      country: "Nepal",
      city: "Kathmandu",
      timezone: "Kathmandu",
      nationality: "Nepali",
      other_nationalities: [
        {
          name: "English",
          color: "badge badge-secondary"
        },
        {
          name: "Nepali",
          color: "badge badge-danger ml-2"
        }
      ],
      links: [
        {
          name: 'linkedin',
          url: 'https://google.com'
        },
        {
          name: 'web',
          url: 'https://google.com'
        }
      ]
    }
  })
};
</script>
