<template>
  <div class="loading-screen" v-if="!initializationPyodideComplete">
    <self-building-square-spinner
      :animation-duration="6000"
      :size="40"
      color="#0e639c"
    />
    <b>Loading {{ loadingScreenLabel }}</b>
  </div>
  <div v-else>
    <div class="action-panel">
      <ul>
        <li
          :class="isTabSelected('editor') ? 'selectedItem' : 'unselectedItem'"
          @click="switchTab('editor')"
        >
          <a>Editor</a>
        </li>
        <li
          :class="isTabSelected('settings') ? 'selectedItem' : 'unselectedItem'"
          @click="switchTab('settings')"
        >
          <a>Settings</a>
        </li>
        <li class="translate">
          <a title="Translate rule" @click="translateRule"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                d="M3.78 2L3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z"
              /></svg
          ></a>
          <a title="Copy Output" @click="copyRule"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 4l1-1h5.414L14 6.586V14l-1 1H5l-1-1V4zm9 3l-3-3H5v10h8V7z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 1L2 2v10l1 1V2h6.414l-1-1H3z"
              />
            </svg>
          </a>
          <a
            title="Open Sigma repository on New Tab"
            href="https://github.com/SigmaHQ/sigma/tree/master/rules"
            target="_blank"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.97553 0C3.57186 0 0 3.57186 0 7.97553C0 11.4985 2.29969 14.4832 5.43119 15.5596C5.82263 15.6086 5.96942 15.3639 5.96942 15.1682C5.96942 14.9725 5.96942 14.4832 5.96942 13.7982C3.76758 14.2875 3.27829 12.7217 3.27829 12.7217C2.93578 11.792 2.39755 11.5474 2.39755 11.5474C1.66361 11.0581 2.44648 11.0581 2.44648 11.0581C3.22936 11.107 3.66972 11.8899 3.66972 11.8899C4.40367 13.1131 5.52905 12.7706 5.96942 12.5749C6.01835 12.0367 6.263 11.6942 6.45872 11.4985C4.69725 11.3028 2.83792 10.6177 2.83792 7.53517C2.83792 6.65443 3.1315 5.96942 3.66972 5.38226C3.62079 5.23547 3.32722 4.40367 3.76758 3.32722C3.76758 3.32722 4.4526 3.1315 5.96942 4.15902C6.6055 3.9633 7.29052 3.91437 7.97553 3.91437C8.66055 3.91437 9.34557 4.01223 9.98165 4.15902C11.4985 3.1315 12.1835 3.32722 12.1835 3.32722C12.6239 4.40367 12.3303 5.23547 12.2813 5.43119C12.7706 5.96942 13.1131 6.70336 13.1131 7.5841C13.1131 10.6667 11.2538 11.3028 9.49235 11.4985C9.78593 11.7431 10.0306 12.2324 10.0306 12.9664C10.0306 14.0428 10.0306 14.8746 10.0306 15.1682C10.0306 15.3639 10.1774 15.6086 10.5688 15.5596C13.7492 14.4832 16 11.4985 16 7.97553C15.9511 3.57186 12.3792 0 7.97553 0Z"
                fill="#C5C5C5"
              /></svg
          ></a>
          <a title="About"
            ><svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.5 1a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm1.55-8.42a1.84 1.84 0 0 0-.61-.42A2.25 2.25 0 0 0 7.53 4a2.16 2.16 0 0 0-.88.17c-.239.1-.45.254-.62.45a1.89 1.89 0 0 0-.38.62 3 3 0 0 0-.15.72h1.23a.84.84 0 0 1 .506-.741.72.72 0 0 1 .304-.049.86.86 0 0 1 .27 0 .64.64 0 0 1 .22.14.6.6 0 0 1 .16.22.73.73 0 0 1 .06.3c0 .173-.037.343-.11.5a2.4 2.4 0 0 1-.27.46l-.35.42c-.12.13-.24.27-.35.41a2.33 2.33 0 0 0-.27.45 1.18 1.18 0 0 0-.1.5v.66H8v-.49a.94.94 0 0 1 .11-.42 3.09 3.09 0 0 1 .28-.41l.36-.44a4.29 4.29 0 0 0 .36-.48 2.59 2.59 0 0 0 .28-.55 1.91 1.91 0 0 0 .11-.64 2.18 2.18 0 0 0-.1-.67 1.52 1.52 0 0 0-.35-.55zM6.8 9.83h1.17V11H6.8V9.83z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <div class="playground" v-show="isTabSelected('editor')">
      <div class="left">
        <div id="inputEditor" class="container"></div>
      </div>
      <div class="right">
        <div id="outputEditor" class="container"></div>
      </div>
    </div>
    <div class="settings" v-show="isTabSelected('settings')">
      <div class="settings-container">
        <span>Target</span>
        <div class="settings-description">
          <p>Select the target for rule conversion.</p>
        </div>
        <select v-model="selectedSigmacTarget">
          <option
            v-for="target in sigmacTargets"
            :key="target.targetValue"
            :value="target.targetValue"
          >
            {{ target.targetName }}
          </option>
        </select>
      </div>
      <div class="settings-container">
        <span>Configuration file</span>
        <div class="settings-description">
          <p>
            Select the configuration file to be used with the conversion target.
          </p>
          <p v-if="isCompatibleConfigSelected()">
            <svg
              style="vertical-align: middle"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.55976 1H8.43976L14.9798 13.26L14.5398 14H1.43976L0.999756 13.26L7.55976 1ZM7.99976 2.28L2.27976 13H13.6998L7.99976 2.28ZM8.62476 12V11H7.37476V12H8.62476ZM7.37476 10V6H8.62476V10H7.37476Z"
                fill="#FFCC00"
              />
            </svg>
            You may be using incompatible target and configuration file
          </p>
        </div>
        <select v-model="selectedSigmacConfig">
          <option
            v-for="config in sigmacConfigs"
            :key="config.filename"
            :value="config.filename"
          >
            {{ config.filename }}
          </option>
        </select>
      </div>
      <div class="settings-container">
        <span>Backend Options</span>
        <div class="settings-description">
          <p>Backend options allow you to modify the conversion output.</p>
        </div>
        <div class="icon baseline">
          <input type="text" v-model="inputBackendOption" /><svg
            @click="addBackendOption"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z" />
          </svg>
        </div>
        <ul>
          <div class="icon baseline">
            <li
              v-for="(backendOption, index) in sigmacBackendOptions"
              :key="backendOption"
            >
              {{ backendOption }}
              <svg
                @click="removeBackendOption(index)"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
                />
              </svg>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div>
      <command-line-builder
        :target-sigmac="selectedSigmacTarget"
        :config-sigmac="selectedSigmacConfig"
        :stdErr="stdErr"
        :backendOptions="sigmacBackendOptions"
      ></command-line-builder>
    </div>
  </div>
