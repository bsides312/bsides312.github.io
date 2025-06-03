# BSides312 - Chicago's Community-Driven Infosec and Hacker Conference Website

This is the official website for BSides312, Chicago's community-driven cybersecurity conference. The site provides information about the annual event including:

- Conference details and registration
- Speaker information
- Sponsorship opportunities
- Volunteer information
- Code of conduct
- Contact form functionality

## Technologies Used

- HTML5
- CSS3 (with Sass preprocessing)
- JavaScript
- PHP (for contact form)
- Bootstrap 5.3.3 framework
- GitHub Pages for hosting

The website is built as a static site with dynamic contact form functionality, using Sass for CSS preprocessing, and hosted on GitHub Pages.

## Common Modifications
1. **Updating Speakers**:
   - Edit speaker details in the JSON-LD script (lines 65-174)
   - Update speaker images in `/assets/img/speakers/`
   - Add a new speaker section in speaker-bios.html, including talk title, abstract and bio

2. **Changing Schedule**:
   - Update the JSON-LD script

3. **Updating Supporters**:
   - Add/remove supporter logos in `/assets/img/supporters/`
   - Add the image to the proper Supporters tier in index.html, and provide hyperlink to their website 

4. **Changing Venue Details**:
   - Update venue info in about section (lines 640-689)
   - Modify venue images in `/assets/img/venue-gallery/`

### Styling
- CSS is compiled from Sass files in `/assets/scss/`
- Main stylesheet is `/assets/css/style.css` (compiled from `/assets/scss/style.scss`)