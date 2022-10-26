<div id="contact-container">
  <div class="container">
    <h3 class="section-header animate" id="contact-header">Contact Me</h3>
    <p class="contact-text animate" id="contact-text">Have any questions or just want to talk?</p>
    <form id="contact-form" class="animate" onsubmit="submitMessage()">
      <div class="form-element">
        <label>
          <b>Your Name</b>
          <input type="text" name="contactName" id="contactName" placeholder="Enter your name...">
        </label>
      </div>
      <div class="form-element">
        <label>
          <b>Your Email</b>
          <input type="email" name="contactEmail" id="contactEmail" required placeholder="Enter your email address...">
        </label>
      </div>
      <div class="form-element">
        <label>
          <b>Your Message</b>
          <textarea name="contactMessage" id="contactMessage" required placeholder="Enter a message for me..."></textarea>
        </label>
      </div>
      <button class="btn full-width" id="submit-btn"><span>SUBMIT MESSAGE</span> <i class="mdi mdi-send"></i></button>
    </form>
  </div>
</div>