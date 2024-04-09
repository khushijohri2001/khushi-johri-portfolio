const Footer = () => {
  const date = new Date()
  
  return (
    <footer className="bg-purple-blue-gradient-dull flex items-center justify-center w-screen h-[24vh]" id="Footer">

          <p className="text-lg">© {date.getFullYear()} Khushi Johri</p>
     
    </footer>
  );
};

export default Footer;
