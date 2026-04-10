function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>

      <form>
        <input placeholder="Name" /><br /><br />
        <input placeholder="Email" /><br /><br />
        <textarea placeholder="Message"></textarea><br /><br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;