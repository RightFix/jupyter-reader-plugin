import tag from "html-tag-js";
import { marked } from "marked";

const PLUGIN_ID = "com.rightfix.jupyterreader";

const CSS = `
.notebook-viewer {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  padding: 0;
  background: #ffffff;
  z-index: 1;
}

.notebook-viewer.no-sidebar {
  left: 0;
}

.notebook-header {
  padding: 8px 12px;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 10;
}

.notebook-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
}

.notebook-info {
  font-size: 12px;
  color: #666;
}

.cells-container {
  max-width: 100%;
  padding: 8px;
}

.cell {
  background: #fff;
  border-left: 4px solid transparent;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
}

.cell-code {
  border-left-color: #0071c1;
}

.cell-markdown {
  border-left-color: #21734b;
}

.cell-raw {
  border-left-color: #666;
}

.cell-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.cell-type-badge {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: 500;
  text-transform: uppercase;
}

.cell-type-badge.code {
  background: #e3f2fd;
  color: #0071c1;
}

.cell-type-badge.markdown {
  background: #e8f5e9;
  color: #21734b;
}

.cell-type-badge.raw {
  background: #f5f5f5;
  color: #666;
}

.cell-number {
  font-size: 11px;
  color: #888;
  font-family: 'Consolas', monospace;
}

.prompt-area {
  display: flex;
  align-items: flex-start;
  margin-bottom: 6px;
}

.input-prompt {
  color: #0071c1;
  font-family: 'Consolas', monospace;
  font-size: 11px;
  padding: 2px 8px 0 0;
  user-select: none;
  min-width: 60px;
  text-align: right;
  flex-shrink: 0;
}

.output-prompt {
  color: #cc7832;
  font-family: 'Consolas', monospace;
  font-size: 11px;
  padding: 2px 8px 0 0;
  user-select: none;
  min-width: 60px;
  text-align: right;
  flex-shrink: 0;
}

.cell-content {
  flex: 1;
  min-width: 0;
}

.code-content {
  font-family: 'Consolas', 'Monaco', 'Menlo', monospace;
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  background: #f7f7f7;
  padding: 8px;
  border-radius: 4px;
  overflow-x: auto;
}

.markdown-content {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}

.markdown-content h1 { font-size: 22px; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin: 16px 0 8px 0; }
.markdown-content h2 { font-size: 18px; margin: 14px 0 6px 0; }
.markdown-content h3 { font-size: 16px; margin: 12px 0 4px 0; }
.markdown-content h4 { font-size: 14px; margin: 10px 0 4px 0; }
.markdown-content h5 { font-size: 13px; margin: 8px 0 4px 0; }
.markdown-content h6 { font-size: 12px; margin: 8px 0 4px 0; color: #666; }

.markdown-content p { margin: 8px 0; }

.markdown-content code {
  background: #f0f0f0;
  padding: 1px 4px;
  border-radius: 2px;
  font-family: 'Consolas', monospace;
  font-size: 12px;
}

.markdown-content pre {
  background: #f7f7f7;
  padding: 10px;
  overflow-x: auto;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin: 8px 0;
}

.markdown-content pre code {
  background: transparent;
  padding: 0;
}

.markdown-content blockquote {
  border-left: 3px solid #ddd;
  margin: 8px 0;
  padding: 4px 12px;
  color: #666;
  background: #fafafa;
}

.markdown-content ul, .markdown-content ol {
  padding-left: 20px;
  margin: 8px 0;
}

.markdown-content li { margin: 4px 0; }

.markdown-content a {
  color: #0071c1;
  text-decoration: none;
}

.markdown-content a:hover {
  text-decoration: underline;
}

.markdown-content table {
  border-collapse: collapse;
  width: 100%;
  margin: 8px 0;
}

.markdown-content th, .markdown-content td {
  border: 1px solid #ddd;
  padding: 6px 10px;
  text-align: left;
}

.markdown-content th {
  background: #f5f5f5;
  font-weight: 600;
}

.markdown-content img {
  max-width: 100%;
}

.cell-outputs {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #eee;
}

.output {
  margin: 4px 0;
}

.output pre {
  margin: 0;
  font-family: 'Consolas', monospace;
  font-size: 12px;
  white-space: pre-wrap;
  word-break: break-word;
}

.output-stream { color: #333; }
.output-result { color: #333; }

.output-error {
  color: #d32f2f;
  background: #ffebee;
  padding: 8px;
  border-radius: 4px;
}

.output img {
  max-width: 100%;
}

.empty-notebook {
  text-align: center;
  padding: 40px 16px;
  color: #888;
  font-size: 14px;
}

.read-only-notice {
  background: #fff3e0;
  border: 1px solid #ffb74d;
  border-radius: 4px;
  padding: 8px 12px;
  margin: 8px 0;
  font-size: 12px;
  color: #e65100;
}
`;

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
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  async openNotebookFile(uri, filename) {
    try {
      const loader = acode.loader("Loading notebook...", "Please wait");
      loader.show();

      const fileOp = acode.fsOperation(uri);
      const content = await fileOp.readFile("utf-8");
      const notebookData = JSON.parse(content);

      loader.hide();

      const existingFile = editorManager.getFile(uri, "uri");
      if (existingFile) {
        editorManager.switchFile(existingFile);
      } else {
        const tempFile = editorManager.createFile(uri, {
          name: filename,
          uri: uri,
          language: "json"
        });
        editorManager.switchFile(tempFile);
      }

      this.notebookData = notebookData;
      this.currentFile = uri;
      this.renderNotebook(filename);

    } catch (error) {
      acode.alert("Error", `Failed to open notebook: ${error.message}`);
    }
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
