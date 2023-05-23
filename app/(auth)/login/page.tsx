import LoginForm from '@/app/(auth)/login/LoginForm'
export default function Login() {
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center gap-4 py-12 sm:px-6 lg:gap-8 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-10 w-auto'
            src='/spaceship.png'
            alt='lunarship-logo'
          />
          <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
            Sign in to your account
          </h2>
        </div>

        <LoginForm />
      </div>
    </>
  )
}
