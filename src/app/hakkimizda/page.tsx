import React from 'react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hakkımızda
          </h1>
          <p className="text-lg md:text-xl">
            20 yılı aşkın tecrübemizle endüstriyel çözümler sunuyoruz
          </p>
        </motion.div>
      </section>

      {/* Hikayemiz Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Hikayemiz</h2>
            <p className="text-gray-600 leading-relaxed">
              2003 yılında kurulan şirketimiz, endüstriyel otomasyon ve mühendislik alanında 
              Türkiye'nin önde gelen firmalarından biri haline gelmiştir. Müşterilerimize 
              en iyi hizmeti sunmak için sürekli kendimizi geliştiriyor ve yenilikçi 
              çözümler üretiyoruz.
            </p>
          </motion.div>

          {/* Misyon & Vizyon */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Misyonumuz</h3>
              <p className="text-gray-600">
                Müşterilerimize en yüksek kalitede hizmet sunarak, endüstriyel süreçlerini 
                optimize etmek ve verimliliklerini artırmak için yenilikçi çözümler üretmek.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Vizyonumuz</h3>
              <p className="text-gray-600">
                Endüstriyel otomasyon alanında global bir marka olmak ve teknolojik 
                yenilikleri takip ederek müşterilerimize en iyi çözümleri sunmak.
              </p>
            </motion.div>
          </div>

          {/* Değerlerimiz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8">Değerlerimiz</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Kalite',
                  description: 'Her projede en yüksek kalite standartlarını hedefliyoruz.'
                },
                {
                  title: 'Güvenilirlik',
                  description: 'Müşterilerimizle güvene dayalı ilişkiler kuruyoruz.'
                },
                {
                  title: 'Yenilikçilik',
                  description: 'Sürekli gelişim ve yenilikçi çözümler üretiyoruz.'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 