export const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/resume.pdf";
    link.download = "selemun's_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};