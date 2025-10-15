import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Leaf,
  TreeDeciduous,
  Droplets,
  Hammer,
  Star,
  Menu,
  X,
  ChevronRight,
  Award,
  Users,
  Clock,
  Globe,
  PhoneCall,
} from "lucide-react";
import "./App.css";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img4.jpeg";
import img5 from "./assets/images/img5.jpeg";
import img6 from "./assets/images/img6.jpeg";
import img7 from "./assets/images/img7.jpg";
import img8 from "./assets/images/img8.webp";
import img9 from "./assets/images/img9.jpg";
import summerLandscapeDesign from "./assets/images/summer_landscape_design.jpg";

function App() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;
  }, [isRTL, currentLanguage]);

  const toggleLanguage = () => {
    const newLang = currentLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      t("contact.form.successMessage") ||
        "Thank you for your inquiry! We will contact you soon."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: t("services.landscapeDesign.title"),
      description: t("services.landscapeDesign.description"),
    },
    {
      icon: <TreeDeciduous className="w-12 h-12" />,
      title: t("services.lawnCare.title"),
      description: t("services.lawnCare.description"),
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: t("services.hardscaping.title"),
      description: t("services.hardscaping.description"),
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: t("services.irrigation.title"),
      description: t("services.irrigation.description"),
    },
  ];

  const portfolio = [
    {
      image: img1,
      title: t("portfolio.modernGarden"),
      category: t("portfolio.residential"),
    },
    {
      image: img2,
      title: t("portfolio.smallSpace"),
      category: t("portfolio.urbanGarden"),
    },
    {
      image: img3,
      title: t("portfolio.summerLandscape"),
      category: t("portfolio.commercial"),
    },
    {
      image: img4,
      title: t("portfolio.lawnRenovation"),
      category: t("portfolio.beforeAfter"),
    },
    {
      image: img5,
      title: t("portfolio.lawnRenovation"),
      category: t("portfolio.beforeAfter"),
    },
    {
      image: img6,
      title: t("portfolio.lawnRenovation"),
      category: t("portfolio.beforeAfter"),
    },
    {
      image: img7,
      title: t("portfolio.lawnRenovation"),
      category: t("portfolio.beforeAfter"),
    },
    {
      image: img8,
      title: t("portfolio.lawnRenovation"),
      category: t("portfolio.beforeAfter"),
    },
    {
      image: img9,
      title: t("portfolio.lawnRenovation"),
      category: t("portfolio.beforeAfter"),
    },
  ];

  const testimonials = [
    {
      name: t("testimonials.sarah.name"),
      rating: 5,
      text: t("testimonials.sarah.text"),
    },
    {
      name: t("testimonials.michael.name"),
      rating: 5,
      text: t("testimonials.michael.text"),
    },
    {
      name: t("testimonials.emily.name"),
      rating: 5,
      text: t("testimonials.emily.text"),
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: t("whyChooseUs.experience.title"),
      description: t("whyChooseUs.experience.description"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("whyChooseUs.team.title"),
      description: t("whyChooseUs.team.description"),
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t("whyChooseUs.quality.title"),
      description: t("whyChooseUs.quality.description"),
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t("whyChooseUs.timely.title"),
      description: t("whyChooseUs.timely.description"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-800">
                {t("common.brandName")}
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {t("header.home")}
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {t("header.services")}
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {t("header.portfolio")}
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {t("header.about")}
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {t("header.contact")}
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage === "en" ? "العربية" : "English"}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t("header.phone")}</span>
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                {t("header.getEstimate")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {t("header.home")}
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {t("header.services")}
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {t("header.portfolio")}
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {t("header.about")}
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {t("header.contact")}
              </a>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center justify-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage === "en" ? "العربية" : "English"}</span>
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={summerLandscapeDesign}
            alt="Beautiful landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg px-8"
              >
                {t("hero.cta1")}
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 text-lg px-8"
              >
                {t("hero.cta2")}
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 border-0"
              >
                <CardContent className="p-6">
                  <div className="text-green-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="link" className="text-green-600 p-0 h-auto">
                    {t("services.learnMore")}{" "}
                    <ChevronRight
                      className={`w-4 h-4 ${isRTL ? "rotate-180" : ""} ml-1`}
                    />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("portfolio.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("portfolio.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-green-400 text-sm font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t("whyChooseUs.title")}
            </h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              {t("whyChooseUs.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.name")}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.namePlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.emailPlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.phone")}
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.phonePlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.messagePlaceholder")}
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="lg"
                  >
                    {t("contact.form.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {t("contact.info.title")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {t("contact.info.phone")}
                      </p>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-600 hover:text-green-600"
                      >
                        {t("header.phone")}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {t("contact.info.whatsapp")}
                      </p>
                      <a
                        href="https://wa.me/+201011053973"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600"
                      >
                        {t("contact.info.whatsappText")}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {t("contact.info.email")}
                      </p>
                      <a
                        href="mailto:info@greenscape.com"
                        className="text-gray-600 hover:text-green-600"
                      >
                        info@greenscape.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {t("contact.info.serviceArea")}
                      </p>
                      <p className="text-gray-600">
                        {t("contact.info.serviceAreaText")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">
                  {t("contact.info.businessHours")}
                </h4>
                <div className="space-y-1 text-gray-600">
                  <p>{t("contact.info.weekdays")}</p>
                  <p>{t("contact.info.saturday")}</p>
                  <p>{t("contact.info.sunday")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
                <span className="text-2xl font-bold">
                  {t("common.brandName")}
                </span>
              </div>
              <p className="text-gray-400">{t("footer.description")}</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-green-600 transition-colors"
                  >
                    {t("header.home")}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-green-600 transition-colors"
                  >
                    {t("header.services")}
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-400 hover:text-green-600 transition-colors"
                  >
                    {t("header.portfolio")}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-green-600 transition-colors"
                  >
                    {t("header.about")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.services")}</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">{t("footer.landscapeDesign")}</li>
                <li className="text-gray-400">{t("footer.lawnCare")}</li>
                <li className="text-gray-400">{t("footer.hardscaping")}</li>
                <li className="text-gray-400">{t("footer.irrigation")}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.contact")}</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">{t("header.phone")}</li>
                <li className="text-gray-400">info@greenscape.com</li>
                <li>
                  <a
                    href="https://wa.me/+201011053973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-500 transition-colors"
                  >
                    {t("footer.whatsappUs")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+201011053973"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <PhoneCall className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;
