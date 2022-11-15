import Button from '../../src/components/buttons/reusable-buttons';

const TestButtons = () => {
  return (
    <>
      <Button icon="facebook" variant="iconOnly"></Button>
      <Button variant="iconOnly">X</Button>
      <Button>Default</Button>
      <Button variant="primary">primary</Button>
      <Button variant="primary" disabled>
        primary
      </Button>

      <Button variant="secondary">secondary</Button>
      <Button variant="secondary" disabled>
        secondary
      </Button>
      <Button variant="tertiary">tertiary</Button>
      <Button variant="tertiary" disabled>
        tertiary
      </Button>

      <Button variant="simple">simple</Button>
      <Button variant="simple" icon="google">
        simple with icon
      </Button>
      <Button variant="quad">Quad</Button>

      <Button variant="calendarDataSelector">17</Button>
    </>
  );
};
export default TestButtons;
