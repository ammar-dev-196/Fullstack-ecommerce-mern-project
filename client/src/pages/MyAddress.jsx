import React, { useState } from "react";
import { FaBriefcase, FaHome, FaTimes } from "react-icons/fa";

const provinces = ["Sindh", "Punjab", "Khyber Pakhtunkhwa", "Balochistan"];
const cities = [
  "Karachi - Surjani",
  "Karachi - Gulshan",
  "Lahore",
  "Islamabad",
];
const zones = ["Surjani", "North Nazimabad", "Gulshan", "DHA"];

const initialForm = {
  fullName: "User Name",
  phone: "00000000",
  landmark: "",
  province: "Sindh",
  city: "Karachi",
  zone: "dummy zone",
  address: "dummy address",
  label: "Office",
};

function MyAddress() {
  const [form, setForm] = useState(initialForm);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSave = (e) => {
    e.preventDefault();
    alert("Address saved successfully!");
  };

  const handleCancel = () => setForm(initialForm);

  const inputClass =
    "w-full px-3.5 py-2.5 text-xs bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-[#ff5252] transition-colors";

  return (
    <div>
      <h2 className="text-base font-semibold text-gray-800 pb-3 border-b border-gray-100 mb-6">
        Address
      </h2>

      <form onSubmit={handleSave} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs text-gray-600">Full Name</label>
            <div className="relative">
              <input
                type="text"
                value={form.fullName}
                onChange={update("fullName")}
                className={inputClass}
              />
              {form.fullName && (
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, fullName: "" }))}
                  aria-label="Clear full name"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 cursor-pointer"
                >
                  <FaTimes size={13} />
                </button>
              )}
            </div>
          </div>

          {/* Province */}
          <div className="space-y-1.5">
            <label className="text-xs text-gray-600">Province / Region</label>
            <select
              value={form.province}
              onChange={update("province")}
              className={`${inputClass} cursor-pointer`}
            >
              {provinces.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label className="text-xs text-gray-600">Phone Number</label>
            <div className="relative">
              <input
                type="text"
                value={form.phone}
                onChange={update("phone")}
                className={inputClass}
              />
              {form.phone && (
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, phone: "" }))}
                  aria-label="Clear phone number"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 cursor-pointer"
                >
                  <FaTimes size={13} />
                </button>
              )}
            </div>
          </div>

          {/* City */}
          <div className="space-y-1.5">
            <label className="text-xs text-gray-600">City</label>
            <select
              value={form.city}
              onChange={update("city")}
              className={`${inputClass} cursor-pointer`}
            >
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Landmark */}
          <div className="space-y-1.5">
            <label className="text-xs text-gray-600">Landmark (Optional)</label>
            <input
              type="text"
              value={form.landmark}
              onChange={update("landmark")}
              placeholder="E.g. beside train station"
              className={`${inputClass} placeholder:text-gray-400`}
            />
          </div>

          {/* Zone */}
          <div className="space-y-1.5">
            <label className="text-xs text-gray-600">Zone</label>
            <select
              value={form.zone}
              onChange={update("zone")}
              className={`${inputClass} cursor-pointer`}
            >
              {zones.map((z) => (
                <option key={z}>{z}</option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs text-gray-600">Address</label>
            <div className="relative">
              <input
                type="text"
                value={form.address}
                onChange={update("address")}
                className={`${inputClass} pr-10`}
              />
              {form.address && (
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, address: "" }))}
                  aria-label="Clear address"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 cursor-pointer"
                >
                  <FaTimes size={13} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Label selector */}
        <div className="space-y-3">
          <p className="text-xs text-gray-600">
            Select a label for effective delivery:
          </p>
          <div className="flex items-center gap-3">
            {[
              { key: "Office", icon: <FaBriefcase size={12} /> },
              { key: "Home", icon: <FaHome size={14} /> },
            ].map(({ key, icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => setForm((p) => ({ ...p, label: key }))}
                className={`inline-flex items-center gap-2 px-6 py-2.5 text-xs font-medium uppercase tracking-wider rounded-sm border transition-colors cursor-pointer ${
                  form.label === key
                    ? "border-[#ff5252] text-[#ff5252]"
                    : "border-gray-300 text-gray-600 hover:border-gray-400"
                }`}
              >
                {icon}
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs px-8 py-2.5 rounded-sm border border-gray-200 transition-colors uppercase tracking-wider cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#ff5252] hover:bg-black text-white font-medium text-xs px-10 py-2.5 rounded-sm transition-colors uppercase tracking-wider cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyAddress;
