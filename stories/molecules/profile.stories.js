import ProfileUpload from "../../components/molecules/profile-upload.vue";
import { ref } from "vue";

const meta = {
  title: "molecules/ProfileUpload",
  component: ProfileUpload,
  parameters: {
    docs: {
      description: {
        component:
          "A component that allows users to upload a profile picture, displaying a default image when no file is selected.",
      },
    },
  },
};

export default meta;

export const Default = {
  render: () => ({
    components: { ProfileUpload },
    setup() {
      const selectedFile = ref("");

      const handleUpdate = (file) => {
        const fileUrl = URL.createObjectURL(file);
        selectedFile.value = fileUrl;
        alert(`File selected: ${file.name}`);
      };

      return { selectedFile, handleUpdate };
    },
    template: `
      <div class="p-4 bg-gray-800 text-white">
        <ProfileUpload
          :modelValue="selectedFile.value"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: "Default ProfileUpload component with the Aladia logo.",
    },
  },
};

export const PreselectedImage = {
  render: () => ({
    components: { ProfileUpload },
    setup() {
      const selectedFile = (ref < File) | (null > null);

      const imageUrl =
        "https://via.placeholder.com/80/FF0000/FFFFFF?text=Preselected";
      const fetchImage = async () => {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], "preselected-image.png", {
          type: blob.type,
        });
        selectedFile.value = file;
      };
      fetchImage();

      const handleUpdate = (file) => {
        selectedFile.value = file;
        alert(`File selected: ${file.name}`);
      };

      return { selectedFile, handleUpdate };
    },
    template: `
      <div class="p-4 bg-gray-800 text-white">
        <ProfileUpload
          :model-value="selectedFile"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
  parameters: {
    docs: {
      storyDescription:
        "ProfileUpload component with a pre-selected image file.",
    },
  },
};
