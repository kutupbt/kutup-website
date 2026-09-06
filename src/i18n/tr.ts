// Turkish dictionary. Typed against the English shape so a missing key is a
// build error. Terminology follows the Kutup app's own tr.json (uçtan uca
// şifreli, kurtarma ifadesi, şifreli metin, …).

import type { Dictionary } from './index'

const tr: Dictionary = {
  site: {
    tagline:
      'Uçtan uca şifreli, kendi sunucunuzda barındırdığınız Drive ve federe Chat — gerçek zamanlı iş birliğiyle.',
    description:
      'Kutup; kendi donanımınızda çalıştırdığınız, gizlilik öncelikli dosya depolama, iş birliği ve mesajlaşma platformudur. Korunan içerik sunucuya ulaşmadan önce cihazınızda şifrelenir.',
  },

  nav: {
    features: 'Özellikler',
    download: 'İndir',
    selfHost: 'Kendin barındır',
    instances: 'Sunucular',
    docs: 'Belgeler',
  },

  header: {
    getKutup: 'Kutup’u edin',
    switchTheme: 'Temayı değiştir',
    switchLanguage: 'Dil',
  },

  footer: {
    blurb:
      'Uçtan uca şifreli, kendi sunucunuzda barındırdığınız Drive ve federe Chat — gerçek zamanlı iş birliğiyle. Korunan içerik sunucuda şifreli kalır.',
    product: 'Ürün',
    resources: 'Kaynaklar',
    documentation: 'Belgeler',
    releases: 'Sürümler',
    issues: 'Sorun bildirimi',
    license:
      '© {year} Alperen Albayrak. Kaynak kodu <a href="{license}" target="_blank" rel="noopener noreferrer">AGPL-3.0-only</a> ile lisanslanmıştır.',
    brand:
      'Kutup adı ve üç elmaslı logo marka varlıklarıdır; AGPL bunların kullanım hakkını vermez. Marka soruları için: <a href="mailto:{email}">{email}</a>.',
  },

  home: {
    hero: {
      badge: 'Uçtan uca şifreli · kendi sunucunuzda · federe',
      title: 'Size ait özel <span class="text-ice">çalışma alanı</span>',
      sub: 'Dosyalar, ortak düzenlenen belgeler ve federe mesajlar tek bir duyarlı web uygulamasında. Korunan içerik sunucunuza ulaşmadan önce cihazınızda şifrelenir.',
      ctaSelfHost: 'Kendi sunucunda kur',
      ctaDownload: 'Uygulamaları indir',
      screenshotAlt: 'Kutup Drive arayüzü',
    },
    pillars: [
      {
        title: 'Sıfır bilgili sunucu',
        body: 'Anahtarlar, şifreniz ve kurtarma ifadenizden tarayıcınızda türetilir. Sunucu yalnızca asla okuyamayacağı şifreli metni saklar.',
      },
      {
        title: 'İş birliği, yine şifreli',
        body: 'Uçtan uca şifrelemeden vazgeçmeden gerçek zamanlı düzenleme — aktarıcı opak, imzalı çerçeveleri yönlendirir, içeriği asla görmez.',
      },
      {
        title: 'Çalıştırması ve federe etmesi sizde',
        body: 'Tek bir Docker Compose yığını. Klasörleri paylaşın ve Kutup sunucuları arasında, hiçbir arka uç korunan düz metni görmeden mesajlaşın.',
      },
    ],
    highlights: {
      eyebrow: 'İçinde neler var',
      title: 'Her şey için tek bir şifreli çalışma alanı',
      subtitle:
        'Dosyalar, mesajlar, notlar, kod, tablolar, sunumlar ve beyaz tahtalar — açık, koyu ve sistem temalı tek bir duyarlı web uygulamasında.',
      cta: 'Tüm özellikleri keşfet',
      items: [
        {
          title: 'Sunucunun okuyamadığı dosyalar',
          alt: 'Kutup Drive — klasörler, yüklemeler ve depolama kotasıyla dosya tarayıcısı',
          body: 'İç içe klasörler, sürükle-bırak yükleme, paylaşım bağlantıları ve kullanıcı bazlı izinler. Dosya adları ve klasör yapısı da şifrelidir.',
        },
        {
          title: 'Canlı notlar ve kod',
          alt: 'Not düzenleyici — sürüm geçmişi kenar çubuklu CodeMirror',
          body: 'Markdown ve 20’den fazla kod dili için CodeMirror 6 + Yjs, canlı çok kullanıcılı imleçlerle. Her düzenleme sunucuya şifreli metin olarak ulaşır.',
        },
        {
          title: 'Ofis belgeleri, tamamen istemci tarafında',
          alt: 'Koşullu biçimlendirmeli tablo düzenleyici',
          body: '.docx, .xlsx ve .pptx, tamamen tarayıcınızda çalışan OnlyOffice ile açılır. Canlı görünürlük, formüller, grafikler — sunucu tarafında asla çözülmez.',
        },
        {
          title: 'Beyaz tahtalar',
          alt: 'Excalidraw beyaz tahtası',
          body: 'Canlı eşitlenen Excalidraw tuvalleri — her şey gibi aynı şifreli zarfın içinde.',
        },
        {
          title: 'Her dosyada sürüm geçmişi',
          alt: 'Sürüm geçmişi kenar çubuğu',
          body: 'Her kayıt bir anlık görüntüdür. Herhangi bir düzenleyicide Geçmiş kenar çubuğundan geriye gidin ve geri yükleyin.',
        },
        {
          title: 'Anahtarların sahibi sizsiniz',
          alt: 'Ayarlar — cihazlar ve görünürlük rengi',
          body: 'İptal edebileceğiniz cihaz başına anahtarlar, düzenlenebilir Chat kurulum adları, 24 kelimelik kurtarma ifadesi ve isteğe bağlı 2FA.',
        },
        {
          title: 'Kurtarılabilen federe Chat',
          alt: 'Kutup Mesajlar konuşma listesi ve şifreli sohbet dizisi',
          body: 'Doğrudan ve özel grup mesajları, yanıtlar, tepkiler, düzenlemeler, kaybolan içerik ve tembel yüklenen şifreli medya. Sürekli hesap içi yedek, tarayıcı kaybından sonra korunan geçmişi geri getirir.',
        },
      ],
    },
    architecture: {
      eyebrow: '30 saniyede mimari',
      title: 'Aktarıcı, asla çözemeyeceği şifreli metni yönlendirir',
      subtitle:
        'Her iş birliği çerçevesi tarayıcıda şifrelenir, cihaza özel bir Ed25519 anahtarıyla imzalanır ve opak bir WebSocket aktarıcısından geçirilir.',
      browserA: {
        title: 'Tarayıcı A',
        body: 'Güncelleme AEAD ile şifrelenir ve cihaza özel Ed25519 anahtarıyla imzalanır.',
      },
      relay: {
        title: 'Rust aktarıcı',
        tag: 'yalnızca şifreli metin',
        body: 'İmza doğrulanır, dosyaya göre yönlendirilir, kalıcı hale getirilir ve yayınlanır — baytlar değişmeden.',
      },
      browserB: {
        title: 'Tarayıcı B',
        body: 'Doğrulanır, çözülür ve uygulanır. Dosya başına anahtarlar, koleksiyon ana anahtarından türetilir.',
      },
      docsNote:
        'Tam anahtar hiyerarşisi, giriş akışı, federasyon modeli ve aktarım protokolü <a href="{docs}" target="_blank" rel="noopener noreferrer">belgelerde ↗</a> yer alır.',
    },
    stack: {
      eyebrow: 'Kullanılan teknolojiler',
      title: 'Pragmatik, denetlenebilir bir teknoloji yığını',
    },
    ack: {
      lead: 'Açık kaynak projelerden ilhamla inşa edildi:',
    },
    cta: {
      title: 'Kendi şifreli çalışma alanınızı bugün çalıştırın',
      body: 'Depoyu klonlayın, birkaç gizli değeri doldurun ve <code>docker compose up</code>. Verilerinizi okuyabilen tek kişi sizsiniz.',
      getStarted: 'Başlayın',
      viewSource: 'Kaynağı görüntüle ↗',
    },
  },

  features: {
    meta: {
      title: 'Özellikler',
      description:
        'Şifreli Drive, federe Chat, canlı iş birliği, korunan geçmiş kurtarma ve tamamen E2EE bir CLI — Kutup’un yaptığı her şey.',
    },
    hero: {
      eyebrow: 'Özellikler',
      title: 'Her şey şifreli, hiçbir şeyden ödün yok',
      sub: 'Kutup, istemci tarafı şifrelemeyi gerçek zamanlı iş birliği ve federe mesajlaşmayla bir araya getirir. İşte her parçanın nasıl çalıştığı.',
    },
    sections: [
      {
        eyebrow: 'Drive',
        title: 'Sunucunun okuyamadığı dosya ve klasörler',
        alt: 'Kutup Drive dosya tarayıcısı',
        points: [
          'Sürükle-bırak yükleme ve sarsılmaz bir şifreleme sınırıyla iç içe koleksiyonlar.',
          'Dosya adları, MIME türleri ve klasör yapısının tamamı istemci tarafında şifrelenir.',
          'Herkese açık paylaşım bağlantıları ve ayrıntılı okuma / yükleme / silme izinleriyle kullanıcı bazlı klasör paylaşımları.',
          'crypto_secretstream_xchacha20poly1305 ile akışlı yükleme, büyük dosyaları bellekten uzak tutar.',
          'Depolama SeaweedFS (S3 uyumlu) üzerine kuruludur.',
        ],
      },
      {
        eyebrow: 'Notlar ve kod',
        title: 'Canlı görünürlükle gerçek zamanlı metin düzenleme',
        alt: 'CodeMirror not düzenleyici',
        points: [
          'Markdown, düz metin ve 20’den fazla kod dili (Go, TS, Rust, Python, C/C++, Java, Shell, …) için CodeMirror 6 + Yjs CRDT.',
          'Her kullanıcının kendi seçtiği farkındalık rengiyle çok kullanıcılı imleç ve seçim görünürlüğü.',
          'Her düzenleme, AEAD zarfına sarılmış ikili bir Yjs güncellemesidir — sunucu yalnızca opak şifreli metin görür.',
        ],
      },
      {
        eyebrow: 'Ofis belgeleri',
        title: '.docx, .xlsx, .pptx — şifreli, tarayıcıda',
        alt: 'OnlyOffice tablo düzenleyici',
        points: [
          'OnlyOffice, CryptPad desenini kullanarak tamamen istemci tarafında çalışır; belge durumu sunucu tarafında asla çözülmez.',
          'Canlı hücre seçimi; kullanıcı başına renkler ve çoklu sekme ayrımıyla yarı saydam renkli aralıklar olarak gösterilir.',
          'Eksiksiz koşullu biçimlendirme, formüller ve grafikler.',
        ],
      },
      {
        eyebrow: 'Beyaz tahtalar',
        title: 'Canlı eşitlenen Excalidraw tuvalleri',
        alt: 'Excalidraw beyaz tahtası',
        points: [
          '.excalidraw dosyaları, sekmeler arası eşitlemeyle gömülü Excalidraw düzenleyicisinde açılır.',
          'versionNonce ile öğe başına son-yazan-kazanır uzlaştırması.',
          'Diğer tüm dosya türleriyle aynı uçtan uca şifreli zarf.',
        ],
      },
      {
        eyebrow: 'Sürüm geçmişi',
        title: 'Her dosyayı anlık görüntüleyin ve geri yükleyin',
        alt: 'Sürüm geçmişi kenar çubuğu',
        points: [
          'Her kayıt, herhangi bir düzenleyicideki Geçmiş kenar çubuğundan gezilebilen sürümlü bir anlık görüntü oluşturur.',
          'Adlandırılmış “Sürüm kaydet” girdileri sonsuza dek saklanır; anonim kayıtlar zamanla silinir (30 gün veya 50 sürüm — hangisi daha fazlasını tutarsa).',
          'Uç nokta dosya türünden bağımsızdır — notlar, ofis ve beyaz tahtalar aynı altyapıyı kullanır.',
        ],
      },
      {
        eyebrow: 'Anahtarlar ve cihazlar',
        title: 'Tek anahtar sahibi sizsiniz',
        alt: 'Ayarlar — cihazlar ve görünürlük rengi',
        points: [
          'Her biri ayrı ayrı iptal edilebilen, cihaz başına Ed25519 anahtar çiftleri.',
          'Hesap kurtarmada ikinci faktör olarak da görev yapan 24 kelimelik BIP39 kurtarma ifadesi — asla sunucuya gönderilmez.',
          'İsteğe bağlı TOTP 2FA ve düzenleyiciler ile sekmeler arasında sizi izleyen bir görünürlük rengi.',
        ],
      },
      {
        eyebrow: 'Mesajlar',
        title: 'Federe doğrudan ve özel grup Chat',
        alt: 'Kutup Mesajlar çalışma alanı',
        points: [
          'Doğrudan konuşmalar ve Kendime Not libsignal, özel gruplar RFC 9420 OpenMLS kullanır.',
          'Yanıtlar, tepkiler, düzenlemeler, silmeler, alındılar, kaybolan mesajlar, yerel arama, şifreli ekler, önizlemeler ve sesli notlar desteklenir.',
          'Her zaman açık hesap içi E2EE yedek, protokol oturumlarını veya bekleyen gönderimleri geri yüklemeden doğrulanmış görüntü geçmişini ve uygun medyayı tüm tarayıcı verisi kaybedildikten sonra kurtarır.',
        ],
      },
    ],
    federation: {
      eyebrow: 'Federasyon',
      title: 'Güveni paylaşmadan sunucular arası paylaşın',
      subtitle:
        'Drive klasörlerini paylaşın ve Kutup sunucuları arasında Chat mesajları gönderin. İki arka uç da şifreli metni yönlendirir; hiçbiri korunan düz metni almaz.',
      body: 'Drive ve Chat tek bir kimliği doğrulanmış federasyon kimliğini, eş politikasını, yeniden deneme hattını ve denetim yüzeyini paylaşır. Özelliğe özel şifreli yükler ayrı kalır; ikinci bir sunucu devreye girdiğinde şifreleme sınırı yer değiştirmez.',
    },
    cli: {
      eyebrow: 'Komut satırı',
      title: 'Aynı E2EE yapı taşları, kabuğunuzda',
      subtitle:
        'kutup; register, login, ls, upload, download, sync, share, versions, devices ve 2FA için Rust ile yazılmış bir CLI’dır — tamamı uçtan uca şifreli. Sunucu yalnızca şifreli metin görür.',
      install: 'Kaynaktan derleme (Rust ≥ 1.91)',
      installNote:
        'Henüz herkese açık ikili sürüm yoktur. Etiketli CLI sürümleri Linux x86-64/ARM64, macOS Intel/Apple Silicon ve Windows x86-64 için yapılandırılmıştır.',
      workflows: 'Yaygın iş akışları',
      standoutTitle: 'Öne çıkan: > 2 GB yüklemeler',
      standoutBody:
        'Tarayıcının File API’si çok GB’lik boyutlarda sekmeyi kilitler. CLI ise parçalı <code>crypto_secretstream</code> şifrelemesini (XChaCha20-Poly1305, 5 MB bloklar) bir Rust okuyucusu üzerinden akıtır; ISO’lar, ham video, veri kümeleri gibi istediğiniz kadar büyük dosyaları sabit ~5 MB bellekle gönderir. Dosya boyutunu RAM değil disk sınırlar.',
    },
    cta: {
      title: 'Denemeye hazır mısınız?',
      readDocs: 'Belgeleri oku ↗',
    },
  },

  download: {
    meta: {
      title: 'İndir',
      description:
        'Kutup’u web’de kullanın veya ön sürüm masaüstü kabuğunu ve CLI’yı kaynaktan derleyin. Yerel iOS ve Android uygulamaları geliştirme aşamasındadır.',
    },
    hero: {
      eyebrow: 'İndir',
      title: 'Kutup’u nasıl kullanacağınızı seçin',
      sub: 'Bugün eksiksiz ürün yüzeyi duyarlı web uygulamasıdır. Masaüstü ve CLI kaynakları hazırdır; özel yerel mobil uygulamalar sürüme hazır değildir.',
      badge: 'Üretim öncesi — henüz herkese açık ikili sürüm yok',
    },
    desktop: {
      eyebrow: 'Masaüstü uygulaması',
      titleKnown: '{os} için önerilen',
      titleUnknown: 'Masaüstü uygulamasını indirin',
      body: 'Uygulanmış Tauri 2 kabuğu macOS, Windows ve Linux’u hedefler ve oturum materyalini işletim sistemi anahtar zincirinde saklar. İmzalama, paketleme ve ilk sürüm kabulü açıkken kaynaktan derleyin.',
      downloadFor: '{os} için indir',
      goToReleases: 'Releases’e git',
      preRelease:
        'Ön sürüm kaynak derlemesi — henüz herkese açık masaüstü sürümü yoktur. Ofis belgeleri web uygulamasında açılır ve güncel yerel derlemeler imzasızdır.',
    },
    mobile: {
      eyebrow: 'Mobil',
      title: 'iOS ve Android',
      body: 'Özel yerel iOS ve Android uygulamaları ayrı depolarda etkin olarak geliştirilmektedir. Kuruluma veya üretim kullanımına hazır değildir; korunan Tauri mobil hedefleri deneyseldir.',
      cta: 'Geliştirme durumunu görüntüle ↗',
    },
    web: {
      eyebrow: 'Web',
      title: 'Tarayıcıda kullanın',
      body: 'Drive, iş birliği, ofis düzenleme, federe Chat ve otomatik korunan geçmiş kurtarma dahil eksiksiz duyarlı uygulama, kendin barındırılan her kurulumla gelir.',
      cta: 'Kendin barındırma rehberi',
    },
    cli: {
      eyebrow: 'Komut satırı',
      title: 'CLI’yı kurun',
      subtitle:
        'Kabuğunuzdan uçtan uca şifreli dosya işlemleri — tarayıcının kaldıramadığı çok GB’lik yüklemeler dahil.',
      fromSource: 'Kaynaktan derleme (Rust ≥ 1.91)',
      binaryNote:
        'Henüz herkese açık ikili dosya yoktur. Yapılandırılmış sürüm matrisi, ilk incelenmiş etiketten sonra Linux x86-64/ARM64, macOS Intel/Apple Silicon ve Windows x86-64 derlemelerini <a href="{releases}" target="_blank" rel="noopener noreferrer">GitHub Releases’e ↗</a> yayımlayacaktır.',
    },
  },

  selfHost: {
    meta: {
      title: 'Kendin barındır',
      description:
        'Docker Compose ile kendi Kutup sunucunuzu çalıştırın. Ön koşullar, yapılandırma, TLS, yedekler ve sıkılaştırma.',
    },
    hero: {
      eyebrow: 'Kendin barındır',
      title: 'Dakikalar içinde kendi Kutup’unuzu çalıştırın',
      sub: 'Kutup tasarımı gereği kendin barındırılır. Üretim dağıtımı bir Docker Compose yığınıdır — arka uç, veritabanı, şifreli depolama ve Nginx. İşte hızlı başlangıç; tam rehber belgelerde.',
      ctaDocs: 'Tüm barındırma belgeleri ↗',
      ctaRepo: 'Depoyu görüntüle ↗',
    },
    prereqs: {
      title: 'Ön koşullar',
      items: [
        'Docker 24+ ve Docker Compose v2 (docker compose komutu).',
        'En az 1 GB RAM’e sahip bir Linux sunucusu.',
        'Bir alan adı — HTTPS ve federasyonun doğru çalışması için gerekli.',
      ],
    },
    steps: {
      clone: {
        title: '1. Klonlayın ve yapılandırın',
        intro: 'Depoyu klonlayın ve ortam dosyanızı oluşturun:',
        envIntro:
          '<code>.env</code> dosyasını düzenleyin ve her değeri güçlü gizli değerlerle doldurun:',
        s3Note:
          'Compose, S3 kimlik bilgilerini SeaweedFS ve arka uca aktarır; düzenlenecek ikinci bir kimlik bilgisi dosyası yoktur.',
      },
      start: {
        title: '2. Yığını başlatın',
        intro:
          'Tüm servisleri derleyin ve başlatın — Postgres, SeaweedFS, arka uç, ön yüz ve Nginx:',
      },
      login: {
        title: '3. İlk giriş',
        intro:
          'Loglarda yönetici bootstrap onayını bulun, ardından alan adınızı açıp giriş yapın:',
        note: 'İlk girişte <strong>24 kelimelik kurtarma ifadenizi</strong> oluşturursunuz (bir yere yazın — hesabınızı kurtarmanın tek yolu budur ve asla sunucuya gönderilmez) ve isterseniz 2FA’yı etkinleştirebilirsiniz.',
      },
      tls: {
        title: '4. TLS ekleyin',
        intro:
          'Paketle gelen Nginx zaten TLS gerektirir. Bir sertifika alın, <code>fullchain.pem</code> ve <code>privkey.pem</code> dosyalarını <code>nginx/certs/</code> dizinine koyun ve Nginx’i yeniden başlatın veya yükleyin:',
      },
    },
    operating: {
      title: 'Sunucunuzu işletmek',
      cards: [
        {
          title: 'Yedekler',
          body: 'PostgreSQL’in dökümünü alın ve SeaweedFS veri dizinlerini arşivleyin. Dosya parçaları yalnızca şifreli metindir — çalınan bir yedek, kullanıcı anahtarları olmadan işe yaramaz.',
        },
        {
          title: 'Güncelleme',
          body: '<code>git pull</code>, ardından <code>docker compose up -d --build</code>. Veritabanı geçişleri arka uç açılışında otomatik çalışır.',
        },
        {
          title: 'Ters proxy',
          body: 'Hâlihazırda Nginx veya Caddy mi çalıştırıyorsunuz? Yığını <code>127.0.0.1:8080</code> adresine bağlayın ve ona proxy’leyin (büyük yüklemeler için istek arabelleğini kapatın).',
        },
        {
          title: 'Sıkılaştırma',
          body: 'Tüm gizli değerleri değiştirin, yalnızca herkese açık TLS ucunu dışarı açın ve <code>JWT_SECRET</code> değerini <code>openssl rand -hex 64</code> ile üretin. Arka ucu Nginx dışında erişilemez tutun ve acil durum yöneticisini koruyun.',
        },
      ],
      docsNote:
        'Ofis düzenleme, DocumentServer veya elle kurulum olmadan varsayılan Compose derlemesinde çalışır. Kalıcı SeaweedFS metadatası, saklama, kotalar, federasyon ve yedekleme/geri yükleme gereksinimleri için <a href="{docs}" target="_blank" rel="noopener noreferrer">belgelere ↗</a> bakın.',
    },
    cta: {
      title: 'Kutup’u zaten mi çalıştırıyorsunuz?',
      body: 'Sunucunuzu herkese açık sunucu dizininde listeleyin ki başkaları da bulabilsin.',
      browse: 'Sunuculara göz at',
      submit: 'Sunucunu gönder ↗',
    },
  },

  instances: {
    meta: {
      title: 'Genel sunucular',
      description:
        'Kaydolabileceğiniz, topluluk tarafından işletilen Kutup sunucularının dizini — ya da kendi sunucunuzu barındırın.',
    },
    hero: {
      eyebrow: 'Genel sunucular',
      title: 'Katılacağınız bir Kutup sunucusu bulun',
      sub: 'Kutup korunan içeriği cihazınızda şifrelediği için, sizin işletmediğiniz bir sunucu bile dosyalarınızı veya mesajlarınızı okuyamaz. Topluluk tarafından işletilen bir sunucu seçin ya da tam kontrol için kendiniz çalıştırın.',
    },
    trust: {
      title: 'Güven üzerine bir not',
      body: 'Buradaki kayıtlar topluluk tarafından gönderilir ve bir tavsiye niteliği taşımaz. İşletmeciler içeriğinizi okuyamaz, ancak erişilebilirliği ve çalışma süresini onlar kontrol eder. Hassas veya uzun vadeli veriler için en güçlü güvence kendin barındırmaktır.',
    },
    filter: {
      emptyTitle: 'Henüz listelenmiş genel sunucu yok',
      emptyBody:
        'Kutup tasarımı gereği kendin barındırılır ve şu anda ön sürüm aşamasındadır. Dakikalar içinde kendi sunucunuzu çalıştırın ya da başkalarının bulması için sunucunuzu burada listeleyin.',
      hostYourOwn: 'Kendi sunucunu kur',
      submit: 'Sunucunu gönder ↗',
      searchPlaceholder: 'Sunucularda ara…',
      allRegions: 'tümü',
      signups: {
        open: 'Kayıtlar açık',
        invite: 'Yalnızca davetle',
        closed: 'Kapalı',
      },
      noMatch: 'Filtrenize uyan sunucu yok.',
    },
  },

  notFound: {
    metaTitle: 'Sayfa bulunamadı',
    metaDescription: 'Aradığınız sayfa mevcut değil.',
    title: 'Bu sayfa kurtarılamayacak şekilde şifrelenmiş',
    body: 'Aradığınızı bulamadık. Taşınmış ya da hiç var olmamış olabilir.',
    home: 'Ana sayfaya dön',
    features: 'Özelliklere göz at',
  },

  copy: {
    label: 'Kopyala',
    copied: '✓ Kopyalandı',
  },
}

export default tr
