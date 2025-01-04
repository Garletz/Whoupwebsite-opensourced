// Common footer component
export const renderFooter = () => `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-section">
          <h3>About Who_up</h3>
          <ul class="footer-links">
            <li><a href="/pages/terms.html">Terms of Service</a></li>
            <li><a href="/pages/privacy.html">Privacy Policy</a></li>
            <li><a href="/pages/security.html">Security</a></li>
            <li><a href="/pages/contact.html">Contact Us</a></li>
            <li><a href="/pages/delete-account.html">Delete Account</a></li>
            <li><a href="/pages/pricing.html">Pricing Explanation</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Verification</h3>
          <ul class="footer-links">
            <li><a href="/pages/verification.html">Ask for Verification</a></li>
            <li><a href="/pages/promotion.html">Promotion Link</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Connect</h3>
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-link"><i class="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Who_up. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;