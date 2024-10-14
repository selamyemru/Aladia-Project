import InputField from "../../components/atoms/input.vue";


const meta = {
  title: "Atoms/InputField",
  component: InputField,
  argTypes: {
    modelValue: {
      control: { type: "text" },
      description: "The current value of the input field.",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text for the input field.",
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email"],
      description: "The type of the input field.",
    },
    icon: {
      control: { type: "array" },
      description: "Font Awesome icon array to display in the input field.",
    },
    label: {
      control: { type: "text" },
      description: "Label for the input field.",
    },
    inputId: {
      control: { type: "text" },
      description: "Unique ID for the input field.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the input field is disabled.",
    },
    isValid: {
      control: { type: "boolean" },
      description: "Controls whether the input field is considered valid.",
    },
    errorMessage: {
      control: { type: "text" },
      description: "Error message displayed when the input is invalid.",
    },
    helpText: {
      control: { type: "text" },
      description: "Optional help text below the input field.",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size variant of the input field.",
    },
    floating: {
      control: { type: "boolean" },
      description: "Enable floating label for the input field.",
    },
    onClick: {
      action: "clicked",
    },
  },
};

export default meta;

export const Default = {
  args: {
    modelValue: "",
    placeholder: "Enter text",
    type: "text",
    size: "md",
    label: "Default Input",
    isValid: true,
    helpText: "",
    floating: false,
  },
};

export const WithIcon = {
  args: {
    modelValue: "",
    placeholder: "Enter your email",
    type: "email",
    size: "md",
    label: "Email",
    icon: ["fas", "envelope"],
    isValid: true,
    helpText: "We will never share your email.",
    floating: false,
  },
};

export const FloatingLabel = {
  args: {
    modelValue: "",
    placeholder: " ",
    type: "text",
    size: "md",
    label: "Your Name",
    isValid: true,
    helpText: "Enter your full name.",
    floating: true,
  },
};

export const PasswordInput = {
  args: {
    modelValue: "",
    placeholder: "Enter your password",
    type: "password",
    size: "md",
    label: "Password",
    isValid: true,
    helpText: "",
    floating: false,
  },
};

export const InvalidInput = {
  args: {
    modelValue: "",
    placeholder: "Enter your username",
    type: "text",
    size: "md",
    label: "Username",
    isValid: false,
    errorMessage: "Username is required.",
    helpText: "",
    floating: false,
  },
};

export const WithHelpText = {
  args: {
    modelValue: "",
    placeholder: "Enter your phone number",
    type: "text",
    size: "md",
    label: "Phone Number",
    isValid: true,
    helpText: "Include your country code.",
    floating: false,
  },
};

export const DifferentSizes = {
  args: {
    modelValue: "",
    placeholder: "Enter text",
    type: "text",
    label: "Size Variant",
    isValid: true,
    size: "lg",
    helpText: "This is a large-sized input.",
    floating: false,
  },
};

export const Disabled = {
  args: {
    modelValue: "",
    placeholder: "This field is disabled",
    type: "text",
    label: "Disabled Input",
    isValid: true,
    disabled: true,
    helpText: "",
    floating: false,
  },
};
