import React from 'react';
import Header from '../components/Header';

const Legal = () => {
    return (
        <div>
            <Header/>
            <div className='legal'>

            <h1>Legal Notice</h1>

      <h2>Publisher Information:</h2>
      <p>
        Name: Matteo Chanté-Biyikli<br />
        Address: 9 Clos Justin, 84800 L'Isle-sur-la-Sorgue, France<br />
        Phone Number: 06 41 37 84 41<br />
        Email Address: matteochantebiyikli@gmail.com
      </p>

      <h2>Website Host:</h2>
      <p>
        Name: Vercel<br />
        Address: [host's address]
      </p>

      <h2>Intellectual Property:</h2>
      <p>
        The content of this website, including text, images, videos, logos, and graphics from the Frontend Mentor
        project, is protected by French and international copyright and intellectual property laws. Any unauthorized
        reproduction, distribution, modification, or use of the content is strictly prohibited without the prior written
        permission of the owner.
      </p>

      <h2>External Links:</h2>
      <p>
        This website may contain links to third-party websites. We assume no responsibility for the content or privacy
        practices of these websites.
      </p>

      <h2>Limitation of Liability:</h2>
      <p>
        We strive to provide accurate and up-to-date information on this website. However, we cannot guarantee the
        accuracy, completeness, or relevance of the information provided. We disclaim any liability for the use or
        interpretation of the information on this site.
      </p>

      <h2>Changes to the Legal Notice:</h2>
      <p>
        We reserve the right to modify these legal notices at any time without notice. It is your responsibility to
        regularly review this page for any updates.
      </p>
        </div>
            </div>
    );
};

export default Legal;