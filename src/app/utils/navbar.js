export function Navbar(props) {
  return (
    <div className="flex bg-sky-500 justify-between items-center mb-4 h-20 text-white">
      <div className="text-center">
        <a href="/homepage" className="text-3xl font-bold ml-4">
          NewsKH - {props.name}
        </a>
      </div>
      <div className="flex text-lg h-full">
        <a
          className="px-6  hover:bg-sky-400 h-full flex items-center"
          href="/local"
        >
          ព័ត៌មានជាតិ
        </a>
        <a
          className="px-6  hover:bg-sky-400 h-full flex items-center"
          href="/international"
        >
          ព័ត៌មានជាតិអន្តរជាតិ
        </a>
        <a
          className="px-6  hover:bg-sky-400 h-full flex items-center"
          href="/sport"
        >
          ព័ត៌មានកីឡា
        </a>
        <a
          className="px-6  hover:bg-sky-400 h-full flex items-center"
          href="/health"
        >
          ព័ត៌មានសុខភាព
        </a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="bg-sky-500 text-center text-white py-20 mt-6">
      <p className="text-lg mb-4">Hotline: 023 123 456</p>
      <p>រក្សាសិទ្ធគ្រប់យ៉ាង</p>
    </div>
  );
}
