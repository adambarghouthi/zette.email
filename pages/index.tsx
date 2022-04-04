import React, { useState } from "react"
import type { NextPage } from 'next'
import Head from 'next/head'
import Textfield from '../components/Textfield'
import { sendEmail } from '../lib/apiRequests'

const Home: NextPage = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTextfieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleButtonClick = async () => {
    setLoading(true)
    setSuccess('')
    setError('')

    try {
      await sendEmail(email, "hi", "Hello World!")
      setSuccess("Email sent! Check spam if u don't see it :)")
    } catch (error: any) {
      console.log(error)
      setError(error.message)
    }

    setLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Zette Emails</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mb-3 text-6xl font-bold">
          Zette{' '}
          <span className="text-blue-600">
            Emails
          </span>
        </h1>

        <div className="mb-3">
          <Textfield
            label="Email"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={email}
            onChange={handleTextfieldChange} />
        </div>

        {error && <p className="mb-3 text-red-500">{error}</p>}
        {success && <p className="mb-3 text-green-500">{success}</p>}

        <button
          type="button"
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleButtonClick}
        >
          { loading ? 'Sending...' : 'Send email' }
        </button>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Made with ❤️ by Adam Albarghouthi
      </footer>
    </div>
  )
}

export default Home
