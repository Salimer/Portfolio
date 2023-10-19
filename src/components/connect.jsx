import styled from 'styled-components';

const Connect = () => (
  <Div className="w-full">
    <h3 className="text-logoColor">LET’S CONNECT</h3>
    <div className="flex gap-4 my-2">
      <a href="https://github.com/Salimer" target="_blank" rel="noreferrer">
        <ion-icon size="large" name="logo-github" />
      </a>
      <a href="https://www.linkedin.com/in/sbamahfoodh/" target="_blank" rel="noreferrer">
        <ion-icon size="large" name="logo-linkedin" />
      </a>
      <a href="https://www.youtube.com/channel/UCGKq9eJQY2qTKRfDDbMOUyA" target="_blank" rel="noreferrer">
        <ion-icon size="large" name="logo-youtube" />
      </a>
      <a href="https://medium.com/@S.bamahfoodh" target="_blank" rel="noreferrer">
        <ion-icon size="large" name="logo-medium" />
      </a>
    </div>
  </Div>
);

export default Connect;

const Div = styled.div`
ion-icon {
    color: #505F79;
    z-index: 0;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #6936f5;
    }
  }
`;
