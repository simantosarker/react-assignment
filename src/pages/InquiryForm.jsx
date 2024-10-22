import { useState } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    budget: "",
    query: "",
    file: null,
    fileDetail: "",
  });

  const servicesOptions = [
    "Mobile Development",
    "Web Development",
    "SQA Solution",
    "Web UX/UI Design",
    "API Integration",
    "Mobile UX/UI Design",
    "Software Development",
    "Custom Service",
  ];

  const budgetOptions = [
    "Less than > $500",
    "$500 - $1,000",
    "$1,001 - $1,500",
    "$1,500 - $2,000",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (service) => {
    setFormData((prevData) => ({
      ...prevData,
      services: prevData.services.includes(service)
        ? prevData.services.filter((s) => s !== service)
        : [...prevData.services, service],
    }));
  };

  const handleBudgetChange = (budget) => {
    setFormData((prevData) => ({
      ...prevData,
      budget: prevData.budget.includes(budget)
        ? prevData.budget.filter((s) => s !== budget)
        : [...prevData.budget, budget],
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic
  };

  return (
    <div className="static max-w-1133px max-h-1086 ">
      <form
        onSubmit={handleSubmit}
        className=" gap-64px mx-auto bg-white rounded-lg shadow-md space-y-4"
      >
        <h2
          className="text-justify p-1 max-w-
323px max-h-60px text-3xl font-bold text-gray-700 ;"
        >
          Drop Us a <span className="text-teal-500">Line</span>
        </h2>

        <div className="bg-gray-50 rounded-md p-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-justify font-semibold pb-2">Name*</h5>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full h-9 p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <h3 className="text-justify font-semibold pb-2">Email*</h3>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-9 p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <h3 className="text-justify font-semibold pb-2">
                Phone Number <span className="text-gray-400">(Optional)</span>
              </h3>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-9 p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-justify font-semibold pb-2">
                Company name <span className="text-gray-400">(Optional)</span>
              </h3>
              <input
                type="text"
                name="company"
                placeholder="Enter Your Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full h-9 p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-700 font-medium text-justify pt-6 py-2">
              Services You Need{" "}
              <span className="text-gray-400">(You can choose multiple)</span>
            </p>
            <div className="flex flex-wrap gap-6">
              {servicesOptions.map((service) => (
                <button
                  key={service}
                  type="button"
                  className={`px-4 py-2 border rounded-lg  hover:bg-teal-100 hover:border-teal-500 focus:outline-none  active:border-teal-500 ${
                    formData.services.includes(service)
                      ? "bg-teal-100 text-teal-500 border-teal-500"
                      : "border-gray-300 text-gray-700"
                  }`}
                  onClick={() => handleServiceChange(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-700 font-medium text-justify pt-6 py-2">
              Your Budget <span className="text-gray-400">(Optional)</span>
            </p>
            <div className="flex flex-wrap gap-6">
              {budgetOptions.map((budget) => (
                <div key={budget} className="flex items-center gap-2">
                  <button
                    key={budget}
                    type="button"
                    className={`px-4 py-2 border rounded-lg  hover:bg-teal-100 hover:border-teal-500 focus:outline-none  active:border-teal-500 ${
                      formData.budget.includes(budget)
                        ? "bg-teal-100 text-teal-500 border-teal-500"
                        : "border-gray-300 text-gray-700"
                    }`}
                    onClick={() => handleBudgetChange(budget)}
                  >
                    {budget}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-justify font-semibold pt-6 pb-3">
              Deep Details About Your Query{" "}
              <span className="text-gray-400">(Optional)</span>
            </h3>
            <textarea
              name="query"
              placeholder="Tell us more about your query"
              value={formData.query}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg h-30"
            ></textarea>
          </div>

          <div className="space-y-2">
            <p className="text-gray-700 font-medium text-justify pt-6 pb-2">
              Add Attachments <span className="text-gray-400">(Optional)</span>
            </p>
            <div className="">
              <input
                type="file"
                name="file"
                placeholder="(a brief, idea, branding guideline, old design,...)"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                className="px-6 py-3 w-full text-sm text-gray-400 file:hidden border border-gray-300 rounded-lg"
              />

              <button className=" bg-green-700 text-white">
                Add File (5Mb)
              </button>
            </div>
          </div>
        </div>

        <div className="absolute l-0 b-0">
          <button
            type="submit"
            className="  max-w-197px max-h-56px  py-2 px-4 bg-sky-700 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors"
          >
            Send Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
