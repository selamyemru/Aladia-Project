import Button from "../../components/atoms/button.vue";

const meta = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Button type that controls styling (primary or secondary)",
    },
    variant: {
      control: { type: "select" },
      options: ["solid", "outline", "ghost"],
      description: "Button variant that determines the style (solid, outline, or ghost)",
    },
    severity: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "info", "warning", "help", "danger"],
      description: "Severity level for the button styling",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Button size (small, medium, large)",
    },
    rounded: {
      control: { type: "boolean" },
      description: "Determines whether the button is fully rounded",
    },
    onClick: {
      action: "clicked",
      description: "Click event handler for the button",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A button component with dynamic styles based on various props like 'type', 'variant', 'severity', and 'size'.",
      },
    },
  },
};

export default meta;




// Button.stories.js



const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">{{ args.label }}</Button>',
});



export const SuccessSolid = Template.bind({});
SuccessSolid.args = {
  label: 'Success Solid',
  severity: 'success',
  variant: 'solid',
};

export const InfoSolid = Template.bind({});
InfoSolid.args = {
  label: 'Info Solid',
  severity: 'info',
  variant: 'solid',
};

export const WarningSolid = Template.bind({});
WarningSolid.args = {
  label: 'Warning Solid',
  severity: 'warning',
  variant: 'solid',
};

export const HelpSolid = Template.bind({});
HelpSolid.args = {
  label: 'Help Solid',
  severity: 'help',
  variant: 'solid',
};

export const DangerSolid = Template.bind({});
DangerSolid.args = {
  label: 'Danger Solid',
  severity: 'danger',
  variant: 'solid',
};

// Outline Variants
export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  label: 'Primary Outline',
  severity: 'primary',
  variant: 'outline',
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  label: 'Secondary Outline',
  severity: 'secondary',
  variant: 'outline',
};

export const SuccessOutline = Template.bind({});
SuccessOutline.args = {
  label: 'Success Outline',
  severity: 'success',
  variant: 'outline',
};

export const InfoOutline = Template.bind({});
InfoOutline.args = {
  label: 'Info Outline',
  severity: 'info',
  variant: 'outline',
};

export const WarningOutline = Template.bind({});
WarningOutline.args = {
  label: 'Warning Outline',
  severity: 'warning',
  variant: 'outline',
};

export const HelpOutline = Template.bind({});
HelpOutline.args = {
  label: 'Help Outline',
  severity: 'help',
  variant: 'outline',
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
  label: 'Danger Outline',
  severity: 'danger',
  variant: 'outline',
};

// Ghost Variants
export const PrimaryGhost = Template.bind({});
PrimaryGhost.args = {
  label: 'Primary Ghost',
  severity: 'primary',
  variant: 'ghost',
};

export const SecondaryGhost = Template.bind({});
SecondaryGhost.args = {
  label: 'Secondary Ghost',
  severity: 'secondary',
  variant: 'ghost',
};

export const SuccessGhost = Template.bind({});
SuccessGhost.args = {
  label: 'Success Ghost',
  severity: 'success',
  variant: 'ghost',
};

export const InfoGhost = Template.bind({});
InfoGhost.args = {
  label: 'Info Ghost',
  severity: 'info',
  variant: 'ghost',
};

export const WarningGhost = Template.bind({});
WarningGhost.args = {
  label: 'Warning Ghost',
  severity: 'warning',
  variant: 'ghost',
};

export const HelpGhost = Template.bind({});
HelpGhost.args = {
  label: 'Help Ghost',
  severity: 'help',
  variant: 'ghost',
};

export const DangerGhost = Template.bind({});
DangerGhost.args = {
  label: 'Danger Ghost',
  severity: 'danger',
  variant: 'ghost',
};

// Size Variants
export const SmallSolid = Template.bind({});
SmallSolid.args = {
  label: 'Small Solid',
  severity: 'primary',
  variant: 'solid',
  size: 'sm',
};

export const MediumSolid = Template.bind({});
MediumSolid.args = {
  label: 'Medium Solid',
  severity: 'primary',
  variant: 'solid',
  size: 'md',
};

export const LargeSolid = Template.bind({});
LargeSolid.args = {
  label: 'Large Solid',
  severity: 'primary',
  variant: 'solid',
  size: 'lg',
};
