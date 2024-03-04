import React from "react";
import "../style/ForgotPassword.css";
function ForgotPassword() {
  return (
    <>
      <div className="main_div">
        <div className="main_forgot_password_div">
          {/* upper sectioin */}
          <div className="forget_password_upper_div">
            {/* button */}
            <div className="forget_password_upper_div_button">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-chevron-left back_icon "
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                </svg>
              </div>
              <div>Back</div>
            </div>
            {/* text */}
            <div className="forget_password_upper_div_forgot_text">
              Forgot Passwords
            </div>
          </div>
          {/* bottom section */}
          <div className="forget_password_bottom_div">
            {/* message */}
            <div>
              Give us your registered Email and we will help you reset your
              password.
            </div>
            {/* form */}
            <div className="forget_password_bottom_form_div">
              {/* label */}
              <div>Email</div>
              {/* input */}
              <div>
                <input
                  type="text"
                  placeholder="Email address"
                  className="forget_password_bottom_form_input"
                />
              </div>
              {/* button */}
              <div className="forget_password_bottom_form_send_link_button">
                Send reset link
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
