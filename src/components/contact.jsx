import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForm = (e) => {
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      e.preventDefault();
      alert('Please fill in all fields.');
    }
  };

  return (
    <Section className="bg-white">
      <article className="contact p-6 bg-logoColor flex flex-col items-center pt-24 ">
        <h1 className="text-white text-4xl w-full font-bold leading-relaxed text-center max-w-lg">Contact me</h1>
        <p className="text-lg text-center py-4 text-white max-w-lg">
          If you have an application you are interested in developing,
          a feature that you need built or a project that needs coding.
          I’d love to help with it!
        </p>
      </article>
      <form
        className="flex flex-col items-center bg-logoColor p-6"
        action="https://formspree.io/f/myyangkd"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="p-4 rounded-lg my-2 border-2 border-logoColor2 tracking-wide text-logoColor2 bg-white w-full max-w-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-4 rounded-lg my-2 border-2 border-logoColor2 tracking-wide text-logoColor2 bg-white w-full max-w-lg"
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          className="p-4 rounded-lg my-2 border-2 border-logoColor2 tracking-wide text-logoColor2 bg-white w-full h-44 max-w-lg"
        />
        <Button handleClick={handleForm}>Get in touch</Button>
      </form>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
    .contact {
        border-radius: 4rem 0 0 0;
    }

    button {
        align-self: flex-start;
        @media (min-width: 555px) {
            align-self: center;
        }
    }
`;
