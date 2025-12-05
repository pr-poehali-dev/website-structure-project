import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const ContactForms = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/42f7da92-a097-4604-900a-7d024038e321/files/78e39bcc-222c-4149-8546-6043d8283444.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Richiesta di servizio
            </h2>
            <p className="text-xl text-gray-600">
              Lascia una richiesta e ti contatteremo
            </p>
          </div>

          <Card className="shadow-2xl animate-scale-in backdrop-blur-sm bg-white/95">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>Azienda *</Label>
                    <Input placeholder="ООО Производство" className="mt-2" />
                  </div>
                  <div>
                    <Label>Persona di contatto *</Label>
                    <Input placeholder="Иван Иванов" className="mt-2" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>Telefono *</Label>
                    <Input placeholder="+7 (999) 123-45-67" className="mt-2" />
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input type="email" placeholder="email@company.ru" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label>Tipo di servizio *</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Seleziona servizio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="repair">Riparazione</SelectItem>
                      <SelectItem value="maintenance">Manutenzione</SelectItem>
                      <SelectItem value="parts">Ricambi</SelectItem>
                      <SelectItem value="technician">Chiamata tecnico</SelectItem>
                      <SelectItem value="consulting">Consulenza</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Messaggio *</Label>
                  <Textarea 
                    placeholder="Descrivi la tua richiesta..." 
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Allegare foto/video</Label>
                  <Input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-primary file:text-white hover:file:bg-primary/90"
                  />
                  {selectedFiles.length > 0 && (
                    <div className="mt-2 text-sm text-gray-600">
                      File selezionati: {selectedFiles.length}
                    </div>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Inviare una richiesta
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in bg-white/90 backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2 text-lg">Servizio 24/7</h3>
              <a href="tel:+390123456789" className="text-primary hover:underline text-lg">
                +39 012 345 6789
              </a>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in bg-white/90 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2 text-lg">Email</h3>
              <a href="mailto:info@neldenindustry.it" className="text-primary hover:underline">
                info@neldenindustry.it
              </a>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in bg-white/90 backdrop-blur-sm" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2 text-lg">Indirizzo</h3>
              <p className="text-gray-600">Milano, Italia</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;
