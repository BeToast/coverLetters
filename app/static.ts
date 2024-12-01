const cvUrl =
   "https://drive.google.com/file/d/1LsUDPsDu6tXJ1t0EM1Ri8OvxVw0OfA0n/view?usp=sharing";
const cvUrlHospitality =
   "https://drive.google.com/file/d/1snpOpAcZ5YFG6nLZoQDX740ZjIiY9F72/view?usp=sharing";
const githubUrl = "https://github.com/BeToast";

const isClient = () => {
   return typeof window != "undefined" && window.document;
};

export { cvUrl, cvUrlHospitality, githubUrl, isClient };
