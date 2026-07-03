import jsPDF from "jspdf";

export default function downloadReport(run: any) {

  const pdf = new jsPDF();

  pdf.setFontSize(22);

  pdf.text("FailSense AI Report", 20, 20);

  pdf.setFontSize(14);

  pdf.text(`Repository : ${run.repo}`, 20, 40);

  pdf.text(`Run ID : ${run.runId}`, 20, 50);

  pdf.text(`Status : ${run.status}`, 20, 60);

  pdf.text("Errors", 20, 80);

  let y = 90;

  run.errors?.forEach((err: string) => {

    pdf.text(`• ${err}`, 25, y);

    y += 10;

  });

  y += 10;

  pdf.text("AI Analysis", 20, y);

  y += 10;

  if (typeof run.aiResponse === "string") {

    pdf.text(run.aiResponse, 20, y);

  } else {

    pdf.text(
      `Root Cause : ${run.aiResponse.rootCause}`,
      20,
      y
    );

    y += 10;

    pdf.text(
      `Explanation : ${run.aiResponse.explanation}`,
      20,
      y
    );

    y += 10;

    pdf.text(
      `Fix : ${run.aiResponse.fix}`,
      20,
      y
    );

  }

  pdf.save(`Run-${run.runId}.pdf`);

}