import PrimaryLinkButton from "./shared/primary-link-button";

export default function ContactSection() {
  return (
    <section className="bg-lightBg px-4 py-16 md:px-8 lg:px-16 xl:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row">
        <p className="gradient-text-dark text-clamp-md font-bold tracking-wider">
          We create effective solutions for your ideas
        </p>
        <PrimaryLinkButton href="/contact" variant="dark" label="Contact us" />
      </div>
    </section>
  );
}
