import {IoBackspace} from 'react-icons/io5'
import { Link } from 'react-router-dom'
function DoctorLogin() {
  return (
    <>
        <header className='header'>
    <div className='logo'>
        <Link to='/'> <h1>e-pacijent</h1> </Link>
        </div>
        <p style={{ fontSize: 100 }}> 👨‍⚕️</p>
        <ul>
            <li>
                <h1>Prijava liječnika
                </h1>
                <Link to='/'>
                    <IoBackspace size={40}></IoBackspace>
                </Link>
            </li>
        </ul>

    </header>
    <section className='form'>
        <form >
          <div className='form-group'>
            <input
              type='username'
              className='form-control'
              id='username'
              name='username'
              placeholder='Korisničko ime'
            />
          </div>

          <div className='form-group'>
            <input
              type='doctorcode'
              className='form-control'
              id='doctorcode'
              name='doctorcode'
              placeholder='Kod liječnika'
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              placeholder='Lozinka'
            />
          </div>

          <div className='form-group'>
          <Link to='/patlist'>
              
              <button  type='submit' className='btn btn-block'>
                Prijava
              </button>
  
              </Link>
  
          </div>
        </form>
      </section>


    </>

  )
}

export default DoctorLogin