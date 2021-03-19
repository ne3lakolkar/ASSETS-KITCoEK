const members = [
  {
    id: 1,
    name: "Aarya Patil",
    description: "Secretary",
    img: "img/team/molly.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 2,
    name: "Amarsinh Desai",
    description: "Treasurer",
    img: "img/team/matthew.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 3,
    name: "Keshavi Wakharekar",
    description: "Co-Treasurer",
    img: "img/team/elyse.png",
    contact: "9999999999",
    year: "Second Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 4,
    name: "Neel Akolkar",
    description: "Technical Head",
    img: "img/team/matthew.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 6,
    name: "Prashant Phadatare",
    description: "Event Manager",
    img: "img/team/matthew.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 5,
    name: "Srushti Banchhode",
    description: "Event Manager",
    img: "img/team/elyse.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 6,
    name: "Rushikesh Patil",
    description: "Event Manager",
    img: "img/team/matthew.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 6,
    name: "Piyush Tiwari",
    description: "Event Manager",
    img: "img/team/matthew.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  }
];

const heads = [
  {
    id: 1,
    name: "Sushant Kamble",
    description: "President",
    img: "img/team/matthew.png",
    contact: "9999999999",
    year: "Fourth Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 2,
    name: "Omkar Bamane",
    description: "Vice President",
    img: "img/team/matthew.png",
    contact: "9999999999",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  }
];

Vue.component("member-component", {
  template: `
	<div class="col-lg-3">
		<div class="card">
			<div class="profile-container">
				<img class="card-img-top" :src="member.img" alt="Card image cap">
			</div>
  			<div class="card-body">
    			<h5 class="card-title">{{member.name}}</h5>
				  <p class="card-text">{{member.description}}</p>
				  <p class="card-text mb-2">{{member.year}}</p>
          <a :href="member.linkGit"><i class="fab fa-github"></i> </a>
          <a :href="member.linkLin"><i class="fab fa-linkedin"></i> </a>
  			</div>
		</div>
	</div>
	`,
  props: {
    member: Object
  }
});

Vue.component("head-component", {
  template: `
	<div class="col-lg-4">
		<div class="card">
			<div class="profile-container">
				<img class="card-img-top" :src="head.img" alt="Card image cap">
			</div>
  			<div class="card-body">
	    		<h5 class="card-title">{{head.name}}</h5>
				  <p class="card-text">{{head.description}}</p>
				  <p class="card-text mb-2">{{head.year}}</p>
          <a :href="head.linkGit"><i class="fab fa-github"></i> </a>
          <a :href="head.linkLin"><i class="fab fa-linkedin"></i> </a>
  			</div>
		</div>
	</div>
	`,
  props: {
    head: Object
  }
});

new Vue({
  el: "#app",
  data: {
    members,
    heads
  }
});
