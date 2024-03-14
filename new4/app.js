document.getElementById('merge-btn').addEventListener('click', async () => {
  const filesInput = document.getElementById('pdf-files');
  const files = Array.from(filesInput.files);
  
  if (files.length < 2) {
      alert('Please select at least two PDF files to merge.');
      return;
  }

  const formData = new FormData();
  files.forEach(file => {
      formData.append('pdfFiles', file);
  });

  try {
      const response = await fetch('/merge', {
          method: 'POST',
          body: formData
      });
      
      if (!response.ok) {
          throw new Error('Failed to merge PDFs.');
      }

      const mergedPdfBlob = await response.blob();
      const mergedPdfUrl = URL.createObjectURL(mergedPdfBlob);
      
      const outputContainer = document.getElementById('output-container');
      outputContainer.innerHTML = `<a href="${mergedPdfUrl}" download="merged_pdf.pdf">Download Merged PDF</a>`;
  } catch (error) {
      console.error('Error:', error);
      alert('Failed to merge PDFs.');
  }
});
