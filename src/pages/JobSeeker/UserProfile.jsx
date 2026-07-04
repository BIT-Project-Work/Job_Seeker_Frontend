import { useEffect, useState } from "react"
import { Save, X, Trash2 } from 'lucide-react'
import { useAuth } from "../../context/useAuth"
import toast from "react-hot-toast"
import Navbar from "../../components/layout/Navbar"
import { Link } from "react-router-dom"
import { useDeleteResumeMutation, useUpdateProfileMutation } from "../../store/slices/userSlice"
import { useUploadImage } from "../../utils/imageUpload"
import SelectField from "../../components/Input/SelectField"
import MultiSelectField from '../../components/Input/MultiSelectField'
import { CATEGORIES, SKILLS } from "../../utils/data"
import { ALLOWED_RESUME_TYPES, MAX_RESUME_SIZE } from "../../utils/helper"

const UserProfile = () => {

    const DEFAULT_AVATAR = "/avatar-placeholder.png"

    const { user, updateUser } = useAuth();

    const [profileData, setProfileData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        preferredCategory: user?.preferredCategory || "",
        preferredLocation: user?.preferredLocation || "",
        experience: user?.experience || "",
        skills: user?.skills || [],
        avatar: user?.avatar || null,
        resume: user?.resume || null,
    });

    const [formData, setFormData] = useState({ ...profileData })
    const [uploading, setUploading] = useState({ avatar: false, logo: false })
    const [saving, setSaving] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }))
    }

    const { uploadImage } = useUploadImage();

    //! Avatar Handler 
    const handleImageUpload = async (file, type) => {
        setUploading((prev) => ({ ...prev, [type]: true }));

        try {
            const res = await uploadImage(file);

            const imageUrl =
                res?.imageUrl ||
                res?.data?.imageUrl ||
                "";

            if (!imageUrl) {
                throw new Error("Image URL not returned");
            }

            handleInputChange(type, imageUrl);
        } catch (error) {
            toast.error(error?.data?.message || error?.message || "Image upload failed.");
            console.error("Image upload failed:", error);
        } finally {
            setUploading((prev) => ({ ...prev, [type]: false }));
        }
    };

    const handleImageChange = async (e, type) => {
        const file = e.target.files[0];

        if (!file) return;

        const previousImage = formData[type];

        const preview = URL.createObjectURL(file);
        handleInputChange(type, preview);

        try {
            await handleImageUpload(file, type);
        } catch {
            handleInputChange(type, previousImage);
        } finally {
            URL.revokeObjectURL(preview);
            e.target.value = "";
        }
    };

    const [updateProfile] = useUpdateProfileMutation();

    const handleSave = async () => {
        setSaving(true);

        try {
            const res = await updateProfile(formData).unwrap();

            toast.success(res?.message || "Profile Details Updated Successfully!!");
            setProfileData({ ...formData })
            setFormData(formData);
            // updateUser(formData);
        } catch (error) {
            toast.error(error?.data?.message || "Update failed");
        } finally {
            setSaving(false);
        }
    }

    const handleCancel = () => {
        setFormData({ ...profileData })
    }

    //! Resume Handler
    const handleResumeChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // validation: type
        if (!ALLOWED_RESUME_TYPES.includes(file.type)) {
            toast.error("Only PDF, DOC, DOCX files are allowed");
            e.target.value = "";
            return;
        }

        // validation: size
        if (file.size > MAX_RESUME_SIZE) {
            toast.error("File size must be less than 2MB");
            e.target.value = "";
            return;
        }

        try {
            setUploading((prev) => ({ ...prev, resume: true }));

            const res = await uploadImage(file);

            const url =
                res?.imageUrl ||
                res?.data?.imageUrl ||
                "";

            if (!url) throw new Error("Upload failed");

            handleInputChange("resume", url);

            toast.success("Resume uploaded successfully");
        } catch (err) {
            toast.error(
                err?.data?.message ||
                err?.message ||
                "Resume upload failed"
            );
        } finally {
            setUploading((prev) => ({ ...prev, resume: false }));
            e.target.value = "";
        }
    };

    const handleResumeDrop = async (e) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];
        if (!file) return;

        await handleResumeFile(file);
    };

    const handleResumeFile = async (file) => {
        if (!ALLOWED_RESUME_TYPES.includes(file.type)) {
            toast.error("Invalid file type");
            return;
        }

        if (file.size > MAX_RESUME_SIZE) {
            toast.error("Max size is 5MB");
            return;
        }

        const res = await uploadImage(file);

        const url = res?.imageUrl || res?.data?.imageUrl;

        handleInputChange("resume", url);
    };

    const [deleteResume] = useDeleteResumeMutation()

    const DeleteResume = async () => {
        setSaving(true);

        console.log("Deleting resume:", {
            user: user?.resume,
            profileData: profileData.resume,
            formData: formData.resume,
        });
        try {
            await deleteResume({
                resumeUrl: profileData.resume
            }).unwrap();

            toast.success("Resume Deleted Successfully!");

            setProfileData((prev) => ({ ...prev, resume: "" }));
            setFormData((prev) => ({ ...prev, resume: "" }));

        } catch (error) {
            toast.error(error?.data?.message || "Profile Update failed");
        } finally {
            setSaving(false);
        }
    };

    useEffect(() => {
        if (!user) return;

        setProfileData((prev) => {
            if (prev.email) return prev; // already initialized
            return {
                name: user.name || "",
                email: user.email || "",
                preferredCategory: user?.preferredCategory || "",
                preferredLocation: user?.preferredLocation || "",
                experience: user?.experience || "",
                skills: user?.skills || [],
                avatar: user.avatar || null,
                resume: user.resume || null,
            };
        });

        setFormData((prev) => {
            if (prev.email) return prev;
            return {
                name: user.name || "",
                email: user.email || "",
                preferredCategory: user.preferredCategory || "",
                preferredLocation: user.preferredLocation || "",
                experience: user.experience || "",
                skills: user.skills || [],
                avatar: user.avatar || null,
                resume: user.resume || null,
            };
        });
    }, [user]);

    const avatarFileName = formData?.avatar
        ? decodeURIComponent(formData.avatar.split("/").pop().split("?")[0])
        : "";

    const removeAvatar = () => {
        handleInputChange("avatar", "");
    };

    return (
        <div className="bg-linear-to-br from-blue-50 via-white to-purple-50">
            <Navbar />

            <div className="min-h-screen bg-gray-50 py-8 px-4 mt-16 lg:m-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="bg-linear-to-r from-blue-500 to-blue-600 px-8 py-6 flex justify-between items-center">
                            <h1 className="text-sl font-medium text-white">Profile</h1>
                        </div>

                        <div className="p-8">
                            <div className="space-y-6">

                                {/* <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <img
                                            src={formData?.avatar || DEFAULT_AVATAR}
                                            alt="Avatar"
                                            className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
                                        />
                                        {uploading?.avatar && (
                                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block">
                                            <span className="sr-only">Choose avatar</span>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleImageChange(e, "avatar")}
                                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file-bg-blue-100 transition-colors"
                                            />
                                        </label>
                                        {avatarFileName && (
                                            <p className="mt-2 text-sm text-gray-500 truncate">
                                                {avatarFileName}
                                            </p>
                                        )}
                                    </div>
                                </div> */}

                                {/* //! Avatar Upload */}
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img
                                            src={formData?.avatar || DEFAULT_AVATAR}
                                            alt="Avatar"
                                            className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
                                        />

                                        {formData?.avatar && (
                                            <button
                                                type="button"
                                                onClick={removeAvatar}
                                                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-sm flex items-center justify-center hover:bg-red-600"
                                            >
                                                ✕
                                            </button>
                                        )}

                                        {uploading?.avatar && (
                                            <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            type="file"
                                            id="avatar-upload"
                                            accept=".jpeg,.jpg,.png,.pdf"
                                            className="hidden"
                                            onChange={(e) => handleImageChange(e, "avatar")}
                                        />
                                        <p className="mt-2 mb-1 text-xs text-gray-500">
                                            Allowed formats: .jpeg, .jpg, .png, .pdf
                                        </p>

                                        <label
                                            htmlFor="avatar-upload"
                                            className="inline-flex cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                        >
                                            Choose Image
                                        </label>

                                        <p className="mt-2 text-sm text-gray-500">
                                            {avatarFileName || "No image selected"}
                                        </p>
                                    </div>
                                </div>

                                {/* Name Input */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange("name", e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    {/* Email Read only */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            disabled
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                                        />
                                    </div>

                                    {/* Preferred Category */}
                                    <SelectField
                                        label="Preferred Category"
                                        id="preferredCategory"
                                        value={formData.preferredCategory}
                                        onChange={(e) => handleInputChange("preferredCategory", e.target.value)}
                                        options={CATEGORIES}
                                        placeholder="Select a category"
                                    />

                                    {/* Skills */}
                                    <MultiSelectField
                                        label="Skills"
                                        id="skills"
                                        value={formData.skills}
                                        onChange={(value) => handleInputChange("skills", value)}
                                        options={SKILLS}
                                        placeholder="Select skills..."
                                    />

                                    {/* Experience */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                                        <input
                                            type="number"
                                            value={formData.experience}
                                            onChange={(e) => handleInputChange("experience", e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                                            placeholder="e.g. 1, 2"
                                        />
                                    </div>

                                    {/* Preferred Location */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
                                        <input
                                            type="text"
                                            value={formData.preferredLocation}
                                            onChange={(e) => handleInputChange("preferredLocation", e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                                            placeholder="e.g. Kathmandu"
                                        />
                                    </div>
                                </div>

                                {/* Resume */}
                                {/* {user?.resume ? (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Resume
                                        </label>

                                        <div className="flex items-center gap-2">
                                            <p className="text-sm text-gray-600">
                                                Link:{" "}
                                                <Link
                                                    to={user?.resume}
                                                    className="text-blue-500 underline cursor-pointer"
                                                    target="_blank"
                                                >
                                                    {user?.resume}
                                                </Link>
                                            </p>

                                            <button
                                                className="cursor-pointer"
                                                onClick={DeleteResume}
                                            >
                                                <Trash2 className="h-5 w-5 text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <label className="block">
                                            <span className="sr-only">
                                                Choose a Resume
                                            </span>
                                            <input
                                                type="file"
                                                onChange={(e) => handleImageChange(e, "resume")}
                                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors"
                                            />
                                        </label>
                                    </div>
                                )} */}

                                {formData.resume ? (
                                    <div className="flex items-center gap-2">
                                        <a
                                            href={formData.resume}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-600 underline"
                                        >
                                            View Resume
                                        </a>

                                        <span className="text-sm text-gray-500">
                                            {formData.resume.split("/").pop()}
                                        </span>

                                        <button onClick={DeleteResume}>
                                            <Trash2 className="h-5 w-5 text-red-500" />
                                        </button>
                                    </div>
                                ) : (
                                    <div
                                        onDrop={handleResumeDrop}
                                        onDragOver={(e) => e.preventDefault()}
                                        className="border-2 border-dashed p-4 rounded-lg text-center cursor-pointer"
                                    >
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleResumeChange}
                                            className="hidden"
                                            id="resumeUpload"
                                        />

                                        <label htmlFor="resumeUpload" className="cursor-pointer text-blue-600">
                                            Click or Drag & Drop Resume (Max 2MB)
                                        </label>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
                                <Link
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
                                    onClick={handleCancel}
                                    to="/find-jobs"
                                >
                                    <X className="w-4 h-4" />
                                    <span>Cancel</span>
                                </Link>
                                <button
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                                    onClick={handleSave}
                                    disabled={saving || uploading.avatar || uploading.logo}
                                >
                                    {saving ? (
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin">
                                        </div>
                                    ) : (
                                        <Save className="w-4 h-4" />
                                    )}
                                    <span>{saving ? "Saving..." : "Save Changes"}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserProfile