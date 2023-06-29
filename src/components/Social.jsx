import React from "react";

const Social = () => {
  return (
    <section>
      <div className="social_app text-purple-500 flex md:flex-col items-center text-2xl md:text-xl gap-3 md:gap-2">
        <a href="https://www.instagram.com/" target="_blank">
          <i class="uil uil-instagram"></i>
        </a>
        <a href="https://dribbble.com/" target="_blank">
          <i class="uil uil-dribbble"></i>
        </a>
        <a href="https://github.com/" target="_blank">
          <i class="uil uil-github-alt"></i>
        </a>
      </div>
    </section>
  );
};

export default Social;
