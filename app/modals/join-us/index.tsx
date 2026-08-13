"use client";

import { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./styles.module.css";
import joinus from "../../assets/joinus-form.svg";
import success from "../../assets/success.svg";
import { submitApplication } from "@/app/redux/slices/join-us";
import Link from "next/link";

export type FormData = {
  name: string;
  email: string;
  country: string;
  whatsapp: string;
  interests: string[];
  experience: string;
  whyHire: string;
};

const JoinUSModal: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    country: "",
    interests: [],
    experience: "",
    whyHire: "",
  });

  const [errors, setErrors] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    country: "",
    interests: [],
    experience: "",
    whyHire: "",
  });

  const dispatch = useAppDispatch();
  const {
    loading: formLoading,
    error: formError,
    data: successData,
    success: formSuccess,
  } = useAppSelector((state) => state.joinUs);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Handle Checkbox (Interests)
  const handleInterestChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((i) => i !== value)
        : [...prev.interests, value],
    }));
  };

  const handleSubmitApplication = () => {
    if (!formLoading) {
      dispatch(submitApplication(form));
    }
  };

  return (
    <div className={styles["join-us-modal"]}>
      {formSuccess ? (
        <div className={styles["form-success"]}>
          <Image
            alt="Application Success"
            src={success}
            className={styles["application-success"]}
          />
          <div className={styles["success-message"]}>
            {successData?.message}
          </div>
          <div className={styles["reference-id"]}>
            Tracker ID: <span className={styles["tracker"]}>{successData?.application_id}</span>
          </div>
          <div className={styles["company-message"]}>
            Our team will contact you shortly for details, you may also track application in <Link className={styles["page-link"]} href={'/careers'}>Careers</Link>.
          </div>
        </div>
      ) : (
        <>
          <Image
            className={styles["modal-image"]}
            alt="Join Bobyan Delivery"
            src={joinus}
          />
          <div className={styles["form-wrapper"]}>
            <div className={styles["form-header"]}>
              Fill in your details and we’ll get in touch.
            </div>
            <form className={styles["form-main"]}>
              {/* Name */}
              <div className={styles["input-wrapper"]}>
                <label className={styles["input-label"]}>Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={styles["form-input"]}
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>

              {/* Email */}
              <div className={styles["input-wrapper"]}>
                <label className={styles["input-label"]}>Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  className={styles["form-input"]}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              {/* WhatsApp */}
              <div className={styles["input-wrapper"]}>
                <label className={styles["input-label"]}>WhatsApp Number</label>
                <div className="flex gap-2">
                  <PhoneInput
                    country={"kw"}
                    value={form.whatsapp}
                    onChange={(value, country: any) => {
                      console.log(country);

                      setForm((prev) => ({
                        ...prev,
                        whatsapp: value,
                        country: country.name,
                      }));
                    }}
                    inputClass={styles["form-input"]}
                    containerClass="w-full"
                  />
                </div>
                {errors.whatsapp && (
                  <div className="error">{errors.whatsapp}</div>
                )}
              </div>

              {/* Experience */}
              <div className={styles["input-wrapper"]}>
                <label className={styles["input-label"]}>
                  Experience (Years)
                </label>
                <input
                  name="experience"
                  type="number"
                  value={form.experience}
                  onChange={handleChange}
                  className={styles["form-input"]}
                  placeholder="1.5"
                />
                {errors.experience && (
                  <div className="error">{errors.experience}</div>
                )}
              </div>

              {/* Interests */}
              <div className={styles["input-wrapper-full"]}>
                <label className={styles["input-label"]}>
                  Area of Interests
                </label>
                <div className={styles["form-checks"]}>
                  {[
                    "CAR - Rider",
                    "Bike - Rider",
                    "Supervisor",
                    "HR",
                    "Accounts",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={form.interests.includes(item)}
                        onChange={() => handleInterestChange(item)}
                      />
                      {item}
                    </label>
                  ))}
                </div>
                {errors.interests && (
                  <div className="error">{errors.interests}</div>
                )}
              </div>

              {/* Why Hire */}
              <div className={styles["input-wrapper-full"]}>
                <label className={styles["input-label"]}>
                  Why should we hire you?
                </label>
                <textarea
                  name="whyHire"
                  value={form.whyHire}
                  onChange={handleChange}
                  className={styles["form-input-textarea"]}
                />
                {errors.whyHire && (
                  <div className="error">{errors.whyHire}</div>
                )}
              </div>

              {/* Submit */}
              <div
                className={styles["form-button"]}
                onClick={() => handleSubmitApplication()}
              >
                {formLoading ? "Loading ..." : "Submit Application"}
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default JoinUSModal;
