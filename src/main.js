import tag from "html-tag-js";
import { marked } from "marked";
import cssText from "./style.css";

const PLUGIN_ID = "com.rightfix.jupyterreader";

class JupyterReader {
  constructor() {
    this.baseUrl = "";
    this.notebookData = null;
    this.currentFile = null;
    this.$container = null;
    this.isCodeMirror = false;
    this.editorContainer = null;
  }

  init(baseUrl) {
    this.baseUrl = baseUrl;
    this.injectStyles();
    this.detectEditor();
    this.registerFileHandler();
    this.setupEditorHooks();
  }

  detectEditor() {
    this.isCodeMirror = editorManager.isCodeMirror === true;
  }

  registerFileHandler() {
    acode.registerFileHandler(PLUGIN_ID, {
      extensions: ["ipynb"],
      handleFile: async (file) => {
        await this.openNotebookFile(file.uri, file.name);
      }
    });
  }

  setupEditorHooks() {
    editorManager.on("switch-file", (file) => {
      this.onSwitchFile(file);
    });
  }

  onSwitchFile(file) {
    if (file && file.uri === this.currentFile) {
      this.showNotebookInEditor();
    } else {
      this.hideNotebookFromEditor();
    }
  }

  injectStyles() {
    if (document.getElementById("jupyter-reader-styles")) return;
    const style = document.createElement("style");
    style.id = "jupyter-reader-styles";
    style.textContent = cssText;
    document.head.appendChild(style);
  }

  async openNotebookFile(uri, filename) {
    let loader = null;
    try {
      // Check if file is already open
      const existingFile = editorManager.getFile(uri, "uri");
      if (existingFile) {
        editorManager.switchFile(existingFile.id);
        // Show existing notebook
        this.currentFile = uri;
        this.renderNotebook(filename);
        return;
      }

      loader = acode.loader("Loading notebook...", "Please wait");
      loader.show();

      // Read the file
      const fileOp = acode.fsOperation(uri);
      const content = await fileOp.readFile("utf-8");
      const notebookData = JSON.parse(content);

      // Clean up previous notebook first
      this.removeNotebook();

      this.notebookData = notebookData;
      this.currentFile = uri;

      // Create a new editor file
      const file = acode.newEditorFile(filename, {
        uri: uri,
        url: uri,
        language: "json"
      });

      // Add to editor
      editorManager.addNewFile(filename, {
        uri: uri,
        url: uri,
        language: "json"
      });

      // Render the notebook viewer
      this.renderNotebook(filename);

    } catch (error) {
      console.error("Error opening notebook:", error);
      acode.alert("Error", `Failed to open notebook: ${error.message}`);
    } finally {
      if (loader) {
        loader.hide();
      }
    }
  }

  removeNotebook() {
    if (this.$container) {
      this.$container.remove();
      this.$container = null;
    }
    this.showEditor();
  }

  renderNotebook(filename) {
    this.$container = tag("div", {
      className: "notebook-viewer"
    });

    const header = tag("div", {
      className: "notebook-header",
      innerHTML: `
        <div class="notebook-title">${this.escapeHtml(filename)}</div>
        <div class="notebook-info">
          ${this.notebookData.cells ? this.notebookData.cells.length : 0} cells
          ${this.notebookData.metadata && this.notebookData.metadata.kernelspec ? 
            ' | ' + this.escapeHtml(this.notebookData.metadata.kernelspec.name) : ''}
        </div>
        <div class="read-only-notice">
          Read-only mode - This notebook cannot be edited
        </div>
      `
    });
    this.$container.appendChild(header);

    const cellsContainer = tag("div", {
      className: "cells-container"
    });
    this.renderCells(cellsContainer);
    this.$container.appendChild(cellsContainer);

    this.showNotebookInEditor();
  }

  renderCells(container) {
    container.innerHTML = "";
    
    if (!this.notebookData || !this.notebookData.cells || this.notebookData.cells.length === 0) {
      container.innerHTML = '<div class="empty-notebook">No cells found in this notebook.</div>';
      return;
    }

    this.notebookData.cells.forEach((cell, index) => {
      const cellElement = this.createCellElement(cell, index);
      container.appendChild(cellElement);
    });
  }

  createCellElement(cell, index) {
    const cellElement = tag("div", {
      className: `cell cell-${cell.cell_type}`
    });

    const header = tag("div", {
      className: "cell-header"
    });
    
    const badge = tag("span", {
      className: `cell-type-badge ${cell.cell_type}`,
      textContent: cell.cell_type
    });
    header.appendChild(badge);

    if (cell.cell_type === "code" && cell.execution_count) {
      const cellNum = tag("span", {
        className: "cell-number",
        textContent: `In [${cell.execution_count}]:`
      });
      header.appendChild(cellNum);
    }

    cellElement.appendChild(header);

    const content = tag("div", {
      className: "cell-content"
    });

    const source = this.getSourceText(cell.source);

    if (cell.cell_type === "code") {
      const promptArea = tag("div", {
        className: "prompt-area"
      });
      
      const prompt = tag("div", {
        className: "input-prompt",
        textContent: cell.execution_count ? `[${cell.execution_count}]` : "[ ]"
      });
      promptArea.appendChild(prompt);

      const codeContent = tag("div", {
        className: "code-content",
        textContent: source
      });
      promptArea.appendChild(codeContent);

      content.appendChild(promptArea);

      if (cell.outputs && cell.outputs.length > 0) {
        const outputsContainer = tag("div", {
          className: "cell-outputs"
        });
        
        cell.outputs.forEach(output => {
          const outputElement = this.renderOutput(output, cell.execution_count);
          outputsContainer.appendChild(outputElement);
        });
        
        content.appendChild(outputsContainer);
      }
    } else if (cell.cell_type === "markdown") {
      content.className = "cell-content markdown-content";
      try {
        content.innerHTML = marked.parse(source);
      } catch (e) {
        content.textContent = source;
      }
    } else {
      content.className = "cell-content";
      content.textContent = source;
    }

    cellElement.appendChild(content);
    return cellElement;
  }

