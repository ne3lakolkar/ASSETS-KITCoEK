new Vue({
  el: "#blogposts",
  data: {
    link: ["index.html", "team.html", "projects.html"]
  },
  methods: {
    openblog(num) {
      window.open(this.link[num]);
    }
  }
});
