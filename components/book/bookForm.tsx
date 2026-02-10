import { useEffect, useState } from "react";

type UserData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  note: string;
};

const SecondStep = ({ returnUser }: { returnUser: (data: UserData) => void }) => {
  const [form, setForm] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    note: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  useEffect(() => {
    // send data only if required fields are valid
    if (form.name && form.email) {
      returnUser(form);
    }
  }, [form, returnUser]);

  const validate = (field: string, value: string) => {
    let message = "";

    if (field === "name" && !value.trim()) {
      message = "Name is required";
    }

    if (field === "email") {
      if (!value.trim()) {
        message = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {
        message = "Invalid email address";
      }
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  return (
    <div className="flex flex-col justify-center w-full gap-8 items-center w-full">
      <h2 className="text-lg md:text-2xl font-bold text-center">Your Information</h2>

      <div className="flex flex-col gap-4 w-full">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
            className="border p-3 outline-none w-full focus:border-[var(--main)]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={handleChange}
            className="border p-3 outline-none w-full focus:border-[var(--main)]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="border p-3 outline-none focus:border-[var(--main)]"
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border p-3 outline-none focus:border-[var(--main)]"
        />

        {/* Note */}
        <textarea
          name="note"
          placeholder="Additional Notes"
          value={form.note}
          onChange={handleChange}
          rows={4}
          className="border p-3 outline-none focus:border-[var(--main)] resize-none"
        />
      </div>
    </div>
  );
};

export default SecondStep;
