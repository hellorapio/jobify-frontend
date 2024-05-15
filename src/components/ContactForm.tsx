import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactForm() {
  return (
    <main>
      <div className="h-[calc(100vh-64px)]">
        <div className="container flex flex-col items-center h-full mt-16">
          <h1 className="text-3xl md:text-4xl md:w-1/2 lg:text-5xl text-center font-bold">
            Leave us a <span className="text-primary">Message</span>
          </h1>
          <p className="text-muted-foreground my-6 text-center md:w-1/2 ">
            We're here to assist you! Whether you have questions, feedback,
            or just want to say hello, feel free to reach out to us using
            the form below. Your messages are important to us, and we'll do
            our best to respond promptly. Thank you for connecting with us!
          </p>
          <form className="w-full sm:w-1/2 flex flex-col gap-8">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div>
              <Label htmlFor="Email">Email</Label>
              <Input id="Email" placeholder="Enter your Email" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" />
            </div>
          </form>
          <Button className="mt-8">Send Message</Button>
        </div>
      </div>
    </main>
  );
}
