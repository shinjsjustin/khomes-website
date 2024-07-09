import PhotoGrid from './PhotoGrid';
import { Photo } from './types';

const entrancePhotos: Photo[] = [
  {id: 2, src: '/images/living_01.jpg'},
  {id: 3, src: '/images/living_02.jpg'},
  {id: 4, src: '/images/kitchen_01.jpg'},
  {id: 5, src: '/images/kitchen_02.jpg'},
  {id: 6, src: '/images/kitchen_03.jpg'},
  {id: 7, src: '/images/kitchen_04.jpg'},
  {id: 8, src: '/images/hallway_closet_01.jpg'},
  {id: 9, src: '/images/hallway_closet_02.jpg'},
  {id: 10, src: '/images/bathroom_01.jpg'},
  {id: 11, src: '/images/bathroom_02.jpg'},
]

const bedroomPhotos: Photo[] = [
  {id: 12, src: '/images/room1_01.jpg'},
  {id: 13, src: '/images/room1_02.jpg'},
  {id: 14, src: '/images/room2_01.jpg'},
  {id: 15, src: '/images/room2_02.jpg'},
]

const masterPhotos: Photo[] = [
  {id: 16, src: '/images/master_01.jpg'},
  {id: 17, src: '/images/master_02.jpg'},
  {id: 18, src: '/images/master_bath_01.jpg'},
  {id: 19, src: '/images/master_bath_02.jpg'},
  {id: 20, src: '/images/master_bath_03.jpg'},
]

//use client
export default function Page(){

  return <div className="content">

    <div className="section bg-black bg-opacity-70">
      <h2 className="text-6xl font-bold text-white">Share My Home in Santa Clara</h2>
      <div className= "welcome" style={{
          backgroundImage: `url(${'/images/front_yard.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '24px',
          width: '900px',
          height: '600px',
        }}
      />
    </div>
    <div className="section bg-black bg-opacity-70">
      <h2 className="text-6xl font-bold text-white">Entrance</h2>
      <PhotoGrid photos = {entrancePhotos}/>
    </div>
    <div className="section bg-black bg-opacity-70">
      <h2 className="text-6xl font-bold text-white">2 Bedrooms</h2>
      <PhotoGrid photos = {bedroomPhotos}/>
    </div>
    <div className="section bg-black bg-opacity-70">
      <h2 className="text-6xl font-bold text-white">Master Bedroom</h2>
      <PhotoGrid photos = {masterPhotos}/>
    </div>

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