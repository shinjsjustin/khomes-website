import PhotoGrid from './PhotoGrid';

//use client
export default function Page(){

  return <div className="content">
    {/* Welcome Section */}
    <div className="section">
      <h1 className="text-6xl font-bold text-white">Welcome</h1>
    </div>

    {/* Information Section */}
    <div className="section bg-black bg-opacity-70">
      <PhotoGrid/>
    </div>

    {/* Additional Paragraph Sections
    <div className="section bg-black bg-opacity-70">
      <a className="text-xl text-white"href="/files/House_Rules.docx" download="House_Rules.docx">
        Download House Rules Word
      </a>
      <a className="text-xl text-white"href="/files/House_Rules.pdf" download="House_Rules.pdf">
        Download House Rules PDF
      </a>
      <a className="text-xl text-white"href="/files/Lease_Agreement.docx" download="Lease_Agreement.docx">
        Download Lease Agreement Word
      </a>
      <a className="text-xl text-white"href="/files/Lease_Agreement.pdf" download="Lease_Agreement.pdf">
        Download Lease Agreement PDF
      </a>
    </div> */}

        {/* Additional Paragraph Sections */}
    <div className="section bg-black bg-opacity-70">
      <div className = "filebox">
        <a className="text-xl text-white">
          House Rules
        </a>
        <div className = "icons">
          <a href="/files/House_Rules.pdf" download="House_Rules.pdf" className="icon" style={{backgroundImage: "url('/icon/pdf.png')" }} />
          <a href="/files/House_Rules.docx" download="House_Rules.docx" className="icon" style={{backgroundImage: "url('/icon/word.png')"}} />
        </div>
      </div>
      <div className = "filebox">
        <a className="text-xl text-white">
          Lease Agreement
        </a>
        <div className = "icons">
          <a href="/files/Lease_Agreement.pdf" download="Lease_Agreement.pdf" className="icon" style={{backgroundImage: "url('/icon/pdf.png')"}} />
          <a href="/files/Lease_Agreement.docx" download="Lease_Agreement.docx" className="icon" style={{backgroundImage: "url('/icon/word.png')"}} />
        </div>
      </div>
    </div>

    {/* More sections can be added similarly */}
  </div>
}