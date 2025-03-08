'use client'
import React, { useState } from 'react'
import { jsPDF } from "jspdf";



const certificate = () => {
    const [name, setName] = useState("");

    const generateCertificate = () => {
        const doc = new jsPDF({ orientation: "landscape" });
    
        doc.setFillColor(230, 230, 250);
        doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, "F");
    
        doc.setLineWidth(5);
        doc.setDrawColor(0, 0, 128);
        doc.rect(10, 10, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 20);
    
        doc.setFont("helvetica", "bold");
        doc.setFontSize(32);
        doc.setTextColor(0, 0, 128);
        doc.text("Certificate of Participation", doc.internal.pageSize.width / 2, 40, { align: "center" });
    
        doc.setFontSize(18);
        doc.setTextColor(50, 50, 50);
        doc.text("This is to certify that", doc.internal.pageSize.width / 2, 70, { align: "center" });
    
        doc.setFont("times", "bold");
        doc.setFontSize(28);
        doc.setTextColor(0, 0, 0);
        doc.text(name || "[Your Name]", doc.internal.pageSize.width / 2, 100, { align: "center" });
    
        doc.setFont("helvetica", "normal");
        doc.setFontSize(18);
        doc.text("has successfully participated in", doc.internal.pageSize.width / 2, 130, { align: "center" });
    
        doc.setFont("times", "bold");
        doc.setFontSize(22);
        doc.setTextColor(255, 0, 0);
        doc.text("Hackentine 2025", doc.internal.pageSize.width / 2, 160, { align: "center" });
    
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(14);
        doc.text("Date: April 30, 2025", 50, 200);
        doc.text("Signature: ___________________", doc.internal.pageSize.width - 100, 200);
    
        doc.save("certificate.pdf");
    };

  return (
    <div className="p-16">
      <section className="shadow-lg rounded-xl p-6 mb-8 w-auto max-w-3xl">
          <h2 className="text-3xl font-bold">🎓 Generate Your Certificate</h2>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-4 p-2 border rounded w-full text-center text-black"
          />
          <button
            onClick={generateCertificate}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Generate Certificate
          </button>
        </section>
    </div>
  )
}

export default certificate