</template>

<script>
import { loadScript } from "vue-plugin-load-script";
import SelfBuildingSquareSpinner from "./SelfBuildingSquareSpinner.vue";
import CommandLineBuilder from "./CommandLineBuilder.vue";
import loader from "@monaco-editor/loader";
import ruleTemplate from "raw-loader!../assets/rule_template.yaml";
import { sigmacConfigs } from "./sigmacConfigs.js";
import { sigmacTargets } from "./sigmacConfigs.js";

export default {
  components: {
    SelfBuildingSquareSpinner,
    CommandLineBuilder,
  },
  data() {
    return {
      initializationPyodideComplete: false,
      initializationMonacoComplete: false,
      sigmacTargets: sigmacTargets,
      sigmacConfigs: sigmacConfigs,
      selectedSigmacTarget: "athena",
      selectedSigmacConfig: "athena.yml",
      sigmacBackendOptions: [],
      loadingScreenLabel: "BrowserFS",
      inputEditor: null,
      outputEditor: null,
      inputBackendOption: "",
      selectedTab: "editor",
      stdOut: "",
      stdErr: "",
    };
  },
  methods: {
    isTabSelected(tab) {
      if (tab === this.selectedTab) {
        return true;
      } else {
        return false;
      }
    },
    switchTab(tab) {
      this.selectedTab = tab;
    },
    isCompatibleConfigSelected() {
      let sigmacTarget = sigmacTargets.find(
        (o) => o.targetValue === this.selectedSigmacTarget
      );
      if (sigmacTarget.validConfigs.includes(this.selectedSigmacConfig)) {
        return false;
      }
      return true;
    },
    addBackendOption() {
      this.sigmacBackendOptions.push(this.inputBackendOption);
      this.inputBackendOption = "";
    },
    removeBackendOption(idx) {
      this.sigmacBackendOptions.splice(idx, 1);
    },
    initializePyodide: async function () {
      try {
        //This could use a better error handling to differentiante, if Pyodide was not loaded at all or is already loaded and we are trying to load it second time
        await loadScript(
          "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js"
        );
        //Load BrowserFS
        await loadScript(
          "https://cdn.jsdelivr.net/npm/browserfs@1.4.3/dist/browserfs.min.js"
        );
        //Configure browser FS
        window.BrowserFS.configure(
          {
            fs: "LocalStorage",
          },
          function (e) {
            if (e) {
              throw e;
            }
            console.log("BrowserFS prepared");
          }
        );
        this.loadingScreenLabel = "Pyodide";
        window.pyodide = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
          //stdout: (x) => {
          //  if (x === "Python initialization complete") return;
          //  console.log(x);
          //  this.stdOut = x;
          //},
          stderr: (x) => (this.stdErr = x),
        });
        this.loadingScreenLabel = "Micropip";
        await window.pyodide.loadPackage("micropip");
        await window.pyodide.runPythonAsync("import micropip");
        this.loadingScreenLabel = "SigmaTools";
        await window.pyodide.runPythonAsync(
          "await micropip.install('/sigmatools-0.20-py3-none-any.whl')"
        );
        console.log("Loaded sigmatools");
        //Browserfs test
        let FS = await window.pyodide._module.FS;
        let PATH = await window.pyodide._module.PATH;
        // Create an Emscripten interface for the BrowserFS
        var BFS = new window.BrowserFS.EmscriptenFS(FS, PATH);
        // Create mount point in Emscripten FS
        FS.createPath(FS.root, "sigma", true, true);
        // Mount BrowserFS into Emscripten FS
        FS.mount(BFS, { root: "/" }, "/sigma");
        console.log("BrowserFS /sigma mounted");
        this.initializationPyodideComplete = true;
      } catch (e) {
        console.log(e);
      }
      this.initializationPyodideComplete = true;
    },
    initializeEditors: async function () {
      //Specify version of Monaco Editor to load
      loader.config({
        paths: {
          vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.30.1/min/vs",
        },
      });
      this.inputEditor = loader.init().then((monaco) => {
        let editor = monaco.editor.create(
          document.getElementById("inputEditor"),
          {
            theme: "vs-dark",
            language: "yaml",
            value: ruleTemplate,
            automaticLayout: true,
          }
        );
        //Generate GUID in template
        editor.executeEdits("", [
          {
            range: new monaco.Range(2, 5, 2, 5),
            text: crypto.randomUUID(),
          },
        ]);
        //Add Input Editor commands
        //Ctrl+Alt+g generate GUID on cursor
        editor.addAction({
          id: "generate-uuid",
          label: "Generate GUID",
          keybindings: [
            monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KeyG,
          ],
          precondition: null,
          keybindingContext: null,
          contextMenuGroupId: "navigation",
          contextMenuOrder: 1.5,
          run: function (ed) {
            ed.trigger("keyboard", "type", { text: crypto.randomUUID() });
          },
        });
        editor.addAction({
          id: "template-rule",
          label: "Load Sigma Rule Template",
          precondition: null,
          keybindingContext: null,
          contextMenuGroupId: "navigation",
          contextMenuOrder: 1.5,
          run: function (ed) {
            ed.setValue(ruleTemplate);
          },
        });
        return editor;
      });
      this.outputEditor = loader.init().then((monaco) => {
        return monaco.editor.create(document.getElementById("outputEditor"), {
          theme: "vs-dark",
          language: "xml",
          readOnly: true,
          automaticLayout: true,
        });
      });
      this.initializationMonacoComplete = true;
    },
    translateRule: async function () {
      const inputRule = (await this.inputEditor).getValue();
      var fs = window.BrowserFS.BFSRequire("fs");
      //Find config object based on selected config
      let sigmacConfigObject = sigmacConfigs.find(
        (o) => o.filename === this.selectedSigmacConfig
      );
      //Write selected config into /sigma
      fs.writeFileSync(
        "/" + sigmacConfigObject.filename,
        sigmacConfigObject.content
      );
      //Write input editor content into /sigma/editor_input
      fs.writeFileSync("/editor_input", inputRule);
      //Set Python variable for sigmac --target
      window.pyodide.globals.set("sigmac_target", this.selectedSigmacTarget);
      //Set Python variable for sigmac --config
      window.pyodide.globals.set(
        "sigmac_config",
        "/sigma/" + this.selectedSigmacConfig
      );
      //Set Python variable for backendOptions
      window.pyodide.globals.set("backend_options", this.sigmacBackendOptions);
      //This is ugly, but sort of necessary if I don't want to modify sigmac too much, pySigma should fix these issues hopefully
      window.pyodide.runPython(`
        from sigma.sigmac import main
        import js
        input_args = ["--target"]
        input_args.append(sigmac_target)
        input_args.append("--config")
        input_args.append(sigmac_config)
        input_args.append("--output")
        input_args.append("/sigma/output")
        for backend_option in backend_options:
            input_args.append("--backend-option")
            input_args.append(backend_option)
        input_args.append("/sigma/editor_input")
        js.console.log(str(input_args))
        main(input_args)
        f = open('/sigma/output')
        converted_rule = f.read()
        f.close()
        `);
      (await this.outputEditor).setValue(
        window.pyodide.globals.get("converted_rule")
      );
      //(await this.outputEditor).setValue(this.stdOut);
    },
    copyRule: async function () {
      navigator.clipboard.writeText((await this.outputEditor).getValue());
    },
  },
  mounted: async function () {
    if (!this.initializationPyodideComplete) {
      await this.initializePyodide();
    }
    if (!this.initializationMonacoComplete) {
      await this.initializeEditors();
    }
  },
};
</script>

