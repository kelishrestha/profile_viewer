<template>
  <div class="p-5">
    <h1 class="display-4">Education</h1>
    <div class="pt-5">
      <b-list-group>
        <b-list-group-item v-for="(info, i) in educationInfo" v-bind:key="i" class="flex-column align-items-start border-0">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ info.heading }}</h5>
            <!-- <small>3 days ago</small> -->
          </div>

          <p class="mb-1">
            {{ info.description }}
          </p>

          <!-- <small>Donec id elit non mi porta.</small> -->
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  data: () => ({
    educationInfo: [
      {
        heading: "Highest education completed",
        description: "Graduate"
      },
      {
        heading: "Graduation Date",
        description: "12th November 2015"
      },
      {
        heading: "School",
        description: "Lorem Ipsum"
      },
      {
        heading: "Interpretation Degree",
        description: "No"
      }
    ]
  })
};
</script>
