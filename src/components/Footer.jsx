function Footer() {
  const year = new Date().getFullYear();
  return (

    <footer>
      <p className="copyright">Copyright ⓒ {year}</p>
      <p>Developed by <a className="myName" href="https://musarraf.netlify.app/">Musarraf</a> with <span>❤</span></p>
      
    </footer>
  );
}

export default Footer;
