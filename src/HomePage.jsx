import React from 'react';
import "./App.css";

const Homepage = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="navbar">
          <div className="navbar-2">
            <div className="text-wrapper">About</div>
            <div className="text-wrapper-2">Donate</div>
            <div className="text-wrapper-3">Conatct</div>
            <div className="text-wrapper-4">Profile</div>
          </div>
        </div>
        <div className="text-wrapper-5">DiaryByte</div>
        <div className="overlap">
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="ellipse-2" />
            <img className="poetry" alt="Poetry" src="poetry.png" />
            <p className="p">Your Personal Hideaway DiaryByte - Keep Your Thoughts Safe and Sound</p>
            <p className="text-wrapper-6">Say It All, Keep It Safe: DiaryByte, Where Your Thoughts Stay Yours</p>
          </div>
          <div className="div-wrapper">
            <button className="text-wrapper-7">Join</button>
          </div>
          <div className="overlap-2">
            <button className="text-wrapper-8">Log in</button>
          </div>
        </div>
        <div className="ellipse-3" />
        <img className="fountain-pen" alt="Fountain pen" src="fountain-pen.png" />
        <div className="overlap-3">
          <p className="your-daily-sanctuary">
            Your daily sanctuary to document life&#39;s nuances, from big events to small joys
          </p>
          <div className="text-wrapper-9"></div>
        </div>
        <p className="text-wrapper-10">Embark on a Journey of Self-Discovery</p>
        <img className="fingerprint" alt="Fingerprint" src="fingerprint.png" />
        <div className="overlap-4">
          <div className="ellipse-4" />
          <p className="element-free-sign-up-join">
            1️⃣ Free Sign Up: Join our community, kickstart your digital journaling journey – it&#39;s easy and free.
            <br />
            2️⃣ Daily Entries: Effortlessly capture your day&#39;s essence with our intuitive interface.
            <br />
            3️⃣ Privacy Assured: Your journal, your space – DiaryByte ensures your entries are secure and for your eyes
            only.
          </p>
          <img className="book" alt="Book" src="book.png" />
        </div>
        <div className="overlap-group-2">
          <p className="private-easy-secure">
            🔒 Private &amp; Easy: Secure, hassle-free journaling in a user-friendly space.
            <br />
            Express Yourself: Whether it&#39;s your day&#39;s story, a gratitude note, or a burst of creativity,
            DiaryByte lets you be you.
          </p>
          <div className="text-wrapper-11"><br></br></div>
        </div>
        <div className="overlap-5">
          <p className="text-wrapper-12">
            DiaryByte - Your Daily Journal, Your Digital Sanctuary. © 2024. All rights reserved. 📖✨ #DiaryByte
            #DigitalJournal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
