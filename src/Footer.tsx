const Footer = () => {
  return (
    <footer className="bg-white text-[#1A1A1B] py-4 px-6 text-xs">
      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-2">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Advertise</a>
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="hover:underline">Careers</a>
        <a href="#" className="hover:underline">Press</a>
      </div>
      <div className="flex items-center gap-2 text-[#878A8C]">
        <span>© {new Date().getFullYear()} SayItUp — A portfolio project by</span>
        <a href="#" className="text-[#0079D3] hover:underline">Feroz Khan</a>
        <span>•</span>
        <span>Built with React, TypeScript & Tailwind CSS</span>
      </div>
    </footer>
  )
}

export default Footer 