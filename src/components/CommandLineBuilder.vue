<template>
  <div class="console">
    <ul>
      <li><a :class="isTabSelected('problems') ? 'selected' : 'unselected'" @click="switchTab('problems')">Problems</a></li>
      <li><a :class="isTabSelected('terminal') ? 'selected' : 'unselected'" @click="switchTab('terminal')">Terminal</a></li>
    </ul>
    <p v-if="isTabSelected('problems')">> {{ stdErr }}</p>
    <p v-if="isTabSelected('terminal')">> {{ commandline }}</p>    
  </div>
</template>

<script>
export default {
  props: ["targetSigmac", "configSigmac", "stdErr", "backendOptions"],
  computed: {
    commandline() {
      let out = "sigmac --target " + this.targetSigmac + " --config " + this.configSigmac;
      for(let option in this.backendOptions) {
        out += " --backend-option "  + this.backendOptions[option]
      }
      out += " rule_input.yml"
      return out;
    },
  },
  data() {
    return {
      selectedTab: 'terminal',
      problemMessage: 'An unsupported feature is required for this Sigma rule (/sigma/editor_input): Not supported logsources!'
    }
  },
  methods: {
    isTabSelected(tab) {
      if(tab === this.selectedTab) {
        return true
      } else {
        return false
      }
    },
    switchTab(tab) {
      this.selectedTab = tab
    }
  }
};
</script>

<style scoped>
.console {
  font-family: Consolas, "Courier New", monospace;
  float: left;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin: auto;
  border-top: 1px solid #414141;
  padding-top: 5px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  height: calc(100% - 40px);
  background-color: #1e1e1e;
  color: #b0b0b0;
  font-weight: 500;
  align-items: center;
}

.console ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #1e1e1e;
}

.console li {
  height: 35px;
  padding: 2px 10px 1px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.console li .selected {
  color: #e7e7e7;
  text-align: center;
  text-decoration: none;
  padding: 2px;
  padding-bottom: 8px;
  font-family: "Segoe WPC", "Segoe UI", sans-serif;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 1px solid #e7e7e7;
  cursor: pointer;
}

.console li .unselected {
  color: #979797;
  text-align: center;
  text-decoration: none;
  padding: 2px;
  padding-bottom: 8px;
  font-family: "Segoe WPC", "Segoe UI", sans-serif;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
}


.console li a:hover {
  color: #e7e7e7;
}

.console p {
  line-height: 1.5rem;
  margin: 0px;
}
</style>