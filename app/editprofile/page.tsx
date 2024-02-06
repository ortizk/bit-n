"use client";
import React, { useState } from "react";

type FormData = {
  name: string;
  about_me: string;
  height: string;
  gender: string;
  pronouns: string;
  ethnicity: string;
  relationship_status: string;
  looking_for: string;
  hiv_status: string;
  last_tested: string;
};

export default function ProfileSetupPage() {
  const [formData, setFormData] = useState<FormData>({
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

  /*
    Now every time someone writes something in the form fields, 
    we want it to update the state representing the form data.
    */
  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };
  //Now that we are passing in state that won't be
  // potentially out of sync, we can move this function
  // to a helper file either in app or outside
  const submitForm = (e: any, formData: FormData) => {
    // Don't want the page to refresh
    e.preventDefault();

    const formURL = e.target.action;

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      console.log({ response });
      if (response.ok) {
        response.json();
        setFormSuccess(true);
      }
    });
  };
  return (
    <div>
      <h1>Profile Setup</h1>
      {formSuccess ? (
        <div>Form Submitted</div>
      ) : (
        <form
          method="POST"
          action="/api/profileSetup"
          onSubmit={(e) => submitForm(e, formData)}
          className="text-orange-400"
        >
          <div>
            <label className="label">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Display name"
              name="name"
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
              name="about_me"
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
              name="height"
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
              name="gender"
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
              name="pronouns"
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
              name="ethnicity"
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
              name="relationship_status"
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
              name="looking_for"
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
              name="hiv_status"
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
              name="last_tested"
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
