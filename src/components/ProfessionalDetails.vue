<template>
  <div class="p-5">
    <h1 class="display-4">Professional Details</h1>
    <h5 class="text-secondary">Interpreter Since {{ professionalInfo.interpreter_since }}</h5>
    <div class="row pt-3">
      <div class="col-md-12">
        <h4>Domicile</h4>
        <p>{{ professionalInfo.domicile }}</p>
      </div>
      <div class="col-md-12 pt-2">
        <h4>Working Languages</h4>
        <ul class="list-unstyled mb-0">
          <li v-for="(language, index) in professionalInfo.workingLanguages" v-bind:key="index" class="pb-2 pl-2">
            {{ language.code }}:
            <span class="pl-2">
              {{ language.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="col-md-12 pt-2">
        <h4>Summary</h4>
        <p>{{ professionalInfo.summary }}</p>
      </div>
      <div class="col-md-12 pt-2">
        <h5>
          Accept Hourly Pay
          <span :class="professionalInfo.accepts_hourly_pay.color" class="badge badge-pill pb-0 text-uppercase">{{ professionalInfo.accepts_hourly_pay.value }}</span>
        </h5>
      </div>
      <div class="col-md-12 pt-2">
        <h5>
          Accept Half Day Pay
          <span :class="professionalInfo.accepts_half_day_pay.color" class="badge badge-pill pb-0 text-uppercase">{{ professionalInfo.accepts_half_day_pay.value }}</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfessionalDetails",
  data: () => ({
    professionalInfo: {
      interpreter_since: "2018",
      aiic_member: "no",
      workingLanguages: [
        {
          name: "Nepali",
          code: 'A',
          color: "badge badge-secondary"
        },
        {
          name: "English",
          code: 'B',
          color: "badge badge-danger ml-2"
        },
        {
          name: "Japanese",
          code: 'C',
          color: "badge badge-danger ml-2"
        }
      ],
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit. Proin et faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit.",
      domicile: "Nepal",
      accreditation: "",
      accepts_hourly_pay: {
        value: "no",
        color: "badge-danger"
      },
      accepts_half_day_pay: {
        value: "yes",
        color: "badge-success"
      },
    }
  })
};
</script>
