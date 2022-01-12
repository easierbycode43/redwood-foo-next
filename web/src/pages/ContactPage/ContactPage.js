// import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import {
  FieldError,
  Form,
  FormError,
  Label,
  TextAreaField,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()

  const [create, { error, loading }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      formMethods.reset()
      alert('Saved!')
    },
  })

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
      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        formMethods={formMethods}
        error={error}
      >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />
        <Label errorClassName="error" name="name">
          Your Name
        </Label>
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError className="error" name="name" />

        <Label errorClassName="error" name="email">
          Your Email
        </Label>
        <TextField
          name="email"
          errorClassName="error"
          // validation={{ required: true, pattern: { value: /[^@]+@[^.]+\..+/ } }}
          validation={{ required: true }}
        />
        <FieldError className="error" name="email" />

        <Label errorClassName="error" name="message">
          Your Message
        </Label>
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

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
