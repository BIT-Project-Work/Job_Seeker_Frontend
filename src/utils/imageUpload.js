import { useAvatarUploadMutation } from "../store/slices/authApiSlice";

export const useUploadImage = () => {
    const [avatarUpload] = useAvatarUploadMutation();

    const uploadImage = async (imageFile) => {
        const formData = new FormData();
        formData.append("file", imageFile);

        try {
            const response = await avatarUpload(formData).unwrap();
            return response;
        } catch (error) {
            console.error("Error uploading the image:", error);
            throw error;
        }
    };

    return { uploadImage };
};
