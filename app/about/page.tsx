export const metadata = {
title: 'About',
description: 'Read my blog.',
}
import React from 'react';

export default function Page() {
return (
<section className="mx-20 my-10 grid justify-start items-center">
    <h1 className="font-bold text-4xl mb-5 text-whitesmoke-800 dark:text-whitesmoke">
        About Me
    </h1>
    <p className=" w-full text-justify text-gray-500 dark:text-gray-300 leading-relaxed mb-10">
        Mahasiswa Teknik Informatika tingkat akhir yang memiliki passion tinggi di bidang informasi dan teknologi.
        Memahami konsep sistem dan dasar-dasar jaringan komputer, komputasi berbasis jaringan, dan perancangan
        atau pembuatan website. Handal dalam mengolah, menganalisis, mengklasifikasikan, membuat perbandingan,
        dan menyajikannya dalam tabel, visualisasi, dan grafik, mengolah data menjadi informasi yang efisien dan
        efektif, metode pengambilan data, pemodelan data abstraksi, desain basis data, metode administrasi, dan
        penyimpanan file. Dalam perjalanan menempuh pendidikan sarjana menyempatkan untuk bekerja part time di
        beberapa perusahaan food and beverage sehingga mahir dalam mengolah kopi sebagai Barista. Terbiasa
        bekerja secara individu atau dalam tim, mudah beradaptasi, dan bersemangat dalam menghadapi tantangan.
    </p>

    <h1 className="font-bold text-4xl mb-10 text-whitesmoke-800 dark:text-whitesmoke">
        Work Experience
    </h1>
    <div className="w-full flex flex-col lg:flex-row mx-auto mb-5">

        <div className="lg:w-1/2 justify-center items-center animate-fadeInLeft">
            <h2 className="text-2xl font-semibold text-whitesmoke-800 dark:text-whitesmoke mb-4">Full Stack Developer
            </h2>
            <div className="flex gap-5">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 1.4.4 2.7 1.2 3.8C4.7 14.6 4 16.2 4 18v3h2v-3c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v3h2v-3c0-1.8-.7-3.4-2.2-4.2.8-1.1 1.2-2.4 1.2-3.8 0-3.9-3.1-7-7-7zm0 2c1.9 0 3.5 1.3 3.9 3H8.1C8.5 5.3 10.1 4 12 4zm-5 9c0-1.7 1.3-3 3-3s3 1.3 3 3H7zm10 4H5v-2h12v2zm-2-7h-4v2h4v-2zm2 0h2v2h-2v-2z" />
                    </svg>
                    <span>Kementerian Perhubungan</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 4.4 7 13 7 13s7-8.6 7-13c0-3.9-3.1-7-7-7zm0 2c2.8 0 5 2.2 5 5 0 2.2-2.2 5.7-5 9.7-2.8-4-5-7.5-5-9.7 0-2.8 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
                    </svg>
                    <span>Jakarta Pusat</span>
                </div>
            </div>
            <hr className="border-gray-500 my-4 w-full mx-auto" />
        </div>
        <div className="lg:w-1/2 justify-end items-end animate-fadeInLeft text-right">
            <h2 className="text-2xl font-semibold text-green-600 dark:text-whitesmoke mb-4">Full-Time</h2>
            <span className="flex justify-end items-center text-gray-600 dark:text-gray-300">Dec 2023 - present</span>
            <hr className="border-gray-500 my-4 w-full mx-auto" />
        </div>

        {/* Tambahkan pengalaman kerja lainnya di sini */}
    </div>



    <div className="w-full flex flex-col lg:flex-row mx-auto mb-5">

        <div className="lg:w-1/2 justify-center items-center animate-fadeInLeft">
            <h2 className="text-2xl font-semibold text-whitesmoke-800 dark:text-whitesmoke mb-4">Full Stack Developer
            </h2>
            <div className="flex gap-5">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 1.4.4 2.7 1.2 3.8C4.7 14.6 4 16.2 4 18v3h2v-3c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v3h2v-3c0-1.8-.7-3.4-2.2-4.2.8-1.1 1.2-2.4 1.2-3.8 0-3.9-3.1-7-7-7zm0 2c1.9 0 3.5 1.3 3.9 3H8.1C8.5 5.3 10.1 4 12 4zm-5 9c0-1.7 1.3-3 3-3s3 1.3 3 3H7zm10 4H5v-2h12v2zm-2-7h-4v2h4v-2zm2 0h2v2h-2v-2z" />
                    </svg>
                    <span>Angkasa Pura II</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 4.4 7 13 7 13s7-8.6 7-13c0-3.9-3.1-7-7-7zm0 2c2.8 0 5 2.2 5 5 0 2.2-2.2 5.7-5 9.7-2.8-4-5-7.5-5-9.7 0-2.8 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
                    </svg>
                    <span>Tanggerang</span>
                </div>
            </div>
            <hr className="border-gray-500 my-4 w-full mx-auto" />
        </div>
        <div className="lg:w-1/2 justify-end items-end animate-fadeInLeft text-right">
            <h2 className="text-2xl font-semibold text-green-600 dark:text-whitesmoke mb-4">Part-Time</h2>
            <span className="flex justify-end items-center text-gray-600 dark:text-gray-300">Jan 2022 -  Dec 2023</span>
            <hr className="border-gray-500 my-4 w-full mx-auto" />
        </div>

        {/* Tambahkan pengalaman kerja lainnya di sini */}
    </div>

    <div className="w-full flex flex-col lg:flex-row mx-auto mb-5">

        <div className="lg:w-1/2 justify-center items-center animate-fadeInLeft">
            <h2 className="text-2xl font-semibold text-whitesmoke-800 dark:text-whitesmoke mb-4">Store Manager
            </h2>
            <div className="flex gap-5">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 1.4.4 2.7 1.2 3.8C4.7 14.6 4 16.2 4 18v3h2v-3c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v3h2v-3c0-1.8-.7-3.4-2.2-4.2.8-1.1 1.2-2.4 1.2-3.8 0-3.9-3.1-7-7-7zm0 2c1.9 0 3.5 1.3 3.9 3H8.1C8.5 5.3 10.1 4 12 4zm-5 9c0-1.7 1.3-3 3-3s3 1.3 3 3H7zm10 4H5v-2h12v2zm-2-7h-4v2h4v-2zm2 0h2v2h-2v-2z" />
                    </svg>
                    <span>Happy Space Coffee</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 4.4 7 13 7 13s7-8.6 7-13c0-3.9-3.1-7-7-7zm0 2c2.8 0 5 2.2 5 5 0 2.2-2.2 5.7-5 9.7-2.8-4-5-7.5-5-9.7 0-2.8 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
                    </svg>
                    <span>Kota Bandung</span>
                </div>
            </div>
            <hr className="border-gray-500 my-4 w-full mx-auto" />
        </div>
        <div className="lg:w-1/2 justify-end items-end animate-fadeInLeft text-right">
            <h2 className="text-2xl font-semibold text-green-600 dark:text-whitesmoke mb-4">Full-Time</h2>
            <span className="flex justify-end items-center text-gray-600 dark:text-gray-300">Nov 2022 - Jan 2023</span>
            <hr className="border-gray-500 my-4 w-full mx-auto" />
        </div>

        {/* Tambahkan pengalaman kerja lainnya di sini */}
    </div>

    <div className="w-full flex flex-col lg:flex-row mx-auto mb-5">

        <div className="lg:w-1/2 justify-center items-center animate-fadeInLeft">
            <h2 className="text-2xl font-semibold text-whitesmoke-800 dark:text-whitesmoke mb-4">Barista
            </h2>
            <div className="flex gap-5">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 1.4.4 2.7 1.2 3.8C4.7 14.6 4 16.2 4 18v3h2v-3c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v3h2v-3c0-1.8-.7-3.4-2.2-4.2.8-1.1 1.2-2.4 1.2-3.8 0-3.9-3.1-7-7-7zm0 2c1.9 0 3.5 1.3 3.9 3H8.1C8.5 5.3 10.1 4 12 4zm-5 9c0-1.7 1.3-3 3-3s3 1.3 3 3H7zm10 4H5v-2h12v2zm-2-7h-4v2h4v-2zm2 0h2v2h-2v-2z" />
                    </svg>
                    <span>Yumaju Coffee</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 4.4 7 13 7 13s7-8.6 7-13c0-3.9-3.1-7-7-7zm0 2c2.8 0 5 2.2 5 5 0 2.2-2.2 5.7-5 9.7-2.8-4-5-7.5-5-9.7 0-2.8 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
                    </svg>
                    <span>Kota Bandung</span>
                </div>
            </div>
            <hr className="border-gray-500 my-4 w-full mx-auto" />
        </div>
        <div className="lg:w-1/2 justify-end items-end animate-fadeInLeft text-right">
            <h2 className="text-2xl font-semibold text-green-600 dark:text-whitesmoke mb-4">Part-Time</h2>
            <span className="flex justify-end items-center text-gray-600 dark:text-gray-300">Sep 2019 - Nov 2022</span>
            <hr className="border-gray-500 my-4 w-full mx-auto" />
        </div>

        {/* Tambahkan pengalaman kerja lainnya di sini */}
    </div>


    <h1 className="font-bold text-4xl my-10 text-whitesmoke-800 dark:text-whitesmoke">
        Education
    </h1>
    <div className="w-full flex flex-col lg:flex-row mx-auto mb-5">

        <div className="lg:w-1/2 justify-center items-center animate-fadeInLeft">
            <h2 className="text-2xl font-semibold text-whitesmoke-800 dark:text-whitesmoke mb-4">Bachelor Degree
            </h2>
            <div className="flex gap-5">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 1.4.4 2.7 1.2 3.8C4.7 14.6 4 16.2 4 18v3h2v-3c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v3h2v-3c0-1.8-.7-3.4-2.2-4.2.8-1.1 1.2-2.4 1.2-3.8 0-3.9-3.1-7-7-7zm0 2c1.9 0 3.5 1.3 3.9 3H8.1C8.5 5.3 10.1 4 12 4zm-5 9c0-1.7 1.3-3 3-3s3 1.3 3 3H7zm10 4H5v-2h12v2zm-2-7h-4v2h4v-2zm2 0h2v2h-2v-2z" />
                    </svg>
                    <span>Mercu Buana University</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 4.4 7 13 7 13s7-8.6 7-13c0-3.9-3.1-7-7-7zm0 2c2.8 0 5 2.2 5 5 0 2.2-2.2 5.7-5 9.7-2.8-4-5-7.5-5-9.7 0-2.8 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
                    </svg>
                    <span>Jakarta Barat</span>
                </div>
            </div>
            <hr className="border-gray-500 my-4 w-full mx-auto" />
        </div>
        <div className="lg:w-1/2 justify-end items-end animate-fadeInLeft text-right">
            <h2 className="text-2xl font-semibold text-green-600 dark:text-whitesmoke mb-4">S-1</h2>
            <span className="flex justify-end items-center text-gray-600 dark:text-gray-300">2020 - 2024</span>
            <hr className="border-gray-500 my-4 w-full mx-auto" />
        </div>

        {/* Tambahkan pengalaman kerja lainnya di sini */}
    </div>
    <div className="w-full flex flex-col lg:flex-row mx-auto mb-5">

        <div className="lg:w-1/2 justify-center items-center animate-fadeInLeft">
            <h2 className="text-2xl font-semibold text-whitesmoke-800 dark:text-whitesmoke mb-4">Senior High School
            </h2>
            <div className="flex gap-5">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 1.4.4 2.7 1.2 3.8C4.7 14.6 4 16.2 4 18v3h2v-3c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v3h2v-3c0-1.8-.7-3.4-2.2-4.2.8-1.1 1.2-2.4 1.2-3.8 0-3.9-3.1-7-7-7zm0 2c1.9 0 3.5 1.3 3.9 3H8.1C8.5 5.3 10.1 4 12 4zm-5 9c0-1.7 1.3-3 3-3s3 1.3 3 3H7zm10 4H5v-2h12v2zm-2-7h-4v2h4v-2zm2 0h2v2h-2v-2z" />
                    </svg>
                    <span>SMAN 2 KOTA CIREBON</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2C8.1 2 5 5.1 5 9c0 4.4 7 13 7 13s7-8.6 7-13c0-3.9-3.1-7-7-7zm0 2c2.8 0 5 2.2 5 5 0 2.2-2.2 5.7-5 9.7-2.8-4-5-7.5-5-9.7 0-2.8 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
                    </svg>
                    <span>Kota Cirebon</span>
                </div>
            </div>
            <hr className="border-gray-500 my-4 w-full mx-auto" />
        </div>
        <div className="lg:w-1/2 justify-end items-end animate-fadeInLeft text-right">
            <h2 className="text-2xl font-semibold text-green-600 dark:text-whitesmoke mb-4">IPA</h2>
            <span className="flex justify-end items-center text-gray-600 dark:text-gray-300">2020 - 2024</span>
            <hr className="border-gray-500 my-4 w-full mx-auto" />
        </div>

        {/* Tambahkan pengalaman kerja lainnya di sini */}
    </div>
</section>



)
}
