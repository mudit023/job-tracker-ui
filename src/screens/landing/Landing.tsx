import './landing.scss';

const LandingScreen  = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <span>Job 
            <span>
            <i className="fi fi-ss-marker logo-icon"></i></span> <br/> Tracker</span>
          <span></span>
        </div>
        <nav>
            <button className='sign-in-button'>
              Sign In
            </button>
        </nav>
      </header>
    </>
  )
}

export default LandingScreen;