const units = [
 {id:"u1",num:"01",title:"Awal Perkembangan Sejarah Kota Medan",short:"Medan, Kesultanan Deli dan awal perkebunan tembakau",pages:[
  ["Pengantar dan tujuan pembelajaran","Mengenali konteks awal sejarah Medan dan wilayah Deli.","Siswa mengidentifikasi fakta awal perkembangan Medan serta menjelaskan mengapa sejarah lokal penting dipelajari."],
  ["Guru Patimpus dan Kesultanan Deli","Kampung Medan, Guru Patimpus Sembiring Pelawi, dan konteks Kesultanan Deli.","Siswa mengidentifikasi tokoh dan konteks wilayah dengan membandingkan narasi sejarah lokal secara hati-hati."],
  ["Tahun 1863 dan awal perkebunan Deli","Perkembangan awal perkebunan tembakau Deli dan peran Yakobus Nienhuys.","Siswa menjelaskan arti penting tahun 1863 sebagai penanda perkembangan perkebunan tembakau Deli."],
  ["Eksplorasi sumber dan kuis Unit 1","Peta, foto, dan sumber sejarah awal Medan.","Siswa mengamati sumber, membedakan informasi yang tampak dengan interpretasi, lalu mengerjakan kuis formatif."]
 ]},
 {id:"u2",num:"02",title:"Perkebunan Deli dan Perubahan Sosial Ekonomi",short:"Ekonomi kolonial, investasi dan tenaga kerja",pages:[
  ["Ekspansi perkebunan tembakau","Perkembangan perkebunan Deli, perusahaan dan jaringan perdagangan.","Siswa menjelaskan hubungan perkembangan perkebunan dengan perubahan ekonomi wilayah."],
  ["Politik Pintu Terbuka dan Agrarische Wet 1870","Kebijakan ekonomi liberal, investasi swasta, tanah dan konsesi.","Siswa menganalisis peran kebijakan kolonial dalam mendorong ekspansi perkebunan."],
  ["Migrasi tenaga kerja dan sistem perburuhan","Kedatangan pekerja Tionghoa, India dan Jawa; perekrutan, kontrak dan pengawasan.","Siswa menjelaskan kaitan kebutuhan tenaga kerja, migrasi, serta kondisi dan posisi sosial pekerja."],
  ["Analisis sumber perkebunan","Membaca foto, tabel pekerja dan dokumen terkait perkebunan.","Siswa menarik kesimpulan berdasarkan data dan membandingkan pengalaman kelompok yang berbeda."]
 ]},
 {id:"u3",num:"03",title:"Migrasi dan Masyarakat Multietnis Medan",short:"Migrasi, demografi dan interaksi masyarakat",pages:[
  ["Gelombang migrasi","Perpindahan penduduk dari berbagai wilayah Nusantara dan luar Nusantara.","Siswa menjelaskan faktor pendorong migrasi dan kelompok masyarakat yang datang ke Medan."],
  ["Komposisi penduduk dan pekerja","Perubahan demografi dan data sensus penduduk 1930.","Siswa membaca data demografi dan mengidentifikasi perubahan komposisi masyarakat."],
  ["Adaptasi dan interaksi sosial","Perdagangan, urbanisasi, jaringan komunitas dan kehidupan perkotaan.","Siswa menganalisis proses adaptasi serta interaksi berbagai kelompok masyarakat."],
  ["Membaca data masyarakat multietnis","Interpretasi tabel, grafik atau sumber demografi yang telah diverifikasi.","Siswa membangun penjelasan sejarah dengan mengacu pada bukti demografis."]
 ]},
 {id:"u4",num:"04",title:"Pertumbuhan Kota, Kesawan dan Segregasi Sosial",short:"Ruang kota, perdagangan dan struktur sosial",pages:[
  ["Medan sebagai pusat administrasi dan perdagangan","Pertumbuhan fungsi kota yang berkaitan dengan ekonomi perkebunan.","Siswa menjelaskan hubungan perkebunan dan perkembangan pusat administrasi, perdagangan serta transportasi."],
  ["Kesawan dan ruang kota","Kesawan sebagai ruang perdagangan dan pertemuan berbagai kelompok.","Siswa mengidentifikasi fungsi ruang kota melalui peta dan foto sejarah."],
  ["Segregasi dan hierarki sosial","Pengaturan permukiman, kategori sosial, akses ekonomi dan batas ruang kolonial.","Siswa menganalisis segregasi sebagai proses historis dan bukan sifat alamiah kelompok etnis."],
  ["Eksplorasi peta dan foto kota","Membandingkan ruang kota dan pengalaman kelompok masyarakat.","Siswa menafsirkan sumber visual dan menjelaskan koeksistensi serta batas sosial."]
 ]},
 {id:"u5",num:"05",title:"Pendudukan Jepang, Solidaritas dan Integrasi Sosial",short:"Perubahan sosial, perlawanan dan solidaritas lintas kelompok",pages:[
  ["Peralihan kekuasaan pada 1942","Perubahan pemerintahan dan kehidupan masyarakat pada masa pendudukan Jepang.","Siswa menyusun kronologi perubahan kekuasaan dan mengidentifikasi dampak sosialnya."],
  ["Perlawanan dan dinamika masyarakat","Perlawanan bawah tanah, termasuk aktivitas kelompok masyarakat Tionghoa.","Siswa menginterpretasikan bukti mengenai perlawanan dan jaringan solidaritas."],
  ["Solidaritas dan jejak integrasi sosial","Pembahasan tokoh/peristiwa yang dicantumkan dalam proposal, termasuk konteks Medan Area dan jejak hubungan lintas kelompok.","Siswa menganalisis bukti kerja sama, solidaritas dan integrasi sosial secara kritis."],
  ["Analisis sumber dan refleksi Unit 5","Sumber tentang pendudukan Jepang, perlawanan, makam Jepang di TMP Bukit Barisan dan konteks integrasi.","Siswa menyusun kesimpulan dengan mempertimbangkan konflik, ketimpangan, adaptasi dan solidaritas."]
 ]}
];

