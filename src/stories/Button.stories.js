import { Button } from "../components/Button";

const someFunction = (someValue) => {
  return `i am a ${someValue}`;
};
export default {
  title: "UI -",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "ClickME!",
};
