import Button from '../../src/components/buttons/reusable-buttons';

const TestButtons = () => {
  return (
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
      <Button variant="quad" className="w-64">
        Quad
      </Button>
      <Button variant="quadUnselected">Quad 2</Button>
      <Button variant="calendarDataSelector" className="py-9">
        calendar
      </Button>
    </>
  );
};
export default TestButtons;
