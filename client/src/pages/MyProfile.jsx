import React, { useState } from "react";

function MyProfile() {
  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const [fullName, setFullName] = useState("Username");
  const [email, setEmail] = useState("user@gmail.com");
  const [phone, setPhone] = useState("");
  const handleCancel = () => {
    setFullName("Username");
    setEmail("user@gmail.com");
    setPhone("");
  };

  return (
    <div>
      <h2 className="text-base font-semibold text-gray-800 pb-3 border-b border-gray-100 mb-6">
        My Profile
      </h2>

      <form onSubmit={handleSave} className="space-y-5">
        <div className="grid grid-rows-1 md:grid-rows-2 gap-5">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full md:w-1/2 px-3.5 py-2.5 text-xs bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-[#ff5252] transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-1/2 px-3.5 py-2.5 text-xs bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-[#ff5252] transition-colors"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full md:w-1/2 px-3.5 py-2.5 text-xs bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-[#ff5252] transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="bg-[#ff5252] hover:bg-[#e04141] text-white font-medium text-xs px-6 py-2.5 rounded-sm shadow-sm transition-colors uppercase tracking-wider"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-transparent hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium text-xs px-6 py-2.5 rounded-sm transition-colors uppercase tracking-wider"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyProfile;
