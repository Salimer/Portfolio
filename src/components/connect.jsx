import styled from 'styled-components';

const Connect = () => (
  <Div className="w-full">
    <h3 className="text-logoColor">LET’S CONNECT</h3>
    <div className="flex gap-4 my-2">
      <ion-icon size="large" name="logo-github" />
      <ion-icon size="large" name="logo-linkedin" />
      <ion-icon size="large" name="logo-twitter" />
      <ion-icon size="large" name="logo-medium" />
    </div>
  </Div>
);

export default Connect;

const Div = styled.div`
ion-icon {
    color: #505F79;
    z-index: 0;
  }
`;