const pages = [
 {id:"home",label:"Beranda",group:"utama",type:"home"},
 {id:"identity",label:"Identitas E-Modul",group:"pendahuluan",title:"Identitas E-Modul",desc:"Informasi produk, sasaran, ruang lingkup dan identitas pembelajaran."},
 {id:"guide",label:"Petunjuk Penggunaan",group:"pendahuluan",title:"Petunjuk Penggunaan",desc:"Panduan navigasi, eksplorasi materi, penggunaan sumber digital dan evaluasi."},
 {id:"objectives",label:"Capaian & Tujuan",group:"pendahuluan",title:"Capaian dan Tujuan Pembelajaran",desc:"Tujuan operasional pembelajaran yang perlu diselaraskan dengan CP Sejarah Fase F dan ATP sekolah."},
 {id:"concept",label:"Peta Konsep",group:"pendahuluan",title:"Peta Konsep",desc:"Hubungan perkebunan Deli, migrasi, pertumbuhan kota, masyarakat multietnis dan pendudukan Jepang."},
 {id:"timeline",label:"Timeline 1863–1945",group:"pendahuluan",title:"Peta Perjalanan Sejarah",desc:"Garis waktu untuk membantu siswa memahami urutan peristiwa dan perubahan sejarah Medan."}
];
units.forEach((u)=>u.pages.forEach((p,i)=>pages.push({id:`${u.id}-${i+1}`,label:p[0],group:u.id,unit:u,index:i,title:p[0],desc:p[1],objective:p[2],unitTitle:u.title})));
pages.push(
 {id:"eval-guide",label:"Petunjuk Evaluasi",group:"evaluasi",title:"Petunjuk Evaluasi",desc:"Ketentuan pengerjaan evaluasi pembelajaran dan perbedaan mode latihan dengan tes penelitian."},
 {id:"eval-facts",label:"Fakta & Kronologi",group:"evaluasi",title:"Evaluasi Fakta dan Kronologi",desc:"Latihan penguasaan fakta, konsep, tokoh, kebijakan dan urutan peristiwa."},
 {id:"eval-cause",label:"Sebab-Akibat",group:"evaluasi",title:"Evaluasi Sebab-Akibat",desc:"Latihan menjelaskan hubungan perkebunan, migrasi, pertumbuhan kota dan struktur sosial."},
 {id:"eval-source",label:"Interpretasi Sumber",group:"evaluasi",title:"Evaluasi Interpretasi Sumber",desc:"Latihan membaca tabel, foto, peta dan bukti historis secara kritis."},
 {id:"eval-result",label:"Hasil Evaluasi",group:"evaluasi",title:"Hasil Evaluasi",desc:"Ruang ringkasan hasil latihan. Pengelolaan skor tes penelitian perlu diintegrasikan secara terpisah dan aman."},
 {id:"reflection-history",label:"Refleksi Sejarah",group:"refleksi",title:"Refleksi Sejarah",desc:"Menyusun pemahaman tentang perubahan ekonomi, sosial dan politik Kota Medan."},
 {id:"reflection-diversity",label:"Refleksi Kebinekaan",group:"refleksi",title:"Refleksi Kebinekaan",desc:"Menghubungkan pengalaman historis masyarakat multietnis dengan penghargaan terhadap keberagaman."},
 {id:"glossary",label:"Glosarium",group:"referensi",title:"Glosarium",desc:"Istilah penting dalam sejarah lokal Medan masa kolonial dan pendudukan Jepang."},
 {id:"bibliography",label:"Daftar Pustaka",group:"referensi",title:"Daftar Pustaka",desc:"Daftar referensi akademik yang digunakan dalam pengembangan E-Modul."},
 {id:"digital-sources",label:"Pusat Sumber Digital",group:"referensi",title:"Pusat Sumber Digital",desc:"Pusat akses arsip, museum, foto, peta, dokumen dan sumber sejarah digital terverifikasi."}
);
const groups=[["utama","MULAI"],["pendahuluan","PENDAHULUAN"],["u1","UNIT 1"],["u2","UNIT 2"],["u3","UNIT 3"],["u4","UNIT 4"],["u5","UNIT 5"],["evaluasi","EVALUASI"],["refleksi","REFLEKSI"],["referensi","REFERENSI"]];
const $=s=>document.querySelector(s);
let current="home", fontLarge=false, selectedAnswer="";
const completed=new Set(JSON.parse(localStorage.getItem("jsm-completed")||"[]"));
function pageById(id){return pages.find(p=>p.id===id)||pages[0]}
function renderNav(){
 const nav=$("#mainNav");nav.innerHTML="";
 groups.forEach(([key,title])=>{
  const items=pages.filter(p=>p.group===key);if(!items.length)return;
  const wrap=document.createElement("div");wrap.className="nav-group";
  const h=document.createElement("div");h.className="nav-group-title";h.textContent=title;wrap.appendChild(h);
  items.forEach((p)=>{
   const a=document.createElement("a");a.href="#"+p.id;a.className="nav-link"+(p.id===current?" active":"");
   const n=document.createElement("span");n.className="nav-num";n.textContent=p.id==="home"?"⌂":String(pages.indexOf(p)).padStart(2,"0");
   const t=document.createElement("span");t.textContent=p.label;a.append(n,t);wrap.appendChild(a);
  });nav.appendChild(wrap);
 });
}
function updateProgress(){
 const total=pages.length-1,done=completed.size,percent=Math.round(done/total*100);
 $("#progressText").textContent=percent+"%";$("#progressBar").style.width=percent+"%";
}
function setPage(id,mark=false){
 current=pageById(id).id;
 if(mark&&current!=="home"){completed.add(current);localStorage.setItem("jsm-completed",JSON.stringify([...completed]));}
 renderNav();updateProgress();renderPage();$("#crumbCurrent").textContent=pageById(current).label;
 $("#sidebar").classList.remove("open");$("#scrim").classList.remove("show");
 window.scrollTo({top:0,behavior:"smooth"});
}
function renderPage(){
 const p=pageById(current),root=$("#pageContent");
 if(p.type==="home"){root.innerHTML=homeHTML();return;}
 if(p.unit){root.innerHTML=unitHTML(p);return;}
 root.innerHTML=genericHTML(p);
}
function homeHTML(){return `
 <section class="hero">
  <div class="hero-copy">
   <div class="eyebrow">WEBSITE E-MODUL PEMBELAJARAN SEJARAH · KELAS XI FASE F</div>
   <h1>JEJAK SEJARAH <span>MEDAN</span></h1>
   <div style="font:700 18px 'Playfair Display';color:#e8ca85">1863—1945</div>
   <p>Menelusuri perkembangan Kota Medan pada masa Kolonial Hindia-Belanda dan Pendudukan Jepang melalui sumber sejarah, pengalaman masyarakat multietnis, dan perspektif kebinekaan.</p>
   <div class="hero-meta"><span class="meta-chip">5 Unit Pembelajaran</span><span class="meta-chip">36 Halaman Konten</span><span class="meta-chip">Interaktif & Responsif</span></div>
   <div class="hero-buttons"><button class="btn btn-primary" onclick="setPage('identity',true)">Mulai Belajar <span>→</span></button><button class="btn btn-ghost" onclick="setPage('concept',true)">Lihat Peta Materi</button></div>
  </div>
  <div class="hero-art"><div class="hero-emblem"><div class="emblem-inner"><div><strong>1863</strong><small>JEJAK · MEDAN · 1945</small></div></div></div></div>
 </section>
 <div class="section-head"><div><div class="eyebrow">GAMBARAN PRODUK</div><h2>Menjelajahi sejarah dari berbagai perspektif</h2></div><p>Belajar sejarah lokal melalui materi kontekstual, sumber digital dan aktivitas interpretasi bukti sejarah.</p></div>
 <div class="stats-grid">
  <div class="stat-card"><b>05</b><span>Unit pembelajaran</span></div><div class="stat-card"><b>25</b><span>Butir tes hasil belajar</span></div><div class="stat-card"><b>1863–45</b><span>Ruang lingkup waktu</span></div><div class="stat-card"><b>XI</b><span>Kelas sasaran · Fase F</span></div>
 </div>
 <div class="section-head"><div><div class="eyebrow">JALUR PEMBELAJARAN</div><h2>Pilih unit pembelajaran</h2></div><p>Setiap unit terdiri atas pengantar, materi, eksplorasi sumber dan evaluasi formatif.</p></div>
 <div class="unit-grid">${units.map(u=>`<article class="unit-card" data-number="${u.num}"><span class="unit-tag">UNIT ${u.num}</span><h3>${u.title}</h3><p>${u.short}</p><a class="text-link" href="#${u.id}-1">Jelajahi unit →</a></article>`).join("")}</div>
 <div class="section-head"><div><div class="eyebrow">FITUR PEMBELAJARAN</div><h2>Belajar, mengamati, menafsirkan</h2></div></div>
 <div class="feature-grid">
  <div class="feature"><div class="feature-icon">⌖</div><h3>Eksplorasi sumber</h3><p>Amati foto, peta, dokumen dan data sejarah dengan memperhatikan asal serta konteksnya.</p></div>
  <div class="feature"><div class="feature-icon">◷</div><h3>Kronologi interaktif</h3><p>Telusuri perubahan sejarah Medan dalam rentang 1863–1945.</p></div>
  <div class="feature"><div class="feature-icon">✧</div><h3>Perspektif kebinekaan</h3><p>Bandingkan pengalaman kelompok masyarakat dan pahami dinamika interaksi sosial.</p></div>
 </div>
 <div class="source-note">Catatan pengembangan: materi, gambar arsip, tautan sumber, dan instrumen evaluasi final harus diverifikasi serta dilengkapi sebelum validasi ahli.</div>`}
