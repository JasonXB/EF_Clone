import React, { FormEvent, useState } from 'react';
import Button from '../buttons/reusable-buttons';

//
// this is just a starting point placeholder. Needs to be synced up to the contact@empoweredfutures.ca email
// Needs to be typescript friendly, remove any's
// Wont be upset if you delete and start over. whatever is easiest. Just repurposed from other project.
//

const FORM_ENDPOINT = ''; // TODO - fill on the later step
//https://herotofu.com/solutions/guides/react-contact-form used this for reference

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: '123',
    };
    const inputs = e.target.elements;
    const data: any = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement('input');
            el.type = 'hidden';
            el.name = key;
            // commented out only to prevent TS error. uncomment when synced up
            // el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.submit();
          throw new Error('Please finish the captcha challenge');
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  if (status) {
    return (
      <div className="mx-auto my-10 text-center w-fit">
        <div className="text-3xl font-bold text-primary-2">Thank you!</div>
        <div className="text-xl">We&apos;ll be in touch soon.</div>
      </div>
    );
  }

  return (
    <form
      className="max-w-6xl mx-auto"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="pt-0 mx-auto mb-3 w-fit">
        <Button variant="primary" type="submit">
          Send a message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
