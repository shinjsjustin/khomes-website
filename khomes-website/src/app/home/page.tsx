export default function Page(){
    return <div className="content">
    {/* Welcome Section */}
    <div className="section">
      <h1 className="text-6xl font-bold text-white">Welcome</h1>
    </div>

    {/* Information Section */}
    <div className="section">
      <h2 className="text-4xl font-bold text-white">Information</h2>
    </div>

    {/* Additional Paragraph Sections */}
    <div className="section">
      <p className="text-xl text-white">
        Here's some detailed paragraph about the site or other info.
      </p>
    </div>

    {/* More sections can be added similarly */}
  </div>
}