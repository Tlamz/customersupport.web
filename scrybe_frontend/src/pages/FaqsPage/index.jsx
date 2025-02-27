/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-param-reassign */
import React, { useState } from "react";
import styles from "./style.module.scss";
import FaqComponent from "./FaqComponent";
import { Hero } from "./assets";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavbarFree";
function FAQs() {
  React.useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  const [faqs, setFaqs] = useState([
    {
      question: "How can I register?",
      answer:
        "You can register on the Signup page of the web application Every user is entitled to limited free use of our application with just a quick registration. After entering the required data and accepting the Privacy Policy and Terms of Use, we automatically email you to confirm the registration. The account can be activated by clicking on the ‘Confirm registration’ link in the e-mail. After the registration, each user has a free but limited Starter package. If registering with a Facebook account, no confirmation is required.",
      open: false,
    },
    {
      question: "What are the limitations of the free package?",
      answer:
        "You Can only upload a Minute worth of audio files for transcription and sentimental analysis on this package",
      open: false,
    },
    {
      question: "What formats can I use for file upload?",
      answer:
        "For file upload, the supported extensions are: .wav, .mp3, .m4a, .ogg, .mp4, .webm, .mov, and .opus.",
      open: false,
    },
    {
      question: "What are the limitations of the uploaded materials?",
      answer: "Users can upload files with a maximum size of 2 GB.",
      open: false,
    },
    {
      question: "How can I have the best-quality of transcript and analysis?",
      answer:
        "The quality of the microphone, (mobile or laptop built-in microphone, headset, external microphone, or other devices) the distance between the speaker and the microphone, the volume of the speech and the level of background noises affect the estimated 95% punctuality of the transcript. The better the conditions while recording, the better transcript results can be reached. Before dictation, you can check whether your microphone is properly connected and what recording quality is expected with the device used for dictation.",
      open: false,
    },
    {
      question: "Who has access to my data?",
      answer:
        "Audio materials uploaded by the subscriber or recorded with a microphone in the Alrite application, as well as related text files, can only be accessed by the subscriber and (in case of business use) by users associated with the subscriber! The subscriber has the exclusive right to view, download and use the audio and text files for any other purpose. The data may only be accessed for service purposes by specialists authorized by our company, in compliance with strict security regulations. Our company does not use this data to improve the deep learning-based speech recognition and word processing algorithms of the Alrite system, or to develop Alrite for functional purposes - other procedures and publicly available, processable data files are available to for this purpose.Data from our business subscribers using the system's on-premise infrastructure is stored in their internal server environment, ensuring maximum protection of business data.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className={styles.faq__wrapper}>
      <NavBar />

      <div className={styles.faq__hero}>
        <div className={styles.faqFlex}>
          <div className={styles.FAQs}>
            <div className={styles.faqHero__content}>
              <div className={styles.h1}>
                <h1>
                  Get the answers you're looking for on <span>Heed</span>
                </h1>
              </div>
              <div className="styles.faqImg">
                <img src={Hero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.faq__section}>
        <div className={styles.faq__title}>
          <h4>Frequently Asked Questions</h4>
          <p>Need Some Answers?</p>
        </div>
        <div className={styles.faq__accordion}>
          <div className="faqs">
            {faqs.map((faq, i) => (
              <FaqComponent
                faq={faq}
                index={i}
                key={i + 1}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQs;
