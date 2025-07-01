import React, { useState, type ChangeEvent, type FormEvent } from "react";

// Define an interface for the shape of each dropdown option
interface DropdownOption {
  value: string;
  label: string;
}

// Define the structure for secondary options, where keys are primary values
interface SecondaryOptionsMap {
  [key: string]: DropdownOption[];
}

// Define the interface for the form data state
interface FormData {
  name: string;
  email: string;
  message: string;
  primarySelection: string;
  secondarySelection: string;
}

// Define data for the dropdowns with explicit types
const primaryOptions: DropdownOption[] = [
  { value: "", label: "Select a category" },
  { value: "fruits", label: "Fruits" },
  { value: "vegetables", label: "Vegetables" },
  { value: "grains", label: "Grains" },
];

const secondaryOptions: SecondaryOptionsMap = {
  fruits: [
    { value: "", label: "Select a fruit" },
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ],
  vegetables: [
    { value: "", label: "Select a vegetable" },
    { value: "carrot", label: "Carrot" },
    { value: "broccoli", label: "Broccoli" },
    { value: "spinach", label: "Spinach" },
  ],
  grains: [
    { value: "", label: "Select a grain" },
    { value: "rice", label: "Rice" },
    { value: "wheat", label: "Wheat" },
    { value: "oats", label: "Oats" },
  ],
};

// Main App component
const App: React.FC = () => {
  // State to store form data, explicitly typed as FormData
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    primarySelection: "", // New state for primary dropdown
    secondarySelection: "", // New state for secondary dropdown
  });

  // State to store submitted data for display, explicitly typed as FormData or null
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  // Handle input changes for all fields, including selects
  // e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> for correct type inference
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // If the primary dropdown changes, reset the secondary dropdown
    if (name === "primarySelection") {
      setFormData((prevData) => ({
        ...prevData,
        secondarySelection: "", // Reset secondary selection when primary changes
      }));
    }
  };

  // Handle form submission
  // e: FormEvent<HTMLFormElement> for correct type inference
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Prevent default form submission behavior
    // In a real application, you would send this data to a backend API.
    setSubmittedData(formData);
    console.log("Form submitted:", formData);
    // Optionally clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
      primarySelection: "",
      secondarySelection: "",
    });
  };

  // Get options for the secondary dropdown based on the primary selection
  // Type assertion `as DropdownOption[]` is used because `secondaryOptions[formData.primarySelection]`
  // could theoretically be undefined if `formData.primarySelection` is an unexpected string,
  // but our logic ensures it's a valid key or an empty string.
  const currentSecondaryOptions: DropdownOption[] = formData.primarySelection
    ? secondaryOptions[formData.primarySelection] || [] // Fallback to empty array if key not found (shouldn't happen with our data)
    : [];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Order Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Existing fields */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Primary Dropdown */}
          <div>
            <label
              htmlFor="primarySelection"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="primarySelection"
              name="primarySelection"
              value={formData.primarySelection}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              {primaryOptions.map((option: DropdownOption) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Secondary Dropdown (conditionally rendered) */}
          {formData.primarySelection && ( // Only show if a primary option is selected
            <div>
              <label
                htmlFor="secondarySelection"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Item
              </label>
              <select
                id="secondarySelection"
                name="secondarySelection"
                value={formData.secondarySelection}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                {currentSecondaryOptions.map((option: DropdownOption) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Existing message field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Additional Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </form>

        {/* Display submitted data */}
        {submittedData && (
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">
              Submitted Data:
            </h2>
            <p className="text-gray-700">
              <strong className="font-medium">Name:</strong>{" "}
              {submittedData.name}
            </p>
            <p className="text-gray-700">
              <strong className="font-medium">Email:</strong>{" "}
              {submittedData.email}
            </p>
            <p className="text-gray-700">
              <strong className="font-medium">Category:</strong>{" "}
              {submittedData.primarySelection || "N/A"}
            </p>
            <p className="text-gray-700">
              <strong className="font-medium">Item:</strong>{" "}
              {submittedData.secondarySelection || "N/A"}
            </p>
            <p className="text-gray-700">
              <strong className="font-medium">Additional Notes:</strong>{" "}
              {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
