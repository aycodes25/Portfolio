// Resume PDF Download Helper
function downloadResumeAsPDF() {
  const sourceUrl = 'assets/TOMINIYI CV.html';
  const encodedUrl = encodeURI(sourceUrl);

  if (typeof html2pdf === 'undefined') {
    alert('PDF export library not loaded. Please refresh the page and try again.');
    return;
  }

  fetch(encodedUrl)
    .then((response) => {
      if (!response.ok) throw new Error('Failed to load CV html: ' + response.status);
      return response.text();
    })
    .then((htmlText) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');
      const cvContent = doc.body.cloneNode(true);

      const hiddenContainer = document.createElement('div');
      hiddenContainer.style.position = 'fixed';
      hiddenContainer.style.left = '-9999px';
      hiddenContainer.style.top = '-9999px';
      hiddenContainer.style.width = '210mm';
      hiddenContainer.style.padding = '0';
      hiddenContainer.style.margin = '0';
      hiddenContainer.style.background = '#ffffff';
      hiddenContainer.id = 'cv-export-container';
      hiddenContainer.appendChild(cvContent);

      document.body.appendChild(hiddenContainer);

      const options = {
        margin: [8, 8, 8, 8],
        filename: 'Tominiyi_Ayomide_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
      };

      html2pdf().set(options).from(hiddenContainer).save().then(() => {
        document.body.removeChild(hiddenContainer);
      }).catch((err) => {
        document.body.removeChild(hiddenContainer);
        console.error('PDF generation failed:', err);
        alert('Could not generate PDF. Please open the resume then use browser Print → Save as PDF.');
      });
    })
    .catch((error) => {
      console.error('CV loading failed:', error);
      alert('Unable to load the CV page for PDF export. Opening CV page in a new tab; then use Print → Save as PDF.');
      window.open(sourceUrl, '_blank');
    });
}

// Existing fallback print behavior (optional; can be triggered manually)
function printResume() {
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = 'assets/TOMINIYI CV.html';
  document.body.appendChild(iframe);

  iframe.onload = function () {
    setTimeout(() => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      document.body.removeChild(iframe);
    }, 500);
  };
}

