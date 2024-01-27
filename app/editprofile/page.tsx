"use client";
import React, { useState } from "react";

export default function ProfileSetupPage() {
  const [formData, setFormData] = useState({
    name: "",
    about_me: "",
    height: "",
    gender: "",
    pronouns: "",
    ethnicity: "",
    relationship_status: "",
    looking_for: "",
    hiv_status: "",
    last_tested: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  /*
    Now every time someone writes something in the form fields, 
    we want it to update the state representing the form data.
    */
  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e) => {
    // Don't want the page to refresh
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    // Turn formData state into data we can with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          about_me: "",
          height: "",
          gender: "",
          pronouns: "",
          ethnicity: "",
          relationship_status: "",
          looking_for: "",
          hiv_status: "",
          last_tested: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };
  return (
    <div>
      <h1>Profile Setup</h1>
      {formSuccess ? (
        <div>Form Submitted</div>
      ) : (
        <form method="POST" action="#" onSubmit={submitForm}>
          <div>
            <label className="label">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Display name"
              onChange={handleInput}
              value={formData.name}
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">About Me</span>
            </label>
            <input
              type="text"
              placeholder="About me"
              onChange={handleInput}
              value={formData.about_me}
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Height</span>
            </label>
            <input
              type="text"
              placeholder="height"
              onChange={handleInput}
              value={formData.height}
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Gender</span>
            </label>
            <input
              type="text"
              placeholder="Gender"
              onChange={handleInput}
              value={formData.gender}
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Pronouns</span>
            </label>
            <input
              type="text"
              placeholder="Pronouns"
              onChange={handleInput}
              value={formData.pronouns}
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Ethnicity</span>
            </label>
            <input
              type="text"
              placeholder="Ethnicity"
              onChange={handleInput}
              value={formData.ethnicity}
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Relationship Status</span>
            </label>
            <input
              type="text"
              placeholder="Relationship status"
              onChange={handleInput}
              value={formData.relationship_status}
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Looking For</span>
            </label>
            <input
              type="text"
              placeholder="Looking for"
              onChange={handleInput}
              value={formData.looking_for}
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">HIV Status</span>
            </label>
            <input
              type="text"
              placeholder="HIV status"
              onChange={handleInput}
              value={formData.hiv_status}
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Last Tested</span>
            </label>
            <input
              type="text"
              placeholder="Last tested"
              onChange={handleInput}
              value={formData.last_tested}
              className="w-full input input-bordered"
            />
          </div>
          <div>
            <button className="btn btn-block">Save</button>
          </div>
        </form>
      )}
    </div>
  );
}
