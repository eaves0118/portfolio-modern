import {
  GithubIcon,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Button from "./button";
import { Facebook } from "./common/icons";

const Contact = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Get in <span className="text-gradient">Touch</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunities
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8 bg-card p-8 rounded-lg shadow-xs">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6 justify-center">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground/50 text-[14px]">Email</h4>
                <a
                  href="mailto:hello@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  tranhieudz2024@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground/50 text-[14px]">Phone</h4>
                <a
                  href="tel:0369933655"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  0369933655
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground/50 text-[14px]">Location</h4>
                <a
                  href="mailto:hello@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Viet Nam
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-xs">
          <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
          <form action="" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Your name..."
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your email
              </label>
              <input
                type="email"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your message
              </label>
              <textarea
                type="text"
                id="message"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your message..."
              />
            </div>
            <Button
              content={"Send message"}
              icon={<Send className="w-5 h-5" />}
              className="cosmic-button border px-4 py-2 text-white rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
