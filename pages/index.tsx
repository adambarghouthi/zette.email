import React, { useState } from "react"
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Textfield from '../components/Textfield'

const Home: NextPage = () => {
  const [email, setEmail] = useState('')

  const handleTextfieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
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
          <a className="text-blue-600" href="https://nextjs.org">
            Emails
          </a>
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

        <button
          type="button"
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send email
        </button>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
