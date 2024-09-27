import { Helmet } from 'react-helmet'

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
      <div className='p-10 text-center max-w-6xl m-auto'>
        <h2 className='text-3xl '>About Us</h2>
        <p className='mt-5'>
          Im baby raclette kitsch pour-over typewriter. Schlitz semiotics paleo
          leggings retro craft beer VHS narwhal PBR&B messenger bag live-edge.
          Kinfolk mumblecore williamsburg solarpunk. Readymade lumbersexual
          lo-fi mukbang marxism pork belly truffaut bespoke raw denim iPhone
          franzen
        </p>
      </div>
    </>
  )
}

export default About
