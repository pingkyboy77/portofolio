// import { BlogPosts } from 'app/components/posts'

export default function Page() {
return (
<section className="mx-10 flex justify-center items-center" style={{ height: '73vh' }}>
  <div className="flex flex-col lg:flex-row w-full">
    
    <div className="lg:w-1/2 flex justify-center items-center animate-fadeInLeft">
      <div className="text-left">
        <h1 className="text-xl text-dark-heading dark:text-light-heading md:text-3xl xl:text-3xl xl:leading-tight font-bold" style={{ fontFamily: 'Jakarta Sans, sans-serif' }}>
          Hi, My Name Is<br />
          <span className="text-4xl md:text-4xl xl:text-4xl xl:leading-tight font-bold" style={{ background: 'linear-gradient(45deg,#0000FF, #ADD8E6, #800080)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'Jakarta Sans, sans-serif' }}>
            Krisna Yuda Nugraha</span> <br />
          <span className="text-4xl" style={{ fontFamily: 'Jakarta Sans, sans-serif' }}>I am FULL-STACK DEVELOPER</span>
        </h1>
      </div>
    </div>
    
    <div className="lg:w-1/2 flex justify-center items-center animate-fadeInRight">
      <img src="/krisna.jpg" alt="krisna" className="rounded-full w-64 h-64 lg:w-50 lg:h-auto" />
    </div>

  </div>
</section>
)
}
