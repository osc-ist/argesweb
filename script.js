// Mobil Menü İşlemleri
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Mobil menü
const mobileMenu = document.querySelector('.mobile-menu');
const navLinksMobile = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinksMobile.classList.toggle('active');
});

// Sayfa Yüklendiğinde Animasyon
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
});

// Scroll Olayı
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'white';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// İletişim Formu İşlemleri
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form verilerini al
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };
        
        // Form doğrulama
        if (!validateForm(formData)) {
            return;
        }
        
        // Form gönderimi simülasyonu
        submitForm(formData);
    });
}

// Form doğrulama fonksiyonu
function validateForm(data) {
    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // İsim kontrolü
    if (data.name.trim().length < 3) {
        showError('name', 'Lütfen geçerli bir isim giriniz (en az 3 karakter)');
        isValid = false;
    } else {
        removeError('name');
    }
    
    // E-posta kontrolü
    if (!emailRegex.test(data.email)) {
        showError('email', 'Lütfen geçerli bir e-posta adresi giriniz');
        isValid = false;
    } else {
        removeError('email');
    }
    
    // Telefon kontrolü (opsiyonel)
    if (data.phone && !/^[0-9\s\-\+\(\)]{10,}$/.test(data.phone)) {
        showError('phone', 'Lütfen geçerli bir telefon numarası giriniz');
        isValid = false;
    } else {
        removeError('phone');
    }
    
    // Mesaj kontrolü
    if (data.message.trim().length < 10) {
        showError('message', 'Lütfen en az 10 karakterlik bir mesaj giriniz');
        isValid = false;
    } else {
        removeError('message');
    }
    
    return isValid;
}

// Hata gösterme fonksiyonu
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Önceki hata mesajını kaldır
    removeError(fieldId);
    
    // Yeni hata mesajını ekle
    field.parentNode.appendChild(errorDiv);
    field.classList.add('error');
}

// Hata kaldırma fonksiyonu
function removeError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorDiv = field.parentNode.querySelector('.error-message');
    
    if (errorDiv) {
        errorDiv.remove();
    }
    
    field.classList.remove('error');
}

