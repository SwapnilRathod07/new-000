const express = require('express');
const multer = require('multer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/merge', upload.array('pdfFiles'), async (req, res) => {
    try {
        const pdfFiles = req.files;
        const pdfDoc = await PDFDocument.create();

        for (const pdfFile of pdfFiles) {
            const pdfBytes = await fs.promises.readFile(pdfFile.path);
            const tempPdfDoc = await PDFDocument.load(pdfBytes);
            const copiedPages = await pdfDoc.copyPages(tempPdfDoc, tempPdfDoc.getPageIndices());
            copiedPages.forEach(page => pdfDoc.addPage(page));
        }

        const mergedPdfBytes = await pdfDoc.save();
        res.setHeader('Content-Type', 'application/pdf');
        res.send(mergedPdfBytes);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Failed to merge PDFs.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
