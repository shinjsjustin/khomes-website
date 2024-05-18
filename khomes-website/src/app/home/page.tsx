export default function Page(){
    return <div className="content">
    {/* Welcome Section */}
    <div className="section">
      <h1 className="text-6xl font-bold text-white">Welcome</h1>
    </div>

    {/* Information Section */}
    <div className="section bg-black bg-opacity-70">
      <h2 className="text-4xl font-bold text-white">Information</h2>
    </div>

    {/* Additional Paragraph Sections */}
    <div className="section bg-black bg-opacity-70">
      <p className="text-xl text-white">
        Contact us!
      </p>
    </div>

    {/* More sections can be added similarly */}
  </div>
}