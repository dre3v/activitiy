<template>
  <button @click="downloadWithCSS">Download PDF WITH CSS</button>
    <br>
    <br>
    <button @click="download">Download PDF WITHOUT CSS</button>

  <div ref="content">
      <p style="background-color: red;">Hello Vue in CodeSandbox!</p>
      <h3>Installed CLI Plugins</h3>
      <ul>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
            target="_blank"
            rel="noopener"
          >babel</a>
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
            target="_blank"
            rel="noopener"
          >eslint</a>
        </li>
      </ul>
      <h3>Essential Links</h3>
      <h3>Ecosystem</h3>
    </div>

</template>

<script setup>
import jsPDF from "jspdf";
import html2canvas from "html2canvas"
import { ref } from "vue";

const content = ref("")

function downloadWithCSS() {
      const doc = new jsPDF();
      var canvasElement = document.createElement('canvas');
      html2canvas(content.value, { canvas: canvasElement }).then(function (canvas) {
        const img = canvas.toDataURL("image/jpeg", 0.8);
        doc.addImage(img,'JPEG',20,20);
        doc.save("sample.pdf");
      });
}

function download() {
      const doc = new jsPDF('l', 'mm', [1200, 1210]);
      const contentHtml = content.value;
       doc.html(contentHtml, {
		          callback: function(doc) {
			          doc.save("output.pdf");
		          },
		          x: 10, y: 10
            });
     
  }

  


</script>