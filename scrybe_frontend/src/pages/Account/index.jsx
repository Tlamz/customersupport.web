import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import accountStyles from "./account.module.scss";
import chevronLeft from "./assets/icons/chevron-left.svg";
import plus from "./assets/icons/plus.svg";
import NewDesignSidebar from "../../components/NewDesignSidebar";
import TopNav from "../../components/TopNav";
import { Link, useNavigate } from "react-router-dom";
import ErrorHandler from "../../helpers/axioshelp/Utils/ErrorHandler";
import SnackBar from "../../components/SnackBar/index";
import ApiService from "../../helpers/axioshelp/apis";

function Account() {
  const [accountModalIsActive, setAccountModalIsActive] = useState(false);
  const [accountUser, setAccountUser] = useState();
  const [response, setResponse] = useState({ type: "", message: "" });
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const toggleAccountModal = () => {
    setAccountModalIsActive((current) => !current);
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  async function getUser() {
    try {
      const res = await ApiService.Account();
      setAccountUser(res.data);
    } catch (err) {
      console.log("err");
      if (err.response.status === 401) {
        navigate("/login");
      }
      setResponse(ErrorHandler(err));
    }
  }

  const baseUrl = "https://api.heed.hng.tech";
  const submitCallback = () => {
    const config = {
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem("heedAccessToken")}`,
      },
    };
    first_name &&
      last_name &&
      location &&
      axios
        .post(
          baseUrl + "/agent",
          {
            first_name: first_name,
            last_name: last_name,
            location: location,
          },
          config
        )
        .then((res) => {
          if (res.status === 200) {
            toggleAccountModal();
            reset();
            getUser();
          }
        })
        .catch((err) => {
          console.log("this is the error:", err.response);
        });
  };

  useEffect(() => {
    getUser();
  }, []);

  const first_name = watch("first_name");
  const last_name = watch("last_name");
  const location = watch("location");

  const isValid = first_name && last_name && location;

  return (
    <>
      <SnackBar response={response} setResponse={setResponse} />
      <NewDesignSidebar
        toggleSidebar={toggleSidebar}
        needSearchMobile="needSearchMobile"
        closeSidebar={() => setToggleSidebar(!toggleSidebar)}
      >
        <div className={accountStyles.account__container}>
          <div
            className={
              accountModalIsActive
                ? `${accountStyles.active}
              ${accountStyles.add_agent__div}`
                : accountStyles.add_agent__div
            }
          >
            <div className={accountStyles.add_agent_modal__div}>
              <h2>Add new agent</h2>
              <p>
                Input the following information to add a new agent to your team
              </p>
              <form onSubmit={handleSubmit(submitCallback)}>
                <label htmlFor="first_name">
                  <span>First name</span>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    className={`${
                      errors.first_name && accountStyles.errorInput
                    } `}
                    {...register("first_name", {
                      required: "First name is required",
                      pattern: {
                        value: /^[a-z'-]+$/i,
                        message: "Please enter a valid first name",
                      },
                    })}
                  />
                  <p className={accountStyles.errorMsg}>
                    {errors.first_name?.message}
                  </p>
                </label>
                <label htmlFor="last_name">
                  <span>Last Name</span>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className={`${
                      errors.last_name && accountStyles.errorInput
                    } `}
                    {...register("last_name", {
                      required: "Last name is required",
                      pattern: {
                        value: /^[a-z'-]+$/i,
                        message: "Please enter a valid last name",
                      },
                    })}
                  />
                  <p className={accountStyles.errorMsg}>
                    {errors.last_name?.message}
                  </p>
                </label>
                <label htmlFor="location">
                  <span>Location</span>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className={`${
                      errors.location && accountStyles.errorInput
                    } `}
                    {...register("location", {
                      required: "Location is required",
                      pattern: {
                        value: /^[a-z '-]+$/i,
                        message: "Please enter a valid location",
                      },
                    })}
                  />
                  <p className={accountStyles.errorMsg}>
                    {errors.location?.message}
                  </p>
                </label>
                <div>
                  <label htmlFor="submit">
                    <button
                      type="submit"
                      id="submit"
                      disabled={!isValid}
                      className={`${isValid && accountStyles.submitValid}`}
                    >
                      Submit
                    </button>
                  </label>
                  <label htmlFor="reset-btn">
                    <button
                      type="reset"
                      id="reset-btn"
                      onClick={toggleAccountModal}
                    >
                      Cancel
                    </button>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <TopNav
            openSidebar={() => {
              setToggleSidebar(!toggleSidebar);
            }}
          />
          <div className={accountStyles.account__div}>
            <section className={accountStyles.mobile_head__section}>
              <button type="button" onClick={() => navigate(-1)}>
                <img src={chevronLeft} alt="left arrow" />
              </button>
              <h1>Profile</h1>
            </section>
            <div className={accountStyles.plan_info__div}>
              <p>You are using the limited free plan.</p>
              <p>Go unlimited with Pro version</p>
            </div>
            <h1 className={accountStyles.salutation}>Hi Heedr</h1>
            <div className={accountStyles.main_content__div}>
              <section className={accountStyles.profile__section}>
                <div className={accountStyles.user_profile__div}>
                  <div className={accountStyles.user_profile__img}>
                    {accountUser &&
                      (accountUser.company_logo_url ? (
                        <img
                          src={accountUser.company_logo_url}
                          alt="User's profile"
                        />
                      ) : (
                        accountUser.first_name[0] +
                        "" +
                        accountUser.last_name[0]
                      ))}
                  </div>
                  <div>
                    {accountUser && (
                      <h1>
                        {accountUser?.first_name + " " + accountUser?.last_name}
                      </h1>
                    )}
                    <p>Administrator</p>
                  </div>
                </div>
                <div className={accountStyles.profile__settings_btn}>
                  <Link to="/settings">Edit Profile</Link>
                </div>
              </section>
              <section className={accountStyles.body__section}>
                <div className={accountStyles.personal_info__div}>
                  <p>Personal Information</p>
                  <div>
                    <div>
                      <p>Email address</p>
                      <p>{accountUser?.email}</p>
                    </div>
                    {accountUser?.phone_number && (
                      <div>
                        <p>Phone Number</p>
                        <p>{accountUser?.phone_number}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className={accountStyles.company_info__div}>
                  <p>Company Information</p>
                  <div>
                    <div>
                      <p>Company name</p>
                      <p>{accountUser?.company_name}</p>
                    </div>
                    {accountUser?.company_address && (
                      <div>
                        <p>Address</p>
                        <p>{accountUser?.company_address}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className={accountStyles.agents__div}>
                  <span>
                    <p>Agents</p>
                    <button type="button" onClick={toggleAccountModal}>
                      <span>Add new</span>
                      <span>
                        <img src={plus} alt="plus icon" />
                      </span>
                    </button>
                  </span>
                  <div>
                    <ul>
                      {accountUser?.agents?.map((agent, index) => {
                        return agent ? (
                          <li key={index}>
                            <p>{agent.first_name + " " + agent.last_name}</p>
                            <p>{agent.location ? agent.location : "Abuja"}</p>
                          </li>
                        ) : (
                          <p>You have no agents yet.</p>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className={accountStyles.developer_tools__div}>
                  <p>Developer tools</p>
                  <div>
                    <p>API Key</p>
                    <div>
                      <p>{accountUser?.api_key}</p>
                      <button type="button">Refresh</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </NewDesignSidebar>
    </>
  );
}

export default Account;