<style scoped>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 95vh;
}

.action-panel {
  width: 100%;
  display: block;
  float: left;
  background-color: #252525;
}

.action-panel ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.action-panel li {
  height: 35px;
  min-width: 110px;
  padding-left: 10px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.action-panel .selectedItem {
  background-color: #1e1e1e;
  color: white;
  cursor: pointer;
}

.action-panel .unselectedItem {
  background-color: #2d2d2d;
  cursor: pointer;
}

.action-panel .translate {
  justify-content: flex-end;
  width: 100%;
}

.action-panel .translate a {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  cursor: pointer;
}

.action-panel .translate a:hover {
  background-color: #2d2d2d;
}

.action-panel li a {
  text-decoration: none;
  font-family: "Segoe WPC", "Segoe UI", sans-serif;
  font-size: 13px;
}

.playground {
  display: flex;
  clear: both;
}

.playground .left {
  width: 50%;
  height: 600px;
}

.playground .right {
  width: 50%;
  height: 600px;
}

@media screen and (max-width: 890px) {
  .playground {
    display: flex;
    flex-direction: column;
    clear: both;
  }

  .playground .left {
    height: 600px;
    width: 100%;
  }

  .playground .right {
    height: 600px;
    width: 100%;
  }
}

.container {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
}
button {
  background-color: #0e639c;
  box-sizing: border-box;
  padding: 4px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  font-family: "Segoe WPC", "Segoe UI", sans-serif;
  cursor: pointer;
}

button:hover {
  background-color: #1177bb;
}

select {
  background-color: #2d2d2d;
  box-sizing: border-box;
  padding: 4px;
  width: 320px;
  justify-content: center;
  align-items: center;
  color: rgb(240, 240, 240);
  border: 1px solid;
  border-color: rgb(60, 60, 60);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

select:hover {
  background-color: rgb(60, 60, 60);
  border: 1px solid;
  border-color: #1177bb;
}

input[type="text"] {
  background-color: #2d2d2d;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(240, 240, 240);
  padding: 4px;
  border: none;
  font-size: 13px;
  width: 320px;
  display: inline-block;
}

input[type="text"]:focus {
  outline-offset: -1px;
  outline-color: #1177bb;
  outline-style: solid;
}

.settings {
  background-color: #1e1e1e;
  height: 635px;
  margin-top: -18px;
}

.settings-container {
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
  margin: 18px;
}

.settings-container span {
  font-weight: bold;
}

.settings-container a {
  padding: 4px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
}

.settings-container ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  min-width: 328px;
}

.icon.baseline svg {
  top: 0.625em;
  position: relative;
  margin-left: 4px;
  padding: 5px;
}

.icon.baseline svg:hover {
  background-color: #2d2d2d;
  border-radius: 50%;
}

.settings-container a:hover {
  background-color: #2d2d2d;
}
</style>