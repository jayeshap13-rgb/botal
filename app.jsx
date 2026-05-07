const { useEffect, useMemo, useState } = React;

// EDIT: Brand links and contact details.
const WHATSAPP_NUMBER = "919999999999";
const INSTAGRAM_URL = "https://instagram.com/botal";
const CONTACT_EMAIL = "hello@botal.in";
const LOCATION = "Nagpur, India";

// EDIT: Logo path. Replace this file to update the brand mark throughout the website.
const LOGO_SRC = "./assets/botal-logo.jpg";

const categories = [
  "All",
  "Bottle Lamps",
  "Soap Dispensers",
  "Planters",
  "Candle Holders",
  "Decor Pieces",
  "Gift Hampers",
  "Custom Products",
];

// EDIT: Product details, prices, and product images. Add imageUrl to any product to replace the abstract bottle artwork.
const products = [
  {
    name: "Amber Bottle Lamp",
    category: "Bottle Lamps",
    price: "From Rs. 1,499",
    description: "Warm ambient lighting built from reclaimed glass and hand-finished hardware.",
  },
  {
    name: "Olive Soap Pump",
    category: "Soap Dispensers",
    price: "From Rs. 699",
    description: "A refined counter piece with reusable pump fittings and polished bottle edges.",
  },
  {
    name: "Window Planter Trio",
    category: "Planters",
    price: "From Rs. 899",
    description: "Cut-glass planters for herbs, succulents, and minimal green corners.",
  },
  {
    name: "Glow Candle Set",
    category: "Candle Holders",
    price: "From Rs. 799",
    description: "Soft-edged glass candle holders for dining tables, shelves, and gifting.",
  },
  {
    name: "Bottle Neck Vase",
    category: "Decor Pieces",
    price: "From Rs. 599",
    description: "Sculptural tabletop decor made from selected discarded bottle forms.",
  },
  {
    name: "Sustainable Gift Hamper",
    category: "Gift Hampers",
    price: "From Rs. 1,999",
    description: "Curated eco-gifts with lamps, planters, candles, tags, and custom packaging.",
  },
  {
    name: "Cafe Counter Installation",
    category: "Custom Products",
    price: "Custom quote",
    description: "Bespoke bottle lighting, display corners, and decor concepts for spaces.",
  },
];

const gallery = [
  "Discarded bottle to bedside lamp",
  "Hand cutting and edge polishing",
  "Cafe table planter styling",
  "Custom hamper layout",
  "Before and after transformation",
  "Warm lamp lifestyle corner",
];

const testimonials = [
  {
    quote: "The lamp feels handcrafted and premium, not like a recycled compromise. It became the most asked-about piece in our studio.",
    name: "Aarohi Shah",
    role: "Interior stylist",
  },
  {
    quote: "Botal created a display corner for our cafe that tells a sustainability story without looking rustic or busy.",
    name: "Kunal Mehta",
    role: "Cafe owner",
  },
  {
    quote: "Their gift hampers are thoughtful, beautiful, and refreshingly different from the usual corporate gifting options.",
    name: "Neha Rao",
    role: "Founder, Studio Leaf",
  },
];

