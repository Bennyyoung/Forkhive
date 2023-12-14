import React, { useState } from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import { Link } from 'gatsby'
import { navigate } from 'gatsby-link';
import Form from '../../components/Modules/Form/Form';
import { IForm } from '../../components/Interface/Form/IForm';
import { IHandleAttachment } from '../../components/Interface/Form/IHandleAttachment';
import { IHandleChange } from '../../components/Interface/Form/IHandleChange';
import { IHandleSubmit } from '../../components/Interface/Form/IHandleSubmit';
import encode from '../../utils/encode';

export default function ReactDeveloperForm() {
  const [state, setState] = useState<IForm>({})

  const handleChange = (e: IHandleChange) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleAttachment = (e: IHandleAttachment) => {
    setState({ ...state, [e.target.name]: e.target.files?.[0] || '' })
  }

  const handleSubmit = (e: IHandleSubmit) => {
    e.preventDefault()
    const form = e.currentTarget

    if (form) {
      fetch('/', {
        method: 'POST',
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => {
          const action = form.getAttribute('action')
          if (action) {
            navigate(action)
          }
        })
        .catch((error) => alert(error))
    }
  }

  return (
    <Layout bodyClass="page-react-developer-form">
      <SEO title="React Developer Form" meta={[]} keywords={[]} />
      <div className="intro intro-small">
        <div className="container">
          <Link to="/react-developer" className="button">
            Lets go back
          </Link>
          <div className="row">
            <div className="col-12">
              <h1>React Developer</h1>
            </div>
          </div>
        </div>
      </div>

      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleAttachment={handleAttachment}
        name={'react-developer-application-form'}
      />
    </Layout>
  )
}