<template>
  <div class="container mt-5" style="width:100%">
    <div class="card">
      <div class="card-header">
        <h4>Skills</h4>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addSkill">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter Skill" v-model="skill">
          </div>
          <ul class="list-group">
            <transition-group name="list" enter-active-class="animated bounceInDown" leave-active-class="animated hinge">
              <li
                class="list-group-item"
                v-for="(skill,index) in skills"
                :key="skills.indexOf(skill)"
              >
                {{ skill.name }}
                <i class="fas fa-minus-circle" v-on:click="delSkill(index)"></i>
              </li>
            </transition-group>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      skill: "",
      skills: [{ name: "Vues.JS" }, { name: "Angular" }, { name: "React" }]
    };
  },
  methods: {
    addSkill: function() {
      this.skills.push({ name: this.skill });
      this.skill = "";
    },
    delSkill: function(key) {
      this.skills.splice(key, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 15px;
}

.card h4,
label,
input {
  font-family: "Railway";
}

i {
  cursor: pointer;
  color: darkred;
  float: right;
}
</style>


