
# Slider Projesi
![Untitled](https://github.com/OzcanCAVGA/SliderProject/assets/81030695/8b081570-1a0f-4312-9b9a-a1bd49377f37)


Bu proje, HTML, CSS ve JavaScript kullanarak basit bir görüntü kaydırma (slider) özelliği oluşturmayı amaçlamaktadır. Slider, web sitelerinde farklı içerikleri (resimler, metinler, vb.) yatayda kaydırmak için kullanılan bir araçtır.

## İçerik

- Proje Amacı
- Nasıl Kullanılır
- Projeyi Çalıştırma
- Geliştirme
- Katkı

## Proje Amacı

Slider Projesi, temel web teknolojilerini (HTML, CSS, JavaScript) kullanarak bir görüntü kaydırma arayüzü oluşturmayı amaçlamaktadır. 

## Nasıl Kullanılır

1. Projeyi indirdikten veya klonladıktan sonra, `index.html` dosyasını bir tarayıcıda açarak slider'ı görüntüleyebilirsiniz.
2. Sağ ve sol yönlü ok simgelerine tıklayarak görüntüler arasında geçiş yapabilirsiniz.
3. Otomatik geçiş işlevini görmek için sağ ve sol ok simgelerine tıklamadan bekleyebilirsiniz.
4. Slider'ın görünümünü ve davranışını `style.css` ve `script.js` dosyalarını düzenleyerek özelleştirebilirsiniz.

## Projeyi Çalıştırma

Projeyi yerel bilgisayarınıza klonlamak için aşağıdaki komutları kullanabilirsiniz:

```bash
git clone https://github.com/OzcanCAVGA/SliderProject/.git
cd SLIDER-PROJESI
```

Projeyi klonladıktan sonra, `index.html` dosyasını tarayıcınızda açarak slider'ı görüntüleyebilirsiniz.

## Geliştirme

Projeyi indirdikten sonra, `style.css` ve `script.js` dosyalarını düzenleyerek slider'ın görünümünü ve davranışını özelleştirebilirsiniz. CSS dosyasında stil değişiklikleri yapabilir, JavaScript dosyasında slider'ın işlevselliğini değiştirebilirsiniz.

## Katkı

Bu proje açık kaynaklıdır ve her türlü katkı ve öneriye açıktır. Eğer projeye katkıda bulunmak isterseniz, GitHub üzerinden bir "pull request" oluşturabilirsiniz. Katkılarınızın proje gelişimine katkıda bulunacağına inanıyoruz.

---

### Kod Açıklamaları

`script.js` dosyasındaki bazı önemli kod parçalarını açıklamak gerekirse:

- `nextIcon` ve `prevIcon`, HTML'deki ilgili sınıflara sahip ok ikonlarını seçer.
- `imageContainer`, görüntülerin bulunduğu konteyneri seçer.
- `imgs`, tüm görüntüleri seçer.
- `currentImg`, görüntüler arasında geçiş yaparken hangi görüntünün gösterildiğini takip eder.
- `timeOut`, otomatik geçişin süresini belirlemek için kullanılır.
- `updateImg` fonksiyonu, görüntüler arasındaki geçişi yönetir. Sağ ve sol ok simgelerine tıklamada veya otomatik geçişte çağrılır. Görüntü geçişini ayarlar ve eğer son görüntüye gelinirse başa döner. Otomatik geçiş süresini yönetir ve `setTimeout` kullanarak belirli bir süre sonunda bir sonraki görüntüye geçişi sağlar. Görüntü geçişi `translateX` stil özelliği ile yapılır.
