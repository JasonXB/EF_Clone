import { NextPage } from 'next';
import Button from '../../src/components/buttons/reusuable-buttons';

const ReusuableButtonExample: NextPage = () => (
  <>
    <Button icon="facebook" variant="iconOnly"></Button>
    <Button variant="iconOnly">X</Button>
    <Button>Default</Button>
    <Button variant="primary">primary</Button>
    <Button variant="primaryUnselected">primary unselected</Button>
    <Button variant="secondary">secondary</Button>
    <Button variant="secondaryUnselected">secondary unselected</Button>
    <Button variant="tertiary">tertiary</Button>
    <Button variant="tertiary" icon="google">
      tertiary with icon
    </Button>
  </>
);

export default ReusuableButtonExample;
