export default function HomeNewsletter() {
  return (
  <section className="home-newsletter">
    <form action="" className="container">
      <label htmlFor="">
        Subscribe to our <span>newsletter</span>
      </label>

      <input type="email"
      placeholder="enter your email address to receive the latest newsl"
      id="newsletterEmail"
      name="newsletterEmail"
      required
      ></input>

      <button type="submit" title="Subscribe">
        Subscribe
        </button>
    </form>
  </section>
  );
}
