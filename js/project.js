Vue.component("project-component", {
  data: function() {
    return {
      projects: [
        {
          id: 0,
          name: "Project Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          image: "img/project/game1.png"
        },
        {
          id: 1,
          name: "Project Name2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          image: "img/project/software1.svg"
        },
        {
          id: 2,
          name: "Project Name3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          image: "img/project/web1.svg"
        },
        {
          id: 3,
          name: "Project Name4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          image: "img/project/VueLogo.png"
        }
      ]
    };
  },
  template: `
    <div class="team row">
      <div class="col-lg-4 d-flex align-items-stretch" v-for="project in projects" :key="project.id">
        <div class="card">
          <div class="profile-container">
            <img class="card-img-top" :src="project.image" alt="">
          </div>
          <div class="card-body">
            <h3 class="card-title">{{project.name}}</h3>
            <p class="card-text mb-2">{{project.description}}</p>
            <a href="#"><i class="fab fa-github"></i> </a>
          </div>
        </div>
      </div>
    </div>
  `
});

new Vue({
  el: "#app"
});
