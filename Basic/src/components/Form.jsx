import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, reset, handleSubmit, formState } = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  });
  const { errors } = formState;
  return (
    <>
      <section className="bg-gray-200 max-w-96 mx-auto p-12 mt-2">
        <form action="#" className="flex flex-col gap-4">
          <p>Personal Details:</p>
          <div className="flex flex-col">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              {...register("username")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="samepassword">Re-enter Password:</label>
            <input
              type="password"
              name="samepassword"
              id="samepassword"
              {...register("samepassword")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" {...register("age")} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date">Birth of Date:</label>
            <input type="date" name="date" id="date" {...register("date")} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country">Country:</label>
            <select name="country" id="country" {...register("country")}>
              <option value="">Select your country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender">Gender:</label>
            <div className="flex gap-2">
              <input
                type="radio"
                name="male"
                id="male"
                value="Male"
                {...register("gender")}
              />
              Male
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                name="male"
                id="male"
                value="Female"
                {...register("gender")}
              />
              Female
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                name="male"
                id="male"
                value="Other"
                {...register("gender")}
              />
              Pefer not to say
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="comment">Comment:</label>
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              {...register("comment")}
            ></textarea>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              {...register("checkbox")}
            />
            <label htmlFor="checkbox">Accept Terms and Conditions</label>
          </div>

          <div className="flex gap-4 ">
            <button
              type="submit"
              className="bg-indigo-700 text-white text-lg px-6 py-3 rounded-lg hover:bg-indigo-900 flex-grow"
            >
              Submit
            </button>
            <button className="bg-red-700 text-white text-lg px-6 py-3 rounded-lg hover:bg-red-900 flex-grow">
              Reset
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
