const cvUrl = 'https://drive.google.com/file/d/1m3LY8nRPMlAZaedFrOdP0OzQAehKqSrU/view?usp=sharing' ;
const cvUrlHospitality = 'https://drive.google.com/file/d/1snpOpAcZ5YFG6nLZoQDX740ZjIiY9F72/view?usp=sharing' ;
const githubUrl = 'https://github.com/BeToast'

const isClient = () => {
  return typeof window != 'undefined' && window.document;
}

export { cvUrl, cvUrlHospitality, githubUrl, isClient } ;