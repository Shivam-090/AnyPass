import { React, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { MdNoteAdd } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";


const Manager = () => {

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(true);

  // State to hold form inputs for site, username, and password
  const [form, setForm] = useState({ site: "", username: "", password: "" });

  // State to store array of all saved passwords
  const [passwordArray, setPasswordArray] = useState([]);

  // Fetch all passwords from backend
  const getPasswords = async () => {
    try {
      let req = await fetch("http://localhost:3000/");
      let passwords = await req.json();
      setPasswordArray(passwords);
    } catch (err) {
      console.log("Failed to fetch passwords", err);
    }
  };

  // Run getPasswords once on component mount
  useEffect(() => {
    getPasswords();
  }, []);

  // Toggle password visibility
  const togglePasswordIcon = () => {
    setShowPassword((show) => !show);
  };

  // Update form state when user types into input fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save or update password in backend
  const savePassword = async () => {

    // Show warning if any field is empty
    if (form.site === "" || form.username === "" || form.password === "") {
      toast.warn("Fields are empty", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      // Add unique id to password entry
      let newPass = { ...form, id: uuidv4() };

      // If it's an edit operation, delete the old entry first
      if (form.id) {
        await fetch("http://localhost:3000/", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: form.id }),
        });
      }

      // Add new or updated password to backend
      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPass),
      });

      // Reset the form
      setForm({ site: "", username: "", password: "" });

      // Show success message
      toast.success("Password saved successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    // Refresh password list from backend
    await getPasswords();

    console.log([...passwordArray, form]);
  };

  // Delete a password entry
  const deletePass = async (id) => {
    let ask = confirm("Delete the selected password?");
    if (ask === true) {

      // Remove from local state
      let delPass = passwordArray.filter((item) => item.id !== id);
      setPasswordArray(delPass);

      // Remove from backend
      let res = await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      // Show success message
      toast.success("Password deleted successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // Set form fields to selected password for editing
  const editPass = (id) => {
    setForm({ ...passwordArray.filter((item) => item.id === id)[0], id: id });

    // Temporarily remove it from list until saved again
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  // Copy text to clipboard and show notification
  const copyText = (text) => {
    toast("Copied to clipboard", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  return (
   <>
  {/* Toast notification container */}
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />

  {/* Background visual with radial gradient and blur */}
  <div className="absolute inset-0 -z-10 h-full w-full items-center backdrop-blur-md px-5 bg-repeat-y py-24 [background:radial-gradient(100%_90%_at_50%_10%,theme(colors.blue.50)_40%,theme(colors.sky.300)_100%)]"></div>
  
  <div className="min-h-[88.6vh] container mx-auto max-w-5xl py-2 rounded-xl">

    {/* App Title */}
    <h1 className="font-bold text-xl text-center">
      <span className="text-blue-400">&lt;</span>
      Any
      <span className="text-blue-400">Pass/&gt;</span>
    </h1>

    {/* Subtitle */}
    <p className="text-slate-600 text-center text-lg">
      Save your Passwords/Secrets at one place
    </p>

    {/* Password form inputs */}
    <div className="text-white flex flex-col p-4 gap-2">

      {/* Site input */}
      <div className="flex gap-2 items-center ">
        <FaEarthAsia className="fill-slate-800" />
        <input
          className="px-2 w-full rounded-full border-1 border-blue-600 text-black outline-none focus:border-blue-600 bg-white"
          onChange={handleChange}
          type="text"
          value={form.site}
          name="site"
          placeholder="Enter website URL"
        />
      </div>

      {/* Username and Password input */}
      <div className="flex w-full justify-between items-center gap-2">
        <FaRegUser className="fill-slate-800" />
        <input
          className="px-2 w-1/2 rounded-full border-1 border-blue-600 text-black outline-none focus:border-blue-600 bg-white"
          onChange={handleChange}
          type="text"
          value={form.username}
          name="username"
          placeholder="Enter Username"
        />

        {/* Separator */}
        <div className="h-5 border-1 border-slate-700 "></div>

        <RiLockPasswordLine className="fill-slate-800" />
        <div className="w-1/2 relative">
          <input
            className="px-2 w-full rounded-full border-1 border-blue-600 text-black outline-none focus:border-blue-600 bg-white"
            onChange={handleChange}
            type={showPassword ? "password" : "text"}
            value={form.password}
            name="password"
            placeholder="Enter Password"
          />

          {/* Toggle password visibility icon */}
          <div
            className="absolute top-[5px] right-[6px] cursor-pointer"
            onClick={togglePasswordIcon}
          >
            {showPassword ? (
              <FaEyeSlash className="fill-black" />
            ) : (
              <FaEye className="fill-black" />
            )}
          </div>
        </div>
      </div>

      {/* Save button */}
      <button
        onClick={savePassword}
        className="bg-blue-500 flex justify-center items-center gap-2 hover:bg-blue-300 cursor-pointer active:bg-blue-600 m-auto px-5 py-1 my-2 rounded-xl font-bold border-blue-700 border-1"
      >
        <MdNoteAdd /> Save Password
      </button>
    </div>

    {/* Password list section */}
    <div className="passwords">
      <h1 className="font-bold text-xl">Your Passwords</h1>

      {/* No passwords message */}
      {passwordArray.length === 0 && <div>No Password saved yet</div>}

      {/* Password table */}
      {passwordArray.length !== 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto my-2 overflow-hidden rounded-md">
            <thead className="bg-blue-500 text-white">
              <tr className="text-left">
                <th className="px-2 py-2 ">Sr. No.</th>
                <th className="px-2 py-2 ">Website</th>
                <th className="px-2 py-2">Username</th>
                <th className="px-2 py-2 ">Password</th>
                <th className="px-2 py-2 ">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-blue-300 ">
              {passwordArray.map((items, index) => {
                return (
                  <tr key={items.id}>
                    <td className="px-2 border w-1/12 border-white ">
                      {index + 1}.
                    </td>

                    {/* Website with copy icon */}
                    <td className="px-2 border max-2-[200px] border-white whitespace-nowrap overflow-hidden truncate">
                      <div className="flex justify-between items-center gap-1">
                        <a href={items.site} target="_blank">
                          {items.site}
                        </a>
                        <IoIosCopy
                          className="cursor-pointer min-w-[16px]"
                          onClick={() => copyText(items.site)}
                        />
                      </div>
                    </td>

                    {/* Username with copy icon */}
                    <td className="px-2 border max-2-[200px] border-white whitespace-nowrap overflow-hidden truncate">
                      <div className="flex justify-between items-center gap-1">
                        <span>{items.username}</span>
                        <IoIosCopy
                          className="cursor-pointer min-w-[16px]"
                          onClick={() => copyText(items.username)}
                        />
                      </div>
                    </td>

                    {/* Password (masked) with copy icon */}
                    <td className="px-2 border max-2-[200px] border-white whitespace-nowrap overflow-hidden truncate">
                      <div className="flex justify-between items-center gap-1">
                        <span>{"*".repeat(items.password.length)}</span>
                        <IoIosCopy
                          className="cursor-pointer min-w-[16px]"
                          onClick={() => copyText(items.password)}
                        />
                      </div>
                    </td>

                    {/* Edit and Delete actions */}
                    <td className="px-2 border max-2-[200px] border-white whitespace-nowrap overflow-hidden truncate">
                      <div className="flex justify-between items-center gap-1">
                        <span
                          className="cursor-pointer hover:fill-slate-700"
                          onClick={() => {
                            editPass(items.id);
                          }}
                        >
                          <BiSolidEditAlt />
                        </span>
                        <span
                          className="cursor-pointer hover:fill-slate-700"
                          onClick={() => {
                            deletePass(items.id);
                          }}
                        >
                          <MdDelete />
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </div>
</>

  );
};

export default Manager;
