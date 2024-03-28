# Weather App

Proje, popüler bir hava durumu API'si olan OpenWeather API'sini kullanarak gerçek zamanlı hava durumu verilerini çekmeyi amaçlamaktadır. Kullanıcılara, aranan şehrin sıcaklık, nem, rüzgar hızı gibi çeşitli hava durumu bilgilerini sunmayı hedeflemektedir. 


## Özellikler

* **`Hava Durumu Detayları:`** Kullanıcılar, seçtikleri şehrin sıcaklık, nem, rüzgar hızı, hissedilen sıcaklık ve yağmur olasılığı gibi çeşitli hava durumu bilgilerini görüntüleyebilirler. Ayrıca, sonraki 5 günün hava durumu verileri de kullanıcılara sunularak, hava durumunun gelecekteki seyrine dair daha fazla bilgi sağlanmıştır.

* **`Arama İşlevi:`** Kullanıcılar, arama kutusuna şehir adı girerek o şehre ait güncel hava durumu bilgilerini sorgulayabilirler. Otomatik tamamlama özelliği sayesinde kullanıcılar şehir adını yazarken önerilen şehirlerden seçim yapabilirler.

* **`Çoklu Şehir Desteği:`** Proje, kullanıcının yaptığı arama sonucunda birden fazla şehir önerisi gösterir. Kullanıcılar bu öneriler arasından istedikleri şehri seçerek o şehre ait hava durumu bilgilerini görüntüleyebilirler.

* **`Dinamik Hava Durumu İkonları:`** Projede mevcut hava durumunu yansıtan dinamik ikonlar ve görseller kullanılmıştır. Bu sayede kullanıcılar hava durumunu daha hızlı ve kolay bir şekilde anlayabilirler.


## Kullanılan Teknolojiler

- **React:** Bileşen tabanlı yapısı sayesinde kullanıcı arayüzünü geliştirmek için kullanılmıştır.
  
- **Vite:** Hızlı başlangıç sağlamasından ve geliştirme sırasında anında güncelleme yetenekleri sunmasından dolayı tercih edilmiş bir araçtır.
  
- **React Router Dom:** Sayfa yönlendirme ve gezinme işlemlerini yönetmek için kullanılmıştır.
  
- **Axios:** HTTP istekleri yapmak ve API ile iletişim kurmak için kullanılmıştır.
  
- **React Icons:** Bazı ikonları projede kullanmak için yararlanılmıştır.


## Proje Kurulumu

**1. GitHub Reposunu İndirme:**

* İlk adım olarak, projenin GitHub reposunu indirmeniz gerekiyor. Bunun için aşağıdaki adımları takip edebilirsiniz:

* GitHub'daki projenin sayfasına gidin.

* Sağ üst köşede bulunan `"Code"` veya "Clone or download" butonuna tıklayın.

* `"Download ZIP"` seçeneğini seçerek projenin ZIP dosyasını indirin ve bilgisayarınıza kaydedin.

* ZIP dosyasını istediğiniz bir klasöre çıkartın.


**2. Proje Dosyalarını Hazırlama:**

* İndirdiğiniz ZIP dosyasını çıkarttıktan sonra, proje dosyalarını hazırlamak için aşağıdaki adımları takip edebilirsiniz:

* Çıkartılan klasöre giderek içerisindeki dosyaları düzenleyin ve gerekli değişiklikleri yapın.

* Projenin ana dizinine .env dosyası oluşturun ve içine OpenWeather resmi sitesinden almış olduğunuz API anahtarınızı tanımlayın (örneğin: VITE_API_URL=123456789987654321).


**3. Bağımlılıkları Yükleme:**

* Projenin bağımlılıklarını yüklemek için terminal veya komut istemcisini açın, projenin klasörüne gidin ve aşağıdaki komutu çalıştırın:

* `npm install`

* Bu komut, projede kullanılan paketleri yükleyecektir.


**4. Projeyi Çalıştırma:**

* Projenin geliştirme sunucusunu başlatmak için aşağıdaki komutu kullanın:

* `npm run dev`

* Bu komut, projenizi yerel bir sunucuda başlatacak ve tarayıcınızda projenizi görüntüleyecektir.


## Yayın Linki

https://weather-app-red-three-74.vercel.app/


## Ekran Gifi

![Kayt2024-03-28192140-ezgif com-video-to-gif-converter](https://github.com/serhatakhan/Weather-App/assets/147662915/e5687e28-454c-4926-adb6-1c98211e5352)

