PARENTGUARD PRODUCTION WEBSITE
==============================

This package is a responsive, white-background, production-oriented static website for:
- ParentGuard (parent app)
- ChildGuard (supervised Android app)
- Installer Wizard
- Privacy / Terms / Data & Permissions / Monitoring Disclosure
- Account Deletion
- Support

FIRST STEPS
-----------
1. Open assets/js/config.js.
2. Replace YOUR_WIZARD_URL_HERE with the real Wizard URL.
3. Replace YOUR_PARENTGUARD_PLAY_STORE_URL_HERE with the official Play Store URL.
4. Optionally set YOUR_CHILD_APK_URL_HERE if you publish a direct ChildGuard release.
5. Replace YOUR-DOMAIN.example in sitemap.xml and robots.txt.
6. Replace placeholder legal/retention/service-provider language with your exact production facts.
7. Add your screenshots to /screenshots.
8. Replace the temporary logo in /assets/img if you have final artwork.
9. Deploy over HTTPS.

IMPORTANT
---------
The site is intentionally careful not to claim that live media is permanently recorded or that account deletion is automated unless your backend actually implements those behaviors.

Google Play compliance is determined by the actual APK, SDKs, disclosures, permissions, Play Console declarations, Data Safety form and account/deletion implementation as well as this website.