// Form gönderme fonksiyonu
function submitForm(data) {
    // Form gönderimi simülasyonu
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Butonu devre dışı bırak ve yükleniyor göster
    submitButton.disabled = true;
    submitButton.textContent = 'Gönderiliyor...';
    
    // API çağrısı simülasyonu
    setTimeout(() => {
        // Başarılı gönderim simülasyonu
        showSuccessMessage();
        
        // Formu sıfırla
        contactForm.reset();
        
        // Butonu eski haline getir
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 1500);
}

// Başarı mesajı gösterme fonksiyonu
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.';
    
    // Önceki başarı mesajını kaldır
    const existingMessage = contactForm.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Yeni başarı mesajını ekle
    contactForm.insertBefore(successDiv, contactForm.firstChild);
    
    // 5 saniye sonra mesajı kaldır
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Ürün Filtreleme
const filterButtons = document.querySelectorAll('.filter-btn');
const subcategoryGroups = document.querySelectorAll('.subcategory-group');
const subcategoryButtons = document.querySelectorAll('.subcategory-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Ana kategori butonlarını güncelle
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        const subcategoryFilters = document.querySelector('.subcategory-filters');

        // Alt kategori gruplarını güncelle
        subcategoryGroups.forEach(group => {
            group.classList.remove('active');
            if (group.getAttribute('data-category') === filter) {
                group.classList.add('active');
            }
        });

        // Alt kategori filtrelerini göster/gizle
        if (filter === 'all') {
            subcategoryFilters.classList.remove('active');
        } else {
            subcategoryFilters.classList.add('active');
        }

        // Ürünleri filtrele
        productCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

subcategoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Alt kategori butonlarını güncelle
        const parentGroup = button.closest('.subcategory-group');
        parentGroup.querySelectorAll('.subcategory-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        const category = parentGroup.getAttribute('data-category');

        // Ürünleri filtrele
        productCards.forEach(card => {
            if (card.getAttribute('data-category') === category) {
                if (filter === 'all' || card.getAttribute('data-subcategory') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// Ürün detay modalı
const modal = document.getElementById('productModal');
const modalImage = modal.querySelector('.modal-image');
const modalVideo = modal.querySelector('.modal-video source');
const modalTitle = modal.querySelector('.modal-info h2');
const modalDescription = modal.querySelector('.modal-info p');
const modalFeatures = modal.querySelector('.modal-features');
const modalClose = modal.querySelector('.modal-close');

// Ürün detayları
const productDetails = {
    'videowall': {
        title: 'Videowall Sistemi',
        description: 'Yüksek çözünürlüklü, kesintisiz görüntü deneyimi sunan profesyonel videowall sistemleri. Kontrol odaları, komuta merkezleri ve sergi alanları için ideal çözümler.',
        image: 'images/products/videowall-1.jpg',
        video: 'videos/videowall-demo.mp4',
        features: [
            '4K Ultra HD çözünürlük',
            'Kesintisiz görüntü deneyimi',
            'Uzaktan kontrol imkanı',
            '7/24 kesintisiz çalışma',
            'Kolay kurulum ve bakım'
        ]
    },
    'digitalsignage': {
        title: 'Digital Signage Sistemi',
        description: 'İçerik yönetimi ve dağıtımı için gelişmiş dijital tabela sistemleri. Mağazalar, ofisler ve halka açık alanlar için dinamik içerik çözümleri.',
        image: 'images/products/digitalsignage-1.jpg',
        video: 'videos/digitalsignage-demo.mp4',
        features: [
            'Merkezi içerik yönetimi',
            'Çoklu ekran desteği',
            'Gerçek zamanlı güncelleme',
            'İnteraktif içerik desteği',
            'Uzaktan izleme ve kontrol'
        ]
    },
    'ledscreen': {
        title: 'LED Ekran Çözümleri',
        description: 'İç ve dış mekan kullanımına uygun, yüksek parlaklıklı LED ekran sistemleri. Reklam, bilgilendirme ve eğlence amaçlı kullanım için profesyonel çözümler.',
        image: 'images/products/ledscreen-1.jpg',
        video: 'videos/ledscreen-demo.mp4',
        features: [
            'Yüksek parlaklık ve kontrast',
            'Su geçirmez tasarım',
            'Geniş görüş açısı',
            'Enerji verimliliği',
            'Kolay kurulum ve bakım'
        ]
    },
    'avm': {
        title: 'AVM Yönlendirme ve Bilgilendirme',
        description: 'Alışveriş merkezleri için özel tasarlanmış, interaktif yönlendirme ve bilgilendirme sistemleri. Ziyaretçilere daha iyi bir deneyim sunmak için gelişmiş çözümler.',
        image: 'images/products/avm-1.jpg',
        video: 'videos/avm-demo.mp4',
        features: [
            'İnteraktif kat planı',
            'Mağaza ve etkinlik bilgileri',
            'Çoklu dil desteği',
            'Gerçek zamanlı güncelleme',
            'Özel içerik yönetimi'
        ]
    },
    'magicmirror': {
        title: 'Ayna TV (Magic Mirror TV)',
        description: 'Görüntü ve ayna fonksiyonlarını birleştiren yenilikçi çözümler. Mağazalar, oteller ve özel kullanım alanları için şık ve modern tasarım.',
        image: 'images/products/magicmirror-1.jpg',
        video: 'videos/magicmirror-demo.mp4',
        features: [
            'Yüksek kaliteli ayna yüzeyi',
            'Dokunmatik ekran özelliği',
            'İnteraktif içerik desteği',
            'Özel tasarım seçenekleri',
            'Kolay entegrasyon'
        ]
    },
    'menuboard': {
        title: 'Dijital Menüboard Sistemleri',
        description: 'Restoranlar ve kafeler için dinamik menü çözümleri. Menü güncellemelerini anında yapabilme ve özel içerik yönetimi imkanı.',
        image: 'images/products/menuboard-1.jpg',
        video: 'videos/menuboard-demo.mp4',
        features: [
            'Merkezi menü yönetimi',
            'Gerçek zamanlı güncelleme',
            'Özel içerik şablonları',
            'Çoklu ekran desteği',
            'Uzaktan kontrol imkanı'
        ]
    },
    'andon': {
        title: 'Andon TV ve Üretim Takip',
        description: 'Üretim süreçlerini görselleştiren ve takip eden profesyonel çözümler. Verimliliği artırmak ve süreçleri optimize etmek için gelişmiş sistemler.',
        image: 'images/products/andon-1.jpg',
        video: 'videos/andon-demo.mp4',
        features: [
            'Gerçek zamanlı üretim takibi',
            'Durum göstergeleri',
            'Verimlilik raporları',
            'Alarm ve uyarı sistemi',
            'Entegre ERP bağlantısı'
        ]
    },
    'industrial': {
        title: 'Endüstriyel Ekran Çözümleri',
        description: 'Zorlu endüstriyel ortamlara uygun, dayanıklı ve güvenilir ekran sistemleri. Üretim hatları ve kontrol odaları için özel çözümler.',
        image: 'images/products/industrial-1.jpg',
        video: 'videos/industrial-demo.mp4',
        features: [
            'IP65/IP67 koruma sınıfı',
            'Yüksek sıcaklık dayanımı',
            '7/24 kesintisiz çalışma',
            'Dokunmatik ekran seçeneği',
            'Özel montaj çözümleri'
        ]
    },
    'holotabela': {
        title: 'Holotabela',
        description: '3D holografik görüntüleme teknolojisi ile ürün ve marka tanıtımı için yenilikçi çözümler. Mağazalar ve sergi alanları için etkileyici görsel deneyimler.',
        image: 'images/products/holotabela-1.jpg',
        video: 'videos/holotabela-demo.mp4',
        features: [
            'Gerçekçi 3D görüntüleme',
            '360° görüş açısı',
            'İnteraktif içerik desteği',
            'Özel içerik yönetimi',
            'Kolay kurulum ve bakım'
        ]
    }
};

// Detay butonlarına tıklama olayı ekle
document.querySelectorAll('.product-card .details-btn').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product');
        const product = productDetails[productId];
        
        if (product) {
            modalImage.src = product.image;
            modalImage.alt = product.title;
            modalVideo.src = product.video;
            modalTitle.textContent = product.title;
            modalDescription.textContent = product.description;
            
            // Özellikleri listele
            modalFeatures.innerHTML = product.features.map(feature => 
                `<li><i class="fas fa-check"></i>${feature}</li>`
            ).join('');
            
            // Modalı göster
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Modalı kapat
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Videoyu durdur
    modalVideo.parentElement.pause();
});

// Modal dışına tıklandığında kapat
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Videoyu durdur
        modalVideo.parentElement.pause();
    }
});

// ESC tuşu ile kapat
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Videoyu durdur
        modalVideo.parentElement.pause();
    }
}); 