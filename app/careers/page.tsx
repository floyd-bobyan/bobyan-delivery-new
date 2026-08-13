"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { trackApplication } from "../redux/slices/track-application";
import notfound from "../assets/notfound.svg";
import Image from "next/image";
import { InfinitySpin } from "react-loader-spinner";
import { BsPersonBadge } from "react-icons/bs";

type AppType = "id" | "email";

const Careers: React.FC = () => {
  const [appType, setAppType] = useState<AppType>("id");
  const [checkId, setCheckId] = useState<string | null>("");

  const {
    loading: applicationLoading,
    error: applicationError,
    applications,
  } = useAppSelector((state) => state.trackApplication);
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (checkId) {
      dispatch(trackApplication({ type: appType, search: checkId }));
    }
  };

  console.log(applications);

  return (
    <div className={styles["careers-page"]}>
      <div className={styles["track-application-wrapper"]}>
        <div className={styles["track-header"]}>Track Your Application</div>
        <div className={styles["selector-wrapper"]}>
          <div
            className={styles["input-wrapper"]}
            onClick={(e) => setAppType("id")}
          >
            <input
              type="radio"
              value="id"
              checked={appType === "id"}
              onChange={(e) => setAppType(e.target.value as AppType)}
            />
            <label>Application ID</label>
          </div>
          <div
            className={styles["input-wrapper"]}
            onClick={(e) => setAppType("email")}
          >
            <input
              type="radio"
              value="email"
              checked={appType === "email"}
              onChange={(e) => setAppType(e.target.value as AppType)}
            />
            <label>Email ID</label>
          </div>
        </div>

        <div className={styles["track-form"]}>
          <input
            className={styles["track-input"]}
            value={checkId || ""}
            onChange={(e) => setCheckId(e.target.value as "string | null")}
          />
          <div
            className={styles["track-button"]}
            onClick={() => handleSearch()}
          >
            <FaSearch className={styles["search-icon"]} /> Search
          </div>
        </div>
      </div>
      <div className={styles["application-details"]}>
        {applicationError && (
          <div className={styles["error-wrapper"]}>
            <Image
              className={styles["error-image"]}
              alt="Data Not Found"
              src={notfound}
            />
            <div className={styles["error-message"]}>OOPS, NO DATA FOUND!</div>
            <div className={styles["error-sub-text"]}>
              If already applied, kindly wait for callback from our team.
            </div>
          </div>
        )}

        {applicationLoading && (
          <InfinitySpin visible width={200} color={"#453D53"} />
        )}

        {applications?.length > 0 && (
          <div className={styles["applications-container"]}>
            {applications?.map((app, index) => {
              return (
                <div className={styles["application-wrapper"]} key={index}>
                  <div className={styles["application-top"]}>
                    <div className={styles["application-column"]}>
                      <BsPersonBadge className={styles["profile-icon"]} />
                    </div>
                    <div className={styles["application-column"]}>
                      <div className={styles["application-item"]}>
                        <span className={styles["item-label"]}>Name:</span>
                        {"  "}{app?.name}
                      </div>
                      <div className={styles["application-item"]}>
                        <span className={styles["item-label"]}>Tracker:</span>
                        {"  "}{app?.id}
                      </div>
                      <div className={styles["application-item"]}>
                        <span className={styles["item-label"]}>
                          Areas of intrest:
                        </span>
                        {"  "}{app?.interests}
                      </div>
                      <div className={styles["application-item"]}>
                        <span className={styles["item-label"]}>Application Date:</span>
                        {"  "}  {new Date(app?.appliedDate).toLocaleString()}
                      </div>
                    </div>
                    <div className={styles["application-column"]}>
                      <div className={styles["application-item"]}>
                        <span className={styles["item-label"]}>Status:</span>
                        {"  "}{app?.status}
                      </div>
                    </div>
                  </div>
                  <div className={styles["application-text"]}>Thank you for sharing your intrest. Team will contact you soon.</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
