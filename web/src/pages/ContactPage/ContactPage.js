// import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import {
  FieldError,
  Form,
  Label,
  TextAreaField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const [create] = useMutation(CREATE_CONTACT)

  const onSubmit = (data) => create({ variables: { input: data } })

  return (
    <BlogLayout>
      <MetaTags
        title="Contact"
        // description="Contact description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>ContactPage</h1>

      {/* config prop is passed straight in to react-hook-form's useForm and can so take all the available config options */}
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label errorClassName="error" name="name" />
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError className="error" name="name" />

        <Label errorClassName="error" name="email" />
        <TextField
          name="email"
          errorClassName="error"
          validation={{ required: true, pattern: { value: /[^@]+@[^.]+\..+/ } }}
        />
        <FieldError className="error" name="email" />

        <Label errorClassName="error" name="message" />
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError
          style={{ display: 'block' }}
          className="error"
          name="message"
        />

        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
