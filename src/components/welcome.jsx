import styled from 'styled-components';

const Welcome = () => (
  <Section className="flex flex-col justify-center items-center mt-40">
    <h1 className="text-4xl text-left w-full font-bold leading-relaxed">
      I’m Salim.
      <br />
      Glad to see you!
    </h1>
    <p className="text-lg text-left">
      I’m a software developer! I can help you build a product ,
      feature or website Look through some of my work and experience!
      If you like what you see and have a project you need coded, don’t hesitate to contact me.
    </p>
    <div className="w-full py-4">
      <h3 className="text-logoColor">LET’S CONNECT</h3>
      <div className="flex gap-4 my-2">
        <ion-icon size="large" name="logo-github" />
        <ion-icon size="large" name="logo-linkedin" />
        <ion-icon size="large" name="logo-twitter" />
        <ion-icon size="large" name="logo-medium" />
      </div>
    </div>
  </Section>
);

export default Welcome;

const Section = styled.section`
ion-icon {
    color: #505F79;
  }
`;
