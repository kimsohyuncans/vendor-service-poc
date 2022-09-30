const vendors = [
    {
        id: 1,
        name: "ICBP PT. Indofood CBP Sukses Makmur Tbk.",
        deskripsi: "PT. Indofood CBP Sukses Makmur Tbk (ICBP) bergerak dalam bidang pembuatan mie dan bahan makanan, produk makanan kuliner, biskuit, makanan ringan, nutrisi dan makanan khusus, kemasan, perdagangan, transportasi, pergudangan dan cold storage, jasa manajemen dan penelitian dan pengembangan.",
        alamat: "Sudirman Plaza, Indofood Tower, 25th Floor Jl. Jend. Sudirman Kav. 76-78 South Jakarta DKI Jakarta 12910 ",
        telepon: "(021) 57958822",
        website: "http://www.indofoodcbp.com"
    },
    {
        id: 2,
        nama: "MYOR PT. Mayora Indah Tbk",
        deskripsi: "PT. Mayora Indah Tbk (MYOR) bergerak dalam bidang pembuatan makanan, permen dan biskuit. Perusahaan menjual produknya baik di pasar domestik maupun luar negeri. Perusahaan mulai beroperasi secara komersial pada bulan Mei 1978.",
        alamat: "ALAMAT Gedung Mayora, 8th Floor Jl. Tomang Raya No. 21-23 West Jakarta DKI Jakarta 11440 ",
        telepon: "(021) 5655320",
        website: "http://www.mayoraindah.co.id"
    },
    {
        id: 3,
        nama: "CMRY PT. Cisarua Mountain Dairy Tbk",
        deskripsi: 'PT. Cisarua Mountain Dairy Tbk (CMRY) didirikan pada tahun 2004. Perusahaan merupakan produsen produk susu premium dan makanan konsumen premium dengan berbagai merek yaitu "Cimory", "Besto", "Kanzler", "Juragan", "Euro Gourmet", dan "Mamayo". Per Juni 2021, Perusahaan memiliki 1.046 karyawan.',
        alamat: "ALAMAT Jl. Sentul No. 101, Kampung Babakan Rawahaur Bogor, West Java 16810 ",
        telepon: "(021) 5874630",
        website: "https://www.cimory.com"
    },
    {
        id: 4,
        nama: "PT Unilever Indonesia Tbk",
        deskripsi: "PT. Unilever Indonesia Tbk (UNVR) bergerak dalam bidang manufaktur, pemasaran dan distribusi barang konsumsi termasuk sabun, deterjen, margarin, makanan berbasis susu, es krim, produk kosmetik, minuman berbasis teh dan jus buah. Portofolio perusahaan mencakup banyak merek yang dicintai dan terkenal di dunia, seperti Pepsodent, Pond's, Lux, Lifebuoy, Dove, Sunsilk, Clear, Rexona, Vaseline, Rinso, Molto, Sunlight, Wall's, Blue Band, Royco, Bango dan masih banyak lagi. Perusahaan mulai beroperasi secara komersial pada tahun 1933.",
        alamat: "ALAMAT Jl. BSD Boulevard Barat Green Office Park Kav. 3 BSD City Tangerang Banten 15345 ",
        telepon: "(021)  80827000",
        website: "https://www.unilever.co.id "
    }
]

const db = {
    listVendor: () => vendors,
    getVendor: (id) => vendors.find((vendor) => vendor.id == id)
}


module.exports = db