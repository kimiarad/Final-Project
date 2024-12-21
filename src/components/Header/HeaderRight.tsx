import { Link } from 'react-router-dom';

const HeaderRight = (): JSX.Element => {

  return (
    <div className='header-right no-select'>
      <div className='flex flex-center'>
        <ul className='header-icons nowrap'>
          <li>
            <Link to=''>
              <i className='material-icons'>search</i>
            </Link>
          </li>
          <li>
            <Link to=''>
              <span className='notification-badge'>23</span>
              <i className='material-icons'>notifications</i>
            </Link>
          </li>
        </ul>
        <ul className='header-user nowrap'>
          <li>
            <Link to=''>
              <span>Kimia Rad</span>
              <span>@KRad</span>
            </Link>
          </li>
          <li>
            <Link to=''>
              <div
                className='profile-picture cover'
                style={{
                  backgroundImage: `url('')`,
                }}
              />
            </Link>
          </li>
          <li className='responsive-hide'>
            <Link to='' className='signout'>
              <i className='material-icons'>power_settings_new</i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderRight;
