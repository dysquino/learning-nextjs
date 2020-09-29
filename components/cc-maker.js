import styled from 'styled-components';
import { useStores } from '../hooks/cc-use-store';
import { observer } from 'mobx-react';

const Container = styled.div`
  position: fixed;
  top: 5%;
  left: 25%;
`;
const Card = styled.div`
  color: white;
  width: 100vh;
  height: fit-content;
  background: black;
  text-align: center;
`;
const Text = styled.span`
  font-family: monospace;
  font-size: xxx-large;
`;
const Type = styled.div`
  padding: 5px;
`;
const Number = styled.div`
  padding: 5px;
`;
const Expiration = styled.div`
  padding: 5px;
`;
const Owner = styled.div`
  padding: 5px;
`;

const Generate = styled.button`
  background: transparent;
  border: 2px solid black;
  padding: 0.25em 1em;
  margin: 30px auto;
  display: block;
`;

const CCMaker = observer(() => {
  const { ccStore } = useStores();
  console.log(ccStore);
  return (
    <Container>
      <Generate onClick={() => ccStore.getDetails()}>GENERATE</Generate>
      <Card>
        <Number>
          <Text>{ccStore.ccs.number}</Text>
        </Number>
        <Expiration>
          <Text>{ccStore.ccs.expiration}</Text>
        </Expiration>
        <Owner>
          <Text>{ccStore.ccs.owner}</Text>
        </Owner>
        <Type>
          <Text>{ccStore.ccs.type}</Text>
        </Type>
      </Card>
    </Container>
  );
});

export default CCMaker;
