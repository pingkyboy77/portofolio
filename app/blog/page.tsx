import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Experience',
  description: 'Read my blog.',
}
import React from 'react';

const projects = [
  {
    image: '/ikn.png',
    title: 'PENGHUBUNG NUSANTARA',
    description: 'Website kementerian perhubungan yang berguna menampilkan konektivitas antar pulau di Indonesia, terutama konektivitas ke Ibukota NUsantara.',
  },
  {
    image: '/hubnet.png',
    title: 'HUBNET SDU',
    description: 'Website kementerian perhubungan yang berguna untuk menyatukan semua data rekap kementerian perhubungan.',
  },
  {
    image: '/mentalhub.png',
    title: 'MENTALHUB',
    description: 'Website manajemen talenta Kementerian Perhubungan, guna mengelola talenta yang ada di Kementerian Perhubungan.',
  },
  {
    image: '/portal.png',
    title: 'PORTAL MUDIK',
    description: 'Website Pantauan dan Panduan Mudik Lebaran 2024 Kementerian Perhubungan.',
  },
  {
    image: '/ap2.png',
    title: 'Angkasa Pura II Maintanance',
    description: 'Website angkasa pura II yang berguna untuk memantau dan mengelola data perawatan bandara.',
  },
  {
    image: '/desa.png',
    title: 'DESA EKSPOR INDONESIA',
    description: 'Website profil dan pengenalan desa ekspor indonesia.',
  },
  {
    image: '/dolopo.png',
    title: 'DESA DOLOPO',
    description: 'Website content management system desa dolopo',
  },
  {
    image: '/bimbingan.png',
    title: 'BIMBINGAN UPNVJ',
    description: 'Website Bimbingan Perlombaan Universitas Pembangunan Nasional Veteran Jakarta.',
  },
  {
    image: '/dewata.png',
    title: 'DEWATA WATERPROOFING INDONESIA',
    description: 'Website manajemen data dan barang dewata waterproofing indonesia.',
  },
  // Tambahkan lebih banyak proyek jika diperlukan
];

export default function Page() {
  return (
    <section className="mx-10 grid justify-center items-center" >
  <h1 className="font-semibold text-4xl tracking-tighter uppercase mb-5">PROJECT - Experience</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
    {projects.map((project, index) => (
      <div key={index} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h2 className="font-bold text-lg text-whitesmoke">{project.title}</h2>
          <p className="mt-2 text-whitesmoke-600 text-justify">{project.description}</p>
          <p className="mt-2 text-whitesmoke-600 text-justify pt-3 font-bold">Tech Stack : <span className='font-normal'> PHP, JavaScript, Laravel, Bootstrap, MySQL </span></p>
        </div>
      </div>
    ))}
  </div>
</section>

  )
}