function unitHTML(p){
 const u=p.unit,idx=p.index,content=u.pages[idx];
 return `<div class="page-heading"><div class="eyebrow">${u.num} · ${u.title}</div><h1>${content[0]}</h1><p>${content[1]}</p></div>
 <div class="content-grid"><article class="content-panel">
  <h2>${content[0]}</h2><p>${content[1]}</p>
  <div class="learning-box"><b>TUJUAN PEMBELAJARAN</b><p>${content[2]}</p></div>
  <h3>Materi inti</h3><p>Bagian ini akan memuat uraian sejarah berdasarkan pembahasan proposal tesis, disusun secara kontekstual dan dilengkapi rujukan. Narasi final perlu menggunakan sumber akademik dan bukti sejarah yang dapat ditelusuri, serta membedakan fakta, interpretasi dan informasi yang belum terverifikasi.</p>
  <div class="placeholder"><b>AREA KONTEN MULTIMEDIA</b><br>Masukkan foto sejarah / peta / infografis yang relevan. Cantumkan pencipta atau institusi pemilik, tahun, keterangan, tautan asal dan status izin penggunaan.</div>
  <h3>Aktivitas belajar: amati, bandingkan, tafsirkan</h3>
  <div class="activity-card"><h3>Pertanyaan eksplorasi</h3><p>Informasi apa yang dapat kamu temukan dari sumber sejarah ini? Kelompok masyarakat mana yang ditampilkan, dan perspektif siapa yang belum terlihat?</p><p><b>Tugas:</b> tuliskan dua informasi yang didukung sumber dan satu pertanyaan lanjutan yang perlu ditelusuri.</p></div>
  <h3>Rangkuman</h3><p>Susun tiga gagasan utama dari materi ini. Pastikan setiap kesimpulan didukung oleh informasi atau bukti yang telah dipelajari.</p>
  <div class="source-note">Sumber digital dan daftar rujukan spesifik unit ini perlu dilengkapi dari daftar pustaka proposal dan hasil verifikasi sumber.</div>
  <div class="page-nav"><button ${idx===0?"disabled":""} onclick="setPage('${u.id}-${idx}',true)">← Sebelumnya</button><button onclick="setPage('${idx===3? "eval-guide":u.id+"-"+(idx+2)}',true)">${idx===3?"Lanjut evaluasi":"Berikutnya →"}</button></div>
 </article><aside class="aside-panel"><h3>Struktur unit</h3><ul>${u.pages.map((x,i)=>`<li><a href="#${u.id}-${i+1}" style="color:${i===idx?"#9a742e":"#758091"};font-weight:${i===idx?"700":"400"}">${x[0]}</a></li>`).join("")}</ul><h3 style="margin-top:25px">Fokus kebinekaan</h3><p>Menghadirkan pengalaman dan perspektif berbagai kelompok masyarakat tanpa menyederhanakan perbedaan kelas, kepentingan, atau pengalaman historis.</p><div class="pill-list"><span>Multiperspektif</span><span>Interaksi sosial</span><span>Analisis bukti</span></div></aside></div>`;
}
function genericHTML(p){
 let extra="";
 if(p.id==="timeline")extra=`<div class="content-panel"><div class="timeline">${[["1863","Awal pengembangan perkebunan tembakau Deli."],["1870","Politik ekonomi liberal dan Agrarische Wet."],["1884–1900","Perubahan komposisi tenaga kerja perkebunan."],["1930","Data sensus penduduk memperlihatkan masyarakat Medan yang multietnis."],["1942","Peralihan kekuasaan dan pendudukan Jepang."],["1945","Akhir periode materi utama E-Modul."]].map(t=>`<div class="timeline-item"><b>${t[0]}</b><p>${t[1]}</p></div>`).join("")}</div><p class="source-note">Timeline awal; tanggal dan peristiwa rinci harus diperiksa kembali terhadap rujukan proposal dan sumber primer/sekunder.</p></div>`;
 else if(p.id==="concept")extra=`<div class="content-panel"><div class="feature-grid">${["Perkebunan Deli","Migrasi tenaga kerja","Pertumbuhan kota","Masyarakat multietnis","Ruang kota dan segregasi","Pendudukan Jepang dan solidaritas"].map((x,i)=>`<div class="feature"><div class="feature-icon">${i+1}</div><h3>${x}</h3><p>Materi dan bukti sejarah pada unit terkait.</p></div>`).join("")}</div></div>`;
 else if(p.id==="eval-facts"||p.id==="eval-cause"||p.id==="eval-source")extra=`<div class="content-panel"><h2>Contoh latihan formatif</h2><p>Manakah pernyataan yang paling tepat menjelaskan hubungan perkembangan perkebunan Deli dan perubahan sosial di Medan?</p><button class="quiz-option" onclick="this.classList.toggle('selected')">A. Perkebunan tidak berhubungan dengan migrasi penduduk.</button><button class="quiz-option" onclick="this.classList.toggle('selected')">B. Perluasan perkebunan meningkatkan kebutuhan tenaga kerja dan mendorong mobilitas penduduk.</button><button class="quiz-option" onclick="this.classList.toggle('selected')">C. Perubahan penduduk hanya disebabkan faktor alam.</button><div class="feedback">Contoh ini hanya demonstrasi tampilan. Bukan bagian dari 25 butir instrumen penelitian yang telah divalidasi.</div></div>`;
 else if(p.id==="glossary")extra=`<div class="content-panel"><h2>Istilah penting</h2>${["Agrarische Wet — kebijakan agraria kolonial tahun 1870.","Konsesi — hak atau izin pemanfaatan lahan berdasarkan perjanjian.","Migrasi — perpindahan penduduk dari satu wilayah ke wilayah lain.","Urbanisasi — proses meningkatnya penduduk dan kegiatan perkotaan.","Segregasi — pemisahan kelompok dalam ruang atau struktur sosial.","Multietnis — keadaan masyarakat yang terdiri atas beragam kelompok etnis."].map(x=>`<p>• ${x}</p>`).join("")}</div>`;
 else if(p.id==="digital-sources")extra=`<div class="content-panel"><h2>Katalog sumber yang perlu ditautkan</h2><div class="placeholder">Tambahkan tautan resmi arsip, museum, perpustakaan, peta historis, koleksi foto dan publikasi akademik setelah diverifikasi. Jangan mengisi tautan yang belum diuji.</div></div>`;
 else extra=`<div class="content-panel"><h2>Isi halaman</h2><p>${p.desc}</p><div class="placeholder">Konten final halaman ini akan diisi dari proposal tesis, dokumen kurikulum, materi sejarah dan sumber digital terverifikasi.</div><h3>Komponen yang disiapkan</h3><ul><li>Penjelasan singkat dan kontekstual.</li><li>Media visual atau sumber digital.</li><li>Aktivitas belajar dan pertanyaan pemantik.</li><li>Rangkuman atau refleksi sesuai fungsi halaman.</li></ul></div>`;
 return `<div class="page-heading"><div class="eyebrow">JEJAK SEJARAH MEDAN · 1863—1945</div><h1>${p.title}</h1><p>${p.desc}</p></div>${extra}<div class="page-nav"><button onclick="setPage('${prevPage(p.id)}')">← Sebelumnya</button><button onclick="setPage('${nextPage(p.id)}')">Berikutnya →</button></div>`;
}
function prevPage(id){let i=pages.findIndex(p=>p.id===id);return pages[Math.max(0,i-1)].id}
function nextPage(id){let i=pages.findIndex(p=>p.id===id);return pages[Math.min(pages.length-1,i+1)].id}
function route(){setPage(location.hash.replace("#","")||"home")}
window.addEventListener("hashchange",route);
$("#menuToggle").addEventListener("click",()=>{$("#sidebar").classList.toggle("open");$("#scrim").classList.toggle("show")});
$("#scrim").addEventListener("click",()=>{$("#sidebar").classList.remove("open");$("#scrim").classList.remove("show")});
$("#fontToggle").addEventListener("click",()=>{fontLarge=!fontLarge;document.body.style.fontSize=fontLarge?"17px":"15px";$("#fontToggle").textContent=fontLarge?"A−":"A+"});
renderNav();updateProgress();route();