  renderOutput(output, executionCount) {
    const container = tag("div", {
      className: "output"
    });

    if (output.output_type === "stream") {
      const promptArea = tag("div", {
        className: "prompt-area"
      });
      
      const prompt = tag("div", {
        className: "output-prompt",
        textContent: executionCount ? `Out[${executionCount}]:` : "Out[ ]:"
      });
      promptArea.appendChild(prompt);

      const outputContent = tag("div", {
        className: "output output-stream"
      });
      
      const text = Array.isArray(output.text) ? output.text.join("") : output.text;
      outputContent.innerHTML = `<pre>${this.escapeHtml(text)}</pre>`;
      
      promptArea.appendChild(outputContent);
      container.appendChild(promptArea);
    } else if (output.output_type === "execute_result" || output.output_type === "display_data") {
      const promptArea = tag("div", {
        className: "prompt-area"
      });
      
      const prompt = tag("div", {
        className: "output-prompt",
        textContent: executionCount ? `Out[${executionCount}]:` : "Out[ ]:"
      });
      promptArea.appendChild(prompt);

      const outputContent = tag("div", {
        className: "output output-result"
      });

      if (output.data) {
        if (output.data["text/html"]) {
          const html = Array.isArray(output.data["text/html"]) 
            ? output.data["text/html"].join("") 
            : output.data["text/html"];
          outputContent.innerHTML = html;
        } else if (output.data["image/png"]) {
          const img = document.createElement("img");
          img.src = `data:image/png;base64,${output.data["image/png"]}`;
          outputContent.appendChild(img);
        } else if (output.data["image/jpeg"]) {
          const img = document.createElement("img");
          img.src = `data:image/jpeg;base64,${output.data["image/jpeg"]}`;
          outputContent.appendChild(img);
        } else if (output.data["text/plain"]) {
          const text = Array.isArray(output.data["text/plain"]) 
            ? output.data["text/plain"].join("") 
            : output.data["text/plain"];
          outputContent.innerHTML = `<pre>${this.escapeHtml(text)}</pre>`;
        }
      }
      
      promptArea.appendChild(outputContent);
      container.appendChild(promptArea);
    } else if (output.output_type === "error") {
      const promptArea = tag("div", {
        className: "prompt-area"
      });
      
      const prompt = tag("div", {
        className: "output-prompt",
        textContent: executionCount ? `Out[${executionCount}]:` : "Out[ ]:"
      });
      promptArea.appendChild(prompt);

      const errorContent = tag("div", {
        className: "output output-error"
      });
      
      const traceback = output.traceback ? output.traceback.join("\n") : output.evalue;
      errorContent.innerHTML = `<pre>${this.escapeHtml(traceback)}</pre>`;
      
      promptArea.appendChild(errorContent);
      container.appendChild(promptArea);
    }

    return container;
  }

  getSourceText(source) {
    if (!source) return "";
    if (Array.isArray(source)) {
      return source.join("");
    }
    return source;
  }

  escapeHtml(text) {
    if (Array.isArray(text)) {
      text = text.join("");
    }
    if (typeof text !== "string") {
      text = String(text);
    }
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  showNotebookInEditor() {
    const main = document.querySelector("main") || document.querySelector("#main");
    const header = document.querySelector("header") || document.querySelector(".header");

    let topOffset = 44;
    if (header) {
      topOffset = header.offsetHeight || 44;
    }

    this.$container.style.top = topOffset + "px";

    this.hideEditor();

    const existingContainer = document.querySelector(".notebook-viewer");
    if (existingContainer) {
      existingContainer.remove();
    }

    if (main) {
      main.appendChild(this.$container);
    } else {
      document.body.appendChild(this.$container);
    }

    this.$container.style.display = "block";
  }

  hideEditor() {
    const selectors = [
      "#editor",
      "#editors", 
      ".editor-container",
      ".ace_editor",
      ".cm-editor"
    ];

    selectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        el.style.display = "none";
      }
    });

    const editorArea = document.querySelector("#editor-area");
    if (editorArea) {
      editorArea.style.display = "none";
    }
  }

  showEditor() {
    const selectors = [
      "#editor",
      "#editors",
      ".editor-container",
      ".ace_editor", 
      ".cm-editor"
    ];

    selectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        el.style.display = "";
      }
    });

    const editorArea = document.querySelector("#editor-area");
    if (editorArea) {
      editorArea.style.display = "";
    }
  }

  hideNotebookFromEditor() {
    if (this.$container) {
      this.$container.style.display = "none";
    }
    this.showEditor();
  }
}

const jupyterReader = new JupyterReader();

acode.setPluginInit(PLUGIN_ID, function(baseUrl) {
  jupyterReader.init(baseUrl);
});
