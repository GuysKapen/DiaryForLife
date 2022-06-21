import React from 'react';

const Footer = () => {
    return (
      <section className='px-4 py-16'>

        <div className='flex justify-between ml-4'>
          <div>
            <h1 className='text-4xl text-gray-800 font-brush-script'>Omori</h1>
          </div>
          <div>
            <ul className='app__navbar-links flex justify-end'>
              {["privacy policy", "terms", "contact us"].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                  <div />
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='mt-4'>
          <p className="p-text text-right mx-4">© 2021 OmoriDiary Team</p>
        </div>
      </section>
    );
}

export default Footer;