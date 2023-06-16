import styled from 'styled-components';

const borderRadiusValue = '0 0 0 4rem';
const Welcome = () => (
  <Section className="p-6 flex flex-col justify-center items-center pt-40 bg-white h-screen">
    <h1 className="text-4xl text-left w-full font-bold leading-relaxed">
      I’m Salim.
      <br />
      Glad to see you!
    </h1>
    <p className="text-lg text-left py-4">
      I’m a software developer! I can help you build a product ,
      feature or website Look through some of my work and experience!
      If you like what you see and have a project you need coded, don’t hesitate to contact me.
    </p>
    <div className="w-full">
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
  border-radius: ${(props) => props.borderRadius};

  ion-icon {
    color: #505F79;
  }
`;

Section.defaultProps = {
  borderRadius: borderRadiusValue,
};
