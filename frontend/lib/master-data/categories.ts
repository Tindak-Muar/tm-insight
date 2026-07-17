export const CATEGORIES = {
  "Dasar Negara": [
    "Ekonomi",
    "Pendidikan",
    "Kesihatan",
    "Pertahanan",
    "Keselamatan",
    "Pengangkutan",
    "Digital",
    "Perumahan",
    "Pertanian",
    "Alam Sekitar",
    "Tenaga",
    "Perpaduan",
    "Tadbir Urus",
    "Lain-lain",
  ],

  "Dasar Negeri": [
    "Johor",
    "Kedah",
    "Kelantan",
    "Melaka",
    "Negeri Sembilan",
    "Pahang",
    "Perak",
    "Perlis",
    "Pulau Pinang",
    "Sabah",
    "Sarawak",
    "Selangor",
    "Terengganu",
    "W.P. Kuala Lumpur",
    "W.P. Labuan",
    "W.P. Putrajaya",
  ],

  "Ucapan Politik": [
    "Perdana Menteri",
    "Menteri",
    "Menteri Besar",
    "Ketua Menteri",
    "Ahli Parlimen",
    "ADUN",
    "Presiden Parti",
    "Timbalan Presiden",
    "Naib Presiden",
    "Ketua Pemuda",
    "Ketua Wanita",
    "Sidang Media",
    "Ceramah",
  ],

  "Hansard Parlimen": [
    "Dewan Rakyat",
    "Dewan Negara",
    "Jawatankuasa Pilihan Khas",
  ],

  "Hansard DUN": [
    "Johor",
    "Kedah",
    "Kelantan",
    "Melaka",
    "Negeri Sembilan",
    "Pahang",
    "Perak",
    "Perlis",
    "Pulau Pinang",
    "Sabah",
    "Sarawak",
    "Selangor",
    "Terengganu",
  ],

  "Rang Undang-Undang": [
    "Bacaan Pertama",
    "Bacaan Kedua",
    "Bacaan Ketiga",
    "Jawatankuasa",
    "Diluluskan",
  ],

  "Berita": [
    "Politik",
    "Ekonomi",
    "Semasa",
    "Negeri",
    "Antarabangsa",
    "Pilihan Raya",
  ],

  "Belanjawan Negara": [
    "Ucapan Belanjawan",
    "Buku Anggaran",
    "Perbahasan",
    "Jawapan Menteri",
  ],

  "Belanjawan Negeri": [
    "Johor",
    "Kedah",
    "Kelantan",
    "Melaka",
    "Negeri Sembilan",
    "Pahang",
    "Perak",
    "Perlis",
    "Pulau Pinang",
    "Sabah",
    "Sarawak",
    "Selangor",
    "Terengganu",
  ],

  Manifesto: [
    "PRU",
    "PRN",
    "PRK",
    "Parti Politik",
  ],

  Penyelidikan: [
    "Policy Paper",
    "White Paper",
    "Laporan",
    "Statistik",
    "Kajian Akademik",
  ],
} as const;

export const CATEGORY_OPTIONS = Object.keys(CATEGORIES);

export type Category = keyof typeof CATEGORIES;