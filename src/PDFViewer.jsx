import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PDFViewer = () => {
  const params = useParams();

  useEffect(() => {
    // Get the PDF file name from the URL params
    const { pdfFileName } = params;

    // Construct the URL of the PDF file
    const pdfUrl = `/src/pdfs/${pdfFileName}`; // Update with the correct relative path

    // Load the PDF file using an <iframe> element
    const iframe = document.createElement('iframe');
    iframe.src = pdfUrl;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = 'none';
    document.getElementById('pdf-viewer').appendChild(iframe);

    // Set body overflow to hidden to prevent scrolling
    document.body.style.overflow = 'hidden';

    // Clean up function to remove the iframe when the component unmounts
    return () => {
      document.body.style.overflow = ''; // Reset body overflow
      document.getElementById('pdf-viewer').removeChild(iframe);
    };
  }, [params]);

  return <div id="pdf-viewer" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999 }}></div>;
};

export default PDFViewer;
