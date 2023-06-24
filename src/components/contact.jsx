import styled from 'styled-components';
import Button from './Button';

const Contact = () => (
  <Section className="bg-white">
    <article className="contact p-6 bg-logoColor flex flex-col items-center pt-24">
      <h1 className="text-white text-4xl w-full font-bold leading-relaxed text-center">Contact me</h1>
      <p className="text-lg text-center py-4 text-white">
        If you have an application you are interested in developing,
        a feature that you need built or a project that needs coding.
        I’d love to help with it!
      </p>
    </article>
    <form className="flex flex-col items-center bg-logoColor p-6">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="p-4 rounded-lg my-2 border-2 border-logoColor2 tracking-wide text-logoColor2 bg-white w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-4 rounded-lg my-2 border-2 border-logoColor2 tracking-wide text-logoColor2 bg-white w-full"
      />
      <textarea
        name="message"
        placeholder="Message"
        className="p-4 rounded-lg my-2 border-2 border-logoColor2 tracking-wide text-logoColor2 bg-white w-full h-44"
      />
      <Button>Get in touch</Button>
    </form>
  </Section>
);

export default Contact;

const Section = styled.section`
    .contact {
        border-radius: 4rem 0 0 0;
    }

    button {
        align-self: flex-start;
    }
`;