const Icon = ({ children }) => (
  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-botalYellow text-navyInk shadow-yellow">
    {children}
  </span>
);

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Products", "Custom", "Collaborate", "Gallery", "Contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/[0.82] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Botal home">
          <img src={LOGO_SRC} alt="Botal logo" className="h-12 w-12 rounded-full object-cover shadow-sm" />
          <span className="text-xl font-black tracking-tight text-navyInk">Botal</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-bold text-ink/72 transition hover:text-deepOlive">
              {link}
            </a>
          ))}
        </div>
        <a
          href={whatsappUrl("Hi Botal, I want to inquire about your upcycled bottle products.")}
          target="_blank"
          className="hidden rounded-full bg-navyInk px-5 py-3 text-sm font-extrabold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-deepOlive md:inline-flex"
        >
          WhatsApp Inquiry
        </a>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span className="h-0.5 w-5 bg-ink shadow-[0_6px_0_#222,-0_-6px_0_#222]" />
        </button>
      </nav>
      {open && (
        <div className="border-t border-black/5 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-bold text-ink/75 hover:bg-cream">
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-field relative min-h-screen overflow-hidden pt-28">
      <div className="bottle-mark right-4 top-36 hidden lg:block" style={{ "--rotate": "14deg" }} />
      <div className="bottle-mark bottom-16 left-8 hidden opacity-40 xl:block" style={{ "--rotate": "-18deg" }} />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:pb-24">
        <div className="reveal">
          <div className="section-kicker">Handmade in Nagpur</div>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-navyInk sm:text-6xl lg:text-7xl">
            Empty Bottles, Reimagined Beautifully.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
            Botal transforms discarded glass bottles into handcrafted lamps, dispensers, decor pieces, planters and sustainable gifting products.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="rounded-full bg-botalYellow px-7 py-4 text-center font-black text-navyInk shadow-yellow transition hover:-translate-y-1">
              Explore Products
            </a>
            <a href="#custom" className="rounded-full border border-deepOlive/30 bg-white px-7 py-4 text-center font-black text-deepOlive shadow-sm transition hover:-translate-y-1 hover:border-deepOlive">
              Custom Orders
            </a>
            <a href={whatsappUrl("Hi Botal, I want to discuss an upcycled bottle product.")} target="_blank" className="rounded-full bg-navyInk px-7 py-4 text-center font-black text-white shadow-premium transition hover:-translate-y-1">
              WhatsApp Inquiry
            </a>
          </div>
        </div>
        <div className="reveal relative">
          <div className="organic-curve absolute -inset-6 bg-botalYellow/80 blur-2xl" />
          <div className="glass-panel relative mx-auto max-w-md rounded-[2rem] p-5">
            <img src={LOGO_SRC} alt="Botal bottle silhouette logo" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
            <div className="absolute -bottom-8 -left-4 rounded-3xl bg-white p-5 shadow-premium sm:-left-10">
              <p className="text-3xl font-black text-deepOlive">7+</p>
              <p className="text-sm font-bold text-ink/60">Product lines from rescued glass</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const steps = [
    ["Collect", "Discarded bottles are sourced from homes, cafes, and event waste."],
    ["Craft", "Each bottle is cut, sanded, cleaned, and finished by hand."],
    ["Reimagine", "The final piece becomes lighting, decor, gifting, or a custom installation."],
  ];

  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="section-kicker">The Botal Story</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-navyInk sm:text-5xl">Waste glass, treated like a design material.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-ink/72">
            <p>Botal is built around a simple creative belief: a bottle does not become waste when it is empty. It becomes raw material for something more personal, useful, and beautiful.</p>
            <p>Every piece carries visible craft and a sustainability mission, with finishes designed to feel premium in modern homes, cafes, stores, and studio spaces.</p>
          </div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map(([title, text], index) => (
            <article key={title} className="reveal rounded-[1.5rem] border border-black/5 bg-cream p-7 shadow-sm">
              <Icon>{index + 1}</Icon>
              <h3 className="mt-6 text-2xl font-black text-navyInk">{title}</h3>
              <p className="mt-3 leading-7 text-ink/68">{text}</p>
            </article>
          ))}
        </div>
        <div className="reveal mt-8 rounded-[1.75rem] bg-navyInk p-7 text-white shadow-premium md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-botalYellow">Before Bottle</p>
              <p className="mt-3 text-2xl font-black">Discarded, ordinary, overlooked.</p>
            </div>
              <div className="text-4xl font-black text-botalYellow">-&gt;</div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-botalYellow">After Product</p>
              <p className="mt-3 text-2xl font-black">Handcrafted, useful, display-worthy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = active === "All" || product.category === active;
      const query = `${product.name} ${product.category} ${product.description}`.toLowerCase();
      return categoryMatch && query.includes(search.toLowerCase());
    });
  }, [active, search]);

  const addToCart = (product) => {
    setCart((items) => (items.some((item) => item.name === product.name) ? items : [...items, product]));
  };

  const inquiryMessage = cart.length
    ? `Hi Botal, I want to inquire about: ${cart.map((item) => item.name).join(", ")}.`
    : "Hi Botal, I want to explore your upcycled bottle products.";

  return (
    <section id="products" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-kicker">Product Studio</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-navyInk sm:text-5xl">Small-batch pieces with a polished finish.</h2>
          </div>
          <div className="glass-panel rounded-2xl p-3">
            <p className="text-sm font-bold text-ink/65">{cart.length} item{cart.length === 1 ? "" : "s"} in inquiry cart</p>
            <a href={whatsappUrl(inquiryMessage)} target="_blank" className="mt-2 inline-flex rounded-full bg-deepOlive px-5 py-3 text-sm font-black text-white">
              Send Inquiry
            </a>
          </div>
        </div>
        <div className="reveal mt-10 grid gap-4 lg:grid-cols-[1fr_18rem]">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`shrink-0 rounded-full border px-4 py-3 text-sm font-black transition ${
                  active === category ? "border-navyInk bg-navyInk text-white" : "border-black/10 bg-white text-ink/70 hover:border-olive"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products"
            className="rounded-full border border-black/10 bg-white px-5 py-3 font-semibold outline-none transition focus:border-olive focus:ring-4 focus:ring-olive/10"
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <article key={product.name} className="product-card reveal overflow-hidden rounded-[1.5rem] border border-black/5 bg-white shadow-sm">
              {product.imageUrl ? (
                <img src={product.imageUrl} alt={product.name} className="h-60 w-full object-cover" />
              ) : (
                <div className="product-art" aria-label={`${product.name} abstract bottle artwork`} />
              )}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-deepOlive">{product.category}</p>
                    <h3 className="mt-2 text-2xl font-black text-navyInk">{product.name}</h3>
                  </div>
                  <p className="rounded-full bg-botalYellow px-3 py-2 text-sm font-black text-navyInk">{product.price}</p>
                </div>
                <p className="mt-4 leading-7 text-ink/68">{product.description}</p>
                <div className="mt-6 flex gap-3">
                  <button onClick={() => addToCart(product)} className="flex-1 rounded-full border border-black/10 px-4 py-3 font-black text-ink transition hover:border-olive hover:text-deepOlive">
                    Add
                  </button>
                  <a href={whatsappUrl(`Hi Botal, I want to inquire about ${product.name}.`)} target="_blank" className="flex-1 rounded-full bg-navyInk px-4 py-3 text-center font-black text-white transition hover:bg-deepOlive">
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomOrder() {
  const [form, setForm] = useState({ name: "", phone: "", requirement: "", quantity: "" });
  const message = `Hi Botal, I want a custom order.
Name: ${form.name}
Phone: ${form.phone}
Requirement: ${form.requirement}
Quantity: ${form.quantity}`;

  return (
    <section id="custom" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="reveal">
          <span className="section-kicker">Custom Orders</span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-navyInk sm:text-5xl">Bring a bottle, a space, or an idea. Botal will shape it.</h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">Use this form for custom lamps, event decor, brand gifting, cafe installations, and reference-led product requests.</p>
        </div>
        <form className="reveal glass-panel grid gap-4 rounded-[1.75rem] p-5 sm:p-7" onSubmit={(event) => event.preventDefault()}>
          {[
            ["name", "Name"],
            ["phone", "Phone Number"],
            ["requirement", "Product Requirement"],
            ["quantity", "Quantity"],
          ].map(([key, label]) => (
            <label key={key} className="grid gap-2 text-sm font-black text-ink/70">
              {label}
              {key === "requirement" ? (
                <textarea rows="4" value={form[key]} onChange={(event) => setForm({ ...form, [key]: event.target.value })} className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-olive focus:ring-4 focus:ring-olive/10" />
              ) : (
                <input value={form[key]} onChange={(event) => setForm({ ...form, [key]: event.target.value })} className="rounded-full border border-black/10 bg-white px-4 py-3 outline-none focus:border-olive focus:ring-4 focus:ring-olive/10" />
              )}
            </label>
          ))}
          <label className="grid gap-2 text-sm font-black text-ink/70">
            Upload Reference Image
            <input type="file" accept="image/*" className="rounded-full border border-dashed border-olive/40 bg-cream px-4 py-3 text-sm" />
          </label>
          <a href={whatsappUrl(message)} target="_blank" className="rounded-full bg-botalYellow px-6 py-4 text-center font-black text-navyInk shadow-yellow transition hover:-translate-y-1">
            Submit on WhatsApp
          </a>
        </form>
      </div>
    </section>
  );
}

function Collaborate() {
  const partners = ["Architects", "Interior Designers", "Decor Stores", "Cafes", "Sustainable Stores"];
  const offers = ["Display corners", "Profit-sharing", "Bulk orders", "Custom installations"];

  return (
    <section id="collaborate" className="bg-navyInk py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-3xl">
          <span className="section-kicker border-white/10 bg-white/10 text-botalYellow">Retail and Collaboration</span>
          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">A sustainable product line for spaces that care about detail.</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="reveal rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-7">
            <h3 className="text-2xl font-black text-botalYellow">Built for</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {partners.map((item) => (
                <span key={item} className="rounded-full bg-white px-4 py-3 font-black text-navyInk">{item}</span>
              ))}
            </div>
          </div>
          <div className="reveal rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-7">
            <h3 className="text-2xl font-black text-botalYellow">Collaboration models</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {offers.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 p-4 font-bold">{item}</div>
              ))}
            </div>
          </div>
        </div>
        <a href={whatsappUrl("Hi Botal, I want to collaborate with Botal for retail, bulk orders, or installations.")} target="_blank" className="reveal mt-9 inline-flex rounded-full bg-botalYellow px-7 py-4 font-black text-navyInk shadow-yellow">
          Collaborate With Botal
        </a>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">Gallery</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-navyInk sm:text-5xl">Before, process, product, place.</h2>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" className="font-black text-deepOlive underline decoration-botalYellow decoration-4 underline-offset-8">
            Instagram
          </a>
        </div>
        <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-3">
          {gallery.map((item, index) => (
            <div key={item} className={`gallery-tile reveal flex items-end rounded-[1.5rem] p-5 shadow-sm ${index === 0 || index === 5 ? "md:row-span-2" : ""}`}>
              <p className="max-w-52 text-2xl font-black leading-tight">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-3xl">
          <span className="section-kicker">Testimonials</span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-navyInk sm:text-5xl">Loved by people who notice craft.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="reveal rounded-[1.5rem] border border-black/5 bg-white p-7 shadow-sm">
              <div className="h-2 w-16 rounded-full bg-botalYellow" />
              <p className="mt-6 leading-8 text-ink/72">"{testimonial.quote}"</p>
              <h3 className="mt-6 font-black text-navyInk">{testimonial.name}</h3>
              <p className="text-sm font-bold text-deepOlive">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="reveal">
          <span className="section-kicker">Contact</span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-navyInk sm:text-5xl">Start with a bottle. Leave with a story.</h2>
        </div>
        <div className="reveal grid gap-4">
          <a href={whatsappUrl("Hi Botal, I want to connect.")} target="_blank" className="rounded-[1.25rem] bg-botalYellow p-6 text-2xl font-black text-navyInk shadow-yellow">WhatsApp Botal</a>
          <a href={INSTAGRAM_URL} target="_blank" className="rounded-[1.25rem] border border-black/10 bg-cream p-6 text-xl font-black text-deepOlive">Instagram: @botal</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-[1.25rem] border border-black/10 bg-white p-6 text-xl font-black text-ink">Email: {CONTACT_EMAIL}</a>
          <p className="rounded-[1.25rem] border border-black/10 bg-white p-6 text-xl font-black text-ink">Location: {LOCATION}</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src={LOGO_SRC} alt="Botal logo" className="h-11 w-11 rounded-full object-cover" />
          <div>
            <p className="text-lg font-black text-navyInk">Botal</p>
            <p className="text-sm font-bold text-ink/60">Discarded glass, designed again.</p>
          </div>
        </a>
        <div className="flex flex-wrap gap-4 text-sm font-black text-ink/65">
          {["About", "Products", "Custom", "Gallery", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-deepOlive">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <CustomOrder />
        <Collaborate />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
