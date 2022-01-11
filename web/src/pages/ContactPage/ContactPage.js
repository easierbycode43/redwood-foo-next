// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import { Form, Label, TextAreaField, TextField, Submit } from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => console.log(data)

  return (
    <BlogLayout>
      <MetaTags
        title="Contact"
        // description="Contact description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>ContactPage</h1>
      <Form onSubmit={onSubmit}>
        <Label name="name" />
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />

        <Label name="email" />
        <TextField
          name="email"
          errorClassName="error"
          validation={{ required: true, pattern: { value: /[^@]+@[^.]+\..+/ } }}
        />

        <Label name="message" />
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />

        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
