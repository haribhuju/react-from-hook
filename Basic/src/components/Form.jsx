import React from "react";

const Form = () => {
  return (
    <>
      <section>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" />
          </div>
          <button>Submit</button>
        </form>
      </section>
    </>
  );
};

export default Form;
