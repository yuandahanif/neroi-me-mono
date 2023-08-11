import type { Translation } from "../i18n-types";

const id = {
  //! This Object reflect the original TSX file, if something goes wrong, we can refer to this file.

  Quote:
    "Hidup dalam kehampaan sembari terus berjalan mencari makna dari kehidupan",
  AboutMe: "Tentangku",
  Professional: "Profesional",
  ProfessionalMotto: `<p>Halo, namaku Yuanda aku seorang web developer dengan dua tahun pengalaman yang memiliki passion terkait desain minimalis dan
                    absurd. Memiliki pengalaman dalam membuat website dan aplikasi web
                    dengan menggunakan ekosistem teknologi modern seperti React,
                    NextJS, dan TailwindCSS.
                  </p>

                  <p>Saat ini sedang bekerja sebagai <b>Part Time Web Developer</b> di 
                    <a target="_blank"
                      rel="noopener noreferrer"
                      class="hover:underline"
                      href="https://informatics.uii.ac.id/student-staff/"
                    >Student Staff Universitas Islam Indonesia</a> dan kadang melakukan <b>freelance</b>.
                  </p>

                  <p>
                    Punya semangat belajar yang tinggi terutama soal teknologi dan
                    hal-hal baru. Mudah beradaptasi dan berkolaborasi dengan
                    lingkungan baru. Dan suka berbagi tentang hal-hal yang ku sukai.
                  </p>

                  <p>
                    Tujuanku saat ini adalah untuk terus memperluas pengetahuan dan
                    keterampilanku untuk suatu saat dapat berkontribusi terhadap
                    kemajuan umat manusia.
                  </p>`,
  PersonalMotto: `<p>
                    Halo dan selamat datang di duniaku, namaku Yuanda {redacted}, seorang optimistik nihilis yang
                    mencintai dan terlalu bergantung pada internet. Mencintai filosofi
                    dan teknologi terutama internet sebagai salah satu pencapaian
                    terbaik dari umat manusia.
                  </p>

                  <p>
                    Mengambil nilai dari
                    <i>kekosongan eksistensial</i> dan
                    kehampaan, mencari perspektif berbeda dengan pendekatan dan cara
                    untuk memandang kehidupan.
                  </p>

                  <p>
                    Nihilisme kulihat bukanlah sebagai sebuah doktrin keputusasaan,
                    melainkan sebuah katalist untuk mempertanyakan norma-norma dan
                    asumsi-asumsi tradisional.
                  </p>

                  <p>
                    Meski demikian, aku paham arti penting dari berkolaborasi. Mencoba
                    untuk saling memahami dan menjaga hubungan antar manusia amatlah
                    penting.
                  </p>

                  <p>
                    Mempunyai ketertatikan pada bidang teknologi, filsafat, dan
                    psikologi. Mencintai konsep desain minimalis, absurd, dan
                    anti-mainstream. Selain itu suka menjelajah dan mencoba hal-hal
                    baru.
                  </p>

                  <p>
                    Hobiku adalah bermain internet, duduk mendengarkan orang lain,
                    menulis, dan terjun kedaalam jurang kehampaan mencari makna dan
                    arti dari kehidupan
                    <span class="text-xs">(entah apapun itu)</span>.
                  </p>`,
  ProfileMore: "Tampilkan lebih banyak",
  MorePersonalMotto: `<p>
                  Kadang suka main CTF atau ngerjain soal-soal algoritma di
                  Hackerrank.
                </p>
                <p>
                  Suka main game, tapi bukan gamer, genre game favorit adalah
                  RPG, Open World, dan FPS terutama yang ceritanya ribet atau
                  multiple ending. Juga suka nonton film, genre film atau cerita
                  favorit adalah Horor, Sci-Fi, Misteri, dan Psychological
                  terutama yang bertema post apocalyptic.
                </p>
                <p>
                  Hampir ngopi tiap hari, tapi bukan pecandu kopi. Juga suka
                  makanan pedes meski sering bikin sakit perut.
                </p>
                <p>
                  Vtuber favoritku
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:underline"
                    href="https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg"
                  >
                    Ninomae Ina&apos;nis
                  </a>
                  , cause she is talented, chearful, and wholesome. Also
                  eldritch/cosmic horror concept is soooo cool.
                </p>

                <p>
                  Masih single pastinya, tapi bukan incel, karena tipeku memang
                  agak rumit. Tapi kalau bisa ku kloning diriku sendiri, mungkin
                  aku akan menikah dengan diriku sendiri \\jk.
                </p>

                <p>
                  Pengen suatu saat bisa kontribusi ke Linux kernel atau
                  software Open Source lainnya. Usaha yang sedang dilakukan
                  adalah belajar low level programming language (Rust) dan
                  belajar buat berkomunikasi lebih baik.
                </p>

                <p>
                  Also Suka
                  <a
                    href="https://en.wikipedia.org/wiki/Alternate_reality_game"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:underline"
                  >
                    ARG
                  </a>
                  , so lets mimic one. Liminal Space, Weird Core, brrrr.
                  <span className="text-xs">
                    Terakhir, ada beberapa easter egg di web ini, mungkin kau
                    bisa cari jika waktu luangmu terlalu banyak
                    <Link
                      className="text-main-600 decoration-white selection:text-white hover:underline"
                      href="/note"
                    >
                      seperti ini
                    </Link>
                    . Tapi jangan terjun terlalu dalam :D
                  </span>
                </p>`,
  Contacts: "Kontak",
  
} satisfies Translation;

export default id;
