import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="card p-4 bg-dark text-light border-0">
      <h2 className="mb-4">Contact</h2>

      {submitted && (
        <div className="alert alert-success">
          Message sent successfully ✅
        </div>
      )}

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSekwdPvF629rDKjnB_-E6baBUkrMVw8blbROmTWLQwbEnAfQg/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={() => setSubmitted(true)}
      >
        <div className="mb-3">
          <label>Name</label>
          <input
            name="entry.296004156"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            name="entry.1385477907"
            type="email"
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea
            name="entry.1034402011"
            className="form-control"
            rows="4"
            required
          />
        </div>

        <input type="hidden" name="submit" value="Submit" />
        <button type="submit" className="btn btn-info text-dark">
          Send Message
        </button>
      </form>

      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        title="hidden_iframe"
      />
    </section>
  );
}
