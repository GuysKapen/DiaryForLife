import React from 'react';

const Footer = () => {
  return (
    <section className='px-4 py-16'>

      <div className='flex justify-between ml-4'>
        <div>
          <h1 className='text-4xl text-gray-800 font-brush-script'>Omoir</h1>
        </div>
        <div>
          <ul className='app__navbar-links flex justify-end'>
              <li className='app__flex p-text' key={`link-policy`}>
                <div />
                <a href={`/policy`}>Privacy Policy</a>
              </li>
              <li className='app__flex p-text' key={`link-terms`}>
                <div />
                <a href={`/term`}>Terms</a>
              </li>
              <li className='app__flex p-text' key={`link-contact`}>
                <div />
                <a href={`#`}>Contact Us</a>
              </li>
          </ul>
        </div>
      </div>
      <div className='mt-4'>
        <p className="p-text text-right mx-4">© 2021 Omoir Diary Team</p>
      </div>
    </section>
  );
}

export default Footer;