import { Helmet } from 'react-helmet'
import aboutImg from '../assets/about-us.jpg'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Discover Our Passion for Free HD Images</title>
        <meta
          name='description'
          content='Learn about our mission to provide access to stunning, high-quality images for everyone. We curate a diverse collection of over 100 free HD images from Picsum, empowering creatives, bloggers, and businesses to enhance their projects with beautiful visuals. Join us in celebrating the art of photography and discover how our resources can inspire your next creative endeavor.'
        />
      </Helmet>
      <div className='hero min-h-screen '>
        <div className='hero-content flex-col lg:flex-row-reverse gap-12'>
          <img
            src={aboutImg}
            alt='About Us'
            className='rounded-lg shadow-lg w-96 max-w-md lg:max-w-lg'
          />
          <div className='max-w-lg text-center lg:text-left'>
            <h1 className='text-5xl font-bold  leading-tight'>About Us</h1>
            <p className='py-6  leading-relaxed'>
              Our mission is to empower creatives, bloggers, and businesses by
              providing access to stunning, high-quality images. We celebrate
              the art of photography and aim to inspire your next creative
              endeavor with our carefully curated collection of over 100 free HD
              images from Picsum.
            </p>
            <button className='btn btn-primary px-8 py-3 rounded-md shadow-md text-white hover:bg-blue-600 transition-all'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
