<template>
  <div class="p-5">
    <h4 class="text-secondary">KUDO Interpreter</h4>
    <h1 class="display-4">{{ personalinfo.name }}</h1>
    <blockquote class="blockquote">
      <p class="mb-0"><i>{{ personalinfo.quote }}</i></p>
    </blockquote>
    <div class="pt-5">
      <h4>Description</h4>
      <p>{{ personalinfo.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    personalinfo: {
      name: "Kelina Shrestha",
      skilled_languages: [
        {
          name: "English",
          color: "badge badge-secondary"
        },
        {
          name: "Nepali",
          color: "badge badge-danger ml-2"
        }
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit. Proin et faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit.",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
    }
  })
};
</script>
